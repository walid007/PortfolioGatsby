import React from "react"
import { Link } from "gatsby"
import Layout from "../../public/components/Layout"

export default function Home() {
  return (
    <>
      <Layout>
        <header id="header-home">
          <div class="container">
            <nav id="main-nav">
              <img src="img/logo.png" alt="logo" id="logo" />
              <ul>
                <li>
                  <Link to="/" className="current">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/work">Work</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
            <div class="header-content">
              <h1>
                I Am Walid The
                <span
                  class="txt-type"
                  data-wait="3000"
                  data-words='["Web Developer","Mobile Developer","Ai Developer"]'
                ></span>
              </h1>
              <p class="lead">I specialize in web development, mobile</p>
              <Link to="/work" class="btn-light">
                View My Work
              </Link>
            </div>
          </div>
        </header>

        {/* section a */}
        <section id="home-a" class="text-center py-2">
          <div class="container">
            <h2 class="section-title">I Specialize In</h2>
            <div class="bottom-line"></div>
            <p class="lead">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
              voluptatem maxime perspiciatis vitae, sapiente laborum.
            </p>
            <div class="specials">
              <div>
                <i class="fas icon-primary fa-file-alt fa-2x"></i>
                <h1>Lorem ipsum</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam adipisci, laborum dolores voluptas vero repellendus eos
                  aperiam iusto. Voluptates, labore?
                </p>
              </div>
              <div>
                <i class="fas icon-primary fa-desktop fa-2x"></i>
                <h1>Lorem ipsum</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam adipisci, laborum dolores voluptas vero repellendus eos
                  aperiam iusto. Voluptates, labore?
                </p>
              </div>
              <div>
                <i class="fas icon-primary fa-object-ungroup fa-2x"></i>
                <h1>Lorem ipsum</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam adipisci, laborum dolores voluptas vero repellendus eos
                  aperiam iusto. Voluptates, labore?
                </p>
              </div>
              <div>
                <i class="fas icon-primary fa-thumbs-up fa-2x"></i>
                <h1>Lorem ipsum</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam adipisci, laborum dolores voluptas vero repellendus eos
                  aperiam iusto. Voluptates, labore?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* section b */}
        <section id="home-b" class="text-center py-2">
          <div class="stats">
            <div>
              <ul>
                <li>
                  <i class="fas fa-users fa-3x"></i>
                </li>
                <li class="stats-title">Clients</li>
                <li class="stats-number">100</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <i class="fas fa-award fa-3x"></i>
                </li>
                <li class="stats-title">Awards</li>
                <li class="stats-number">3</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <i class="fas fa-hourglass-start fa-3x"></i>
                </li>
                <li class="stats-title">Hours Worked</li>
                <li class="stats-number">3500</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <i class="fas fa-code-branch fa-3x"></i>
                </li>
                <li class="stats-title">Projects Completed</li>
                <li class="stats-number">135</li>
              </ul>
            </div>
          </div>
        </section>

        {/* section c  */}
        <section id="home-c" class="text-center py-2">
          <div class="container">
            <h2 class="section-title">My Creative Process</h2>
            <div class="bottom-line"></div>
            <p class="lead">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
              repellendus magnam quos perferendis cum facere.
            </p>
            <div class="process">
              <div>
                <div class="icon">
                  <i class="fas fa-file-alt fa-4x icon-process my-2"> </i>
                  <span class="icon-step">1</span>
                </div>

                <h3>Discuss The Project</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  incidunt veritatis possimus labore quia hic at exercitationem
                  quaerat. Dolorum, placeat.
                </p>
              </div>
              <div>
                <div class="icon">
                  <i class="fas fa-desktop fa-4x icon-process my-2"> </i>
                  <span class="icon-step">2</span>
                </div>

                <h3>Brainstorming And Concept</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  incidunt veritatis possimus labore quia hic at exercitationem
                  quaerat. Dolorum, placeat.
                </p>
              </div>
              <div>
                <div class="icon">
                  <i class="fas fa-object-ungroup fa-4x icon-process my-2"> </i>
                  <span class="icon-step">3</span>
                </div>
                <h3>UI/UX Planning</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  incidunt veritatis possimus labore quia hic at exercitationem
                  quaerat. Dolorum, placeat.
                </p>
              </div>
              <div>
                <div class="icon">
                  <i class="fas fa-thumbs-up fa-4x icon-process my-2"> </i>
                  <span class="icon-step">4</span>
                </div>
                <h3>Interaction</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  incidunt veritatis possimus labore quia hic at exercitationem
                  quaerat. Dolorum, placeat.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
