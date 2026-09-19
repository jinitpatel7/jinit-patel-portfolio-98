import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X, Sun, Moon } from 'lucide-react';
const links = [['/', 'Home'], ['/projects', 'Projects'], ['/experience', 'Experience'], ['/gallery', 'Gallery'], ['/contact', 'Contact']];
export default function Header() {
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(() => { try { return localStorage.getItem('portfolio-theme') === 'light'; } catch { return false; } });
  const { pathname } = useLocation();
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => { document.documentElement.classList.toggle('light', light); try { localStorage.setItem('portfolio-theme', light ? 'light' : 'dark'); } catch { /* Preference remains session-only. */ } }, [light]);
  useEffect(() => { const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); }; window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey); }, []);
  return <header className="site-header"><div className="shell nav-inner">
    <Link className="wordmark" to="/" aria-label="Jinit Patel, home"><span className="monogram">jp<span>.</span></span><span>JINIT PATEL</span></Link>
    <nav aria-label="Main navigation" className={open ? 'main-nav is-open' : 'main-nav'} id="main-navigation">{links.map(([path,label]) => <NavLink key={path} end={path === '/'} to={path}>{label}</NavLink>)}</nav>
    <div className="nav-actions"><button className="icon-button" onClick={() => setLight(v => !v)} aria-label={light ? 'Switch to dark theme' : 'Switch to light theme'}>{light ? <Moon size={18}/> : <Sun size={18}/>}</button><a className="resume-nav" href="/Patel_Jinit_Resume.pdf" target="_blank" rel="noreferrer">Résumé <ArrowUpRight size={16}/></a><button className="icon-button menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(v => !v)}>{open ? <X/> : <Menu/>}</button></div>
  </div></header>;
}
