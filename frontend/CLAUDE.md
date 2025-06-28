# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the frontend for DocsGPT, an open-source RAG (Retrieval-Augmented Generation) assistant that helps users get reliable answers from knowledge sources while avoiding hallucinations. The frontend is built with React, Vite, TypeScript, and Tailwind CSS.

## Development Commands

### Essential Commands
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (TypeScript compilation + Vite build)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint on all TypeScript/JavaScript files
- `npm run lint-fix` - Auto-fix ESLint issues
- `npm run format` - Format code with Prettier

### Pre-commit Setup
The project uses Husky for git hooks and lint-staged for running checks on staged files. The `prepare` script configures Husky hooks.

## Architecture

### State Management
- **Redux Toolkit** is used for global state management
- Store is configured in `src/store.ts` with preloaded state from localStorage
- Key slices:
  - `conversationSlice` - Chat messages and conversation state
  - `sharedConversationSlice` - Shared conversation functionality  
  - `preferenceSlice` - User preferences, API keys, documents, agents
  - `uploadSlice` - File upload state
  - `agentPreviewSlice` - Agent preview functionality

### Key Features and Components

#### Agent System
- **Agents**: AI assistants with configurable tools and behaviors
- Core components: `agents/` directory with AgentCard, NewAgent, SharedAgent
- Agent management through Redux state with pinning/unpinning functionality
- Recent agents are displayed in navigation sidebar

#### Conversation System
- **Chat Interface**: Main conversation UI in `conversation/` directory
- Message handling with support for sources, tools, and markdown rendering
- Conversation persistence and sharing capabilities
- Real-time message streaming

#### Navigation Structure
- **Main Navigation**: `Navigation.tsx` - Sidebar with agents, conversations, settings
- **Mobile Responsive**: Hamburger menu for mobile/tablet views
- **Route Structure**:
  - `/` - Main conversation interface
  - `/settings/*` - Settings pages (API keys, documents, prompts, tools, etc.)
  - `/agents/*` - Agent management
  - `/share/:identifier` - Shared conversations
  - `/shared/agent/:agentId` - Shared agents

#### Settings System
- **Modular Settings**: Multiple setting pages in `settings/` directory
- API key management, document upload, tool configuration
- Analytics and logs monitoring
- Widget configuration for external integrations

### API Integration
- API client in `api/client.ts` with service abstractions
- Services for conversations and user management
- Authentication via JWT tokens stored in localStorage

### UI/UX Patterns
- **Dark Theme Support**: Comprehensive dark mode with `useDarkTheme` hook
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modal System**: Centralized modal management with `WrapperModal`
- **File Upload**: Drag-and-drop file upload with preview
- **Internationalization**: i18next for multi-language support

### Key Hooks
- `useTokenAuth` - Authentication state and token management
- `useDefaultDocument` - Default document selection
- `usePromptManager` - Prompt template management
- `useMediaQuery` - Responsive breakpoint detection
- `useDarkTheme` - Dark mode toggle and persistence

## Development Guidelines

### Code Style
- TypeScript with strict type checking
- ESLint configuration with Prettier integration
- Tailwind CSS for styling with custom design system
- React functional components with hooks

### Component Organization
- Components are organized by feature in directories
- Each feature has its own `types/` subdirectory for TypeScript interfaces
- Shared components in `components/` directory
- Asset files in `assets/` with SVG icons

### State Updates
- Use Redux Toolkit's `createSlice` for reducers
- Async operations handled with RTK Query pattern or manual thunks
- Local storage persistence for preferences and authentication

### Testing and Quality
- Lint and format code before committing
- Pre-commit hooks enforce code quality
- Type checking required for builds