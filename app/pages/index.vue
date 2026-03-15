<template>
  <div class="page">
    <SiteNav />

    <main class="canvas">
      <section class="hero fade-in" aria-label="Homepage highlights">
        <div class="hero-content">
          <p class="hero-kicker">International Olympiad 2026</p>
          <h1 class="hero-title">
            Empowering young innovators to compete on a global stage.
            <span class="theme-highlight">Innovate, Inspire, Impact.</span>
          </h1>
          <p class="hero-copy">
            Join a network of mentors, judges, and finalists across 40+ countries. Build a project,
            present your research, and secure scholarships.
          </p>
          <div class="hero-actions">
            <button class="primary-btn">Register Now</button>
            <button class="ghost-btn">Download Guide</button>
          </div>
          <div class="hero-badges">
            <div>
              <strong>12</strong>
              <span>Categories</span>
            </div>
            <div>
              <strong>40+</strong>
              <span>Countries</span>
            </div>
            <div>
              <strong>1.2K</strong>
              <span>Finalists</span>
            </div>
          </div>
        </div>
        <div class="hero-card" aria-label="Next deadline">
          <p class="card-kicker">Competition Timeline 2026</p>
          <h2>Key Milestones</h2>
          <ul class="hero-card-timeline">
            <li><strong>Apr 1 - Jul 17:</strong> Open Registration</li>
            <li><strong>Apr 2 - Jul 17:</strong> Initial Screening / Abstract Submission</li>
            <li><strong>Apr 3 - Jul 17:</strong> Full Paper Review</li>
            <li><strong>Jul 17:</strong> Registration Deadline</li>
            <li><strong>Jul 30:</strong> Grand Final Preparation</li>
            <li><strong>Aug 13 - 16:</strong> International Grand Final</li>
          </ul>
          <button class="secondary-btn">View Full Timeline</button>
        </div>
      </section>

      <section class="news fade-in delay-1" aria-label="Latest news">
        <div class="section-head">
          <div>
            <p class="section-kicker">News highlight</p>
            <h2 class="section-title">Latest Olympiad Updates</h2>
          </div>
          <a class="section-link" href="#">View all news</a>
        </div>
        <div class="news-grid">
          <article class="news-card">
            <span class="news-tag">Announcement</span>
            <h3>Regional camp schedule released</h3>
            <p>Prepare for intensive mentoring and mock judging across 6 host universities.</p>
            <span class="news-meta">Posted 2 days ago</span>
          </article>
          <article class="news-card">
            <span class="news-tag">Spotlight</span>
            <h3>2025 Gold medalists share their research journey</h3>
            <p>Meet the teams who advanced bioplastics and AI-assisted diagnostics.</p>
            <span class="news-meta">Posted 1 week ago</span>
          </article>
          <article class="news-card">
            <span class="news-tag">Update</span>
            <h3>Scholarship partners expanded</h3>
            <p>New university partners will offer 48 additional grants for finalists.</p>
            <span class="news-meta">Posted 3 weeks ago</span>
          </article>
        </div>
      </section>

      <section class="details fade-in delay-2" aria-label="Olympiad details">
        <div class="details-card">
          <h2>Competition details</h2>
          <p>
            The Olympiad challenges students to present original research across STEM and social
            innovation. Each category is guided by a panel of international mentors and judges.
          </p>
          <ul class="details-list">
            <li>Online qualifiers: May 30 - June 10</li>
            <li>Grand final summit: July 22 - 26</li>
            <li>Hybrid format with live streaming</li>
          </ul>
          <button class="primary-btn">Download Rulebook</button>
        </div>
        <div class="details-metrics">
          <div>
            <h3>Mentor sessions</h3>
            <p>Weekly clinics, peer review, and research coaching.</p>
          </div>
          <div>
            <h3>Judging rubric</h3>
            <p>Scoring for novelty, impact, and presentation clarity.</p>
          </div>
          <div>
            <h3>Global showcase</h3>
            <p>Featured finalists receive press and institutional support.</p>
          </div>
        </div>
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

.fade-in {
  opacity: 0;
  transform: translateY(18px);
  animation: fadeInUp 700ms ease forwards;
}

.delay-1 {
  animation-delay: 120ms;
}

.delay-2 {
  animation-delay: 240ms;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .fade-in,
  .delay-1,
  .delay-2 {
    animation: none;
    opacity: 1;
    transform: none;
  }
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(260px, 0.6fr);
  gap: 2.5rem;
  align-items: start;
}

.hero-content {
  background: rgba(255, 255, 255, 0.86);
  padding: 2.6rem 3rem;
  border-radius: 32px;
  box-shadow: 0 24px 50px rgba(60, 47, 32, 0.18);
  backdrop-filter: blur(8px);
}

.hero-kicker {
  font-size: 0.75rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  margin: 0 0 0.8rem;
  color: #7b5a36;
}

.hero-title {
  font-family: "Erode", "Times New Roman", serif;
  font-size: clamp(2rem, 4.5vw, 3rem);
  margin: 0 0 1rem;
  color: #241c14;
}

.theme-highlight {
  display: inline-block;
  margin-top: 0.55rem;
  margin-left: 0.2rem;
  padding: 0.18rem 0.62rem;
  border-radius: 12px;
  font-size: clamp(1.05rem, 2.2vw, 1.25rem);
  letter-spacing: 0.04em;
  color: #ffffff;
  background: linear-gradient(135deg, #a37b4b, #7b5a36);
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
  margin-bottom: 1.6rem;
}

.hero-badges {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.2rem;
  text-align: center;
}

.hero-badges strong {
  font-size: 1.4rem;
  color: #a37b4b;
  display: block;
}

.hero-badges span {
  font-size: 0.85rem;
  color: #5d4a35;
}

.hero-card {
  background: rgba(34, 27, 19, 0.88);
  color: #f7f1e7;
  padding: 2.2rem;
  border-radius: 28px;
  box-shadow: 0 22px 40px rgba(40, 28, 17, 0.25);
}

.hero-card h2 {
  margin: 0.6rem 0 1rem;
  font-size: 1.6rem;
}

.hero-card p {
  margin: 0 0 1.6rem;
  color: rgba(247, 241, 231, 0.8);
}

.hero-card-timeline {
  margin: 0 0 1.2rem;
  padding-left: 0;
  list-style: none;
  position: relative;
}

.hero-card-timeline li {
  position: relative;
  margin: 0;
  padding: 0 0 0.9rem 1.25rem;
  color: rgba(247, 241, 231, 0.88);
  line-height: 1.45;
}

.hero-card-timeline li::before {
  content: "";
  position: absolute;
  left: 0.05rem;
  top: 0.28rem;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 999px;
  background: #f4dbc0;
  border: 1px solid rgba(255, 255, 255, 0.85);
  z-index: 1;
}

.hero-card-timeline li::after {
  content: "";
  position: absolute;
  left: 0.28rem;
  top: 0.85rem;
  bottom: 0.1rem;
  width: 1px;
  background: rgba(247, 241, 231, 0.35);
}

.hero-card-timeline li:last-child {
  padding-bottom: 0;
}

.hero-card-timeline li:last-child::after {
  display: none;
}

.hero-card-timeline strong {
  color: #ffffff;
}

.card-kicker {
  font-size: 0.7rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin: 0;
  color: rgba(247, 241, 231, 0.75);
}

.news {
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

.section-link {
  color: #7b5a36;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none;
  font-size: 0.75rem;
  border-bottom: 1px solid transparent;
  padding-bottom: 0.2rem;
}

.section-link:hover,
.section-link:focus {
  border-bottom-color: #7b5a36;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.news-card {
  background: rgba(255, 255, 255, 0.85);
  padding: 1.8rem;
  border-radius: 22px;
  box-shadow: 0 18px 30px rgba(60, 47, 32, 0.12);
}

.news-card h3 {
  margin: 0.6rem 0 0.8rem;
  font-size: 1.1rem;
  color: #2b231a;
}

.news-card p {
  margin: 0 0 1.2rem;
  color: #4b3f32;
  line-height: 1.6;
}

.news-tag {
  display: inline-block;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #a37b4b;
}

.news-meta {
  font-size: 0.8rem;
  color: #6b5843;
}

.details {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr);
  gap: 2.5rem;
  align-items: center;
}

.details-card {
  background: rgba(255, 255, 255, 0.88);
  padding: 2.5rem;
  border-radius: 28px;
  box-shadow: 0 22px 40px rgba(60, 47, 32, 0.12);
}

.details-card h2 {
  margin-top: 0;
  font-size: 1.8rem;
  font-family: "Erode", "Times New Roman", serif;
}

.details-card p {
  color: #4b3f32;
  line-height: 1.6;
}

.details-list {
  padding-left: 1.2rem;
  color: #4b3f32;
  margin: 1.2rem 0 1.6rem;
}

.details-list li {
  margin-bottom: 0.6rem;
}

.details-metrics {
  display: grid;
  gap: 1.5rem;
}

.details-metrics div {
  background: rgba(34, 27, 19, 0.86);
  color: #f7f1e7;
  padding: 1.8rem;
  border-radius: 22px;
}

.details-metrics h3 {
  margin: 0 0 0.6rem;
}

.details-metrics p {
  margin: 0;
  color: rgba(247, 241, 231, 0.8);
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

  .hero {
    grid-template-columns: 1fr;
  }

  .hero-content {
    padding: 2.2rem 2rem;
  }

  .hero-badges {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .section-head {
    flex-direction: column;
    align-items: flex-start;
  }

  .details {
    grid-template-columns: 1fr;
  }

}
</style>
