<template>
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
</template>

<style scoped>
.footer {
  position: relative;
  z-index: 1;
  margin-top: 2rem;
  padding: 2.5rem 3rem 2rem;
  background: rgba(33, 26, 18, 0.92);
  color: #f7f1e7;
  border-radius: 32px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
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

.footer-brand p {
  margin: 0;
  color: #f7f1e7;
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
  color: #f7f1e7;
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
  .footer {
    width: 100%;
    padding: 2.2rem 2rem 1.8rem;
    border-radius: 24px;
  }
}
</style>
