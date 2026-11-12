/* =====================================================================
   EDIT YOUR CONTENT HERE. The website is built from this object.
   Leave a value empty ("") or inside [square brackets] and that item
   (or the whole section) is hidden automatically.
   ===================================================================== */
const portfolioData = {
  personal: {
    name: "Twinkle",
    title: "IT Enthusiast",
    location: "Kanpur Nagar, Uttar Pradesh, India",
    email: "twinklegautam81@gmail.com",
    phone: "7052677308",            // delete the number to hide it from the site
    linkedin: "https://www.linkedin.com/in/twinkle-gautam-349576199",
    github: "https://github.com/twinkle-0812",
    photo: "assets/images/profile.jpg",
    resume: "assets/documents/resume.pdf",
    intro: "I am a fresher pursuing CITS in the CSA trade at NSTI Kanpur. I am building my skills in HTML, JavaScript and Python, and I enjoy learning new technology.",
    about: "I am Twinkle from Kanpur Nagar. I completed my ITI at Government ITI Kalyanpur and I am now pursuing CITS (Craft Instructor Training Scheme) in the CSA trade at NSTI Kanpur. I am learning web development with HTML, CSS and JavaScript, along with Python, MS Office and Excel. I am looking for an opportunity in the IT sector where I can learn and contribute through teamwork."
  },
  education: [
    { degree: "CITS (Craft Instructor Training Scheme)", trade: "CSA", place: "NSTI Kanpur", period: "Session 2026–27", current: true },
    { degree: "ITI", trade: "COPA", place: "Government ITI Kalyanpur", period: "Passed 2026", current: false }
  ],
  skills: {
    "Core trade skills": ["HTML", "CSS", "JavaScript"],
    "Computer skills": ["MS Office", "Excel", "Internet"],
    "Software & tools": ["Python"],
    "Soft skills": ["Teamwork", "Adaptability", "Empathy", "Writing"]
  },
  // Projects stay hidden until a project has no [square bracket] text.
  projects: [
    { name: "[Project Name]", description: "[What does the project do?]", tech: ["[Tools used]"], contribution: "[What did you do?]", image: "[assets/images/project1.jpg]" }
  ],
  training: [
    { org: "Centum Foundation", duration: "15 days", role: "Trainee", skills: ["Communication"] }
  ],
  certifications: [
    { name: "AI Literacy", issuer: "IBM SkillsBuild", year: "2026", link: "https://www.credly.com/go/roL52Ah2", file: "assets/documents/ai-literacy-certificate.pdf" },
    { name: "O Level", issuer: "NIELIT", year: "2025", link: "" },
    { name: "CCC (Course on Computer Concepts)", issuer: "NIELIT", year: "2025", link: "" }
  ]
};

/* ===================== Helpers ===================== */
const $ = (s, el = document) => el.querySelector(s);
const real = v => typeof v === "string" ? v.trim() !== "" && !/\[.*\]/.test(v) : Array.isArray(v) ? v.length > 0 && v.every(real) : !!v;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const ext = 'target="_blank" rel="noopener noreferrer"';
const tags = list => `<div class="tags">${list.map(t => `<span>${esc(t)}</span>`).join("")}</div>`;
const d = portfolioData, p = d.personal;

/* ===================== Section builders ===================== */
const projects = d.projects.filter(x => real(x.name) && real(x.description) && real(x.contribution));
const sections = [];   // each: { id, label, html }

sections.push({ id: "about", label: "About", html: `<div class="about"><p>${esc(p.about)}</p><p style="margin-top:.8rem;color:var(--muted)">Location: ${esc(p.location)}</p></div>` });

sections.push({ id: "education", label: "Education", html: `<div class="grid">${d.education.map(e => `
  <article class="card">${e.current ? '<span class="badge">Pursuing</span>' : ""}
    <h3>${esc(e.degree)}</h3>
    <p class="meta">${real(e.trade) ? "Trade: " + esc(e.trade) + "<br>" : ""}${esc(e.place)}<br>${esc(e.period)}</p>
  </article>`).join("")}</div>` });

const skillGroups = Object.entries(d.skills).filter(([, v]) => v.length);
sections.push({ id: "skills", label: "Skills", html: `<div class="grid">${skillGroups.map(([g, v]) => `
  <article class="card"><h3>${esc(g)}</h3>${tags(v)}</article>`).join("")}</div>` });

if (projects.length) sections.push({ id: "projects", label: "Projects", html: `<div class="grid">${projects.map(x => `
  <article class="card">${real(x.image) ? `<img src="${esc(x.image)}" alt="${esc(x.name)} screenshot" loading="lazy">` : ""}
    <h3>${esc(x.name)}</h3><p>${esc(x.description)}</p>
    ${real(x.tech) ? tags(x.tech) : ""}
    <p class="meta" style="margin-top:.8rem"><b>My contribution:</b> ${esc(x.contribution)}</p>
  </article>`).join("")}</div>` });

const training = d.training.filter(t => real(t.org));
if (training.length) sections.push({ id: "training", label: "Training", html: `<div class="grid">${training.map(t => `
  <article class="card"><h3>${esc(t.org)}</h3>
    <p class="meta">${esc(t.role)} &middot; ${esc(t.duration)}</p>
    ${real(t.skills) ? `<p style="margin-top:.6rem">Skills learned:</p>${tags(t.skills)}` : ""}
  </article>`).join("")}</div>` });

const certs = d.certifications.filter(c => real(c.name));
if (certs.length) sections.push({ id: "certifications", label: "Certifications", html: `<div class="grid">${certs.map(c => `
  <article class="card"><h3>${esc(c.name)}</h3>
    <p class="meta">${esc(c.issuer)} &middot; ${esc(c.year)}</p>
    ${real(c.link) ? `<a class="btn ghost" href="${esc(c.link)}" ${ext}>View Credential</a>` : ""}
    ${real(c.file) ? `<a class="btn ghost" href="${esc(c.file)}" ${ext}>View Certificate</a>` : ""}
  </article>`).join("")}</div>` });

const contacts = [
  real(p.email) && ["Email", p.email, `mailto:${p.email}`, ""],
  real(p.phone) && ["Phone", p.phone, `tel:+91${p.phone.replace(/\D/g, "").slice(-10)}`, ""],
  real(p.linkedin) && ["LinkedIn", "twinkle-gautam", p.linkedin, ext],
  real(p.github) && ["GitHub", "twinkle-0812", p.github, ext]
].filter(Boolean);
sections.push({ id: "contact", label: "Contact", html: `<div class="contact-list">${contacts.map(c => `
  <a class="card" href="${esc(c[2])}" ${c[3]}><b>${c[0]}</b>${esc(c[1])}</a>`).join("")}</div>
  ${real(p.email) ? `<p style="margin-top:1.5rem"><a class="btn primary" href="mailto:${esc(p.email)}">Send Email</a></p>` : ""}` });

/* ===================== Render page ===================== */
const initial = esc(p.name.charAt(0));
const hero = `<section class="hero" id="home"><div class="wrap">
  <div><p class="hello">Hello, I am</p><h1>${esc(p.name)}</h1>
    <p class="role" id="role" aria-label="${esc(p.title)}"></p>
    <p class="lead">${esc(p.intro)}</p>
    <div class="btns">
      ${real(p.resume) ? `<a class="btn primary" href="${esc(p.resume)}" download="Twinkle_Resume.pdf">Download Resume</a>` : ""}
      <a class="btn ghost" href="#contact">Contact Me</a>
      ${projects.length ? '<a class="btn ghost" href="#projects">View Projects</a>' : ""}
    </div></div>
  <div class="photo" id="photo" role="img" aria-label="Photo of ${esc(p.name)}">
    <img src="${esc(p.photo)}" alt="Portrait of ${esc(p.name)}"></div>
</div></section>`;

$("#app").innerHTML = hero + sections.map(s => `<section id="${s.id}"><div class="wrap"><h2>${s.label}</h2>${s.html}</div></section>`).join("");
$("#footer").innerHTML = `&copy; ${new Date().getFullYear()} ${esc(p.name)}`;
$("#nav").innerHTML = `<div class="wrap"><a class="logo" href="#home">${esc(p.name)}</a>
  <ul id="links">${sections.map(s => `<li><a href="#${s.id}">${s.label}</a></li>`).join("")}</ul>
  <div class="tools"><button class="icon-btn" id="themeBtn" aria-label="Toggle light and dark theme"></button>
  <button class="icon-btn" id="menuBtn" aria-label="Open menu" aria-expanded="false">&#9776;</button></div></div>`;

/* Photo fallback: show the initial if the image is missing */
$("#photo img").addEventListener("error", e => { e.target.remove(); $("#photo").append(initial); });

/* Title typing effect (full text at once if reduced motion is on) */
const role = $("#role");
if (matchMedia("(prefers-reduced-motion: reduce)").matches) role.textContent = p.title;
else { let i = 0; (function type() { role.textContent = p.title.slice(0, ++i); if (i < p.title.length) setTimeout(type, 90); })(); }

/* Theme toggle: saved choice, otherwise system preference */
const themeBtn = $("#themeBtn");
function setTheme(t) {
  document.documentElement.dataset.theme = t;
  themeBtn.textContent = t === "dark" ? "☀" : "☾";
  try { localStorage.setItem("theme", t); } catch (e) {}
}
let saved = null; try { saved = localStorage.getItem("theme"); } catch (e) {}
setTheme(saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
themeBtn.onclick = () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");

/* Mobile menu */
const menuBtn = $("#menuBtn"), links = $("#links");
menuBtn.onclick = () => menuBtn.setAttribute("aria-expanded", links.classList.toggle("open"));
links.addEventListener("click", e => { if (e.target.tagName === "A") { links.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); } });

/* Highlight the nav link of the section on screen */
const io = new IntersectionObserver(es => es.forEach(en => {
  if (en.isIntersecting) document.querySelectorAll("#links a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section").forEach(s => io.observe(s));

/* Back to top */
const toTop = $("#toTop");
addEventListener("scroll", () => toTop.hidden = scrollY < 500);
toTop.onclick = () => scrollTo({ top: 0 });
