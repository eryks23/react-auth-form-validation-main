# react-auth-form-validation

> Client-side registration form with real-time feedback validation built with React 19 and Vite.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://eryks23.github.io/react-auth-form-validation/)
[![Deploy to GitHub Pages](https://github.com/eryks23/react-auth-form-validation/actions/workflows/static.yml/badge.svg)](https://github.com/eryks23/react-auth-form-validation/actions/workflows/static.yml)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)](https://vite.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap)](https://getbootstrap.com/)

---

## Table of Contents

- [Description](#description)
- [Live Demo](#live-demo)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage / Quick Start](#usage--quick-start)
- [Validation Rules](#validation-rules)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Description

`react-auth-form-validation` is a lightweight, single-page React application that demonstrates client-side form validation for a user registration flow. It enforces a set of validation rules — required fields, email format, password strength, and confirmation matching — and renders contextual Bootstrap alerts in response. The project is intended as a reference implementation for controlled form components in React and is deployed automatically to GitHub Pages on every push to `main`.

---

## Live Demo

**[https://eryks23.github.io/react-auth-form-validation-main/](https://eryks23.github.io/react-auth-form-validation-main/)**

---

## Key Features

- **Controlled inputs** — all form fields are managed through React `useState`, ensuring a single source of truth for form data.
- **Sequential validation** — rules are checked in a defined order; the first failing rule stops processing and surfaces a targeted error message.
- **Bootstrap alert feedback** — success and error states map to distinct Bootstrap contextual classes (`alert-success`, `alert-warning`, `alert-danger`).
- **Zero backend dependencies** — fully client-side; no API calls or external services required.
- **Automated CI/CD** — a GitHub Actions workflow builds and publishes the app to GitHub Pages on every push to `main`.
- **Dark mode support** — global CSS custom properties adapt the palette when the OS prefers a dark color scheme.

---

## Tech Stack

| Layer       | Technology                    | Version |
|-------------|-------------------------------|---------|
| UI library  | React                         | ^19.2.5 |
| Build tool  | Vite                          | ^8.0.10 |
| Styling     | Bootstrap (CDN)               | 5.3.0   |
| Linting     | ESLint + react-hooks plugin   | ^10.2.1 |
| Runtime     | Node.js                       | ≥ 22    |
| CI/CD       | GitHub Actions → GitHub Pages | —       |

---

## Requirements

- **Node.js** ≥ 22 (the CI workflow pins Node 22; lower versions may work but are untested)
- **npm** ≥ 10 (bundled with Node 22)
- A modern browser with ES module support

No environment variables or external services are required.

---

## Installation

```bash
# 1. Clone the repository
git clone https://github.com/eryks23/react-auth-form-validation.git
cd react-auth-form-validation

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The development server starts at `http://localhost:5173/react-auth-form-validation/` by default.

---

## Usage / Quick Start

After running `npm run dev`, open the URL printed in the terminal. You will see a registration card with four fields.

Fill out the form and click **Register Me**. The app validates the input synchronously and renders one of three Bootstrap alert types directly below the submit button:

| Scenario                        | Alert type      | Message                                        |
|---------------------------------|-----------------|------------------------------------------------|
| Any field is empty              | `alert-warning` | _All fields must be filled!_                   |
| Email does not contain `@`      | `alert-danger`  | _Email must contain the @ symbol!_             |
| Passwords do not match          | `alert-danger`  | _Password and confirmation must be the same!_  |
| Password shorter than 12 chars  | `alert-danger`  | _Password must be at least 12 characters long!_|
| All rules pass                  | `alert-success` | _Account created successfully!_                |

---

## Validation Rules

Validation runs client-side inside `handleSubmit` in `src/App.jsx`. Rules are applied in the following order; the first failure short-circuits the rest.

```
1. Required  — username, email, password, confirmPassword must all be non-empty.
2. Email     — email value must include the "@" character.
3. Match     — password must equal confirmPassword.
4. Length    — password must be at least 12 characters long.
```

To add or modify a rule, edit the `handleSubmit` function in `src/App.jsx`:

```jsx
// Example: add an uppercase-letter requirement
if (!/[A-Z]/.test(password)) {
  setMessage({ text: "Password must contain at least one uppercase letter!", type: "danger" });
  return;
}
```

---

## Project Structure

```
react-auth-form-validation/
├── .github/
│   └── workflows/
│       └── static.yml       # CI: install → build → deploy to GitHub Pages
├── src/
│   ├── App.css              # Component-scoped styles (Vite scaffold remnants)
│   ├── App.jsx              # Root component — form state, validation, JSX
│   ├── index.css            # Global styles and CSS custom properties (light/dark)
│   └── main.jsx             # React entry point (createRoot)
├── index.html               # HTML shell; sets page title and base script tag
├── package.json             # Project metadata, npm scripts, dependency versions
├── package-lock.json        # Locked dependency tree
└── vite.config.js           # Vite config — React plugin + base path for GH Pages
```

**Key file:** `src/App.jsx` contains the entire application: form state (`formData`, `message`), the `updateData` change handler, the `handleSubmit` validation handler, and the JSX render.

---

## Deployment

The project deploys automatically via the `.github/workflows/static.yml` workflow:

1. A push to `main` triggers the workflow.
2. GitHub Actions installs dependencies, runs `npm run build`, and uploads the `dist/` folder.
3. GitHub Pages serves the built assets at the URL defined in `package.json` → `homepage`.

To deploy manually:

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

The `base` option in `vite.config.js` is set to `/react-auth-form-validation/` to match the GitHub Pages sub-path. Adjust this value if you host the app at a different path.

---

## Contributing

1. Fork the repository and create a feature branch:
   ```bash
   git checkout -b feat/your-feature-name
   ```
2. Make your changes. Run the linter before committing:
   ```bash
   npm run lint
   ```
3. Commit with a clear message:
   ```bash
   git commit -m "feat: add password strength indicator"
   ```
4. Push the branch and open a Pull Request against `main`.

Please keep pull requests focused — one feature or fix per PR. If you plan a larger change, open an issue first to discuss the approach.

---

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for the full text.
