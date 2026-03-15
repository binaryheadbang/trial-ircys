<template>
  <div class="page">
    <SiteNav />

    <main class="canvas">
      <CompetitionSubNav />

      <section class="content-card">
        <p class="section-kicker">Competition</p>
        <h1 class="page-title">Fee and Payment Policy</h1>
        <p class="lead">
          Review the official fee structure for each pathway and phase to ensure complete preparation
          before entering the competition cycle.
        </p>
      </section>

      <section class="fee-grid" aria-label="Fee policy details">
        <article class="fee-card fee-card--table">
          <h2>Official Fee Breakdown</h2>
          <div class="table-wrap">
            <table class="fee-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Phase</th>
                  <th>Fee</th>
                  <th>Note</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Organization Partner</strong></td>
                  <td>Phase 1 &amp; 2</td>
                  <td><strong>Ask The Committee for more Information</strong></td>
                  <td>-</td>
                </tr>
                <tr>
                  <td><strong>Indonesia and International</strong></td>
                  <td>Phase 1</td>
                  <td><strong>FREE</strong></td>
                  <td>No charge for abstract submission.</td>
                </tr>
                <tr>
                  <td><strong>Indonesia and International</strong></td>
                  <td>Phase 2</td>
                  <td><strong>FREE</strong></td>
                  <td>No charge for paper submission.</td>
                </tr>
                <tr>
                  <td><strong>All Finalists</strong></td>
                  <td><strong>Grand Final</strong></td>
                  <td>
                    <strong>425 USD for participants</strong><br />
                    <strong>225 USD for mentor/supervisor/parent/guardian</strong>
                  </td>
                  <td>
                    Covers 4D3N Accommodation<br />
                    Meals<br />
                    Airport Transfer<br />
                    Culture Tour<br />
                    Event Kit<br />
                    Medal/Certificate.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article class="fee-card fee-card--cta">
          <h2>Need Full Fee Guideline?</h2>
          <p>Download the participant guideline for full payment policy, schedule, and verification details.</p>
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
.fee-card {
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

.fee-grid {
  display: grid;
  gap: 1.1rem;
  grid-template-columns: repeat(12, minmax(0, 1fr));
}

.fee-card {
  grid-column: span 4;
}

.fee-card--table {
  grid-column: 1 / -1;
  background: linear-gradient(140deg, rgba(247, 251, 250, 0.98), rgba(255, 255, 255, 0.98));
  border: 1px solid rgba(72, 103, 96, 0.2);
}

.table-wrap {
  overflow-x: auto;
}

.fee-table {
  width: 100%;
  min-width: 860px;
  border-collapse: collapse;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(70, 55, 38, 0.22);
}

.fee-table th,
.fee-table td {
  text-align: left;
  vertical-align: top;
  padding: 0.75rem 0.7rem;
  border: 1px solid rgba(70, 55, 38, 0.18);
  line-height: 1.6;
  color: #3f3428;
}

.fee-table th {
  background: #efe6d7;
  color: #2a2118;
  font-size: 0.98rem;
}

.fee-card--cta {
  grid-column: 1 / -1;
  display: grid;
  gap: 0.95rem;
  align-items: start;
  background: linear-gradient(145deg, rgba(75, 63, 50, 0.98), rgba(43, 35, 27, 0.97));
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.fee-card h2 {
  margin: 0 0 0.65rem;
  font-size: 1.1rem;
  color: #2a2118;
}

.fee-card p {
  margin: 0;
  color: #4f4337;
  line-height: 1.65;
}

.fee-card.fee-card--cta h2 {
  color: #ffffff;
}

.fee-card.fee-card--cta p {
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
  .fee-card {
    padding: 1.8rem;
  }

  .fee-grid {
    grid-template-columns: 1fr;
  }

  .fee-card,
  .fee-card--table,
  .fee-card--cta {
    grid-column: auto;
  }

  .fee-table {
    min-width: 680px;
  }
}
</style>

