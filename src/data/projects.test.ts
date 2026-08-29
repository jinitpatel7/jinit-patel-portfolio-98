import { describe, expect, it } from "vitest";
import { projects } from "@/data/projects";

describe("project data", () => {
  const visibleProjects = projects.filter((project) => !project.hidden);

  it("uses unique, URL-safe identifiers", () => {
    const ids = visibleProjects.map((project) => project.id);
    expect(new Set(ids).size).toBe(ids.length);
    ids.forEach((id) => expect(id).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/));
  });

  it("provides complete detail content for every visible project", () => {
    visibleProjects.forEach((project) => {
      expect(project.title.trim()).not.toBe("");
      expect(project.description.trim()).not.toBe("");
      expect(project.sections?.engineeringMethodology.length).toBeGreaterThan(0);
      expect(project.sections?.resultsImpacts.length).toBeGreaterThan(0);
      expect(project.sections?.challengesTakeaways.length).toBeGreaterThan(0);
    });
  });

  it("provides a poster for every video project", () => {
    visibleProjects.filter((project) => project.videoUrl).forEach((project) => {
      expect(project.posterUrl).toBeTruthy();
    });
  });
});
