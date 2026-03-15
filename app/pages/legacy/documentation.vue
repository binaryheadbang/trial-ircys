<template>
  <div class="page">
    <SiteNav />

    <main class="canvas">
      <LegacySubNav />

      <section class="content-card">
        <div class="content-copy">
          <p class="section-kicker">Legacy</p>
          <h1 class="page-title">Documentation</h1>
          <p class="lead">
            This section preserves IRCYS activity documentation from previous years. The archive is
            being curated so only selected and relevant materials will be published as part of the
            official record.
          </p>
        </div>

        <aside class="status-panel" aria-label="Archive status">
          <p class="panel-kicker">Archive Status</p>
          <h2>Coming Soon</h2>
          <p class="panel-copy">
            Photo and event documentation are currently under review and selection before public
            release.
          </p>
        </aside>
      </section>

      <section class="documentation-feature" aria-label="Documentation archive overview">
        <div class="documentation-feature__copy">
          <p class="card-kicker">Legacy - Documentation</p>
          <h2>Official Documentation Archive</h2>
          <p class="feature-copy">
            IRCYS documentation will be published as a curated archive of selected event moments,
            official sessions, and institutional records from each annual cycle.
          </p>
        </div>

        <div class="feature-highlights">
          <div class="feature-pill">
            <strong>Curated Release</strong>
            <span>Only selected documentation will be published</span>
          </div>
          <div class="feature-pill">
            <strong>Official Record</strong>
            <span>Prepared as part of the formal IRCYS archive</span>
          </div>
          <div class="feature-pill">
            <strong>Yearly Collection</strong>
            <span>Organized by cycle once curation is completed</span>
          </div>
        </div>
      </section>

      <section class="documentation-grid" aria-label="Documentation archive by year">
        <a
          class="documentation-card documentation-card--year documentation-card--current"
          href="#"
          aria-label="Open IRCYS Official Documentation 2026"
        >
          <div class="year-head">
            <span class="year-badge">2026</span>
            <span class="year-status">Current Cycle</span>
          </div>
          <h2>IRCYS Official Documentation 2026</h2>
          <p>
            Documentation from the current IRCYS cycle will be compiled after the main event and
            arranged into an official archive release.
          </p>
          <span class="year-link">Coming Soon</span>
        </a>

        <a
          class="documentation-card documentation-card--year"
          href="#"
          aria-label="Open IRCYS Official Documentation 2025"
        >
          <div class="year-head">
            <span class="year-badge">2025</span>
            <span class="year-status">Archived</span>
          </div>
          <h2>IRCYS Official Documentation 2025</h2>
          <p>
            Selected documentation from the previous cycle is under review and will be prepared as a
            structured visual archive.
          </p>
          <span class="year-link">Coming Soon</span>
        </a>

        <a
          class="documentation-card documentation-card--year"
          href="#"
          aria-label="Open IRCYS Official Documentation 2024"
        >
          <div class="year-head">
            <span class="year-badge">2024</span>
            <span class="year-status">Archived</span>
          </div>
          <h2>IRCYS Official Documentation 2024</h2>
          <p>
            Historical documentation will be filtered and published selectively to preserve relevance
            and consistency in the institutional record.
          </p>
          <span class="year-link">Coming Soon</span>
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
.documentation-card {
  background: rgba(255, 255, 255, 0.9);
  padding: 2.2rem 2.5rem;
  border-radius: 24px;
  box-shadow: 0 18px 34px rgba(60, 47, 32, 0.1);
}

.content-card {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(260px, 0.5fr);
  gap: 1.2rem;
  border: 1px solid rgba(123, 90, 54, 0.14);
  background: linear-gradient(140deg, rgba(248, 246, 241, 0.96), rgba(255, 255, 255, 0.98));
}

.content-copy {
  padding-right: 0.4rem;
}

.status-panel {
  padding: 1.45rem 1.5rem;
  border-radius: 20px;
  background: linear-gradient(150deg, rgba(238, 231, 218, 0.92), rgba(248, 244, 236, 0.96));
  border: 1px solid rgba(123, 90, 54, 0.14);
  display: grid;
  gap: 0.45rem;
  align-content: start;
}

.panel-kicker,
.section-kicker,
.card-kicker,
.year-kicker {
  margin: 0 0 0.45rem;
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #7b5a36;
}

.page-title {
  margin: 0 0 0.9rem;
  font-size: clamp(2rem, 4vw, 2.7rem);
  font-family: "Erode", "Times New Roman", serif;
  color: #241c14;
}

.lead,
.panel-copy,
.feature-copy,
.year-body p {
  margin: 0;
  font-size: 1.02rem;
  line-height: 1.7;
  color: #4b3f32;
}

.status-panel h2,
.documentation-card h2 {
  margin: 0;
  color: #241c14;
}

.documentation-feature {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  display: grid;
  gap: 1.2rem;
  grid-template-columns: minmax(0, 1.05fr) minmax(280px, 0.95fr);
  padding: 2.2rem 2.5rem;
  border-radius: 24px;
  background: linear-gradient(145deg, rgba(75, 63, 50, 0.98), rgba(43, 35, 27, 0.97));
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 18px 34px rgba(60, 47, 32, 0.1);
}

.documentation-feature::after {
  content: "";
  position: absolute;
  inset: auto -4.8rem -4rem auto;
  width: clamp(150px, 20vw, 220px);
  aspect-ratio: 1 / 1;
  background: url("/img/logo.png") center / contain no-repeat;
  opacity: 0.06;
  filter: grayscale(1) sepia(0.55) saturate(0.7) brightness(1.65) contrast(0.92);
  pointer-events: none;
}

.documentation-feature > * {
  position: relative;
  z-index: 1;
}

.documentation-feature .card-kicker,
.documentation-feature h2,
.documentation-feature .feature-copy {
  color: #f2e8dc;
}

.documentation-feature .card-kicker {
  color: #d7c4ad;
}

.documentation-feature__copy {
  display: grid;
  gap: 0.65rem;
  align-content: start;
}

.feature-copy {
  max-width: 32rem;
}

.feature-highlights {
  display: grid;
  gap: 0.85rem;
  align-content: start;
}

.feature-pill {
  padding: 1rem 1.05rem;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.feature-pill strong {
  display: block;
  margin-bottom: 0.22rem;
  color: #ffffff;
}

.feature-pill span {
  color: #d9cbbb;
  line-height: 1.55;
}

.documentation-grid {
  display: grid;
  gap: 1.1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.documentation-card--year {
  display: grid;
  gap: 1rem;
  background: linear-gradient(140deg, rgba(248, 246, 241, 0.98), rgba(255, 255, 255, 0.98));
  border: 1px solid rgba(123, 90, 54, 0.14);
  text-decoration: none;
  color: inherit;
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
}

.documentation-card--year:hover,
.documentation-card--year:focus {
  transform: translateY(-2px);
  box-shadow: 0 22px 36px rgba(60, 47, 32, 0.14);
  border-color: rgba(123, 90, 54, 0.24);
}

.documentation-card--current {
  background: linear-gradient(145deg, rgba(244, 239, 231, 0.98), rgba(255, 252, 247, 0.98));
  border-color: rgba(123, 90, 54, 0.22);
}

.year-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.9rem;
}

.year-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 4.7rem;
  padding: 0.65rem 0.95rem;
  border-radius: 999px;
  background: rgba(123, 90, 54, 0.1);
  color: #7b5a36;
  font-family: "Erode", "Times New Roman", serif;
  font-size: 1.45rem;
  line-height: 1;
}

.year-status {
  color: #6d5a46;
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.documentation-card--year h2 {
  font-size: 1.1rem;
  margin: 0;
  color: #2a2118;
}

.documentation-card--year p {
  margin: 0;
  color: #4f4337;
  line-height: 1.68;
}

.year-link {
  display: inline-flex;
  align-items: center;
  margin-top: 0.25rem;
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
  .documentation-feature,
  .documentation-grid {
    grid-template-columns: 1fr;
  }

  .content-card,
  .documentation-card,
  .documentation-feature {
    padding: 1.8rem;
  }

}
</style>
