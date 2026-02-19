<template>
  <NuxtPage />
</template>

<script setup>
</script>

<style>
@font-face {
  font-family: "Erode";
  src: url("/font/erode/Erode-Regular.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Erode";
  src: url("/font/erode/Erode-Medium.otf") format("opentype");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Erode";
  src: url("/font/erode/Erode-Semibold.otf") format("opentype");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Erode";
  src: url("/font/erode/Erode-Bold.otf") format("opentype");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Inter";
  src: url("/font/inter/Inter-VariableFont_opsz,wght.ttf") format("truetype");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Inter";
  src: url("/font/inter/Inter-Italic-VariableFont_opsz,wght.ttf") format("truetype");
  font-weight: 100 900;
  font-style: italic;
  font-display: swap;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --app-bg-color: #f3f2ed;
  --app-bg-image: url("/img/bg2.png");
}

html,
body,
#__nuxt {
  min-height: 100%;
}

body {
  margin: 0;
  background-color: var(--app-bg-color);
  background-image: var(--app-bg-image);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  color: #3a342c;
  font-family: "Inter", "Segoe UI", sans-serif;
}

/* Force one shared backdrop across all routes. */
.page {
  background-color: transparent !important;
  background-image: none !important;
}

.page::before {
  display: none !important;
}
</style>
