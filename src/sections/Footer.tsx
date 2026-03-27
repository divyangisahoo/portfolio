import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { HiMail, HiArrowUp } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Divyangi Sahoo. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a href="https://github.com/divyangisahoo" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <SiGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/divyangi-sahoo-071714331" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <FaLinkedinIn size={18} />
          </a>
          <a href="mailto:divyangisahoo4@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <HiMail size={18} />
          </a>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
          aria-label="Back to top"
        >
          <HiArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
