import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiStar } from "react-icons/hi";

const testimonials = [
  {
    name: "Internship Mentor",
    role: "Gemini Consulting & Services",
    text: "Divyangi demonstrated exceptional problem-solving skills and a strong grasp of Java development during her internship. A highly motivated and reliable individual.",
  },
  {
    name: "College Professor",
    role: "Computer Science Dept.",
    text: "One of the most dedicated students I've mentored. Her passion for cloud systems and web development is evident in her project & academics.",
  },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-2">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — Intro */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm a Computer Science student passionate about building meaningful software. My interests span across
              <span className="text-foreground font-medium"> full-stack web development</span>,
              <span className="text-foreground font-medium"> cloud computing</span>, and
              <span className="text-foreground font-medium"> AI-powered developer tools</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I love turning complex problems into elegant, scalable solutions. Whether it's architecting a cloud storage system or building responsive web interfaces, I focus on writing clean, maintainable code that delivers real value.
            </p>
            <p className="text-muted-foreground leading-relaxed">
            When I'm not coding, I enjoy learning about new ideas, reading about startups and innovation, and improving my problem-solving skills. I also like exploring creative design, listening to music, and spending time reflecting on ways to grow both personally and professionally.
            </p>
          </motion.div>

          {/* Right — Testimonial cards */}
          <div className="space-y-4">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                className="glass rounded-xl p-5 hover:glow-cyan transition-all duration-300 group cursor-default"
              >
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, j) => (
                    <HiStar key={j} className="text-primary/70 group-hover:text-primary transition-colors" size={14} />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed italic">
                  "{t.text}"
                </p>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
