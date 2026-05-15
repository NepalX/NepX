import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "../components";

export const metadata: Metadata = {
  title: "Registration",
  description:
    "Register your team for Nepal Innovate 2024, the 48-hour startup hackathon for +2 students in Nepal.",
  alternates: { canonical: "/register" },
};

export default function RegisterPage() {
  return (
    <main className="register-page">
      <section className="container form-header">
        <h1>Team Registration</h1>
        <p>
          Join the next generation of Nepali innovators. Complete the steps
          below to secure your spot.
        </p>
        <div className="stepper" aria-label="Registration steps">
          {["Team Info", "Members", "Project"].map((step, index) => (
            <div className={index === 0 ? "active" : ""} key={step}>
              <span>{index + 1}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="container form-layout">
        <form className="registration-form">
          <div className="form-card primary">
            <div className="form-card-heading">
              <span>
                <Icon name="users" />
              </span>
              <div>
                <h2>Team Identity</h2>
                <p>Give your team a memorable name.</p>
              </div>
            </div>
            <label>
              Team Name
              <input placeholder="e.g. Sagarmatha Coders" type="text" />
            </label>
            <label>
              Primary Track
              <select defaultValue="FinTech for Nepal">
                <option>FinTech for Nepal</option>
                <option>AgriTech and Sustainability</option>
                <option>EduTech Revolution</option>
                <option>Health and Wellness</option>
                <option>Open Innovation</option>
              </select>
            </label>
          </div>

          <div className="form-card secondary">
            <div className="form-card-heading">
              <span>
                <Icon name="user" />
              </span>
              <div>
                <h2>Team Leader</h2>
                <p>Primary point of contact for the hackathon.</p>
              </div>
            </div>
            <div className="field-grid">
              <label>
                Full Name
                <input placeholder="Enter leader name" type="text" />
              </label>
              <label>
                Email Address
                <input placeholder="leader@school.edu.np" type="email" />
              </label>
              <label>
                Phone Number
                <input placeholder="+977-98..." type="tel" />
              </label>
              <label>
                School/College Name
                <input placeholder="Your institution" type="text" />
              </label>
            </div>
          </div>

          <div className="upload-card">
            <Icon name="upload" size={40} />
            <h2>Upload Student IDs</h2>
            <p>
              Upload a combined PDF or ZIP file of student ID cards for all team
              members.
            </p>
            <button className="button outline" type="button">
              Choose Files
            </button>
          </div>

          <div className="form-actions">
            <Link href="/">Cancel Registration</Link>
            <button className="button" type="submit">
              Next Step: Add Members
            </button>
          </div>
        </form>

        <div className="help-grid">
          <article className="guide-card">
            <span>New Resources</span>
            <h2>Registration Guide</h2>
            <p>
              Need help forming a team or choosing a track? The guide covers
              team dynamics and ideation tips.
            </p>
            <Link href="#">
              Download PDF Guide <Icon name="download" />
            </Link>
          </article>
          <article className="support-card">
            <Icon name="help" size={42} />
            <h2>Live Support</h2>
            <p>Stuck during registration? Chat with our team.</p>
            <button className="button white">Start Chat</button>
          </article>
        </div>
      </section>
    </main>
  );
}
