# notiz.dev design

[![npm version](https://badge.fury.io/js/%40notiz%2Fngx-design.svg)](https://www.npmjs.com/@notiz/ngx-design)

## Colors

| CSS Variable  | Tailwindcss   | Usage           | Value     |
| ------------- | ------------- | --------------- | --------- |
| `--blue`      | `*-blue`      | notiz blue      | `#55b9f3` |
| `--cyan`      | `*-cyan`      | notiz cyan      | `#55f3de` |
| `--dark-blue` | `*-dark-blue` | notiz dark blue | `#556af3` |

Colors for **dark** and **light** mode.

| CSS Variable | Tailwindcss | Usage                     | Dark      | Light |
| ------------ | ----------- | ------------------------- | --------- | ----- |
| `--tabs`     | `*-tabs`    | Background color for tabs | `#2d3748` | `#`

Copy the following styles to apply notiz color palette.

```css
:root {
  --blue: #55b9f3;
  --cyan: #55f3de;
  --dark-blue: #556af3;
}

body {
  @apply bg-background text-color;
}

.dark {
  --background: #121212;
  --text-color: #ffffff;
  --text-color-light: #a0aec0;
  --tabs: #2d3748;
}

.light {
  --background: #f4ffff;
  --text-color: #1a202c;
  --text-color-light: #718096;
  --tabs: #2d3748;
}
```
