<template>
  <div class="page">
    <SiteNav />

    <main class="canvas">
      <LegacySubNav />

      <section class="content-card" aria-label="Legacy overview">
        <div class="content-copy">
          <p class="section-kicker">Legacy</p>
          <h1 class="page-title">Legacy</h1>
          <p class="lead">
            The Legacy section captures IRCYS outcomes that remain useful beyond each annual cycle,
            including official records, documentation, and research references.
          </p>
        </div>
        <aside class="legacy-panel">
          <p class="panel-kicker">Archive Focus</p>
          <div class="panel-item">
            <strong>Records</strong>
            <span>Institutional decisions and official reference materials.</span>
          </div>
          <div class="panel-item">
            <strong>Documentation</strong>
            <span>Published outputs, archives, and research continuity.</span>
          </div>
          <div class="panel-item">
            <strong>Access</strong>
            <span>Resources preserved for future organizers and participants.</span>
          </div>
        </aside>
      </section>

      <section class="legacy-grid" aria-label="Legacy highlights">
        <article class="legacy-card legacy-card--memory">
          <p class="card-kicker">01</p>
          <h2>Institutional Memory</h2>
          <p>Preserve decisions, standards, and published milestones for future organizers.</p>
        </article>
        <article class="legacy-card legacy-card--access">
          <p class="card-kicker">02</p>
          <h2>Knowledge Access</h2>
          <p>Keep resources accessible for participants, educators, and partner institutions.</p>
        </article>
        <article class="legacy-card legacy-card--impact">
          <p class="card-kicker">03</p>
          <h2>Long-term Impact</h2>
          <p>Show how student research output contributes to broader academic communities.</p>
        </article>
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
.legacy-card {
  background: rgba(255, 255, 255, 0.9);
  padding: 2.2rem 2.5rem;
  border-radius: 24px;
  box-shadow: 0 18px 34px rgba(60, 47, 32, 0.1);
}

.content-card {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.55fr);
  gap: 1.3rem;
  border: 1px solid rgba(123, 90, 54, 0.14);
  background: linear-gradient(140deg, rgba(248, 246, 241, 0.96), rgba(255, 255, 255, 0.98));
}

.content-copy {
  padding-right: 0.6rem;
}

.legacy-panel {
  position: relative;
  overflow: hidden;
  padding: 1.5rem;
  border-radius: 20px;
  background: linear-gradient(145deg, rgba(75, 63, 50, 0.98), rgba(43, 35, 27, 0.97));
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.legacy-panel::after {
  content: "";
  position: absolute;
  inset: auto -4.8rem -4.4rem auto;
  width: clamp(170px, 22vw, 240px);
  aspect-ratio: 1 / 1;
  background: url("/img/logo.png") center / contain no-repeat;
  opacity: 0.05;
  filter: grayscale(1) sepia(0.55) saturate(0.72) brightness(1.65) contrast(0.92);
  pointer-events: none;
}

.panel-kicker,
.card-kicker {
  margin: 0 0 0.55rem;
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

.panel-kicker {
  color: #d7c4ad;
}

.panel-item {
  position: relative;
  z-index: 1;
  padding: 0.8rem 0;
}

.panel-item + .panel-item {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.panel-item strong {
  display: block;
  color: #ffffff;
  margin-bottom: 0.18rem;
}

.panel-item span {
  color: #d9cbbb;
  line-height: 1.55;
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

.legacy-grid {
  display: grid;
  gap: 1.1rem;
  grid-template-columns: repeat(12, minmax(0, 1fr));
}

.legacy-card {
  grid-column: span 4;
}

.legacy-card--memory {
  background: linear-gradient(140deg, rgba(247, 251, 250, 0.98), rgba(255, 255, 255, 0.98));
  border: 1px solid rgba(72, 103, 96, 0.18);
}

.legacy-card--access {
  background: linear-gradient(140deg, rgba(255, 248, 235, 0.95), rgba(255, 255, 255, 0.98));
  border: 1px solid rgba(123, 90, 54, 0.18);
}

.legacy-card--impact {
  background: linear-gradient(140deg, rgba(243, 241, 249, 0.95), rgba(255, 255, 255, 0.98));
  border: 1px solid rgba(103, 92, 132, 0.18);
}

.legacy-card h2 {
  margin: 0 0 0.65rem;
  font-size: 1.1rem;
  color: #2a2118;
}

.legacy-card p {
  margin: 0;
  color: #4f4337;
  line-height: 1.65;
}

.card-kicker {
  color: #7b5a36;
}

@media (max-width: 900px) {
  .page {
    padding: 2rem 1.5rem 2rem;
  }

  .canvas {
    padding: 2.4rem 0 3rem;
  }

  .content-card,
  .legacy-card {
    padding: 1.8rem;
  }

  .content-card,
  .legacy-grid {
    grid-template-columns: 1fr;
  }

  .legacy-card {
    grid-column: auto;
  }

}
</style>
