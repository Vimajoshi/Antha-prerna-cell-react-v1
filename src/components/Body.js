import React from "react";
import { IonIcon } from "react-ion-icon";

function Body() {
  return (
    <div>
      {/* 
    - #HEADER
  */}
      <header className="header" data-header="">
        <div className="container">
          <div className="overlay" data-overlay="" />
          <a href="#top">
            <h1 className="logo">Antha Prerna Cell</h1>
          </a>
          <nav className="navbar" data-navbar="">
            <div className="navbar-top">
              <a href="#top" className="logo">
                Antha Prerna Cell
              </a>
              <button
                className="nav-close-btn"
                aria-label="Close Menu"
                data-nav-close-btn=""
              >
                <ion-icon name="close-outline" />
              </button>
            </div>
            <ul className="navbar-list">
              <li className="navbar-item">
                <a href="#notice" className="navbar-link" data-navbar-link="">
                  Notice
                </a>
              </li>
              <li className="navbar-item">
                <a href="#about" className="navbar-link" data-navbar-link="">
                  About
                </a>
              </li>
              <li className="navbar-item">
                <a
                  href="#provide"
                  className="navbar-link"
                  data-navbar-link=""
                >
                  What We Provide
                </a>
              </li>
              <li className="navbar-item">
                <a href="#blog" className="navbar-link" data-navbar-link="">
                  Blog
                </a>
              </li>
              <li className="navbar-item">
                <a href="#bottom" className="navbar-link" data-navbar-link="">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          <a href="./sign-up-login-form/dist/index.html" className="btn">
            <ion-icon name="chevron-forward-outline" aria-hidden="true" />
            <span>Log In</span>
          </a>
          <button
            className="nav-open-btn"
            aria-label="Open Menu"
            data-nav-open-btn=""
          >
            <ion-icon name="menu-outline" />
          </button>
        </div>
      </header>
      <main>
        <article>
          {/* 
  - #HERO
*/}
          <section className="hero" id="home">
            <div className="container">
              <div className="hero-content">
                <h2 className="h2 hero-title">
                  Welcome To Antha Prerna Cell
                </h2>
                <p className="hero-text">
                  Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
                  Pellentesque vitae ante at elit fringilla ac at purus.
                </p>
                <a href="./sign-up-login-form/dist/index.html">
                  <button className="btn">Register</button>
                </a>
              </div>
              <figure className="hero-banner">
                <img
                  src="./images/hero-banner.png"
                  width={694}
                  height={529}
                  loading="lazy"
                  alt="hero-banner"
                  className="w-100 banner-animation"
                />
              </figure>
            </div>
          </section>
          <section id="notice">
            <div className="main-container" style={{ padding: "60px 0" }}>
              <div className="container">
                <div className="row">
                  <div
                    className="announcements"
                    style={{
                      padding: "3rem",
                      overflow: "scroll",
                      height: 300,
                    }}
                  >
                    <h3>ANNOUNCEMENTS</h3>
                    <ul>
                      <li style={{ listStyleType: "none" }}>
                        <ul>
                          <li>
                            <a
                              href="https://rcmoocs.in/Brochures/ARM_18.pdf"
                              target="_blank" rel="noopener noreferrer"
                            >
                              Online two-week Interdisciplinary Refresher
                              Course in “Advanced Research Methodology”: 22
                              Aug - 5 Sep 2022{" "}
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://ramanujancollege.ac.in/wp-content/uploads/2022/06/NAAC-Certificate-Cycle-II.pdf"
                              target="_blank" rel="noopener noreferrer"
                            >
                              Ramanujan College is accredited with Grade A++
                              with CGPA 3.71 by NAAC in Cycle II{" "}
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://rcmoocs.in/Brochures/Research_Design_and_Method_august_2022.pdf"
                              target="_blank" rel="noopener noreferrer"
                            >
                              Online one-week FDP on “Research design and
                              Method”: 30 Jul-5 Aug 2022{" "}
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://rcmoocs.in/Brochures/Acad_Admin_August_2022.pdf"
                              target="_blank" rel="noopener noreferrer"
                            >
                              Online one-week FDP on “Academic
                              Administration”: 6-12 Aug 2022{" "}
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://rcmoocs.in/Brochures/Education_4.0_AUG_2022.pdf"
                              target="_blank" rel="noopener noreferrer"
                            >
                              Online one-week FDP on “Education 4.0”: 13-19
                              Aug 2022{" "}
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <p>
                      <a href="https://ramanujancollege.ac.in/all-announcement/">
                        Read More
                      </a>
                    </p>
                  </div>
                  <div
                    className="notice"
                    style={{
                      padding: "3rem",
                      overflow: "scroll",
                      height: 300,
                    }}
                  >
                    <h3>NOTICE</h3>
                    <ul>
                      <li style={{ listStyleType: "none" }}>
                        <ul>
                          <li>
                            <a
                              href="https://drive.google.com/file/d/17uj8PsrGRSzCf1PyCRTmdI9eSganpYnV/view?usp=sharing"
                              target="_blank" rel="noopener noreferrer"
                            >
                              Exhibition entitled ‘Partition horrors: A
                              Remembrance Day’: 12-19 August 2022
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://ramanujancollege.ac.in/celebration-of-the-75th-independence-day-under-the-aegis-of-azadi-ka-amrit-mohotsav-an-initiative-of-government-of-india/"
                              target="_blank" rel="noopener noreferrer"
                            >
                              Celebration of the 75th Independence Day under
                              the aegis of ‘Azadi ka Amrit Mohotsav,’ an
                              initiative of Government of India
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://drive.google.com/file/d/1bNJRL0LUBm64koJaoF0lYjznFHe4DWRx/view?usp=sharing"
                              target="_blank" rel="noopener noreferrer"
                            >
                              NCWEB Notice for the Degree Distribution of
                              Batch 2016-19 and Batch 2017-20 (B.A. and B.
                              Com)
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://drive.google.com/file/d/1GQye2ksJt_r-JpRBZ4ieGknwo9t8xEUK/view?usp=sharing"
                              target="_blank" rel="noopener noreferrer"
                            >
                              Notice for extension to fill the online
                              application form for the appointment of
                              permanent teaching staff
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://drive.google.com/file/d/1p4_0GYDn3geRiJHP9xk4gT2QPwwThBgh/view?usp=sharing"
                              target="_blank" rel="noopener noreferrer"
                            >
                              Flag Hoisting Ceremony on 12th August 2022 at 1
                              PM
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <p>
                      <a href="https://ramanujancollege.ac.in/all-notice/">
                        Read More
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* 
  - #ABOUT
*/}
          <section className="section about" id="about">
            <div className="container">
              <figure className="about-banner">
                <img
                  src="./images/about-banner.png"
                  width={700}
                  height={532}
                  loading="lazy"
                  alt="about banner"
                  className="w-100 banner-animation"
                />
              </figure>
              <div className="about-content">
                <h2 className="h2 section-title underline">
                  Why Antha Prerna Cell?
                </h2>
                <p className="about-text">
                  In dictum aliquam turpis lacinia iaculis. Fusce vel
                  malesuada magna. Nulla vel maximus risus. Donec volutpat
                  metus lacinia risus accumsan, ac bibendum libero efficitur.
                  Pellentesque nec nisi sit amet magna tempus hendrerit ut a
                  odio.
                </p>
                <p className="about-text">
                  Praesent rhoncus commodo tortor, id pulvinar nisl blandit
                  at. Nulla facilisi. Quisque turpis ante, vehicula
                  condimentum arcu.
                </p>
                <ul className="stats-list">
                  <li className="stats-card">
                    <p className="h3 stats-title">9875</p>
                    <p className="stats-text">Satisfied Clients</p>
                  </li>
                  <li className="stats-card">
                    <p className="h3 stats-title">7894</p>
                    <p className="stats-text">Project Lunched</p>
                  </li>
                  <li className="stats-card">
                    <p className="h3 stats-title">65</p>
                    <p className="stats-text">Years Completed</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* 
  - #SERVICE
*/}
          <section className="section service" id="provide">
            <div className="container">
              <h2 className="h2 section-title underline">What We Provide</h2>
              <ul className="service-list">
                <li>
                  <div className="service-card">
                    <div className="card-icon">
                      <IonIcon name="telescope-outline" />
                    </div>
                    <h3 className="h3 title">Learn Marketing</h3>
                    <p className="text">
                      become good in marketing, you will learn all marketing
                      under the gauidence of teacher's and senior's, you will
                      learn marketing. how you can attract anyone. so enhence
                      your skills with APC
                    </p>
                    <button className="card-btn" aria-label="Show More">
                      <IonIcon name="chevron-forward-outline" />
                    </button>
                  </div>
                </li>
                <li>
                  <div className="service-card">
                    <div className="card-icon">
                      <IonIcon name="desktop-outline" />
                    </div>
                    <h3 className="h3 title">Learn Web Development</h3>
                    <p className="text">
                      As a web designer, you will learn all about web
                      Development under the gauidence of teacher's and
                      senior's, you will learn web development with projects.
                      so enhence your skills with APC.
                    </p>
                    <button className="card-btn" aria-label="Show More">
                      <ion-icon name="chevron-forward-outline" />
                    </button>
                  </div>
                </li>
                <li>
                  <div className="service-card">
                    <div className="card-icon">
                      <ion-icon name="globe-outline" />
                    </div>
                    <h3 className="h3 title">Learn Content Writing</h3>
                    <p className="text">
                      learn content writing with practice, you will learn all
                      about content writing under the gauidence of teacher's
                      and senior's, you will learn content writing by working.
                      so enhence your skills with APC
                    </p>
                    <button className="card-btn" aria-label="Show More">
                      <ion-icon name="chevron-forward-outline" />
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          {/* 
  - #BLOG
*/}
          <section className="section blog" id="blog">
            <div className="container">
              <h2 className="h2 section-title underline">
                Our Blog &amp; News
              </h2>
              <ul className="blog-list">
                <li>
                  <div className="blog-card">
                    <figure className="banner">
                      <a href="#top">
                        <img
                          src="./images/blog-1.jpg"
                          width={750}
                          height={350}
                          loading="lazy"
                          alt="Vestibulum massa arcu, consectetu pellentesque scelerisque."
                          className="img-cover"
                        />
                      </a>
                    </figure>
                    <div className="content">
                      <h3 className="h3 title">
                        <a href="#top">
                          Vestibulum massa arcu, consectetu pellentesque
                          scelerisque.
                        </a>
                      </h3>
                      <p className="text" style={{ color: "black" }}>
                        Sed quis sagittis velit. Aliquam velit eros, bibendum
                        ut massa et, consequat laoreet erat nam ac imperdiet.
                      </p>
                      <div className="meta">
                        <div className="publish-date">
                          <ion-icon name="time-outline" />
                          <time dateTime="2022-03-07">7 March, 2022</time>
                        </div>
                        <button className="comment" aria-label="Comment">
                          <ion-icon name="chatbubble-outline" />
                          <data value={15}>15</data>
                        </button>
                        <button className="share" aria-label="Share">
                          <ion-icon name="share-social-outline" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="blog-card">
                    <figure className="banner">
                      <a href="#top">
                        <img
                          src="./images/blog-2.jpg"
                          width={750}
                          height={350}
                          loading="lazy"
                          alt="Quisque egestas iaculis felis eget placerat ut pulvinar mi."
                          className="img-cover"
                        />
                      </a>
                    </figure>
                    <div className="content">
                      <h3 className="h3 title">
                        <a href="#top">
                          Quisque egestas iaculis felis eget placerat ut
                          pulvinar mi.
                        </a>
                      </h3>
                      <p className="text" style={{ color: "black" }}>
                        Sed quis sagittis velit. Aliquam velit eros, bibendum
                        ut massa et, consequat laoreet erat nam ac imperdiet.
                      </p>
                      <div className="meta">
                        <div className="publish-date">
                          <ion-icon name="time-outline" />
                          <time dateTime="2022-03-07">7 March, 2022</time>
                        </div>
                        <button className="comment" aria-label="Comment">
                          <ion-icon name="chatbubble-outline" />
                          <data value={15}>15</data>
                        </button>
                        <button className="share" aria-label="Share">
                          <ion-icon name="share-social-outline" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="blog-card">
                    <figure className="banner">
                      <a href="#top">
                        <img
                          src="./images/blog-3.jpg"
                          width={750}
                          height={350}
                          loading="lazy"
                          alt="Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere."
                          className="img-cover"
                        />
                      </a>
                    </figure>
                    <div className="content">
                      <h3 className="h3 title">
                        <a href="#top">
                          Fusce sem ligula, imperdiet sed nisi sit amet,
                          euismod posuere.
                        </a>
                      </h3>
                      <p className="text" style={{ color: "black" }}>
                        Sed quis sagittis velit. Aliquam velit eros, bibendum
                        ut massa et, consequat laoreet erat nam ac imperdiet.
                      </p>
                      <div className="meta">
                        <div className="publish-date">
                          <ion-icon name="time-outline" />
                          <time dateTime="2022-03-07">7 March, 2022</time>
                        </div>
                        <button className="comment" aria-label="Comment">
                          <ion-icon name="chatbubble-outline" />
                          <data value={15}>15</data>
                        </button>
                        <button className="share" aria-label="Share">
                          <ion-icon name="share-social-outline" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="blog-card">
                    <figure className="banner">
                      <a href="#top">
                        <img
                          src="./images/blog-4.jpg"
                          width={750}
                          height={350}
                          loading="lazy"
                          alt="Donec feugiat mollis nisi in dignissim. Morbi sollicitudin quis."
                          className="img-cover"
                        />
                      </a>
                    </figure>
                    <div className="content">
                      <h3 className="h3 title">
                        <a href="#top">
                          Donec feugiat mollis nisi in dignissim. Morbi
                          sollicitudin quis.
                        </a>
                      </h3>
                      <p className="text" style={{ color: "black" }}>
                        Sed quis sagittis velit. Aliquam velit eros, bibendum
                        ut massa et, consequat laoreet erat nam ac imperdiet.
                      </p>
                      <div className="meta">
                        <div className="publish-date">
                          <ion-icon name="time-outline" />
                          <time dateTime="2022-03-07">7 March, 2022</time>
                        </div>
                        <button className="comment" aria-label="Comment">
                          <ion-icon name="chatbubble-outline" />
                          <data value={15}>15</data>
                        </button>
                        <button className="share" aria-label="Share">
                          <ion-icon name="share-social-outline" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
export default Body;
