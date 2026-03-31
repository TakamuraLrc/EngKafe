# English Kafé - Student Frontend

A modern, responsive web application for the English Kafé online learning platform. This frontend enables students to explore courses, enroll in lessons, track their progress, and manage their learning journey.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Configuration](#configuration)
- [Key Dependencies](#key-dependencies)

## 🎯 Project Overview

English Kafé Frontend is a feature-rich student learning platform where users can:

- Browse and discover English language courses
- Enroll in courses and track progress
- Access course lessons and learning materials
- Read blog articles and educational content
- View instructor profiles and recommendations
- Manage course enrollments and payment information
- Track order history and course completion status
- Customize profile settings

The application is built as a modern Single Page Application (SPA) with a focus on user experience, performance, and responsive design. It works seamlessly across all devices and screen sizes.

## 🛠️ Tech Stack

### Frontend Framework & Build Tools
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | ^19.2.0 | JavaScript library for building user interfaces |
| **React DOM** | ^19.2.0 | React package for working with the DOM |
| **Vite** | ^7.3.1 | Lightning-fast build tool and development server |
| **React Router DOM** | ^7.13.1 | Client-side routing and navigation |

### Styling & CSS
| Technology | Version | Purpose |
|------------|---------|---------|
| **Tailwind CSS** | @tailwindcss/postcss@^4.2.1 | Utility-first CSS framework for modern styling |
| **PostCSS** | ^8.5.8 | CSS transformation and processing |

### Development Tools
| Technology | Version | Purpose |
|------------|---------|---------|
| **ESLint** | ^9.39.1 | JavaScript linting and code quality |
| **@vitejs/plugin-react** | ^5.1.1 | Vite plugin for React Fast Refresh support |
| **eslint-plugin-react-hooks** | ^7.0.1 | ESLint rules for React Hooks |
| **eslint-plugin-react-refresh** | ^0.4.24 | ESLint plugin for React Fast Refresh |

### Type Support
| Technology | Version | Purpose |
|------------|---------|---------|
| **@types/react** | ^19.2.7 | TypeScript types for React |
| **@types/react-dom** | ^19.2.3 | TypeScript types for React DOM |
| **globals** | ^16.5.0 | Global type definitions |

## ✨ Features

- 🏠 **Home Page** - Welcome page with hero section and platform overview
- 📚 **Course Catalog** - Browse all available English courses
- 🎓 **Course Details** - Comprehensive course information and curriculum
- 📖 **Course Lessons** - Access course materials and lessons
- 📝 **Blog Section** - Read articles and educational content
- 📰 **Recent Articles** - Latest blog posts and updates
- 👨‍🏫 **Instructor Profiles** - Learn about instructors and their expertise
- ⭐ **Student Reviews** - Read testimonials and reviews from other students
- 🎥 **Testimonial Videos** - Video testimonials from successful students
- 💬 **Contact Section** - Get in touch with support team
- 🛒 **Course Enrollment** - Enroll in courses easily
- 💳 **Payment Processing** - Secure payment system
- 📊 **My Courses** - Track enrolled courses and progress
- 📱 **My Profile** - Manage user account and preferences
- 🔐 **Authentication** - Login and registration system
- 🔑 **Password Recovery** - Forgot password functionality
- 📦 **Order Management** - View order history and status
- 🎯 **Service Showcase** - Learn about platform services
- 📱 **Responsive Design** - Perfect on mobile, tablet, and desktop

## 📋 Prerequisites

- **Node.js** (v16.0.0 or higher)
- **npm** (v8.0.0 or higher) or **yarn**
- Modern web browser (Chrome, Firefox, Safari, Edge)

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd english-kafe-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory (if needed for API endpoints):

```env
VITE_API_BASE_URL=http://localhost:3000
```

### 4. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port)

### 5. Build for Production

```bash
npm run build
```

Production-ready files will be in the `dist/` directory.

## 📁 Project Structure

```
english-kafe-frontend/
├── src/
│   ├── components/              # Reusable components
│   │   ├── Navbar.jsx           # Navigation header
│   │   ├── Footer.jsx           # Footer component
│   │   ├── Hero.jsx             # Hero section
│   │   ├── CourseCard.jsx       # Course card component
│   │   ├── Courses.jsx          # Courses grid component
│   │   ├── Article.jsx          # Article display component
│   │   ├── ArticleCard.jsx      # Article card component
│   │   ├── MyCourseCard.jsx     # Enrolled course card
│   │   ├── RecentArticle.jsx    # Recent articles section
│   │   ├── Instructors.jsx      # Instructors section
│   │   ├── StudentReview.jsx    # Student reviews section
│   │   ├── TestimonialVideo.jsx # Video testimonials
│   │   ├── MotivationBanner.jsx # Motivation banner
│   │   ├── Service.jsx          # Service component
│   │   ├── ServiceCard.jsx      # Service card
│   │   └── ContactSection.jsx   # Contact form section
│   │
│   ├── pages/                   # Page-level components
│   │   ├── Home.jsx             # Landing page
│   │   ├── Courses.jsx          # Courses listing page
│   │   ├── CourseDetail.jsx     # Individual course details
│   │   ├── CourseLessons.jsx    # Course lessons page
│   │   ├── Blog.jsx             # Blog listing page
│   │   ├── Service.jsx          # Services page
│   │   ├── Enroll.jsx           # Course enrollment page
│   │   ├── Payment.jsx          # Payment page
│   │   ├── Login.jsx            # Login page
│   │   ├── Register.jsx         # Registration page
│   │   ├── ForgotPassword.jsx   # Password recovery page
│   │   ├── MyCourses.jsx        # Student's enrolled courses
│   │   ├── MyProfile.jsx        # Student profile page
│   │   ├── MyCourseOrder.jsx    # Course order management
│   │   └── OrderStatus.jsx      # Order status tracking
│   │
│   ├── services/                # API service functions
│   │   └── courseService.js     # Course-related API calls
│   │
│   ├── assets/                  # Images and media
│   │   ├── articles/            # Article images
│   │   ├── courses/             # Course images
│   │   ├── hero/                # Hero section images
│   │   ├── instructors/         # Instructor photos
│   │   ├── login/               # Auth page images
│   │   ├── logo/                # Brand logos
│   │   ├── moti/                # Motivation images
│   │   ├── Nav/                 # Navigation assets
│   │   ├── review/              # Review/testimonial images
│   │   └── service/             # Service images
│   │
│   ├── styles/                  # Global and component styles
│   ├── App.css                  # App component styles
│   ├── App.jsx                  # Root component
│   ├── index.css                # Global CSS
│   └── main.jsx                 # Entry point
│
├── public/                      # Static assets
├── index.html                   # HTML template
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
├── eslint.config.js             # ESLint configuration
├── package.json                 # Project metadata & dependencies
└── README.md                    # This file
```

## 📜 Available Scripts

```bash
# Start development server with HMR (Hot Module Replacement)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint to check code quality
npm run lint
```

## ⚙️ Configuration

### Vite Configuration (`vite.config.js`)

- React plugin enabled for Fast Refresh support
- Optimized for development and production builds
- Asset handling and bundling configured

### Tailwind CSS Configuration (`tailwind.config.js`)

Tailwind CSS provides utility-first styling. Customize:
- Color schemes and palettes
- Typography and spacing
- Responsive breakpoints
- Custom components and utilities

### ESLint Configuration (`eslint.config.js`)

The project includes comprehensive ESLint rules:
- JavaScript syntax and best practices
- React-specific rules and hooks
- React Fast Refresh plugin support
- Global variables and environment setup

## 🔗 Key Dependencies

### React Ecosystem
- **React**: Modern UI library with hooks and functional components
- **React Router DOM**: Powerful client-side routing and navigation
- **React DOM**: Binds React to the browser DOM

### Styling
- **Tailwind CSS with PostCSS**: Utility-first CSS framework with modern tooling

### Development
- **Vite**: Next-generation build tool with instant HMR
- **ESLint**: Code quality and consistency checking
- **Type Definitions**: Full TypeScript support for better IDE experience

## 🌐 API Integration

The frontend communicates with a backend API for:
- Course information
- User authentication
- Enrollment management
- Payment processing
- Profile and order data

Ensure the backend server is running. Update the `VITE_API_BASE_URL` environment variable if the API server is on a different host.

## 📱 Responsive Design

The application is fully responsive and optimized for:
- 📱 Mobile devices (320px and up)
- 📱 Tablets (768px and up)
- 🖥️ Desktop (1024px and up)
- 🖥️ Large screens (1440px and up)

## 🚀 Performance Optimizations

- Code splitting and lazy loading
- Image optimization with responsive images
- CSS-in-JS with Tailwind CSS
- Vite's fast HMR during development
- Optimized production builds

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 📝 License

This project is part of the English Kafé platform.
