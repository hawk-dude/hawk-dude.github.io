import type { Metadata } from "next";
import Prompt from "../ui/prompt";
import WorkEntry from "../ui/work-entry";
import EducationEntry from "../ui/education-entry";
import CertEntry from "../ui/cert-entry";
import { work, education, certifications } from "../lib/data";

export const metadata: Metadata = {
  title: "About — Oleksandr Yastrebov",
};

export default function About() {
  return (
    <div className="flex flex-col gap-8">
      <section>
        <Prompt path="~/about" command="cat bio.md" />
        <div className="mt-3 flex max-w-3xl flex-col gap-3 text-old-white">
          <p>
            I&apos;m a Computer Science student at the University of Manitoba
            and a system administrator. My path started about eight years ago
            when I wanted to download a few songs to my tablet but we had no
            Wi-Fi — only a desktop on an Ethernet cable. Hours in the Windows
            Control Panel later, the desktop was sharing its connection, and I
            was hooked on figuring out how networks work.
          </p>
          <p>
            That curiosity took me through IT Step Academy in Kyiv — OSI
            model, Cisco technologies, Packet Tracer and GNS3 labs — and then
            to Canada, where I now study CS and keep a dental clinic&apos;s
            infrastructure running. Along the way I picked up CCNA and AWS
            Cloud Practitioner certifications, and got comfortable with
            Windows Server, Linux, Docker, and cloud networking.
          </p>
          <p>
            Off the clock: soccer, swimming, grand strategy games (Vic3, HOI4,
            CK3), CTFs, and endlessly customizing my Arch Linux setup.
          </p>
        </div>
      </section>

      <section>
        <Prompt path="~/about" command="ls work/" />
        <div className="mt-4 flex flex-col gap-6">
          {work.map((job) => (
            <WorkEntry key={`${job.company}-${job.start_date}`} job={job} />
          ))}
        </div>
      </section>

      <section>
        <Prompt path="~/about" command="ls education/" />
        <div className="mt-4 flex flex-col gap-6">
          {education.map((entry) => (
            <EducationEntry key={entry.school} entry={entry} />
          ))}
        </div>
      </section>

      <section>
        <Prompt path="~/about" command="ls certifications/" />
        <div className="mt-4 flex flex-col gap-6">
          {certifications.map((cert) => (
            <CertEntry key={cert.title} cert={cert} />
          ))}
        </div>
      </section>
    </div>
  );
}
