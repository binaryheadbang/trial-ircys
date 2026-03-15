<template>
  <div class="page">
    <SiteNav />

    <main class="canvas">
      <CompetitionSubNav />

      <section class="content-card">
        <p class="section-kicker">Competition</p>
        <h1 class="page-title">Phases and Pathway</h1>
        <p class="lead">
          Explore the official phase flow and pathway structure used to evaluate and advance
          participating teams.
        </p>
      </section>

      <section class="pathway-card" aria-label="Pathway A details">
        <p class="pathway-kicker">Pathway A</p>
        <h2>Organization Partners Pathway</h2>
        <p class="pathway-subtitle">Direct selection for organization partners.</p>

        <div class="table-wrap">
          <table class="pathway-table">
            <thead>
              <tr>
                <th>Stage</th>
                <th>Activity</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Phase 1</td>
                <td>Administrative Selection</td>
                <td>
                  Participants submit personal data and a research Abstract (max 250 words).
                  <a class="doc-chip" href="#" aria-label="Open BCS Abstract Template">
                    BCS Abstract Template.docx
                  </a>
                </td>
              </tr>
              <tr>
                <td>Phase 2</td>
                <td>Abstract and Paper Review</td>
                <td>
                  The committee reviews the abstract and paper based on feasibility and originality.
                  <a class="doc-chip" href="#" aria-label="Open Template Paper Collective IRCYS">
                    Template Paper Collective IRCYS
                  </a>
                </td>
              </tr>
              <tr>
                <td>Phase 3</td>
                <td>International Grand Final</td>
                <td>
                  Qualified teams receive an LoA and proceed directly to the Offline Grand Final in
                  Indonesia.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="pathway-card pathway-card--b" aria-label="Pathway B details">
        <p class="pathway-kicker pathway-kicker--b">Pathway B</p>
        <h2>General Participants</h2>
        <p class="pathway-subtitle">Applicable for all participants (National &amp; International).</p>

        <div class="table-wrap">
          <table class="pathway-table pathway-table--b">
            <thead>
              <tr>
                <th>Stage</th>
                <th>Level</th>
                <th>Activity &amp; Requirement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Phase 1</td>
                <td>Initial Screening (Regional Selection/Seleksi Wilayah)</td>
                <td>
                  <strong>Abstract Submission:</strong> Participants submit a research abstract (max 250
                  words). Judges review the feasibility and originality of the idea. Strict Plagiarism
                  Check is applied.
                  <a class="doc-chip" href="#" aria-label="Open BCS Abstract Template">
                    BCS Abstract Template.docx
                  </a>
                </td>
              </tr>
              <tr>
                <td>Phase 2</td>
                <td>Full Paper Review (National Selection/Seleksi Nasional)</td>
                <td>
                  <strong>Full Paper Submission:</strong> Participants who pass Phase 1 MUST submit their
                  complete research paper. Judges review the methodology, data validity, and writing
                  quality. Only the best papers advance to the Final. Preparation for submission to the
                  <strong>IRCYS 2026 Paper Collective</strong>. (nge-link ke halaman paper collective).
                  <a class="doc-chip" href="#" aria-label="Open Template Paper Collective IRCYS">
                    Template Paper Collective IRCYS
                  </a>
                </td>
              </tr>
              <tr>
                <td>Phase 3</td>
                <td>Grand Final (Babak Final)</td>
                <td>
                  <strong>Offline Summit:</strong> The best teams advance to compete with international
                  participants in the Grand Final.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="pathway-card pathway-card--cta" aria-label="Guideline download">
        <h2>Need Full Phases and Pathway Guideline?</h2>
        <p>Download the participant guideline for complete pathway flow, requirements, and timeline.</p>
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
.pathway-card {
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

.pathway-card {
  background: linear-gradient(140deg, rgba(247, 251, 250, 0.98), rgba(255, 255, 255, 0.98));
  border: 1px solid rgba(72, 103, 96, 0.2);
}

.pathway-card--cta {
  display: grid;
  gap: 0.95rem;
  align-items: start;
  background: linear-gradient(145deg, rgba(75, 63, 50, 0.98), rgba(43, 35, 27, 0.97));
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.pathway-card--b {
  background: linear-gradient(140deg, rgba(245, 244, 250, 0.98), rgba(255, 255, 255, 0.98));
  border: 1px solid rgba(100, 90, 132, 0.22);
}

.pathway-kicker {
  margin: 0 0 0.45rem;
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #3f6963;
}

.pathway-kicker--b {
  color: #5c4e80;
}

.pathway-card h2 {
  margin: 0 0 0.4rem;
  font-size: clamp(1.3rem, 2.2vw, 1.7rem);
  color: #2a2118;
}

.pathway-card.pathway-card--cta h2 {
  color: #ffffff;
}

.pathway-card.pathway-card--cta p {
  margin: 0;
  color: #d8cbbb;
  line-height: 1.65;
}

.pathway-subtitle {
  margin: 0 0 1rem;
  color: #4f4337;
  line-height: 1.6;
}

.table-wrap {
  overflow-x: auto;
}

.pathway-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 760px;
  background: rgba(255, 255, 255, 0.86);
  border: 1px solid rgba(70, 55, 38, 0.22);
  border-radius: 14px;
  overflow: hidden;
}

.pathway-table th,
.pathway-table td {
  text-align: left;
  vertical-align: top;
  padding: 0.95rem 0.85rem;
  border: 1px solid rgba(70, 55, 38, 0.2);
}

.pathway-table th {
  background: #efe6d7;
  color: #2a2118;
  font-size: 1rem;
}

.pathway-table--b th {
  background: #ece7f4;
}

.pathway-table td:nth-child(1) {
  width: 12%;
  font-weight: 700;
  color: #2f2418;
}

.pathway-table td:nth-child(2) {
  width: 24%;
  font-weight: 700;
  color: #2f2418;
}

.pathway-table td:nth-child(3) {
  color: #4f4337;
  line-height: 1.6;
}

.doc-chip {
  display: inline-flex;
  align-items: center;
  margin-top: 0.4rem;
  padding: 0.28rem 0.55rem;
  border-radius: 999px;
  border: 1px solid rgba(63, 105, 99, 0.25);
  background: rgba(224, 240, 237, 0.9);
  color: #2f4d49;
  font-size: 0.88rem;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
}

.doc-chip:hover {
  background: rgba(207, 233, 228, 0.98);
  transform: translateY(-1px);
  box-shadow: 0 6px 14px rgba(47, 77, 73, 0.14);
}

.doc-chip:focus-visible {
  outline: 2px solid rgba(47, 77, 73, 0.45);
  outline-offset: 2px;
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
  .pathway-card {
    padding: 1.8rem;
  }

  .pathway-table {
    min-width: 640px;
  }
}
</style>

