import React, { useEffect } from "react";
import { gsap } from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Form";

export default function CodeArena() {
  // useEffect(() => {
  //   gsap.from(".hero-title", {
  //     duration: 1,
  //     x: -100,
  //     opacity: 0,
  //     ease: "power3.out",
  //   });
  //   gsap.from(".hero-subtitle", {
  //     duration: 1,
  //     x: 100,
  //     opacity: 0,
  //     ease: "power3.out",
  //     delay: 0.3,
  //   });
  //   gsap.from(".hero-desc", {
  //     duration: 1,
  //     y: 50,
  //     opacity: 0,
  //     ease: "power3.out",
  //     delay: 0.6,
  //   });
  //   gsap.from(".hero-btn", {
  //     duration: 0.8,
  //     scale: 0,
  //     opacity: 0,
  //     ease: "back.out(1.7)",
  //     delay: 1,
  //   });
  // }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-color py-2">
        <div className="container">
          <a className="navbar-brand logo" href="/">
            <img
              src="/images/white-logo.png"
              alt="CodeCraft"
              className="img-fluid navbar-brand-image"
              style={{ maxHeight: "48px" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMain"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#schedule">
                  Schedule
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#prizes">
                  Prizes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/codeArena">
                  CodeArena 3.0
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section bg-color text-bold">
        <div className="container text-center">
          <h1 className="hero-title">CodeArena 3.0</h1>
          <h2 className="hero-subtitle">The Ultimate Coding Showdown</h2>
          <p className="hero-desc">Compete, learn, and win exciting prizes!</p>
          <a href="#register" className="btn btn-primary btn-lg hero-btn">
            Register Now
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h3 className="mb-3">What is CodeArena 3.0?</h3>
              <p className="mb-4">
                CodeArena 3.0 is a campus hackathon organised by{" "}
                <strong>CodeCraft</strong> in collaboration with{" "}
                <strong>ACM-W</strong>. This is a one-day event where student
                teams build a working prototype or demo focused on AI-driven
                healthcare solutions — from diagnostic tools to patient-care
                assistants, data-driven disease prediction, and more.
              </p>

              <div className="row mt-4">
                <div className="col-md-4">
                  <div className="p-3 shadow-sm rounded">
                    <h5>Who can participate</h5>
                    <p className="mb-0">
                      Undergraduate students from all disciplines (teams of
                      2–4).
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="p-3 shadow-sm rounded">
                    <h5>Duration</h5>
                    <p className="mb-0">
                      One day — intense &amp; fun. (Exact date announced soon)
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="p-3 shadow-sm rounded">
                    <h5>Format</h5>
                    <p className="mb-0">
                      Build → Demo → Pitch to judges → Winners announced same
                      day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="py-5 bg-light">
        <div className="container">
          <h3 className="text-center mb-4">Tentative Schedule (One-day)</h3>
          <div className="row justify-content-center">
            <div className="col-md-8">
              {[
                ["09:00 - 10:00", "Registration & Breakfast"],
                ["10:00 - 10:30", "Opening, Theme Brief & Problem Statements"],
                ["10:30 - 16:00", "Hacking Session (mentors available)"],
                ["16:00 - 17:30", "Demo & Judging"],
                ["17:30 - 18:00", "Winners Announcement & Closing"],
              ].map(([time, desc], i) => (
                <div key={i} className="schedule-item p-3 rounded bg-white">
                  <strong>{time}</strong> — {desc}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prizes */}
      <section id="prizes" className="py-5">
        <div className="container">
          <h3 className="text-center mb-4">Prizes & Recognition</h3>
          <div className="row text-center">
            <div className="col-md-4">
              <div className="p-4 border rounded">
                <h4>1st Prize</h4>
                <p>Cash + Internship opportunities</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border rounded">
                <h4>2nd Prize</h4>
                <p>Cash + Swags</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border rounded">
                <h4>Special Mentions</h4>
                <p>Most Innovative, Best Use of AI, Best Healthcare Impact</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Register */}
      <div id="register" className="text-dark py-5 bg-color text-center">
        {" "}
        <div className="container">
          <h4 className="mb-3">Ready to compete?</h4>
          <p className="mb-4">
            Form your team (3–4 members), pick a problem, and register. Limited
            seats — first come, first served.
          </p>
        </div>
        <div className="container mt-5 border p-4 form-container text-left ">
          <Form />
        </div>
      </div>
      {/* Footer */}
      <footer id="contact" className="py-5">
        <div className="container text-center">
          <h5>Contact & Venue</h5>
          <p className="mb-1">PCCOE-Ravet — CodeCraft Club Office</p>
          <p className="mb-3">
            Email:{" "}
            <a href="mailto:pccoer.ravet@gmail.com">pccoer.ravet@gmail.com</a> |
            Phone: 8237238080
          </p>
          <p className="text-muted">© 2025 CodeCraft x ACM-W — CodeArena 3.0</p>
        </div>
      </footer>
    </>
  );
}
