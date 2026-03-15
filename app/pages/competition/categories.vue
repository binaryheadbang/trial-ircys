<template>
  <div class="page">
    <SiteNav />

    <main class="canvas">
      <CompetitionSubNav />

      <section class="content-card">
        <p class="section-kicker">Competition</p>
        <h1 class="page-title">Categories</h1>
        <p class="lead">
          IRCYS categories are designed to accommodate both foundational and interdisciplinary
          research projects from young scientists worldwide.
        </p>
      </section>

      <section class="category-grid" aria-label="Competition categories">
        <article class="category-card category-card--framework">
          <p class="card-kicker">Category Framework</p>
          <h2>Official Competition Tracks</h2>

          <div class="track-grid">
            <article class="track-card track-card--theoretical">
              <p class="track-index">01</p>
              <h3>THEORETICAL STUDIES (Science &amp; Social)</h3>
              <ul class="track-points">
                <li><strong>Focus:</strong> Observation, Literature Review, and Data Analysis.</li>
                <li>
                  <strong>Description:</strong> Projects based on observing natural phenomena, analyzing
                  existing data, or social studies without creating a physical product.
                </li>
                <li>
                  <strong>Examples:</strong> Correlation between sleep &amp; grades, Microplastic analysis,
                  Mathematical formulas review.
                </li>
                <li><strong>Output:</strong> Research Paper &amp; Presentation.</li>
              </ul>
            </article>

            <article class="track-card track-card--applied">
              <p class="track-index">02</p>
              <h3>APPLIED STUDIES (Engineering &amp; Tech)</h3>
              <ul class="track-points">
                <li><strong>Focus:</strong> Innovation, Prototyping, and Practical Application.</li>
                <li>
                  <strong>Description:</strong> Projects that create a tangible tool, software, or product
                  to solve a specific problem.
                </li>
                <li><strong>Examples:</strong> Water filtration system, Android learning app, Smart trash bin.</li>
                <li><strong>Output:</strong> Research Paper + Prototype/Product.</li>
              </ul>
            </article>

            <article class="track-card track-card--humanity">
              <p class="track-index">03</p>
              <h3>HUMANITY STUDIES (Humanity &amp; Social Intervention)</h3>
              <ul class="track-points">
                <li><strong>Focus:</strong> Social Impact, Community Service, and Behavioral Change.</li>
                <li>
                  <strong>Description:</strong> Projects involving direct intervention in society or surveys
                  on social behavior/economics.
                </li>
                <li><strong>Examples:</strong> Anti-bullying program, Economic impact of tourism.</li>
                <li><strong>Output:</strong> Research Paper + Result Charts/Intervention Tools.</li>
              </ul>
            </article>
          </div>
        </article>

        <article class="category-card category-card--cta">
          <h2>Need Full Categories Guideline?</h2>
          <p>Download the participant guideline for complete category rules and submission format.</p>
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
.category-card {
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

.category-grid {
  display: grid;
  gap: 1.1rem;
  grid-template-columns: repeat(12, minmax(0, 1fr));
}

.category-card {
  grid-column: span 6;
}

.category-card--framework,
.category-card--cta {
  grid-column: 1 / -1;
}

.category-card--framework {
  background: linear-gradient(140deg, rgba(247, 251, 250, 0.98), rgba(255, 255, 255, 0.98));
  border: 1px solid rgba(72, 103, 96, 0.2);
}

.card-kicker {
  margin: 0 0 0.55rem;
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #3f6963;
}

.track-grid {
  display: grid;
  gap: 0.9rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.track-card {
  border-radius: 16px;
  padding: 1rem 1.05rem;
  border: 1px solid rgba(80, 68, 53, 0.18);
  background: rgba(255, 255, 255, 0.9);
}

.track-card--theoretical {
  background: linear-gradient(135deg, rgba(255, 248, 235, 0.95), rgba(255, 255, 255, 0.95));
}

.track-card--applied {
  background: linear-gradient(135deg, rgba(241, 248, 246, 0.95), rgba(255, 255, 255, 0.95));
}

.track-card--humanity {
  background: linear-gradient(135deg, rgba(243, 241, 249, 0.95), rgba(255, 255, 255, 0.95));
}

.track-index {
  margin: 0 0 0.35rem;
  font-size: 1.9rem;
  line-height: 1;
  font-family: "Erode", "Times New Roman", serif;
  color: rgba(75, 63, 50, 0.35);
}

.track-card h3 {
  display: inline-block;
  margin: 0 0 0.7rem;
  padding: 0.34rem 0.6rem;
  border-radius: 10px;
  font-size: 0.98rem;
  color: #2b2219;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(86, 67, 46, 0.18);
}

.track-card--theoretical h3 {
  background: rgba(235, 214, 183, 0.4);
}

.track-card--applied h3 {
  background: rgba(184, 220, 213, 0.42);
}

.track-card--humanity h3 {
  background: rgba(210, 198, 231, 0.45);
}

.track-card p {
  margin: 0.32rem 0 0;
  color: #4f4337;
  line-height: 1.55;
}

.track-points {
  margin: 0.45rem 0 0;
  padding-left: 1.2rem;
}

.track-points li {
  margin: 0.35rem 0;
  color: #4f4337;
  line-height: 1.55;
}

.category-card--cta {
  display: grid;
  gap: 0.95rem;
  align-items: start;
  background: linear-gradient(145deg, rgba(75, 63, 50, 0.98), rgba(43, 35, 27, 0.97));
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.category-card.category-card--cta h2 {
  color: #ffffff;
}

.category-card.category-card--cta p {
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

.category-card h2 {
  margin: 0 0 0.65rem;
  font-size: 1.1rem;
  color: #2a2118;
}

.category-card p {
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
  .category-card {
    padding: 1.8rem;
  }

  .category-grid {
    grid-template-columns: 1fr;
  }

  .category-card,
  .category-card--framework,
  .category-card--cta {
    grid-column: auto;
  }

  .track-grid {
    grid-template-columns: 1fr;
  }
}
</style>


