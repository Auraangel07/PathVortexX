# PathVortex X — System Architecture

## Overview

PathVortex X follows a modular architecture separating frontend, backend, database, and ML modules for scalability and maintainability.

## Components

- **Frontend:** SPA using React (optional), communicates via REST APIs.
- **Backend:** Flask or Node.js for API endpoints, authentication, and orchestration.
- **Database:** Firebase for auth/storage, MongoDB for data, Neo4j for user connections.
- **ML Modules:** Python microservices for skill gap and sentiment analysis.
- **External APIs:** Deepgram for voice sentiment, OpenAI for chat, LinkedIn for job insights.

## Data Flow Diagram

*(Include diagram here or link to Figma design)*

## Security

- JWT authentication for users
- Secure API endpoints
