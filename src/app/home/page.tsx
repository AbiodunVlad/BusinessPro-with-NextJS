import { Button } from "@/components/ui/button";
// import { Badge } from "./ui/badge";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="w-full h-full overflow-y-auto bg-white">
      {/* Header */}

      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center p-6 md:p-12 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Streamline your{" "}
            <span className="text-purple-600">business growth</span> with expert
            solutions
          </h1>
          <p className="text-lg text-gray-600">
            We help ambitious companies accelerate their growth through
            strategic consulting, innovative solutions, and proven
            methodologies.
          </p>
          <div className="flex gap-4">
            <Button className="bg-purple-600 hover:bg-purple-700">
              Start Your Journey
            </Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
        <div className="flex-1 mt-8 md:mt-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1496180470114-6ef490f3ff22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFufGVufDF8fHx8MTc1NTMyNjg4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Professional business woman"
            className="w-full xl:h-[35rem] h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Team/Testimonials Section */}
      <section className="p-6 md:p-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Expert Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              role: "Strategy Consultant",
              image:
                "https://images.unsplash.com/photo-1496180470114-6ef490f3ff22",
            },
            {
              name: "Michael Chen",
              role: "Business Analyst",
              image:
                "https://images.unsplash.com/photo-1739287088635-444554e7ac0e",
            },
            {
              name: "Emily Rodriguez",
              role: "Growth Specialist",
              image:
                "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1",
            },
          ].map((member, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-xl">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <h3 className="font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <p className="text-sm text-gray-500">
                "Dedicated to helping businesses achieve their full potential
                through innovative strategies."
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="p-6 md:p-12 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About BusinessPro</h2>
            <p className="text-gray-600 mb-4">
              With over 10 years of experience in business consulting, we've
              helped hundreds of companies transform their operations and
              achieve sustainable growth.
            </p>
            <p className="text-gray-600 mb-6">
              Our proven methodologies and data-driven approach ensure that
              every strategy we implement delivers measurable results for your
              business.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Learn More About Us
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                500+
              </div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Expert Consultants</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="p-6 md:p-12">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Strategy Consulting",
              desc: "Strategic planning and business transformation",
            },
            {
              title: "Digital Innovation",
              desc: "Technology solutions for modern businesses",
            },
            {
              title: "Growth Optimization",
              desc: "Performance improvement and scaling strategies",
            },
            {
              title: "Market Analysis",
              desc: "Comprehensive market research and insights",
            },
          ].map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-purple-600 rounded"></div>
              </div>
              <h3 className="font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="p-6 md:p-12 bg-purple-600 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your business goals with
            our proven strategies and expert guidance.
          </p>
          <Button className="bg-white text-purple-600 hover:bg-gray-100">
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      {/* <footer className="p-6 md:p-12 bg-gray-900 text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-purple-600 rounded"></div>
              <span className="font-medium">BusinessPro</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering businesses to reach their full potential through
              strategic consulting and innovation.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Strategy Consulting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Digital Innovation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Growth Optimization
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>hello@businesspro.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Business St, City</li>
            </ul>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
