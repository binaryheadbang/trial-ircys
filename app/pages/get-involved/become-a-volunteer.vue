<template>
  <div class="page">
    <SiteNav />

    <main class="canvas">
      <section class="placeholder">
        <p class="section-kicker">Get involved</p>
        <h1 class="page-title">Become a Volunteer</h1>
        <p class="page-copy">Volunteer opportunities and sign-up info.</p>
      </section>
    </main>
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  padding: 0.8rem 3rem 2rem;
  background-color: #f3f2ed;
  background-image: url("/img/bg2.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.canvas {
  padding: 3rem 0 4rem;
}

.placeholder {
  max-width: 720px;
  background: rgba(255, 255, 255, 0.86);
  padding: 2.5rem 3rem;
  border-radius: 28px;
  box-shadow: 0 20px 40px rgba(60, 47, 32, 0.12);
}

.section-kicker {
  margin: 0 0 0.6rem;
  font-size: 0.75rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #7b5a36;
}

.page-title {
  margin: 0 0 1rem;
  font-size: clamp(2rem, 4vw, 2.6rem);
  font-family: "Erode", "Times New Roman", serif;
  color: #241c14;
}

.page-copy {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.7;
  color: #4b3f32;
}

@media (max-width: 900px) {
  .page {
    padding: 2rem 1.5rem 2rem;
  }

  .canvas {
    padding: 2.4rem 0 3rem;
  }

  .placeholder {
    padding: 2rem;
  }
}
</style>

