const projects = [
  {
    number: "01",
    name: "CodeFlow",
    category: "Developer dashboard and analytics platform",
    year: "Independent concept · 2026",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1500&q=85",
    alt: "Laptop screen showing software development tools and code",
    className: "project-daybreak",
  },
  {
    number: "02",
    name: "System Studio",
    category: "Modern frontend architecture for product teams",
    year: "Independent concept · 2026",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85",
    alt: "Programmer workspace with monitors, code, and engineering setup",
    className: "project-objects",
  },
  {
    number: "03",
    name: "DevLens",
    category: "Observability and workflow tooling for engineers",
    year: "Independent concept · 2026",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85",
    alt: "Collaborative software engineering team reviewing work on screens",
    className: "project-ground",
  },
];

const profile = {
  name: "Ashish Rawat",
  profession: "Web & App Developer",
  location: "India",
  phone: "+91 9667488584",
  email: "ashish.rawat@example.com",
  availability: "Open to freelance and full-time roles",
  summary:
    "I build clean, user-focused digital experiences that turn ideas into meaningful products.",
  bio:
    "I am a frontend developer and UI designer who enjoys crafting clean, modern interfaces and thoughtful interactions. I like working on projects where design, usability, and technology come together to create a smooth user experience.",
  skills: [
    "HTML & CSS",
    "JavaScript & TypeScript",
    "React & Next.js",
    "Responsive Design",
    "UI/UX Design",
    "Problem Solving",
  ],
  interests: ["Web Design", "Creative Tech", "Product Thinking", "Learning New Tools"],
  details: [
    { label: "Location", value: "India" },
    { label: "Phone", value: "+91 9667488584" },
    { label: "Email", value: "ashish.rawat@example.com" },
    { label: "Status", value: "Available" },
  ],
  socials: {
    github: "https://github.com/ashishrawat",
    linkedin: "https://www.linkedin.com/in/ashishrawat",
  },
};

export default function Home() {
  return (
    <>
      <header className="site-header shell">
        <div className="header-row">
          <a className="brand" href="#top" aria-label="Home">
            <span className="brand-mark" aria-hidden="true">P</span>
          </a>
          <div className="nav-group">
            <nav className="main-nav" aria-label="Main navigation">
              <a href="#work">Work</a>
              <a href="#about">About</a>
              <a className="nav-phone" href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
              <a className="nav-contact" href="#contact">Let&apos;s talk <span aria-hidden="true">↗</span></a>
            </nav>
            <div className="nav-socials" aria-label="Social links">
              <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" title="GitHub">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.6-4.04-1.6-.55-1.39-1.35-1.76-1.35-1.76-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.84 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.92 0-1.31.46-2.38 1.22-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.76.84 1.22 1.91 1.22 3.22 0 4.6-2.82 5.61-5.5 5.91.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"/></svg>
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" title="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.5 9.96h2.9V18H5.5V9.96Zm5.2 0h2.77v1.13h.04c.39-.74 1.33-1.52 2.74-1.52 2.92 0 3.46 1.92 3.46 4.41V18h-2.9v-16.8c0-1.52-.03-3.47-2.11-3.47-2.12 0-2.44 1.65-2.44 3.35V18h-2.9V9.96Z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Portfolio</p>
            <h1 id="hero-title">Hi, I&apos;m <em>{profile.name}</em></h1>
            <div className="hero-lower">
              <p className="hero-description">I am a {profile.profession.toLowerCase()} building modern digital experiences for the web and mobile. {profile.summary}</p>
              <a className="text-link" href="#about">About me <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="hero-image" role="img" aria-label="Software engineering workspace with coding setup and technical tools">
            <span className="image-caption">Building thoughtful products with code.</span>
            <span className="image-index">ENGINEERING / 2026</span>
          </div>
          <div className="hero-footnote"><span>Good ideas, well made</span><span>For the curious</span><span className="hero-star" aria-hidden="true">✳</span></div>
        </section>

        <section className="bio-section shell" id="bio" aria-labelledby="bio-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Bio information</p>
              <h2 id="bio-title">About me<span className="heading-period">.</span></h2>
            </div>
          </div>

          <div className="bio-layout">
            <div className="bio-card">
              <p className="bio-label">Profile</p>
              <h3>{profile.name}</h3>
              <p className="bio-role">{profile.profession}</p>

              <ul className="bio-meta" aria-label="Profile information">
                {profile.details.map((detail) => (
                  <li key={detail.label}>
                    <span>{detail.label}</span>
                    <strong>{detail.value}</strong>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bio-copy">
              <p>{profile.bio}</p>
              <div className="bio-tags" aria-label="Personal interests">
                {profile.interests.map((interest) => (
                  <span key={interest}>{interest}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="work-section shell" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A few things, made with care</p>
              <h2 id="work-title">Selected work<span className="heading-period">.</span></h2>
            </div>
            <p className="section-aside">Small studies in making the everyday<br />a little more considered.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project ${project.className}`} key={project.number}>
                <div
                  className="project-image"
                  role="img"
                  aria-label={project.alt}
                  style={{ backgroundImage: `url("${project.image}")` }}
                >
                  <span className="project-number">{project.number}</span>
                  <span className="project-image-label">A CONCEPT STUDY</span>
                </div>
                <div className="project-details">
                  <div>
                    <h3>{project.name}</h3>
                    <p>{project.category}</p>
                  </div>
                  <span className="project-year">{project.year}</span>
                </div>
              </article>
            ))}
            <div className="project-note" aria-label="More work in progress">
              <span className="note-spark" aria-hidden="true">✳</span>
              <p>Good things<br />take <em>curiosity.</em></p>
              <span className="note-small">More experiments are taking shape.</span>
            </div>
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="about-inner shell">
            <div className="about-label">
              <p className="eyebrow">About me</p>
              <span className="about-index">01 — 03</span>
            </div>
            <div className="about-content">
              <h2 id="about-title">I design and build <em>digital experiences</em> with clarity and purpose.</h2>
              <p>
                I am {profile.name}, a {profile.profession.toLowerCase()} focused on creating clean,
                thoughtful, and user-friendly web and app experiences. I enjoy turning ideas into
                polished products that are easy to use and visually engaging. {profile.availability}.
              </p>
              <div className="skills" aria-label="Professional skills">
                {profile.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
            <div className="about-stamp" aria-hidden="true"><span>MADE WITH</span><strong>intent</strong><span>AND A LITTLE WONDER</span></div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-inner shell">
            <p className="eyebrow">Have a good one in mind?</p>
            <h2 id="contact-title">Let&apos;s make<br /><em>something matter.</em></h2>
            <div className="contact-links">
              <a className="contact-link" href="mailto:hello@example.com">hello@example.com <span aria-hidden="true">↗</span></a>
              <a className="contact-link" href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone} <span aria-hidden="true">↗</span></a>
              <a className="contact-link" href={profile.socials.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
              <a className="contact-link" href={profile.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            </div>
            <div className="contact-orbit" aria-hidden="true">✳</div>
          </div>
        </section>
      </main>

      <footer className="site-footer shell">
        <span>© 2026 Ashish Rawat</span>
        <span>Made with care, and a little bit of code.</span>
        <a href="#top">Back to the top ↑</a>
      </footer>
    </>
  );
}
