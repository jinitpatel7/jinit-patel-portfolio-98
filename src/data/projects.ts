import kazeX1Video from "@/assets/projects/Kaze_X1_Thumbnail.mp4";
import calorieBurnVideo from "@/assets/projects/Calorie_Burn_Machine_Learning_Thumbnail.mp4";
import switchHandleVideo from "@/assets/projects/Switch_Handle_Lever_Thumbnail.mp4";
import thrustVectoringImage from "@/assets/projects/Thrust_Vectoring_Jet_Thumbnail.jpg";
import speakerStandImage from "@/assets/projects/Speaker_Thumbnail.jpg";

export interface ProjectSection {
  motivationOverview: string;
  engineeringMethodology: {
    header: string;
    points: string[];
  }[];
  resultsImpacts: {
    header: string;
    content: string;
  }[];
  challengesTakeaways: {
    label: string;
    items: string[];
  }[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  skills: string[];
  dates: string;
  imageUrl?: string;
  videoUrl?: string;
  hidden: boolean;
  sections?: ProjectSection;
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
    hidden: false,
    sections: {
      motivationOverview: "Most commercial RC aircraft kits are expensive, fragile, and difficult to repair after crashes—a significant barrier for hobbyists learning to fly. Existing 3D-printed designs often sacrifice structural integrity or aerodynamic performance for printability. I set out to design a fully 3D-printable sport/trainer aircraft that balances durability, repairability, and flight characteristics suitable for both learning and sport flying. The Kaze X1 is a complete fixed-wing aircraft designed from scratch in SolidWorks, validated through CFD analysis, and manufactured using FDM printing with LW-PLA. Scope includes full CAD design, aerodynamic validation, avionics integration, and flight testing. Composite reinforcement and advanced autopilot systems are intentionally out of scope for this iteration.",
      engineeringMethodology: [
        {
          header: "CAD & Structural Design",
          points: [
            "Parametric modeling in SolidWorks allowing rapid iteration on wing geometry and fuselage cross-sections",
            "Internal spar structure designed for LW-PLA's unique strength-to-weight characteristics",
            "Modular assembly design enabling field repairs with replacement printed components"
          ]
        },
        {
          header: "Aerodynamic Analysis",
          points: [
            "2D RANS CFD analysis in ANSYS Fluent to validate airfoil selection (modified Clark-Y)",
            "k-ω SST turbulence model selected for accurate boundary layer prediction at low Reynolds numbers",
            "Mesh refinement study conducted to ensure solution independence"
          ]
        },
        {
          header: "Manufacturing & Integration",
          points: [
            "Bambu Studio slicing optimized for LW-PLA foaming characteristics",
            "Print orientation strategy to maximize layer adhesion in high-stress regions",
            "Avionics bay designed for accessible servo and receiver installation"
          ]
        }
      ],
      resultsImpacts: [
        {
          header: "Weight & Performance",
          content: "Achieved target all-up weight under 800g with predicted stall speed suitable for trainer-style approaches."
        },
        {
          header: "Structural Validation",
          content: "Wing loading tests confirmed adequate safety margins for sport maneuvers without composite reinforcement."
        },
        {
          header: "Manufacturing Efficiency",
          content: "Full airframe printable in under 24 hours of machine time, with material costs under $30."
        }
      ],
      challengesTakeaways: [
        {
          label: "Challenges",
          items: [
            "LW-PLA foaming consistency varies significantly with ambient temperature and humidity",
            "Balancing structural weight distribution with CG requirements required multiple design iterations",
            "Surface finish quality from FDM printing affects aerodynamic performance at low Reynolds numbers"
          ]
        },
        {
          label: "Takeaways",
          items: [
            "Parametric CAD approach dramatically accelerated design iteration cycles",
            "LW-PLA's unique properties require manufacturing-aware design decisions from the start",
            "CFD validation, even 2D, caught potential stability issues before physical prototyping"
          ]
        },
        {
          label: "Next Steps",
          items: [
            "Complete flight testing campaign and document handling characteristics",
            "Develop reinforcement strategies for high-stress areas using continuous fiber inlays",
            "Explore higher-fidelity 3D CFD analysis for full aircraft stability derivatives"
          ]
        }
      ]
    }
  },
  {
    id: "calorie-burn-predictor",
    title: "Precise Calorie Burn Predictor (Machine Learning)",
    description: "Utilized convolution neural networks within Python Libraries to create a model that can accurately predict calorie expenditure for specific activities, taking into account the user's biological, genetic, and lifestyle factors.",
    skills: ["Neural Networks", "Machine Learning", "Python", "TensorFlow", "NumPy", "Scikit-learn", "Matplotlib", "Hyperparameter Tuning"],
    dates: "November 2025 - December 2025",
    videoUrl: calorieBurnVideo,
    hidden: false,
    sections: {
      motivationOverview: "Existing calorie burn calculators rely on simplistic MET-based formulas that ignore individual physiological differences, leading to errors of 20-40% for many users. This inaccuracy undermines fitness tracking, nutrition planning, and clinical applications. I developed a neural network-based predictor that incorporates user-specific biological factors (age, weight, heart rate, body temperature) alongside activity parameters to significantly improve prediction accuracy. The model was trained on a dataset of exercise sessions with measured calorie expenditure. Scope included data preprocessing, model architecture design, hyperparameter optimization, and validation. Real-time sensor integration and mobile deployment were out of scope.",
      engineeringMethodology: [
        {
          header: "Data Pipeline",
          points: [
            "Feature engineering to capture physiological relationships (e.g., heart rate × duration interactions)",
            "Normalization strategy selected based on feature distribution analysis",
            "Train/validation/test split with stratification to ensure representative samples"
          ]
        },
        {
          header: "Model Architecture",
          points: [
            "Feed-forward neural network with dropout regularization to prevent overfitting",
            "Architecture depth and width determined through systematic hyperparameter search",
            "Activation function selection (ReLU) based on training stability and convergence speed"
          ]
        },
        {
          header: "Training & Validation",
          points: [
            "Adam optimizer with learning rate scheduling for stable convergence",
            "Early stopping implemented to prevent overfitting on training data",
            "Cross-validation used to assess model generalization"
          ]
        }
      ],
      resultsImpacts: [
        {
          header: "Prediction Accuracy",
          content: "Achieved R² score of 0.97+ on test set, representing significant improvement over MET-based baseline calculations."
        },
        {
          header: "Error Analysis",
          content: "Mean absolute error reduced to within acceptable range for fitness tracking applications across diverse user profiles."
        },
        {
          header: "Feature Importance",
          content: "Analysis revealed heart rate and duration as dominant predictors, with body temperature providing meaningful secondary signal."
        }
      ],
      challengesTakeaways: [
        {
          label: "Challenges",
          items: [
            "Dataset bias toward certain activity types required careful validation across underrepresented categories",
            "Preventing model from learning dataset-specific artifacts rather than physiological relationships",
            "Balancing model complexity against interpretability for potential clinical applications"
          ]
        },
        {
          label: "Takeaways",
          items: [
            "Feature engineering based on domain knowledge outperformed purely automated feature selection",
            "Regularization techniques were essential given the relatively small dataset size",
            "Visualization of prediction errors revealed systematic biases guiding model improvements"
          ]
        },
        {
          label: "Next Steps",
          items: [
            "Expand training data to include more diverse activity types and user demographics",
            "Explore recurrent architectures to capture temporal patterns in continuous monitoring scenarios",
            "Investigate model compression techniques for edge deployment on wearable devices"
          ]
        }
      ]
    }
  },
  {
    id: "plasma-thrust-vectoring",
    title: "Plasma-Induced Thrust Vectoring on Subsonic Axisymmetric Jets",
    description: "Investigating localized arc-filament plasma actuators (LAFPAs) for active control over jet attachment and deflection. Designed and fabricated SLA nozzles, performed 2D RANS CFD analysis, and supported experimental testing using schlieren imaging, pressure measurements, and PIV.",
    skills: ["SolidWorks", "MATLAB", "SLA 3D Printing", "ANSYS Fluent", "2D RANS Simulations", "Schlieren Imaging", "Particle Image Velocimetry", "Data Acquisition", "Data Analysis"],
    dates: "August 2023 - Present",
    imageUrl: thrustVectoringImage,
    hidden: false,
    sections: {
      motivationOverview: "Traditional mechanical thrust vectoring systems add significant weight, complexity, and maintenance burden to propulsion systems. Plasma-based actuation offers the potential for fluidic thrust vectoring with no moving parts—but the interaction between localized arc-filament plasma actuators (LAFPAs) and subsonic jets is not well understood. This research investigates how LAFPAs can induce controlled jet deflection through thermal perturbation of the shear layer. My contributions include designing and fabricating custom SLA nozzles, performing 2D RANS CFD simulations to guide experimental design, and supporting experimental campaigns using schlieren imaging, pressure measurements, and PIV. Scope focuses on subsonic axisymmetric jets; supersonic applications and closed-loop control are out of scope for this phase.",
      engineeringMethodology: [
        {
          header: "Nozzle Design & Fabrication",
          points: [
            "Custom nozzle geometries designed in SolidWorks with integrated electrode mounting features",
            "SLA 3D printing selected for fine feature resolution and surface finish quality",
            "Iterative design based on flow quality requirements and electrode positioning constraints"
          ]
        },
        {
          header: "CFD Analysis",
          points: [
            "2D axisymmetric RANS simulations in ANSYS Fluent for parametric studies",
            "k-ω SST turbulence model for accurate jet spreading predictions",
            "Mesh refinement focused on shear layer region with y⁺ < 1 wall treatment",
            "Convergence verified through residual monitoring and solution independence checks"
          ]
        },
        {
          header: "Experimental Support",
          points: [
            "Schlieren imaging setup for flow visualization of jet deflection and instabilities",
            "Pressure measurement instrumentation for quantitative deflection characterization",
            "PIV data processing in MATLAB for velocity field extraction and analysis"
          ]
        }
      ],
      resultsImpacts: [
        {
          header: "Jet Deflection Characterization",
          content: "Successfully demonstrated measurable jet deflection angles using LAFPA actuation at specific Strouhal numbers."
        },
        {
          header: "CFD-Experiment Correlation",
          content: "2D RANS predictions showed reasonable agreement with experimental pressure distributions, validating the modeling approach for design studies."
        },
        {
          header: "Actuator Effectiveness",
          content: "Identified operating regimes where plasma actuation produces significant deflection with minimal power input."
        }
      ],
      challengesTakeaways: [
        {
          label: "Challenges",
          items: [
            "2D axisymmetric assumption limits ability to capture azimuthal instabilities",
            "Plasma-flow interaction physics difficult to model accurately in RANS framework",
            "Electrode durability and consistent arc formation across extended test campaigns"
          ]
        },
        {
          label: "Takeaways",
          items: [
            "CFD is valuable for design guidance but experimental validation remains essential for plasma-flow systems",
            "Schlieren imaging provides rapid qualitative feedback for iterating actuator configurations",
            "Strouhal number matching is critical for resonant amplification of deflection response"
          ]
        },
        {
          label: "Next Steps",
          items: [
            "Extend to 3D LES simulations to capture azimuthal mode interactions",
            "Investigate higher jet velocities approaching compressible regime",
            "Develop closed-loop control strategies using real-time pressure feedback"
          ]
        }
      ]
    }
  },
  {
    id: "switch-handle-lever",
    title: "Patent-Pending Switch Handle Lever Mechanism",
    description: "Filed a provisional patent application for a switch handle lever mechanism I engineered for a Static Switch unit at Vertiv. Led the full rapid prototyping cycle of design, fabrication, and iteration until internal end users' needs were met.",
    skills: ["Creo", "Large BOM Management", "Ansys Mechanical", "Oracle PLM", "Rapid Prototyping", "FDM 3D Printing", "GD&T", "Testing & Iteration", "Mechanical Design"],
    dates: "May 2025 - August 2025",
    videoUrl: switchHandleVideo,
    hidden: false,
    sections: {
      motivationOverview: "The existing switch handle mechanism on Vertiv's Static Switch units required excessive operator force and lacked ergonomic consideration, leading to user complaints and potential repetitive strain issues during frequent operations. Additionally, the legacy design's complexity increased manufacturing costs and assembly time. I engineered a new lever mechanism that reduces required actuation force while maintaining reliable electrical contact engagement. The design progressed through multiple rapid prototyping iterations based on internal user feedback, ultimately resulting in a provisional patent application. Scope included mechanism design, structural analysis, prototype fabrication, and user testing. Production tooling design and manufacturing scale-up were handled by other teams.",
      engineeringMethodology: [
        {
          header: "Mechanism Design",
          points: [
            "Kinematic analysis to optimize lever ratio for force reduction while maintaining stroke requirements",
            "Creo parametric modeling enabling rapid geometry iterations",
            "GD&T specifications developed to ensure consistent assembly and function"
          ]
        },
        {
          header: "Structural Analysis",
          points: [
            "ANSYS Mechanical FEA for stress analysis under maximum expected loads",
            "Factor of safety validation for repeated cycling conditions",
            "Material selection balancing strength, cost, and manufacturability"
          ]
        },
        {
          header: "Prototyping & Validation",
          points: [
            "FDM 3D printing for rapid functional prototypes (multiple iterations)",
            "User testing sessions with internal stakeholders to gather feedback",
            "Iterative refinement based on ergonomic and functional observations"
          ]
        }
      ],
      resultsImpacts: [
        {
          header: "Force Reduction",
          content: "Achieved significant reduction in required operator actuation force compared to legacy design."
        },
        {
          header: "User Acceptance",
          content: "Positive feedback from internal end users on ergonomics and ease of operation after iterative refinement."
        },
        {
          header: "Intellectual Property",
          content: "Novel mechanism design resulted in provisional patent application filing."
        }
      ],
      challengesTakeaways: [
        {
          label: "Challenges",
          items: [
            "Balancing force reduction against mechanism envelope constraints within existing chassis",
            "Ensuring reliable engagement across tolerance stack-up variations",
            "Translating 3D-printed prototype characteristics to injection-molded production parts"
          ]
        },
        {
          label: "Takeaways",
          items: [
            "Early and frequent user testing prevented costly late-stage design changes",
            "Rapid prototyping dramatically accelerated the iteration cycle compared to traditional machining",
            "GD&T discipline from the start streamlined transition to production design"
          ]
        },
        {
          label: "Next Steps",
          items: [
            "Support production tooling team with design-for-manufacturing refinements",
            "Develop test fixtures for quality validation of production units",
            "Explore mechanism variants for other product lines in the Static Switch family"
          ]
        }
      ]
    }
  },
  {
    id: "speaker-stand",
    title: "Custom 3D-Printed Satellite Speaker Stand",
    description: "Designed and optimized a satellite speaker stand for my apartment surround sound system. Modeled the structure, ran FEA for strength verification, and 3D printed an ergonomic and aesthetically clean final design.",
    skills: ["Onshape", "Ansys Mechanical", "FEA", "FDM 3D Printing", "Tolerancing", "Calipers"],
    dates: "October 2025",
    imageUrl: speakerStandImage,
    hidden: false,
    sections: {
      motivationOverview: "Commercial speaker stands are often expensive, aesthetically generic, and sized for standard speaker dimensions that don't match my specific satellite speakers. Existing mounting solutions also failed to integrate cleanly with my apartment's furniture arrangement. I designed a custom stand optimized for my exact speaker dimensions and mounting requirements, validated through FEA to ensure adequate strength under static and dynamic loading. The design prioritizes clean aesthetics while maintaining structural integrity. Scope included dimensional surveying, CAD modeling, structural analysis, and FDM fabrication. Multi-material or metal fabrication was out of scope for this personal project.",
      engineeringMethodology: [
        {
          header: "Design Requirements",
          points: [
            "Precise dimensional measurements of speaker base using digital calipers",
            "Height and angle requirements determined by acoustic positioning guidelines",
            "Aesthetic constraints: minimal visual footprint, cable routing provisions"
          ]
        },
        {
          header: "CAD Modeling",
          points: [
            "Onshape parametric modeling for rapid iteration on geometry",
            "Wall thickness and infill considerations for FDM printability",
            "Fillet and chamfer optimization for print orientation and surface finish"
          ]
        },
        {
          header: "Structural Validation",
          points: [
            "ANSYS Mechanical static analysis with speaker weight plus safety factor",
            "Stress concentration identification at mounting point transitions",
            "Design iteration to eliminate high-stress regions while maintaining aesthetics"
          ]
        }
      ],
      resultsImpacts: [
        {
          header: "Fit & Function",
          content: "Speaker mounts securely with excellent dimensional accuracy on first print—no modifications required."
        },
        {
          header: "Structural Performance",
          content: "FEA-validated design shows no concerning stress concentrations under expected loading conditions."
        },
        {
          header: "Aesthetics",
          content: "Clean integration with room décor; cable routing hidden from view as intended."
        }
      ],
      challengesTakeaways: [
        {
          label: "Challenges",
          items: [
            "Balancing wall thickness for strength against material usage and print time",
            "Achieving adequate surface finish with FDM process constraints",
            "Ensuring print orientation compatible with structural load paths"
          ]
        },
        {
          label: "Takeaways",
          items: [
            "Careful dimensional surveying eliminated fit issues that often plague custom mounts",
            "FEA investment was worthwhile even for a simple part—caught a stress riser that would have caused cracking",
            "Print orientation is a design decision that must be considered from the start, not an afterthought"
          ]
        },
        {
          label: "Next Steps",
          items: [
            "Design matching stands for rear surround speakers with cable management integration",
            "Explore resin printing for improved surface finish on visible surfaces",
            "Consider TPU vibration isolation interface between speaker and stand"
          ]
        }
      ]
    }
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
