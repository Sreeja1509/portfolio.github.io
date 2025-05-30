// Typewriter Effect
class TypeWriter {
    constructor(element, texts, speed = 100, deleteSpeed = 50, pauseTime = 2000) {
        this.element = element;
        this.texts = texts;
        this.speed = speed;
        this.deleteSpeed = deleteSpeed;
        this.pauseTime = pauseTime;
        this.currentTextIndex = 0;
        this.currentText = '';
        this.isDeleting = false;
        this.start();
    }

    start() {
        this.type();
    }

    type() {
        const fullText = this.texts[this.currentTextIndex];

        if (!this.isDeleting) {
            this.currentText = fullText.substring(0, this.currentText.length + 1);
            this.element.textContent = this.currentText;

            if (this.currentText === fullText) {
                setTimeout(() => {
                    this.isDeleting = true;
                    this.type();
                }, this.pauseTime);
                return;
            }
        } else {
            this.currentText = fullText.substring(0, this.currentText.length - 1);
            this.element.textContent = this.currentText;

            if (this.currentText === '') {
                this.isDeleting = false;
                this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
            }
        }

        const timeout = this.isDeleting ? this.deleteSpeed : this.speed;
        setTimeout(() => this.type(), timeout);
    }
}

// Particle Background
class ParticleSystem {
    constructor() {
        this.container = document.getElementById('particles-container');
        this.particles = [];
        this.createParticles();
    }

    createParticles() {
        for (let i = 0; i < 50; i++) {
            this.createParticle();
        }
    }

    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const x = Math.random() * window.innerWidth;
        const y = window.innerHeight + 10;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;

        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.animationDuration = duration + 's';
        particle.style.animationDelay = delay + 's';

        this.container.appendChild(particle);

        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
                this.createParticle(); // Create new particle
            }
        }, (duration + delay) * 1000);
    }
}

// Smooth Scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Scroll Animation Observer
class ScrollAnimator {
    constructor() {
        this.observer = new IntersectionObserver(
            (entries) => this.handleIntersection(entries),
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );
        this.init();
    }

    init() {
        // Add animation classes to elements
        const animatedElements = document.querySelectorAll('.card, .project-card, .timeline-item, .education-item, .certification-item');
        
        animatedElements.forEach((el, index) => {
            el.classList.add('fade-in');
            if (index % 2 === 0) {
                el.classList.add('slide-in-left');
            } else {
                el.classList.add('slide-in-right');
            }
            this.observer.observe(el);
        });
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                this.observer.unobserve(entry.target);
            }
        });
    }
}

// Download Resume Function
function downloadResume() {
    const resumeContent = `
NALLAPAREDDY SAI SREEJA
Nellore, Andhra Pradesh
+91-9949240261 | saisreejanallapareddy@gmail.com
LinkedIn: Sai Sreeja Nallapareddy
GitHub: https://github.com/Crazycoders283, https://github.com/Sreeja1509

PROFESSIONAL SUMMARY
Motivated and resourceful software engineer with a strong foundation in frontend and full-stack development. 
Proficient in programming languages like Python with expertise in REACT, CSS, and modern frameworks. 
Skilled in building user-friendly applications, optimizing performance, and solving complex problems through 
efficient coding. Passionate about leveraging my skills to create scalable, responsive, and innovative software 
solutions in a dynamic team environment.

TECHNICAL SKILLS
Programming: Python, JavaScript, HTML, CSS, React.js, SQL, PHP
Frameworks: OpenCV, Pygame, Scikit-learn, Pandas, Matlab, NumPy, Tensorflow
Tools: Git, Jupyter Notebook, VS Code
Key Skills: SQL, PHP, NOSQL, API, Data Handling and Practices
Cloud Platforms: AWS, Google Cloud, Azure, Oracle
Security Skills: Cyber Security, Ethical Hacking, VAPT, Bug Bounty, Cryptography, Risk Management
Operating Systems: Windows, Linux Mint, Unix, Kali Linux, Parrot OS, Android
Soft Skills: Problem Solving, Collaboration, Analytical Thinking, Adaptability

PROJECTS
Laravel JetSetters Web App (2025)
- Developed the frontend using React.Js, CSS, ensuring a responsive and user-friendly interface.
- Integrated modern UI/UX elements for smooth navigation and an interactive user experience.
- Designed layouts and components to align with Laravel's backend structure, optimizing performance and consistency.

Secure Data Hiding in Image Using Steganography (2025)
- Built an interactive game using Python and Pygame with dynamic difficulty levels.
- Developed a Python-based steganography tool to securely hide and retrieve secret messages within image files.
- Implemented LSB (Least Significant Bit) encoding for efficient data concealment while maintaining image integrity.
- Integrated encryption techniques to enhance data security and tested the tool in a Kali Linux environment.

Plastic Bottle Detection using ML – Key Points (2025)
- Implemented YOLO and CNN-based model for real-time plastic bottle detection
- Trained on a labeled dataset with data augmentation and optimization techniques.
- Designed for environmental monitoring and waste management applications.

EDUCATION
Sree Venkateswara College of Engineering, North Rajupalem
B.Tech in Artificial Intelligence and Data Science (Expected: APRIL,2026), GPA: 72%

Aakash Institute, Nellore
Intermediate (2022), Percentage: 80.5%

Narayana Group Of Schools, Vizianagaram
SSC (2020), Percentage: 98%

EXPERIENCE
Frontend Developer (Freelancer) - ITO by Infotech (December/2024 – Present)
- Designed and developed responsive, user-friendly websites using HTML, CSS, JavaScript, and React.js.
- Optimized website performance, ensuring fast load times, cross-browser compatibility, and mobile responsiveness.
- Collaborated with clients to understand requirements and deliver custom web solutions on time.

Cyber Security Virtual Internship - IBM Skill Build & AICTE-Edunet (January/2025 – Present)
- Gained hands-on experience in cybersecurity fundamentals, risk management, and threat analysis.
- Worked on network security, vulnerability assessment, and penetration testing using industry-standard tools.
- Developed incident response strategies and documented security best practices for mitigation.

CERTIFICATIONS
- Introduction to Ethical Hacking (Great Learning) | Jun 2024
- AWS APAC- Solutions Architecture Job Simulation | Mar 2025
- Artificial Intelligence with Python (IIT Guwahati) | Jun 2023
- Master Class in Security Engineering (Nxtwave) | Jun 2023
- Tata Group- Cyber Security Job Simulation (Forage) | Feb 2024
- Foundations in Cyber Security – Google (Coursera) | Mar 2024
- MasterCard- Cyber Security Job Simulation (Forage) | Feb 2024
- Data Analytics Mega Work Shop (Nxtwave) | Feb 2024
- Commonwealth Bank- Introduction to Cyber Security Job Simulation (Forage) |Sep 2024
- Ethical Hacking (Cisco) |Jun 2024
- PwC Switzerland- Cyber Security Job Simulation (Forage) |Oct 2024

EXTRA-CURRICULAR ACTIVITIES
- Certificate of Participation in Online Quiz of Flipkart Runaway (Unstop)| April 2024
- Certificate of Participation in Submission Round of Hackademia 2k24 (Unstop) |Oct 2024
- Participated In InfoSec University Hackathon | Jan 2025
- Participated in Job-a-Thon, Score: 75 (Geeks For Geeks) | Feb 2025
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Sai_Sreeja_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Mobile Navigation
class MobileNav {
    constructor() {
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        this.hamburger.addEventListener('click', () => this.toggleMenu());
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });
    }

    toggleMenu() {
        this.hamburger.classList.toggle('active');
        this.navMenu.classList.toggle('active');
    }

    closeMenu() {
        this.hamburger.classList.remove('active');
        this.navMenu.classList.remove('active');
    }
}

// Navbar Scroll Effect
class NavbarScroll {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.handleScroll());
    }

    handleScroll() {
        if (window.scrollY > 100) {
            this.navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        } else {
            this.navbar.style.background = 'rgba(15, 23, 42, 0.8)';
        }
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize typewriter effect
    const typewriterElement = document.getElementById('typewriter');
    const roles = [
        'AI Developer',
        'Frontend Developer', 
        'Cybersecurity Enthusiast',
        'Full Stack Developer',
        'Student',
        'Ethical Hacker'
    ];
    new TypeWriter(typewriterElement, roles);

    // Initialize particle system
    new ParticleSystem();

    // Initialize scroll animations
    new ScrollAnimator();

    // Initialize mobile navigation
    new MobileNav();

    // Initialize navbar scroll effect
    new NavbarScroll();

    // Add download resume functionality
    document.getElementById('download-resume').addEventListener('click', downloadResume);

    // Add smooth scrolling to navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    // Add staggered animation delays to certification items
    document.querySelectorAll('.certification-item').forEach((item, index) => {
        item.style.setProperty('--i', index + 1);
    });

    // Add hover effects to project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click effects to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});