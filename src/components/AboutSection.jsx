import { Briefcase, Code, MapIcon, RocketIcon, User, User2Icon } from "lucide-react";
import profilePhoto from "../assets/PXL_20250523_024657223.jpg";
export const AboutSection = () => {
  // A simple component for consistent highlighting
  const Highlight = ({ children, color = 'purple' }) => {
    const colorClasses = {
      purple: 'bg-purple-100 text-purple-800',
      sky: 'bg-sky-100 text-sky-800',
      teal: 'bg-teal-100 text-teal-800',
      yellow: 'bg-yellow-100 text-yellow-800',
    };
    return <span className={`px-1.5 py-0.5 rounded-md ${colorClasses[color]}`}>{children}</span>;
  };
// New component for text with meme pop-ups and pulsing animation
const MemeHighlight = ({ children, memeUrl }) => (
  <span className="group relative">
    {/* The animate-pulse class creates the subtle pulsing effect */}
    <span className="text-sky-400 [text-shadow:0_0_8px_theme(colors.sky.400)] cursor-pointer animate-pulse">
      {children}
    </span>
    {memeUrl && (
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none invisible group-hover:visible z-10">
        <img src={memeUrl} alt={`${children} meme`} className="rounded-lg shadow-xl" />
      </div>
    )}
  </span>
);
  return (
    <section id="about" className="py-16 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="space-y-6 md:col-span-2">
            <h3 className="text-2xl font-semibold">
                Hello, I'm Tanmay!
                <br />
                A <MemeHighlight memeUrl="/memes/pm.jpg">Product Manager</MemeHighlight> based in Silicon Valley!
                </h3>
            
            <p className="text-muted-foreground text-left">
              I recently graduated with a Master’s in Engineering Management from San José State University, 
              with a focus on Product Management, Project Management, Systems Engineering, and other amazing stuff. 
              Along the way, I strengthened my fundamentals in Product Management and Computer Science.
            </p>

            <p className="text-muted-foreground text-left">
              I love digging into tricky problems and creating products that feel effortless. 
              Most recently, at a fintech startup, I helped craft the product roadmap for a new payment gateway bringing the vision to life. 
              Before that at my previous roles I got to build a collaboration tools from the ground up for thousands of employees. 
            </p>

            <p className="text-muted-foreground text-left">
              My journey from getting my hands dirty with <MemeHighlight memeUrl="/memes/code.jpg">code</MemeHighlight> to leading the product strategy gives me a unique perspective, 
              I love figuring out what to build just as much as I love understanding how it gets built. 
              I thrive on being the bridge between the technical and business worlds, keeping everyone aligned and focused on shipping great products. 
            </p>
            
            <p className="text-muted-foreground text-left">
              I'm now looking for my next Product Manager or Technical Program Manager role. Think we're a match?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a 
                href="https://www.linkedin.com/in/tanmay-pathak21/"
                target="_blank" 
                rel="noopener noreferrer" 
                className="cosmic-button">
                My Linkedin
              </a>

              <a
                href="\Tanmay Pathak Resume.pdf"
                target="_blank" 
                rel="noopener noreferrer"
                /*download="Tanmay Pathak Resume.pdf"*/
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
              >
                My Resume
              </a>
            </div>
          </div>

          
          <div className="relative flex justify-center md:justify-end items-start pt-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-2xl blur-2xl opacity-30"></div>
            <div className="relative w-64 h-80 md:w-72 md:h-96">
              <img
              src={profilePhoto}
              alt="A photo of Tanmay Pathak"
                className="rounded-2xl object-cover w-full h-full shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


