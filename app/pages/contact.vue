<template>
  <div class="page">
    <SiteNav />

    <main class="canvas">
      <section class="contact-hero">
        <p class="section-kicker">Contact</p>
        <h1 class="page-title">Contact Us</h1>
        <p class="page-copy">Reach out for partnerships, participant questions, or media inquiries.</p>
      </section>

      <section class="contact-content">
        <div class="contact-map">
          <iframe
            title="IRCYS location map"
            src="https://maps.google.com/maps?q=Jalaprang%20St.%20No.4,%20Sukaluyu,%20Cibeunying%20Kaler%20District,%20Bandung%20City,%20West%20Java,%20Indonesia%2040123&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div class="contact-grid">
          <div class="contact-info">
            <div class="info-card">
              <span class="info-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path
                    d="M12 21s7-6.2 7-11.2A7 7 0 1 0 5 9.8C5 14.8 12 21 12 21Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.6"
                  />
                  <circle cx="12" cy="9.8" r="2.5" fill="none" stroke="currentColor" stroke-width="1.6" />
                </svg>
              </span>
              <div>
                <h3>Location</h3>
                <p>Jalaprang St. No.4, Sukaluyu, Cibeunying Kaler District, Bandung City, West Java, Indonesia 40123</p>
              </div>
            </div>

            <div class="info-card">
              <span class="info-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path
                    d="M4 6.5h16v11H4z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linejoin="round"
                  />
                  <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" stroke-width="1.6" />
                </svg>
              </span>
              <div>
                <h3>Email</h3>
                <p><a href="mailto:ircys.official@gmail.com">ircys.official@gmail.com</a></p>
              </div>
            </div>

            <div class="info-card">
              <span class="info-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path
                    d="M6.5 4.5h3l1 4-2.2 1.6a12 12 0 0 0 5.6 5.6l1.6-2.2 4 1v3c0 1.1-.9 2-2 2A14 14 0 0 1 4.5 6.5c0-1.1.9-2 2-2Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <div>
                <h3>Call</h3>
                <p>
                  <a
                    href="https://api.whatsapp.com/send?phone=+6282126656161&text=Hello, I'm interested about IRCYS. Please tell me more about it!"
                    >+62 821-2665-6161</a
                  >
                </p>
                <p>
                  <a
                    href="https://api.whatsapp.com/send?phone=+6281573079640&text=Hello, I'm interested about IRCYS. Please tell me more about it!"
                    >+62 815-7307-9640</a
                  >
                </p>
              </div>
            </div>
          </div>

          <form class="contact-form" method="post" action="https://istec.eventbcs.com/send_email">
            <div class="form-row">
              <label>
                <span>Your Name</span>
                <input type="text" name="name" required placeholder="Your Name" />
              </label>
              <label>
                <span>Your Email</span>
                <input type="email" name="email" required placeholder="Your Email" />
              </label>
            </div>
            <label>
              <span>Subject</span>
              <input type="text" name="subject" required placeholder="Subject" />
            </label>
            <label>
              <span>Message</span>
              <textarea name="message" rows="5" required placeholder="Message"></textarea>
            </label>
            <div class="form-actions">
              <button type="submit">Send Message</button>
            </div>
          </form>
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
  background-image: url('/img/bg2.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.canvas {
  padding: 3rem 0 4rem;
  display: grid;
  gap: 1.5rem;
}

.contact-hero {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.section-kicker {
  margin: 0;
  font-size: 0.75rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #7b5a36;
}

.page-title {
  margin: 0;
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-family: 'Erode', 'Times New Roman', serif;
  color: #241c14;
}

.page-copy {
  margin: 0;
  max-width: 70ch;
  font-size: 1.05rem;
  line-height: 1.7;
  color: #4b3f32;
}

.contact-content {
  display: grid;
  gap: 1.5rem;
}

.contact-map {
  border-radius: 28px;
  overflow: hidden;
  border: 1px solid rgba(60, 47, 32, 0.14);
  box-shadow: 0 20px 40px rgba(60, 47, 32, 0.12);
}

.contact-map iframe {
  border: 0;
  width: 100%;
  height: 280px;
  display: block;
}

.contact-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.2fr);
  gap: 1.5rem;
  align-items: start;
}

.contact-info {
  display: grid;
  gap: 1rem;
}

.info-card {
  border-radius: 1.2rem;
  border: 1px solid rgba(60, 47, 32, 0.12);
  padding: 1.1rem 1.2rem;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 18px 36px rgba(35, 36, 30, 0.07);
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.info-card h3 {
  margin: 0 0 0.35rem;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: #23241e;
}

.info-card p {
  margin: 0;
  color: rgba(35, 36, 30, 0.72);
  line-height: 1.5;
}

.info-card p + p {
  margin-top: 0.4rem;
}

.info-card a {
  color: #2f5c86;
  text-decoration: none;
  font-weight: 600;
}

.info-icon {
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 0.9rem;
  background: rgba(146, 117, 84, 0.14);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #23241e;
  flex-shrink: 0;
}

.info-icon svg {
  width: 1.4rem;
  height: 1.4rem;
}

.contact-form {
  border-radius: 1.4rem;
  border: 1px solid rgba(60, 47, 32, 0.12);
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 24px 48px rgba(35, 36, 30, 0.08);
  display: grid;
  gap: 1.1rem;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.contact-form label {
  display: grid;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: rgba(35, 36, 30, 0.82);
  font-weight: 600;
}

.contact-form input,
.contact-form textarea {
  border-radius: 0.9rem;
  border: 1px solid rgba(35, 36, 30, 0.18);
  padding: 0.75rem 1rem;
  font: inherit;
  color: #23241e;
  background: #ffffff;
}

.contact-form textarea {
  min-height: 9rem;
  resize: vertical;
}

.form-actions {
  display: flex;
  justify-content: flex-start;
}

.form-actions button {
  border: none;
  border-radius: 999px;
  padding: 0.85rem 1.6rem;
  font: inherit;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #f7f1e7;
  background: linear-gradient(135deg, #5b4631, #7b5a36);
  cursor: pointer;
  box-shadow: 0 12px 24px rgba(60, 47, 32, 0.2);
}

@media (max-width: 900px) {
  .page {
    padding: 2rem 1.5rem 2rem;
  }

  .canvas {
    padding: 2.4rem 0 3rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .contact-map iframe {
    height: 240px;
  }

  .contact-form,
  .info-card {
    padding: 1.15rem;
  }
}
</style>
