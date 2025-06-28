<h1 align="center">
  DocsGPT  🦖
</h1>

<p align="center">
  <strong>Open-Source RAG Assistant</strong>
</p>

<p align="left">
  <strong><a href="https://www.docsgpt.cloud/">DocsGPT</a></strong> is an open-source genAI tool that helps users get reliable answers from any knowledge source, while avoiding hallucinations. It enables quick and reliable information retrieval, with tooling and agentic system capability built in.
</p>

<div align="center">
  
  <a href="https://github.com/arc53/DocsGPT">![link to main GitHub showing Stars number](https://img.shields.io/github/stars/arc53/docsgpt?style=social)</a>
  <a href="https://github.com/arc53/DocsGPT">![link to main GitHub showing Forks number](https://img.shields.io/github/forks/arc53/docsgpt?style=social)</a>
  <a href="https://github.com/arc53/DocsGPT/blob/main/LICENSE">![link to license file](https://img.shields.io/github/license/arc53/docsgpt)</a>
  <a href="https://www.bestpractices.dev/projects/9907"><img src="https://www.bestpractices.dev/projects/9907/badge" alt="Best Practices"></a>

  <a href="https://docs.docsgpt.cloud/quickstart">⚡️ Quickstart</a>
  <br>
  <a href="https://docs.docsgpt.cloud/">📖 Documentation</a> • <a href="https://blog.docsgpt.cloud/">🗞 Blog</a>
  <br>

</div>
<div align="center">
<img src="https://d3dg1063dc54p9.cloudfront.net/videos/demov7.gif" alt="video-example-of-docs-gpt" width="800" height="450">
</div>
<h3 align="left">
  <strong>Key Features:</strong>
</h3>
<ul align="left">
    <li><strong>🗂️ Wide Format Support:</strong> Reads PDF, DOCX, CSV, XLSX, EPUB, MD, RST, HTML, MDX, JSON, PPTX, and images.</li>
    <li><strong>🌐 Web & Data Integration:</strong> Ingests from URLs, sitemaps, Reddit, GitHub and web crawlers.</li>
    <li><strong>✅ Reliable Answers:</strong> Get accurate, hallucination-free responses with source citations viewable in a clean UI.</li>
    <li><strong>🔑 Streamlined API Keys:</strong>  Generate keys linked to your settings, documents, and models, simplifying chatbot and integration setup.</li>
    <li><strong>🔗 Actionable Tooling:</strong> Connect to APIs, tools, and other services to enable LLM actions.</li>
    <li><strong>🧩 Pre-built Integrations:</strong> Use readily available HTML/React chat widgets, search tools, Discord/Telegram bots, and more.</li>
    <li><strong>🔌 Flexible Deployment:</strong> Works with major LLMs (OpenAI, Google, Anthropic) and local models (Ollama, llama_cpp).</li>
    <li><strong>🏢 Secure & Scalable:</strong> Run privately and securely with Kubernetes support, designed for enterprise-grade reliability.</li>
</ul>

## Roadmap

- [x] Full GoogleAI compatibility (Jan 2025)
- [x] Add tools (Jan 2025)
- [x] Manually updating chunks in the app UI (Feb 2025)
- [x] Devcontainer for easy development (Feb 2025)
- [x] ReACT agent (March 2025)
- [x] Chatbots menu re-design to handle tools, agent types, and more (April 2025)
- [x] New input box in the conversation menu (April 2025)
- [x] Add triggerable actions / tools (webhook) (April 2025)
- [x] Agent optimisations (May 2025)
- [ ] Anthropic Tool compatibility (June 2025)
- [ ] MCP support (June 2025)
- [ ] Add OAuth 2.0 authentication for tools and sources (July 2025)
- [ ] Agent scheduling

## QuickStart

> [!Note]
> Make sure you have [Docker](https://docs.docker.com/engine/install/) installed

A more detailed [Quickstart](https://docs.docsgpt.cloud/quickstart) is available in our documentation

1. **Clone the repository:**

      ```bash
      git clone https://github.com/arc53/DocsGPT.git
      cd DocsGPT
      ```

    **For macOS and Linux:**

2. **Run the setup script:**

      ```bash
      ./setup.sh
      ```

    **For Windows:**

3. **Run the PowerShell setup script:**

      ```powershell
      PowerShell -ExecutionPolicy Bypass -File .\setup.ps1
      ```

Either script will guide you through setting up DocsGPT. Four options available: using the public API, running locally, connecting to a local inference engine, or using a cloud API provider.  Scripts will automatically configure your `.env` file and handle necessary downloads and installations based on your chosen option.

**Navigate to <http://localhost:5173/>**

To stop DocsGPT, open a terminal in the `DocsGPT` directory and run:

```bash
docker compose -f deployment/docker-compose.yaml down
```

(or use the specific `docker compose down` command shown after running the setup script).

> [!Note]
> For development environment setup instructions, please refer to the [Development Environment Guide](https://docs.docsgpt.cloud/Deploying/Development-Environment).

## Contributing

Please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file for information about how to get involved. We welcome issues, questions, and pull requests.

## Architecture

![Architecture chart](https://github.com/user-attachments/assets/fc6a7841-ddfc-45e6-b5a0-d05fe648cbe2)

## Project Structure

- Application - Flask app (main application).

- Extensions - Extensions, like react widget or discord bot.

- Frontend - Frontend uses <a href="https://vitejs.dev/">Vite</a> and <a href="https://react.dev/">React</a>.

- Scripts - Miscellaneous scripts.

## License

The source code license is [MIT](https://opensource.org/license/mit/), as described in the [LICENSE](LICENSE) file.
