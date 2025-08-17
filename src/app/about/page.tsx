import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="w-full">
      <Navbar />
      {/* Hero Section */}
      <section className="p-6 md:p-12 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-purple-600">BusinessPro</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're a team of passionate consultants dedicated to helping
            businesses achieve their full potential through strategic guidance
            and innovative solutions.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="p-6 md:p-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2014, BusinessPro emerged from a simple belief: every
              business has the potential for extraordinary growth. Our founders,
              seasoned professionals with decades of combined experience,
              recognized the gap between ambitious business goals and practical
              execution.
            </p>
            <p className="text-gray-600 mb-4">
              What started as a small consulting firm has grown into a
              comprehensive business transformation partner, serving companies
              across industries and continents. We've maintained our core values
              of integrity, innovation, and results-driven service throughout
              our journey.
            </p>
            <p className="text-gray-600 mb-6">
              Today, we're proud to have helped over 500 companies achieve their
              strategic objectives, from startups scaling rapidly to established
              enterprises reinventing themselves for the digital age.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Learn About Our Approach
            </Button>
          </div>
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1695891583421-3cbbf1c2e3bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NTU0MjY0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Corporate office building"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="p-6 md:p-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity",
                description:
                  "We operate with complete transparency and honesty in all our business relationships.",
                icon: "🎯",
              },
              {
                title: "Innovation",
                description:
                  "We continuously seek creative solutions and embrace new methodologies to drive results.",
                icon: "💡",
              },
              {
                title: "Excellence",
                description:
                  "We are committed to delivering exceptional quality in every project we undertake.",
                icon: "⭐",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-purple-600">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="p-6 md:p-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Chief Executive Officer",
                bio: "Former McKinsey partner with 15+ years in strategic consulting. Led digital transformations for Fortune 500 companies.",
                initials: "SJ",
              },
              {
                name: "Michael Chen",
                role: "Chief Operating Officer",
                bio: "Ex-BCG principal specializing in operational excellence. Expert in process optimization and organizational design.",
                initials: "MC",
              },
              {
                name: "Emily Rodriguez",
                role: "Head of Growth Strategy",
                bio: "Former startup founder turned consultant. Specializes in scaling strategies and market expansion.",
                initials: "ER",
              },
              {
                name: "David Kim",
                role: "Chief Technology Officer",
                bio: "Technology leader with expertise in digital transformation and innovation strategy across multiple industries.",
                initials: "DK",
              },
              {
                name: "Lisa Thompson",
                role: "Director of Client Success",
                bio: "Customer experience expert focused on ensuring client satisfaction and long-term partnership success.",
                initials: "LT",
              },
              {
                name: "James Wilson",
                role: "Senior Partner",
                bio: "Industry veteran with deep expertise in change management and organizational transformation.",
                initials: "JW",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-xl">
                    {member.initials}
                  </span>
                </div>
                <h3 className="font-bold mb-1">{member.name}</h3>
                <p className="text-purple-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="p-6 md:p-12 bg-purple-600 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Awards & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                year: "2023",
                award: "Best Consulting Firm",
                organization: "Business Excellence Awards",
              },
              {
                year: "2022",
                award: "Innovation in Strategy",
                organization: "Consulting Industry Awards",
              },
              {
                year: "2021",
                award: "Client Satisfaction Leader",
                organization: "Professional Services Review",
              },
              {
                year: "2020",
                award: "Top Workplace Culture",
                organization: "Great Places to Work",
              },
            ].map((award, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 border-2 border-white rounded-full flex items-center justify-center">
                  <span className="font-bold text-xl">{award.year}</span>
                </div>
                <h3 className="font-bold mb-2">{award.award}</h3>
                <p className="text-purple-100 text-sm">{award.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="p-6 md:p-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-gray-600 mb-8 text-lg">
            We're always looking for talented individuals who share our passion
            for helping businesses succeed. Explore opportunities to grow your
            career with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-purple-600 hover:bg-purple-700">
              View Open Positions
            </Button>
            <Button variant="outline">Learn About Our Culture</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
