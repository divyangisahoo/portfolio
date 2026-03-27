import { motion } from "framer-motion";
import {
  SiReact,
  SiDocker,
  SiPython,
  SiSpringboot,
  SiGit,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

const floatingIcons = [
  { Icon: SiReact, className: "top-[20%] left-[10%] animate-float text-primary/20", size: 28 },
  { Icon: SiDocker, className: "top-[15%] right-[15%] animate-float-delayed text-secondary/20", size: 24 },
  { Icon: FaAws, className: "bottom-[20%] left-[18%] animate-float-slow text-primary/15", size: 32 },
  { Icon: SiPython, className: "bottom-[25%] right-[10%] animate-float text-secondary/15", size: 26 },
  { Icon: SiSpringboot, className: "top-[40%] right-[5%] animate-float-delayed text-primary/10", size: 22 },
  { Icon: SiGit, className: "top-[50%] left-[5%] animate-float-slow text-secondary/10", size: 24 },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient">
      {/* Floating icons */}
      {floatingIcons.map(({ Icon, className, size }, i) => (
        <div key={i} className={`absolute ${className} hidden md:block`}>
          <Icon size={size} />
        </div>
      ))}

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-sm md:text-base font-medium text-primary tracking-widest uppercase mb-4">
            Hello, I'm
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6"
        >
          <span className="text-gradient">Divyangi Sahoo</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4"
        >
          Aspiring Software Engineer | Cloud & DevOps Enthusiast
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-sm md:text-base text-muted-foreground/70 max-w-xl mx-auto mb-10"
        >
          Building scalable web systems, cloud applications, and intelligent developer tools.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:border-primary/50 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <HiArrowDown className="text-muted-foreground/50" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
