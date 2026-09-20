# Cohortify Frontend

A plain Node.js and browser JavaScript replica of the Cohortify mentorship landing page.

This project intentionally does not use React, TypeScript, Vite, Tailwind, a bundler, or a frontend framework. It keeps a React-like component-oriented folder structure, but the page is rendered with browser JavaScript template functions and served by a small Node.js HTTP server.

## What This Project Provides

The site recreates the Cohortify experience with:

- Cohortify navigation and responsive mobile menu
- Hero section with upcoming-session information
- Upcoming session details and enrollment progress
- Animated enrollment counters
- Animated seat-fill progress bar
- Benefits and experience cards
- Mentor and host sections
- Gallery cards with hover effects
- Gallery lightbox with previous, next, and close controls
- Testimonials with image avatars
- Single-session and four-month-pass pricing
- FAQ section with animated open and close states
- Enrollment modal with form validation
- Enrollment data saved in browser `localStorage`
- Enrollment success state
- Light and dark theme toggle
- Scroll-based reveal animations
- Responsive desktop, tablet, and mobile layouts
- CDN-loaded Google Fonts and Remix Icons

## Requirements

### Required

- Node.js 18 or newer
- A modern browser with support for:
  - ES modules
  - `IntersectionObserver`
  - `requestAnimationFrame`
  - `localStorage`
  - CSS custom properties

### Recommended

- Node.js 20 LTS or newer
- VS Code or another editor
- Internet access for external fonts, icons, and image assets

There are no npm dependencies to install. The included `package.json` only defines the project metadata and start command.

## Project Structure

```text
fromtend/
├── README.md
├── index.html
├── package.json
├── server.js
└── src/
    ├── main.js
    ├── index.css
    ├── components/
    │   ├── base/
    │   │   └── EnrollButton.js
    │   └── feature/
    │       ├── EnrollModal.js
    │       ├── Footer.js
    │       └── Navbar.js
    ├── context/
    │   ├── EnrollContext.js
    │   └── ThemeContext.js
    ├── mocks/
    │   └── data.js
    ├── pages/
    │   └── home/
    │       ├── page.js
    │       └── components/
    │           └── sections.js
    └── router/
        └── index.js
```

## How It Works

### 1. Browser entry point

`index.html` is the only HTML document. It loads:

- Google Fonts for `Bricolage Grotesque` and `Plus Jakarta Sans`
- Remix Icon from the CDN
- `src/index.css`
- `src/main.js` as an ES module

The body contains a single mount element:

```html
<div id="app"></div>
```

### 2. Page rendering

`src/main.js` calls the router:

```js
renderApp(document.querySelector("#app"));
```

`src/router/index.js` renders the home page. `src/pages/home/page.js` composes the page in the same high-level order as the original Cohortify app:

1. Navbar
2. Hero
3. Proof strip
4. Upcoming session
5. What you get
6. Mentor
7. Host and guests
8. Gallery
9. Testimonials
10. Pricing
11. FAQ
12. CTA banner
13. Footer
14. Enrollment modal

The component files return HTML strings. The browser inserts the complete result into `#app`.

### 3. Data-driven content

`src/mocks/data.js` contains the page content and asset URLs:

- Brand information
- Navigation links
- Upcoming session information
- Mentor and host information
- Benefits
- Testimonials
- FAQ entries
- Original Cohortify image-search URLs
- Stable fallback image URLs

To update visible copy, pricing, dates, seats, or image sources, edit this file first.

### 4. Browser interactions

After rendering, `src/main.js` attaches event listeners for:

- Theme switching
- Enrollment modal open and close
- Mobile navigation
- Escape-key modal closing
- Scroll-based navbar styling
- Scroll reveal animations
- Counter animations
- Seat progress animation
- Gallery lightbox controls
- FAQ toggling

`src/context/ThemeContext.js` stores the selected theme under:

```text
cohortify-theme
```

`src/context/EnrollContext.js` stores submitted enrollment records under:

```text
cohortify_enrollments
```

Enrollment records are frontend-only. They are not sent to a backend or payment provider.

## Starting the Project

From the repository root:

```bash
cd fromtend
npm start
```

The server normally starts at:

```text
http://localhost:4173
```

Open that address in a browser.

You can also start it directly without npm:

```bash
cd fromtend
node server.js
```

## Port Configuration

The default port is `4173`.

To request a different port:

```bash
PORT=5000 npm start
```

The server binds to `127.0.0.1`. If the requested port is already occupied, it automatically tries the next port: `4174`, then `4175`, and so on.

The actual URL is printed in the terminal when the server starts, for example:

```text
Cohortify frontend running at http://localhost:4174
```

## Static Server Details

`server.js` is a minimal Node.js HTTP server. It:

- Serves `index.html` for `/`
- Serves JavaScript, CSS, and JSON files from the project directory
- Sets basic MIME types
- Removes query strings before resolving file paths
- Blocks paths that escape the project root
- Returns `404 Not found` for missing files
- Selects the next available port when the configured port is busy

There is no development hot reload. After editing files, refresh the browser manually. Restart the server only when changing server-side code or environment variables.

## External Assets

The project uses external resources from:

- Google Fonts
- Cloudflare CDN for Remix Icon
- The original Cohortify image-search URLs
- Unsplash fallback images

The original Cohortify image URLs remain the primary image sources in the rendered page. Because the original `readdy.ai` image endpoint may return `404`, the browser creates a fallback image request and swaps to the matching Unsplash asset only when the primary image fails.

If the page is being tested offline:

- Icons may not render because Remix Icon is loaded from a CDN.
- Fonts may fall back to the browser default.
- Images may not render until the external URLs are reachable.

## Main Interactions

### Navbar

- Changes background and border after scrolling past the top area.
- Opens a right-side mobile menu below the desktop breakpoint.
- Supports theme switching.
- Enrollment buttons open the enrollment modal.

### Proof strip

- Four numeric counters begin at zero.
- Each counter animates to its value when it enters the viewport.
- The seat-fill bar animates to the current enrollment percentage.
- Status badges communicate enrollment, remaining seats, and urgency.

### Reveal animations

Elements receive the `cf-reveal` class and are observed with `IntersectionObserver`. When visible, they receive `is-visible`, which triggers the CSS fade-up animation. Staggered delays create the same sequential entrance effect across cards.

### Enrollment modal

The modal validates:

- Student name: at least two characters
- School: at least two characters
- WhatsApp number: seven to fifteen digits after non-digit characters are removed

Valid submissions are saved in `localStorage` and display a confirmation view. This is only a frontend demo flow; it does not contact a server.

### Gallery

Clicking a gallery card opens the lightbox. The lightbox supports:

- Previous image
- Next image
- Close button
- Backdrop click to close

### FAQ

The first FAQ item starts open. Clicking another question closes the previous item and animates the selected answer open.

## Editing Guide

### Change page content

Edit:

```text
src/mocks/data.js
```

### Change page structure

Edit:

```text
src/pages/home/components/sections.js
```

### Change global styling

Edit:

```text
src/index.css
```

### Change server behavior

Edit:

```text
server.js
```

### Change the page composition

Edit:

```text
src/pages/home/page.js
```

### Add a new interaction

Add the markup in the relevant component file, then add the event listener in:

```text
src/main.js
```

## Validation Commands

Check JavaScript syntax for every module:

```bash
find fromtend -name '*.js' -print0 | xargs -0 -n1 node --check
```

Start the server and check the homepage:

```bash
cd fromtend
npm start
```

Then open:

```text
http://localhost:4173
```

If that port is busy, use the URL printed by the server.

## Troubleshooting

### `EADDRINUSE` or port already used

The server should automatically move to the next available port. Read the terminal output for the actual URL.

To find a process using a port:

```bash
lsof -nP -iTCP:4173 -sTCP:LISTEN
```

To stop a known Node server process:

```bash
pkill -f 'node server.js'
```

Use that command only when you intend to stop Cohortify server processes.

### Icons are missing

Confirm the browser has internet access and that this CDN URL loads:

```text
https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.5.0/remixicon.min.css
```

The icon markup uses Remix Icon class names such as `ri-arrow-right-line` and `ri-calendar-event-line`.

### Images are missing

Confirm that the browser can access the external image hosts. The app first attempts the original image URL and then falls back to an Unsplash URL when the original request fails.

### Changes are not visible

Refresh the browser. This project does not include a watcher or hot-module replacement.

### Enrollment data needs to be cleared

Run this in the browser developer console:

```js
localStorage.removeItem("cohortify_enrollments");
```

To reset the saved theme:

```js
localStorage.removeItem("cohortify-theme");
```

## Production Notes

This project is a frontend-only replica and is not a production enrollment system. Before production use, add:

- A real backend API
- Server-side validation
- Database persistence
- Authentication or abuse protection
- Payment processing
- Privacy and consent handling
- Image hosting under your own domain
- Error logging
- A production-grade static server or hosting platform

The current Node server is intentionally small and suitable for local development and demonstrations.
