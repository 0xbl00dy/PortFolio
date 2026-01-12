import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Intern - Penetration Tester",
    company: "Cyber Secured India",
    region: "India",
    description:
      "Conducted black-box security assessments and identified multiple critical vulnerabilities. Documented security gaps across Active Directory, endpoint solutions, and patch management for remediation.",
    technologies: [
      "Kali Linux",
      "Metasploit",
      "Nmap",
      "Burp Suite",
      "OWASP Top 10",
      "Active Directory",
      "PowerShell",
      "Windows & Linux Internals",
      "Vulnerability Assessment",
      "Penetration Testing",
    ],
  },
  {
    title: "Intern - SIEM",
    company: "Sense Learner Technologies Pvt. Ltd",
    region: "India",
    description:
      "Monitored and analyzed security events using Splunk to support incident investigations. Performed network traffic analysis and assisted in improving firewall, proxy, IAM, and DLP controls.",
    technologies: [
      "Splunk",
      "SIEM",
      "Log Analysis",
      "Incident Response",
      "Network Traffic Analysis",
      "Firewalls",
      "Proxy Servers",
      "IAM",
      "DLP",
      "TCP/IP",
    ],
  },
  {
    title: "Offensive & Defensive Security Practitioner",
    company: "HackTheBox, TryHackMe & CTF's",
    region: "Global",
    description:
      "Built strong red and blue teaming expertise through hands-on labs and CTFs, solving 300+ machines. Achieved global rankings in Hack The Box and PicoCTF while strengthening system and network security skills.",
    technologies: [
      "Linux Privilege Escalation",
      "Windows Privilege Escalation",
      "Web Exploitation",
      "Network Enumeration",
      "Active Directory Attacks",
      "Blue Team Fundamentals",
      "SOC Analysis",
      "CTFs",
      "Threat Modeling",
      "MITRE ATT&CK",
    ],
  },
];


export type WorkItem = (typeof work)[number];

