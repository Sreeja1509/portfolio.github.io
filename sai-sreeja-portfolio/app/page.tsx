"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  ChevronDown,
  Download,
  Mail,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
  Calendar,
  MapPin,
  Award,
  Code,
  Database,
  Cloud,
  Shield,
  Cpu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const TypewriterEffect = ({ texts }: { texts: string[] }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const fullText = texts[currentTextIndex]

        if (!isDeleting) {
          setCurrentText(fullText.substring(0, currentText.length + 1))

          if (currentText === fullText) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          setCurrentText(fullText.substring(0, currentText.length - 1))

          if (currentText === "") {
            setIsDeleting(false)
            setCurrentTextIndex((prev) => (prev + 1) % texts.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentTextIndex, texts])

  return (
    <span className="text-blue-400">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  )
}

const FloatingActionButton = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    title={label}
  >
    <Icon className="w-5 h-5" />
  </motion.a>
)

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  const roles = [
    "AI Developer",
    "Frontend Developer",
    "Cybersecurity Enthusiast",
    "Full Stack Developer",
    "Student",
    "Ethical Hacker",
  ]

  const skills = {
    Programming: ["Python", "JavaScript", "HTML", "CSS", "React.js", "SQL", "PHP"],
    Frameworks: ["OpenCV", "Pygame", "Scikit-learn", "Pandas", "NumPy", "TensorFlow"],
    Tools: ["Git", "Jupyter Notebook", "VS Code", "Kali Linux", "Parrot OS"],
    Cloud: ["AWS", "Google Cloud", "Azure", "Oracle"],
    Security: ["Ethical Hacking", "VAPT", "Bug Bounty", "Cryptography", "Risk Management"],
  }

  const projects = [
    {
      title: "Laravel JetSetters Web App",
      description: "Developed responsive frontend using React.js with modern UI/UX elements and smooth navigation.",
      tech: ["React.js", "CSS", "Laravel", "JavaScript"],
      year: "2025",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Secure Data Hiding in Image Using Steganography",
      description: "Python-based steganography tool using LSB encoding with encryption for enhanced security.",
      tech: ["Python", "Pygame", "Cryptography", "Kali Linux"],
      year: "2025",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Plastic Bottle Detection using ML",
      description: "YOLO and CNN-based model for real-time plastic bottle detection for environmental monitoring.",
      tech: ["Python", "YOLO", "CNN", "Machine Learning"],
      year: "2025",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const experience = [
    {
      title: "Frontend Developer (Freelancer)",
      company: "ITO by Infotech",
      period: "December 2024 – Present",
      description:
        "Designed responsive websites using React.js, optimized performance, and collaborated with clients for custom solutions.",
    },
    {
      title: "Cyber Security Virtual Internship",
      company: "IBM Skill Build & AICTE-Edunet",
      period: "January 2025 – Present",
      description:
        "Gained hands-on experience in cybersecurity fundamentals, vulnerability assessment, and penetration testing.",
    },
  ]

  const education = [
    {
      degree: "B.Tech in Artificial Intelligence and Data Science",
      institution: "Sree Venkateswara College of Engineering",
      period: "Expected: April 2026",
      grade: "GPA: 72%",
    },
    {
      degree: "Intermediate",
      institution: "Aakash Institute, Nellore",
      period: "2022",
      grade: "Percentage: 80.5%",
    },
    {
      degree: "SSC",
      institution: "Narayana Group Of Schools",
      period: "2020",
      grade: "Percentage: 98%",
    },
  ]

  const certifications = [
    "Introduction to Ethical Hacking (Great Learning)",
    "AWS APAC Solutions Architecture Job Simulation",
    "Artificial Intelligence with Python (IIT Guwahati)",
    "Master Class in Security Engineering (Nxtwave)",
    "Foundations in Cyber Security – Google (Coursera)",
    "Tata Group Cyber Security Job Simulation (Forage)",
    "MasterCard Cyber Security Job Simulation (Forage)",
  ]

  const downloadResume = () => {
    // Create a simple text version of the resume for download
    const resumeContent = `
NALLAPAREDDY SAI SREEJA
Nellore, Andhra Pradesh
+91-9949240261 | saisreejanallapareddy@gmail.com

PROFESSIONAL SUMMARY
Motivated and resourceful software engineer with a strong foundation in frontend and full-stack development...

[Full resume content would be here]
    `

    const blob = new Blob([resumeContent], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "Sai_Sreeja_Resume.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <ParticleBackground />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-40 border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              Sai Sreeja
            </motion.h1>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                NALLAPAREDDY
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 bg-clip-text text-transparent">
                SAI SREEJA
              </span>
            </h1>
            <div className="text-2xl md:text-3xl mb-8 h-12">
              <TypewriterEffect texts={roles} />
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Passionate about creating innovative software solutions and exploring the frontiers of AI and
              cybersecurity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={downloadResume}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="w-8 h-8 text-blue-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Motivated and resourceful software engineer with a strong foundation in frontend and full-stack
                  development. Proficient in programming languages like Python with expertise in React, CSS, and modern
                  frameworks. Skilled in building user-friendly applications, optimizing performance, and solving
                  complex problems through efficient coding. Passionate about leveraging my skills to create scalable,
                  responsive, and innovative software solutions in a dynamic team environment.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span>Nellore, Andhra Pradesh</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-400" />
                    <span>Available for opportunities</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, skillList], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        {category === "Programming" && <Code className="w-5 h-5 text-blue-400" />}
                        {category === "Frameworks" && <Database className="w-5 h-5 text-green-400" />}
                        {category === "Tools" && <Cpu className="w-5 h-5 text-purple-400" />}
                        {category === "Cloud" && <Cloud className="w-5 h-5 text-yellow-400" />}
                        {category === "Security" && <Shield className="w-5 h-5 text-red-400" />}
                        {category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-gray-700 text-gray-300">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm h-full overflow-hidden group">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                      <Badge className="absolute top-4 right-4 bg-blue-600">{project.year}</Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="text-gray-400">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-blue-400 text-blue-400">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        variant="outline"
                        className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Experience & Education
            </h2>

            {/* Experience */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center">Professional Experience</h3>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl">{exp.title}</CardTitle>
                            <CardDescription className="text-blue-400 font-medium">{exp.company}</CardDescription>
                          </div>
                          <Badge variant="outline" className="border-green-400 text-green-400">
                            {exp.period}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300">{exp.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">{edu.degree}</CardTitle>
                            <CardDescription className="text-blue-400">{edu.institution}</CardDescription>
                          </div>
                          <div className="text-right">
                            <Badge variant="outline" className="border-purple-400 text-purple-400 mb-2">
                              {edu.period}
                            </Badge>
                            <p className="text-sm text-green-400">{edu.grade}</p>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Certifications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm h-full">
                    <CardContent className="p-4 flex items-center gap-3">
                      <Award className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                      <p className="text-sm text-gray-300">{cert}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <p className="text-lg text-gray-300 mb-8">
                  I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                  technology!
                </p>
                <div className="space-y-4">
                  <motion.a
                    href="tel:+919949240261"
                    className="flex items-center justify-center gap-3 p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="w-5 h-5 text-green-400" />
                    <span>+91-9949240261</span>
                  </motion.a>
                  <motion.a
                    href="mailto:saisreejanallapareddy@gmail.com"
                    className="flex items-center justify-center gap-3 p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span>saisreejanallapareddy@gmail.com</span>
                  </motion.a>
                </div>
                <div className="flex justify-center gap-6 mt-8">
                  <motion.a
                    href="https://github.com/Crazycoders283"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://github.com/Sreeja1509"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/sai-sreeja-nallapareddy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin className="w-6 h-6" />
                  </motion.a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">© 2025 Nallapareddy Sai Sreeja. Built with React & Next.js</p>
        </div>
      </footer>

      {/* Floating Social Links */}
      <div className="fixed right-6 bottom-6 flex flex-col gap-4 z-50">
        <FloatingActionButton href="https://github.com/Crazycoders283" icon={Github} label="GitHub Profile 1" />
        <FloatingActionButton
          href="https://linkedin.com/in/sai-sreeja-nallapareddy"
          icon={Linkedin}
          label="LinkedIn Profile"
        />
      </div>
    </div>
  )
}
