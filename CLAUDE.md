# CLAUDE.md - Project Analysis and Development Guidelines

## Project Overview

**Project Name:** HP Wand Magic - WebAR Application  
**Japanese Title:** 魔法の杖を用いた WebAR アプリケーション  
**Current Status:** Early planning/setup phase  
**Technology Stack:** Next.js + Docker + WebAR  

This project is in the initial planning stage for developing a WebAR (Web Augmented Reality) application that uses a magic wand interface, inspired by Harry Potter themes.

## Current Project Structure

```
hp-wand-magic/
├── .claude/
│   └── settings.local.json          # Claude IDE permissions
├── nextjs_docker_setup.md           # Docker setup documentation (Japanese)
└── 魔法の杖を用いた WebAR アプリケーション – 要件定義書.pdf  # Requirements document (Japanese PDF)
```

## Technology Stack & Architecture

### Planned Technology Stack
Based on the setup documentation:

- **Frontend Framework:** Next.js 14+ with TypeScript
- **Styling:** Tailwind CSS
- **Containerization:** Docker + Docker Compose
- **Development Environment:** Dev Container support
- **Deployment:** Vercel (production)
- **WebAR Technology:** TBD (likely WebXR, AR.js, or Three.js)
- **Package Manager:** npm (recommended)

### Architecture Approach
- **Development Port:** 5173 (avoiding standard 3000)
- **Multi-stage Docker builds** (dev/prod environments)
- **Environment variable management** via `.env` files
- **Container-based development workflow**

## Project Status Analysis

### ✅ Completed
- Initial project structure created
- Docker setup documentation written (comprehensive Japanese guide)
- Requirements document prepared (PDF format)
- Basic Claude IDE configuration established

### 🚧 In Progress / Next Steps
- Next.js application scaffolding (not yet created)
- Docker configuration files (Dockerfile, docker-compose.yml)
- Environment configuration (.env files)
- WebAR implementation planning
- Core application development

### 📋 Required Setup Steps
Based on the documentation, the following setup is planned:

1. **Initialize Next.js App:**
   ```bash
   npx create-next-app@latest app --ts --eslint --tailwind
   ```

2. **Create Environment Configuration:**
   - `.env` file with PORT=5173
   - Environment variables for API endpoints

3. **Docker Configuration:**
   - Multi-stage Dockerfile (base → dev → prod)
   - docker-compose.yml without version specification
   - Dev container configuration

4. **Development Workflow:**
   - Container-based development
   - Hot reloading via Docker volumes
   - Vercel deployment pipeline

## Development Guidelines

### Environment Setup
- Use port 5173 for development (not 3000)
- All environment variables managed through `.env` files
- Prefix public variables with `NEXT_PUBLIC_`
- Use Docker Compose v2 (no version field in yaml)

### Code Standards
- TypeScript enabled by default
- ESLint configuration included
- Tailwind CSS for styling
- Following Next.js 14+ conventions

### Container Strategy
- Multi-stage builds for optimization
- Separate dev/prod configurations
- Volume mounting for development hot-reloading
- Node.js 20 LTS base image

### Deployment Strategy
- Local development via Docker Compose
- Production deployment to Vercel
- Container registry support maintained

## Available Commands (Planned)

Once the Next.js app is scaffolded, these commands will be available:

```bash
# Development
npm run dev              # Start development server
docker compose up --build  # Container-based development

# Production
npm run build           # Build for production
npm start              # Start production server
vercel --prod          # Deploy to Vercel

# Utilities
npm run lint           # Run ESLint
npm run type-check     # TypeScript checking
```

## Key Configuration Files (To Be Created)

- `package.json` - Node.js dependencies and scripts
- `next.config.js` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `.eslintrc.json` - ESLint rules
- `Dockerfile` - Container build instructions
- `docker-compose.yml` - Development environment
- `.env` / `.env.local` - Environment variables
- `.devcontainer/devcontainer.json` - VS Code dev container setup

## WebAR Implementation Notes

The project aims to create a WebAR application with magic wand interaction:

- **Target Platform:** Web browsers with WebXR support
- **Interaction Method:** Magic wand gesture recognition
- **Visual Effects:** AR overlays and magical effects
- **User Experience:** Harry Potter-inspired interface

### Technical Considerations for WebAR
- Browser compatibility (Chrome, Safari, Firefox)
- Device camera and sensor access
- 3D rendering performance optimization
- Gesture recognition algorithms
- AR tracking and calibration

## Development Workflow

### Initial Setup (When Ready)
1. Run `npx create-next-app@latest app --ts --eslint --tailwind`
2. Create Docker configuration files
3. Set up environment variables
4. Configure dev container (optional)
5. Initialize git repository
6. Set up Vercel deployment

### Daily Development
1. Start development environment: `docker compose up`
2. Access application at `http://localhost:5173`
3. Make changes with hot reloading
4. Test in AR-capable browsers
5. Commit changes regularly

### Deployment Process
1. Test locally with production build
2. Deploy to Vercel staging
3. Test AR functionality on mobile devices
4. Deploy to production with `vercel --prod`

## Troubleshooting Guide

Based on the setup documentation, common issues and solutions:

| Issue | Cause | Solution |
|-------|-------|----------|
| `EADDRINUSE 5173` | Port conflict | Change PORT in `.env` |
| Changes not reflected | Volume not mounted | Check `volumes:` in docker-compose.yml |
| `node-gyp` errors | Missing build tools | Add Python/build tools to Dockerfile |
| Vercel startup failure | Port/env conflicts | Remove PORT from Vercel environment |

## Resources and References

- [Next.js Docker Deployment Guide](https://nextjs.org/docs/deployment/docker)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
- [Docker Compose v2 Documentation](https://docs.docker.com/compose/)
- [Vercel Next.js Deployment](https://vercel.com/docs/frameworks/nextjs)
- [WebXR Device API](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API)

## Contact and Support

This project is in early development. Refer to the Japanese requirements document (PDF) for detailed specifications and the setup guide (`nextjs_docker_setup.md`) for technical implementation details.

---

*Last Updated: June 13, 2025*  
*Status: Pre-development/Planning Phase*