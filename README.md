# Portfolio Website

A modern, responsive portfolio website built with React and Vite. Showcase your projects, skills, and experience with a sleek, professional design powered by Tailwind CSS.

## 🎯 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Scroll Progress Bar** - Visual indicator of page scroll progress
- **Project Showcase** - Dedicated section to display your projects with descriptions
- **About Section** - Tell your story and highlight your skills
- **Contact Form** - Easy way for visitors to get in touch
- **Modern UI** - Built with Tailwind CSS for a clean, contemporary look
- **Fast Performance** - Optimized with Vite for quick load times and smooth development experience
- **Icon Library** - Beautiful icons from React Icons and Lucide React

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS 4
- **Icons**: React Icons & Lucide React
- **Linting**: ESLint
- **Node**: v22+

## 📦 Installation

### Prerequisites
- Node.js (v22 or higher)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone <your-repo-url>
cd "Portfolio website"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🚀 Getting Started

### Development
Run the development server with hot module replacement:
```bash
npm run dev
```

### Build for Production
Create an optimized production build:
```bash
npm run build
```

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

### Linting
Check code quality with ESLint:
```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx           # Navigation component
│   ├── About.jsx            # About section
│   ├── Projects.jsx         # Projects showcase
│   ├── ProjectCard.jsx      # Individual project card
│   ├── Contact.jsx          # Contact form
│   ├── Footer.jsx           # Footer component
│   └── ScrollProgressBar.jsx # Scroll progress indicator
├── pages/                   # Page components (if needed)
├── assets/                  # Static assets and images
├── App.jsx                  # Main app component
├── App.css                  # App styles
├── main.jsx                 # Entry point
└── index.css                # Global styles
```

## ✏️ Customization

### Update Your Information
Edit the component files in `src/components/` to add your personal information:
- **Navbar**: Update with your name and navigation links
- **About**: Add your bio and skills
- **Projects**: Showcase your work
- **Contact**: Add your contact information

### Styling
Customize the design by:
- Modifying Tailwind CSS classes in component files
- Editing `src/App.css` and `src/index.css` for global styles
- Adjusting colors and spacing in the Tailwind configuration

## 🚢 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Vite and deploy

### Deploy to Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Deploy to GitHub Pages
1. Update `vite.config.js` with your repository name
2. Run: `npm run build`
3. Push the `dist` folder to the `gh-pages` branch

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint to check code quality |

## 🤝 Contributing

Contributions are welcome! Feel free to fork this project and submit pull requests.

## 📄 License

This project is open source and available under the MIT License.

## 📧 Contact

For questions or suggestions, please feel free to reach out through the contact form on the website or via email.

---

**Happy coding! 🚀**
