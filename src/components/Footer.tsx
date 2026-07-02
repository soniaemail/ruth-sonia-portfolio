import { profile } from "@/data/content";
import { GithubIcon, LinkedinIcon, MailIcon, HuggingfaceIcon } from "./icons";

const socials = [
  { label: "GitHub", href: profile.githubUrl, Icon: GithubIcon },
  { label: "LinkedIn", href: profile.linkedinUrl, Icon: LinkedinIcon },
  { label: "Hugging Face", href: profile.huggingfaceUrl, Icon: HuggingfaceIcon },
  { label: "Email", href: `mailto:${profile.email}`, Icon: MailIcon },
];

export default function Footer() {
  return (
    <footer className="py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
        <p className="max-w-xl text-sm text-muted">
          I&apos;m a {profile.role.toLowerCase()} passionate about building
          clean, reliable data pipelines and impactful ML models.
        </p>

        <div className="flex items-center gap-4">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent-via/60 hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <p className="text-xs text-muted">
          Copyright © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
