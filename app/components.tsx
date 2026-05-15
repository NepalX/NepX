import Link from "next/link";
import {
  ArrowRight,
  AtSign,
  Bolt,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Code2,
  Download,
  Globe2,
  GraduationCap,
  HelpCircle,
  Leaf,
  Lightbulb,
  Mail,
  MapPin,
  PenTool,
  Rocket,
  School,
  Trophy,
  Upload,
  UserCircle,
  Users,
  WalletCards,
} from "lucide-react";
import { navItems, palette } from "./data";

const iconMap = {
  bolt: Bolt,
  calendar: CalendarDays,
  check: CheckCircle2,
  code: Code2,
  download: Download,
  globe: Globe2,
  graduation: GraduationCap,
  help: HelpCircle,
  eco: Leaf,
  lightbulb: Lightbulb,
  mail: Mail,
  map: MapPin,
  pen: PenTool,
  rocket: Rocket,
  school: School,
  trophy: Trophy,
  upload: Upload,
  user: UserCircle,
  users: Users,
  wallet: WalletCards,
  at: AtSign,
  chevron: ChevronDown,
};

export type IconName = keyof typeof iconMap;

export function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  const Component = iconMap[name];
  return <Component aria-hidden="true" size={size} strokeWidth={2.1} />;
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary navigation">
        <Link className="site-brand" href="/">
          Nepal Innovate 2024
        </Link>
        <div className="nav-items">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="nav-actions">
          <Link className="icon-button" href="/register" aria-label="Account">
            <Icon name="user" />
          </Link>
          <Link className="button small" href="/register">
            Register Now
          </Link>
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-about">
          <Link className="site-brand" href="/">
            Nepal Innovate 2024
          </Link>
          <p>
            (c) 2024 Nepal Innovate Hackathon. Empowering +2 students to build
            the future of Nepal.
          </p>
          <div className="social-row" aria-label="Social links">
            <Link href="#" aria-label="Website">
              <Icon name="globe" />
            </Link>
            <Link href="#" aria-label="Email">
              <Icon name="mail" />
            </Link>
            <Link href="#" aria-label="Community">
              <Icon name="users" />
            </Link>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <strong>Event</strong>
            <Link href="/schedule">Schedule</Link>
            <Link href="/schedule#tracks">Tracks</Link>
            <Link href="/mentors">Mentors</Link>
          </div>
          <div>
            <strong>Resources</strong>
            <Link href="/resources">Rules</Link>
            <Link href="/resources#faq">FAQ</Link>
            <Link href="#">Code of Conduct</Link>
          </div>
          <div>
            <strong>Connect</strong>
            <Link href="mailto:hello@nepx.org">Contact Us</Link>
            <Link href="#">Sponsor Info</Link>
            <Link href="/mentors#apply">Become a Mentor</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Eyebrow({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: IconName;
}) {
  return (
    <p className="eyebrow">
      {icon ? <Icon name={icon} size={17} /> : null}
      {children}
    </p>
  );
}

export function Tag({
  children,
  tone = "primary",
}: {
  children: React.ReactNode;
  tone?: "primary" | "secondary" | "tertiary";
}) {
  return (
    <span
      className="tag"
      style={
        {
          "--tag-color": palette[tone],
        } as React.CSSProperties
      }
    >
      #{children}
    </span>
  );
}
