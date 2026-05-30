# kt-space

Personal portfolio — [kullapat-t.github.io/kt-space](https://kullapat-t.github.io/kt-space)

---

## Stack

- **React 18** (Create React App) — HashRouter for GitHub Pages compatibility
- **SCSS** — hand-crafted, no component library
- **Auth0** — authentication (gates future features)
- **react-toastify** — auth state notifications
- **gh-pages** — deployment

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero with profile picture and social links |
| `/experience` | Work history, skills, and education |
| `/projects` | Selected projects |
| `/about` | About — bio, photo, quick stats |
| `/contact` | Contact links (Email, LinkedIn, GitHub, Instagram) |

---

## Run locally

```bash
npm install
npm start
```

App runs at `http://localhost:3000/kt-space`

---

## Deploy

```bash
npm run deploy
```

Builds and pushes to the `gh-pages` branch via the `predeploy` + `deploy` scripts in `package.json`.

---

## Environment variables

Create a `.env` file at the project root:

```
REACT_APP_AUTH0_DOMAIN=your-auth0-domain
REACT_APP_AUTH0_CLIENT_ID=your-auth0-client-id
```
