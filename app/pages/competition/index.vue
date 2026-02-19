<template>
  <div class="page">
    <SiteNav />

    <main class="canvas">
      <CompetitionSubNav class="competition-subnav" />

      <section class="comp-shell" aria-label="Competition overview">
        <aside class="comp-rail curl-in">
          <p class="section-kicker">Competition</p>
          <h1 class="hero-title">Compete with confidence and clear milestones.</h1>
          <p class="hero-copy">
            Follow the roadmap to submit, refine, and present your research to international
            panels. Every phase comes with guidance, feedback, and scoring transparency.
          </p>
          <div class="hero-actions">
            <button class="primary-btn">Apply Now</button>
            <button class="ghost-btn">Download Rulebook</button>
          </div>
          <div class="rail-card">
            <p class="card-kicker">Support line</p>
            <p>Need help? Email <strong>competition@olympiad.org</strong>.</p>
          </div>
        </aside>

        <div class="comp-flow">
          <section class="flow-card curl-in delay-1">
            <div class="flow-head">
              <h2>Key timeline</h2>
              <span>2026 season</span>
            </div>
            <div class="flow-steps">
              <div class="flow-step">
                <svg class="step-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M8 6V4m8 2V4M4 10h16M6 8h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div class="flow-step-text">
                  <strong>Apr 28</strong>
                  <span>Submission deadline</span>
                </div>
              </div>
              <div class="flow-step">
                <svg class="step-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M9 11l2 2 4-4"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.6" />
                </svg>
                <div class="flow-step-text">
                  <strong>May 18</strong>
                  <span>Finalist announcement</span>
                </div>
              </div>
              <div class="flow-step">
                <svg class="step-icon" viewBox="0 0 24 24" aria-hidden="true">
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
                <div class="flow-step-text">
                  <strong>Jul 22 - 26</strong>
                  <span>Phase 3: Global summit & awards</span>
                </div>
              </div>
            </div>
          </section>

          <section class="flow-grid curl-in delay-2" aria-label="Competition phases">
            <article class="phase-card">
              <span class="phase-step">Phase 1</span>
              <h3>Online qualifiers</h3>
              <p>Submit abstract, methodology, and early results for scoring.</p>
            </article>
            <article class="phase-card">
              <span class="phase-step">Phase 2</span>
              <h3>Mentorship & review</h3>
              <p>Weekly review clinics and mentor feedback to refine submissions.</p>
            </article>
          </section>

          <section class="flow-duo curl-in delay-3">
            <div class="flow-panel">
              <h3>Tracks & eligibility</h3>
              <p>Open to high school and undergraduate teams worldwide.</p>
              <ul>
                <li>STEM Innovation</li>
                <li>Health & Life Sciences</li>
                <li>Social Impact & Policy</li>
                <li>Creative Technology</li>
              </ul>
              <button class="primary-btn">View categories</button>
            </div>
            <div class="flow-panel dark">
              <h3>Judging criteria</h3>
              <ul>
                <li>Originality & research depth</li>
                <li>Impact potential</li>
                <li>Execution & presentation</li>
                <li>Collaboration & ethics</li>
              </ul>
              <button class="secondary-btn">Read rubric</button>
            </div>
          </section>

          <section class="flow-awards curl-in delay-4">
            <div>
              <h3>Awards & benefits</h3>
              <p>Scholarships, grants, and partner lab placements for top teams.</p>
            </div>
            <div class="awards-grid">
              <div>
                <strong>48</strong>
                <span>Scholarships</span>
              </div>
              <div>
                <strong>12</strong>
                <span>Research grants</span>
              </div>
              <div>
                <strong>25</strong>
                <span>Mentor partners</span>
              </div>
            </div>
            <button class="primary-btn">Download guidebook</button>
          </section>
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

.competition-subnav {
  margin-bottom: -2.8rem;
}

.comp-shell {
  display: grid;
  grid-template-columns: minmax(240px, 0.45fr) minmax(0, 1fr);
  gap: 2.5rem;
  align-items: start;
}

.comp-rail {
  position: sticky;
  top: 2rem;
  align-self: start;
  background: rgba(255, 255, 255, 0.88);
  padding: 2.4rem 2.2rem;
  border-radius: 28px;
  box-shadow: 0 20px 36px rgba(60, 47, 32, 0.12);
  backdrop-filter: blur(8px);
}

.rail-card {
  margin-top: 2rem;
  padding-top: 1.6rem;
  border-top: 1px solid rgba(77, 63, 50, 0.18);
  color: #4b3f32;
}

.comp-flow {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.flow-card {
  background: rgba(34, 27, 19, 0.88);
  color: #f7f1e7;
  padding: 2.2rem;
  border-radius: 28px;
  box-shadow: 0 22px 40px rgba(40, 28, 17, 0.25);
}

.flow-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 1.6rem;
}

.flow-head span {
  font-size: 0.85rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(247, 241, 231, 0.72);
}

.flow-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1.4rem;
}

.flow-step {
  display: flex;
  align-items: flex-end;
  gap: 0.9rem;
}

.flow-step-text {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.step-icon {
  width: 34px;
  height: 34px;
  color: #f7f1e7;
  flex: 0 0 auto;
  margin-top: 0;
}

.flow-steps strong {
  display: block;
  font-size: 1.2rem;
}

.flow-steps span {
  color: rgba(247, 241, 231, 0.78);
  font-size: 0.9rem;
}

.flow-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.phase-card {
  background: rgba(255, 255, 255, 0.88);
  padding: 1.8rem;
  border-radius: 22px;
  box-shadow: 0 18px 30px rgba(60, 47, 32, 0.12);
}

.phase-step {
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #a37b4b;
}

.phase-card h3 {
  margin: 0.6rem 0 0.8rem;
}

.phase-card p {
  margin: 0;
  color: #4b3f32;
  line-height: 1.6;
}

.flow-duo {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.8fr);
  gap: 1.6rem;
}

.flow-panel {
  background: rgba(255, 255, 255, 0.88);
  padding: 2.2rem;
  border-radius: 26px;
  box-shadow: 0 18px 30px rgba(60, 47, 32, 0.12);
  color: #4b3f32;
}

.flow-panel.dark {
  background: rgba(34, 27, 19, 0.86);
  color: #f7f1e7;
}

.flow-panel ul {
  margin: 0 0 1.4rem;
  padding-left: 1.1rem;
  line-height: 1.6;
}

.flow-panel.dark ul {
  color: rgba(247, 241, 231, 0.82);
}

.flow-awards {
  background: rgba(255, 255, 255, 0.88);
  padding: 2.4rem;
  border-radius: 28px;
  box-shadow: 0 22px 40px rgba(60, 47, 32, 0.12);
  display: grid;
  gap: 1.6rem;
}

.curl-in {
  position: relative;
  opacity: 0;
  transform: perspective(900px) rotateY(-14deg) translateX(-18px);
  transform-origin: left center;
  animation: pageCurl 780ms cubic-bezier(0.2, 0.7, 0.2, 1) forwards;
}

.curl-in::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(120deg, rgba(0, 0, 0, 0.18), transparent 42%);
  opacity: 0.7;
  pointer-events: none;
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

@keyframes pageCurl {
  to {
    opacity: 1;
    transform: perspective(900px) rotateY(0deg) translateX(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .curl-in,
  .delay-1,
  .delay-2,
  .delay-3,
  .delay-4 {
    animation: none;
    opacity: 1;
    transform: none;
  }
  .curl-in::before {
    display: none;
  }
}

.awards-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.2rem;
  text-align: center;
}

.awards-grid strong {
  display: block;
  font-size: 1.4rem;
  color: #a37b4b;
}

.awards-grid span {
  font-size: 0.85rem;
  color: #5d4a35;
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

.card-kicker {
  font-size: 0.7rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin: 0 0 1.2rem;
  color: rgba(247, 241, 231, 0.75);
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

  .competition-subnav {
    margin-bottom: -2rem;
  }

  .comp-shell {
    grid-template-columns: 1fr;
  }

  .comp-rail {
    position: static;
  }

  .flow-duo {
    grid-template-columns: 1fr;
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
