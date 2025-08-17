// import { ImageWithFallback } from "./figma/ImageWithFallback";
// import { Button } from "./ui/button";
// import { Card } from "./ui/card";
// import { Badge } from "./ui/badge";

import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ServicesPage() {
  return (
    <div className="w-full">
      <Navbar />
      {/* Hero Section */}
      <section className="p-6 md:p-12 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-purple-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive business solutions designed to accelerate your growth
            and transform your organization for lasting success.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="p-6 md:p-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Core Service Areas
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: "Strategy Consulting",
                description:
                  "Transform your business vision into actionable strategic plans that drive sustainable growth and competitive advantage.",
                features: [
                  "Strategic Planning & Roadmapping",
                  "Market Entry & Expansion",
                  "Competitive Analysis",
                  "Business Model Innovation",
                  "Merger & Acquisition Support",
                ],
                image:
                  "https://images.unsplash.com/photo-1551135049-8a33b5883817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzU1MzMwOTAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                color: "purple",
              },
              {
                title: "Digital Innovation",
                description:
                  "Leverage cutting-edge technology solutions to modernize operations and create new revenue streams.",
                features: [
                  "Digital Transformation Strategy",
                  "Technology Implementation",
                  "Process Automation",
                  "Data Analytics & Insights",
                  "Innovation Workshops",
                ],
                image:
                  "https://images.unsplash.com/photo-1515355252367-42ae86cb92f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NTU0MjY0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                color: "blue",
              },
              {
                title: "Growth Optimization",
                description:
                  "Systematically improve performance across all business functions to maximize efficiency and profitability.",
                features: [
                  "Performance Assessment",
                  "Process Improvement",
                  "Cost Optimization",
                  "Revenue Enhancement",
                  "Scaling Strategies",
                ],
                image:
                  "https://images.unsplash.com/photo-1551135049-8a33b5883817",
                color: "green",
              },
              {
                title: "Market Analysis",
                description:
                  "Gain deep insights into market dynamics, customer behavior, and competitive landscape to inform strategic decisions.",
                features: [
                  "Market Research & Insights",
                  "Customer Segmentation",
                  "Competitive Intelligence",
                  "Trend Analysis",
                  "Go-to-Market Strategy",
                ],
                image:
                  "https://images.unsplash.com/photo-1515355252367-42ae86cb92f9",
                color: "orange",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge
                      className={`bg-${service.color}-100 text-${service.color}-600 hover:bg-${service.color}-100`}
                    >
                      Core Service
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="p-6 md:p-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Industry Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                industry: "Technology & Software",
                icon: "💻",
                projects: "150+",
              },
              { industry: "Financial Services", icon: "🏦", projects: "120+" },
              {
                industry: "Healthcare & Life Sciences",
                icon: "🏥",
                projects: "90+",
              },
              { industry: "Manufacturing", icon: "🏭", projects: "75+" },
              { industry: "Retail & E-commerce", icon: "🛍️", projects: "110+" },
              { industry: "Energy & Utilities", icon: "⚡", projects: "65+" },
              { industry: "Education", icon: "🎓", projects: "45+" },
              { industry: "Real Estate", icon: "🏢", projects: "55+" },
              { industry: "Transportation", icon: "🚛", projects: "40+" },
            ].map((industry, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3">{industry.icon}</div>
                <h3 className="font-bold mb-2">{industry.industry}</h3>
                <div className="text-purple-600 font-medium">
                  {industry.projects} Projects
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="p-6 md:p-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We conduct thorough analysis of your business, challenges, and objectives.",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "We develop customized solutions aligned with your specific goals and context.",
              },
              {
                step: "03",
                title: "Implementation",
                description:
                  "We work alongside your team to execute the strategy with precision and care.",
              },
              {
                step: "04",
                title: "Optimization",
                description:
                  "We monitor progress and continuously refine approaches for maximum impact.",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {phase.step}
                </div>
                <h3 className="font-bold mb-2">{phase.title}</h3>
                <p className="text-gray-600 text-sm">{phase.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-8 h-0.5 bg-purple-200 transform -translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="p-6 md:p-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Service Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "Starting at $5,000",
                description: "Perfect for small businesses and startups",
                features: [
                  "Initial business assessment",
                  "Strategic roadmap",
                  "2 consultation sessions",
                  "Basic market analysis",
                  "Email support",
                ],
                popular: false,
              },
              {
                name: "Professional",
                price: "Starting at $15,000",
                description: "Ideal for growing companies",
                features: [
                  "Comprehensive analysis",
                  "Detailed strategy development",
                  "Monthly consultation sessions",
                  "Implementation support",
                  "Priority support",
                  "Performance tracking",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom Pricing",
                description: "Full-scale transformation programs",
                features: [
                  "End-to-end transformation",
                  "Dedicated team assignment",
                  "Weekly strategy sessions",
                  "Change management",
                  "24/7 support",
                  "Executive reporting",
                  "Long-term partnership",
                ],
                popular: false,
              },
            ].map((tier, index) => (
              <Card
                key={index}
                className={`p-6 relative ${
                  tier.popular ? "border-purple-600 shadow-lg" : ""
                }`}
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white">
                    Most Popular
                  </Badge>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-2xl font-bold text-purple-600 mb-2">
                    {tier.price}
                  </div>
                  <p className="text-gray-600 text-sm">{tier.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    tier.popular ? "bg-purple-600 hover:bg-purple-700" : ""
                  }`}
                  variant={tier.popular ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="p-6 md:p-12 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-purple-100 mb-8 text-lg">
            Let's discuss which services align best with your goals and create a
            customized plan for success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-purple-600 hover:bg-gray-100">
              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600"
            >
              Download Service Guide
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
