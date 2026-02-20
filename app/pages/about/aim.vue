<template>
  <div class="page">
    <SiteNav />

    <main class="canvas">
      <AboutSubNav />

      <section class="content-card">
        <p class="section-kicker">About Us</p>
        <h1 class="page-title">Aim</h1>
        <p class="lead">
          The International Research Competition for Young Scientists foundation is a competition and
          conference are intended to demonstrate how science, technology and engineering can solve many
          problems around us.
        </p>
      </section>

      <section class="aim-grid" aria-label="Program aims">
        <article class="aim-card aim-card--feature">
          <p class="card-kicker">Primary Goal</p>
          <h2>Changing How Students See Science</h2>
          <p>
            The primary goal of this competition is to change students' perspectives on science by
            demonstrating that what they learn in school has practical, real-world applications. By
            encountering real-life problems, students are encouraged to move beyond and develop a deeper
            appreciation for the value of the lessons taught in school.
          </p>
        </article>

        <article class="aim-card aim-card--objectives">
          <h2>The main objectives of IRCYS 2026 are:</h2>
          <div class="objective-grid">
            <article class="objective-item">
              <p class="objective-index">01</p>
              <h3>Promote Scientific Research</h3>
              <p>Encouraging youth to master scientific methods and critical thinking.</p>
            </article>
            <article class="objective-item">
              <p class="objective-index">02</p>
              <h3>Facilitate Knowledge Exchange</h3>
              <p>Creating a hub for cross-disciplinary learning.</p>
            </article>
            <article class="objective-item">
              <p class="objective-index">03</p>
              <h3>Recognize Research Excellence</h3>
              <p>Awarding projects with strong analytical and methodological depth.</p>
            </article>
          </div>
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
.aim-card {
  background: rgba(255, 255, 255, 0.9);
  padding: 2.2rem 2.5rem;
  border-radius: 24px;
  box-shadow: 0 18px 34px rgba(60, 47, 32, 0.1);
}

.content-card {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  background-color: #3f3228;
  background-image: linear-gradient(145deg, rgba(75, 63, 50, 0.96), rgba(43, 35, 27, 0.96));
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.content-card::before {
  content: "";
  position: absolute;
  inset: auto -7.2rem -6.6rem auto;
  width: clamp(320px, 46vw, 520px);
  aspect-ratio: 1 / 1;
  background: url("/img/logo.png") center / contain no-repeat;
  opacity: 0.1;
  filter: grayscale(1) sepia(0.55) saturate(0.72) brightness(1.62) contrast(0.9);
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
  color: #aba8a8;
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
  color: #bba7a7;
}

.aim-grid {
  display: grid;
  gap: 1.1rem;
  grid-template-columns: repeat(12, minmax(0, 1fr));
}

.aim-card {
  grid-column: span 4;
}

.aim-card--feature {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  grid-column: 1 / -1;
  background: #ffffff;
  border: 1px solid rgba(123, 90, 54, 0.18);
}

.aim-card--objectives {
  grid-column: 1 / -1;
  background: linear-gradient(135deg, rgba(255, 249, 237, 0.95), rgba(255, 255, 255, 0.98));
  border: 1px solid rgba(123, 90, 54, 0.18);
}

.objective-grid {
  display: grid;
  gap: 0.9rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.objective-item {
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(123, 90, 54, 0.2);
  border-radius: 16px;
  padding: 1rem 1.1rem;
}

.objective-index {
  margin: 0 0 0.35rem;
  font-size: 2rem;
  line-height: 1;
  font-family: "Erode", "Times New Roman", serif;
  color: rgba(123, 90, 54, 0.35);
}

.objective-item h3 {
  margin: 0 0 0.45rem;
  font-size: 1rem;
  color: #3f3021;
}

.objective-item p {
  margin: 0;
  color: #5a4a3a;
  line-height: 1.6;
}

.aim-card--feature::before {
  content: "";
  position: absolute;
  inset: auto -6.8rem -6.2rem auto;
  width: clamp(300px, 40vw, 460px);
  aspect-ratio: 1 / 1;
  background: url("/img/4.png") center / contain no-repeat;
  opacity: 0.11;
  filter: grayscale(1) sepia(0.75) saturate(0.68) brightness(0.95) contrast(0.9);
  pointer-events: none;
  z-index: 0;
}

.aim-card--feature > * {
  position: relative;
  z-index: 1;
}

.card-kicker {
  margin: 0 0 0.55rem;
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #7b5a36;
}

.aim-card.aim-card--feature h2 {
  color: #2a2118;
}

.aim-card.aim-card--feature p {
  color: #4f4337;
}

.aim-card h2 {
  margin: 0 0 0.65rem;
  font-size: 1.1rem;
  color: #2a2118;
}

.aim-card p {
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
  .aim-card {
    padding: 1.8rem;
  }

  .aim-grid {
    grid-template-columns: 1fr;
  }

  .aim-card,
  .aim-card--feature {
    grid-column: auto;
  }

  .objective-grid {
    grid-template-columns: 1fr;
  }
}
</style>
