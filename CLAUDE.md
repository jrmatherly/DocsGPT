# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DocsGPT is an open-source RAG (Retrieval-Augmented Generation) assistant that helps users get reliable answers from any knowledge source while avoiding hallucinations. It's built with a Flask backend, React frontend, and supports multiple LLM providers with agentic capabilities.

## Architecture

### Core Components
- **Backend**: Flask application (`application/`) with REST API endpoints
- **Frontend**: React/TypeScript application (`frontend/`) using Vite and Tailwind CSS
- **Worker**: Celery worker for background tasks (document processing, embeddings)
- **Extensions**: Chat widgets, browser extensions, and bot integrations (`extensions/`)
- **Docs**: Documentation site using Next.js (`docs/`)

### Key Services
- **MongoDB**: Document and conversation storage
- **Redis**: Caching and Celery message broker
- **Qdrant**: Vector database for embeddings and similarity search

### Main Modules
- **LLM Providers** (`application/llm/`): OpenAI, Anthropic, Google AI, Groq, HuggingFace, and local models
- **Document Parsers** (`application/parser/`): PDF, DOCX, CSV, XLSX, EPUB, MD, HTML, JSON, PPTX, images
- **Vector Stores** (`application/vectorstore/`): Faiss, Qdrant, MongoDB, LanceDB, Milvus, Elasticsearch
- **Agents** (`application/agents/`): Classic and ReACT agents with tool integration
- **Tools** (`application/agents/tools/`): API, web scraping, database, messaging integrations

## Development Commands

### Docker Development Setup
```bash
# Quick setup using setup script
./setup.sh  # macOS/Linux
# or
PowerShell -ExecutionPolicy Bypass -File .\setup.ps1  # Windows

# Start development environment (services only)
docker compose -f deployment/docker-compose-dev.yaml up -d

# Stop services
docker compose -f deployment/docker-compose-dev.yaml down

# Full application with Docker
docker compose -f deployment/docker-compose.yaml up -d
docker compose -f deployment/docker-compose.yaml down
```

### Frontend Development
```bash
cd frontend/
npm install
npm run dev          # Start development server (port 5173)
npm run build        # Build for production
npm run lint         # Run ESLint
npm run lint-fix     # Fix linting issues
npm run format       # Format with Prettier
```

### Backend Development
```bash
cd application/
# Install dependencies from requirements.txt
pip install -r requirements.txt

# Run Flask app directly (requires services)
python app.py

# Run Celery worker
celery -A application.app.celery worker -l INFO -B
```

### Documentation Site
```bash
cd docs/
npm install
npm run dev          # Start development server
npm run build        # Build static site
```

## Environment Configuration

Environment variables are configured via `.env` file in the deployment directory. Key variables:
- `API_KEY`: LLM provider API key
- `LLM_PROVIDER`: openai, anthropic, google, groq, etc.
- `LLM_NAME`: Specific model name
- `MONGO_URI`: MongoDB connection string
- `CELERY_BROKER_URL`: Redis URL for Celery
- `CACHE_REDIS_URL`: Redis URL for caching

## Testing

Currently, the project has basic tests in the `tests/` directory focusing on:
- LLM provider integrations (`tests/llm/`)
- Core application functionality (`tests/test_app.py`)
- Document parsing (`tests/test_openapi3parser.py`)

No specific test runners are configured in package.json or requirements.txt.

## Key Development Patterns

### Adding New LLM Providers
1. Create provider class in `application/llm/` inheriting from `BaseLLM`
2. Add provider to `llm_creator.py`
3. Configure in settings and environment variables

### Adding New Document Parsers
1. Create parser in `application/parser/file/` inheriting from `BaseParser`
2. Register in parser factory/creator pattern

### Adding New Tools for Agents
1. Create tool class in `application/agents/tools/` inheriting from `BaseTool`
2. Register in `tool_manager.py`
3. Add configuration UI in frontend if needed

### Frontend Component Structure
- Components in `frontend/src/components/`
- Redux slices for state management in respective feature directories
- TypeScript types in `types/` subdirectories
- API services in `frontend/src/api/`

## Deployment Options

- **Docker Compose**: Primary deployment method with multiple compose files
- **Kubernetes**: K8s manifests in `deployment/k8s/`
- **Cloud Platforms**: Specific guides for Railway, AWS Lightsail, etc. in docs

## Extensions and Integrations

- **React Widget** (`extensions/react-widget/`): Embeddable chat component
- **Chrome Extension** (`extensions/chrome/`): Browser integration
- **Discord/Slack Bots** (`extensions/discord/`, `extensions/slack-bot/`)
- **Chatwoot Integration** (`extensions/chatwoot/`)