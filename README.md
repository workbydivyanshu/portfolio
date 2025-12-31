# 🚀 Portfolio

Welcome to my software development portfolio! This repository showcases my projects demonstrating expertise in full-stack development, AI/ML integration, and modern web technologies.

---

## 📂 Projects

### Project 1: MultifariousAI - Multi-Model AI Chat Platform

**Repository:** [multifariousAI](https://github.com/lifeofdivyu/multifariousAI)

#### 📋 Overview

MultifariousAI is a sophisticated, production-ready multi-model AI chat application that enables users to interact with multiple AI providers simultaneously. Built with a focus on performance, security, and user experience, this platform demonstrates advanced full-stack development skills and AI integration expertise.

#### 🎯 Key Features

| Feature | Description |
|---------|-------------|
| **Multi-Provider Support** | Seamlessly integrates 9+ AI providers including OpenAI, Anthropic Claude, Google Gemini, Mistral, Groq, Together AI, OpenRouter, Ollama (local), and Perplexity |
| **Dynamic Model Fetching** | Real-time model discovery from provider APIs instead of hardcoded catalogs |
| **Consensus Mode** | Unique feature that queries multiple AIs and synthesizes the best response |
| **Slides View** | Side-by-side comparison of responses from different AI models |
| **Real-time Streaming** | Buffered SSE streaming with proper chunk boundary handling |
| **Local-First Architecture** | Works entirely offline with Ollama for privacy-conscious users |
| **Authentication System** | Secure user authentication with Better Auth |
| **Chat Persistence** | Full conversation history with rename, delete, and share capabilities |

#### 🛠️ Technical Stack

**Frontend:**
- Next.js 16.1.1 with Turbopack
- React 19.2.3
- TypeScript
- Tailwind CSS
- shadcn/ui Components
- Zustand for State Management

**Backend:**
- Next.js API Routes
- Drizzle ORM with PostgreSQL
- Better Auth for Authentication
- Server-Sent Events (SSE) Streaming

**Security & Reliability:**
- SSRF Protection with URL allowlisting
- Zod Schema Validation on all API endpoints
- Rate Limiting (IP-based)
- Sensitive Data Redaction in logs
- Request Correlation IDs
- Structured JSON Logging
- Server-side Timeouts with AbortController

**DevOps:**
- Docker & Docker Compose
- Production-ready Dockerfile
- Environment-based Configuration

#### 🏗️ Architecture Highlights

```
┌─────────────────────────────────────────────────────────────┐
│                      Frontend (Next.js)                      │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │ Chat Store  │  │ Slides Store│  │ Model Initializer   │  │
│  │  (Zustand)  │  │  (Zustand)  │  │ (Dynamic Fetching)  │  │
│  └─────────────┘  └─────────────┘  └─────────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│                     API Routes Layer                         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────────┐   │
│  │ /api/chat│ │/api/models│ │/api/auth │ │/api/consensus│   │
│  └──────────┘ └──────────┘ └──────────┘ └──────────────┘   │
├─────────────────────────────────────────────────────────────┤
│                   Security Middleware                        │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐              │
│  │ Validation │ │Rate Limiter│ │SSRF Protect│              │
│  │   (Zod)    │ │ (IP-based) │ │(URL Allow) │              │
│  └────────────┘ └────────────┘ └────────────┘              │
├─────────────────────────────────────────────────────────────┤
│                    AI Provider Layer                         │
│  ┌────────┐┌────────┐┌────────┐┌────────┐┌────────┐        │
│  │OpenAI  ││Claude  ││Gemini  ││Mistral ││ Groq   │        │
│  └────────┘└────────┘└────────┘└────────┘└────────┘        │
│  ┌────────┐┌────────┐┌────────┐┌────────┐                  │
│  │Together││OpenRouter│Ollama ││Perplexity               │
│  └────────┘└────────┘└────────┘└────────┘                  │
└─────────────────────────────────────────────────────────────┘
```

#### 💡 Technical Challenges Solved

1. **Streaming Reliability**: Implemented buffered line parsing to handle SSE chunk boundaries correctly across all providers
2. **SSRF Prevention**: Built URL validation with allowlisting to prevent server-side request forgery via user-controlled Ollama URLs
3. **Message Normalization**: Solved provider-specific message format requirements (e.g., Perplexity's strict alternation rules)
4. **Dynamic Model Discovery**: Replaced static model catalogs with real-time API fetching from 9 different providers
5. **Reasoning Toggle**: Implemented thinking/reasoning mode toggle for compatible models (DeepSeek, Claude, etc.)

#### 📊 Code Quality Metrics

- **Type Safety**: 100% TypeScript with strict mode
- **Validation**: Zod schemas on all external inputs
- **Error Handling**: Centralized error handler with sensitive data redaction
- **Logging**: Structured JSON logging with request correlation IDs

#### 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/lifeofdivyu/multifariousAI.git

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

#### 📸 Screenshots

*Coming soon*

---

## 🧑‍💻 About Me

I'm a full-stack developer passionate about building production-ready applications with modern technologies. My focus areas include:

- **AI/ML Integration**: Building applications that leverage multiple AI providers
- **Full-Stack Development**: Next.js, React, TypeScript, Node.js
- **Security**: Implementing industry-standard security practices
- **DevOps**: Docker, CI/CD, cloud deployment

---

## 📫 Contact

- **GitHub**: [@lifeofdivyu](https://github.com/lifeofdivyu)
- **Email**: *Add your email*
- **LinkedIn**: *Add your LinkedIn*

---

## 📄 License

This portfolio and its projects are available under the MIT License unless otherwise specified.
