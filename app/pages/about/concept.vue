<template>
  <div class="page">
    <SiteNav />

    <main class="canvas">
      <AboutSubNav />

      <section class="content-card">
        <p class="section-kicker">About Us</p>
        <h1 class="page-title">Concept</h1>
        <p class="lead">
          The IRCYS concept combines competition, mentorship, and publication-ready thinking in one
          coherent program journey.
        </p>
      </section>

      <section class="concept-list" aria-label="Program concept flow">
        <article class="concept-card">
          <h2>1. Explore</h2>
          <p>Participants identify meaningful problems and scope realistic research questions.</p>
        </article>
        <article class="concept-card">
          <h2>2. Build</h2>
          <p>Students design methods, collect evidence, and refine results with mentor feedback.</p>
        </article>
        <article class="concept-card">
          <h2>3. Present</h2>
          <p>Finalists communicate outcomes to judges and a global audience with clear reasoning.</p>
        </article>
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
  display: grid;
  gap: 1.2rem;
}

.content-card,
.concept-card {
  background: rgba(255, 255, 255, 0.9);
  padding: 2.2rem 2.5rem;
  border-radius: 24px;
  box-shadow: 0 18px 34px rgba(60, 47, 32, 0.1);
}

.section-kicker {
  margin: 0 0 0.6rem;
  font-size: 0.75rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #7b5a36;
}

.page-title {
  margin: 0 0 0.9rem;
  font-size: clamp(2rem, 4vw, 2.6rem);
  font-family: "Erode", "Times New Roman", serif;
  color: #241c14;
}

.lead {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.7;
  color: #4b3f32;
}

.concept-list {
  display: grid;
  gap: 1rem;
}

.concept-card h2 {
  margin: 0 0 0.65rem;
  font-size: 1.1rem;
  color: #2a2118;
}

.concept-card p {
  margin: 0;
  color: #4f4337;
  line-height: 1.65;
}

@media (max-width: 900px) {
  .page {
    padding: 2rem 1.5rem 2rem;
  }

  .canvas {
    padding: 2.4rem 0 3rem;
  }

  .content-card,
  .concept-card {
    padding: 1.8rem;
  }
}
</style>
