import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiExternalLink } from "react-icons/hi";
import { SiGithub } from "react-icons/si";

const projects = [
  {
    title: "CloudVault - Your Personalised Cloud Storage",
    description:
      "A cloud storage system with file deduplication and smart compression, enabling efficient and cost-effective storage management.",
    tech: ["React", "FastAPI", "AWS S3", "Python"],
    github: "#",
    live: "#",
  },
  {
    title: "HemoCare - A Smart Blood Bank System",
    description:
      "A comprehensive platform for managing blood donation drives, donor registration, and real-time inventory tracking.",
    tech: ["React", "SpringBoot", "Spring Security", "MySQL"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-2">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl overflow-hidden group"
            >
              {/* Gradient banner */}
              <div className="h-40 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <span className="text-4xl font-display font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                  {p.title.charAt(0)}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold font-display text-foreground mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={p.github}
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <SiGithub size={16} /> Code
                  </a>
                  <a
                    href={p.live}
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <HiExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
