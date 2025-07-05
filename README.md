# 🚀 RN-TEMPLATE

A modern, production-ready full-stack template built with **React** and **NestJS**, featuring a comprehensive set of tools and best practices for rapid development.

<div align="center">

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)
![NestJS](https://img.shields.io/badge/NestJS-11.0.1-E0234E?style=for-the-badge&logo=nestjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.0.0-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.11-38B2AC?style=for-the-badge&logo=tailwind-css)
![Prisma](https://img.shields.io/badge/Prisma-6.11.1-2D3748?style=for-the-badge&logo=prisma)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

</div>

## ✨ Features

### 🎨 Frontend (React + Vite)
- **⚡ Vite** - Lightning fast build tool and dev server
- **🎯 TypeScript** - Full type safety and better developer experience
- **🎨 Tailwind CSS v4** - Utility-first CSS framework with latest features
- **🧩 Shadcn/ui** - Beautiful, accessible component library
- **🔄 Redux Toolkit** - State management with RTK Query for API calls
- **🛣️ React Router** - Client-side routing
- **🌙 Dark Mode** - Built-in theme switching with next-themes
- **📱 Mobile Responsive** - Custom hooks for mobile detection
- **📝 React Hook Form** - Performant forms with validation
- **🎭 Framer Motion** - Smooth animations and transitions
- **📊 Recharts** - Beautiful charts and data visualization
- **🔔 Sonner** - Toast notifications
- **📄 React Helmet** - Document head management

### 🔧 Backend (NestJS)
- **🏗️ NestJS** - Scalable Node.js framework
- **🗄️ Prisma** - Type-safe database ORM
- **📚 PostgreSQL** - Robust relational database
- **🔐 Cookie-based Auth** - Secure authentication system
- **🌐 CORS** - Cross-origin resource sharing configured
- **📖 Swagger/OpenAPI** - Auto-generated API documentation
- **✅ Zod Validation** - Runtime type validation with nestjs-zod
- **🧪 Jest Testing** - Comprehensive testing setup
- **🎨 Prettier** - Code formatting
- **🔍 ESLint** - Code linting and quality

### 🛠️ Development Tools
- **📦 Monorepo Structure** - Organized client/server separation
- **🔄 Hot Reload** - Instant feedback during development
- **📝 Auto-generated Types** - OpenAPI types from Swagger
- **🎯 Path Aliases** - Clean import statements
- **📱 Mobile-First** - Responsive design patterns
- **🔒 Type Safety** - End-to-end TypeScript

## 🏗️ Project Structure

```
RN-TEMPLATE/
├── 📁 client/                 # React Frontend
│   ├── 📁 src/
│   │   ├── 📁 api/           # RTK Query API slices
│   │   ├── 📁 components/    # Reusable UI components
│   │   │   └── 📁 ui/       # Shadcn/ui components
│   │   ├── 📁 hooks/        # Custom React hooks
│   │   ├── 📁 lib/          # Utilities (clsx, constants)
│   │   ├── 📁 pages/        # Page components
│   │   ├── 📁 routes/       # React Router configuration
│   │   ├── 📁 store/        # Redux store setup
│   │   └── 📁 types/        # TypeScript type definitions
│   ├── 📁 public/           # Static assets
│   └── 📄 package.json      # Frontend dependencies
│
├── 📁 server/                # NestJS Backend
│   ├── 📁 src/              # Source code
│   ├── 📁 prisma/           # Database schema and migrations
│   ├── 📁 test/             # Test files
│   └── 📄 package.json      # Backend dependencies
│
└── 📄 README.md             # This file
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm**
- **PostgreSQL** database

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd RN-TEMPLATE
```

### 2. Install Dependencies
```bash
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

### 3. Environment Setup
Create environment files for both client and server:

**Server (.env)**
```env
DATABASE_URL="postgresql://username:password@localhost:5432/your_database"
PORT=3000
```

**Client (.env)**
```env
VITE_API_URL=http://localhost:3000
```

### 4. Database Setup
```bash
cd server
npx prisma generate
npx prisma db push
```

### 5. Start Development Servers
```bash
# Terminal 1 - Start backend
cd server
npm run start:dev

# Terminal 2 - Start frontend
cd client
npm run dev
```

Your application will be available at:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000
- **API Documentation**: http://localhost:3000/docs

## 📚 Available Scripts

### Frontend (client/)
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run api          # Generate API types from Swagger
```

### Backend (server/)
```bash
npm run start:dev    # Start development server with hot reload
npm run start:debug  # Start with debug mode
npm run start:prod   # Start production server
npm run build        # Build the application
npm run test         # Run unit tests
npm run test:e2e     # Run end-to-end tests
npm run test:cov     # Run tests with coverage
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

## 🎨 UI Components

This template includes a comprehensive set of Shadcn/ui components:

- **Layout**: Accordion, Card, Collapsible, Separator, Sheet
- **Navigation**: Breadcrumb, Navigation Menu, Pagination, Tabs
- **Forms**: Button, Checkbox, Input, Label, Radio Group, Select, Switch, Textarea
- **Feedback**: Alert, Alert Dialog, Dialog, Progress, Skeleton, Sonner (Toast)
- **Data Display**: Avatar, Badge, Calendar, Table, Tooltip
- **Overlay**: Drawer, Dropdown Menu, Hover Card, Popover, Tooltip
- **Input**: Input OTP, Slider, Toggle, Toggle Group
- **Media**: Aspect Ratio, Carousel
- **Charts**: Recharts integration for data visualization

## 🔧 Configuration

### Frontend Configuration
- **Vite**: Configured with React plugin and path aliases
- **Tailwind CSS**: v4 with custom configuration
- **TypeScript**: Strict mode enabled with path mapping
- **ESLint**: Configured for React and TypeScript
- **Prettier**: Code formatting rules

### Backend Configuration
- **NestJS**: Modular architecture with decorators
- **Prisma**: PostgreSQL with type-safe queries
- **Swagger**: Auto-generated API documentation
- **CORS**: Configured for frontend communication
- **Cookies**: Secure cookie-based authentication
- **Zod**: Runtime validation with nestjs-zod

## 🧪 Testing

### Frontend Testing
```bash
# Unit tests (when configured)
npm run test

# E2E tests (when configured)
npm run test:e2e
```

### Backend Testing
```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## 📦 Deployment

### Frontend Deployment
```bash
cd client
npm run build
```

The built files will be in `client/dist/` ready for deployment to:
- Vercel
- Netlify
- AWS S3
- Any static hosting service

### Backend Deployment
```bash
cd server
npm run build
npm run start:prod
```

Deploy to:
- Railway
- Heroku
- AWS EC2
- DigitalOcean
- Any Node.js hosting platform

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Vite](https://vitejs.dev/) for the lightning-fast build tool
- [NestJS](https://nestjs.com/) for the scalable backend framework
- [Prisma](https://www.prisma.io/) for the type-safe database ORM
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

---

<div align="center">

**Made with ❤️ using modern web technologies**

[React](https://react.dev/) • [NestJS](https://nestjs.com/) • [TypeScript](https://www.typescriptlang.org/) • [Vite](https://vitejs.dev/)

</div>
