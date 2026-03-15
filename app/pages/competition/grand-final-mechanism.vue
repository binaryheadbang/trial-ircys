<template>
  <div class="page">
    <SiteNav />

    <main class="canvas">
      <CompetitionSubNav />

      <section class="content-card">
        <p class="section-kicker">Competition</p>
        <h1 class="page-title">Grand Final Mechanism</h1>
        <p class="lead">
          The final phase is designed as a structured academic summit that combines exhibition,
          scientific judging, and international-stage presentation standards.
        </p>
      </section>

      <section class="mechanism-grid" aria-label="Grand final structure">
        <article class="mechanism-card mechanism-card--feature">
          <h2>The Exhibition</h2>
          <ul>
            <li><strong>Venue:</strong> TBA</li>
            <li><strong>City:</strong> TBA</li>
          </ul>
        </article>

        <article class="mechanism-card mechanism-card--schedule">
          <h2>Event Schedule (4 Days / 3 Nights)</h2>
          <ul>
            <li><strong>August 13:</strong> Arrival &amp; Check-in.</li>
            <li><strong>August 14:</strong> Opening Ceremony &amp; <strong>Scientific Judging Session</strong> (Presentation).</li>
            <li><strong>August 15:</strong> Bali Cultural Tour &amp; <strong>Awarding Ceremony</strong>.</li>
            <li><strong>August 16:</strong> Departure.</li>
          </ul>
        </article>

        <article class="mechanism-card mechanism-card--judging">
          <h2>The Judging Session</h2>
          <p>Participants will present in a room with a panel of judges.</p>
          <ul>
            <li>Presentation: 5 MINUTES (strictly timed).</li>
            <li>Q&amp;A Session: 5 MINUTES.</li>
            <li>Total: 10 Minutes per team.</li>
          </ul>
        </article>

        <article class="mechanism-card mechanism-card--criteria">
          <h2>Judging Criteria</h2>
          <p>
            <strong>IRCYS 2026</strong> utilizes an integrated judging system with the total score
            divided into two main phases: Full Paper Review (40%) and Live Final Presentation (60%).
            Judges will score each sub-criteria on a scale of 0 to 5 (based on the scoring guide in
            the rubric).
          </p>
        </article>

        <article class="mechanism-card mechanism-card--track track-card--one">
          <h2>TRACK 1: THEORETICAL STUDIES (Science &amp; Social)</h2>
          <p>
            Judging focuses on the depth of methodology and scientific analysis in the text (40%) and
            the mastery of the material and ability to defend arguments (60%).
          </p>
          <div class="criteria-table-wrap">
            <table class="criteria-table">
              <thead>
                <tr>
                  <th>JUDGING PHASE</th>
                  <th>WEIGHT</th>
                  <th>CRITERIA FOCUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Phase 1: Full Paper Review</td>
                  <td>40%</td>
                  <td>
                    Background &amp; Problem, Research Methodology, Written Data Analysis, Scientific
                    Writing
                  </td>
                </tr>
                <tr>
                  <td>Phase 2: Live Final (Presentation)</td>
                  <td>60%</td>
                  <td>
                    Mastery of Material, Depth of Oral Analysis, Originality (Novelty), Question &amp;
                    Answer (Q&amp;A), Presentation Technique
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article class="mechanism-card mechanism-card--track track-card--two">
          <h2>TRACK 2: APPLIED STUDIES (Engineering &amp; Technology)</h2>
          <p>
            Judging focuses on the quality of technical design and product testing data (40%) and the
            proof of function and feasibility of the innovation (60%).
          </p>
          <div class="criteria-table-wrap">
            <table class="criteria-table">
              <thead>
                <tr>
                  <th>JUDGING PHASE</th>
                  <th>WEIGHT</th>
                  <th>CRITERIA FOCUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Phase 1: Full Paper Review</td>
                  <td>40%</td>
                  <td>
                    Technical Problem &amp; Objective, Design &amp; Construction, Testing Data, Technical
                    Writing
                  </td>
                </tr>
                <tr>
                  <td>Phase 2: Live Final (Presentation)</td>
                  <td>60%</td>
                  <td>
                    Functional Proof, Quality of Innovation, Feasibility, Question &amp; Answer (Q&amp;A),
                    Presentation Technique
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article class="mechanism-card mechanism-card--track track-card--three">
          <h2>TRACK 3: HUMANITY STUDIES (Humanity &amp; Social Intervention)</h2>
          <p>
            Judging focuses on the social context and intervention methods in the report (40%) and the
            storytelling of impact and sustainability (60%).
          </p>
          <div class="criteria-table-wrap">
            <table class="criteria-table">
              <thead>
                <tr>
                  <th>JUDGING PHASE</th>
                  <th>WEIGHT</th>
                  <th>CRITERIA FOCUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Phase 1: Full Paper Review</td>
                  <td>40%</td>
                  <td>
                    Social Context, Intervention Method, Impact Evaluation, Report Narrative
                  </td>
                </tr>
                <tr>
                  <td>Phase 2: Live Final (Presentation)</td>
                  <td>60%</td>
                  <td>
                    Proof of Impact, Sustainability, Empathy &amp; Context, Question &amp; Answer (Q&amp;A),
                    Presentation Technique
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article class="mechanism-card mechanism-card--cta">
          <h2>Need Full Grand Final Guideline?</h2>
          <p>Download the participant guideline for complete scoring rubric, track criteria, and final round preparation.</p>
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
.mechanism-card {
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

.mechanism-grid {
  display: grid;
  gap: 1.1rem;
  grid-template-columns: repeat(12, minmax(0, 1fr));
}

.mechanism-card {
  grid-column: span 6;
}

.mechanism-card--feature {
  grid-column: 9 / 13;
  grid-row: 1 / 3;
  background: linear-gradient(145deg, rgba(75, 63, 50, 0.98), rgba(43, 35, 27, 0.97));
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.mechanism-card.mechanism-card--feature h2,
.mechanism-card.mechanism-card--feature li {
  color: #ffffff;
}

.mechanism-card.mechanism-card--feature p,
.mechanism-card.mechanism-card--feature li,
.mechanism-card.mechanism-card--feature strong {
  color: #d9cbbb;
}

.mechanism-card--schedule {
  grid-column: 1 / 9;
  grid-row: 1;
  background: linear-gradient(135deg, rgba(255, 249, 237, 0.95), rgba(255, 255, 255, 0.98));
  border: 1px solid rgba(123, 90, 54, 0.18);
}

.mechanism-card--judging {
  grid-column: 1 / 9;
  grid-row: 2;
}

.mechanism-card--criteria {
  grid-column: 1 / -1;
  grid-row: 3;
  background: linear-gradient(140deg, rgba(247, 251, 250, 0.98), rgba(255, 255, 255, 0.98));
  border: 1px solid rgba(72, 103, 96, 0.2);
}

.mechanism-card--track {
  grid-column: 1 / -1;
}

.track-card--one {
  background: linear-gradient(140deg, rgba(255, 248, 235, 0.95), rgba(255, 255, 255, 0.98));
  border: 1px solid rgba(123, 90, 54, 0.2);
}

.track-card--two {
  background: linear-gradient(140deg, rgba(241, 248, 246, 0.95), rgba(255, 255, 255, 0.98));
  border: 1px solid rgba(64, 110, 102, 0.2);
}

.track-card--three {
  background: linear-gradient(140deg, rgba(243, 241, 249, 0.95), rgba(255, 255, 255, 0.98));
  border: 1px solid rgba(103, 92, 132, 0.2);
}

.mechanism-card--cta {
  grid-column: 1 / -1;
  display: grid;
  gap: 0.95rem;
  align-items: start;
  background: linear-gradient(145deg, rgba(75, 63, 50, 0.98), rgba(43, 35, 27, 0.97));
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.mechanism-card h2 {
  margin: 0 0 0.65rem;
  font-size: 1.1rem;
  color: #2a2118;
}

.mechanism-card--track h2 {
  display: inline-block;
  margin: 0 0 0.75rem;
  padding: 0.34rem 0.62rem;
  border-radius: 10px;
  border: 1px solid rgba(86, 67, 46, 0.18);
  background: rgba(255, 255, 255, 0.72);
}

.track-card--one h2 {
  background: rgba(235, 214, 183, 0.42);
}

.track-card--two h2 {
  background: rgba(184, 220, 213, 0.42);
}

.track-card--three h2 {
  background: rgba(210, 198, 231, 0.45);
}

.mechanism-card p {
  margin: 0;
  color: #4f4337;
  line-height: 1.65;
}

.mechanism-card.mechanism-card--cta h2 {
  color: #ffffff;
}

.mechanism-card.mechanism-card--cta p {
  color: #d8cbbb;
}

.mechanism-card ul {
  margin: 0.45rem 0 0;
  padding-left: 1.1rem;
}

.mechanism-card li {
  color: #4f4337;
  line-height: 1.65;
}

.mechanism-card p + p {
  margin-top: 0.7rem;
}

.criteria-table-wrap {
  margin-top: 0.95rem;
  overflow-x: auto;
}

.criteria-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 680px;
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(70, 55, 38, 0.22);
}

.criteria-table th,
.criteria-table td {
  text-align: left;
  vertical-align: top;
  padding: 0.75rem 0.7rem;
  border: 1px solid rgba(70, 55, 38, 0.18);
  color: #3f3428;
  line-height: 1.55;
}

.criteria-table th {
  font-size: 0.95rem;
  background: rgba(237, 230, 215, 0.8);
}

.criteria-table td:nth-child(1) {
  width: 36%;
  font-weight: 700;
}

.criteria-table td:nth-child(2) {
  width: 12%;
  font-weight: 700;
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
  .mechanism-card {
    padding: 1.8rem;
  }

  .mechanism-grid {
    grid-template-columns: 1fr;
  }

  .mechanism-card,
  .mechanism-card--feature,
  .mechanism-card--schedule,
  .mechanism-card--judging,
  .mechanism-card--criteria,
  .mechanism-card--cta {
    grid-column: auto;
    grid-row: auto;
  }
}
</style>

