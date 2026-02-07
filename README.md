# Git Basics - Version Control Made Easy

A simple, interactive website designed to help beginners learn Git version control basics. This project features a modern, responsive design with interactive elements and animations.

## 📁 Project Structure

```
LocalRepo/
│
├── index.html          # Main HTML file
├── README.md           # Project documentation
│
├── css/
│   └── style.css       # Stylesheet with animations and responsive design
│
├── js/
│   └── script.js       # JavaScript for interactivity and animations
│
└── img/
    ├── logo.png        # Git logo for header
    └── img.png         # Hero section image
```

## ✨ Features

### Interactive Elements
- **Click-to-Copy Commands**: Click any command card to copy the Git command to your clipboard
- **Smooth Scrolling**: Navigation links smoothly scroll to sections
- **Animated Statistics**: Counters animate when scrolled into view
- **Hover Effects**: Interactive hover states on all cards and buttons

### Sections
1. **Hero Section**: Eye-catching introduction with call-to-action
2. **Commands Section**: 9 essential Git commands with descriptions
3. **Workflow Section**: 4-step Git workflow visualization
4. **About Section**: Information about Git with animated statistics

### Design Features
- Modern gradient color scheme (purple/blue)
- Fully responsive design for mobile, tablet, and desktop
- Smooth animations and transitions
- Clean, professional layout
- Accessibility-friendly navigation

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs locally

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! The site will load with all features active

### Opening the Site

**Option 1: Direct Open**
- Double-click `index.html`
- Or right-click and select "Open with" your preferred browser

**Option 2: Live Server (Optional)**
If you have VS Code with Live Server extension:
```bash
# Right-click index.html and select "Open with Live Server"
```

## 🎯 Usage

### Navigation
- Click navigation links in the header to jump to different sections
- Click the "Get Started" button to scroll to the commands section

### Command Cards
- Hover over any command card to see tooltip
- Click a command card to copy the Git command to clipboard
- Visual feedback confirms successful copy

### Interactive Features
- Scroll through the page to trigger animations
- Statistics counters animate when visible
- Command cards and workflow steps fade in on scroll

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with animations, flexbox, and grid
- **JavaScript (ES6+)**: Interactive features and DOM manipulation

### Key JavaScript Features
- Intersection Observer API for scroll-triggered animations
- Clipboard API for copy functionality
- Smooth scrolling with native browser support
- Event delegation for efficient event handling

### CSS Techniques
- CSS Grid and Flexbox for layouts
- CSS Gradients for modern design
- CSS Animations and Transitions
- Media queries for responsive design

## 📱 Responsive Design

The site is fully responsive with breakpoints for:
- **Desktop**: Full layout with side-by-side content
- **Tablet**: Adjusted grid layouts
- **Mobile**: Single column layout with optimized spacing

## 🎨 Customization

### Colors
Edit the gradient colors in `css/style.css`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Commands
Add or modify Git commands in `index.html`:
```html
<div class="command-card" data-command="your-command">
    <h3>git your-command</h3>
    <p>Description</p>
    <code>git your-command</code>
</div>
```

### Statistics
Update counter values in `js/script.js`:
```javascript
animateCounter(document.getElementById('repos-count'), 100, 2000);
```

## 🌟 Git Commands Covered

1. **git init** - Initialize a repository
2. **git clone** - Clone a repository
3. **git add** - Stage files
4. **git commit** - Commit changes
5. **git push** - Upload to remote
6. **git pull** - Download and merge
7. **git branch** - Manage branches
8. **git merge** - Merge branches
9. **git status** - Check status

## 📖 Learning Path

This website covers the basic Git workflow:
1. Create/Modify files in your working directory
2. Stage changes using `git add`
3. Commit changes to repository history
4. Push commits to remote repository

## 🤝 Contributing

This is a learning project. Feel free to:
- Fork the repository
- Add more Git commands
- Improve animations and interactions
- Enhance responsive design
- Add more educational content

## 📄 License

This project is free to use for educational purposes.

## 🔗 Resources

- [Official Git Documentation](https://git-scm.com/doc)
- [Pro Git Book](https://git-scm.com/book/en/v2)
- [GitHub Git Cheat Sheet](https://training.github.com/downloads/github-git-cheat-sheet/)

## 👨‍💻 Author

Created as part of MSc CS Git Practice

## 🐛 Known Issues

None at the moment. If you find any bugs, please report them!

## 🔮 Future Enhancements

Potential improvements:
- Add more Git commands (rebase, stash, reset, etc.)
- Include interactive Git command simulator
- Add search functionality for commands
- Include video tutorials
- Add dark mode toggle
- Multi-language support

---

**Happy Learning! 🚀**

*Master Git and become a version control pro!*
