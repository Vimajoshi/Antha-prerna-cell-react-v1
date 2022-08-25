import React from "react";

function Header() {
  return (
    <div>
      <header class="header" data-header>
        <div class="container">

          <div class="overlay" data-overlay></div>

          <a href="#">
            <h1 class="logo">Antha Prerna Cell</h1>
          </a>

          <nav class="navbar" data-navbar>

            <div class="navbar-top">
              <a href="#" class="logo">Antha Prerna Cell</a>

              <button class="nav-close-btn" aria-label="Close Menu" data-nav-close-btn>
                <ion-icon name="close-outline"></ion-icon>
              </button>
            </div>

            <ul class="navbar-list">



              <li class="navbar-item">
                <a href="#notice" class="navbar-link" data-navbar-link>Notice</a>
              </li>

              <li class="navbar-item">
                <a href="#about" class="navbar-link" data-navbar-link>About</a>
              </li>

              <li class="navbar-item">
                <a href="#provide" class="navbar-link" data-navbar-link>What We Provide</a>
              </li>

              <li class="navbar-item">
                <a href="#blog" class="navbar-link" data-navbar-link>Blog</a>
              </li>

              <li class="navbar-item">
                <a href="#bottom" class="navbar-link" data-navbar-link>Contact Us</a>
              </li>

            </ul>

          </nav>

          <a href="./sign-up-login-form/dist/index.html" class="btn">
            <ion-icon name="chevron-forward-outline" aria-hidden="true"></ion-icon>

            <span>Log In</span>
          </a>

          <button class="nav-open-btn" aria-label="Open Menu" data-nav-open-btn>
            <ion-icon name="menu-outline"></ion-icon>
          </button>

        </div>
      </header>
    </div>
  );
}
export default Header;
