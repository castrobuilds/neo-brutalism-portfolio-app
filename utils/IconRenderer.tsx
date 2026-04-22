import {
  // Frontend
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiThreedotjs,
  SiFramer,
  SiGsap,
  // Backend
  SiNodedotjs,
  SiExpress,
  SiRedis,
  SiMongodb,
  SiPostgresql,
  SiPython,
  // Game Dev
  SiUnity,
  SiUnrealengine,
  SiBlender,
  SiAseprite,
  // Other Tools
  SiGit,
  SiDavinciresolve,
} from "react-icons/si";

import {
  FaLinkedin,
  FaGithub,
  FaDiscord,
  FaCertificate,
  FaGraduationCap,
  FaLaptopCode,
} from "react-icons/fa";

const iconMap: Record<string, React.ElementType> = {
  // FRONTEND
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiThreedotjs,
  SiFramer,
  SiGsap,
  // BACKEND
  SiNodedotjs,
  SiExpress,
  SiRedis,
  SiMongodb,
  SiPostgresql,
  SiPython,
  // GAME DEV
  SiUnity,
  SiUnrealengine,
  SiBlender,
  SiAseprite,
  // TOOLS
  SiGit,
  SiDavinciresolve,
  // SOCIALS
  FaLinkedin,
  FaGithub,
  FaDiscord,
  // TIMELINE
  FaCertificate,
  FaGraduationCap,
  FaLaptopCode,
};

/* This helper function looks into our icon sets 
  based on the string name provided in the JSON.
*/
export const IconRenderer = ({
  iconName,
  size = 28,
  className = "",
  color,
}: {
  iconName: string;
  size?: number;
  className?: string;
  color?: string;
}) => {
  // Check Simple Icons (Si)
  const IconComponent = iconMap[iconName];

  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found in mapping.`);
    return null;
  }

  return <IconComponent size={size} className={className} color={color} />;
};
