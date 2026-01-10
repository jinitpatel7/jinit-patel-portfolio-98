import kazeX1Video from "@/assets/projects/Kaze_X1_Thumbnail.mp4";
import calorieBurnVideo from "@/assets/projects/Calorie_Burn_Machine_Learning_Thumbnail.mp4";
import switchHandleVideo from "@/assets/projects/Switch_Handle_Lever_Thumbnail.mp4";

export interface Project {
  id: string;
  title: string;
  description: string;
  skills: string[];
  dates: string;
  imageUrl?: string;
  videoUrl?: string;
  hidden: boolean;
}

/**
 * Projects Data Array
 * 
 * To manage projects:
 * - ADD: Add a new object to this array
 * - REMOVE: Delete the object from the array
 * - REORDER: Move the object to a different position in the array
 * - HIDE: Set hidden: true to hide a project without deleting it
 * - SHOW: Set hidden: false to display a hidden project
 * 
 * Projects are rendered in the order they appear in this array.
 */
export const projects: Project[] = [
  {
    id: "kaze-x1-rc-aircraft",
    title: "Kaze X1: 3D Printed RC Fixed-Wing Aircraft Build",
    description: "Currently in the process of designing, fabricating, and flight-testing an LW-PLA FDM 3D-printed sport/trainer hybrid RC aircraft, including CAD, aerodynamic validation, and avionics integration.",
    skills: ["SolidWorks", "ANSYS Fluent", "FDM 3D Printing", "Bambu Studio", "Soldering", "FDM/FDA", "Avionics Integration", "Flight Testing", "Mechanical Design"],
    dates: "November 2025 - Present",
    videoUrl: kazeX1Video,
    hidden: false
  },
  {
    id: "calorie-burn-predictor",
    title: "Precise Calorie Burn Predictor (Machine Learning)",
    description: "Utilized convolution neural networks within Python Libraries to create a model that can accurately predict calorie expenditure for specific activities, taking into account the user's biological, genetic, and lifestyle factors.",
    skills: ["Neural Networks", "Machine Learning", "Python", "TensorFlow", "NumPy", "Scikit-learn", "Matplotlib", "Hyperparameter Tuning"],
    dates: "November 2025 - December 2025",
    videoUrl: calorieBurnVideo,
    hidden: false
  },
  {
    id: "plasma-thrust-vectoring",
    title: "Plasma-Induced Thrust Vectoring on Subsonic Axisymmetric Jets",
    description: "Investigating localized arc-filament plasma actuators (LAFPAs) for active control over jet attachment and deflection. Designed and fabricated SLA nozzles, performed 2D RANS CFD analysis, and supported experimental testing using schlieren imaging, pressure measurements, and PIV.",
    skills: ["SolidWorks", "MATLAB", "SLA 3D Printing", "ANSYS Fluent", "2D RANS Simulations", "Schlieren Imaging", "Particle Image Velocimetry", "Data Acquisition", "Data Analysis"],
    dates: "August 2023 - Present",
    hidden: false
  },
  {
    id: "switch-handle-lever",
    title: "Patent-Pending Switch Handle Lever Mechanism",
    description: "Filed a provisional patent application for a switch handle lever mechanism I engineered for a Static Switch unit at Vertiv. Led the full rapid prototyping cycle of design, fabrication, and iteration until internal end users' needs were met.",
    skills: ["Creo", "Large BOM Management", "Ansys Mechanical", "Oracle PLM", "Rapid Prototyping", "FDM 3D Printing", "GD&T", "Testing & Iteration", "Mechanical Design"],
    dates: "May 2025 - August 2025",
    videoUrl: switchHandleVideo,
    hidden: false
  },
  {
    id: "speaker-stand",
    title: "Custom 3D-Printed Satellite Speaker Stand",
    description: "Designed and optimized a satellite speaker stand for my apartment surround sound system. Modeled the structure, ran FEA for strength verification, and 3D printed an ergonomic and aesthetically clean final design.",
    skills: ["Onshape", "Ansys Mechanical", "FEA", "FDM 3D Printing", "Tolerancing", "Calipers"],
    dates: "October 2025",
    hidden: false
  },
  {
    id: "future-project",
    title: "Future Project Title",
    description: "Placeholder for a future project. Update this description when ready to publish.",
    skills: ["Skill 1", "Skill 2", "Skill 3"],
    dates: "TBD",
    hidden: true
  }
];
