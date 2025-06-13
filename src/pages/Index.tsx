import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Download, ExternalLink, Github, Linkedin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  const skills = {
    "Cloud & DevOps": ["AWS", "Jenkins", "Kubernetes", "Docker", "Terraform", "Ansible"],
    "Programming": ["Python", "Bash", "JavaScript"],
    "Monitoring & Security": ["Prometheus", "Grafana", "SonarQube", "Trivy", "OWASP"],
    "Tools": ["Git", "GitHub", "GitLab", "Jira", "Confluence"],
    "Database": ["MySQL", "MongoDB", "AWS DynamoDB"]
  };

  const projects = [
    {
      title: "Wanderlust Blogging Website",
      description: "A scalable blogging platform built with modern DevOps practices, supporting 10,000+ concurrent users with optimized performance.",
      tech: ["React.js", "MongoDB", "Redis", "AWS EKS", "ArgoCD", "Jenkins"],
      achievements: ["Reduced downtime by 60%", "Sub-50ms latency", "GitOps implementation"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Expense Tracker Application",
      description: "Full-stack expense management application with automated deployment pipeline and infrastructure as code.",
      tech: ["Spring Boot", "Thymeleaf", "MySQL", "Docker", "Terraform"],
      achievements: ["40% reduction in manual deployment", "60% cost savings", "Automated CI/CD"],
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const services = [
    {
      title: "CI/CD Pipeline Automation",
      description: "Design and implement automated deployment pipelines for faster, reliable software delivery.",
      icon: "🔄",
      color: "bg-blue-500"
    },
    {
      title: "Cloud Infrastructure",
      description: "Setup and manage scalable AWS infrastructure using Terraform and Kubernetes.",
      icon: "☁️",
      color: "bg-green-500"
    },
    {
      title: "Containerization",
      description: "Docker containerization and Kubernetes orchestration for modern applications.",
      icon: "📦",
      color: "bg-purple-500"
    },
    {
      title: "DevSecOps",
      description: "Integrate security practices into DevOps workflows with monitoring and compliance.",
      icon: "🛡️",
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              HP
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="text-foreground hover:text-blue-600 transition-colors">About</a>
              <a href="#skills" className="text-foreground hover:text-blue-600 transition-colors">Skills</a>
              <a href="#projects" className="text-foreground hover:text-blue-600 transition-colors">Projects</a>
              <a href="#contact" className="text-foreground hover:text-blue-600 transition-colors">Contact</a>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
              Let's Talk
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-6">
                <h2 className="text-lg text-blue-600 mb-2">Hello, I'm Himanshu</h2>
                <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                  Professional
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    DevOps Engineer
                  </span>
                  <br />
                  & Cloud Architect
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                  Engineering cloud-native solutions with speed, security, and scale. 3+ years of experience in automating deployments and optimizing infrastructure.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
                <Button size="lg" variant="outline">
                  View My Work
                </Button>
              </div>

              <div className="flex gap-4 mt-8 justify-center lg:justify-start">
                <Button size="icon" variant="outline" className="rounded-full">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full">
                  <Github className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-green-500 rounded-full animate-pulse opacity-20"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-blue-600 to-green-600 rounded-full"></div>
                <img 
                  src="https://i.postimg.cc/XqVgjMN9/hrpimage48kb.jpg" 
                  alt="Himanshu Palhade" 
                  className="absolute inset-6 w-full h-full object-cover object-top rounded-full"
                />
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl animate-bounce">
                  ⚡
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A driven and skilled DevOps Engineer with 3+ years in IT, experienced in CI/CD pipelines, 
              AWS cloud services, Kubernetes, Terraform, and system monitoring.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Full Name: Himanshu Rajkumar Palhade</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>Pune, Maharashtra</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span>hpalhade@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span>+91-9766693850</span>
                </div>
              </div>
            </div>

            <Card className="p-6">
              <CardContent className="p-0">
                <h4 className="text-xl font-semibold mb-4">Education</h4>
                <div className="space-y-2">
                  <h5 className="font-medium">Bachelor of Engineering – Information Technology</h5>
                  <p className="text-muted-foreground">JSPM's Rajarshi Shahu College of Engineering, Pune</p>
                  <p className="text-sm text-muted-foreground">2021 • GPA: 7.2</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-xl text-muted-foreground">
              Expertise across the modern DevOps and cloud technology stack
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={category} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="hover:bg-blue-100 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">
              Showcasing successful deployments and cloud-native solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement) => (
                        <li key={achievement} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="outline" className="w-full">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Services</h2>
            <p className="text-xl text-muted-foreground">
              I Provide Wide Range Of DevOps Services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="text-center p-6 hover:shadow-lg transition-all hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center text-2xl mb-4 mx-auto`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Achievements</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 text-center bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
              <CardContent className="p-0">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-bold mb-2">"Star Achiever" Award</h3>
                <p className="text-muted-foreground">H2 FY23, Zensar Technologies</p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-green-50 border-blue-200">
              <CardContent className="p-0">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-2">"Client Centricity" Nomination</h3>
                <p className="text-muted-foreground">Delivered $500K+ project value</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Ready to discuss your next DevOps project? Let's connect and build something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <Mail className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground">hpalhade@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <Phone className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-sm text-muted-foreground">+91-9766693850</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-sm text-muted-foreground">Pune, Maharashtra</p>
              </CardContent>
            </Card>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Button size="icon" variant="ghost">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost">
              <Github className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-muted-foreground">
            © 2024 Himanshu Palhade. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
