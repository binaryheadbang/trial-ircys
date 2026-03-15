<template>
  <div class="page">
    <SiteNav />

    <main class="canvas">
      <CompetitionSubNav />

      <section class="content-card">
        <p class="section-kicker">Competition</p>
        <h1 class="page-title">Rules and Regulation</h1>
        <p class="lead">
          The following rules and regulations ensure fair participation, safety compliance, and
          presentation quality during the grand final process.
        </p>
      </section>

      <section class="rules-grid" aria-label="Rules and regulations">
        <article class="rules-card rules-card--slides">
          <p class="card-kicker">Presentation Standard</p>
          <h2>Guide for Presentation Slides</h2>
          <ul>
            <li>Language: English;</li>
            <li>Use Microsoft PowerPoint/Canva (shared);</li>
            <li>Size of Slide: 5,4~cm\\times14,29 cm: On-screen 16:9 size;</li>
            <li>
              Slide Component:
              <ul>
                <li>1st slide: Title, name of presenter(s) and name of affiliation</li>
                <li>2nd slide: Background and purpose</li>
                <li>3rd slide: Research methodology</li>
                <li>4th slide: Result</li>
                <li>5th slide: Conclusion</li>
                <li>6th slide: Documentation</li>
              </ul>
            </li>
            <li>
              The official background template for the presentation, including sponsor logos and other
              relevant details, will be sent to participants at a later date.
            </li>
            <li>
              All PowerPoint presentations must be submitted to the committee no later than 1 week
              before the Judging Session.
            </li>
          </ul>
        </article>

        <article class="rules-card rules-card--cta">
          <h2>Need Full Rules Guideline?</h2>
          <p>Download the participant guideline for complete competition rules and official submission standards.</p>
          <a class="download-btn" href="#" aria-label="Download Participants Guideline">
            Download Participants Guideline
          </a>
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
.rules-card {
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

.rules-grid {
  display: grid;
  gap: 1.1rem;
  grid-template-columns: repeat(12, minmax(0, 1fr));
}

.rules-card {
  grid-column: span 6;
}

.rules-card--slides {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  grid-column: 1 / -1;
  background: linear-gradient(140deg, rgba(246, 248, 245, 0.98), rgba(255, 255, 255, 0.98));
  border: 1px solid rgba(123, 90, 54, 0.2);
  box-shadow: 0 18px 34px rgba(60, 47, 32, 0.12), inset 0 0 0 1px rgba(255, 255, 255, 0.55);
}

.rules-card--slides::before {
  content: "";
  position: absolute;
  inset: 0 auto 0 0;
  width: 6px;
  background: linear-gradient(180deg, #a37b4b, #7b5a36);
}

.rules-card--slides::after {
  content: "";
  position: absolute;
  inset: auto -5.6rem -4.8rem auto;
  width: clamp(220px, 30vw, 320px);
  aspect-ratio: 1 / 1;
  background: url("/img/logo.png") center / contain no-repeat;
  opacity: 0.05;
  filter: grayscale(1) sepia(0.58) saturate(0.75) brightness(1.35) contrast(0.9);
  pointer-events: none;
}

.rules-card--slides > * {
  position: relative;
  z-index: 1;
}

.rules-card--cta {
  grid-column: 1 / -1;
  display: grid;
  gap: 0.95rem;
  align-items: start;
  background: linear-gradient(145deg, rgba(75, 63, 50, 0.98), rgba(43, 35, 27, 0.97));
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.rules-card h2 {
  margin: 0 0 0.65rem;
  font-size: 1.1rem;
  color: #2a2118;
}

.card-kicker {
  margin: 0 0 0.55rem;
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #7b5a36;
}

.rules-card p {
  margin: 0;
  color: #4f4337;
  line-height: 1.65;
}

.rules-card ol,
.rules-card ul {
  margin: 0.35rem 0 0;
  padding-left: 1.15rem;
}

.rules-card li {
  color: #4f4337;
  line-height: 1.6;
}

.rules-card--slides > ul {
  padding-left: 1.25rem;
}

.rules-card--slides > ul > li::marker {
  color: #7b5a36;
}

.rules-card li + li {
  margin-top: 0.28rem;
}

.rules-card li ul {
  margin-top: 0.3rem;
}

.rules-card.rules-card--cta h2 {
  color: #ffffff;
}

.rules-card.rules-card--cta p {
  color: #d8cbbb;
}

.download-btn {
  justify-self: start;
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0.7rem 1.1rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: #ffffff;
  color: #3b2f24;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.download-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 20px rgba(60, 47, 32, 0.22);
}

@media (max-width: 900px) {
  .page {
    padding: 2rem 1.5rem 2rem;
  }

  .canvas {
    padding: 2.4rem 0 3rem;
  }

  .content-card,
  .rules-card {
    padding: 1.8rem;
  }

  .rules-grid {
    grid-template-columns: 1fr;
  }

  .rules-card,
  .rules-card--slides,
  .rules-card--cta {
    grid-column: auto;
  }
}
</style>

