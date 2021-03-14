import React from "react"
import { Link } from "gatsby"
import Layout from "../../public/components/Layout"

function About() {
  return (
    <>
      <Layout>
        <header id="header-inner">
          <div class="container">
            <nav id="main-nav">
              <img src="img/logo.png" alt="logo" id="logo" />
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="current">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/work">Work</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <section id="about-a" class="text-center py-3">
          <div class="container">
            <h2 class="section-title">About Me</h2>
            <div class="bottom-line"></div>
            <p class="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              ratione?
            </p>
            <div class="about-info">
              <img src="img/about.png" alt="about img" class="bio-image" />
              <div class="bio bg-light">
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Sapiente, quos magni, voluptas totam dignissimos eos nihil
                  nobis perferendis reiciendis itaque quae. Ipsam obcaecati
                  animi impedit deserunt tempore hic minus cumque.
                </p>
              </div>
              <div class="award-1">
                <i class="fas fa-award icon-award fa-3x"></i>
                <h3>Award One</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora, animi!
                </p>
              </div>
              <div class="award-2">
                <i class="fas fa-award icon-award fa-3x"></i>
                <h3>Award Two</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora, animi!
                </p>
              </div>
              <div class="award-3">
                <i class="fas fa-award icon-award fa-3x"></i>
                <h3>Award Three</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora, animi!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about-b" class="bg-dark py-3">
          <div class="container">
            <h2 class="section-title">Technical Skills</h2>
            <div class="bottom-line"></div>
            <h4>HTML & CSS :</h4>
            <div class="progress">
              <div style={{ width: "100%" }}></div>
            </div>
            <h4>SASS :</h4>
            <div class="progress">
              <div style={{ width: "90%" }}></div>
            </div>
            <h4>JavaScript :</h4>
            <div class="progress">
              <div style={{ width: "70%" }}></div>
            </div>
            <h4>JQuery :</h4>
            <div class="progress">
              <div style={{ width: "70%" }}></div>
            </div>
            <h4>BootStrap :</h4>
            <div class="progress">
              <div style={{ width: "80%" }}></div>
            </div>
            <h4>Materilize CSS :</h4>
            <div class="progress">
              <div style={{ width: "60%" }}></div>
            </div>
            <h4>Tailwind CSS :</h4>
            <div class="progress">
              <div style={{ width: "50%" }}></div>
            </div>
            <h4>React.js :</h4>
            <div class="progress">
              <div style={{ width: "60%" }}></div>
            </div>
            <h4>Next.js :</h4>
            <div class="progress">
              <div style={{ width: "50%" }}></div>
            </div>
            <h4>Gatsby.js :</h4>
            <div class="progress">
              <div style={{ width: "60%" }}></div>
            </div>
          </div>
        </section>

        <section id="about-c" class="bg-light py-4">
          <div class="container">
            <div class="about-logos">
              <img src="img/about-logos/logo-envato.png" alt="" />
              <img src="img/about-logos/logo-wordpress.png" alt="" />
              <img src="img/about-logos/logo-woocommerce.png" alt="" />
              <img src="img/about-logos/logo-magento.png" alt="" />
            </div>
          </div>
        </section>

        <section id="about-d" class="py-4">
          <div class="container">
            <h2 class="section-title">Testimonials</h2>
            <div class="bottom-line"></div>
            <p class="lead text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </p>
            <div class="testimonials">
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus corporis, non enim perferendis qui laudantium,
                  cum nulla quis voluptates fugit eius quisquam tenetur
                  consectetur suscipit ipsum, officiis itaque dolorum cumque.
                </p>
                <ul>
                  <li>
                    <img src="img/testimonials/person1.jpg" alt="" />
                  </li>
                  <li>Joe Doe, Tunisia</li>
                </ul>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus corporis, non enim perferendis qui laudantium,
                  cum nulla quis voluptates fugit eius quisquam tenetur
                  consectetur suscipit ipsum, officiis itaque dolorum cumque.
                </p>
                <ul>
                  <li>
                    <img src="img/testimonials/person2.jpg" alt="" />
                  </li>
                  <li>Joe Doe, Tunisia</li>
                </ul>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus corporis, non enim perferendis qui laudantium,
                  cum nulla quis voluptates fugit eius quisquam tenetur
                  consectetur suscipit ipsum, officiis itaque dolorum cumque.
                </p>

                <ul>
                  <li>
                    <img src="img/testimonials/person3.jpg" alt="" />
                  </li>
                  <li>Joe Doe, Tunisia</li>
                </ul>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus corporis, non enim perferendis qui laudantium,
                  cum nulla quis voluptates fugit eius quisquam tenetur
                  consectetur suscipit ipsum, officiis itaque dolorum cumque.
                </p>
                <ul>
                  <li>
                    <img src="img/testimonials/person4.jpg" alt="" />
                  </li>
                  <li>Joe Doe, Tunisia</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default About
