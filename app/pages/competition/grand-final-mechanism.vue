<template>
  <div class="page">
    <SiteNav />

    <main class="canvas">
      <CompetitionSubNav />

      <section class="content-card">
        <p class="section-kicker">Competition</p>
        <h1 class="page-title">Grand Final Mechanism</h1>
        <p class="lead">
          The grand final combines technical defense, public presentation, and panel discussion to
          evaluate both scientific quality and communication clarity.
        </p>
      </section>

      <section class="mechanism-grid" aria-label="Grand final structure">
        <article class="mechanism-card">
          <h2>Research Defense</h2>
          <p>Finalists answer technical questions from expert judges.</p>
        </article>
        <article class="mechanism-card">
          <h2>Public Showcase</h2>
          <p>Teams present projects to peers, educators, and partner institutions.</p>
        </article>
        <article class="mechanism-card">
          <h2>Jury Deliberation</h2>
          <p>Scoring is consolidated using rubric-based weighting across criteria.</p>
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
.mechanism-card {
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

.mechanism-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.mechanism-card h2 {
  margin: 0 0 0.65rem;
  font-size: 1.1rem;
  color: #2a2118;
}

.mechanism-card p {
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
  .mechanism-card {
    padding: 1.8rem;
  }
}
</style>
