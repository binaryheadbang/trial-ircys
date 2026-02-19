<template>
  <div class="page">
    <SiteNav />

    <main class="canvas">
      <CompetitionSubNav />

      <section class="content-card">
        <p class="section-kicker">Competition</p>
        <h1 class="page-title">Categories</h1>
        <p class="lead">
          IRCYS categories are designed to accommodate both foundational and interdisciplinary
          research projects from young scientists worldwide.
        </p>
      </section>

      <section class="category-grid" aria-label="Competition categories">
        <article class="category-card">
          <h2>STEM Innovation</h2>
          <p>Engineering prototypes, computational methods, and scientific experimentation.</p>
        </article>
        <article class="category-card">
          <h2>Health &amp; Life Sciences</h2>
          <p>Biology, public health, and medical-oriented research topics.</p>
        </article>
        <article class="category-card">
          <h2>Social Impact &amp; Policy</h2>
          <p>Data-driven studies addressing social systems, governance, and communities.</p>
        </article>
        <article class="category-card">
          <h2>Creative Technology</h2>
          <p>Design-led innovation where technology enables new forms of problem solving.</p>
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
.category-card {
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

.category-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.category-card h2 {
  margin: 0 0 0.65rem;
  font-size: 1.1rem;
  color: #2a2118;
}

.category-card p {
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
  .category-card {
    padding: 1.8rem;
  }
}
</style>
