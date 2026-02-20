<template>
  <div class="page">
    <SiteNav />

    <main class="canvas">
      <CompetitionSubNav />

      <section class="content-card">
        <p class="section-kicker">Competition</p>
        <h1 class="page-title">Eligibility</h1>
        <p class="lead">
          To ensure a fair competition, the following criteria must be met.
        </p>
      </section>

      <section class="rule-grid" aria-label="Eligibility requirements">
        <article class="rule-card rule-card--feature">
          <p class="card-kicker">Educational Levels</p>
          <h2>Who Can Participate</h2>
          <ul>
            <li>Elementary School (Grade 4-6)</li>
            <li>Junior High School (Grade 7-9)</li>
            <li>Senior High School (Grade 10-12)</li>
            <li>University (Undergraduate)</li>
          </ul>
        </article>
        <article class="rule-card rule-card--readiness">
          <h2>Competition Readiness</h2>
          <p>
            Participants should prepare their submission based on the official requirements and format
            standards before entering the competition cycle.
          </p>
        </article>

        <article class="rule-card rule-card--requirements">
          <p class="card-kicker card-kicker--requirements">Requirements</p>
          <h2>Entry Requirements</h2>
          <ul>
            <li>Age: 10 - 24 years old (as of the registration deadline).</li>
            <li>
              Team Composition: Individual or Team (Max. 5 members). Members can be from different
              schools but must register under one institution name.
            </li>
            <li>Mentorship: Every team must have a mentor (Teacher, Academic Advisor, or Parent).</li>
            <li>Language: All documents and presentations must be in English.</li>
          </ul>
        </article>

        <article class="rule-card rule-card--cta">
          <h2>Need Full Details?</h2>
          <p>Download the official participant guide for complete rules, format, and submission flow.</p>
          <a class="download-btn" href="#" aria-label="Download Participants Guideline">
            Download Participants Guideline
          </a>
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
.rule-card {
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

.rule-grid {
  display: grid;
  gap: 1.1rem;
  grid-template-columns: repeat(12, minmax(0, 1fr));
}

.rule-card {
  grid-column: span 4;
}

.rule-card--feature {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  grid-column: span 8;
  background: linear-gradient(145deg, rgba(75, 63, 50, 0.98), rgba(43, 35, 27, 0.97));
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.rule-card--readiness {
  grid-column: span 4;
}

.rule-card--feature::before {
  content: "";
  position: absolute;
  inset: auto -6.2rem -5.8rem auto;
  width: clamp(280px, 36vw, 430px);
  aspect-ratio: 1 / 1;
  background: url("/img/logo.png") center / contain no-repeat;
  opacity: 0.08;
  filter: grayscale(1) sepia(0.52) saturate(0.75) brightness(1.72) contrast(0.9);
  pointer-events: none;
  z-index: 0;
}

.rule-card--feature > * {
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

.rule-card.rule-card--feature .card-kicker {
  color: #e4cdb2;
}

.rule-card--feature li {
  color: #d9cbbb;
}

.rule-card--cta {
  grid-column: 1 / -1;
  display: grid;
  gap: 1rem;
  align-items: start;
  background: linear-gradient(135deg, rgba(255, 249, 237, 0.95), rgba(255, 255, 255, 0.98));
  border: 1px solid rgba(123, 90, 54, 0.18);
}

.rule-card--requirements {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  grid-column: 1 / -1;
  background: linear-gradient(140deg, rgba(231, 241, 240, 0.98), rgba(248, 252, 251, 0.98));
  border: 1px solid rgba(70, 110, 104, 0.22);
}

.rule-card--requirements::before {
  content: "";
  position: absolute;
  inset: auto -4.6rem -4.2rem auto;
  width: clamp(180px, 24vw, 280px);
  aspect-ratio: 1 / 1;
  background: url("/img/4.png") center / contain no-repeat;
  opacity: 0.08;
  filter: grayscale(1) sepia(0.4) saturate(0.55) hue-rotate(110deg) brightness(0.95) contrast(0.92);
  pointer-events: none;
  z-index: 0;
}

.rule-card--requirements > * {
  position: relative;
  z-index: 1;
}

.card-kicker--requirements {
  color: #3f6963;
}

.rule-card--requirements h2 {
  color: #264c46;
}

.rule-card--requirements li {
  color: #355b55;
}

.rule-card h2 {
  margin: 0 0 0.65rem;
  font-size: 1.1rem;
  color: #2a2118;
}

.rule-card.rule-card--feature h2 {
  color: #ffffff;
}

.rule-card p {
  margin: 0;
  color: #4f4337;
  line-height: 1.65;
}

.rule-card ul {
  margin: 0;
  padding-left: 1.1rem;
}

.rule-card li {
  line-height: 1.65;
}

.download-btn {
  justify-self: start;
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0.7rem 1.1rem;
  border-radius: 999px;
  border: 1px solid rgba(75, 63, 50, 0.22);
  background: #4b3f32;
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.download-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 20px rgba(60, 47, 32, 0.2);
}

@media (max-width: 900px) {
  .page {
    padding: 2rem 1.5rem 2rem;
  }

  .canvas {
    padding: 2.4rem 0 3rem;
  }

  .content-card,
  .rule-card {
    padding: 1.8rem;
  }

  .rule-grid {
    grid-template-columns: 1fr;
  }

  .rule-card,
  .rule-card--feature,
  .rule-card--cta {
    grid-column: auto;
  }
}
</style>
