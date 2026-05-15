import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, Icon, Tag } from "../components";
import { timeline, tracks } from "../data";

export const metadata: Metadata = {
  title: "Schedule and Tracks",
  description:
    "Explore the Nepal Innovate 2024 event timeline, challenge tracks, workshops, and team-building schedule.",
  alternates: { canonical: "/schedule" },
};

export default function SchedulePage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container split">
          <div>
            <Eyebrow icon="rocket">The Roadmap</Eyebrow>
            <h1>
              Forge the Future, <span>Step by Step.</span>
            </h1>
            <p>
              Join +2 students across Nepal for a 48-hour marathon of
              innovation. Explore tracks and plan your victory.
            </p>
          </div>
          <img
            className="wide-photo"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdylA0UM3WmySDbXX5hf55yJQ-I6-ZVSd7UgErwQQYOt95DcbAoOtwKRVKnxyOK6s6Z4C4Eq4g9eItcCGYZiIvZOyAIkWi_W1g9lTJ5Ja0YxOTCdPPwjpoURuVoAi2ZyIkrjyGjd2JfI6IdsebV9pMJVl3DvTHmdksvKtP49SipnqEPaXWaZkPcxApQ8KPjNYi79qDZp5c2SZEY203T4P-oxZGt2-i5JwClvZ1pDLteTiqEot-niViTANZmbnJHq7NUvJIwrZX3ws"
            alt="Students collaborating in a high-tech workshop"
          />
        </div>
      </section>

      <section className="section" id="tracks">
        <div className="container">
          <div className="section-heading">
            <h2>Innovation Tracks</h2>
            <p>Choose a challenge that resonates with your passion.</p>
          </div>
          <div className="track-bento">
            {tracks.map((track) => (
              <article
                className={`track-card ${track.span === "wide" ? "wide" : ""} ${track.accent}`}
                key={track.title}
              >
                <Icon name={track.icon as "school"} size={38} />
                <h3>{track.title}</h3>
                <p>
                  <strong>Problem Statement: </strong>
                  {track.problem}
                </p>
                <div className="tag-row">
                  {track.tags.map((tag) => (
                    <Tag
                      key={tag}
                      tone={track.accent as "primary" | "secondary" | "tertiary"}
                    >
                      {tag}
                    </Tag>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <h2>Event Timeline</h2>
              <p>48 hours of non-stop building, learning, and growth.</p>
            </div>
            <div className="tabs">
              <button>Day 1</button>
              <button>Day 2</button>
              <button>Day 3</button>
            </div>
          </div>
          <div className="timeline">
            {timeline.map((item, index) => (
              <article className={`timeline-item ${item.accent}`} key={item.time}>
                <div className="timeline-copy">
                  <strong>{item.time}</strong>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <span className="timeline-dot" />
                <div className="timeline-place">
                  <Icon name={index === 0 ? "user" : index === 1 ? "pen" : index === 2 ? "code" : "calendar"} />
                  <small>{item.place}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-card">
          <h2>Ready to build something amazing?</h2>
          <p>
            Registration closes soon. Be part of Nepal's biggest student
            hackathon.
          </p>
          <div className="action-row center">
            <Link className="button white" href="/register">
              Join a Track
            </Link>
            <Link className="button soft" href="/resources#faq">
              View FAQ
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
