import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, Icon, Tag } from "../components";
import { judges, mentors } from "../data";

export const metadata: Metadata = {
  title: "Mentors and Judges",
  description:
    "Meet the Nepal Innovate 2024 mentors and finale jury guiding student teams across technology, design, business, and impact.",
  alternates: { canonical: "/mentors" },
};

export default function MentorsPage() {
  return (
    <main>
      <section className="hero-pattern page-hero center-hero">
        <div className="container narrow">
          <Eyebrow icon="check">Expert Guidance</Eyebrow>
          <h1>
            Learn from Industry <span>Visionaries</span>
          </h1>
          <p>
            We have assembled minds from Nepal and the global tech ecosystem to
            mentor, guide, and judge innovative student solutions.
          </p>
          <div className="pill-row">
            <span>
              <Icon name="check" /> 20+ Mentors
            </span>
            <span>
              <Icon name="trophy" /> Expert Judges
            </span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <h2>Our Mentors</h2>
              <p>Technical experts available during the 48-hour build phase.</p>
            </div>
            <div className="tabs" aria-label="Mentor filters">
              <button>All Mentors</button>
              <button>Software</button>
              <button>Design</button>
              <button>Business</button>
            </div>
          </div>

          <div className="mentor-bento">
            {mentors.map((mentor, index) => (
              <article
                className={`mentor-card ${index === 0 || index === 3 ? "large" : ""} ${mentor.accent}`}
                key={mentor.name}
              >
                <div className="mentor-image">
                  <img src={mentor.image} alt={`${mentor.name}, ${mentor.title}`} />
                </div>
                <div className="mentor-content">
                  <p className="mentor-title">{mentor.title}</p>
                  <h3>{mentor.name}</h3>
                  <p>{mentor.summary}</p>
                  <div className="tag-row">
                    {mentor.tags.map((tag) => (
                      <Tag
                        key={tag}
                        tone={mentor.accent as "primary" | "secondary"}
                      >
                        {tag}
                      </Tag>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="container">
          <div className="section-heading center">
            <h2>The Grand Finale Jury</h2>
            <p>
              These leaders evaluate teams on impact, innovation, execution, and
              readiness for the next step.
            </p>
          </div>
          <div className="judge-grid">
            {judges.map((judge) => (
              <article className="judge-card" key={judge.name}>
                <img src={judge.image} alt={`${judge.name}, ${judge.title}`} />
                <h3>{judge.name}</h3>
                <p className="judge-title">{judge.title}</p>
                <p>Evaluation: {judge.rubric}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="apply">
        <div className="container cta-card blue">
          <h2>Want to help shape the next generation?</h2>
          <p>
            We are looking for passionate industry professionals to join the
            mentor pool and support young Nepalese builders.
          </p>
          <Link className="button white" href="mailto:hello@nepx.org">
            Apply as a Mentor
          </Link>
        </div>
      </section>
    </main>
  );
}
