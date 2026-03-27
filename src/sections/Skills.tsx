import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiC,
  SiJavascript,
  SiPython,
  SiReact,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiSpringboot,
  SiFastapi,
  SiFlask,
  SiDocker,
  SiGit,
  SiMysql,
  SiPostgresql,
  SiDjango,
} from "react-icons/si";
import { FaJava, FaAws, FaDatabase } from "react-icons/fa";

type Skill = { name: string; icon: React.ReactNode };

const categories: { title: string; skills: Skill[] }[] = [
  {
    title: "Languages",
    skills: [
      { name: "C", icon: <SiC size={24} /> },
      { name: "Java", icon: <FaJava size={24} /> },
      { name: "JavaScript", icon: <SiJavascript size={24} /> },
      { name: "Python", icon: <SiPython size={24} /> },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <SiReact size={24} /> },
      { name: "HTML5", icon: <SiHtml5 size={24} /> },
      { name: "CSS3", icon: <SiCss size={24} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={24} /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "SpringBoot", icon: <SiSpringboot size={24} /> },
      { name: "FastAPI", icon: <SiFastapi size={24} /> },
      // { name: "Flask", icon: <SiFlask size={24} /> },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: <FaAws size={24} /> },
      { name: "Docker", icon: <SiDocker size={24} /> },
      { name: "Git", icon: <SiGit size={24} /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: <SiMysql size={24} /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={24} /> },
      { name: "Oracle", icon: <FaDatabase size={24} /> },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 mesh-gradient" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-2">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        <div className="space-y-12">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: ci * 0.1 }}
            >
              <h3 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
                {cat.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.2, delay: ci * 0.1 + si * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="glass rounded-xl p-4 flex flex-col items-center gap-2 cursor-default hover:glow-cyan transition-all duration-300 group"
                  >
                    <span className="text-muted-foreground group-hover:text-primary transition-colors duration-200">
                      {skill.icon}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
