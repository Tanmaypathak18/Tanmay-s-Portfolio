import {
  Instagram,
  Linkedin,
  LucideBook,
  Mail,
  MapPin,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        {/* Flex container to center the card */}
        <div className="flex justify-center">
          {/* Contact Info Card */}
          <div className="bg-card p-8 rounded-lg shadow-xs card-hover w-full max-w-lg">
            <div className="space-y-8">
              {/* This container will shrink to fit its content, then be centered */}
              <div className="w-fit mx-auto space-y-6">
                
                {/* Email Section */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium"> Email</h4>
                    <a
                      href="mailto:tanmaypathak063@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      tanmaypathak063@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location Section */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium"> Location</h4>
                    <p className="text-muted-foreground">
                      San Jose, CA, United States
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 text-center">
                <h4 className="font-medium mb-4"> Connect With Me</h4>
                <div className="flex space-x-6 justify-center">
                  <a href="https://www.linkedin.com/in/tanmay-pathak21/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin />
                  </a>
                  <a href="https://www.instagram.com/tanmay1803?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Instagram />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <LucideBook />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

