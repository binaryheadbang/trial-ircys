<template>
  <div class="page">
    <SiteNav />

    <main class="canvas">
      <AboutSubNav class="about-subnav" />

      <section class="about-hero" aria-label="About overview">
        <div class="about-hero-content soften-in">
          <p class="section-kicker">About us</p>
          <h1 class="hero-title">We build a global olympiad community for ambitious students.</h1>
          <p class="hero-copy">
            Since 2012, the Olympiad has connected student researchers with academic mentors,
            international judges, and scholarship partners. Our network supports every step from
            idea validation to finalist showcases.
          </p>
          <div class="hero-actions">
            <button class="primary-btn">Meet the Team</button>
            <button class="ghost-btn">Partnerships</button>
          </div>
        </div>
        <div class="about-hero-card soften-in delay-1">
          <p class="card-kicker">Our impact</p>
          <div class="impact-grid">
            <div class="impact-item">
              <svg class="impact-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M8 6V4m8 2V4M4 10h16M6 8h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div>
                <strong>12</strong>
                <span>Years of programs</span>
              </div>
            </div>
            <div class="impact-item">
              <svg class="impact-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M16 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.6"
                />
                <path
                  d="M6 20a6 6 0 0 1 12 0"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                />
              </svg>
              <div>
                <strong>180+</strong>
                <span>Mentors & judges</span>
              </div>
            </div>
            <div class="impact-item">
              <svg class="impact-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.6"
                />
                <path
                  d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.2"
                  stroke-linecap="round"
                />
              </svg>
              <div>
                <strong>40+</strong>
                <span>Countries represented</span>
              </div>
            </div>
            <div class="impact-item">
              <svg class="impact-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M7 8h10l-1 10-4 2-4-2-1-10Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 6h6a1 1 0 0 1 1 1v1H8V7a1 1 0 0 1 1-1Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linejoin="round"
                />
              </svg>
              <div>
                <strong>86%</strong>
                <span>Finalists with scholarships</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="about-story soften-in delay-2" aria-label="Story and mission">
        <div class="story-card">
          <h2>About us - What is IRCYS</h2>
          <p>
            The International Research Competition for Young Scientists (IRCYS) is a premier global
            event dedicated to fostering scientific research among youth. Unlike typical invention
            fairs, IRCYS places a strong emphasis on the research process, methodology, and
            scientific analysis.
          </p>
          <p>
            Moving to its 7th Edition in 2026, IRCYS transforms into a mid-year grand summit,
            inviting young brilliant minds to gather in the Island of Gods, Bali, to present their
            discoveries.
          </p>
        </div>
        <div class="story-panel">
          <h3>What we do</h3>
          <ul>
            <li>Category-based competitions with expert advisors</li>
            <li>Weekly clinics and research peer review</li>
            <li>Global showcase for finalists and mentors</li>
          </ul>
          <button class="secondary-btn">Download Profile</button>
        </div>
      </section>

      <section class="about-values soften-in delay-3" aria-label="Values">
        <div class="section-head">
          <div>
            <p class="section-kicker">Core values</p>
            <h2 class="section-title">How we guide every competition cycle</h2>
          </div>
        </div>
        <div class="values-grid">
          <article class="value-card">
            <h3>Integrity</h3>
            <p>Transparent judging and research ethics at every milestone.</p>
          </article>
          <article class="value-card">
            <h3>Curiosity</h3>
            <p>Encouraging cross-discipline exploration and collaboration.</p>
          </article>
          <article class="value-card">
            <h3>Impact</h3>
            <p>Projects are evaluated on real-world relevance and execution.</p>
          </article>
        </div>
      </section>

      <section class="about-timeline soften-in delay-4" aria-label="Timeline">
        <div class="timeline-card">
          <h2>Milestones</h2>
          <div class="timeline-list">
            <div class="timeline-item">
              <span>2012</span>
              <p>First national research camp launched in Jakarta.</p>
            </div>
            <div class="timeline-item">
              <span>2016</span>
              <p>International partners joined across Asia and Europe.</p>
            </div>
            <div class="timeline-item">
              <span>2021</span>
              <p>Hybrid format introduced with global livestream finals.</p>
            </div>
            <div class="timeline-item">
              <span>2026</span>
              <p>Expanded scholarship network for finalist placements.</p>
            </div>
          </div>
        </div>
        <div class="timeline-cta">
          <h3>Want to collaborate?</h3>
          <p>We welcome universities, industry mentors, and education partners.</p>
          <button class="primary-btn">Contact Partnerships</button>
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
  overflow-y: visible;
}

.page::before {
  content: "";
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  background-image: none;
  background-repeat: no-repeat;
  background-position: center 70%;
  background-size: min(1100px, 90vw) auto;
  opacity: 0.18;
  transform: scaleX(-1) rotate(45deg);
  transform-origin: center;
}

.top {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  z-index: 1;
  gap: 2rem;
  flex-wrap: wrap;
}

.brand {
  display: flex;
  align-items: center;
  min-width: 140px;
}

.brand-logo {
  width: 140px;
  height: 140px;
  object-fit: contain;
}

.canvas {
  flex: 1;
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 3rem 0 4rem;
}

.about-subnav {
  margin-bottom: -2.8rem;
}

.soften-in {
  opacity: 0;
  transform: translateY(-16px) rotate(-4deg);
  transform-origin: top left;
  animation: fallOver 700ms cubic-bezier(0.2, 0.7, 0.2, 1) forwards;
}

.delay-1 {
  animation-delay: 120ms;
}

.delay-2 {
  animation-delay: 240ms;
}

.delay-3 {
  animation-delay: 360ms;
}

.delay-4 {
  animation-delay: 480ms;
}

@keyframes fallOver {
  to {
    opacity: 1;
    transform: translateY(0) rotate(0deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .soften-in,
  .delay-1,
  .delay-2,
  .delay-3,
  .delay-4 {
    animation: none;
    opacity: 1;
    transform: none;
  }
}

.about-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
  gap: 2.5rem;
  align-items: start;
}

.about-hero-content {
  background: rgba(255, 255, 255, 0.86);
  padding: 2.6rem 3rem;
  border-radius: 32px;
  box-shadow: 0 24px 50px rgba(60, 47, 32, 0.18);
  backdrop-filter: blur(8px);
}

.hero-title {
  font-family: "Erode", "Times New Roman", serif;
  font-size: clamp(2rem, 4.5vw, 3rem);
  margin: 0 0 1rem;
  color: #241c14;
}

.hero-copy {
  margin: 0 0 1.6rem;
  max-width: 36rem;
  font-size: 1.05rem;
  line-height: 1.65;
  color: #4b3f32;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.about-hero-card {
  background: rgba(34, 27, 19, 0.88);
  color: #f7f1e7;
  padding: 2.2rem;
  border-radius: 28px;
  box-shadow: 0 22px 40px rgba(40, 28, 17, 0.25);
}

.card-kicker {
  font-size: 0.7rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin: 0 0 1.2rem;
  color: rgba(247, 241, 231, 0.75);
}

.impact-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.4rem;
}

.impact-item {
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
}

.impact-icon {
  width: 32px;
  height: 32px;
  flex: 0 0 auto;
  color: #f7f1e7;
  margin-top: 0.2rem;
}

.impact-item strong {
  font-size: 1.6rem;
  display: block;
  color: #f7f1e7;
}

.impact-item span {
  font-size: 0.85rem;
  color: rgba(247, 241, 231, 0.8);
}

.about-story {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.7fr);
  gap: 2.5rem;
  align-items: center;
}

.story-card {
  background: rgba(255, 255, 255, 0.88);
  padding: 2.5rem;
  border-radius: 28px;
  box-shadow: 0 22px 40px rgba(60, 47, 32, 0.12);
}

.story-card h2 {
  margin-top: 0;
  font-size: 1.8rem;
  font-family: "Erode", "Times New Roman", serif;
}

.story-card p {
  color: #4b3f32;
  line-height: 1.6;
}

.story-panel {
  background: rgba(34, 27, 19, 0.86);
  color: #f7f1e7;
  padding: 2.2rem;
  border-radius: 26px;
}

.story-panel h3 {
  margin-top: 0;
}

.story-panel ul {
  margin: 0 0 1.6rem;
  padding-left: 1.1rem;
  line-height: 1.6;
  color: rgba(247, 241, 231, 0.82);
}

.about-values {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.section-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;
}

.section-kicker {
  margin: 0 0 0.4rem;
  font-size: 0.75rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #7b5a36;
}

.section-title {
  margin: 0;
  font-size: clamp(1.6rem, 3.5vw, 2.2rem);
  font-family: "Erode", "Times New Roman", serif;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.value-card {
  background: rgba(255, 255, 255, 0.85);
  padding: 1.8rem;
  border-radius: 22px;
  box-shadow: 0 18px 30px rgba(60, 47, 32, 0.12);
}

.value-card h3 {
  margin: 0 0 0.6rem;
}

.value-card p {
  margin: 0;
  color: #4b3f32;
  line-height: 1.6;
}

.about-timeline {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.7fr);
  gap: 2.5rem;
  align-items: center;
}

.timeline-card {
  background: rgba(255, 255, 255, 0.88);
  padding: 2.5rem;
  border-radius: 28px;
  box-shadow: 0 22px 40px rgba(60, 47, 32, 0.12);
}

.timeline-card h2 {
  margin-top: 0;
  font-family: "Erode", "Times New Roman", serif;
}

.timeline-list {
  position: relative;
  display: grid;
  gap: 1.4rem;
  padding-left: 1.6rem;
}

.timeline-list::before {
  content: "";
  position: absolute;
  left: 0.45rem;
  top: 0.2rem;
  bottom: 0.2rem;
  width: 2px;
  background: rgba(163, 123, 75, 0.35);
}

.timeline-item {
  position: relative;
  padding-left: 1.2rem;
}

.timeline-item::before {
  content: "";
  position: absolute;
  left: -0.15rem;
  top: 0.3rem;
  width: 0.65rem;
  height: 0.65rem;
  border-radius: 999px;
  background: #a37b4b;
  box-shadow: 0 0 0 4px rgba(163, 123, 75, 0.15);
}

.timeline-list span {
  font-weight: 600;
  color: #7b5a36;
  display: block;
  margin-bottom: 0.3rem;
}

.timeline-list p {
  margin: 0;
  color: #4b3f32;
  line-height: 1.6;
}

.timeline-cta {
  background: rgba(34, 27, 19, 0.86);
  color: #f7f1e7;
  padding: 2.2rem;
  border-radius: 26px;
}

.timeline-cta p {
  color: rgba(247, 241, 231, 0.82);
  line-height: 1.6;
}

.top-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  justify-content: center;
  flex: 1 1 520px;
  max-width: 100%;
}

.nav-link {
  color: #1f1b15;
  text-decoration: none;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-bottom: 1px solid transparent;
  padding-bottom: 0.2rem;
}

.nav-link.is-active {
  border-bottom-color: #1f1b15;
}

.nav-link:hover,
.nav-link:focus {
  border-bottom-color: #1f1b15;
}

.nav-cta {
  border: 1px solid #a37b4b;
  background: #ffffff;
  color: #a37b4b;
  padding: 0.6rem 1.6rem;
  border-radius: 999px;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 160ms ease, transform 160ms ease;
}

.nav-cta:hover,
.nav-cta:focus {
  background: #f1ede6;
  transform: translateY(-1px);
}

.primary-btn,
.ghost-btn {
  border-radius: 999px;
  padding: 0.65rem 1.7rem;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid transparent;
  transition: transform 160ms ease, box-shadow 160ms ease;
}

.secondary-btn {
  border-radius: 999px;
  padding: 0.6rem 1.6rem;
  border: 1px solid rgba(247, 241, 231, 0.6);
  background: transparent;
  color: #f7f1e7;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  cursor: pointer;
}

.primary-btn {
  background: #a37b4b;
  color: #ffffff;
  box-shadow: 0 12px 20px rgba(163, 123, 75, 0.3);
}

.ghost-btn {
  background: transparent;
  color: #a37b4b;
  border-color: rgba(163, 123, 75, 0.6);
}

.primary-btn:hover,
.primary-btn:focus,
.ghost-btn:hover,
.ghost-btn:focus {
  transform: translateY(-1px);
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

  .top {
    flex-direction: column;
    align-items: flex-start;
  }

  .top-nav {
    justify-content: flex-start;
    gap: 1.5rem 2rem;
  }

  .nav-cta {
    align-self: flex-start;
  }

  .canvas {
    padding: 2.5rem 0 3rem;
    gap: 3rem;
  }

  .about-subnav {
    margin-bottom: -2rem;
  }

  .about-hero,
  .about-story,
  .about-timeline {
    grid-template-columns: 1fr;
  }

  .about-hero-content,
  .story-card,
  .timeline-card {
    padding: 2.2rem 2rem;
  }

  .section-head {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer {
    padding: 2.2rem 2rem 1.8rem;
  }
}
</style>
