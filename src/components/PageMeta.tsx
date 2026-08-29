import { useEffect } from "react";

const SITE_URL = "https://www.jinitpatel.org";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

interface PageMetaProps {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}

const setMeta = (selector: string, attribute: "name" | "property", key: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
};

const PageMeta = ({ title, description, path, noIndex = false }: PageMetaProps) => {
  useEffect(() => {
    const fullTitle = title === "Jinit Patel" ? "Jinit Patel | Aerospace Engineering Portfolio" : `${title} | Jinit Patel`;
    const canonicalUrl = `${SITE_URL}${path === "/" ? "" : path}`;
    document.title = fullTitle;
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[name="robots"]', "name", "robots", noIndex ? "noindex, nofollow" : "index, follow");
    setMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMeta('meta[property="og:image"]', "property", "og:image", DEFAULT_IMAGE);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", DEFAULT_IMAGE);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [description, noIndex, path, title]);

  return null;
};

export default PageMeta;
