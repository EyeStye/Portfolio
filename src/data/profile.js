export const profile = {
  name: "Ayush Yadav",
  role: "Computer Science Undergraduate at IIT Patna",
  tagline: "Competitive Programmer · Software Developer",
  email: "ayushthe8055@gmail.com",
  resumeUrl: "/resume.pdf",
  profileImage: "/profile.png",
  codeforcesHandle: "Primed",
  socials: {
    github: "https://github.com/eyestye",
    linkedin: "https://linkedin.com/in/ayushyadav50",
    codeforces: "https://codeforces.com/profile/Primed",
    leetcode: "https://leetcode.com/not_primed",
    email: "mailto:ayushthe8055@gmail.com",
  },
};

export const about = {
  bio: "I'm a B.Tech Computer Science student at IIT Patna, drawn to the parts of engineering that reward precision — algorithms, systems programming, and full-stack development. Competitive programming taught me to think in constraints; building software taught me to think in systems. I like closing the gap between the two.",
  points: [
    "B.Tech in Computer Science, IIT Patna — batch of 2028",
    "Focused on algorithms, systems programming, and full-stack development",
    "Active competitive programmer across Codeforces, LeetCode, and CodeChef",
  ],
};

export const cpStats = [
  {
    platform: "Codeforces",
    handle: "Specialist",
    rating: 1270,
    label: "Peak Rating",
    icon: "codeforces",
  },
  {
    platform: "LeetCode",
    handle: "Knight",
    rating: 1886,
    label: "Peak Rating",
    icon: "leetcode",
  },
  {
    platform: "CodeChef",
    handle: "3★ Coder",
    rating: 1624,
    label: "Peak Rating",
    icon: "codechef",
  },
];

export const achievements = [
  { value: "1400+", label: "Algorithmic problems solved" },
  { value: "384", label: "ICPC Prelims 2025 — All India Rank" },
  { value: "3941", label: "JEE Main — All India Rank" },
  { value: "5581", label: "JEE Advanced — All India Rank" },
];

export const skills = {
  Languages: ["C", "C++", "Python", "JavaScript", "SQL"],
  "Frameworks & Technologies": [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "HTML",
    "CSS",
  ],
  "Tools & Platforms": ["Git", "GitHub", "Linux", "VS Code", "LaTeX"],
};

export const projects = [
  {
    title: "FixTown",
    tech: "React · Node.js · PostgreSQL/PostGIS",
    description:
      "A civic-tech platform where citizens report local infrastructure issues — potholes, manholes, utility faults — and municipalities track, prioritize, and resolve them on a live map.",
    features: [
      "Geo-tagged issue reporting with photo upload",
      "Interactive Leaflet map with category filters",
      "Citizen upvoting and priority ranking",
      "Role-based auth for citizens and officers",
      "Status tracking with audit log",
      "In-app notifications on status change",
      "Officer analytics dashboard",
    ],
    github: "https://github.com/eyestye/fixtown",
    demo: "https://fixtown.vercel.app",
    status: "complete",
  },
  {
    title: "Two-Pass Assembler and Emulator",
    tech: "C",
    description:
      "A custom assembler and emulator implemented in C that converts assembly programs into machine code and simulates their execution end to end.",
    features: [
      "Two-pass assembly process",
      "Symbol table management",
      "Label resolution",
      "Machine code generation",
      "Instruction execution",
      "Trace generation",
      "Runtime error handling",
    ],
    github: "https://github.com/eyestye/Simplex_Assembler",
    demo: null,
    status: "complete",
  },
  {
    title: "Coming Soon",
    tech: null,
    description: "The next build is in progress. Check back soon.",
    features: [],
    github: null,
    demo: null,
    status: "placeholder",
  },
];

export const education = {
  institute: "Indian Institute of Technology, Patna",
  degree: "Bachelor of Technology in Computer Science and Engineering",
  duration: "2024 — Present",
  cpi: "8.71",
};

export const timeline = [
  {
    year: "2024",
    title: "Joined IIT Patna",
    description: "Began B.Tech in Computer Science and Engineering",
  },
  {
    year: "2025",
    title: "ICPC Prelims 2025",
    description: "Ranked 384 nationally in the ICPC preliminary round.",
  },
  {
    year: "2026",
    title: "Competitive Programming Milestones",
    description:
      "Reached Specialist on Codeforces, Knight on LeetCode, and 3★ on CodeChef.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Competitive Programming", href: "#competitive-programming" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];