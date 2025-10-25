# Professional Portfolio Website

A modern single-page portfolio website built with React to showcase development skills, projects, and professional experience..

## ✨ Features

- **Seamless Navigation**: Fixed header and smooth scrolling behavior for quick navigation between sections (Home, About, Experience, Projects, Contact).
- **Dynamic Content**: Data for Experience, Projects, and Footer links is managed using separate data files for easy maintenance.
- **Dynamic Project Grid**: Includes a "Show More/Show Less" feature to manage content load in the Projects section.
- **Serverless Contact Form**: Fully functional contact form integrated using the @formspree/react hook for instant, reliable message submissions without requiring a custom backend.

## 💻 Tech Stack

- **Frontend**: React (Functional Components & Hooks)
- **Build Tool**: Vite
- **Styling**: Pure CSS
- **Form Handling**: Formspree (@formspree/react hook)
- **Icons**: React Icons (react-icons/fi, react-icons/fa, react-icons/fa6)

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

1. ### Prerequisites

- Node.js (LTS version recommended)

- npm or yarn

2. ### Installation

```bash
git clone https://github.com/dere-12/portfolio.git
cd portfolio
npm install
# or
yarn install
```

3. ### Configure Formspree:
   Before running, you must update your Formspree hash in src/components/Contact/ContactForm.jsx.
   Open src/components/Contact/ContactForm.jsx and replace "mqayrjwp" with your unique Formspree hash:

```bash
// src/components/Contact/ContactForm.jsx
const [state, handleSubmit] = useForm("YOUR_UNIQUE_FORMSPREE_HASH");
```

## Running Locally

Start the development server:

```bash
npm run dev
# or
yarn dev
```

This will start the Vite development server, and you can view your application in the browser at `http://localhost:5173/` (or a similar address)..

## Folder Structure

The project is organized as follows:

```
portfolio/
├── public/                # Static assets
├── src/                   # Source code
│   ├── components/        # Reusable components
│   ├── assets/            # Images and other assets
│   ├── App.jsx            # Main application component
│   └── main.jsx           # Entry point
├── styles/                # Global styles
├── index.html             # Main HTML file
├── package.json           # Project metadata and dependencies
└── vite.config.js         # Vite configuration
```
