import { useState } from "react";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

// --- Data for Education ---
const educationData = [
  {
    university: "San Jose State University, San Jose, CA",
    degree: "Master of Science in Engineering Management",
    duration: "Aug. 2023 – May 2025",
    courses: "Project Management, Product Management, Agile Engineering, Managing the Lean Enterprise Program, Business Analytics, Six Sigma, Principles of Engineering Management, Advanced Systems Engineering, Math Foundations for Decision and Data Sciences"
  },
  {
    university: "Savitribai Phule Pune University, India",
    degree: "Bachelor of Engineering in Electronics and Telecommunications Engineering",
    duration: "Aug. 2016 – Jun. 2020",
    courses: "Data Structures, Operating Systems, Databases, Computer networks, Object-Oriented Programming."
  }
];

// --- Data for Professional Experience ---
const experienceData = [
    {
        role: "Product Manager Intern",
        company: "Ole",
        duration: "December 2023 – June 2024",
        description: "As Strategic Lead, I orchestrated the product strategy for a new, cutting-edge payment gateway. My focus was on aligning executive, engineering, and marketing teams around a unified vision to build a product that solved key market needs and could be delivered efficiently.",
        achievements: [
            "Shaped the Product Roadmap: I synthesized insights from competitive analysis and stakeholder interviews to build a clear, actionable product roadmap. This secured crucial buy-in from leadership and reduced feature delivery delays by 20%.",
            "Drove Engineering Execution: I translated the roadmap into a prioritized backlog for a team of 8 engineers, using a value-vs-effort framework to define over 50 user stories. This brought clarity to the development process and improved bug resolution time by 15%."
        ]
    },
    {
        role: "Associate Product Manager",
        company: "Infosys",
        duration: "March 2022 – June 2023",
        description: "At Infosys, I owned the end-to-end lifecycle for an internal collaboration module designed to connect over 5,000 employees. I defined the product vision, guided its development through data-driven iteration, and led a successful go-to-market strategy that drove significant adoption.",
        achievements: [
            "Launched a High-Impact Product: From vision to launch, I guided the development of a new collaboration tool, authoring PRDs that led to a 22% increase in employee engagement post-launch.",
            "Drove Insights with Data: I wrote SQL queries to analyze user adoption metrics, identifying underutilized features and surfacing the quantitative insights that directly informed our product roadmap and A/B testing priorities.",
            "Led Cross-Functional GTM Strategy: I successfully aligned Engineering, UX, Marketing, and Legal teams to ensure a seamless and on-time feature rollout, leading to 100% successful launches."
        ]
    },
    {
        role: "Associate Consultant",
        company: "KPMG",
        duration: "April 2021 – March 2022",
        description: "During my time at KPMG, I identified a critical opportunity to improve consultant efficiency. I developed the business case for a new workflow automation module and translated user feedback into actionable improvements, resulting in a product that was quickly adopted and valued.",
        achievements: [
            "Spearheaded a New Automation Tool: I built a compelling business case for a new module that modeled its potential impact, securing stakeholder buy-in and ultimately achieving a 30% adoption rate among consultants after launch.",
            "Oversaw Technical Integrations: Serving as the bridge between product and engineering, I defined requirements for key API integrations, ensuring a seamless flow of data between platforms that was critical for the module's success."
        ]
    },
    {
        role: "Software Engineer",
        company: "Diacto Technologies",
        duration: "June 2020 – April 2021",
        description: "At Diacto, I focused on transforming the company's business intelligence infrastructure. My goal was to make data more reliable, accessible, and actionable for teams across the organization by optimizing systems and establishing clear governance.",
        achievements: [
            "Optimized Analytics & Data Pipelines: By designing and automating data pipelines to consolidate sources across BI platforms (Power BI, Domo, Tableau), I reduced data refresh latency by 40% and empowered teams with self-service analytics, boosting adoption by 25%.",
            "Established BI Governance: I rolled out a new governance framework, including KPI catalogs and release standards, which increased report reusability by 30% and made our entire analytics ecosystem more scalable and reliable."
        ]
    }
];

// --- Data for Leadership & Volunteering ---
const leadershipData = [
  {
    role: "Adobe Student Ambassador",
    organization: "Adobe",
    description: "Promoted Adobe Express and other Adobe products on campus, conducted workshops, and collaborated with students to showcase the creative potential of Adobe tools.",
    skills: "Adobe Creative Cloud, Event Management, Public Speaking, Marketing, Collaboration.",
    impact: "Increased student awareness and engagement with Adobe tools through on-campus workshops and events. Helped students enhance their creative projects by providing insights into Adobe Express and other products. Contributed to fostering a creative community on campus by encouraging the use of Adobe's powerful suite of tools for academic and personal projects."
  },
  {
    role: "Community Volunteer",
    organization: "Rotary International",
    description: "Accompanied residents to weekly Rotary Speaker Lunches at the San Jose Rotary Club, fostering community engagement and cross-cultural exchange. Acted as the liaison between International House residents and Rotary members through regular meetings, strengthening partnerships and creating opportunities for residents to connect with local leaders.",
    skills: "Community Engagement, Cross-Cultural Communication, Stakeholder Relations, Networking, Interpersonal Communication.",
    impact: "Strengthened community ties by connecting international students with local business leaders, fostering valuable networking opportunities and promoting cultural understanding."
  },
  {
    role: "Member",
    organization: "Toastmasters International",
    description: "Active member of Toastmasters International – San Jose, where I honed public speaking, leadership, and communication skills. Participated in prepared speeches, impromptu sessions, and peer evaluations, strengthening my ability to deliver clear, impactful messages and lead with confidence in diverse professional settings.",
    skills: "Public Speaking, Leadership, Impromptu Speaking, Constructive Feedback, Communication Skills.",
    impact: "Enhanced my public speaking and leadership capabilities, resulting in a greater ability to articulate complex ideas clearly and motivate teams effectively in professional environments."
  },
  {
    role: "Community Volunteer",
    organization: "Manoyug Psychology Studio",
    description: "Volunteered at Manoyug Psychology Studio, contributing to initiatives that promoted mental health awareness among youth. Supported outreach programs, facilitated conversations on well-being, and helped create a safe, stigma-free environment for young individuals to engage with mental health resources.",
    skills: "Mental Health Advocacy, Community Outreach, Facilitation, Empathetic Communication, Program Support.",
    impact: "Contributed to successful mental health outreach programs, helping to de-stigmatize mental well-being and increase access to vital resources for young people in the community."
  }
];

// --- Data for Publications ---
const publicationData = [
    {
        title: "Design and Implementation of Paper Dispensing Machine",
        journal: "International Journal of Innovative Research in Computer and Communication Engineering",
        date: "Apr 20, 2020",
        description: "Engineered an automated dispensing machine using a PIC microcontroller, RFID, and coin detection to deliver stationery items. The design minimizes manual effort, reduces counting errors, and supports scalability across high-demand settings (e.g. colleges, government offices). Demonstrated working prototype meeting spec: users pay via RFID or coins and request exact quantities.",
        url: "https://ijircce.com/admin/main/storage/app/pdf/g1XtJP9tjL9nqYwrroaLURLWG0gN7aE2fsYm1aeU.pdf"
    }
];

// --- Skills Data ---
const skillsData = {
  "Product & Project Management": [
    { name: "Agile & Scrum", memeUrl: "/memes/agile.jpg" },
    { name: "Product Roadmapping" },
    { name: "Jira & Confluence", memeUrl: "/memes/jira.jpg" },
    { name: "GTM Strategy" },
    { name: "A/B Testing" },
    { name: "Stakeholder Management" },
    { name: "User Research", memeUrl: "/memes/use1.jpeg" },
    { name: "PRD & User Stories" },
  ],
  "Technical Skills": [
    { name: "SQL" },
    { name: "Python", memeUrl: "/memes/python.jpg" },
    { name: "React" },
    // This is the new structure for an inline multi-meme skill
    {
      parts: [
        { name: "JavaScript", memeUrl: "/memes/no.jpg" },
        { name: " & " },
        { name: "TypeScript", memeUrl: "/memes/yes.jpg" }
      ]
    },
    { name: "Pandas & NumPy" },
    { name: "TensorFlow" },
    { name: "Git & GitHub" },
  ],
  "BI, Design & Other Tools": [
    { name: "Power BI & Tableau", memeUrl: "/memes/power.jpg" },
    { name: "Figma"},
    { name: "Google Analytics" },
    { name: "Looker" },
    { name: "Airflow" },
  ],
};


const categories = ["Education", "Experience", "Leadership & Volunteering", "Skill & Tools", "Publications"];

// --- Education Card Component ---
const EducationCard = ({ university, degree, duration, courses }) => (
  <div className="bg-card p-6 rounded-lg shadow-xs card-hover text-left w-full">
    <h3 className="font-bold text-lg text-primary mb-1">{university}</h3>
    <div className="flex justify-between items-center text-muted-foreground mb-2 flex-wrap">
      <p className="font-semibold">{degree}</p>
      <p className="italic text-sm">{duration}</p>
    </div>
    <p className="text-sm text-muted-foreground"><span className="font-semibold text-primary">Courses:</span> {courses}</p>
  </div>
);

// --- Experience Card Component ---
const ExperienceCard = ({ role, company, duration, description, achievements }) => {
    const renderAchievement = (achievement) => {
        const parts = achievement.split(':');
        if (parts.length > 1) {
            return (
                <p>
                    <strong className="font-semibold text-primary">{parts[0]}:</strong>
                    {parts.slice(1).join(':')}
                </p>
            );
        }
        return <p>{achievement}</p>;
    };

    return (
        <div className="bg-card p-6 rounded-lg shadow-xs card-hover text-left w-full">
            <div className="flex justify-between items-center mb-2 flex-wrap">
                <h3 className="font-bold text-lg text-primary">{role} | {company}</h3>
                <p className="italic text-sm text-muted-foreground">{duration}</p>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{description}</p>
            <div className="space-y-2 text-sm text-muted-foreground">
                {achievements.map((item, index) => (
                    <div key={index}>{renderAchievement(item)}</div>
                ))}
            </div>
        </div>
    );
};

// --- Leadership Card Component ---
const LeadershipCard = ({ role, organization, description, skills, impact }) => (
  <div className="bg-card p-6 rounded-lg shadow-xs card-hover text-left w-full">
    <div className="flex justify-between items-center mb-2 flex-wrap">
      <h3 className="font-bold text-lg text-primary">{role} | {organization}</h3>
    </div>
    <p className="text-sm text-muted-foreground mb-4">{description}</p>
    <p className="text-sm text-muted-foreground mb-2"><span className="font-semibold text-primary">Key Skills Developed:</span> {skills}</p>
    <p className="text-sm text-muted-foreground"><span className="font-semibold text-primary">Impact:</span> {impact}</p>
  </div>
);

// --- Publication Card Component ---
const PublicationCard = ({ title, journal, date, description, url }) => (
    <div className="bg-card p-6 rounded-lg shadow-xs card-hover text-left w-full">
        <h3 className="font-bold text-lg text-primary mb-1">{title}</h3>
        <div className="flex justify-between items-center text-muted-foreground mb-2 flex-wrap">
            <p className="font-semibold">{journal}</p>
            <p className="italic text-sm">{date}</p>
        </div>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline flex items-center gap-2">
            Show Publication <ExternalLink size={16} />
        </a>
    </div>
);

// --- Reusable Meme Skill Component ---
const MemeSkill = ({ name, memeUrl, isActive }) => (
  <div className="group relative w-fit">
    {memeUrl && (
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none invisible group-hover:visible z-10">
        <img src={memeUrl} alt={`${name} meme`} className="rounded-lg shadow-xl" />
      </div>
    )}
    <span className={cn(
      "text-foreground hover:text-primary transition-colors duration-500",
      memeUrl && "cursor-pointer",
      // Apply pulse and blue text only when the category is active and a meme exists
      memeUrl && isActive && "text-sky-400 [text-shadow:0_0_8px_theme(colors.sky.400)] animate-pulse"
    )}>
      {name}
    </span>
  </div>
);


export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Education");
  const [highlightMemes, setHighlightMemes] = useState(false);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Credentials</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setHighlightMemes(category === "Skill & Tools");
              }}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div>
          {activeCategory === "Education" && (
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <EducationCard key={index} {...edu} />
              ))}
            </div>
          )}

          {activeCategory === "Experience" && (
            <div className="space-y-8">
              {experienceData.map((exp, index) => (
                <ExperienceCard key={index} {...exp} />
              ))}
            </div>
          )}

          {activeCategory === "Skill & Tools" && (
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                {Object.entries(skillsData).map(([category, skills]) => (
                    <div key={category}>
                        <h3 className="font-bold text-xl mb-4 text-primary">{category}</h3>
                        <ul className="space-y-3">
                            {skills.map((skill, index) => (
                                <li key={skill.name || `skill-${index}`}>
                                    {/* This logic now handles both single and multi-part skills cleanly */}
                                    {skill.parts ? (
                                        <div className="flex items-center">
                                            {skill.parts.map((part, partIndex) => (
                                                <MemeSkill
                                                    key={partIndex}
                                                    name={part.name}
                                                    memeUrl={part.memeUrl}
                                                    isActive={highlightMemes}
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        <MemeSkill
                                            name={skill.name}
                                            memeUrl={skill.memeUrl}
                                            isActive={highlightMemes}
                                        />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
             </div>
          )}

          {activeCategory === "Leadership & Volunteering" && (
            <div className="space-y-8">
              {leadershipData.map((item, index) => (
                <LeadershipCard key={index} {...item} />
              ))}
            </div>
          )}

          {activeCategory === "Publications" && (
            <div className="space-y-6">
                {publicationData.map((pub, index) => (
                    <PublicationCard key={index} {...pub} />
                ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

