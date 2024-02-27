import React from "react";
import "../Components/home.scss";
import img from "../assets/img.png";

const Home = () => {
  return (
    <div>
      <header>
        <div className="nav">
          <div className="nav-left">
            <input type="search" name="search" />
          </div>
          <div className="nav-right">
            <li>
              <ul>Categories</ul>
              <ul>Website Builders</ul>
              <ul>Today's deals</ul>
            </li>
          </div>
        </div>
      </header>

      <div className="page-1">
        <h1>Best Website builders in the US</h1>
        <div className="info-bar">
          <div className="info">
            <p>Last Updated - February 22, 2020 Advertising Disclosure</p>
          </div>
        </div>

        <div className="page-nav">
          <li>
            <ul>Tools</ul>
            <ul>AWS Builder</ul>
            <ul>Start Build</ul>
            <ul>Build Supplies</ul>
            <ul>Tooling</ul>
            <ul>BlueHosting</ul>
          </li>
        </div>

        <div className="direct-pg">
          <li>
            <ul>Home</ul>
            <ul style={{ fontWeight: 700, fontSize: "18px" }}></ul>
            <ul>Hosting for all</ul>
            <ul style={{ fontWeight: 700, fontSize: "18px" }}></ul>
            <ul>Hosting6</ul>
            <ul style={{ fontWeight: 700, fontSize: "18px" }}></ul>
            <ul>Hosting5</ul>
          </li>
        </div>

        {/* Repeat the following block for each main-bar section */}
        <div className="main-bar">
          <img src={img} alt="" />
          <div className="content" style={{ padding: "30px" }}>
            <p>
              <span style={{ fontSize: "16px", fontWeight: 800 }}>
                WixPro 72-Inch Responsive Website Builder{" "}
              </span>{" "}
              - Comprehensive <br /> Digital Platform Creation Tool, Streamlined
              Design Interface for <br /> Professional Websites and Online
              Stores (Black/Blue)
            </p>
            <h3 style={{ padding: "10px", position: "relative", right: "1%" }}>
              Main Highlights
            </h3>
            <p style={{ position: "relative", left: "3%" }}>
              [What You Get]: Receive the WixPro website builder suite, <br />
              access to premium design templates, an extensive library of <br />{" "}
              widgets and apps, and detailed step-by-step guides.
            </p>
            <button>Show more </button>
          </div>
          <div className="rating">
            <div className="rate">
              <h1 style={{ fontSize: "2.8rem", fontWeight: 400 }}>9.8</h1>
              <p>Excellent</p>
            </div>
            <button>View</button>
          </div>
        </div>
        {/* End of main-bar section */}
        <div className="main-bar">
          <img src={img} alt="" />
          <div className="content" style={{ padding: "30px" }}>
            <p>
              <span style={{ fontSize: "16px", fontWeight: "800" }}>
                SiteCraft 68-Inch Ultimate Web Design Studio
              </span>
              Advanced Site <br /> Creation Toolkit, Intuitive Drag-and-Drop
              Editor for Dynamic <br />
              Websites and E-commerce Platforms (Green/White)
            </p>
            <h3 style={{ padding: "10px", position: "relative", right: "1%" }}>
              Main Highlights
            </h3>
            <p style={{ position: "relative", left: "3%" }}>
              [What You Get]: Gain access to the SiteCraft design studio,
              <br />
              featuring a robust selection of design elements, SEO <br />
              optimization tools, and e-commerce integrations.
            </p>
            <button>Show more </button>
          </div>
          <div className="rating">
            <div className="rate">
              <h1 style={{ fontSize: "2.8rem", fontWeight: "400" }}>9.5</h1>
              <p>Excellent</p>
            </div>
            <button>View</button>
          </div>
        </div>

        <div className="main-bar">
          <img src={img} alt="" />
          <div className="content" style={{ padding: "30px" }}>
            <p>
              <span style={{ fontSize: "16px", fontWeight: "800" }}>
                WixPro 72-Inch Responsive Website Builder
              </span>{" "}
              - Comprehensive <br />
              Digital Platform Creation Tool, Streamlined Design Interface for{" "}
              <br />
              Professional Websites and Online Stores (Black/Blue)
            </p>
            <h3 style={{ padding: "10px", position: "relative", right: "1%" }}>
              Main Highlights
            </h3>
            <p style={{ position: "relative", left: "3%" }}>
              [What You Get]: Receive the WixPro website builder suite, <br />
              access to premium design templates, an extensive library of <br />{" "}
              widgets and apps, and detailed step-by-step guides.
            </p>
            <button>Show more </button>
          </div>
          <div className="rating">
            <div className="rate">
              <h1 style={{ fontSize: "2.8rem", fontWeight: "400" }}>9.3</h1>
              <p>Excellent</p>
            </div>
            <button>View</button>
          </div>
        </div>

        <div className="main">
          <div className="main-bar-info main-bar">
            <img src={img} alt="" />
            <div className="content" style={{ padding: "30px" }}>
              <p>
                <span style={{ fontSize: "16px", fontWeight: "800" }}>
                  CDK Resposive Builder:
                </span>
                An extensive library of widgets and apps,
                <br /> and detailed step-by-step guides
              </p>
              <div className="discount"></div>
              <h3
                style={{ padding: "10px", position: "relative", right: "1%" }}
              >
                Main Highlights
              </h3>
              <div className="response">
                <div className="line">
                  <h5>9.9</h5> Building Responsive
                </div>
                <div className="line">
                  <h5>8.9</h5> Cool
                </div>
                <div className="line">
                  <h5>8.9</h5> Docs
                </div>
              </div>
              <p style={{ marginRight: "20px", marginTop: "10px" }}>
                Why we love it
              </p>
              <ul style={{ marginLeft: "40px", marginBottom: "10px" }}>
                <li>Documentation</li>
                <li>Easy to Use</li>
                <li>Out of Box</li>
              </ul>
              <button>Show more </button>
            </div>
            <div className="rating">
              <div className="rate">
                <h1 style={{ fontSize: "2.8rem", fontWeight: "400" }}>9.1</h1>
                <p>Excellent</p>
              </div>
              <button>View</button>
            </div>
          </div>
        </div>
        <div
          className="deals-main"
          style={{ position: "relative", top: "50px" }}
        >
         <h1 className="deals-heading"
          >
            Related deals you might like for
          </h1>
          <div className="cards">
            <div className="card">
              <img
                align="center"
                height="200px"
                width="300px"
                src={img}
                alt=""
              />
              <div className="detail">
                <div className="detail-card">20% Off</div>
                <div className="detail-card">Limited Time</div>
              </div>
              <h5 align="center">Webbuilder 1</h5>
              <p style={{ color: "#626E79" }}>
                Computer Modern clasic with wix <br />
                support
              </p>
              <p style={{ fontSize: "15px", color: "#626E79" }}>
                $39.96 $49.96 (20% Off)
              </p>
              <button>View Deal</button>
            </div>
            <div className="card">
              <img
                align="center"
                height="200px"
                width="300px"
                src={img}
                alt=""
              />
              <div className="detail">
                <div className="detail-card">20% Off</div>
                <div className="detail-card">Limited Time</div>
              </div>
              <h5 align="center">Webbuilder 1</h5>
              <p style={{ color: "#626E79" }}>
                Computer Modern clasic with wix <br />
                support
              </p>
              <p style={{ fontSize: "15px", color: "#626E79" }}>
                $39.96 $49.96 (20% Off)
              </p>
              <button>View Deal</button>
            </div>
            <div className="card">
              <img
                align="center"
                height="200px"
                width="300px"
                src={img}
                alt=""
              />
              <div className="detail">
                <div className="detail-card">20% Off</div>
                <div className="detail-card">Limited Time</div>
              </div>
              <h5 align="center">Webbuilder 1</h5>
              <p style={{ color: "#626E79" }}>
                Computer Modern clasic with wix <br />
                support
              </p>
              <p style={{ fontSize: "15px", color: "#626E79" }}>
                $39.96 $49.96 (20% Off)
              </p>
              <button>View Deal</button>
            </div>
          </div>
          <div
            className="sign-up"
            style={{
              marginBottom: "80px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h1 style={{ fontSize: "2.4rem" }}>
              Sign up and get exclusive <br /> special deals
            </h1>
            <button>Sign Up</button>
          </div>
        </div>
      </div>

      <div className="contact">
        <div className="categories">
          <h3>CATEGORIES</h3>
          <ul
            style={{
              fontFamily: "Inter, sans-serif",
              marginTop: "20px",
              fontWeight: 200,
            }}
          >
            <li>Web Builder</li>
            <li>Hosting</li>
            <li>Data Center</li>
            <li>Robotic-Automation</li>
          </ul>
        </div>

        <div className="contact-section">
          <h3>CONTACT</h3>
          <ul
            style={{
              fontFamily: "Inter, sans-serif",
              marginTop: "20px",
              fontWeight: 200,
            }}
          >
            <li>Contact</li>
            <li>Privacy-Policy</li>
            <li>Terms of Service</li>
            <li>Categories</li>
            <li>About</li>
          </ul>
        </div>

        <div className="dropdown" align="center">
          <label htmlFor="cars">United States</label>
          <select name="cars" id="cars">
            <option value=""></option>
            <option value="volvo">Subject 1</option>
            <option value="saab">Subject 2</option>
            <option value="mercedes">Subject 3</option>
            <option value="audi">Subject 4</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Home;
