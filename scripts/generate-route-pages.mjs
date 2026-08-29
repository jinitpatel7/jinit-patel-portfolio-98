import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const siteUrl = "https://www.jinitpatel.org";
const routes = [
  {
    path: "/projects",
    title: "Engineering Projects | Jinit Patel",
    description: "Explore Jinit Patel's aerospace engineering, CFD, aircraft design, additive manufacturing, and machine-learning projects.",
  },
  {
    path: "/experience",
    title: "Experience | Jinit Patel",
    description: "Jinit Patel's aerospace engineering experience across propulsion, mechanical design, research, student leadership, and hands-on fabrication.",
  },
  {
    path: "/gallery",
    title: "Photography Gallery | Jinit Patel",
    description: "A photography gallery by Jinit Patel, featuring landscapes, architecture, travel, city scenes, and everyday moments.",
  },
  {
    path: "/contact",
    title: "Contact | Jinit Patel",
    description: "Contact aerospace engineer Jinit Patel about engineering opportunities, research, collaboration, or portfolio projects.",
  },
  {
    path: "/projects/kaze-x1-rc-aircraft",
    title: "Kaze X1 RC Aircraft | Jinit Patel",
    description: "A fully custom, 3D-printed RC aircraft designed through CAD, aerodynamic simulation, fabrication, avionics integration, and flight testing.",
  },
  {
    path: "/projects/calorie-burn-predictor",
    title: "Calorie Burn Predictor | Jinit Patel",
    description: "A feed-forward neural-network project predicting calorie expenditure from physiological and activity features.",
  },
  {
    path: "/projects/plasma-thrust-vectoring",
    title: "Plasma-Induced Thrust Vectoring | Jinit Patel",
    description: "Research into plasma-actuated jet deflection using nozzle design, 2D RANS CFD, schlieren imaging, pressure measurements, and PIV.",
  },
  {
    path: "/projects/switch-handle-lever",
    title: "Switch Handle Lever Mechanism | Jinit Patel",
    description: "A mechanical design and rapid-prototyping project for a patent-pending switch handle lever mechanism.",
  },
  {
    path: "/projects/speaker-stand",
    title: "3D-Printed Speaker Stand | Jinit Patel",
    description: "A custom satellite speaker stand developed through dimensional surveying, CAD, FEA, and FDM fabrication.",
  },
];

const source = await readFile("dist/index.html", "utf8");
const escapeAttribute = (value) => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;");

for (const route of routes) {
  const canonical = `${siteUrl}${route.path}`;
  const title = escapeAttribute(route.title);
  const description = escapeAttribute(route.description);
  const html = source
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${description}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${title}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${description}" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${title}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${description}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${canonical}" />`);
  const outputDirectory = path.join("dist", route.path.slice(1));
  await mkdir(outputDirectory, { recursive: true });
  await writeFile(path.join(outputDirectory, "index.html"), html);
}
