# Laser Red - Vega Front-end Test

[Visit Live Site](https://laser-red-front-end-test.vercel.app/)

![App Screenshot](./screenshot.png)

## About The Project

This project was developed as a **Gutenberg WordPress front-end technical test for Laser Red** ([laser.red](https://laser.red)).

## Why Not Directly in Gutenberg?

Every system should first be developed in isolation before being implemented in the WordPress backend to minimize mistakes, reduce friction, and avoid unnecessary rework.

A system that can power an entire website starts with modularity. Once a modular front-end foundation is built, integrating it into WordPress is mostly a matter of connecting React props to Gutenberg attributes.
If the props are designed incorrectly or inconsistently, implementing them in the backend becomes inefficient and error-prone — resulting in wasted time and duplicated effort.

The focus of this project is to build a scalable and modular system that can be seamlessly integrated into WordPress with Gutenberg. Unlike a standard React application, the structure needs to be well-separated and carefully composed to function correctly as independent Gutenberg blocks. The placement of `<div>` elements and the organization of styles play a crucial role in ensuring proper structure, maintainability, and theme compatibility.

> **Note:** While the project is built in **Next.js** for convenience, no Next.js-specific functions are used for Gutenberg integration. For example, a custom `<Image>` component is used instead of Next.js’s `<Image>` because Gutenberg does not support it. I personally prefer building in Next.js for development speed, but the code is structured so it can be easily translated into Gutenberg blocks.

## Project Details

Test files can be found in the root folder ["/source"](https://github.com/AurelianSpodarec/laser-vega-front-end/tree/main/source).

Some minor design details have been adjusted due to the nature and constraints of technical tests in general.

Without the opportunity to clarify certain aspects with a designer, I made reasonable assumptions on spacing and layout to keep the project functional and coherent.

**Example:**  
Section **spacing values** (top/bottom) in the design included 120px, 115px, 105px, and 95px. Ideally, a system would be defined to simplify this. For maintainability, 115px and 120px could be merged into 120px, and 105px and 95px into 100px. The visual difference is subtle and barely noticeable, but it makes the codebase much more consistent, maintainable, and efficient.

That section is very close — clean, clear, and professional.
Here’s a **polished version** with improved grammar, consistency, and small formatting fixes to make it read like production-grade documentation 👇

---

## Tooling

### Husky

This project uses [**Husky**](https://www.npmjs.com/package/husky) to **automate Git hooks** (like `pre-commit` and `pre-push`), ensuring code quality and consistency before changes are committed or pushed.

---

#### Pre-commit Hooks

When you make a commit, Husky automatically runs quality checks such as **linting** and **type checking** to prevent bad code from entering the repository.

Husky hooks are stored in the project’s **`.husky/`** folder.

---

#### Skipping Checks

If you’re confident in your changes and need to **bypass Husky temporarily**, you can skip hook verification by adding the `--no-verify` flag:

```bash
git commit -m "chore: change text color" --no-verify
```

You can also skip checks on push:

```bash
git push --no-verify
```

> Use this only when you’re absolutely sure your code is safe to commit or push — bypassing Husky disables all automated quality checks for that action.

---

## Conventions

### Images

When adding new images, include **today’s date** in the filename.
This helps with **version tracking** — especially if a file with the same name is updated or replaced in the future.

**Format:**

```
image-name__YYYYMMDD
```

**Example:**

```
it-professional-standing__20251014.jpg;
```

> _(This corresponds to October 14th, 2025.)_

---

### Naming Files & Components

For this project, files are named based on **what they are first**, followed by **their context or variation**.
This pattern improves discoverability and consistency across the codebase.

**Example:**

```
card-blog
button-primary
card-secondary
```

This approach:

- Groups related files logically in your IDE (e.g., all `card-*` components appear together).
- Reduces cognitive load — if you forget the specific variant (e.g., “blog”), you can type the shared prefix (`card`) and quickly find what you need.
- Makes scanning the file tree easier and more predictable.

## TypeScript Naming Convention

To improve **IDE discoverability** and reduce **cognitive load**, every TypeScript `type` or `interface` is prefixed with an **`I`** — regardless of whether it’s declared as a `type` or an `interface`.

### Why this helps

- You don’t always remember whether a shape was defined as a `type` or an `interface`.
- There’s no strict rule on when to use one over the other.
- A consistent prefix (`I`) makes it easier to **search**, **autocomplete**, and **recognize** these structures in your codebase.

### Example

```ts
type IOverlayPosition = "center" | "top-left" | "bottom-right";

interface IImageContainerProps {
  // ...
}
```

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- [PNPM](https://pnpm.io/) installed globally

```bash
pnpm install -g pnpm
```

### Installation

1. Clone the repository:

```bash
git clone git@github.com:AurelianSpodarec/laser-vega-front-end.git
```

2. Install project dependencies:

```bash
pnpm install
```

### Run the Development Server

```bash
pnpm run dev
```

The project will be available at `http://localhost:3000` (or the port specified by your setup).

## Future Work

### Button Component

The current Button component using asChild does not correctly replace the native <button> DOM element with the nested element. As a result, accessibility and keyboard navigation (e.g., tabbing twice) are affected.

The component should be refactored into a hook-based system, separating logic from presentation. This will allow building custom button variations more cleanly and make the component both accessible and scalable. Most button components keep things in one file, but I always found it difficult to create custom buttons while retaining the functionality and 100% fluidity. useHook seems to be a good solution to this, allowing the user to create abstractions that they want with full customisability and modularity.

### sSection Component

Add support for custom spacing per breakpoint (e.g., sm, md, lg, xl).
This will improve flexibility when designing responsive layouts and integrate more naturally with Gutenberg’s responsive controls, enabling precise section spacing control across all viewports.

### Text Component

Not implemented however, with futher testing it might or might not be a viable component to have for Gutenberg - need to experiment.

### Design Tokens

- Typography Tokens: Require refinement to ensure consistency and reusability across all sections.
- Spacing Tokens: Should be standardized for all sections to improve maintainability and predictability.

### Responsive System with Clamp

A potential long-term improvement is to introduce a clamp()-based responsive system for spacing and typography.

This approach would make layouts fluid and responsive by default, eliminating the need for multiple breakpoint-specific values (sm, md, lg, etc.). While it would require thorough planning, testing and synchronisation with the design team and see their tooling limitations as well - it could dramatically simplify the codebase.

This is something I've noticed the industry heading towards. I think the possiblities here are untapped just because most people have no experience creating such systems, so if the theory is correct, this could revolutionise how we size things up. And clamp is something that you definitelly need to get used to.

## Edge Cases with Gutenberg

There might be some edge cases with Gutenberg.

For example custom css and media breakpoints with tailwindcss values might not work if they are entered via the Editor - although there could be some workarounds this is something that needs to be double checked. 

## Usage of this system

Ideally, much of the system can be separated and controlled entirely through variables. Core elements like Row, Container, and Columns should be fully configurable via tokens.

Components that are reused across multiple sites can also benefit from a unified component-class architecture. This applies to typography, sizing, and colors—allowing you to adjust every aspect of a component without ever touching its implementation.

With control over tokens, it’s even possible to synchronize them with tools like Figma. A plugin could enable designers to push updates directly to GitHub, removing the need for developers to handle trivial token changes - it would automate color changes requests, spacing etc... It’s easier said than done, but entirely achievable.

## Final

While the website isn’t yet a perfect 1:1 match to the design, every time a block is refined, the pieces start to come together, and the overall structure begins to fall into place.

Moreover, this system is highly reusable for other sites. By simply updating the design tokens, you can create a completely new themed UI with different colors, spacing, typography, and even new components if needed. Existing components like Section, Container, Button, etc., are already built to be easily extended.