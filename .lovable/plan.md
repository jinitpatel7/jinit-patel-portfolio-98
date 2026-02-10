

## Update Small Subheadings on Project Detail Pages

### Changes

**1. Data Structure Update (`src/data/projects.ts`)**

Update the `challengesTakeaways` interface to use labeled subsections instead of fixed keys:

```typescript
challengesTakeaways: {
  label: string;
  items: string[];
}[];
```

Each project will store an array of `{ label, items }` objects (e.g., `{ label: "Challenges", items: [...] }`), making labels fully editable per project. The same pattern will apply to `engineeringMethodology` and `resultsImpacts` subsection headers (they already use `header` fields, so those are already data-driven).

All five projects will be migrated from the current `{ challenges, takeaways, nextSteps }` shape to this array format, preserving existing content and labels.

**2. Subheading Styling (`src/pages/ProjectDetail.tsx`)**

- Change all small `<h3>` subheading classes from `text-foreground` to `text-muted-foreground` (matching body text gray)
- Reduce spacing: change parent `<div>` from `space-y-3` to `space-y-1.5` around subheadings, and reduce the section container from `space-y-6` to `space-y-4` for the Challenges section

**3. Rendering Update (`src/pages/ProjectDetail.tsx`)**

Replace the three hardcoded "Challenges" / "Takeaways" / "Next Steps" blocks with a single `.map()` over the new `challengesTakeaways` array, rendering each `{ label, items }` dynamically.

### What stays the same
- Main section headers (SectionHeader component with gradient underline)
- Page layout, animations, navigation
- Engineering Methodology and Results subsection headers (already data-driven via `header` field, just need color/spacing fix)

### Technical Details

**Files modified:**
- `src/data/projects.ts` - Interface change + migrate all 5 projects
- `src/pages/ProjectDetail.tsx` - Styling + dynamic rendering

