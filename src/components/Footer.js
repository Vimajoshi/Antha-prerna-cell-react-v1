import React from "react";

function Footer() {
  return (
    <div>
      <div className="footer-top section">
        <div className="container">
          <div className="footer-brand">
            <a href="#top" className="logo">
              APC
            </a>

            <p className="text">
              Maecenas pellentesque placerat quam, in finibus nisl tincidunt
              sed. Aliquam magna augue, malesuada ut feugiat eget, cursus eget
              felis.
            </p>

            <ul className="social-list">
              <li>
                <a href="#top" className="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#top" className="social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#top" className="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>
            </ul>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Our links</p>
            </li>

            <li>
              <a href="#top" className="footer-link">
                Home
              </a>
            </li>

            <li>
              <a href="#top" className="footer-link">
                About Us
              </a>
            </li>

            <li>
              <a href="#top" className="footer-link">
                Services
              </a>
            </li>

            <li>
              <a href="#top" className="footer-link">
                Team
              </a>
            </li>

            <li>
              <a href="#top" className="footer-link">
                Blog
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Our Services</p>
            </li>

            <li>
              <a href="#top" className="footer-link">
                Strategy & Research
              </a>
            </li>

            <li>
              <a href="#top" className="footer-link">
                Web Development
              </a>
            </li>

            <li>
              <a href="#top" className="footer-link">
                Web Solution
              </a>
            </li>

            <li>
              <a href="#top" className="footer-link">
                Digital Marketing
              </a>
            </li>

            <li>
              <a href="#top" className="footer-link">
                App Design
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Other links</p>
            </li>

            <li>
              <a href="#top" className="footer-link">
                FAQ
              </a>
            </li>

            <li>
              <a href="#top" className="footer-link">
                Portfolio
              </a>
            </li>

            <li>
              <a href="#top" className="footer-link">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="#top" className="footer-link">
                Terms & Conditions
              </a>
            </li>

            <li>
              <a href="#top" className="footer-link">
                Support
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Contact Us</p>
            </li>

            <li className="footer-item">
              <div className="footer-item-icon">
                <ion-icon name="call"></ion-icon>
              </div>

              <div>
                <a href="tel:+2484214313" className="footer-item-link" style={{ color: "white" }}>
                  +248-421-4313
                </a>
                <a href="tel:+2486871365" className="footer-item-link" style={{ color: "white" }}>
                  +248-687-1365
                </a>
              </div>
            </li>

            <li className="footer-item">
              <div className="footer-item-icon">
                <ion-icon name="mail"></ion-icon>
              </div>

              <div>
                <a href="mailto:info@desinic.com" className="footer-item-link" style={{ color: "white" }}>
                  info@desinic.com
                </a>
                <a href="mailto:help@desinic.com" className="footer-item-link" style={{ color: "white" }}>
                  help@desinic.com
                </a>
              </div>
            </li>

            <li className="footer-item">
              <div className="footer-item-icon">
                <ion-icon name="location"></ion-icon>
              </div>

              <address className="footer-item-link">
                Ramanujan college , Kalkaji , New Delhi , Delhi , 110019
              </address>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          &copy; 2022{" "}
          <a href="#top" className="copyright-link">
            APC
          </a>
          . All Right Reserved
        </p>
      </div>
    </div>
  );
}
export default Footer;
