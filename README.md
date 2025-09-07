# Blog App 🍜✈️📝

A modern, responsive blog application built with React and Vite, featuring beautiful UI design and smooth user experience. This blog showcases articles about Thai cuisine, travel experiences, and personal insights.

## 🌐 Live Demo

🔗 **Live Demo**: [https://blog-app111.netlify.app/](https://blog-app111.netlify.app/)

## ✨ Features

- **Modern UI Design**: Clean, gradient-based design with hover effects and animations
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Search Functionality**: Real-time search through articles by title, content, or author
- **Dark/Light Theme**: Toggle between light and dark modes with persistent storage
- **Article Categories**: Food & recipes, travel stories, and personal thoughts
- **Dynamic Routing**: Navigate between pages with React Router
- **Article Details**: Individual article pages with full content

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Styling**: Tailwind CSS 4.1.11
- **Routing**: React Router 7.7.1
- **Icons**: Lucide React & React Icons
- **UI Components**: Custom components with class-variance-authority
- **Development**: ESLint for code quality

## 📁 Project Structure

```
blog-app/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Details.jsx     # Article detail component
│   │   ├── Footer.jsx      # Site footer
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Searchbar.jsx   # Search functionality
│   │   └── ui/            # Base UI components
│   ├── data/
│   │   └── Articles.jsx    # Blog articles data
│   ├── layout/
│   │   └── Mainlayout.jsx  # Main app layout
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # Landing page
│   │   ├── Blogs.jsx       # Blog listing page
│   │   ├── About.jsx       # About page
│   │   └── Pagenotfound.jsx # 404 page
│   ├── routes/
│   │   └── Approutes.jsx   # App routing configuration
│   └── lib/
│       └── utils.js        # Utility functions
├── package.json            # Dependencies and scripts
└── vite.config.js          # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd blog-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🎨 Features Overview

### Home Page
- Hero section with gradient background
- Call-to-action buttons
- Feature showcase with icons
- Responsive design with modern animations

### Blog Page
- Article grid layout
- Real-time search functionality
- Responsive card design with hover effects
- Author and content filtering

### Article Details
- Individual article pages
- Full content display
- Navigation between articles

### Navigation
- Responsive navbar
- Dark/light theme toggle
- Smooth page transitions

## 📝 Content Categories

The blog currently features articles in three main categories:

1. **🍜 Food & Recipes**: Authentic Thai recipes and culinary adventures
2. **✈️ Travel Stories**: Beautiful destinations and travel experiences  
3. **📝 Life & Thoughts**: Personal insights and life experiences

## 🎯 Sample Articles

- **Som Tam Thai**: Introduction to Thailand's famous green papaya salad
- **Khao Tom Mat**: Traditional banana sticky rice dessert
- **Thai Seafood Salad**: Fresh and zesty seafood salad recipe
- **Sunset at the Beach**: Photography tips and beach experiences
- **Trip to the Sea**: Travel planning and coastal adventures

## 🔧 Customization

### Adding New Articles

Edit `src/data/Articles.jsx` to add new blog posts:

```javascript
{
    id: 6,
    title: "Your Article Title",
    image_url: "https://example.com/image.jpg",
    content: "Your article content here...",
    author: "Author Name"
}
```

### Styling

The app uses Tailwind CSS for styling. Customize the design by:
- Modifying Tailwind classes in components
- Updating the color scheme in `tailwind.config.js`
- Adding custom CSS in `src/index.css`

### Theme Configuration

The app supports light/dark themes with automatic persistence. Theme state is managed in `Mainlayout.jsx`.

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Deployment Options

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This sample code is for learning and demo purposes. Adapt as needed for your project.

