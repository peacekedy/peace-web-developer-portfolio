import React from "react";
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon, Code2Icon, Paintbrush, SparklesIcon, GaugeIcon, MonitorIcon, Globe2Icon, ArrowRightIcon, CheckCircle2Icon } from "lucide-react";
import profilePic from './assets/Peace.jpeg';

function App() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "JavaScript", proficiency: 90 },
        { name: "HTML", proficiency: 95 },
        { name: "CSS", proficiency: 85 },
        { name: "React", proficiency: 80 },
        { name: "Tailwind CSS", proficiency: 85 }
      ]
    },
    {
      category: "WordPress",
      items: [
        { name: "Theme Customization", proficiency: 90 },
        { name: "Website Making", proficiency: 99 },
        { name: "WooCommerce", proficiency: 90 },
        { name: "Performance Optimization", proficiency: 85 }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "SpringBoot", proficiency: 75 },
        { name: "MySQL", proficiency: 70 },
        { name: "REST API", proficiency: 75 },
        { name: "NODE JS", proficiency: 75 }
      ]
    }
  ];

  const services = [
    {
      title: "WordPress Development",
      description: "Custom WordPress solutions tailored to your business needs",
      icon: <Code2Icon className="w-8 h-8" />
    },
    {
      title: "Frontend Development",
      description: "Responsive, modern interfaces with HTML, CSS, and JavaScript",
      icon: <MonitorIcon className="w-8 h-8" />
    },
    {
      title: "Web Design",
      description: "Intuitive and engaging user experiences focused on conversion",
      icon: <Paintbrush className="w-8 h-8" />
    },
    {
      title: "Performance Optimization",
      description: "Speed up your website for better SEO and user satisfaction",
      icon: <GaugeIcon className="w-8 h-8" />
    }
  ];

  const projects = [
    {
      name: "Kick It Ambassadors",
      url: "https://kickitambassadors.org",
      description: "Premium WordPress-powered Non Profit website",
      features: ["Custom Theme", "Woocommerce", "Mobile Responsive"]
    },
    {
      name: "Elevate Group",
      url: "https://elevatearchitectsgroup.com/",
      description: "Architects Group Website",
      features: ["Design Group", "Project showcasing", "Mobile Responsive"]
    },
    {
      name: "Kigali Concierge",
      url: "https://kigaliconcierge.com",
      description: "Premium WordPress-powered tourism platform with custom booking system",
      features: ["Custom Theme", "Booking System", "Mobile Responsive"]
    },
    {
      name: "RivExcel Tours",
      url: "https://tours.rivexcelgroup.com",
      description: "Dynamic tour booking platform built with WordPress",
      features: ["WooCommerce", "Custom Plugins", "Tour Management"]
    },
    {
      name: "Lightside Adventures",
      url: "https://lightsideadventures.com",
      description: "Adventure tourism site with rich media galleries",
      features: ["Media Optimization", "Tour Booking", "Interactive Maps"]
    },
    {
      name: "RivExcel Health",
      url: "https://health.rivexcelgroup.com",
      description: "Health Website",
      features: ["Healthcare Interface", "Appointment Booking", "Resource Library"]
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Custom Font Import - Add this to your index.html or CSS file */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Playfair Display', serif;
        }
        
        body, p, a, span, div, button, input, textarea {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <div className="relative w-full max-w-7xl mx-auto px-4 py-12 md:py-20">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Profile Image Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 rounded-3xl transform -rotate-6 scale-105 group-hover:rotate-6 transition-transform duration-500 opacity-20" />
                <div className="relative bg-gray-50 p-6 rounded-3xl shadow-xl">
                  <div className="aspect-square rounded-2xl overflow-hidden border-4 border-blue-50 shadow-xl">
                    <img
                      src={profilePic}
                      alt="Peace Namahoro"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 p-6 rounded-3xl space-y-4 shadow-xl">
                <div className="flex items-center gap-3 text-blue-900 hover:text-blue-700 transition-colors">
                  <PhoneIcon className="w-5 h-5 flex-shrink-0" />
                  <a href="+250784634309" className="text-lg font-medium">+250784634309</a>
                </div>
                <div className="flex items-center gap-3 text-blue-900 hover:text-blue-700 transition-colors">
                  <PhoneIcon className="w-5 h-5 flex-shrink-0" />
                  <a href="+250784634309" className="text-lg font-medium">+250784634309</a>
                </div>
                <div className="flex items-center gap-3 text-blue-900 hover:text-blue-700 transition-colors">
                  <MailIcon className="w-5 h-5 flex-shrink-0" />
                  <a href="mailto:peacenam09@gmail.com" className="text-lg font-medium">peacenam09@gmail.com</a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/peace-namahoro-b04aba221/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-900 p-4 rounded-xl text-white hover:bg-blue-700 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  <LinkedinIcon className="w-7 h-7" />
                </a>
                <a
                  href="https://github.com/chretie17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-900 p-4 rounded-xl text-white hover:bg-blue-700 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  <GithubIcon className="w-7 h-7" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-900 p-4 rounded-xl text-white hover:bg-blue-700 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  <Globe2Icon className="w-7 h-7" />
                </a>
              </div>
            </div>

            {/* Information Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-gray-50 p-8 rounded-3xl shadow-xl">
                <h1 className="text-5xl md:text-7xl font-bold text-blue-900 mb-6 tracking-tight leading-tight">
                  Peace Namahoro
                </h1>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl text-blue-800 font-semibold mb-4">
                      Web Developer,WordPress and Devops Specialist
                    </h2>
                    <p className="text-xl text-blue-900 leading-relaxed font-light">
                      Transforming ideas into powerful WordPress solutions with a focus on performance, 
                      user experience, and business growth. Passionate about clean code and intuitive interfaces.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 pt-6">
                    <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
                      <h3 className="text-xl font-semibold text-blue-900 mb-2">Experience</h3>
                      <p className="text-blue-800 font-light">3+ years designing premium WordPress solutions</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
                      <h3 className="text-xl font-semibold text-blue-900 mb-2">Location</h3>
                      <p className="text-blue-800 font-light">Based in Kigali, Rwanda</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-blue-900 mb-16 text-center">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">{skillGroup.category}</h3>
                <div className="space-y-6">
                  {skillGroup.items.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-lg text-blue-800 font-medium">{skill.name}</span>
                        <span className="text-blue-700 font-medium">{skill.proficiency}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-gradient-to-r from-blue-900 to-blue-700 h-2.5 rounded-full" 
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-blue-900 mb-16 text-center">
            Services I Offer
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-3xl hover:bg-blue-50 transition-all duration-300 hover:-translate-y-2 shadow-xl border-b-4 border-blue-700">
                <div className="bg-blue-900 p-4 inline-flex rounded-2xl text-white mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{service.title}</h3>
                <p className="text-blue-800 font-light">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-blue-900 mb-16 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden hover:bg-blue-50 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
              >
                <div className="relative aspect-[16/10]">
                  <iframe
                    src={project.url}
                    title={project.name}
                    className="absolute inset-0 w-full h-full border-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-blue-900 mb-3">
                    {project.name}
                  </h3>
                  <p className="text-blue-800 text-lg mb-6 font-light">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.map((feature, i) => (
                      <span key={i} className="text-sm bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 group/btn shadow-lg"
                  >
                    <span>View Live Site</span>
                    <ArrowRightIcon className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-blue-900 mb-16 text-center">
            Why Clients Love My Work
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alle Iradukunda",
                role: "CEO - Eccelenza Technology",
                message:
                  "Working with Peace was an excellent experience. The attention to detail and commitment to delivering high-quality work exceeded our DevOps expectations."
              },
              {
                name: "Mucyo Ivan",
                role: "CEO - DerraliEngineering Company",
                message:
                  "Peace helped us scale our infrastructure seamlessly. The professionalism and expertise brought so much value to our company."
              },
              {
                name: "Asaph Twahirwa",
                role: "Founder - Startup Hub",
                message:
                  "I was impressed by the fast delivery and clean solutions. Peace goes above and beyond to ensure client satisfaction."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-3xl shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-blue-900">{testimonial.name}</h4>
                    <p className="text-blue-700">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-blue-800 text-lg font-light italic">
                  "{testimonial.message}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold text-blue-900 mb-8 text-center">
            Let's Work Together
          </h2>
          <p className="text-xl text-blue-800 text-center mb-12 font-light">
            Ready to transform your online presence? Get in touch to discuss your project needs.
          </p>
          
          <div className="bg-white p-8 rounded-3xl mb-12 shadow-2xl">
            <form
              action="https://formspree.io/f/xdkeprdw" 
              method="POST"
              className="grid md:grid-cols-2 gap-6"
            >
              <div>
                <label className="block text-blue-800 mb-2 font-medium">Name</label>
                <input 
                  type="text" 
                  name="name"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-700"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-blue-800 mb-2 font-medium">Email</label>
                <input 
                  type="email" 
                  name="email"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-700"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-blue-800 mb-2 font-medium">Message</label>
                <textarea 
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-700 h-32"
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-300 shadow-lg">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl flex flex-col items-center text-center shadow-xl">
              <PhoneIcon className="w-8 h-8 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Phone</h3>
              <p className="text-blue-800">+250 788 841 213</p>
            </div>
            <div className="bg-white p-6 rounded-3xl flex flex-col items-center text-center shadow-xl">
              <MailIcon className="w-8 h-8 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Email</h3>
              <p className="text-blue-800">peacenam09@gmail.com</p>
            </div>
            <div className="bg-white p-6 rounded-3xl flex flex-col items-center text-center shadow-xl">
              <Globe2Icon className="w-8 h-8 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Location</h3>
              <p className="text-blue-800">Kigali, Rwanda</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-blue-800 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xl flex items-center justify-center gap-2">
            Crafted with <SparklesIcon className="w-6 h-6 text-blue-900" /> by Peace Namahoro © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;