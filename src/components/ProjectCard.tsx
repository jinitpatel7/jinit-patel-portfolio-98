import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';
export const projectLabels: Record<string, { title: string; category: string; summary: string }> = {
 'kaze-x1-rc-aircraft': {title:'Kaze X1',category:'AIRCRAFT DESIGN',summary:'A custom RC aircraft, from first sketch to printed airframe.'},
 'plasma-thrust-vectoring': {title:'Turning jets with plasma',category:'PROPULSION RESEARCH',summary:'Exploring fluidic thrust vectoring through simulation and experiment.'},
 'switch-handle-lever': {title:'A better mechanical advantage',category:'MECHANICAL DESIGN',summary:'A patent-pending lever developed through hands-on iteration at Vertiv.'},
 'calorie-burn-predictor': {title:'Learning from motion',category:'MACHINE LEARNING',summary:'Predicting calorie expenditure with physiological data and neural networks.'},
 'speaker-stand': {title:'Made to fit',category:'DESIGN & FABRICATION',summary:'A custom speaker stand, modeled, analyzed, and manufactured in-house.'},
};
export default function ProjectCard({index = 0, ...project}: Project & { index?: number }) { const label = projectLabels[project.id]; return <Link to={`/projects/${project.id}`} className="work-card"><div className={`work-image work-image-${project.id}`}><img src={project.posterUrl || project.imageUrl} alt={project.title} loading="lazy" width="900" height="560"/><span className="work-open"><ArrowUpRight size={22}/></span>{project.id === 'kaze-x1-rc-aircraft' && <span className="image-label">IN DEVELOPMENT</span>}</div><div className="work-meta"><span className="eyebrow">{label?.category}</span><span className="mono">{String(index+1).padStart(2,'0')}</span></div><h3>{label?.title || project.title}</h3><p>{label?.summary || project.description}</p><div className="work-tags">{project.skills.slice(0,3).map(s => <span key={s}>{s}</span>)}</div></Link>; }
