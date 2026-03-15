<template>
  <div class="page">
    <SiteNav />

    <main class="canvas">
      <LegacySubNav />

      <section class="content-card">
        <p class="section-kicker">Legacy</p>
        <h1 class="page-title">Paper Collective</h1>
        <p class="lead">
          To honor the academic hard work of our participants, IRCYS introduces the
          <strong> IRCYS Paper Collective</strong>.
        </p>
      </section>

      <section class="paper-grid" aria-label="Paper collective content">
        <article class="paper-card paper-card--feature">
          <p class="card-kicker">Legacy - Paper Collective</p>
          <h2>IRCYS Paper Collective</h2>
          <div class="paper-points paper-points--triple">
            <article class="paper-point">
              <h3>What is it?</h3>
              <p>
                An official compilation (Proceeding) of full papers submitted by the Grand Finalists,
                published as a digital archive and repository reference for IRCYS.
              </p>
            </article>
            <article class="paper-point">
              <h3>Access</h3>
              <p>Available as a Digital E-Book and on the Online Repository.</p>
            </article>
            <article class="paper-point">
              <h3>Requirement</h3>
              <p>Full Paper must be submitted before the registration deadline closes.</p>
            </article>
          </div>
        </article>

        <a class="paper-card paper-card--collection" href="#" aria-label="Open IRCYS Paper Collective 2026">
          <p class="collection-kicker">2026 Edition</p>
          <h2>IRCYS Paper Collective 2026</h2>
          <p>Official proceeding of Grand Finalist full papers for the current cycle.</p>
          <span class="collection-link">Open Collection</span>
        </a>

        <a class="paper-card paper-card--collection" href="#" aria-label="Open IRCYS Paper Collective 2025">
          <p class="collection-kicker">2025 Edition</p>
          <h2>IRCYS Paper Collective 2025</h2>
          <p>Archived finalist papers documenting research outcomes and selected works.</p>
          <span class="collection-link">Open Collection</span>
        </a>

        <a class="paper-card paper-card--collection" href="#" aria-label="Open IRCYS Paper Collective 2024">
          <p class="collection-kicker">2024 Edition</p>
          <h2>IRCYS Paper Collective 2024</h2>
          <p>Previous season collection preserved as part of the IRCYS legacy archive.</p>
          <span class="collection-link">Open Collection</span>
        </a>
      </section>

    </main>

    <SiteFooter />
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
.paper-card {
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

.lead strong {
  color: #2a2118;
}

.paper-grid {
  display: grid;
  gap: 1.1rem;
  grid-template-columns: repeat(12, minmax(0, 1fr));
}

.paper-card--feature {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  grid-column: 1 / -1;
  background: linear-gradient(145deg, rgba(75, 63, 50, 0.98), rgba(43, 35, 27, 0.97));
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.paper-card--feature::after {
  content: "";
  position: absolute;
  inset: auto -5rem -5rem auto;
  width: clamp(180px, 24vw, 280px);
  aspect-ratio: 1 / 1;
  background: url("/img/logo.png") center / contain no-repeat;
  opacity: 0.06;
  filter: grayscale(1) sepia(0.55) saturate(0.7) brightness(1.65) contrast(0.92);
  pointer-events: none;
}

.paper-card--feature > * {
  position: relative;
  z-index: 1;
}

.card-kicker {
  margin: 0 0 0.55rem;
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #d7c4ad;
}

.paper-card h2 {
  margin: 0 0 0.65rem;
  font-size: 1.1rem;
  color: #2a2118;
}

.paper-card p {
  margin: 0;
  color: #4f4337;
  line-height: 1.65;
}

.page-footer {
  display: grid;
  gap: 0.25rem;
  justify-items: center;
  padding: 1rem 1.2rem 0.25rem;
  text-align: center;
}

.page-footer p {
  margin: 0;
  color: #4b3f32;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.page-footer span {
  color: #6d5a46;
  font-size: 0.92rem;
  line-height: 1.6;
}

.paper-card--feature h2,
.paper-card--feature p {
  color: #f2e8dc;
}

.paper-points {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 1rem;
}

.paper-point {
  padding: 1rem 1.1rem;
  border-radius: 18px;
  background: rgba(241, 248, 246, 0.9);
  border: 1px solid rgba(72, 103, 96, 0.16);
}

.paper-point h3 {
  margin: 0 0 0.45rem;
  font-size: 1rem;
  color: #264c46;
}

.paper-point p {
  color: #355b55;
}

.paper-card--collection {
  grid-column: span 4;
  display: grid;
  gap: 0.65rem;
  text-decoration: none;
  color: inherit;
  background: linear-gradient(140deg, rgba(247, 251, 250, 0.98), rgba(255, 255, 255, 0.98));
  border: 1px solid rgba(72, 103, 96, 0.16);
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
}

.paper-card--collection:hover,
.paper-card--collection:focus {
  transform: translateY(-2px);
  box-shadow: 0 22px 36px rgba(60, 47, 32, 0.14);
  border-color: rgba(123, 90, 54, 0.24);
}

.collection-kicker {
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #7b5a36;
}

.paper-card--collection h2 {
  margin-bottom: 0.2rem;
}

.paper-card--collection p {
  color: #4f4337;
}

.collection-link {
  display: inline-flex;
  align-items: center;
  margin-top: 0.2rem;
  color: #7b5a36;
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}

@media (max-width: 900px) {
  .page {
    padding: 2rem 1.5rem 2rem;
  }

  .canvas {
    padding: 2.4rem 0 3rem;
  }

  .content-card,
  .paper-card {
    padding: 1.8rem;
  }

  .paper-grid {
    grid-template-columns: 1fr;
  }

  .paper-card--feature,
  .paper-card--collection {
    grid-column: auto;
  }

}
</style>
