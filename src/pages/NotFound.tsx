import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PageMeta from '@/components/PageMeta';
export default function NotFound() {
  const { pathname } = useLocation();
  return <main id="main-content"><PageMeta title="Page Not Found" description="The requested page could not be found." path={pathname} noIndex/><div className="shell page-heading"><span className="eyebrow">404 / OFF THE FLIGHT PATH</span><h1>Let's get you back.</h1><p>This page has moved or doesn't exist. There's plenty more to explore.</p><Link className="button primary mt-8" to="/"><ArrowLeft size={18}/>Back to home</Link></div></main>;
}
