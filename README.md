# notiz.dev design

[![npm version](https://badge.fury.io/js/%40notiz%2Fngx-design.svg)](https://www.npmjs.com/@notiz/ngx-design)

## Colors

| CSS Variable  | Tailwindcss   | Usage           | Value     |
| ------------- | ------------- | --------------- | --------- |
| `--blue`      | `*-blue`      | notiz blue      | `#55b9f3` |
| `--cyan`      | `*-cyan`      | notiz cyan      | `#55f3de` |
| `--dark-blue` | `*-dark-blue` | notiz dark blue | `#556af3` |

Colors for **dark** and **light** mode.

| CSS Variable         | Tailwindcss     | Usage                     | Dark      | Light     |
| -------------------- | --------------- | ------------------------- | --------- | --------- |
| `--background`       | `*-background`  | Background color          | `#121212` | `#f4ffff` |
| `--tabs`             | `*-tabs`        | Background color for tabs | `#2d3748` | `#edf2f7` |
| `--text-color`       | `*-color`       | Text color                | `#ffffff` | `#1a202c` |
| `--text-color-light` | `*-color-light` | Text color light          | `#a0aec0` | `#718096` |

Copy the following styles to apply notiz color palette.

```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

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
  --tabs: #2d3748;
  --text-color: #ffffff;
  --text-color-light: #a0aec0;
}

.light {
  --background: #f4ffff;
  --tabs: #edf2f7;
  --text-color: #1a202c;
  --text-color-light: #718096;
}
```
