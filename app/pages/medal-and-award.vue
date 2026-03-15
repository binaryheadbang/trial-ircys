<template>
  <div class="page">
    <SiteNav />

    <main class="canvas">
      <section class="hero-card" aria-label="Awards introduction">
        <div class="hero-copy">
          <p class="section-kicker">Medal & Award</p>
          <h1 class="page-title">Recognition Framework for IRCYS 2026</h1>
          <p class="lead">
            IRCYS 2026 uses a dual-awarding structure to recognize excellence across categories,
            educational levels, and special distinctions.
          </p>
          <div class="hero-summary">
            <div>
              <strong>3</strong>
              <span>Award groups</span>
            </div>
            <div>
              <strong>20%</strong>
              <span>Gold threshold</span>
            </div>
            <div>
              <strong>All Levels</strong>
              <span>Recognition scope</span>
            </div>
          </div>
        </div>

        <div class="hero-panel">
          <p class="panel-kicker">Award System</p>
          <p class="panel-copy">
            Recognition is divided into category-level excellence, level-based medals, and selected
            special distinctions for standout participants.
          </p>
        </div>
      </section>

      <section class="awards-grid" aria-label="Award categories">
        <article class="award-card award-card--medals">
          <p class="card-kicker card-kicker--dark">2. Medals</p>
          <h2>Per Educational Level</h2>
          <p>
            Medals are awarded to top teams <strong>within their specific level</strong> (e.g.
            Elementary vs Elementary) based on the following distribution:
          </p>
          <div class="medal-breakdown">
            <div class="medal-row">
              <span class="medal-chip medal-chip--gold">Gold</span>
              <p>Top 20% of participants.</p>
            </div>
            <div class="medal-row">
              <span class="medal-chip medal-chip--silver">Silver</span>
              <p>Next 40% of participants.</p>
            </div>
            <div class="medal-row">
              <span class="medal-chip medal-chip--bronze">Bronze</span>
              <p>Remaining 40% of participants.</p>
            </div>
          </div>
        </article>

        <article class="award-card award-card--grand">
          <p class="card-kicker">1. Grand Award</p>
          <h2>Best of Category</h2>
          <p>
            The highest honor given to the <strong>single best project</strong> in each category
            (Theoretical, Applied, Humanity), competing across all education levels.
          </p>
          <ul>
            <li>Grand Award in Theoretical</li>
            <li>Grand Award in Applied</li>
            <li>Grand Award in Humanity</li>
          </ul>
        </article>

        <article class="award-card award-card--special">
          <p class="card-kicker">3. Special Awards</p>
          <h2>Additional Recognition</h2>
          <ul>
            <li>Young Scientist Award</li>
            <li>Additional Offshore Special Awards (if any)</li>
          </ul>
        </article>
      </section>

    </main>

    <SiteFooter />
  </div>
</template>

<script setup>
</script>

<style scoped>
.page {
  min-height: 100vh;
  padding: 0.8rem 3rem 2rem;
  background-color: #f3f2ed;
  background-image: url("/img/bg2.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  overflow-x: hidden;
}

.canvas {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 1.4rem;
  width: min(1180px, 100%);
  margin: 0 auto;
  padding: 3rem 0 4rem;
}

.hero-card,
.award-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 28px;
  box-shadow: 0 18px 34px rgba(60, 47, 32, 0.1);
}

.hero-card {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.6fr);
  gap: 1.4rem;
  padding: 2.4rem;
  border: 1px solid rgba(123, 90, 54, 0.15);
  background: linear-gradient(140deg, rgba(248, 246, 241, 0.96), rgba(255, 255, 255, 0.98));
}

.hero-copy {
  padding-right: 1rem;
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
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-family: "Erode", "Times New Roman", serif;
  color: #241c14;
}

.lead {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.7;
  color: #4b3f32;
}

.hero-panel {
  position: relative;
  overflow: hidden;
  padding: 1.8rem;
  border-radius: 24px;
  background: linear-gradient(145deg, rgba(92, 73, 47, 0.98), rgba(58, 44, 27, 0.97));
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.hero-panel::after {
  content: "";
  position: absolute;
  inset: auto -4.5rem -4.8rem auto;
  width: clamp(170px, 22vw, 250px);
  aspect-ratio: 1 / 1;
  background: url("/img/logo.png") center / contain no-repeat;
  opacity: 0.06;
  filter: grayscale(1) sepia(0.55) saturate(0.7) brightness(1.65) contrast(0.92);
  pointer-events: none;
}

.panel-kicker,
.card-kicker {
  margin: 0 0 0.6rem;
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

.panel-kicker {
  color: #d7c4ad;
}

.panel-copy {
  position: relative;
  z-index: 1;
  margin: 0;
  color: #e1d3c2;
  line-height: 1.7;
}

.hero-summary {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.9rem;
  margin-top: 1.4rem;
}

.hero-summary div {
  padding: 0.9rem 1rem;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(123, 90, 54, 0.14);
}

.hero-summary strong {
  display: block;
  color: #7b5a36;
  font-size: 1.15rem;
}

.hero-summary span {
  color: #5f503f;
  font-size: 0.86rem;
  line-height: 1.45;
}

.awards-grid {
  display: grid;
  gap: 1.4rem;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  align-items: start;
}

.award-card {
  padding: 2rem 2.1rem;
}

.award-card--medals {
  grid-column: span 6;
  background: linear-gradient(145deg, rgba(75, 63, 50, 0.98), rgba(43, 35, 27, 0.97));
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 22px 40px rgba(40, 28, 17, 0.2);
}

.award-card--grand {
  grid-column: span 6;
  background: linear-gradient(140deg, rgba(248, 251, 247, 0.98), rgba(255, 255, 255, 0.98));
  border: 1px solid rgba(72, 103, 96, 0.18);
}

.award-card--special {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: minmax(220px, 0.46fr) minmax(0, 1fr);
  gap: 1.2rem;
  background: linear-gradient(140deg, rgba(255, 249, 239, 0.96), rgba(255, 255, 255, 0.98));
  border: 1px solid rgba(123, 90, 54, 0.18);
}

.award-card h2 {
  margin: 0 0 0.75rem;
  font-size: 1.28rem;
  color: #2a2118;
}

.award-card p {
  margin: 0;
  color: #4f4337;
  line-height: 1.65;
}

.award-card ul {
  margin: 1rem 0 0;
  padding-left: 1.15rem;
}

.award-card li {
  color: #4f4337;
  line-height: 1.6;
}

.award-card li + li {
  margin-top: 0.28rem;
}

.card-kicker {
  color: #7b5a36;
}

.card-kicker--dark {
  color: #d7c4ad;
}

.award-card--medals h2,
.award-card--medals p,
.award-card--medals strong {
  color: #f2e8dc;
}

.award-card--special h2 {
  margin-bottom: 0.45rem;
}

.award-card--special ul {
  margin-top: 0.2rem;
}

.medal-breakdown {
  margin-top: 1rem;
  display: grid;
  gap: 0.9rem;
}

.medal-row {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.9rem;
  align-items: center;
  padding: 0.85rem 0.9rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.medal-row p {
  margin: 0;
  color: #d9cbbb;
}

.medal-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 78px;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.medal-chip--gold {
  background: rgba(199, 154, 70, 0.18);
  color: #f2d18c;
}

.medal-chip--silver {
  background: rgba(184, 191, 200, 0.18);
  color: #e0e4ea;
}

.medal-chip--bronze {
  background: rgba(179, 123, 75, 0.18);
  color: #e6bea2;
}

.primary-btn {
  border-radius: 999px;
  padding: 0.7rem 1.4rem;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid transparent;
  background: #a37b4b;
  color: #ffffff;
  box-shadow: 0 12px 20px rgba(163, 123, 75, 0.3);
  transition: transform 160ms ease, box-shadow 160ms ease;
}

.primary-btn:hover,
.primary-btn:focus {
  transform: translateY(-1px);
}

@media (max-width: 900px) {
  .page {
    padding: 2rem 1.5rem 2rem;
  }

  .canvas {
    padding: 2.5rem 0 3rem;
  }

  .hero-card,
  .award-card {
    padding: 1.8rem;
  }

  .hero-card,
  .awards-grid,
  .award-card--special {
    grid-template-columns: 1fr;
  }

  .award-card--grand,
  .award-card--medals,
  .award-card--special {
    grid-column: auto;
  }

  .hero-summary {
    grid-template-columns: 1fr;
  }

}
</style>
