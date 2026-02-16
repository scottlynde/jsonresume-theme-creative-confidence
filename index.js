const css = `:root {
  --text: #0f172a;
  --muted: #334155;
  --line: #94a3b8;
  --heading: #0b1220;
  --header-bg: #0f274d;
  --right-bg: #edf4ff;
  --right-text: #0f274d;
}
* { box-sizing: border-box; }
html, body {
  margin: 0;
  padding: 0;
  color: var(--text);
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.22;
  font-size: 10pt;
}
.resume {
  max-width: 8.5in;
  margin: 0 auto;
  padding: 0.28in 0.32in;
}
.header {
  display: grid;
  grid-template-columns: 1fr 88px;
  gap: 10px;
  align-items: start;
  margin-bottom: 8px;
  background: var(--header-bg);
  border: 1px solid #0b1f3f;
  padding: 10px 10px 8px;
}
.header-main {
  text-align: center;
}
.name {
  margin: 0;
  font-size: 22pt;
  line-height: 1.05;
  color: #f8fbff;
}
.label {
  margin: 3px 0 0;
  font-size: 10.4pt;
  color: #e6f0ff;
  font-style: italic;
}
.layout {
  display: grid;
  grid-template-columns: 1.7fr 1fr;
  gap: 0.16in;
  align-items: start;
}
.right-panel {
  background: var(--right-bg);
  color: var(--right-text);
  padding: 8px 8px 6px;
  border: none;
  line-height: 1.14;
}
.right-panel .section {
  margin-top: 7px;
}
.right-panel .section-title {
  color: var(--right-text);
}
.right-panel .compact-list li,
.right-panel .contact-list li,
.right-panel .skill-group,
.right-panel a {
  color: var(--right-text);
}
.right-panel .compact-list li,
.right-panel .contact-list li,
.right-panel .skill-group,
.right-panel .compact-sub li {
  font-size: 9.15pt;
}
.photo-wrap {
  width: 68px;
  height: 68px;
  border: 1px solid #93c5fd;
  background: #eff6ff;
}
.photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.photo-empty {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 8.4pt;
  color: #1d4ed8;
  padding: 6px;
}
.section {
  margin-top: 7px;
}
.section-title {
  margin: 0 0 4px;
  font-size: 15.2pt;
  font-weight: 700;
  color: var(--heading);
}
.summary {
  margin: 0;
  text-align: left;
  font-size: 10.05pt;
}
.item {
  margin-bottom: 5px;
  page-break-inside: avoid;
}
.item-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}
.item-role {
  margin: 0;
  font-size: 10.5pt;
  font-weight: 700;
}
.item-org {
  margin: 0.5px 0 0;
  color: var(--muted);
  font-size: 9.5pt;
  font-style: italic;
}
.item-dates {
  white-space: nowrap;
  color: var(--muted);
  font-size: 9.15pt;
}
.item-summary {
  margin: 1px 0 2px;
  color: #7c8798;
  font-style: italic;
}
.bullets {
  margin: 2px 0 0 13px;
  padding: 0;
}
.bullets li {
  margin: 0 0 1px;
  line-height: 1.12;
}
.contact-list,
.compact-list {
  margin: 0;
  padding: 0 0 0 14px;
  list-style: disc;
}
.contact-list {
  padding-left: 0;
  list-style: none;
}
.contact-list li,
.compact-list li {
  margin-bottom: 5px;
  font-size: 9.7pt;
}
.contact-list li {
  margin-bottom: 2px;
  line-height: 1.08;
}
.contact-icon {
  display: inline-flex;
  width: 0.82em;
  height: 0.82em;
  margin-right: 4px;
  vertical-align: -0.08em;
}
.contact-icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.compact-sub {
  margin: 1px 0 0 14px;
  padding: 0;
}
.compact-sub li {
  font-size: 9.35pt;
  margin-bottom: 0;
}
.compact-list > li {
  margin-bottom: 7px;
}
.cert-list > li {
  margin-bottom: 2px;
  line-height: 1.1;
}
.compact-list li::marker,
.bullets li::marker {
  color: var(--muted);
}
.skill-group {
  margin-bottom: 6px;
  font-size: 9.65pt;
}
.skill-name {
  font-weight: 700;
}
.skills-section,
.skills-section .section-title {
  break-inside: avoid;
  page-break-inside: avoid;
}
.skills-section .section-title {
  break-after: avoid;
  page-break-after: avoid;
}
a {
  color: inherit;
  text-decoration: none;
}
@media print {
  @page {
    size: Letter;
    margin: 0.32in;
  }
  .resume {
    max-width: none;
    margin: 0;
    padding: 0;
  }
  .layout,
  .section,
  .item,
  .bullets,
  .compact-list,
  .skills-section {
    break-inside: avoid;
    page-break-inside: avoid;
  }
}`;

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatDate(value) {
  if (!value) return "";
  const normalized = String(value).trim();
  if (!normalized) return "";

  const parsed = new Date(/^\d{4}-\d{2}$/.test(normalized) ? `${normalized}-01` : normalized);
  if (Number.isNaN(parsed.getTime())) return escapeHtml(value);
  return parsed.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function dateRange(start, end) {
  const startFormatted = formatDate(start);
  const endFormatted = formatDate(end);

  if (startFormatted && endFormatted) return `${startFormatted} - ${endFormatted}`;
  if (startFormatted) return `${startFormatted} - Present`;
  if (endFormatted) return endFormatted;
  return "";
}

function section(title, body, className = "") {
  if (!body) return "";
  return `<section class="section ${className}"><h2 class="section-title">${escapeHtml(title)}</h2>${body}</section>`;
}

function limit(text, maxChars) {
  const normalized = String(text || "").replace(/\s+/g, " ").trim();
  if (normalized.length <= maxChars) return normalized;
  return `${normalized.slice(0, maxChars - 1).trimEnd()}…`;
}

function profileIcon(profile = {}) {
  const network = String(profile.network || "").toLowerCase();
  const url = String(profile.url || "").toLowerCase();

  if (network.includes("linkedin") || url.includes("linkedin.com")) {
    return `<span class="contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24" role="img" focusable="false"><rect x="0" y="0" width="24" height="24" rx="3" fill="#111111"></rect><text x="12" y="17" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="12" font-weight="700" fill="#ffffff">in</text></svg></span>`;
  }

  if (network.includes("github") || url.includes("github.com")) {
    return `<span class="contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24" role="img" focusable="false"><circle cx="12" cy="12" r="12" fill="#111111"></circle><path d="M12 5.2c-3.85 0-6.97 3.12-6.97 6.97 0 3.08 2 5.7 4.77 6.62.35.06.48-.15.48-.34 0-.17-.01-.73-.01-1.33-1.94.42-2.35-.82-2.35-.82-.32-.8-.78-1.02-.78-1.02-.64-.44.05-.43.05-.43.71.05 1.08.73 1.08.73.63 1.08 1.65.77 2.06.59.06-.46.25-.77.45-.95-1.55-.18-3.18-.78-3.18-3.46 0-.76.27-1.38.72-1.87-.07-.18-.31-.91.07-1.9 0 0 .58-.19 1.92.71a6.7 6.7 0 0 1 3.49 0c1.33-.9 1.92-.71 1.92-.71.38.99.14 1.72.07 1.9.45.49.72 1.11.72 1.87 0 2.68-1.63 3.28-3.19 3.45.26.22.48.65.48 1.3 0 .95-.01 1.71-.01 1.95 0 .19.13.41.49.34A6.98 6.98 0 0 0 18.97 12.17c0-3.85-3.12-6.97-6.97-6.97Z" fill="#ffffff"></path></svg></span>`;
  }

  return "🌐︎ ";
}

function renderContactSection(basics = {}) {
  const lines = [];

  if (basics.phone) lines.push(`<li>☎︎ ${escapeHtml(basics.phone)}</li>`);
  if (basics.email) lines.push(`<li>✉︎ <a href="mailto:${escapeHtml(basics.email)}">${escapeHtml(basics.email)}</a></li>`);

  const location = [
    basics.location?.address,
    basics.location?.city,
    basics.location?.region,
    basics.location?.postalCode
  ].filter(Boolean).join(", ");

  if (location) lines.push(`<li>📍︎ ${escapeHtml(location)}</li>`);

  if (basics.url) lines.push(`<li>🌐︎ <a href="${escapeHtml(basics.url)}">${escapeHtml(basics.url)}</a></li>`);

  (basics.profiles || []).forEach((profile) => {
    if (!profile?.url) return;
    lines.push(`<li>${profileIcon(profile)}<a href="${escapeHtml(profile.url)}">${escapeHtml(profile.url)}</a></li>`);
  });

  return section("Contact", lines.length ? `<ul class="contact-list">${lines.join("")}</ul>` : "");
}

function renderSummary(basics = {}) {
  if (basics.summary) {
    return section("Summary", `<p class="summary">${escapeHtml(limit(basics.summary, 650))}</p>`);
  }

  if (basics.label) {
    return section("Summary", `<p class="summary">${escapeHtml(limit(basics.label, 650))}</p>`);
  }

  return "";
}

function renderProfessionalExperience(work = []) {
  if (!work.length) return "";

  const items = work.map((job) => {
    const title = job.position || "";
    const org = job.name ? `<p class="item-org">${escapeHtml(job.name)}</p>` : "";
    const details = [];

    if (job.summary) details.push(`<p class="item-summary">${escapeHtml(job.summary)}</p>`);
    if (Array.isArray(job.highlights) && job.highlights.length) {
      const bullets = job.highlights
        .map((highlight) => `<li>${escapeHtml(String(highlight).replace(/^\*\s*/, ""))}</li>`)
        .join("");
      details.push(`<ul class="bullets">${bullets}</ul>`);
    }

    return `
      <article class="item">
        <div class="item-head">
          <div>
            <h3 class="item-role">${escapeHtml(title)}</h3>
            ${org}
          </div>
          <div class="item-dates">${escapeHtml(dateRange(job.startDate, job.endDate))}</div>
        </div>
        ${details.join("")}
      </article>
    `;
  }).join("");

  return section("Professional Experience", items);
}

function renderEducation(education = []) {
  const items = education.map((item) => {
    const title = [item.studyType, item.area].filter(Boolean).join(" in ");
    const institution = item.institution ? `${item.institution}` : "";
    const courses = Array.isArray(item.courses) && item.courses.length
      ? `<ul class="compact-sub">${item.courses.map((course) => `<li>${escapeHtml(course)}</li>`).join("")}</ul>`
      : "";
    return `<li><strong>${escapeHtml(title)}</strong>${institution ? `, <em>${escapeHtml(institution)}</em>` : ""}${courses}</li>`;
  }).join("");

  return section("Education", `<ul class="compact-list edu-list">${items}</ul>`);
}

function renderCertificates(certificates = []) {
  if (!certificates.length) return "";
  const items = certificates
    .slice(0, 12)
    .map((cert) => {
      const certName = cert.name ? `<strong>${escapeHtml(cert.name)}</strong>` : "";
      const issuer = cert.issuer ? ` — <em>${escapeHtml(cert.issuer)}</em>` : "";
      return `<li>${certName}${issuer}</li>`;
    })
    .join("");
  return section("Certifications", `<ul class="compact-list cert-list">${items}</ul>`);
}

function renderSkills(skills = []) {
  if (!skills.length) return "";
  const blocks = skills.map((skill) => {
    const keywords = Array.isArray(skill.keywords)
      ? skill.keywords.slice(0, 12).join(", ")
      : "";
    return `
      <div class="skill-group">
        <span class="skill-name">${escapeHtml(skill.name)}:</span>
        <span>${escapeHtml(keywords)}</span>
      </div>
    `;
  }).join("");

  return section("Skills", `<div>${blocks}</div>`, "skills-section");
}

export function render(resume = {}) {
  const basics = resume.basics || {};
  const name = basics.name || "Resume";
  const label = basics.label ? `<p class="label">${escapeHtml(basics.label)}</p>` : "";
  const photo = basics.image
    ? `<img class="photo" src="${escapeHtml(basics.image)}" alt="${escapeHtml(name)} profile photo" />`
    : `<div class="photo-empty">Profile Photo</div>`;

  const leftColumn = [
    renderSummary(basics),
    renderProfessionalExperience(resume.work || []),
  ].join("");

  const rightColumn = [
    renderContactSection(basics),
    renderEducation(resume.education || []),
    renderCertificates(resume.certificates || []),
    renderSkills(resume.skills || []),
  ].join("");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(name)} - Resume</title>
  <style>${css}</style>
</head>
<body>
  <main class="resume">
    <header class="header" role="banner">
      <div class="header-main">
        <h1 class="name">${escapeHtml(name)}</h1>
        ${label}
      </div>
      <div class="photo-wrap" aria-label="Profile image">
        ${photo}
      </div>
    </header>
    <div class="layout">
      <div>${leftColumn}</div>
      <aside class="right-panel">${rightColumn}</aside>
    </div>
  </main>
</body>
</html>`;
}

export default { render };
