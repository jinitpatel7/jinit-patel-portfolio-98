import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "@/components/Header";
import Particles from "@/components/particles";
import RouteEffects from "@/components/RouteEffects";

const Home = lazy(() => import("@/pages/Home"));
const Projects = lazy(() => import("@/pages/Projects"));
const ProjectDetail = lazy(() => import("@/pages/ProjectDetail"));
const Experience = lazy(() => import("@/pages/Experience"));
const Gallery = lazy(() => import("@/pages/Gallery"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const App = () => (
  <BrowserRouter>
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <RouteEffects />
    <Particles className="fixed inset-0 -z-10 pointer-events-none" quantity={50} />
    <Header />
    <Suspense fallback={<div className="min-h-screen pt-32 text-center text-muted-foreground" role="status">Loading page…</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
