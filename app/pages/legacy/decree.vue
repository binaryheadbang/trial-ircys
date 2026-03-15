<template>
  <div class="page">
    <SiteNav />

    <main class="canvas">
      <LegacySubNav />

      <section class="content-card" aria-label="Decree overview">
        <div class="content-copy">
          <p class="section-kicker">Legacy</p>
          <h1 class="page-title">Decree</h1>
          <p class="lead">
            This section contains the archive of official IRCYS decrees, preserved as formal records
            for each cycle and ready to be opened individually.
          </p>
        </div>
        <aside class="decree-panel">
          <p class="panel-kicker">Archive Note</p>
          <p class="panel-copy">
            Each decree serves as an official institutional reference for implementation,
            governance, and annual policy direction.
          </p>
        </aside>
      </section>

      <section class="decree-list" aria-label="Decree archive">
        <article class="decree-card decree-card--summary">
          <p class="card-kicker">Legacy - Decree</p>
          <h2>Decree Archive</h2>
          <p class="feature-copy">
            A structured archive of official decree documents issued for IRCYS implementation,
            governance, and annual policy direction.
          </p>
          <div class="summary-meta">
            <div>
              <strong>Official</strong>
              <span>Formal institutional record</span>
            </div>
            <div>
              <strong>Archived</strong>
              <span>Maintained by yearly cycle</span>
            </div>
          </div>
        </article>

        <div class="decree-entries">
          <a class="decree-card decree-card--entry" href="#" aria-label="Open IRCYS Decree 2026">
            <div class="entry-year">
              <strong>2026</strong>
              <span>Current Cycle</span>
            </div>
            <div class="entry-body">
              <p class="entry-kicker">Official Decree</p>
              <h2>IRCYS Official Decree 2026</h2>
              <p>Formal decree for the 2026 cycle covering implementation and official provisions.</p>
              <span class="entry-link">Open Decree</span>
            </div>
          </a>

          <a class="decree-card decree-card--entry" href="#" aria-label="Open IRCYS Decree 2025">
            <div class="entry-year">
              <strong>2025</strong>
              <span>Archived</span>
            </div>
            <div class="entry-body">
              <p class="entry-kicker">Official Decree</p>
              <h2>IRCYS Official Decree 2025</h2>
              <p>Archived decree document for governance and annual operational direction.</p>
              <span class="entry-link">Open Decree</span>
            </div>
          </a>

          <a class="decree-card decree-card--entry" href="#" aria-label="Open IRCYS Decree 2024">
            <div class="entry-year">
              <strong>2024</strong>
              <span>Archived</span>
            </div>
            <div class="entry-body">
              <p class="entry-kicker">Official Decree</p>
              <h2>IRCYS Official Decree 2024</h2>
              <p>Reference decree from the previous season, preserved as part of IRCYS records.</p>
              <span class="entry-link">Open Decree</span>
            </div>
          </a>
        </div>
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
.decree-card {
  background: rgba(255, 255, 255, 0.9);
  padding: 2.2rem 2.5rem;
  border-radius: 24px;
  box-shadow: 0 18px 34px rgba(60, 47, 32, 0.1);
}

.content-card {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(260px, 0.52fr);
  gap: 1.2rem;
  border: 1px solid rgba(123, 90, 54, 0.14);
  background: linear-gradient(140deg, rgba(248, 246, 241, 0.96), rgba(255, 255, 255, 0.98));
}

.content-copy {
  padding-right: 0.4rem;
}

.decree-panel {
  padding: 1.4rem 1.45rem;
  border-radius: 20px;
  background: linear-gradient(145deg, rgba(75, 63, 50, 0.98), rgba(43, 35, 27, 0.97));
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.panel-kicker {
  margin: 0 0 0.45rem;
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #d7c4ad;
}

.panel-copy {
  margin: 0;
  color: #d9cbbb;
  line-height: 1.65;
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

.decree-list {
  display: grid;
  gap: 1.1rem;
  grid-template-columns: minmax(260px, 0.42fr) minmax(0, 1fr);
  align-items: start;
}

.decree-card--summary {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  grid-column: 1;
  display: grid;
  gap: 1rem;
  background: linear-gradient(145deg, rgba(75, 63, 50, 0.98), rgba(43, 35, 27, 0.97));
  border: 1px solid rgba(255, 255, 255, 0.08);
  align-self: start;
}

.decree-card--summary::after {
  content: "";
  position: absolute;
  inset: auto -4.8rem -4.4rem auto;
  width: clamp(150px, 20vw, 220px);
  aspect-ratio: 1 / 1;
  background: url("/img/logo.png") center / contain no-repeat;
  opacity: 0.06;
  filter: grayscale(1) sepia(0.55) saturate(0.7) brightness(1.65) contrast(0.92);
  pointer-events: none;
}

.decree-card--summary > * {
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

.feature-copy {
  max-width: 24rem;
}

.summary-meta {
  display: grid;
  gap: 0.8rem;
}

.summary-meta div {
  padding-top: 0.8rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.summary-meta strong {
  display: block;
  color: #ffffff;
  margin-bottom: 0.18rem;
}

.summary-meta span {
  color: #d9cbbb;
  line-height: 1.55;
}

.decree-entries {
  grid-column: 2;
  display: grid;
  gap: 1.1rem;
  align-content: start;
}

.decree-card--entry {
  display: grid;
  grid-template-columns: 130px minmax(0, 1fr);
  gap: 1rem;
  text-decoration: none;
  color: inherit;
  background: linear-gradient(140deg, rgba(247, 251, 250, 0.98), rgba(255, 255, 255, 0.98));
  border: 1px solid rgba(72, 103, 96, 0.16);
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
}

.decree-card--entry:hover,
.decree-card--entry:focus {
  transform: translateY(-2px);
  box-shadow: 0 22px 36px rgba(60, 47, 32, 0.14);
  border-color: rgba(123, 90, 54, 0.24);
}

.entry-kicker {
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #7b5a36;
}

.entry-year {
  display: grid;
  align-content: start;
  gap: 0.2rem;
  padding-right: 0.9rem;
  border-right: 1px solid rgba(123, 90, 54, 0.16);
}

.entry-year strong {
  font-family: "Erode", "Times New Roman", serif;
  font-size: 2rem;
  line-height: 1;
  color: #7b5a36;
}

.entry-year span {
  color: #6d5a46;
  font-size: 0.82rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.entry-body {
  display: grid;
  gap: 0.35rem;
}

.entry-link {
  display: inline-flex;
  align-items: center;
  margin-top: 0.2rem;
  color: #7b5a36;
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.decree-card h2 {
  margin: 0 0 0.65rem;
  font-size: 1.1rem;
  color: #2a2118;
}

.decree-card p {
  margin: 0;
  color: #4f4337;
  line-height: 1.65;
}

.decree-card--summary h2,
.decree-card--summary p {
  color: #f2e8dc;
}

@media (max-width: 900px) {
  .page {
    padding: 2rem 1.5rem 2rem;
  }

  .canvas {
    padding: 2.4rem 0 3rem;
  }

  .content-card,
  .decree-card {
    padding: 1.8rem;
  }

  .content-card,
  .decree-list,
  .decree-card--entry {
    grid-template-columns: 1fr;
  }

  .decree-card--summary,
  .decree-entries,
  .decree-card--entry {
    grid-column: auto;
  }

  .entry-year {
    padding-right: 0;
    padding-bottom: 0.8rem;
    border-right: 0;
    border-bottom: 1px solid rgba(123, 90, 54, 0.16);
  }
}
</style>
