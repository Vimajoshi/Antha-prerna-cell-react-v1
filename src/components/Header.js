import React from "react";

function Header() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Antha Prerna Cell</title>

      {/* <!-- 
                - favicon
            --> */}
      <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml" />

      {/* <!-- 
                - custom css link
            --> */}
      <link rel="stylesheet" href="style.css" />

      {/* <!-- 
                - google font link
            --> */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Source+Sans+Pro:wght@600;700&display=swap"
        rel="stylesheet"
      ></link>

      <a href="#top">
        <h1 className="logo">Antha Prerna Cell</h1>
      </a>

      <nav className="navbar" data-navbar>
        <div className="navbar-top">
          <a href="#top" className="logo">
            Antha Prerna Cell
          </a>

          <button
            className="nav-close-btn"
            aria-label="Close Menu"
            data-nav-close-btn
          >
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>

        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="#notice" className="navbar-link" data-navbar-link>
              Notice
            </a>
          </li>

          <li className="navbar-item">
            <a href="#about" className="navbar-link" data-navbar-link>
              About
            </a>
          </li>

          <li className="navbar-item">
            <a href="#provide" className="navbar-link" data-navbar-link>
              What We Provide
            </a>
          </li>

          <li className="navbar-item">
            <a href="#blog" className="navbar-link" data-navbar-link>
              Blog
            </a>
          </li>

          <li className="navbar-item">
            <a href="#bottom" className="navbar-link" data-navbar-link>
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
