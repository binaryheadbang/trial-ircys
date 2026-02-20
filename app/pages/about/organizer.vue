<template>
  <div class="page">
    <SiteNav />

    <main class="canvas">
      <AboutSubNav />

      <section class="content-card">
        <p class="section-kicker">About Us</p>
        <h1 class="page-title">Organizer</h1>
        <p class="lead">
          Meet the team and institution behind IRCYS, built to deliver a meaningful and high-impact
          experience for young researchers worldwide.
        </p>
      </section>

      <section class="organizer-grid" aria-label="Organizer structure">
        <article class="organizer-card organizer-card--feature">
          <p class="card-kicker">Main Organizer</p>
          <h2>Bandung Creative Society (BCS)</h2>
          <p>
            ISTEC is organized by Bandung Creative Society (BCS), a leading institution dedicated to
            empowering youth in science and technology. As the host, BCS provides professional
            infrastructure, mentorship, and a high-quality competition environment to ensure a
            meaningful experience for all participants.
          </p>
        </article>

        <article class="organizer-card organizer-card--support">
          <h2>Host Contributions</h2>
          <ul>
            <li>Professional event infrastructure and systems</li>
            <li>Mentorship ecosystem for participants</li>
            <li>Quality assurance for fair competition delivery</li>
          </ul>
        </article>

        <article class="organizer-card">
          <h2>Steering Committee</h2>
          <p>
            Sets direction for program quality, international partnerships, and long-term impact.
          </p>
        </article>

        <article class="organizer-card organizer-card--academic">
          <h2>Academic Board</h2>
          <p>
            Reviews judging standards, research integrity policies, and advisor assignments.
          </p>
        </article>

        <article class="organizer-card">
          <h2>Operations Team</h2>
          <p>
            Handles participant support, scheduling, event logistics, and communication.
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
  gap: 1.25rem;
  width: min(1180px, 100%);
  margin: 0 auto;
}

.content-card,
.organizer-card {
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

.organizer-grid {
  display: grid;
  gap: 1.1rem;
  grid-template-columns: repeat(12, minmax(0, 1fr));
}

.organizer-card {
  grid-column: span 4;
}

.organizer-card--feature {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  grid-column: span 8;
  background: linear-gradient(135deg, rgba(255, 249, 237, 0.95), rgba(255, 255, 255, 0.98));
  border: 1px solid rgba(123, 90, 54, 0.18);
}

.organizer-card--feature::before {
  content: "";
  position: absolute;
  inset: auto -7.2rem -6.4rem auto;
  width: clamp(300px, 40vw, 460px);
  aspect-ratio: 1 / 1;
  background: url("/img/logo.png") center / contain no-repeat;
  opacity: 0.08;
  filter: grayscale(1) sepia(0.9) saturate(0.7) brightness(0.95) contrast(0.88);
  pointer-events: none;
  z-index: 0;
}

.organizer-card--feature > * {
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

.organizer-card--support {
  grid-column: span 4;
  background: linear-gradient(145deg, rgba(75, 63, 50, 0.98), rgba(43, 35, 27, 0.97));
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.organizer-card h2 {
  margin: 0 0 0.65rem;
  font-size: 1.14rem;
  color: #2a2118;
}

.organizer-card p,
.organizer-card li {
  margin: 0;
  color: #4f4337;
  line-height: 1.65;
}

.organizer-card.organizer-card--feature h2 {
  color: #2a2118;
}

.organizer-card.organizer-card--feature p {
  color: #4f4337;
}

.organizer-card.organizer-card--feature .card-kicker {
  color: #7b5a36;
}

.organizer-card.organizer-card--support h2 {
  color: #ffffff;
}

.organizer-card.organizer-card--support li {
  color: #bba7a7;
}

.organizer-card.organizer-card--academic {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  background: #967751;
  border: 1px solid rgba(68, 48, 25, 0.25);
}

.organizer-card.organizer-card--academic::before {
  content: "";
  position: absolute;
  inset: auto -4.2rem -4.4rem auto;
  width: clamp(180px, 22vw, 260px);
  aspect-ratio: 1 / 1;
  background: url("/img/4.png") center / contain no-repeat;
  opacity: 0.12;
  filter: grayscale(1) sepia(0.7) saturate(0.65) brightness(1.45) contrast(0.9);
  pointer-events: none;
  z-index: 0;
}

.organizer-card.organizer-card--academic > * {
  position: relative;
  z-index: 1;
}

.organizer-card.organizer-card--academic h2 {
  color: #ffffff;
}

.organizer-card.organizer-card--academic p {
  color: #f3e7da;
}

.organizer-card ul {
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
  .organizer-card {
    padding: 1.8rem;
  }

  .organizer-grid {
    grid-template-columns: 1fr;
  }

  .organizer-card,
  .organizer-card--feature,
  .organizer-card--support {
    grid-column: auto;
  }
}
</style>
