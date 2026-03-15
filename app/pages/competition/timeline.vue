<template>
  <div class="page">
    <SiteNav />

    <main class="canvas">
      <CompetitionSubNav />

      <section class="content-card">
        <p class="section-kicker">Competition</p>
        <h1 class="page-title">Timeline</h1>
        <p class="lead">
          The official timeline defines every key milestone from registration to the international
          grand final for both organization partners and general participants.
        </p>
      </section>

      <section class="timeline-card timeline-card--main" aria-label="Competition timeline">
        <h2>Competition - Timeline</h2>
        <div class="table-wrap">
          <table class="timeline-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Activity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>April 1st-July 17th, 2026</td>
                <td><strong>Open Registration:</strong> for Organization Partner and General Participant</td>
              </tr>
              <tr>
                <td>April 2nd-July 17th, 2026</td>
                <td>Initial Screening/Abstract Submission Start and deadline</td>
              </tr>
              <tr>
                <td>April 3nd-July 17th, 2026</td>
                <td>Full Paper Review Start and deadline</td>
              </tr>
              <tr>
                <td>July 17th, 2026</td>
                <td><strong>Deadline Registration</strong></td>
              </tr>
              <tr>
                <td>July 30th, 2026</td>
                <td>
                  <strong>Grand Final Preparation:</strong>
                  <ul>
                    <li>Payment: Complete the payment.</li>
                    <li>Itinerary: Upload Flight Ticket/Transportation.</li>
                    <li>Confirmation Letter: Upload Confirmation Letter.</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>August 13th-16th, 2026</td>
                <td><strong>INTERNATIONAL GRAND FINAL</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="timeline-card timeline-card--cta" aria-label="Guideline download">
        <h2>Need Full Timeline Guideline?</h2>
        <p>Download the participant guideline for complete date updates, submission flow, and preparation requirements.</p>
        <a class="download-btn" href="#" aria-label="Download Participants Guideline">
          Download Participants Guideline
        </a>
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
.timeline-card {
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

.timeline-card--main {
  background: linear-gradient(140deg, rgba(247, 251, 250, 0.98), rgba(255, 255, 255, 0.98));
  border: 1px solid rgba(72, 103, 96, 0.2);
}

.table-wrap {
  overflow-x: auto;
}

.timeline-table {
  width: 100%;
  min-width: 760px;
  border-collapse: collapse;
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(70, 55, 38, 0.22);
}

.timeline-table th,
.timeline-table td {
  text-align: left;
  vertical-align: top;
  padding: 0.85rem 0.75rem;
  border: 1px solid rgba(70, 55, 38, 0.18);
  line-height: 1.6;
}

.timeline-table th {
  background: #efe6d7;
  color: #2a2118;
  font-size: 1rem;
}

.timeline-table td:nth-child(1) {
  width: 27%;
  font-weight: 700;
  color: #2f2418;
}

.timeline-table td:nth-child(2) {
  color: #4f4337;
}

.timeline-table ul {
  margin: 0.35rem 0 0;
  padding-left: 1.1rem;
}

.timeline-table li {
  margin: 0.1rem 0;
}

.timeline-card--cta {
  display: grid;
  gap: 0.95rem;
  align-items: start;
  background: linear-gradient(145deg, rgba(75, 63, 50, 0.98), rgba(43, 35, 27, 0.97));
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.timeline-card h2 {
  margin: 0 0 0.65rem;
  font-size: 1.1rem;
  color: #2a2118;
}

.timeline-card p {
  margin: 0;
  color: #4f4337;
  line-height: 1.65;
}

.timeline-card.timeline-card--cta h2 {
  color: #ffffff;
}

.timeline-card.timeline-card--cta p {
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
  .timeline-card {
    padding: 1.8rem;
  }

  .timeline-table {
    min-width: 640px;
  }
}
</style>

