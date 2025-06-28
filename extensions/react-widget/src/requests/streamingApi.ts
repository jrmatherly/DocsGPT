import { FEEDBACK } from "@/types";

interface HistoryItem {
  prompt: string;
  response?: string;
}

interface FetchAnswerStreamingProps {
  question?: string;
  apiKey?: string;
  selectedDocs?: string;
  history?: HistoryItem[];
  conversationId?: string | null;
  apiHost?: string;
  onEvent?: (event: MessageEvent) => void;
}

export interface FeedbackPayload {
  question?: string;
  answer?: string;
  feedback: string | null;
  apikey?: string;
  conversation_id: string;
  question_index: number;
}

export function fetchAnswerStreaming({
  question = '',
  apiKey = '',
  history = [],
  conversationId = null,
  apiHost = '',
  onEvent = () => { console.log("Event triggered, but no handler provided."); }
}: FetchAnswerStreamingProps): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const body = {
      question: question,
      history: JSON.stringify(history),
      conversation_id: conversationId,
      model: 'default',
      api_key: apiKey
    };
    fetch(apiHost + '/stream', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (!response.body) throw Error('No response body');

        const reader = response.body.getReader();
        const decoder = new TextDecoder('utf-8');
        let counter = 0;
        const processStream = ({
          done,
          value,
        }: ReadableStreamReadResult<Uint8Array>) => {
          if (done) {
            resolve();
            return;
          }

          counter += 1;

          const chunk = decoder.decode(value);

          const lines = chunk.split('\n');

          for (let line of lines) {
            if (line.trim() == '') {
              continue;
            }
            if (line.startsWith('data:')) {
              line = line.substring(5);
            }

            const messageEvent = new MessageEvent('message', {
              data: line,
            });

            onEvent(messageEvent); // handle each message
          }

          reader.read().then(processStream).catch(reject);
        };

        reader.read().then(processStream).catch(reject);
      })
      .catch((error) => {
        console.error('Connection failed:', error);
        reject(error);
      });
  });
}


export  const sendFeedback = (payload: FeedbackPayload, apiHost: string): Promise<Response> => {
  return fetch(`${apiHost}/api/feedback`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      question: payload.question,
      answer: payload.answer,
      feedback: payload.feedback,
      api_key: payload.apikey,
      conversation_id: payload.conversation_id,
      question_index: payload.question_index
    }),
  });
};
