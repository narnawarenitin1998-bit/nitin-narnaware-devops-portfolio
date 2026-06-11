import { TypeAnimation } from "react-type-animation";
import "./App.css";
import heroImage from "./assets/hero.PNG";

import { motion } from "framer-motion";
import { FaGithub, FaAws, FaDocker } from "react-icons/fa";
import { SiTerraform, SiKubernetes, SiLinux, SiGit } from "react-icons/si";

function App() {
  return (
    
<>
  <nav className="navbar">
    <div className="logo">NITIN</div>

    <div className="nav-links">
      <a href="#home">Home</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#experience">Experience</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>

  {/* HERO SECTION */}
      {/* HERO SECTION */}
      <section className="hero" id="home">
        <motion.div
          className="hero-text"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>NITIN NARNAWARE</h1>

 <TypeAnimation
  sequence={[
    "DEVOPS ENGINEER",
    2000,
    "AWS CLOUD ENGINEER",
    2000,
    "LINUX ADMINISTRATOR",
    2000,
    "CI/CD AUTOMATION",
    2000,
  ]}
  wrapper="h2"
  className="typing-text"
  speed={50}
  repeat={Infinity}
/>

          <p>
            Passionate DevOps Engineer with hands-on experience in AWS,
            Linux, Docker, Jenkins, Terraform, Git, Kubernetes and CI/CD
            Automation.
          </p>
          <div className="tech-strip">
  <span>AWS</span>
  <span>DOCKER</span>
  <span>KUBERNETES</span>
  <span>TERRAFORM</span>
  <span>JENKINS</span>
  <span>LINUX</span>
</div>

          <div className="btns">

  <a href="/resume.pdf" target="_blank" rel="noreferrer">
    <button className="btn">Resume</button>
  </a>

  <a
    href="https://github.com/narnawarenitin1998-bit"
    target="_blank"
    rel="noreferrer"
  >
    <button className="btn">GitHub</button>
  </a>

  <a
    href="https://www.linkedin.com/in/nitin-narnaware-devops/"
    target="_blank"
    rel="noreferrer"
  >
    <button className="btn">LinkedIn</button>
  </a>

</div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={heroImage} alt="DevOps Hero" />
        </motion.div>
      </section>

      {/* SKILLS */}
      <section className="skills" id="skills">
        <h1>TECHNICAL SKILLS</h1>

        <div className="skill-grid">
          <div className="skill-card">
            <FaAws size={50} />
            <h3>AWS</h3>
          </div>

          <div className="skill-card">
            <SiLinux size={50} />
            <h3>Linux</h3>
          </div>

          <div className="skill-card">
            <FaDocker size={50} />
            <h3>Docker</h3>
          </div>

          <div className="skill-card">
            <SiTerraform size={50} />
            <h3>Terraform</h3>
          </div>

          <div className="skill-card">
            <SiGit size={50} />
            <h3>Git</h3>
          </div>

          <div className="skill-card">
  <FaGithub size={50} />
  <h3>Jenkins</h3>
</div>

          <div className="skill-card">
            <SiKubernetes size={50} />
            <h3>Kubernetes</h3>
          </div>
        </div>
      </section>
{/* PROJECTS */}
<section className="skills" id="projects">
  <h1>PROJECTS</h1>

  <div className="skill-grid">

    <div className="skill-card">
      <h3>AWS Backup System</h3>

      <p>
        Automated backup solution using Bash scripting,
        AWS CLI and Amazon S3.
      </p>

      <p>
        <strong>Tech Stack:</strong>
        AWS CLI | Bash | S3
      </p>

      <ul>
        <li>✓ Automated Backups</li>
        <li>✓ Log Monitoring</li>
        <li>✓ Cron Scheduling</li>
      </ul>

      <a
        href="https://github.com/narnawarenitin1998-bit"
        target="_blank"
        rel="noreferrer"
      >
        <button className="btn">View Code</button>
      </a>
    </div>

    <div className="skill-card">
      <h3>Docker Multi-Tier Application</h3>

      <p>
        Containerized application deployed on AWS EC2
        using Docker.
      </p>

      <p>
        <strong>Tech Stack:</strong>
        Docker | Nginx | AWS EC2
      </p>

      <ul>
        <li>✓ Multi Container Setup</li>
        <li>✓ Reverse Proxy</li>
        <li>✓ EC2 Deployment</li>
      </ul>

      <a
        href="https://github.com/narnawarenitin1998-bit"
        target="_blank"
        rel="noreferrer"
      >
        <button className="btn">View Code</button>
      </a>
    </div>

    <div className="skill-card">
      <h3>Jenkins CI/CD Pipeline</h3>

      <p>
        Automated deployment workflow using Jenkins,
        Docker and GitHub Webhooks.
      </p>

      <p>
        <strong>Tech Stack:</strong>
        Jenkins | Docker | GitHub
      </p>

      <ul>
        <li>✓ Automated Build</li>
        <li>✓ Automated Deploy</li>
        <li>✓ Webhook Integration</li>
      </ul>

      <a
        href="https://github.com/narnawarenitin1998-bit"
        target="_blank"
        rel="noreferrer"
      >
        <button className="btn">View Code</button>
      </a>
    </div>

  </div>
</section>

{/* EXPERIENCE */}
<section className="experience" id="experience">
  <h1>EXPERIENCE</h1>

  <div className="timeline">

    <div className="timeline-card">
      <h2>DevOps Intern</h2>
      <h3>Novitas Webworks</h3>
      <p>Jan 2026 - Jun 2026</p>

      <ul>
        <li>AWS Cloud Infrastructure Support</li>
        <li>Linux Server Administration</li>
        <li>Docker Container Deployment</li>
        <li>Jenkins CI/CD Automation</li>
      </ul>
    </div>

    <div className="timeline-card">
      <h2>Independent DevOps Trainee</h2>
      <h3>Self Learning & Projects</h3>
      <p>2025 - Present</p>

      <ul>
        <li>AWS Hands-on Projects</li>
        <li>Terraform Infrastructure Automation</li>
        <li>Docker & Kubernetes Practice</li>
        <li>Bash Scripting & CI/CD</li>
      </ul>
    </div>

    <div className="timeline-card">
      <h2>Assistant Executive</h2>
      <h3>Tata Advanced Systems Ltd</h3>
      <p>Sep 2017 - Aug 2026</p>

      <ul>
        <li>Root Cause Analysis (RCA)</li>
        <li>Process Improvement</li>
        <li>Cross Functional Coordination</li>
        <li>AS9100 Quality Standards</li>
      </ul>
    </div>

  </div>
</section>

{/* CONTACT */}
<section className="skills" id="contact">
  <h1>CONTACT</h1>

  <div className="contact-card">

    <h3>📧 nitin.narnaware.cloud@gmail.com</h3>

    <h3>📞 +91 7666350155</h3>

    <h3>📍 Nagpur, Maharashtra</h3>

    <h3>
      <a
        href="https://github.com/narnawarenitin1998-bit"
        target="_blank"
        rel="noreferrer"
      >
        💻 GitHub Profile
      </a>
    </h3>

    <h3>
      <a
        href="https://www.linkedin.com/in/nitin-narnaware-devops/"
        target="_blank"
        rel="noreferrer"
      >
        🔗 LinkedIn Profile
      </a>
    </h3>

  </div>
</section>

<footer className="footer">
  <h3>Nitin Narnaware</h3>

  <p>
    AWS • Linux • Docker • Jenkins • Terraform • Git • Kubernetes • CI/CD
  </p>

  <p>
    © {new Date().getFullYear()} Nitin Narnaware.
    All Rights Reserved.
  </p>
</footer>

</>
  );
}

export default App;