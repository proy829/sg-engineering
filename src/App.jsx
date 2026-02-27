
import "./App.css";
import emailjs from "emailjs-com";
import { useEffect } from "react";
/* ===== PRODUCT IMAGES (exact filenames) ===== */
import snapGauge from "./images/DE-snap-guage.jpg";
import gaugeBlockAccessories from "./images/guage-block-accessories.jpg";
import gaugeBlockSet from "./images/guage-block-set.jpg";
import limitGauge from "./images/limit-guage.jpg";
import plainMandrel from "./images/plain-mandrel.jpg";
import plugRingGauge from "./images/plug-and-ring-gauges.jpg";
import ringGauge from "./images/ring-guage.jpg";
import taperMandrel from "./images/taper-mandrel.jpg";
import taperPlugRing from "./images/taper-plug-and Tapper-ring.jpg";

function App() {
  const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "service_I96aI9p",     // 👈 your service ID
    "template_8td6g86",    // 👈 your template ID
    e.target,
    "HsUZdKEaBkYKwCW34"       // 👈 your public key
  )
  .then(() => {
    const msg = document.getElementById("successMsg");
    msg.classList.add("show");
    e.target.reset();

    setTimeout(() => {
      msg.classList.remove("show");
    }, 4000);
  })
  .catch((err) => {
    alert("Failed to send message");
    console.error(err);
  });
};

    useEffect(() => {
    const form = document.querySelector(".contact-form");
    const msg = document.getElementById("successMsg");

    if (!form || !msg) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      msg.classList.add("show");

      setTimeout(() => {
        msg.classList.remove("show");
      }, 4000);

      form.reset();
    });
  }, []);
  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <h1>S. G. Engineering</h1>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#facilities">Facilities</a></li>
          <li><a href="#clients">Clients</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="home" className="hero fade-in">
        <h2>Precision Gauging Solutions</h2>
        <p>
          Manufacturing high-accuracy gauges and calibration equipment trusted
          by leading industries across India.
        </p>
        <a href="#contact" className="hero-btn">Contact Us</a>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-bg fade-in">
        <div className="container card-section">
          <h2>About Us</h2>

          <p>
            <strong>S. G. Engineering</strong> is a professionally managed
            precision manufacturing company engaged in the design, development
            and production of high-accuracy gauges, mandrels and calibration
            equipment for engineering and manufacturing industries.
          </p>

          <p>
            With a strong focus on quality and precision, we serve customers
            across automotive, engineering, machining and industrial sectors.
            Our company is supported by skilled manpower, modern machinery and
            a well-defined quality control system that ensures consistent
            performance and reliable products.
          </p>

          <p>
            We specialize in manufacturing standard as well as customized
            gauges as per customer drawings and specifications. Our commitment
            to accuracy, durability and on-time delivery has helped us build
            long-term relationships with reputed organizations across India.
          </p>

          <h3>Our Mission</h3>
          <p>
            Our mission is to manufacture precision engineering products that
            meet and exceed customer expectations in terms of quality,
            accuracy and reliability. We aim to continuously improve our
            processes, adopt modern technology and maintain strict quality
            standards to deliver value to our customers.
          </p>

          <p>
            We are committed to ethical business practices, customer
            satisfaction and continuous skill development of our workforce.
          </p>

          <h3>Our Vision</h3>
          <p>
            Our vision is to become a trusted and preferred manufacturer of
            precision gauges and engineering solutions in India. We aspire
            to grow through innovation, technological advancement and
            consistent quality while building a strong reputation for
            reliability and excellence.
          </p>

          <p>
            We envision long-term partnerships with our customers by
            supporting their quality and productivity goals through
            precision engineering.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="section-bg fade-in">
        <div className="container">
          <h2 className="center">Our Products</h2>

          <div className="product-grid">
            <div className="product-card">
              <img src={snapGauge} />
              <h3>Snap Gauges</h3>
            </div>

            <div className="product-card">
              <img src={ringGauge} />
              <h3>Ring Gauges</h3>
            </div>

            <div className="product-card">
              <img src={plugRingGauge} />
              <h3>Plug & Ring Gauges</h3>
            </div>

            <div className="product-card">
              <img src={limitGauge} />
              <h3>Limit Gauges</h3>
            </div>

            <div className="product-card">
              <img src={gaugeBlockSet} />
              <h3>Gauge Block Set</h3>
            </div>

            <div className="product-card">
              <img src={gaugeBlockAccessories} />
              <h3>Gauge Block Accessories</h3>
            </div>

            <div className="product-card">
              <img src={plainMandrel} />
              <h3>Plain Mandrels</h3>
            </div>

            <div className="product-card">
              <img src={taperMandrel} />
              <h3>Taper Mandrels</h3>
            </div>

            <div className="product-card">
              <img src={taperPlugRing} />
              <h3>Taper Plug & Ring Gauges</h3>
            </div>
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section id="facilities" className="section-bg fade-in">
        <div className="container card-section">
          <h2 className="facilities-title">Manufacturing Facilities</h2>

          <div className="facility-grid">
            <div className="facility-card">High Precision Surface Grinding Machine</div>
            <div className="facility-card">Cylindrical Grinding Machine for Gauge Manufacturing</div>
            <div className="facility-card">NC DRO Vertical Milling Machine</div>
            <div className="facility-card">Heavy Duty Conventional Lathe Machine</div>
            <div className="facility-card">Precision Lapping Machine</div>
            <div className="facility-card">Industrial Brazing Machine</div>
            <div className="facility-card">CNC Wirecut Machine</div>
            <div className="facility-card">Centerless Grinding Machine</div>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section id="clients" className="section-bg fade-in">
        <div className="container card-section">
          <h2>Clients / Trusted By</h2>

          <div className="clients-grid">
            <div className="client-card">Advik Hi Tech Pvt. Ltd. Group</div>
            <div className="client-card">Indo-MIM Pvt. Ltd. Group Bangalore</div>
            <div className="client-card">CIE Aluminium Casting India Ltd.</div>
            <div className="client-card">Kinetic Engineering Ltd., Pune</div>
            <div className="client-card">Mascor Precision Pvt. Ltd.</div>
            <div className="client-card">Dynamic Transmission Group</div>
            <div className="client-card">Conductor Core Technologies India Pvt. Ltd.</div>
            <div className="client-card">Vijay Technocrate – Bangalore</div>
            <div className="client-card">Sri Ganpath System – Coimbatore</div>
            <div className="client-card">Tecnomax – Chennai</div>
            <div className="client-card">Taitech Machine Tools – Faridabad</div>
            <div className="client-card">KSB Pumps – Pune & Nashik</div>
            <div className="client-card">Flash Group – Pune</div>
            <div className="client-card">LGB Group – Coimbatore & Jalna</div>
            <div className="client-card">Pavna Goyam Auto Pvt. Ltd.</div>
            <div className="client-card">Birla Precision Technology Ltd.</div>
            <div className="client-card">Devgiri Forging</div>
            <div className="client-card">R. K. Industries – Rajkot</div>
          </div>
        </div>
      </section>


            <section id="contact" className="contact-section fade-in">
        <div className="contact-layout">

          {/* LEFT INFO */}
          <div className="contact-info">
            <h2>Contact Us</h2>
            <p>
              C-96, MIDC Area, Waluj,<br />
              Chhatrapati Sambhajinagar – 431136, Maharashtra
            </p>

            <p>
              <strong>Mobile:</strong><br />
              <a href="tel:+918080218169">8080218169</a><br />
              <a href="tel:+919730655534">9730655534</a>
            </p>

            <p>
              <strong>Email:</strong><br />
              <a href="mailto:sgengineering679@gmail.com">
                sgengineering679@gmail.com
              </a><br />
              <a href="mailto:gore.prabhakar@rediffgmail.com">
                gore.prabhakar@rediffgmail.com
              </a>
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="contact-form-box">
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Your Mobile" required />
              <textarea placeholder="Your Enquiry" required></textarea>
              <button type="submit">Send Enquiry</button>
            </form>

            <p id="successMsg" className="success-msg">
              Message sent successfully ✔
            </p>
          </div>

        </div>

        <div className="map-box">
          <iframe
            title="SG Engineering Location"
            src="https://www.google.com/maps?q=Waluj%20MIDC%20Aurangabad&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </section>

    </div>
  );
  
}

export default App;
