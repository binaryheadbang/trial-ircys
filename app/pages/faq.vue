<template>
  <div class="page">
    <SiteNav />

    <main class="canvas">
      <section class="hero-card" aria-label="FAQ overview">
        <div class="hero-copy">
          <p class="section-kicker">Frequently Asked Questions</p>
          <h1 class="page-title">FAQ</h1>
          <p class="lead">
            Key information for participants, schools, and partners regarding competition phases,
            preparation requirements, event format, and the official IRCYS host city.
          </p>
        </div>

        <aside class="faq-panel">
          <p class="panel-kicker">Quick Guide</p>
          <div class="panel-item">
            <strong>6 Key Questions</strong>
            <span>Participation, deadline, process, preparation, format, and venue.</span>
          </div>
          <div class="panel-item">
            <strong>Official Reference</strong>
            <span>Prepared to answer the most common questions before registration.</span>
          </div>
        </aside>
      </section>

      <section class="faq-table-card" aria-label="Frequently asked questions">
        <div class="faq-row">
          <div class="faq-question">Who can Participate?</div>
          <div class="faq-answer">
            IRCYS has 4 category brackets: Elementary Students, Junior School Students, High School
            Students and College Students. Regardless of age, participants compete in the same phase
            and do the task. However, we only compare participants within their category brackets.
            This means we score the 4 brackets independently and normalize scores within each.
            Semi-finalists, Grand-finalists, and winners are those with the highest normalized
            scores. This ensures fair comparison regardless of age.
          </div>
        </div>

        <div class="faq-row">
          <div class="faq-question">When is the deadline?</div>
          <div class="faq-answer">The deadline is July 17<sup>th</sup>, 2026, enrolled now!</div>
        </div>

        <div class="faq-row">
          <div class="faq-question">How does IRCYS work?</div>
          <div class="faq-answer">
            IRCYS has 3 phases, Phase 1 is Abstract Submission, Phase 2 is Full Paper Review, and
            Phase 3 is Grand Finals. All participants who made it through to phase 3 are entitled to
            attend the IRCYS grand final event which will be held in Bali, Indonesia. The Final
            Judging Session will focus on the research of the participants. Participants will present
            their research results in front of the jury without an audience. So the atmosphere is
            like a thesis trial.
          </div>
        </div>

        <div class="faq-row">
          <div class="faq-question">What should I prepare?</div>
          <div class="faq-answer">
            Phase 1 Abstract Submission: upload abstract at registration dashboard.<br />
            Phase 2 Full Paper Review: upload your paper at registration dashboard.<br />
            Phase 3 Grand Finals: Presentation File (PPT/Canva), video, laptop, or anything that
            needed for presentation. Please see the Participants Guideline for other details.
          </div>
        </div>

        <div class="faq-row">
          <div class="faq-question">Why use this format?</div>
          <div class="faq-answer">
            We see a lot of competitions out there that have very little competition atmosphere. With
            a conference format like ours, participants will be encouraged to do their best when
            presenting before the jury. When participants present, no one can help but themselves.
            This is where the expected competitive atmosphere is built. Despite the competition,
            development and desire for research is more important. Making friends with other people
            who share the same passion will help keep participants on track.
          </div>
        </div>

        <div class="faq-row">
          <div class="faq-question">Where will IRCYS be held?</div>
          <div class="faq-answer">This year our team appointed Bali as the host of IRCYS.</div>
        </div>
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

.hero-card,
.faq-table-card {
  background: rgba(255, 255, 255, 0.9);
  padding: 2.2rem 2.5rem;
  border-radius: 24px;
  box-shadow: 0 18px 34px rgba(60, 47, 32, 0.1);
}

.hero-card {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(260px, 0.52fr);
  gap: 1.2rem;
  border: 1px solid rgba(123, 90, 54, 0.14);
  background: linear-gradient(140deg, rgba(248, 246, 241, 0.96), rgba(255, 255, 255, 0.98));
}

.hero-copy {
  padding-right: 0.4rem;
}

.section-kicker,
.panel-kicker {
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

.faq-panel {
  padding: 1.4rem 1.45rem;
  border-radius: 20px;
  background: linear-gradient(145deg, rgba(75, 63, 50, 0.98), rgba(43, 35, 27, 0.97));
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: grid;
  gap: 0.8rem;
}

.panel-kicker {
  color: #d7c4ad;
  margin-bottom: 0;
}

.panel-item {
  padding-top: 0.8rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.panel-item strong {
  display: block;
  color: #ffffff;
  margin-bottom: 0.18rem;
}

.panel-item span {
  color: #d9cbbb;
  line-height: 1.55;
}

.faq-table-card {
  padding: 1rem;
  display: grid;
  gap: 0.95rem;
  background: rgba(255, 251, 246, 0.74);
  border: 1px solid rgba(123, 90, 54, 0.14);
}

.faq-row {
  display: grid;
  grid-template-columns: minmax(220px, 0.42fr) minmax(0, 1fr);
  border: 1px solid rgba(123, 90, 54, 0.12);
  border-radius: 18px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 10px 22px rgba(60, 47, 32, 0.05);
}

.faq-question,
.faq-answer {
  padding: 1.25rem 1.4rem;
}

.faq-question {
  font-size: 1.05rem;
  font-weight: 700;
  color: #241c14;
  background: linear-gradient(140deg, rgba(247, 241, 231, 0.92), rgba(252, 248, 242, 0.92));
  border-right: 1px solid rgba(123, 90, 54, 0.14);
}

.faq-answer {
  color: #4b3f32;
  line-height: 1.72;
  background: rgba(255, 255, 255, 0.98);
}

@media (max-width: 900px) {
  .page {
    padding: 2rem 1.5rem 2rem;
  }

  .canvas {
    padding: 2.4rem 0 3rem;
  }

  .hero-card {
    grid-template-columns: 1fr;
  }

  .hero-card,
  .faq-table-card {
    padding: 1.8rem;
  }

  .faq-row {
    grid-template-columns: 1fr;
  }

  .faq-question {
    border-right: 0;
    border-bottom: 1px solid rgba(123, 90, 54, 0.14);
  }

}
</style>
