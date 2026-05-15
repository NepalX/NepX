import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, Icon, Tag } from "./components";

export const metadata: Metadata = {
  title: "Nepal Innovate 2024 | Startup Hackathon for +2 Students",
  description:
    "A 48-hour startup hackathon for +2 students in Nepal, with mentors, tracks, prizes, and a clear path from idea to prototype.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <section className="hero-pattern home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <Eyebrow icon="bolt">For +2 students in Nepal</Eyebrow>
            <h1>
              Build the Future of <span>Nepal</span>. One Line at a Time.
            </h1>
            <p>
              A 48-hour sprint of innovation, coding, and entrepreneurship.
              Join brilliant young builders to solve Nepal's most pressing
              challenges.
            </p>
            <div className="countdown" aria-label="Countdown">
              {[
                ["14", "Days", "primary"],
                ["08", "Hours", "secondary"],
                ["45", "Mins", "primary"],
              ].map(([value, label, tone]) => (
                <div className={`count-card ${tone}`} key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
            <div className="action-row">
              <Link className="button" href="/register">
                Start Your Journey
              </Link>
              <Link className="button outline secondary" href="#prizes">
                View Prize Pool
              </Link>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <img
              className="hero-photo"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHtv4BPkPDmzRk0WarDPYOfgl_EODH6BT9P2KZqPstHkLyXkhTfoZ9WHY66zkfsbDQ7-iwNXbO_xajYxuoUHRf5kP52MghESeymtxAA8KLFdNZpZIA9cuLcvzNZZdfmLV9JqxXpLLx2Ij6DYhiUgJ0XoWEg8ZhEixe3D7DF04-VQP7EJMMsqKc70sTudsx0UnNM0NvC2rNAH0k0oFBnWTSzo1oAnFm9o_Yeb7tQLzPki55quJKh7FdqhlJGMM8QiNIt_DHuqkt4AM"
              alt="Young Nepalese students working together on laptops during a hackathon"
            />
            <div className="floating-prize">
              <span>
                <Icon name="trophy" />
              </span>
              <div>
                <strong>NPR 5,00,000</strong>
                <small>Grand Prize</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="container">
          <div className="section-heading center">
            <h2>Unleash Your Potential</h2>
            <p>
              More than a competition. It is a platform to transform ideas into
              scalable startups with guidance from industry experts.
            </p>
          </div>
          <div className="feature-grid">
            <article className="feature-card wide primary">
              <Icon name="lightbulb" size={44} />
              <h3>48 Hours of Pure Creation</h3>
              <p>
                Form a team, identify a problem, and build a prototype with
                mentors, internet, workspace, and the structure to keep moving.
              </p>
              <div className="tag-row">
                <Tag>Ideation</Tag>
                <Tag>Prototyping</Tag>
                <Tag>Pitching</Tag>
              </div>
            </article>
            <article className="feature-card blue">
              <Icon name="school" size={46} />
              <h3>Exclusive for +2</h3>
              <p>
                Designed for Grade 11 and 12 students in Nepal to discover young
                talent early.
              </p>
            </article>
            {[
              ["users", "Team Support", "Find collaborators during pre-event networking."],
              ["graduation", "Global Mentorship", "Learn from engineers and founders from Nepal and abroad."],
              ["rocket", "Startup Track", "Top teams enter a 3-month incubation path."],
            ].map(([icon, title, text]) => (
              <article className="mini-card" key={title}>
                <span>
                  <Icon name={icon as "users"} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="prizes">
        <div className="container split">
          <div>
            <h2>Mark Your Calendars</h2>
            <div className="detail-list">
              <div>
                <span>
                  <Icon name="calendar" />
                </span>
                <div>
                  <h3>August 15 - 17, 2024</h3>
                  <p>The main event. 48 hours of focused building.</p>
                </div>
              </div>
              <div>
                <span>
                  <Icon name="map" />
                </span>
                <div>
                  <h3>IT Park, Kavre</h3>
                  <p>Nepal's tech hub with high-speed infrastructure.</p>
                </div>
              </div>
            </div>
            <div className="notice">
              <strong>Participation support</strong>
              <p>
                Free transportation from Kathmandu and Lalitpur hubs. Stay and
                food covered for selected participants.
              </p>
            </div>
          </div>
          <div className="map-card">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRx2OxWR1J018S5DaLha2ZYXftCxKXSM1a5uCVoq3uNSoLDvGbY8RXQcBVt35N06zhNUR_zgMWsSfLmtidDqhojYPHNItncfps70gMMWJ8Vvotrxr4Nf9uDhhOz-NbrXfJZX_ptZoT1r4ISKRfaC5SAsAs7BEIEi-9j81UaH15ugyXrrZQ7txVljbl4mfirgcprN4tQX5c_Cs0_Chy1G8FLQR6iC56uSbVBgxLu9cglk1Yf7WZb1lRVRoMVey0gsCE3aU9mndI_gY"
              alt="Stylized map of IT Park in Kavre, Nepal"
            />
            <div className="map-label">
              <div>
                <strong>IT Park, Banepa</strong>
                <small>Kavre District, Nepal</small>
              </div>
              <Icon name="map" />
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-card">
          <h2>Ready to build the next big thing?</h2>
          <p>
            Applications are open until July 30. Join Nepal's biggest student
            startup event.
          </p>
          <div className="action-row center">
            <Link className="button white" href="/register">
              Register Team
            </Link>
            <Link className="button soft" href="/register">
              Individual Signup
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
