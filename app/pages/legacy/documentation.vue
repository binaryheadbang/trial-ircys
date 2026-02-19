<template>
  <div class="page">
    <SiteNav />

    <main class="canvas">
      <LegacySubNav />

      <section class="content-card">
        <p class="section-kicker">Legacy</p>
        <h1 class="page-title">Documentation</h1>
        <p class="lead">
          Documentation provides handbooks, templates, and reference materials used by participants,
          mentors, and organizing teams.
        </p>
      </section>

      <section class="doc-grid" aria-label="Documentation resources">
        <article class="doc-card">
          <h2>Participant Resources</h2>
          <p>Guidebooks, submission templates, and presentation checklists.</p>
        </article>
        <article class="doc-card">
          <h2>Mentor Resources</h2>
          <p>Review rubrics, coaching standards, and mentoring workflow notes.</p>
        </article>
        <article class="doc-card">
          <h2>Organizer Resources</h2>
          <p>Operational SOPs, timeline playbooks, and communications templates.</p>
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
  gap: 1.2rem;
}

.content-card,
.doc-card {
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

.doc-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.doc-card h2 {
  margin: 0 0 0.65rem;
  font-size: 1.1rem;
  color: #2a2118;
}

.doc-card p {
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
  .doc-card {
    padding: 1.8rem;
  }
}
</style>
