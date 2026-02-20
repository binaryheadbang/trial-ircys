<template>
  <div class="page">
    <SiteNav />

    <main class="canvas">
      <AboutSubNav />

      <section class="content-card">
        <p class="section-kicker">About Us</p>
        <h1 class="page-title">Concept</h1>
        <p class="lead">
          The IRCYS concept is an inclusive conference that can be attended by all parties, not just
          researchers, students, and teachers, but also by all stakeholders. The aim is to bring
          research to a more grassroots level and be inclusive without discrimination.
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

        <article class="concept-card concept-card--feature">
          <p class="card-kicker">Conference Simulation</p>
          <h2>Professional Research Presentation Experience</h2>
          <p>
            With the conference format, participants will be faced with a conference simulation that
            is similar to the real one, so that participants have the experience of presenting their
            research professionally.
          </p>
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
  gap: 1.25rem;
  width: min(1180px, 100%);
  margin: 0 auto;
}

.content-card,
.concept-card {
  background: rgba(255, 255, 255, 0.9);
  padding: 2.2rem 2.5rem;
  border-radius: 24px;
  box-shadow: 0 18px 34px rgba(60, 47, 32, 0.1);
}

.content-card {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  background: #967751;
  border: 1px solid rgba(68, 48, 25, 0.25);
}

.content-card::before {
  content: "";
  position: absolute;
  inset: auto -4.2rem -3.8rem auto;
  width: clamp(220px, 30vw, 340px);
  aspect-ratio: 1 / 1;
  background: url("/img/4.png") center / contain no-repeat;
  opacity: 0.12;
  filter: grayscale(1) sepia(0.6) saturate(0.7) brightness(1.55) contrast(0.9);
  pointer-events: none;
  z-index: 0;
}

.content-card > * {
  position: relative;
  z-index: 1;
}

.section-kicker {
  margin: 0 0 0.6rem;
  font-size: 0.75rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #7b5a36;
}

.content-card .section-kicker {
  color: #f0e0cb;
}

.page-title {
  margin: 0 0 0.9rem;
  font-size: clamp(2rem, 4vw, 2.6rem);
  font-family: "Erode", "Times New Roman", serif;
  color: #241c14;
}

.content-card .page-title {
  color: #ffffff;
}

.lead {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.7;
  color: #4b3f32;
}

.content-card .lead {
  color: #f3e7da;
}

.concept-list {
  display: grid;
  gap: 1.1rem;
  grid-template-columns: repeat(12, minmax(0, 1fr));
}

.concept-card {
  grid-column: span 4;
}

.concept-card:nth-child(-n + 3) {
  background: rgba(255, 255, 255, 0.9);
  border: none;
}

.concept-card--feature {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  grid-column: 1 / -1;
  background: linear-gradient(145deg, rgba(75, 63, 50, 0.98), rgba(43, 35, 27, 0.97));
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.concept-card--feature::before {
  content: "";
  position: absolute;
  inset: auto -6rem -5.6rem auto;
  width: clamp(280px, 34vw, 420px);
  aspect-ratio: 1 / 1;
  background: url("/img/logo.png") center / contain no-repeat;
  opacity: 0.08;
  filter: grayscale(1) sepia(0.55) saturate(0.72) brightness(1.7) contrast(0.92);
  pointer-events: none;
  z-index: 0;
}

.concept-card--feature > * {
  position: relative;
  z-index: 1;
}

.card-kicker {
  margin: 0 0 0.55rem;
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #aba8a8;
}

.concept-card.concept-card--feature h2 {
  color: #ffffff;
}

.concept-card.concept-card--feature p {
  color: #bba7a7;
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

.concept-card:nth-child(-n + 3) h2 {
  color: #2a2118;
}

.concept-card:nth-child(-n + 3) p {
  color: #4f4337;
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

  .concept-list {
    grid-template-columns: 1fr;
  }

  .concept-card,
  .concept-card--feature {
    grid-column: auto;
  }
}
</style>
