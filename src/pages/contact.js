import React from "react"
import { Link } from "gatsby"
import Layout from "../../public/components/Layout"

function contact() {
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
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/work">Work</Link>
                </li>
                <li>
                  <Link to="/contact" className="current">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <section id="contact-a" class="text-center py-3">
          <div class="container">
            <h2 class="section-title">Contact Me</h2>
            <div class="bottom-line"></div>
            <p class="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
            <form>
              <div class="text-fields">
                <input
                  type="text"
                  class="text-input name-input"
                  placeholder="Name"
                />
                <input
                  type="text"
                  class="text-input subject-input"
                  placeholder="Subject"
                />
                <input
                  type="email"
                  class="text-input email-input"
                  placeholder="Email Address"
                />
                <input
                  type="text"
                  class="text-input phone-input"
                  placeholder="Phone Number"
                />
                <textarea
                  class="text-input message-input"
                  placeholder="Enter Message"
                ></textarea>
              </div>
              <button type="submit" class="btn-dark">
                Submit
              </button>
            </form>
          </div>
        </section>

        <section id="contact-b" class="py-3 bg-dark">
          <div class="container">
            <div class="contact-info">
              <div>
                <i class="fas fa-envelope fa-2x"></i>
                <h3>Email</h3>
                <p>john@something.com</p>
              </div>
              <div>
                <i class="fas fa-phone fa-2x"></i>
                <h3>Phone</h3>
                <p>(216) 44 444 555</p>
              </div>
              <div>
                <i class="fas fa-address-card fa-2x"></i>
                <h3>Address</h3>
                <p>Sabra street, Kairouan</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact-c" class="bg-main py-4">
          <div class="container">
            <h1>Let's Start Your Next Project</h1>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default contact
