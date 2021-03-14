import React from "react"
import { Link } from "gatsby"
import Layout from "../../public/components/Layout"

function work() {
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
                  <Link to="/work" class="current">
                    Work
                  </Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* <!-- section a work --> */}
        <section id="work-a" class="text-center py-3">
          <div class="container">
            <h2 class="section-title">My Work</h2>
            <div class="bottom-line"></div>
            <p class="lead">Lorem ipsum dolor sit amet consectetur.</p>
            <div class="items">
              {/* <!-- item1 --> */}
              <div class="item">
                <div class="item-img">
                  <img src="img/items/item1.png" alt="" />
                </div>
                <div class="item-text">
                  <div class="item-text-wrapp">
                    <p class="item-text-category">lorem</p>
                    <h2 class="item-text-title">Lorem, ipsum.</h2>
                  </div>
                </div>
              </div>
              {/* <!-- item2 --> */}
              <div class="item">
                <div class="item-img">
                  <img src="img/items/item2.png" alt="" />
                </div>
                <div class="item-text">
                  <div class="item-text-wrapp">
                    <p class="item-text-category">lorem</p>
                    <h2 class="item-text-title">Lorem, ipsum.</h2>
                  </div>
                </div>
              </div>
              {/* <!-- item3 --> */}
              <div class="item">
                <div class="item-img">
                  <img src="img/items/item3.png" alt="" />
                </div>
                <div class="item-text">
                  <div class="item-text-wrapp">
                    <p class="item-text-category">lorem</p>
                    <h2 class="item-text-title">Lorem, ipsum.</h2>
                  </div>
                </div>
              </div>
              {/* <!-- item4 --> */}
              <div class="item">
                <div class="item-img">
                  <img src="img/items/item4.png" alt="" />
                </div>
                <div class="item-text">
                  <div class="item-text-wrapp">
                    <p class="item-text-category">lorem</p>
                    <h2 class="item-text-title">Lorem, ipsum.</h2>
                  </div>
                </div>
              </div>
              {/* <!-- item5 --> */}
              <div class="item">
                <div class="item-img">
                  <img src="img/items/item5.png" alt="" />
                </div>
                <div class="item-text">
                  <div class="item-text-wrapp">
                    <p class="item-text-category">lorem</p>
                    <h2 class="item-text-title">Lorem, ipsum.</h2>
                  </div>
                </div>
              </div>
              {/* <!-- item6--> */}
              <div class="item">
                <div class="item-img">
                  <img src="img/items/item6.png" alt="" />
                </div>
                <div class="item-text">
                  <div class="item-text-wrapp">
                    <p class="item-text-category">lorem</p>
                    <h2 class="item-text-title">Lorem, ipsum.</h2>
                  </div>
                </div>
              </div>
              {/* <!-- item7 --> */}
              <div class="item">
                <div class="item-img">
                  <img src="img/items/item7.png" alt="" />
                </div>
                <div class="item-text">
                  <div class="item-text-wrapp">
                    <p class="item-text-category">lorem</p>
                    <h2 class="item-text-title">Lorem, ipsum.</h2>
                  </div>
                </div>
              </div>
              {/* <!-- item8 --> */}
              <div class="item">
                <div class="item-img">
                  <img src="img/items/item8.png" alt="" />
                </div>
                <div class="item-text">
                  <div class="item-text-wrapp">
                    <p class="item-text-category">lorem</p>
                    <h2 class="item-text-title">Lorem, ipsum.</h2>
                  </div>
                </div>
              </div>
              {/* <!-- item9 --> */}
              <div class="item">
                <div class="item-img">
                  <img src="img/items/item9.png" alt="" />
                </div>
                <div class="item-text">
                  <div class="item-text-wrapp">
                    <p class="item-text-category">lorem</p>
                    <h2 class="item-text-title">Lorem, ipsum.</h2>
                  </div>
                </div>
              </div>
              {/* <!-- end --> */}
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default work
