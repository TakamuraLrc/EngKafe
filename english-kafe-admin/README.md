# English Kafé Admin Dashboard

A comprehensive admin dashboard for the English Kafé online learning platform. Built with modern web technologies, this dashboard provides administrators with powerful tools to manage courses, users, payments, analytics, and platform settings.

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

English Kafé Admin Dashboard is a full-featured administration system designed for managing an online English language learning platform. It enables administrators to:

- Monitor platform analytics and user engagement metrics
- Create, edit, and manage courses and lessons
- Manage user accounts and permissions
- Process and review payment transactions
- Generate reports and insights
- Configure platform settings and preferences

The application is built as a Single Page Application (SPA) using modern React patterns and provides a responsive, intuitive interface for desktop users.

## 🛠️ Tech Stack

### Frontend Framework & Build Tools
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | ^18.2.0 | JavaScript library for building user interfaces |
| **React DOM** | ^18.2.0 | React package for working with the DOM |
| **Vite** | ^5.0.8 | Lightning-fast build tool and development server |
| **React Router** | ^6.20.0 | Client-side routing and navigation |

### Styling & UI
| Technology | Version | Purpose |
|------------|---------|---------|
| **Tailwind CSS** | ^3.3.6 | Utility-first CSS framework for styling |
| **PostCSS** | ^8.4.31 | CSS transformation tool |
| **Autoprefixer** | ^10.4.16 | Adds vendor prefixes to CSS rules |
| **Lucide React** | ^0.294.0 | Beautiful, consistent SVG icon library |

### Data Visualization & HTTP
| Technology | Version | Purpose |
|------------|---------|---------|
| **Recharts** | ^2.10.0 | Composable charting library for analytics dashboards |
| **Axios** | ^1.6.0 | Promise-based HTTP client for API requests |

### Development Tools
| Technology | Version | Purpose |
|------------|---------|---------|
| **ESLint** | ^8.54.0 | JavaScript code quality and linting |
| **@vitejs/plugin-react** | ^4.2.1 | Vite plugin for React Fast Refresh |

## ✨ Features

- 📊 **Dashboard Analytics** - Real-time statistics and overview of platform metrics
- 📚 **Course Management** - Create, edit, delete, and manage course content
- 📖 **Lesson Management** - Organize and manage course lessons and materials
- 👥 **User Management** - Manage student accounts, roles, and permissions
- � **Payment Management** - Review and process payment transactions
- 👨‍🏫 **Instructor Management** - Manage instructors and their assignments
- 📈 **Reports & Analytics** - Generate detailed reports and insights
- ⚙️ **Settings** - Configure platform-wide settings and preferences
- 👤 **Admin Profile** - Manage admin account information
- 🔐 **Authentication** - Secure admin login system

## 📋 Prerequisites

- **Node.js** (v16.0.0 or higher)
- **npm** (v8.0.0 or higher) or **yarn**
- Modern web browser (Chrome, Firefox, Safari, Edge)

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd english-kafe-admin
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

The admin dashboard will be available at `http://localhost:5174`

### 5. Build for Production

```bash
npm run build
```

Production-ready files will be in the `dist/` directory.

## 📁 Project Structure

```
english-kafe-admin/
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── BlogCard.jsx
│   │   ├── CourseCard.jsx
│   │   ├── PaymentCard.jsx
│   │   ├── ConfirmationModal.jsx
│   │   ├── Sidebar.jsx         # Navigation sidebar
│   │   ├── TopNav.jsx          # Top navigation bar
│   │   └── ...
│   │
│   ├── pages/                   # Page-level components
│   │   ├── Dashboard.jsx        # Main dashboard
│   │   ├── AdminLogin.jsx       # Admin authentication
│   │   ├── AdminProfile.jsx     # Admin account management
│   │   │
│   │   ├── BlogManagement/      # Blog CRUD operations
│   │   │   ├── Blogs.jsx
│   │   │   ├── AddBlog.jsx
│   │   │   └── EditBlog.jsx
│   │   │
│   │   ├── CourseManagement/    # Course CRUD operations
│   │   │   ├── Courses.jsx
│   │   │   ├── AddCourse.jsx
│   │   │   ├── EditCourse.jsx
│   │   │   ├── CourseDetail.jsx
│   │   │   ├── AddLesson.jsx
│   │   │   └── EditLesson.jsx
│   │   │
│   │   ├── Payment/             # Payment management
│   │   │   └── ReviewPayment.jsx
│   │   │
│   │   ├── Reports/             # Analytics & reports
│   │   │   └── Analytics.jsx
│   │   │
│   │   ├── Settings/            # Platform settings
│   │   │   └── GeneralSettings.jsx
│   │   │
│   │   └── UserManagement/      # User management
│   │       └── Users.jsx
│   │
│   ├── config/                  # Configuration files
│   ├── context/                 # React Context for state management
│   ├── hooks/                   # Custom React hooks
│   ├── services/                # API service functions
│   ├── utils/                   # Utility functions
│   ├── styles/                  # Global styles
│   ├── assets/                  # Images, icons, logos
│   │   ├── icons/
│   │   ├── images/
│   │   └── logos/
│   │
│   ├── App.jsx                  # Root component
│   ├── index.css                # Global CSS
│   └── main.jsx                 # Entry point
│
├── public/                      # Static assets
│   ├── icons/
│   └── images/
│
├── index.html                   # HTML template
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
├── package.json                 # Project metadata & dependencies
└── README.md                    # This file
```

## 📜 Available Scripts

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint and fix code
npm run lint
```

## ⚙️ Configuration

### Vite Configuration (`vite.config.js`)

- **Port**: 5174
- **Auto Open**: Browser automatically opens on start
- **React Plugin**: Enables React Fast Refresh for HMR

### Tailwind CSS Configuration (`tailwind.config.js`)

Tailwind CSS is configured for styling. Customize colors, spacing, and other design tokens in `tailwind.config.js`.

### ESLint Configuration

The project includes ESLint for code quality. Configuration can be found in `.eslintrc.*` file.

## 🔗 Key Dependencies

### React Ecosystem
- **React**: Core library for building UIs
- **React Router DOM**: Client-side routing and navigation
- **React DOM**: Binding React to the browser DOM

### HTTP Communication
- **Axios**: Promise-based HTTP client for API requests

### Data Visualization
- **Recharts**: Composable charting library for displaying analytics

### Icons & UI
- **Lucide React**: Icon library with 500+ beautiful SVG icons

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS transformations and autoprefixing

## 🌐 API Integration

The admin dashboard communicates with a backend API. Ensure the backend server is running before starting the development server. Update the API base URL in environment variables if needed.

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 📝 License

This project is part of the English Kafé platform.
├── services/           # API services (to be implemented)
├── hooks/             # Custom React hooks
├── context/           # React context
├── utils/             # Utility functions
├── styles/            # Global styles
├── App.jsx            # Main app component
└── main.jsx           # Entry point
```

## Login Credentials (Demo)

- **Email**: admin@example.com
- **Password**: (any value)

## Technologies Used

- React 18
- Vite
- React Router v6
- Tailwind CSS
- Lucide Icons
- Recharts (for charts)
- Axios (for API calls)

## Next Steps

1. Implement course management features
2. Add data tables and filtering
3. Integrate with backend API
4. Add analytics charts
5. Implement user management
6. Add export/report generation
