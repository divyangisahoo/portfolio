import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiBriefcase } from "react-icons/hi";

const experiences = [
  {
    title: "Java Development Intern",
    company: "Gemini Consulting and Services",
    period: "Sept 2025 - March 2026",
    description:
      "Developed backend REST APIs using Spring Boot and integrated with MySQL. Implemented JWT-based authentication and role-based access control with Spring Security. Optimized database queries improving response time by 30%.",
  },
  // {
  //   title: "Cloud Intern",
  //   company: "NALCO - Bhubaneswar",
  //   period: "May 2026 - July 2026",
  //   description:
  //     "Worked on enterprise Java applications, contributed to backend service development, and gained hands-on experience with production-level codebases and agile workflows.",
  // },
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 mesh-gradient" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-2">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: i * 0.15 }}
              className="relative pl-12 md:pl-0 md:flex md:items-start mb-12 last:mb-0"
            >
              {/* Glowing dot */}
              <div className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 top-1 w-3 h-3 rounded-full bg-primary glow-cyan animate-glow-pulse" />

              <div className="md:w-1/2 md:pr-12 md:text-right hidden md:block">
                <span className="text-sm text-primary font-medium">{exp.period}</span>
              </div>

              <div className="md:w-1/2 md:pl-12">
                <span className="text-sm text-primary font-medium md:hidden">{exp.period}</span>
                <div className="glass rounded-xl p-5 mt-2 hover:glow-cyan transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <HiBriefcase className="text-primary" size={16} />
                    <h3 className="font-display font-semibold text-foreground">{exp.title}</h3>
                  </div>
                  <p className="text-sm text-primary/80 mb-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
