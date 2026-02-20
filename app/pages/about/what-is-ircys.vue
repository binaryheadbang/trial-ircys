<template>
  <div class="page">
    <SiteNav />

    <main class="canvas">
      <AboutSubNav />

      <section class="content-card">
        <p class="section-kicker">About Us</p>
        <h1 class="page-title">What is IRCYS?</h1>
        <p class="lead">
          The International Research Competition for Young Scientists (IRCYS) is a global competition
          designed for students who want to present structured, evidence-based research.
        </p>
        <p class="lead">
          Beyond project showcases, IRCYS emphasizes research design, scientific communication,
          mentorship, and measurable impact.
        </p>
      </section>

      <section class="details-grid" aria-label="IRCYS details">
        <article class="detail-card detail-card--accent">
          <h2>Why IRCYS exists</h2>
          <p>
            We bridge school-level curiosity with professional research practices so students can build
            stronger scientific thinking before entering university.
          </p>
        </article>

        <article class="detail-card detail-card--highlight">
          <h2>What participants gain</h2>
          <ul>
            <li>Structured feedback from judges and mentors</li>
            <li>International exposure for original research work</li>
            <li>Opportunities for scholarship and collaboration</li>
          </ul>
        </article>

        <article class="detail-card">
          <h2>7th Edition in 2026</h2>
          <p>
            Moving to its 7th Edition in 2026, IRCYS transforms into a mid-year grand summit,
            inviting young brilliant minds to gather in the Island of Gods, Bali, to present
            their discoveries.
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
  gap: 1.4rem;
  width: min(1180px, 100%);
  margin: 0 auto;
}

.content-card,
.detail-card {
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

.lead + .lead {
  margin-top: 0.8rem;
}

.details-grid {
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(12, minmax(0, 1fr));
}

.detail-card:nth-child(1),
.detail-card:nth-child(2) {
  grid-column: span 6;
}

.detail-card:last-child {
  grid-column: 1 / -1;
}

.detail-card--highlight {
  background: linear-gradient(135deg, rgba(255, 249, 237, 0.95), rgba(255, 255, 255, 0.98));
  border: 1px solid rgba(123, 90, 54, 0.2);
}

.detail-card--accent {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  background: #4b3f32;
  border: 1px solid rgba(80, 56, 30, 0.35);
}

.detail-card--accent::before {
  content: "";
  position: absolute;
  inset: auto -5.6rem -5.2rem auto;
  width: clamp(240px, 36vw, 380px);
  aspect-ratio: 1 / 1;
  background: url("/img/logo.png") center / contain no-repeat;
  opacity: 0.08;
  filter: grayscale(1) sepia(0.55) saturate(0.7) brightness(1.9) contrast(0.85);
  pointer-events: none;
  z-index: 0;
}

.detail-card--accent > * {
  position: relative;
  z-index: 1;
}

.detail-card.detail-card--accent p,
.detail-card.detail-card--accent li {
  color: #bba7a7;
}

.detail-card.detail-card--accent h2 {
  color: #ffffff;
}

.detail-card h2 {
  margin: 0 0 0.8rem;
  font-size: 1.22rem;
  color: #2a2118;
}

.detail-card p,
.detail-card li {
  color: #4f4337;
  line-height: 1.65;
}

.detail-card ul {
  margin: 0;
  padding-left: 1.1rem;
}

@media (max-width: 900px) {
  .page {
    padding: 2rem 1.5rem 2rem;
  }

  .canvas {
    padding: 2.4rem 0 3rem;
  }

  .content-card,
  .detail-card {
    padding: 1.8rem;
  }

  .details-grid {
    grid-template-columns: 1fr;
  }

  .detail-card:nth-child(1),
  .detail-card:nth-child(2),
  .detail-card:last-child,
  .detail-card--highlight {
    grid-column: auto;
  }
}
</style>
