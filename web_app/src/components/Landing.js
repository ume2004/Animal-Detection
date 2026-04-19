import React from 'react';
import Classify from './Classify';
import Detect from './Detect';
import react from './logoicons/react.png';
import tf from './logoicons/tf.png';
import keras from './logoicons/keras.png';
import colab from './logoicons/colab.png';

const Landing = () => {
    return (
        <div className="App">
        <div id="overlayer"></div>
  
        <div className="loader">
          <div className="spinner-border text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>

        <div className="site-wrap">

          {/* Mobile Menu */}
          <div className="site-mobile-menu site-navbar-target">
            <div className="site-mobile-menu-header">
              <div className="site-mobile-menu-close mt-3">
                <span className="icon-close2 js-menu-toggle"></span>
              </div>
            </div>
            <div className="site-mobile-menu-body"></div>
          </div>

          {/* ── NAVBAR ── */}
          <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
            <div className="container-fluid">
              <div className="d-flex align-items-center">

                <div className="site-logo">
                  <img src={process.env.PUBLIC_URL + "/imgs/logo-full.svg"} alt="Animal Detection Logo" height="48" width="220"/>
                </div>

                <div className="ml-auto d-flex align-items-center">
                  <nav className="site-navigation position-relative text-right" role="navigation">
                    <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-xl-block mb-0">
                      <li><a href="#home-section" className="nav-link">Home</a></li>
                      <li><a href="#features-section" className="nav-link">Features</a></li>
                      <li><a href="#glance-section" className="nav-link">Glance</a></li>
                      <li><a href="#demo-section" className="btn btn-outline-black py-2 px-4">Try Now</a></li>
                    </ul>
                  </nav>
                  <a href="/#" className="d-inline-block d-xl-none site-menu-toggle js-menu-toggle float-right ml-3">
                    <span className="icon-menu h3" style={{ color: '#fff' }}></span>
                  </a>
                </div>

              </div>
            </div>
          </header>

          {/* ── HERO ── */}
          <div className="intro-section custom-owl-carousel" id="home-section">
            <div className="container">
              <div className="row align-items-center">

                <div className="col-lg-5 mr-auto" data-aos="fade-up">
                  <span className="hero-badge">🦁 AI-Powered Wildlife Detection</span>
                  <div className="owl-carousel slide-one-item-alt-text">

                    <div className="slide-text">
                      <h1>Animal<br/>Detection</h1>
                      <p>Identify and detect wildlife species in real-time using state-of-the-art MobileNet + SSD deep learning models — right in your browser.</p>
                      <p><a href="#demo-section" className="btn btn-outline-light py-3 px-5 smoothscroll">Try It Now</a></p>
                    </div>

                    <div className="slide-text">
                      <h1>MobileNets</h1>
                      <p>A family of lightweight, mobile-first computer vision models for TensorFlow. Designed to maximize accuracy while staying mindful of on-device resource constraints.</p>
                    </div>

                    <div className="slide-text">
                      <h1>SSD Detector</h1>
                      <p>Single Shot Detector combines predictions across multiple feature maps at different scales — delivering fast, accurate bounding box detection in a single pass.</p>
                    </div>

                    <div className="slide-text">
                      <h1>MobileNet + SSD</h1>
                      <p>SSDLite on top of MobileNet uses depthwise separable layers for ultra-efficient detection. Achieves real-time results at 30+ FPS on mobile devices.</p>
                    </div>

                  </div>
                </div>

                <div className="col-lg-6 ml-auto" data-aos="fade-up" data-aos-delay="100">
                  <div className="owl-carousel slide-one-item-alt">
                    <img src={process.env.PUBLIC_URL + "/imgs/JeevRakshak.png"} alt="Animal Detection" className="img-fluid"/>
                    <img src={process.env.PUBLIC_URL + "/imgs/MobileNet.png"} alt="MobileNet" className="img-fluid"/>
                    <img src={process.env.PUBLIC_URL + "/imgs/SSD.png"} alt="SSD" className="img-fluid"/>
                    <img src={process.env.PUBLIC_URL + "/imgs/MobileNetSSD.png"} alt="MobileNet-SSD" className="img-fluid"/>
                  </div>
                  <div className="owl-custom-direction">
                    <a href="/#" className="custom-prev"><span className="icon-keyboard_arrow_left"></span></a>
                    <a href="/#" className="custom-next"><span className="icon-keyboard_arrow_right"></span></a>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ── STATS BAR ── */}
          <div className="stats-bar">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-6 col-md-3">
                  <div className="stat-item">
                    <span className="stat-number">11</span>
                    <span className="stat-label">Species Classified</span>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="stat-item">
                    <span className="stat-number">96%</span>
                    <span className="stat-label">Detection Accuracy</span>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="stat-item">
                    <span className="stat-number">30+</span>
                    <span className="stat-label">FPS Real-time</span>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="stat-item">
                    <span className="stat-number">8.6MB</span>
                    <span className="stat-label">Model Size</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── ABOUT ── */}
          <div className="site-section" id="about-section">
            <div className="container">
              <div className="row align-items-center">

                <div className="col-lg-5 mr-auto mb-5 mb-lg-0" data-aos="fade-right">
                  <div className="about-img-wrap">
                    <img src={process.env.PUBLIC_URL + "/imgs/Species-Identification.png"} alt="Species Identification" className="img-fluid"/>
                  </div>
                </div>

                <div className="col-lg-6" data-aos="fade-left">
                  <span className="section-subtitle">About the Project</span>
                  <div className="section-divider"></div>
                  <h2 className="section-title">Wildlife Species Identification</h2>
                  <p className="black-text mb-4">
                    Animal Detection is a wildlife species identification web app powered by client-side neural networks.
                    Upload an image and the MobileNet + SSD model returns bounding boxes around identified animals along with their probable species — all processed locally in your browser.
                  </p>
                  <ul className="ul-check list-unstyled">
                    <li>Ease of use — simple, elegant, mobile-compatible interface</li>
                    <li>Saves manual labour for biology researchers</li>
                    <li>96% detection accuracy with bounding boxes</li>
                    <li>Fully automatic animal spotting system</li>
                    <li>Species identification for 11 animal classes</li>
                    <li>Offence registration with image or geo-location</li>
                  </ul>
                  <a href="#demo-section" className="btn btn-primary-custom smoothscroll">Try the Demo</a>
                </div>

              </div>
            </div>
          </div>

          {/* ── FEATURES ── */}
          <div className="site-section bg-dark features-section" id="features-section" data-aos="fade">
            <div className="container mb-5">
              <div className="row justify-content-center text-center">
                <div className="col-lg-6">
                  <span className="section-subtitle">What We Offer</span>
                  <div className="section-divider mx-auto"></div>
                  <h2 className="section-title" style={{ color: '#fff' }}>Key Features</h2>
                </div>
              </div>
            </div>

            <div className="owl-carousel nonloop-block-14">

              <div className="service">
                <div className="custom-icon-wrap">
                  <img src={process.env.PUBLIC_URL + "/icons/ease-of-use.png"} alt="Ease Of Use" height="38" width="38"/>
                </div>
                <h3>Ease Of Use</h3>
                <p>Simple, elegant and mobile-compatible interface. No installation required — runs entirely in your browser.</p>
              </div>

              <div className="service">
                <div className="custom-icon-wrap">
                  <img src={process.env.PUBLIC_URL + "/icons/saves-manual-labour.png"} alt="Saves Manual Labour" height="38" width="38"/>
                </div>
                <h3>Saves Manual Labour</h3>
                <p>Dramatically reduces the time and cost for biology researchers labeling camera trap images from wild habitats.</p>
              </div>

              <div className="service">
                <div className="custom-icon-wrap">
                  <img src={process.env.PUBLIC_URL + "/icons/accuracy.png"} alt="Accuracy" height="38" width="38"/>
                </div>
                <h3>Brilliant Accuracy</h3>
                <p>Identifies animals in input images and returns bounding box results with an accuracy of up to 96%.</p>
              </div>

              <div className="service">
                <div className="custom-icon-wrap">
                  <img src={process.env.PUBLIC_URL + "/icons/animal-spotting.png"} alt="Animal Spotting" height="38" width="38"/>
                </div>
                <h3>Auto Animal Spotting</h3>
                <p>Automatically identifies species in images and delivers truly real-time results at 30+ FPS on modern devices.</p>
              </div>

              <div className="service">
                <div className="custom-icon-wrap">
                  <img src={process.env.PUBLIC_URL + "/icons/species-identification.png"} alt="Species Identification" height="38" width="38"/>
                </div>
                <h3>Species Identification</h3>
                <p>Detects 11 species: Butterfly, Elephant, Tiger, Lion, Horse, Panda, Bear, Monkey, Dog, Deer and Human.</p>
              </div>

              <div className="service">
                <div className="custom-icon-wrap">
                  <img src={process.env.PUBLIC_URL + "/icons/offence-registration.png"} alt="Offence Registration" height="38" width="38"/>
                </div>
                <h3>Offence Registration</h3>
                <p>Users can register offences towards animals by uploading an image, geo-location, or both.</p>
              </div>

            </div>
          </div>

          {/* ── GLANCE / VIDEO ── */}
          <div className="site-section glance-section" id="glance-section" data-aos="fade">
            <div className="container">
              <div className="row align-items-center">

                <div className="col-md-6 order-1 order-md-2 mb-5 mb-md-0" data-aos="fade-left">
                  <div className="video-wrap">
                    <video src={process.env.PUBLIC_URL + "/demo/demo.mp4"} className="img-fluid" controls loop />
                  </div>
                </div>

                <div className="col-md-5 mr-auto order-2 order-md-1" data-aos="fade-right">
                  <span className="section-subtitle">See It In Action</span>
                  <div className="section-divider"></div>
                  <h2 className="section-title">At a Glance</h2>
                  <p className="black-text mb-4">
                    TensorFlow.js brings powerful machine learning directly to the browser.
                    Watch how the model processes camera trap footage captured from wild habitats around the world.
                  </p>
                  <div className="note-badge mb-4">
                    ⚠️ Model identifies only the species it was trained on.
                  </div>
                  <a href="#demo-section" className="btn btn-primary-custom smoothscroll">Try It Yourself</a>
                </div>

              </div>
            </div>
          </div>

          {/* ── DEMO ── */}
          <div className="site-section demo-section bg-dark" id="demo-section" data-aos="fade">
            <div className="container mb-4">
              <div className="row justify-content-center text-center">
                <div className="col-lg-6">
                  <span className="section-subtitle">Live Demo</span>
                  <div className="section-divider mx-auto"></div>
                  <h2 className="section-title" style={{ color: '#fff' }}>Try the Models</h2>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '.95rem' }}>
                    Load a model and upload an image to see real-time predictions in your browser.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '10px', marginBottom: '80px' }}>
              <Classify />
            </div>
            <div style={{ marginTop: '60px', marginBottom: '60px' }}>
              <Detect />
            </div>
          </div>

          {/* ── TECH STACK ── */}
          <div className="tech-section" id="tech-section">
            <div className="container">
              <div className="row justify-content-center text-center mb-5">
                <div className="col-lg-6">
                  <span className="section-subtitle">Built With</span>
                  <div className="section-divider mx-auto"></div>
                  <h2 className="section-title">Tech Stack</h2>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-6 col-md-3 mb-4" data-aos="fade-up" data-aos-delay="0">
                  <div className="tech-card">
                    <img src={react} width="80" height="80" alt="React" />
                    <h4>React.js</h4>
                  </div>
                </div>
                <div className="col-6 col-md-3 mb-4" data-aos="fade-up" data-aos-delay="100">
                  <div className="tech-card">
                    <img src={tf} width="80" height="80" alt="TensorFlow" />
                    <h4>TensorFlow.js</h4>
                  </div>
                </div>
                <div className="col-6 col-md-3 mb-4" data-aos="fade-up" data-aos-delay="200">
                  <div className="tech-card">
                    <img src={keras} width="70" height="70" alt="Keras" />
                    <h4>Keras</h4>
                  </div>
                </div>
                <div className="col-6 col-md-3 mb-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="tech-card">
                    <img src={colab} width="70" height="70" alt="Google Colab" />
                    <h4>Google Colab</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── FOOTER ── */}
          <footer className="footer-section">
            <div className="container">
              <div className="row">

                <div className="col-md-4 mb-5 mb-md-0">
                  <div className="d-flex align-items-center mb-3" style={{ gap: '12px' }}>
                    <img src={process.env.PUBLIC_URL + "/imgs/logo-icon.svg"} alt="logo" height="44" width="44"/>
                    <div className="footer-logo-text">
                      Animal<span>.</span>Detection
                    </div>
                  </div>
                  <p>Wildlife species identification using client-side neural networks. Powered by TensorFlow.js and MobileNet + SSD.</p>
                </div>

                <div className="col-md-3 ml-auto mb-5 mb-md-0">
                  <h3>Navigation</h3>
                  <ul className="list-unstyled footer-links">
                    <li><a href="#home-section" className="smoothscroll">Home</a></li>
                    <li><a href="#about-section" className="smoothscroll">About</a></li>
                    <li><a href="#features-section" className="smoothscroll">Features</a></li>
                    <li><a href="#glance-section" className="smoothscroll">Glance</a></li>
                    <li><a href="#demo-section" className="smoothscroll">Demo</a></li>
                  </ul>
                </div>

                <div className="col-md-3">
                  <h3>Project</h3>
                  <p>An AI-powered wildlife monitoring web app built as part of a deep learning project.</p>
                  <a
                    href="https://github.com/ume2004/Animal-Detection"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary-custom btn-sm mt-2"
                    style={{ fontSize: '.75rem', padding: '8px 20px' }}
                  >
                    View on GitHub
                  </a>
                </div>

              </div>

              <hr className="footer-divider" />
              <p className="footer-bottom">
                © {new Date().getFullYear()} <span>Animal Detection</span>. Built with React &amp; TensorFlow.js.
              </p>
            </div>
          </footer>

        </div>
        </div>
    )
}

export default Landing;
