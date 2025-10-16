import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Predictive Risk Modeling for E-commerce",
    description: "Applied AI/ML to predict purchase likelihood based on discount strategies, achieving 82% accuracy and informing a roadmap strategy with a projected +12% uplift.",
    image: "/projects/1.png", 
    tags: ["Python", "Pandas", "TensorFlow", "SQL", "Git"],
    demoUrl: "#", 
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Airlines Data Analysis",
    description: "Analyzed large-scale airlines datasets using Hadoop (HDFS) and Spark, reducing data processing time by 30% and query execution times by 40% for complex analytics.",
    image: "/projects/2.jpeg", // Suggested: Flight data visualization
    tags: ["Hadoop", "Hive", "MapReduce", "Spark", "Big Data"],
    demoUrl: "", 
    githubUrl: "",
  },
  {
    id: 3,
    title: "GenAI Itinerary Planner for Google Maps",
    description: "Conceptualized a GenAI-powered feature to generate personalized travel itineraries from natural language prompts, defining user flows and success KPIs in a one-page PRD.",
    image: "/projects/3.png", 
    tags: ["Generative AI", "LLMs", "Product Design", "Figma"],
    demoUrl: "#", 
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Tradewise",
    description: "Engineered a real-time stock trading platform using predictive modeling and time series analysis, complete with a chatbot for precise information retrieval.",
    image: "/projects/4.png", 
    tags: ["Docker", "Kafka", "TensorFlow", "Spark", "PySpark", "Streamlit"],
    demoUrl: "", 
    githubUrl: "",
  },
  {
    id: 5,
    title: "Recipe Radar",
    description: "Developed an ETL pipeline to analyze trending recipes from Reddit, integrated OpenAI for parsing, and created a Looker dashboard for data visualization.",
    image: "/projects/55.jpg", 
    tags: ["Python", "SQL", "Airflow", "BigQuery", "LangChain", "Looker"],
    demoUrl: "", 
    githubUrl: "",
  },
  {
    id: 6,
    title: "Business Report Dashboard",
    description: "Crafted an advanced Power BI dashboard to track KPIs like net sales and gross margins, supporting finance, sales, and supply chain departments to boost margins by 5%.",
    image: "/projects/6.jpg", // Suggested: Power BI dashboard
    tags: ["Power BI", "Excel", "Data Visualization"],
    demoUrl: "", 
    githubUrl: "#",
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Tanmaypathak18" // Remember to update this link
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

