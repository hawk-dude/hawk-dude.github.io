import type { Work, Education, Certification, Project } from "./definitions";

export const work: Work[] = [
    {
        title: "System Administrator",
        company: "Gelios Dental",
        location: "Winnipeg, MB, Canada",
        start_date: "May 2025",
        end_date: "Present",
        responsibilities: [
            "Created documentation from scratch: password management (KeePassXC), administrator diaries, and technical documentation of the organization's IT infrastructure.",
            "Installed and configured a NAS server running Docker-based Zabbix, automated backups, secured shared folders, and the NXLog log service.",
            "Managed the clinic's LAN: restructured the cable system, upgraded the network for migration to VoIP, optimized Wi-Fi, and implemented static and dynamic IP addressing.",
            "Provided remote support to the clinic's users: troubleshooting and software installation.",
            "Improved security: installed antivirus software, regular updates, and Windows credentials management.",
            "Automated backups and Wake-on-LAN with custom scripts.",
            "Responsible for the smooth migration to new software and Google services.",
            "Saved 4000+ CAD by creating efficient backup solutions and local network storage.",
        ],
        image: "/assets/img/GELIOS_DENTAL_Logo.jpg",
    },
    {
        title: "System Administrator",
        company: "Ukrfeed ltd",
        location: "Kyiv, Ukraine",
        start_date: "January 2021",
        end_date: "February 2023",
        responsibilities: [
            "Managed the firm's equipment: PCs, printers, laptops, and router.",
            "Deployed Wake-on-LAN via a script on a MikroTik router.",
            "Configured OpenVPN, RDP, and port forwarding for remote coworkers.",
        ],
        image: "/assets/img/ukrfeed-ltd.jpg",
    },
];

export const education: Education[] = [
    {
        school: "University of Manitoba",
        degree: "B.Sc. Honours",
        major: "Computer Science",
        start_date: "September 2024",
        end_date: "August 2028",
        achievements: [
            "GPA: 3.97",
            "First place, international NASA Space Apps hackathon (October 2025)",
            "International Undergraduate Student Entrance Scholarship (2024)",
            "Advanced Placement Enhancement Scholarship for AP Calculus BC and Computer Science A (2024)",
            "Activities: soccer league, math club",
        ],
        image: "/assets/img/UofM.jpg",
    },
    {
        school: "IT Step Academy (Cisco Networking Academy)",
        degree: "Diploma",
        major: "Networks & Cybersecurity",
        start_date: "December 2022",
        end_date: "August 2024",
        achievements: [
            "GPA: 4.0",
            "Cisco Certified Network Associate (CCNA), November 2023",
            "Hands-on experience with Packet Tracer and advanced labs in GNS3",
        ],
        image: "/assets/img/it_step_academy.jpg",
    },
    {
        school: "Grant Park High School",
        degree: "High School Diploma",
        major: "General + AP credits",
        start_date: "April 2023",
        end_date: "June 2024",
        achievements: [
            "93% average",
            "Award of Excellence in Computer Science 40S: best student in the course school-wide (2023)",
            "Activities: Pirates soccer team, math club",
        ],
        image: "/assets/img/gphs.png",
    },
];

export const certifications: Certification[] = [
    {
        title: "Cisco Certified Network Associate (CCNA)",
        issuer: "Cisco Networking Academy",
        date: "November 2023",
        description:
            "Validated knowledge of networking concepts and skills required to install, configure, and troubleshoot networks.",
        image: "/assets/img/ccna.png",
    },
    {
        title: "AWS Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "April 2023",
        description:
            "Validated knowledge of IT services and their uses in the AWS Cloud.",
        image: "/assets/img/aws-practitioner.png",
    },
];

export const projects: Project[] = [
    {
        title: "Personal LAN Infrastructure and Home Server",
        key_words: ["FTP", "WireGuard VPN", "Backup", "Linux", "Wi-Fi mesh"],
        date: "2025",
        description:
            "Home network and server setup with FTP, WireGuard VPN for remote access, automated backups, and a Wi-Fi mesh covering the whole home.",
    },
    {
        title: "Custom Arch Linux Environment",
        key_words: ["Arch Linux", "Niri", "Hyprland", "Ghostty", "SDDM", "GRUB", "theming"],
        date: "2025",
        description:
            "Fully customized Arch Linux build: Niri and Hyprland compositors, Ghostty terminal, and consistent theming across SDDM and GRUB.",
    },
    {
        title: "Portfolio",
        key_words: ["Next.js", "TailwindCSS", "TypeScript", "GitHub"],
        date: "2026",
        description:
            "Personal portfolio built with Next.js and TailwindCSS, styled as a Kanagawa-themed terminal, hosted on GitHub Pages at hawk-dude.github.io.",
    },
];
