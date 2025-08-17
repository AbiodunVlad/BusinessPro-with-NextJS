import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="w-full">
      <Navbar />
      {/* Hero Section */}
      <section className="p-6 md:p-12 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="text-purple-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ready to transform your business? We'd love to hear about your
            challenges and discuss how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="p-6 md:p-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Start a Conversation</h2>
            <Card className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Your Company" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Interest</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="strategy">
                        Strategy Consulting
                      </SelectItem>
                      <SelectItem value="digital">
                        Digital Innovation
                      </SelectItem>
                      <SelectItem value="growth">
                        Growth Optimization
                      </SelectItem>
                      <SelectItem value="market">Market Analysis</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Project Budget Range</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                      <SelectItem value="15k-50k">$15,000 - $50,000</SelectItem>
                      <SelectItem value="50k-100k">
                        $50,000 - $100,000
                      </SelectItem>
                      <SelectItem value="100k+">$100,000+</SelectItem>
                      <SelectItem value="discuss">Prefer to discuss</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your business challenges and goals..."
                    rows={5}
                  />
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Send Message
                </Button>

                <p className="text-sm text-gray-500">
                  * Required fields. We'll respond within 24 hours.
                </p>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: "📍",
                    title: "Office Locations",
                    details: [
                      "New York: 123 Business Ave, Suite 500, NYC 10001",
                      "San Francisco: 456 Innovation Blvd, SF 94102",
                      "London: 789 Strategy Lane, London EC1A 1BB",
                    ],
                  },
                  {
                    icon: "📞",
                    title: "Phone Numbers",
                    details: [
                      "US: +1 (555) 123-4567",
                      "UK: +44 20 7123 4567",
                      "Emergency: +1 (555) 987-6543",
                    ],
                  },
                  {
                    icon: "✉️",
                    title: "Email Addresses",
                    details: [
                      "General: hello@businesspro.com",
                      "New Business: partnerships@businesspro.com",
                      "Support: support@businesspro.com",
                    ],
                  },
                ].map((contact, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">{contact.icon}</div>
                      <div>
                        <h3 className="font-bold mb-2">{contact.title}</h3>
                        <div className="space-y-1">
                          {contact.details.map((detail, detailIndex) => (
                            <p
                              key={detailIndex}
                              className="text-gray-600 text-sm"
                            >
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <Card className="p-6">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <span>🕒</span> Business Hours
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span>10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span>Closed</span>
                </div>
                <div className="text-xs text-gray-500 mt-3">
                  * Times shown in EST. We accommodate clients across all time
                  zones.
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h3 className="font-bold">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  📅 Schedule a Free Consultation
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  📄 Download Our Service Brochure
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  💼 Request a Proposal
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="p-6 md:p-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "How long does a typical consulting engagement last?",
                answer:
                  "Project duration varies based on scope and complexity. Strategy projects typically range from 6-12 weeks, while implementation engagements can span 3-18 months.",
              },
              {
                question: "Do you work with companies of all sizes?",
                answer:
                  "Yes, we work with startups, SMEs, and large enterprises. Our approach is tailored to each client's size, industry, and specific needs.",
              },
              {
                question: "What industries do you specialize in?",
                answer:
                  "We have deep expertise across technology, financial services, healthcare, manufacturing, retail, and more. Our consultants bring industry-specific knowledge to every engagement.",
              },
              {
                question: "How do you measure project success?",
                answer:
                  "We establish clear KPIs at project outset and provide regular progress reports. Success metrics typically include revenue growth, cost savings, efficiency improvements, and strategic milestone achievement.",
              },
              {
                question: "Can you provide references from past clients?",
                answer:
                  "Absolutely. We're happy to connect you with relevant case studies and client references upon request, subject to confidentiality agreements.",
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="p-6 md:p-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                city: "New York",
                address: "123 Business Avenue\nSuite 500\nNew York, NY 10001",
                phone: "+1 (555) 123-4567",
                email: "nyc@businesspro.com",
              },
              {
                city: "San Francisco",
                address:
                  "456 Innovation Boulevard\nFloor 12\nSan Francisco, CA 94102",
                phone: "+1 (555) 234-5678",
                email: "sf@businesspro.com",
              },
              {
                city: "London",
                address: "789 Strategy Lane\nCanary Wharf\nLondon EC1A 1BB",
                phone: "+44 20 7123 4567",
                email: "london@businesspro.com",
              },
            ].map((location, index) => (
              <Card key={index} className="p-6 text-center">
                <h3 className="font-bold text-xl mb-4 text-purple-600">
                  {location.city}
                </h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div>
                    <div className="font-medium mb-1">Address</div>
                    <div className="whitespace-pre-line">
                      {location.address}
                    </div>
                  </div>
                  <div>
                    <div className="font-medium mb-1">Phone</div>
                    <div>{location.phone}</div>
                  </div>
                  <div>
                    <div className="font-medium mb-1">Email</div>
                    <div>{location.email}</div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="mt-4">
                  Get Directions
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="p-6 md:p-12 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="text-purple-100 mb-8 text-lg">
            For urgent matters or existing client emergencies, we're available
            24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-purple-600 hover:bg-gray-100">
              📞 Call Emergency Line
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600"
            >
              💬 Live Chat Support
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
