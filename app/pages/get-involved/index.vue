<template>
  <div class="page">
    <SiteNav />

    <main class="canvas">
      <section class="hero-card" aria-label="Get involved overview">
        <div class="hero-copy">
          <p class="section-kicker">Get Involved</p>
          <h1 class="page-title">Contribute to IRCYS Through Official Participation Tracks</h1>
          <p class="lead">
            IRCYS opens formal pathways for volunteers, institutional partners, and judges who want
            to support research culture, event delivery, and academic quality.
          </p>
        </div>
      </section>

      <section class="involvement-layout" aria-label="Get involved options">
        <div class="summary-stack" aria-label="Participation summary">
          <article class="band-item band-item--alt">
            <span class="band-label">Volunteer</span>
            <strong>Operations & Experience</strong>
            <p>
              Suitable for contributors who want to support participant service, event flow, and
              field coordination during IRCYS activities.
            </p>
          </article>
          <article class="band-item">
            <span class="band-label">Partner</span>
            <strong>Collaboration & Outreach</strong>
            <p>
              Intended for institutions and organizations interested in building strategic
              collaboration and widening program impact.
            </p>
          </article>
          <article class="band-item band-item--alt">
            <span class="band-label">Judge</span>
            <strong>Academic Evaluation</strong>
            <p>
              Designed for academic and professional experts who can contribute to formal assessment
              and quality assurance.
            </p>
          </article>
        </div>

        <div class="action-stack">
          <a
            class="involvement-card involvement-card--volunteer"
            href="https://eventbcs.com/get-involved/volunteers"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Become a Volunteer"
          >
            <div class="card-top">
              <p class="card-kicker">01</p>
              <span class="card-type">Volunteer Track</span>
            </div>
            <h2>Become a Volunteer</h2>
            <p>
              Join the operational team and help deliver participant support, event coordination, and
              on-site execution throughout the IRCYS program cycle.
            </p>
            <span class="card-link">Open Volunteer Form</span>
          </a>

          <a
            class="involvement-card involvement-card--partner"
            href="https://eventbcs.com/get-involved/partners"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Become a Partner"
          >
            <div class="card-top">
              <p class="card-kicker">02</p>
              <span class="card-type">Partner Track</span>
            </div>
            <h2>Become a Partner</h2>
            <p>
              Collaborate with IRCYS through institutional, program, or strategic partnership schemes
              that strengthen research outreach and long-term impact.
            </p>
            <span class="card-link">Open Partnership Form</span>
          </a>

          <a
            class="involvement-card involvement-card--judge"
            href="https://dashboard.eventbcs.com/add-judge"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Become a Judge"
          >
            <div class="card-top">
              <p class="card-kicker">03</p>
              <span class="card-type">Judge Track</span>
            </div>
            <h2>Become a Judge</h2>
            <p>
              Register as part of the judging body and contribute academic or professional expertise
              to the evaluation of research projects and final presentations.
            </p>
            <span class="card-link">Open Judge Registration</span>
          </a>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="footer-brand">
        <img src="/img/logo.png" alt="International Research Competition logo" />
        <p>International Research Competition & Olympiad</p>
      </div>
      <div class="footer-links">
        <div>
          <h4>Programs</h4>
          <a href="#">Categories</a>
          <a href="#">Mentors</a>
          <a href="#">Awards</a>
        </div>
        <div>
          <h4>Resources</h4>
          <a href="#">Guidebook</a>
          <a href="#">FAQ</a>
          <a href="#">Press</a>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="#">info@olympiad.org</a>
          <a href="#">+62 21 555 4421</a>
          <a href="#">Jakarta, Indonesia</a>
        </div>
      </div>
      <p class="footer-note">(c) 2026 Olympiad Network. All rights reserved.</p>
    </footer>
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

.hero-card,
.involvement-card {
  background: rgba(255, 255, 255, 0.9);
  padding: 2.2rem 2.5rem;
  border-radius: 24px;
  box-shadow: 0 18px 34px rgba(60, 47, 32, 0.1);
}

.hero-card {
  display: grid;
  gap: 1rem;
  border: 1px solid rgba(123, 90, 54, 0.14);
  background: linear-gradient(140deg, rgba(248, 246, 241, 0.96), rgba(255, 255, 255, 0.98));
}

.hero-copy {
  max-width: 52rem;
}

.section-kicker,
.card-kicker {
  margin: 0 0 0.6rem;
  font-size: 0.75rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #7b5a36;
}

.page-title {
  margin: 0 0 0.9rem;
  font-size: clamp(2rem, 4vw, 2.7rem);
  font-family: "Erode", "Times New Roman", serif;
  color: #241c14;
}

.lead {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.7;
  color: #4b3f32;
}

.band-item {
  padding: 1.1rem 1.15rem;
  border-radius: 18px;
  background: linear-gradient(145deg, rgba(75, 63, 50, 0.98), rgba(43, 35, 27, 0.97));
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.band-label {
  display: block;
  color: #d7c4ad;
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 0.35rem;
}

.band-item strong {
  display: block;
  color: #ffffff;
  line-height: 1.45;
}

.band-item p {
  margin: 0.55rem 0 0;
  color: #d9cbbb;
  line-height: 1.6;
  font-size: 0.97rem;
}

.band-item--alt {
  background: linear-gradient(145deg, rgba(88, 72, 58, 0.98), rgba(111, 92, 73, 0.96));
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.involvement-layout {
  display: grid;
  gap: 1.1rem;
  grid-template-columns: minmax(280px, 0.78fr) minmax(0, 1.22fr);
  align-items: start;
}

.summary-stack,
.action-stack {
  display: grid;
  gap: 1.1rem;
}

.involvement-card {
  display: grid;
  gap: 0.7rem;
  text-decoration: none;
  color: inherit;
  padding: 1.9rem 2rem;
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
}

.involvement-card:hover,
.involvement-card:focus {
  transform: translateY(-2px);
  box-shadow: 0 22px 36px rgba(60, 47, 32, 0.14);
}

.involvement-card--volunteer {
  background: linear-gradient(140deg, rgba(247, 251, 250, 0.98), rgba(255, 255, 255, 0.98));
  border: 1px solid rgba(72, 103, 96, 0.18);
}

.involvement-card--partner {
  background: linear-gradient(140deg, rgba(255, 248, 235, 0.96), rgba(255, 255, 255, 0.98));
  border: 1px solid rgba(123, 90, 54, 0.18);
}

.involvement-card--judge {
  background: linear-gradient(140deg, rgba(243, 241, 249, 0.96), rgba(255, 255, 255, 0.98));
  border: 1px solid rgba(103, 92, 132, 0.18);
}

.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.9rem;
}

.card-type {
  font-size: 0.74rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #6d5a46;
}

.involvement-card h2 {
  margin: 0;
  font-size: 1.2rem;
  color: #2a2118;
}

.involvement-card p {
  margin: 0;
  color: #4f4337;
  line-height: 1.68;
}

.card-link {
  display: inline-flex;
  align-items: center;
  margin-top: 0.2rem;
  color: #7b5a36;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}


.footer {
  position: relative;
  z-index: 1;
  margin-top: 2rem;
  padding: 2.5rem 3rem 2rem;
  background: rgba(33, 26, 18, 0.92);
  color: #f7f1e7;
  border-radius: 32px;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 2rem;
}

.footer-brand img {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

.footer-brand p {
  margin: 0;
  color: #f7f1e7;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.footer-links h4 {
  margin: 0 0 0.8rem;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #f7f1e7;
}

.footer-links a {
  display: block;
  color: rgba(247, 241, 231, 0.8);
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.footer-links a:hover,
.footer-links a:focus {
  color: #ffffff;
}

.footer-note {
  margin: 0;
  font-size: 0.8rem;
  color: rgba(247, 241, 231, 0.7);
}

@media (max-width: 900px) {
  .page {
    padding: 2rem 1.5rem 2rem;
  }

  .canvas {
    padding: 2.4rem 0 3rem;
  }

  .hero-card,
  .involvement-card {
    padding: 1.8rem;
  }

  .involvement-layout {
    grid-template-columns: 1fr;
  }

  .footer {
    padding: 2.2rem 2rem 1.8rem;
  }
}
</style>
