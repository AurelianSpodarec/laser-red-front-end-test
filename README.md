# Laser Red - Vega Front-end Test

![App Screenshot](./screenshot.png)

## Brief

The project focuses on building a system that can be utilized inside **WordPress with Gutenberg**. Unlike a typical React app, everything must be highly modular and well-separated to function correctly as Gutenberg blocks, and the placement of `<div>`s and where styles are applied matters a lot to ensure proper structure, styling, and theme integration.

> **Note:** While the project is built in **Next.js** for convenience, no Next.js-specific functions are used for Gutenberg integration. For example, a custom `<Image>` component is used instead of Next.js’s `<Image>` because Gutenberg does not support it. I personally prefer building in Next.js for development speed, but the code is structured so it can be easily translated into Gutenberg blocks.

## Project Details

Test files can be found in the root folder ["/source"](https://github.com/AurelianSpodarec/laser-vega-front-end/tree/main/source).

Some minor design details have been adjusted due to the nature and constraints of technical tests in general. Without the opportunity to clarify certain aspects with a designer, I made reasonable assumptions on spacing and layout to keep the project functional and coherent.

**Example:**  
Section **spacing values** (top/bottom) in the design included 120px, 115px, 105px, and 95px. Ideally, a system would be defined to simplify this. For maintainability, 115px and 120px could be merged into 120px, and 105px and 95px into 100px. The visual difference is subtle and barely noticeable, but it makes the codebase much more consistent, maintainable, and efficient.

## Getting Started

**Install dependencies:**

```bash
pnpm install
```

**Run the development server locally:**

```bash
pnpm run dev
```
