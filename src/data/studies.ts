export const studies = [
  {
    title: "B.Tech. in Computer Science & Engineering (Cyber Security & Digital Forensics",
    institution: "VIT BHOPAL University, India",
    description:
      "Focused on core computer science fundamentals alongside applied cybersecurity. Coursework and projects covered systems, networks, security engineering, and digital forensics, with strong emphasis on real-world problem solving and applied research.",
    tags: [
      "Algorithms",
      "Operating Systems",
      "Databases",
      "Computer Networks",
      "Cybersecurity,"
    ],
  },
{
  title: "Senior Secondary (Class XII) – Science (PCM)",
  institution: "State Board Bihar, India",
  description:
    "Completed senior secondary education with a focus on Physics, Chemistry, and Mathematics, developing strong analytical and quantitative foundations.",
  tags: ["Physics", "Chemistry", "Mathematics"],
},

];

export type StudyItem = (typeof studies)[number];

