import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, Icon } from "../components";
import { faqs } from "../data";

export const metadata: Metadata = {
  title: "FAQ and Resources",
  description:
    "Rules, frequently asked questions, developer tools, design assets, and support resources for Nepal Innovate 2024 participants.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container split">
          <div>
            <Eyebrow icon="download">Participant Resources</Eyebrow>
            <h1>
              Mastering the <span>Hackathon</span> Journey
            </h1>
            <p>
              First time hacking? Every rule, template, and tool you need to
              turn an ambitious idea into a working prototype in 48 hours.
            </p>
            <div className="action-row">
              <Link className="button secondary-fill" href="#resources">
                Browse Resources
              </Link>
              <Link className="button outline" href="#faq">
                Read the FAQ
              </Link>
            </div>
          </div>
          <img
            className="wide-photo"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCovu0hElGzLwOoiJkGmSfTKkqijpVcp1bv2Hhuik8gKjH3XF3bCdUgzEJo-EUirEJenMC8_W4Zg8muHh6KjsnLRIRmuSVkJ1U8IEqXERDG0AD2reKgn46MmZMExbrXLBWE_lhKyrUo2jGHqmoDSQputA7qQ8eVReUcb-FYihjxSvgTaF47nB6b-zDm1qr374Gltjvh5GzYJubANkRDrlT2cfPhtNVGIpFYVIHJMvedjax6BWRZNHIrglIUPHCNyi4IFs820Q8xrjI"
            alt="Students reviewing a hackathon project in a workspace"
          />
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container faq-layout">
          <aside>
            <h2>Common Questions</h2>
            <p>
              Everything about team formation, rules, and technical
              requirements.
            </p>
            <div className="community-card">
              <Icon name="users" size={34} />
              <h3>Join the Community</h3>
              <p>Connect with participants and find team members.</p>
              <Link href="#">Discord Invite</Link>
            </div>
          </aside>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details className="faq-item" key={faq.question}>
                <summary>
                  {faq.question}
                  <Icon name="chevron" />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="resources">
        <div className="container">
          <div className="section-heading center">
            <h2>
              Essential <span>Resources</span>
            </h2>
          </div>
          <div className="resource-bento">
            <article className="resource-card main">
              <Icon name="code" size={42} />
              <h3>Ultimate Developer Toolkit</h3>
              <p>
                APIs, starter templates, framework references, and hosting
                guidance to get projects live fast.
              </p>
              <Link className="button white" href="#">
                Access Toolkit
              </Link>
            </article>
            <article className="resource-card">
              <Icon name="pen" size={34} />
              <h3>Design and UX Assets</h3>
              <p>Figma templates, icon sets, and UI kits for rapid prototypes.</p>
            </article>
            <article className="resource-card compact">
              <Icon name="mail" size={38} />
              <h3>Pitch Deck Template</h3>
              <p>Craft a winning 3-minute presentation.</p>
            </article>
            <article className="resource-card compact primary">
              <Icon name="help" size={38} />
              <h3>1-on-1 Help</h3>
              <p>Book a support slot with technical mentors.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container newsletter">
          <h2>Stay in the Loop</h2>
          <p>
            Get notified about workshops, sponsor prizes, and team-matching
            events.
          </p>
          <form className="newsletter-form">
            <input aria-label="Email address" placeholder="Enter your email" type="email" />
            <button className="button" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
