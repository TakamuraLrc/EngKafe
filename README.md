# English Kafé - Complete Learning Platform

English Kafé is a comprehensive online English language learning platform built with modern web technologies. The project consists of two main applications: a student-facing frontend for course enrollment and learning, and an admin dashboard for platform management.

## 📚 Project Overview

**English Kafé** provides a complete ecosystem for:
- 📚 Discovering and enrolling in English language courses
- 📖 Learning through interactive lessons and materials
- 📝 Reading educational blog articles and resources
- 👨‍🏫 Learning from experienced instructors
- 💳 Managing course enrollments and payments
- 📊 Tracking learning progress
- ⚙️ Administrative management of courses, users, and content (Admin only)

## 🏗️ Project Structure

The repository contains two main applications:

```
EngKafe/
├── english-kafe-frontend/      # Student-facing learning platform
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md              # Detailed frontend documentation
│
├── english-kafe-admin/        # Admin dashboard
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md              # Detailed admin documentation
│
└── README.md                  # This file
```

## 🛠️ Technology Stack Overview

### Core Technologies (Both Applications)
| Technology | Version | Purpose |
|------------|---------|---------|
| React | ^18.2.0 - ^19.2.0 | UI library |
| React Router DOM | ^6.20.0 - ^7.13.1 | Client-side routing |
| Vite | ^5.0.8 - ^7.3.1 | Build tool |
| Tailwind CSS | ^3.3.6 - ^4.2.1 | CSS framework |
| PostCSS | ^8.4.31 - ^8.5.8 | CSS processing |

### Frontend-Specific Tech Stack

**Student Platform** (`english-kafe-frontend/`)
- **React** ^19.2.0 - Latest version with modern hooks
- **React Router DOM** ^7.13.1 - Modern routing
- **Vite** ^7.3.1 - Latest build tool
- **Tailwind CSS** @tailwindcss/postcss@^4.2.1 - Modern CSS framework
- **ESLint** ^9.39.1 - Code quality

### Admin-Specific Tech Stack

**Admin Dashboard** (`english-kafe-admin/`)
- **React** ^18.2.0 - Stable version
- **React Router DOM** ^6.20.0 - Proven routing solution
- **Vite** ^5.0.8 - Reliable build tool
- **Tailwind CSS** ^3.3.6 - Utility-first styling
- **Recharts** ^2.10.0 - Data visualization and analytics
- **Axios** ^1.6.0 - HTTP client for API calls
- **Lucide React** ^0.294.0 - Icon library
- **ESLint** ^8.54.0 - Code linting

## 🚀 Quick Start Guide

### Prerequisites

- **Node.js** v16.0.0 or higher
- **npm** v8.0.0 or higher or **yarn**
- Git for version control

### Development Setup

#### 1. Clone the Repository

```bash
git clone <repository-url>
cd EngKafe
```

#### 2. Setup Frontend Application

```bash
cd english-kafe-frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:5173`

#### 3. Setup Admin Dashboard (in a new terminal)

```bash
cd english-kafe-admin
npm install
npm run dev
```

The admin dashboard will run on `http://localhost:5174`

## 📁 Detailed Application Documentation

For comprehensive documentation about each application, please refer to:

- **📘 [Frontend Documentation](./english-kafe-frontend/README.md)** - Learn about the student-facing platform
- **📗 [Admin Dashboard Documentation](./english-kafe-admin/README.md)** - Learn about the admin panel

## 🎯 Key Features

### Student Frontend
- ✨ Modern, responsive course catalog
- 🎓 Interactive course browsing and enrollment
- 📚 Comprehensive lesson management
- 📖 Blog and article reading
- 👨‍🏫 Instructor profiles
- ⭐ Student reviews and testimonials
- 💳 Integrated payment system
- 📊 Personal dashboard with progress tracking
- 🔐 User authentication and profile management

### Admin Dashboard
- 📊 Analytics and reporting dashboard
- 📚 Full course and lesson management
- 👥 User and student management
- 💳 Payment and order management
- 👨‍🏫 Instructor management
- 📈 Detailed analytics and insights
- ⚙️ Platform settings configuration
- 🔐 Secure admin authentication

## 🔄 Application Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                          Web Browsers                            │
└────────────────┬─────────────────────────────────────┬──────────┘
                 │                                      │
        ┌────────▼─────────────┐            ┌──────────▼────────────┐
        │   Frontend (SPA)      │            │   Admin Dashboard     │
        │  React + Vite + TC    │            │   React + Vite + TC   │
        │                       │            │                       │
        │ • Home Page           │            │ • Analytics           │
        │ • Courses             │            │ • Course Mgmt         │
        │ • Blog                │            │ • User Mgmt           │
        │ • Auth                │            │ • Payment Mgmt        │
        │ • Profile             │            │ • Settings            │
        └────────────┬──────────┘            └──────────┬────────────┘
                     │                                   │
                     └──────────────────┬────────────────┘
                                        │
                        ┌───────────────▼────────────────┐
                        │      Backend API Server        │
                        │    (Node.js/Express/etc)       │
                        │                                │
                        │ • User Authentication         │
                        │ • Course Management           │
                        │ • Order Processing            │
                        │ • Analytics                   │
                        └────────────────┬────────────────┘
                                         │
                         ┌───────────────▼───────────────┐
                         │      Database (MongoDB)       │
                         │                               │
                         │ • Users & Courses            │
                         │ • Enrollments & Orders       │
                         │ • Analytics Data             │
                         └───────────────────────────────┘
```

## 🛠️ Available Commands

### Frontend
```bash
cd english-kafe-frontend

# Development
npm run dev         # Start dev server with HMR

# Production
npm run build       # Build for production
npm run preview     # Preview production build

# Code Quality
npm run lint        # Run ESLint
```

### Admin Dashboard
```bash
cd english-kafe-admin

# Development
npm run dev         # Start dev server with HMR

# Production
npm run build       # Build for production
npm run preview     # Preview production build

# Code Quality
npm run lint        # Lint and fix code
```

## 📊 Component Hierarchy

### Frontend Components
- **Navbar** - Navigation and branding
- **Hero** - Landing page hero section
- **Courses** - Course listing and browsing
- **CourseCard** - Individual course preview
- **Article** - Blog article display
- **ArticleCard** - Article preview card
- **Instructors** - Instructor showcase
- **StudentReview** - Review/testimonial display
- **ContactSection** - Contact form
- **Footer** - Site footer

### Admin Components
- **Sidebar** - Navigation menu
- **TopNav** - Header navigation
- **CourseCard** - Course management card
- **BlogCard** - Blog management card
- **PaymentCard** - Payment information card
- **ConfirmationModal** - Confirmation dialogs

## 🔐 Security Considerations

- Implement JWT token-based authentication
- Use environment variables for sensitive data
- Validate user inputs on both client and server
- Implement proper CORS policies
- Use HTTPS in production
- Secure payment gateway integration
- Regular security updates and dependencies

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 🚀 Deployment

### Frontend Deployment
```bash
npm run build
# Deploy dist/ folder to hosting service
# (Vercel, Netlify, AWS S3, etc.)
```

### Admin Deployment
```bash
npm run build
# Deploy dist/ folder to hosting service
```

Both applications are static sites that can be deployed to any static hosting service.

## 🤝 Contributing

1. Create a feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit
   ```bash
   git commit -m "Add your feature description"
   ```

3. Push to the branch
   ```bash
   git push origin feature/your-feature-name
   ```

4. Open a Pull Request

### Code Style Guidelines
- Follow ESLint rules configured in each project
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components focused and reusable

## 📝 Environment Variables

Create `.env` files in both application roots with:

**Frontend (.env)**
```env
VITE_API_BASE_URL=http://localhost:3000
VITE_APP_NAME=English Kafé
```

**Admin (.env)**
```env
VITE_API_BASE_URL=http://localhost:3000
VITE_ADMIN_API_ENDPOINT=/api/admin
```

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 or 5174 is already in use, Vite will automatically use the next available port.

### Dependencies Installation Issues
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and lock file
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Build Errors
Ensure you're using Node.js v16+:
```bash
node --version
```

## 📞 Support

For issues and feature requests, please create an issue in the repository.

## 📄 License

This project is proprietary and part of the English Kafé platform.

## 🎉 Getting Started Next Steps

1. **Read the [Frontend README](./english-kafe-frontend/README.md)** for detailed frontend documentation
2. **Read the [Admin README](./english-kafe-admin/README.md)** for admin dashboard details
3. **Setup your development environment** with Node.js and npm
4. **Install dependencies** in each application directory
5. **Start developing** with `npm run dev` in each directory
6. **Reference the component structure** when adding new features

---

**Happy Learning! 🚀**