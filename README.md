# Learning programs

A modern learning platform for programming languages and frameworks.

## Project Structure

```
learning-platform/
├─ client/                 # Vite + React (Frontend)
│  ├─ public/
│  ├─ src/
│  │  ├─ app/              # App-level setup
│  │  │  ├─ router.jsx
│  │  │  └─ providers.jsx
│  │  │
│  │  ├─ pages/            # Route-level pages
│  │  │  ├─ Home/
│  │  │  ├─ Topics/
│  │  │  ├─ ReactTrack/
│  │  │  ├─ JsTrack/
│  │  │  └─ DjangoTrack/
│  │  │
│  │  ├─ components/       # Reusable UI components
│  │  │  ├─ layout/
│  │  │  ├─ ui/
│  │  │  └─ cards/
│  │  │
│  │  ├─ features/         # Feature-based logic
│  │  │  ├─ navigation/
│  │  │  └─ progress/
│  │  │
│  │  ├─ hooks/
│  │  ├─ services/         # API calls (future Django)
│  │  ├─ styles/
│  │  ├─ utils/
│  │  └─ main.jsx
│  │
│  └─ index.html
│
├─ server/                 # Django (later)
│  ├─ config/
│  ├─ apps/
│  └─ manage.py
│
└─ README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Navigate to the client directory:
```bash
cd origin_programs
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features

- 🏠 Home page with welcome message
- 📚 Topics page with course selection
- ⚛️ React.js learning track
- 🟨 JavaScript learning track
- 🐍 Django learning track
- 🎨 W3Schools-inspired design with dark red theme
- 📱 Responsive design

## Tech Stack

- **Frontend**: React 19, Vite, React Router DOM
- **Styling**: CSS Modules
- **Backend**: Django (planned)

## Contributing

This is a learning platform project. Contributions are welcome!

## License

MIT
