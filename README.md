# Fatima Tabbasum — Premium React Developer Portfolio

An award-winning, production-grade personal portfolio website crafted for **Fatima Tabbasum**, an aspiring Frontend Developer and React specialist currently training at **SMIT** and **Aptech**.

Redesigned and rebuilt from Fatima'\''s original GitHub Pages deployment into a modern, mobile-first, component-driven React application using Vite, Framer Motion, and CSS Custom Properties.

---

## 🌟 Key Features

1. **Brand Identity & Aesthetic**
   - Signature Dark Theme: Near-black and charcoal tones, warm ivory text, muted lavender highlights, and violet glow accents (`#8b5cf6`, `#c084fc`).
   - Clean Light Theme: Warm white, subtle lavender background layers, charcoal typography, and matching violet accents.
   - Editorial typography pairing **Space Grotesk** (headings) and **Inter** (body).
   - Tasteful glassmorphism cards with fine glowing borders and backdrop blur.

2. **Authentic Profile & Portrait**
   - Real uploaded portrait with headscarf and mask preserved, styled with a glowing aura ring and floating badges.
   - Dynamic animated rotating role text in Hero: *Frontend Developer*, *React Developer in Progress*, *Creative Web Developer*.

3. **Complete 17-Project Showcase**
   - All 17 authentic projects preserved with verified live demo links.
   - Interactive category filtering: **All**, **React**, **JavaScript**, **HTML/CSS**.
   - Real-time search by title, keyword, or technology tag.
   - "Featured Project" badges for top builds.
   - Detailed project modal with key architectural highlights, technology chips, and safe external links.

4. **Honest & Categorized Skills Section**
   - Four distinct categories: *Frontend Foundations*, *React Ecosystem*, *Tools & Version Control*, and *Currently Exploring (PHP, MySQL, Laravel)*.
   - Clear distinction between core tools and technologies currently being learned. No fake percentages or inflated claims.

5. **Education & Learning Journey**
   - Vertical timeline tracing *Modern Web & App Development at SMIT*, *Software Engineering at Aptech*, and *Intermediate in Computer Science (ICS)*.

6. **Interactive Contact Section**
   - One-click "Copy Email" with celebratory confetti and toast feedback.
   - Working contact form with validation, loading state, and EmailJS integration with graceful fallback to `mailto:`.
   - Verified direct links to Fatima'\''s GitHub and LinkedIn profiles.

7. **Print-Friendly CV Viewer**
   - Dedicated interactive CV modal matching Fatima'\''s verified qualifications.
   - Integrated browser printing (`window.print()`) that renders a clean, distraction-free resume document.

8. **Extra Premium Polish**
   - Top reading progress bar.
   - Desktop-only custom cursor follower (automatically disabled on touch devices).
   - Floating Back-to-Top button.
   - Full keyboard accessibility and `prefers-reduced-motion` compliance.

---

## 🛠️ Technology Stack

- **Framework**: React.js 18 with Vite
- **Language**: JavaScript (ES6+)
- **Styling**: CSS3 with CSS Custom Properties, CSS Grid, Flexbox, Fluid Typography
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email Service**: EmailJS (`@emailjs/browser`) with direct mailto fallback
- **Confetti**: Canvas Confetti
- **Storage**: LocalStorage for persistent theme preference

---

## 📂 Project Structure

```
fatima-portfolio-react/
├── public/
│   ├── assets/
│   │   └── fatima-profile.jpg        # Fatima'\''s authentic portrait
│   ├── favicon.svg                   # Custom FT monogram SVG favicon
│   └── robots.txt                    # Search crawler policy
├── src/
│   ├── assets/
│   │   └── fatima-profile.jpg
│   ├── components/
│   │   ├── About.jsx                 # Story, values, and CV modal trigger
│   │   ├── BackToTop.jsx             # Floating back-to-top button
│   │   ├── Contact.jsx               # Form, EmailJS, copy email, socials
│   │   ├── CustomCursor.jsx          # Desktop-only subtle cursor follower
│   │   ├── CvModal.jsx               # Formatted printable CV viewer
│   │   ├── Education.jsx             # SMIT, Aptech, ICS timeline
│   │   ├── Footer.jsx                # Quick links, copyright, dynamic year
│   │   ├── Hero.jsx                  # Two-column hero, rotating role, portrait
│   │   ├── Navbar.jsx                # Sticky header, scroll spy, mobile drawer
│   │   ├── ProjectCard.jsx           # Individual project card with live link
│   │   ├── ProjectModal.jsx          # Accessible project detail modal
│   │   ├── Projects.jsx              # Search, category filters, and card grid
│   │   ├── ScrollProgress.jsx        # Top reading scroll progress bar
│   │   ├── Skills.jsx                # Categorized skills matrix
│   │   └── ThemeToggle.jsx           # Sun/Moon theme toggle button
│   ├── data/
│   │   ├── projects.js               # 17 authentic projects dataset
│   │   └── skills.js                 # Skills and category taxonomy
│   ├── hooks/
│   │   ├── useScrollSpy.js           # Scroll position & active section spy
│   │   └── useTheme.js               # LocalStorage & html data-theme manager
│   ├── styles/
│   │   ├── animations.css            # Floating, glow pulse, and shimmer keyframes
│   │   ├── global.css                # CSS variables, dark/light themes, typography
│   │   └── print.css                 # Clean resume stylesheet for print/PDF export
│   ├── App.jsx                       # Master page composition
│   └── main.jsx                      # Vite React root
├── .env.example                      # EmailJS configuration template
├── .gitignore
├── index.html                        # Meta tags, OpenGraph, Space Grotesk font
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (version 18 or newer)
- npm (version 9 or newer)

### Installation & Run

1. Clone or navigate to the project directory:
   ```bash
   cd fatima-portfolio-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` (or the port displayed in your terminal) in your browser.

4. Create an optimized production build:
   ```bash
   npm run build
   ```

5. Preview the production build locally:
   ```bash
   npm run preview
   ```

---

## ✉️ EmailJS Configuration (Optional)

The contact form is already fully operational. If EmailJS keys are not provided, submitting the form seamlessly opens the user'\''s default email client with the subject and message pre-filled to `tabbasumnaz309@gmail.com`.

To enable direct in-browser delivery via EmailJS:

1. Create a free account at [EmailJS](https://www.emailjs.com/).
2. Add an **Email Service** (e.g. Gmail).
3. Create an **Email Template** with variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{subject}}`
   - `{{message}}`
4. Create a `.env` file in the root folder with your credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

---

## 🌐 Deploying to Vercel

### Option 1: Deploy with Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: Deploy via GitHub & Vercel Dashboard (Recommended)

1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "feat: complete premium React developer portfolio for Fatima Tabbasum"
   ```

2. Link to your GitHub repository:
   ```bash
   git branch -M main
   git remote add origin https://github.com/fatimatabbasum18/fatima-portfolio-react.git
   git push -u origin main
   ```

3. Import into Vercel:
   - Log into [Vercel](https://vercel.com/).
   - Click **Add New Project** and select `fatima-portfolio-react`.
   - Framework preset: **Vite** (auto-detected).
   - If using EmailJS, add `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY` in the Environment Variables section.
   - Click **Deploy**.

---

## 📋 Verified Project Catalog (17 Projects)

| # | Project Name | Tech Stack | Category | Live Demo URL |
|---|--------------|------------|----------|---------------|
| 1 | **Fatima'\''s Portfolio** | HTML5, CSS3, JS | HTML/CSS | [Live Demo](https://fatimatabbasum18.github.io/fatima-portfolio/) |
| 2 | **Counter App with React** | React.js, Hooks, CSS3 | React | [Live Demo](https://counter-app-with-react-js-tan.vercel.app/) |
| 3 | **Show & Hide Password** | React.js, UI/UX, CSS3 | React | [Live Demo](https://show-and-hide-password-with-react-j.vercel.app/) |
| 4 | **Theme Toggler** | React.js, CSS Variables | React | [Live Demo](https://theme-toggler.vercel.app/) |
| 5 | **Background Changer** | React.js, DOM, CSS3 | React | [Live Demo](https://bg-chnger-with-react-js.vercel.app/) |
| 6 | **First Landing Page** | React.js, Responsive | React | [Live Demo](https://first-landing-page-with-react.vercel.app/) |
| 7 | **Teacher Day Surprise** | React.js, Animations | React | [Live Demo](https://teacher-day-surprise.vercel.app/) |
| 8 | **Restaurant Website** | HTML5, CSS3, Bootstrap | HTML/CSS | [Live Demo](https://fatimatabbasum18.github.io/Resturant-Website/) |
| 9 | **Calculator Pro** | JavaScript, Math Logic | JavaScript | [Live Demo](https://fatimatabbasum18.github.io/Calculator-Pro/) |
| 10 | **JS Math Method Dice** | JavaScript, Math Methods | JavaScript | [Live Demo](https://fatimatabbasum18.github.io/Js-Math-Method-dice/) |
| 11 | **Traffic Signal Checker** | JavaScript, Logic Flow | JavaScript | [Live Demo](https://fatimatabbasum18.github.io/Traffic-Signal-Checker-By-Js/) |
| 12 | **Geometrize Pro** | JavaScript, Geometry Math | JavaScript | [Live Demo](https://fatimatabbasum18.github.io/geometrize-pro/) |
| 13 | **Guess Game** | JavaScript, Game State | JavaScript | [Live Demo](https://fatimatabbasum18.github.io/guess-game-by-js/) |
| 14 | **Result Card App** | JavaScript, Calculations | JavaScript | [Live Demo](https://fatimatabbasum18.github.io/Result-Card-App/) |
| 15 | **Dice Game with Computer** | JavaScript, Turn AI Logic | JavaScript | [Live Demo](https://fatimatabbasum18.github.io/dice-game-with-computer/) |
| 16 | **Resume Pro by JS** | JavaScript, DOM Scripting | JavaScript | [Live Demo](https://fatimatabbasum18.github.io/resume-pro-by-js/) |
| 17 | **Counter App (JS)** | JavaScript, DOM Events | JavaScript | [Live Demo](https://fatimatabbasum18.github.io/COUNTER-_APP/) |

---

## 📄 License & Credits

Built with 💜 by **Fatima Tabbasum**.  
All rights reserved © 2026.
