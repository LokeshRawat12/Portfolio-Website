# Lokesh Rawat — Portfolio

A React + Tailwind CSS portfolio built with a "code editor" visual concept:
the nav bar reads like open editor tabs (`about.tsx`, `skills.json`,
`projects.tsx`...), the hero doubles as a terminal window, and the contact
section is styled like a shell script.

## File structure

```
portfolio/
├── index.html                 # Vite entry HTML, loads fonts
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── Lokesh_Rawat_CV.pdf    # served for the "Download CV" button
└── src/
    ├── main.jsx                # React root
    ├── App.jsx                 # assembles all sections
    ├── index.css                # Tailwind directives + small globals
    ├── data/
    │   └── profile.js           # ALL resume content lives here
    └── components/
        ├── Navbar.jsx           # editor-tab navigation (signature element)
        ├── Hero.jsx             # terminal window + typewriter effect
        ├── SectionHeader.jsx    # shared section title
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Education.jsx
        ├── Contact.jsx          # shell-script contact card + form
        └── Footer.jsx
```

## Run it locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build into dist/
```

## Editing content

Everything text-based (name, summary, skills, projects, education,
socials) lives in **`src/data/profile.js`** — edit that one file rather
than hunting through components.

## Wiring up the contact form

The form in `src/components/Contact.jsx` currently just shows a local
"queued" confirmation. To actually deliver messages, connect it to a
service like Formspree, EmailJS, or your own API route in the
`handleSubmit` function.

## Colors & type (design tokens)

Defined in `tailwind.config.js`:

| Token | Hex | Use |
|---|---|---|
| `ink` | `#0F1117` | background |
| `panel` / `panel2` | `#171A24` / `#1B1E2B` | cards, surfaces |
| `paper` | `#ECEDF2` | primary text |
| `muted` | `#8B90A3` | secondary text |
| `amber` | `#F2A94F` | primary accent |
| `teal` | `#5EEAD4` | secondary accent |
| `rose` | `#F2789F` | tertiary accent (window dots) |

Fonts: **Space Grotesk** (headings), **Inter** (body), **JetBrains Mono**
(labels, code, tags).
