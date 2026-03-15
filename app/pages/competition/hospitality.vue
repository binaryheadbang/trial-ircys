<template>
  <div class="page">
    <SiteNav />

    <main class="canvas">
      <CompetitionSubNav />

      <section class="content-card">
        <p class="section-kicker">Competition</p>
        <h1 class="page-title">Hospitality</h1>
        <p class="lead">
          IRCYS prides itself on excellent service for international guests and national finalists.
        </p>
      </section>

      <section class="hospitality-grid" aria-label="Hospitality services">
        <article class="hospitality-card hospitality-card--feature">
          <p class="card-kicker">Official Services</p>
          <h2>Hospitality Services</h2>
          <ul>
            <li><strong>Airport Pickup:</strong> Complimentary transport from the designated Airport to the official hotel.</li>
            <li>
              <strong>Accommodation:</strong>
              <ul>
                <li><strong>Participants:</strong> Shared room (2 pax/room, gender-separated).</li>
                <li><strong>Mentors:</strong> Shared room (2 pax/room, gender-separated).</li>
              </ul>
            </li>
            <li>
              <strong>Meals:</strong> Total 8 Meals provided during the event.
              <ul>
                <li><strong>August 13 (Arrival Day):</strong> Dinner only.</li>
                <li><strong>August 14 &amp; 15 (Event Days):</strong> Full meals provided (Breakfast, Lunch, Dinner).</li>
                <li><strong>August 16 (Departure Day):</strong> Breakfast only.</li>
              </ul>
            </li>
            <li><strong>Culture Tour:</strong> A guided trip to iconic cultural landmarks on Day 3.</li>
          </ul>
        </article>

        <article class="hospitality-card hospitality-card--cta">
          <h2>Need Full Hospitality Guideline?</h2>
          <p>Download the participant guideline for complete hospitality coverage and service notes.</p>
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
.hospitality-card {
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

.hospitality-grid {
  display: grid;
  gap: 1.1rem;
  grid-template-columns: repeat(12, minmax(0, 1fr));
}

.hospitality-card {
  grid-column: span 4;
}

.hospitality-card--feature {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  grid-column: 1 / -1;
  background: linear-gradient(140deg, rgba(246, 248, 245, 0.98), rgba(255, 255, 255, 0.98));
  border: 1px solid rgba(123, 90, 54, 0.2);
  box-shadow: 0 18px 34px rgba(60, 47, 32, 0.12), inset 0 0 0 1px rgba(255, 255, 255, 0.55);
}

.hospitality-card--feature::before {
  content: "";
  position: absolute;
  inset: 0 auto 0 0;
  width: 6px;
  background: linear-gradient(180deg, #a37b4b, #7b5a36);
}

.hospitality-card--feature::after {
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

.hospitality-card--feature > * {
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

.hospitality-card--cta {
  grid-column: 1 / -1;
  display: grid;
  gap: 0.95rem;
  align-items: start;
  background: linear-gradient(145deg, rgba(75, 63, 50, 0.98), rgba(43, 35, 27, 0.97));
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.hospitality-card h2 {
  margin: 0 0 0.65rem;
  font-size: 1.1rem;
  color: #2a2118;
}

.hospitality-card p {
  margin: 0;
  color: #4f4337;
  line-height: 1.65;
}

.hospitality-card ul {
  margin: 0.35rem 0 0;
  padding-left: 1.1rem;
}

.hospitality-card li {
  color: #4f4337;
  line-height: 1.6;
}

.hospitality-card--feature > ul {
  padding-left: 1.25rem;
}

.hospitality-card--feature > ul > li {
  padding-left: 0.12rem;
}

.hospitality-card--feature > ul > li::marker {
  color: #7b5a36;
}

.hospitality-card li + li {
  margin-top: 0.3rem;
}

.hospitality-card li ul {
  margin-top: 0.32rem;
}

.hospitality-card.hospitality-card--cta h2 {
  color: #ffffff;
}

.hospitality-card.hospitality-card--cta p {
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
  .hospitality-card {
    padding: 1.8rem;
  }

  .hospitality-grid {
    grid-template-columns: 1fr;
  }

  .hospitality-card,
  .hospitality-card--feature,
  .hospitality-card--cta {
    grid-column: auto;
  }
}
</style>

