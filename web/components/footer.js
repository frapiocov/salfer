class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <!-- ======= Cliens Section ======= -->
      <section id="cliens" class="cliens section-bg">
          <div class="container">
              <div class="row" data-aos="zoom-in">
                  <div
                      class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
                  >
                      <img
                          src="assets/img/fornitori/Ferraro.jpg"
                          class="img-fluid"
                          alt=""
                      />
                  </div>

                  <div
                      class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
                  >
                      <img
                          src="assets/img/fornitori/sidel.png"
                          class="img-fluid"
                          alt=""
                      />
                  </div>

                  <div
                      class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
                  >
                      <img
                          src="assets/img/fornitori/simar.jpg"
                          class="img-fluid"
                          alt=""
                      />
                  </div>

                  <div
                      class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
                  >
                      <img
                          src="assets/img/fornitori/logo_flesya.jpg"
                          class="img-fluid"
                          alt=""
                      />
                  </div>

                  <div
                      class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
                  >
                      <img
                          src="assets/img/fornitori/kopen.png"
                          class="img-fluid"
                          alt=""
                      />
                  </div>

                  <div
                      class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
                  >
                      <img
                          src="assets/img/fornitori/tenditalia.png"
                          class="img-fluid"
                          alt=""
                      />
                  </div>
              </div>
          </div>
      </section>
      <!-- End Cliens Section -->

      <!-- ======= Footer ======= -->
      <footer id="footer">
          <div class="footer-top">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-3 col-md-6 footer-links">
                          <img
                              width="160px"
                              height="160px"
                              style="border-radius: 8px"
                              src="assets/img/salfer.jpg"
                              alt="Salfer Logo"
                              class="img-fluid"
                          />
                      </div>

                      <div class="col-lg-3 col-md-6 footer-contact">
                          <h3>Salfer Infissi</h3>
                          <p>
                              Di Della Polla Raffaele <br />
                              Via Roma <br />
                              Lioni, AV 83047<br />
                              Italia <br /><br />
                              <strong>Telefono e Fax:</strong> +39 347 772
                              0979 | 0827 42241<br />
                              <strong>Email:</strong>
                              salfer.info@gmail.com<br />
                              
                  <a href="" data-bs-toggle="modal"
                  data-bs-target="#infoModal">
                  Privacy & Cookie Policy | Informazioni legali
                  </a>

                          </p>
                      </div>

                      <div class="col-lg-3 col-md-6 footer-links">
                          <h4>Prodotti pi&ugrave; visti</h4>
                          <ul>
                              <li>
                                  <i class="bx bx-chevron-right"></i>
                                  <a href="finestre.html">Finestre</a>
                              </li>
                              <li>
                                  <i class="bx bx-chevron-right"></i>
                                  <a href="porte.html">Porte interne</a>
                              </li>
                              <li>
                                  <i class="bx bx-chevron-right"></i>
                                  <a href="portoni.html">Portoni</a>
                              </li>
                              <li>
                                  <i class="bx bx-chevron-right"></i>
                                  <a href="serrande.html">Sezionali & Serrande</a>
                              </li>
                              <li>
                                  <i class="bx bx-chevron-right"></i>
                                  <a href="tende.html">Tende</a>
                              </li>
                          </ul>
                      </div>

                      <div class="col-lg-3 col-md-6 footer-links">
                          <h4>I nostri Social Network</h4>
                          <p>
                              Contattaci o seguici per le prossime
                              novit&agrave;
                          </p>
                          <div class="social-links mt-3">
                              <a
                                  href="https://it-it.facebook.com/SalferInfissiLioni/"
                                  target="_blank"
                                  class="facebook"
                                  ><i class="bx bxl-facebook"></i
                              ></a>
                              <a
                                  href="https://www.instagram.com/salfer_infissi/"
                                  target="_blank"
                                  class="instagram"
                                  ><i class="bx bxl-instagram"></i
                              ></a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="container footer-bottom clearfix">
              <div class="copyright">
                  &copy; Copyright 2021
                  <strong><span>Salfer Infissi</span></strong
                  >. Tutti i diritti riservati.

              </div>
              <div class="credits">
                  Made By
                  <a href="https://frapiocov.github.io/" target="_blank"
                      >pio</a
                  >
              </div>
          </div>
      </footer>
      <!-- End Footer -->
      `;
    }
  }
  
  customElements.define('footer-component', Footer);