import kpilLogo from "../assets/kpil_logo.png";
import kecLogo from "../assets/kec_logo.png";
import tataLogo from "../assets/tata_logo.png";
import transLogo from "../assets/trans-logo.png";
import sterliteLogo from "../assets/sterlite-logo.png";
import skipperLogo from "../assets/skipper.png";
import jyotiLogo from "../assets/jyoti-logo.png";
import bajajLogo from "../assets/bajaj_logo.png";
import director1 from "../assets/PP.jpg";
import team from "../assets/team2.png";
import client from "../assets/client.png";
import quality from "../assets/quality2.png";
import time from "../assets/ontime.png";

export const navbarOptions = [
  { label: "Home", path: "/" },
  // { label: "Projects", path: "#projects" },
  { label: "Clients", path: "#clients" },
  { label: "About", path: "/about" },
  { label: "Contact Us", path: "/contact" },
  { label: "FAQs", path: "/faq" },
];

export const AboutOption = [
  {
    tag: "people",
    url: "https://img.icons8.com/water-color/50/group-foreground-selected.png",
    upperText: "Passionate",
    lowerText: "Team",
  },
  {
    tag: "capacity",
    url: "https://img.icons8.com/?size=100&id=24735&format=png&color=3DD9EB",
    upperText: "33-800 kv",
    lowerText: "Capacity",
  },
  {
    tag: "projects",
    url: "https://img.icons8.com/pulsar-gradient/48/group-of-projects.png",
    upperText: "50+",
    lowerText: "Projects",
  },
  {
    tag: "client",
    url: "https://img.icons8.com/external-tal-revivo-solid-tal-revivo/96/external-group-of-board-members-discuss-sales-line-graph-meeting-solid-tal-revivo.png",
    upperText: "10+",
    lowerText: "Clients",
  },
];

export const homeAboutText = {
  text1:
    "We are SCCL & Associates, a leader in tower detailing, delivering precision, commitment, and quality. Our expertise extends to Transmission Towers, Substation Structures, Monopoles, and Railway Structures, serving clients across various sectors. We are SCCL & Associates, a leader in tower detailing, delivering precision, commitment, and quality. Our expertise extends to Transmission Towers, Substation Structures, Monopoles, and Railway Structures, serving clients across various sectors.",
  text2:
    "We are SCCL & Associates, a leader in tower detailing, delivering precision, commitment, and quality. Our expertise extends to Transmission Towers, Substation Structures, Monopoles, and Railway Structures, serving clients across various sectors.",
};

export const footerAddress = {
  addressLine1: "A-1914C , Spectrum@Metro , PHASE-1",
  addressLine2: "Noida Sector - 75, Uttar Pradesh- 201304",
  email: "info@scclassociates.in",
  email2: "ravi@scclassociates.in",
  mobile: "+91-9716361999 / 9818979933",
};

export const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "/about", label: "About" },
  // { href: "#projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

export const clientsData = [
  {
    logoPath: kpilLogo,
    name: "Kalpataru Projects International Limited",
    tags: "kpil logo",
  },
  {
    logoPath: kecLogo,
    name: "KEC International Ltd.",
    tags: "kec logo",
  },
  {
    logoPath: tataLogo,
    name: "Tata Projects",
    tags: "tata logo",
  },
  {
    logoPath: bajajLogo,
    name: "Bajaj Electricals",
    tags: "bajajLogo",
  },
  {
    logoPath: skipperLogo,
    name: "Skipper Limited",
    tags: "skipperLogo",
  },
  {
    logoPath: sterliteLogo,
    name: "Sterlite Power",
    tags: "sterliteLogo",
  },
  {
    logoPath: transLogo,
    name: "Transrail Limited",
    tags: "transLogo",
  },
  {
    logoPath: jyotiLogo,
    name: "Jyoti Structure Limited",
    tags: "jyotiLogo",
  },
];

export const serviceData = [
  {
    title: "Drafting and Detailing",
    descLine1: "CAD Drafting Services with Precision and Accuracy",
    descLine2:
      "2D and 3D Drafting for Comprehensive Visualization with Bocad software.",
    descLine3:
      "Detailing of Transmission Line & substation Structures with Attention to Detail ",
    path: "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/3DD9EB/external-transmission-tower-sustainable-energy-flatart-icons-outline-flatarticons.png",
  },
  {
    title: "Project Management",
    descLine1: "Efficient Project Planning and Scheduling ",
    descLine2: "Comprehensive Cost Estimation and Budgeting",
    descLine3: "Rigorous Quality Control and Assurance Processes",
    path: "https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-project-management-project-management-flaticons-flat-flat-icons-2.png",
  },
  {
    title: "Consultancy Services",
    descLine1: "Thorough Feasibility Studies for Informed Decision-Making",
    descLine2: "Expert Technical Consultation for Complex Projects",
    descLine3: "Regulatory Compliance Guidance for Seamless Project Execution",
    path: "https://img.icons8.com/external-wanicon-flat-wanicon/64/external-consultation-teamwork-wanicon-flat-wanicon.png",
  },
];

// team member
export const teamMembers = [
  {
    name: "Samir Chatterjee",
    photo: director1,
    role: "Co-Founder & Director",
    bio: "Samir Chatterjee, Co-Founder & Director of Engineering, brings over 30 years of engineering experience, including 20 years at SAE India Limited and roles at Zamil Steel, Tata Power, and KEC International. He leads the company’s engineering strategy, ensuring technical excellence and innovation across all projects, while also mentoring the technical team to foster growth and maintain the company’s reputation for high-quality engineering solutions. His leadership is pivotal in driving the company’s sustained growth.",
  },
  {
    name: "Ravi Jha",
    photo: director1,
    role: "Director",
    bio: "Ravi Jha, Chief Operating Officer (COO) and Co-Founder, has 8 years of experience with KEC International and Tata Projects. He specializes in optimizing operations and managing complex projects. Ravi oversees the company’s daily operations, ensuring efficiency and successful project execution, contributing significantly to the company’s operational excellence and growth.",
  },
];

// Why Choose sccl Section

export const reasons = [
  {
    title: "Passionate Team",
    description:
      "As a startup, we embrace change and adapt swiftly, ensuring flexibility in our services to meet your evolving needs.",
    imgSrc: team, // replace with your image path
  },
  {
    title: "Client-Centric Focus",
    description:
      "We thrive on innovation, integrating the latest technology and methodologies to deliver groundbreaking solutions.",
    imgSrc: client, // replace with your image path
  },
  {
    title: "Quality Assurance",
    description:
      "We maintain the highest standards through rigorous quality checks, assuring accuracy and reliability in every deliverable.",
    imgSrc: quality, // replace with your image path
  },
  {
    title: "Timely Delivery",
    description:
      "We are dedicated to meeting deadlines, ensuring your projects progress seamlessly and are completed on time.",
    imgSrc: time, // replace with your image path
  },
];

// vision

export const visionPillars = [
  {
    title: "Innovation",
    description:
      "We are committed to setting new standards in transmission line design and drawing, leveraging cutting-edge technology to deliver groundbreaking solutions.",
    bgColor: "bg-blue-100",
    bgImage: time,
  },
  {
    title: "Excellence",
    description:
      "Our expertise drives us to maintain the highest quality in every project, ensuring precision and reliability in tower detailing.",
    bgColor: "bg-green-100",
    bgImage: time,
  },
  {
    title: "Collaboration",
    description:
      "We believe in the power of strong relationships within the industry. Through teamwork and partnership, we create value and achieve shared success.",
    bgColor: "bg-yellow-100",
    bgImage: time,
  },
  {
    title: "Empowerment",
    description:
      "We are dedicated to training and mentoring the next generation of professionals, empowering them with the skills and knowledge to excel in tower designing.",
    bgColor: "bg-red-100",
    bgImage: time,
  },
];

// contact us
export const contactInfo = {
  address:
    "A-1914C, SPECTRUM @ METRO, PHASE-1, NOIDA, SECTOR - 75, Uttar Pradesh- 201304",
  contactNumbers: ["9716361999", "9818979933"],
  emails: ["info@scclassociates.in", "ravi@scclassociates.in"],
};
