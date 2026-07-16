import type { Metadata } from "next";
import Prompt from "../ui/prompt";
import { bio } from "../lib/data";

export const metadata: Metadata = {
  title: "Contact — Oleksandr Yastrebov",
};

const contacts = [
  {
    label: "email",
    value: bio.email,
    href: `mailto:${bio.email}`,
  },
  {
    label: "github",
    value: `github.com/${bio.githubHandle}`,
    href: bio.github,
  },
  {
    label: "linkedin",
    value: `linkedin.com/in/${bio.linkedinHandle}`,
    href: bio.linkedin,
  },
];

export default function Contact() {
  return (
    <div className="flex flex-col gap-4">
      <Prompt path="~/contact" command="cat contact.txt" />
      <dl className="flex flex-col gap-2">
        {contacts.map((contact) => (
          <div key={contact.label} className="flex flex-col sm:flex-row">
            <dt className="w-28 shrink-0 text-oni-violet">
              {contact.label}:
            </dt>
            <dd>
              <a
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-crystal-blue underline-offset-4 hover:underline"
              >
                {contact.value}
              </a>
            </dd>
          </div>
        ))}
        <div className="flex flex-col sm:flex-row">
          <dt className="w-28 shrink-0 text-oni-violet">location:</dt>
          <dd className="text-fuji-white">{bio.location}</dd>
        </div>
      </dl>
      <p className="mt-2 text-fuji-gray">
        # fastest way to reach me is email — usually reply within a day
      </p>
    </div>
  );
}
