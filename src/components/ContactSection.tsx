import { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-corporate-gray mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-corporate-gray-light max-w-2xl mx-auto">
            Have questions? Need support? We're here to help you succeed in your career journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-corporate-gray mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-corporate-blue-light rounded-lg flex items-center justify-center">
                    <Mail className="text-corporate-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-corporate-gray mb-1">Email Us</h4>
                    <p className="text-corporate-gray-light mb-2">For general inquiries and support</p>
                    <a 
                      href="mailto:hello@jobnexusindia.com"
                      className="text-corporate-blue hover:text-corporate-blue-dark font-medium transition-colors"
                    >
                      hello@jobnexusindia.com
                    </a>
                  </div>
                </div>

                {/* Technical Support */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-corporate-blue-light rounded-lg flex items-center justify-center">
                    <Phone className="text-corporate-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-corporate-gray mb-1">Technical Support</h4>
                    <p className="text-corporate-gray-light mb-2">Having trouble with the website?</p>
                    <a 
                      href="mailto:support@jobnexusindia.com"
                      className="text-corporate-blue hover:text-corporate-blue-dark font-medium transition-colors"
                    >
                      support@jobnexusindia.com
                    </a>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-corporate-blue-light rounded-lg flex items-center justify-center">
                    <Clock className="text-corporate-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-corporate-gray mb-1">Response Time</h4>
                    <p className="text-corporate-gray-light">
                      We typically respond within 24 hours during business days
                    </p>
                  </div>
                </div>

                {/* Office Location */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-corporate-blue-light rounded-lg flex items-center justify-center">
                    <MapPin className="text-corporate-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-corporate-gray mb-1">Headquarters</h4>
                    <p className="text-corporate-gray-light">
                      Bangalore, Karnataka<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="text-corporate-blue" size={28} />
              <h3 className="text-2xl font-semibold text-corporate-gray">
                Send us a Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-corporate-gray mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-corporate-blue focus:ring-2 focus:ring-corporate-blue/20 focus:outline-none transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-corporate-gray mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-corporate-blue focus:ring-2 focus:ring-corporate-blue/20 focus:outline-none transition-all"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-corporate-gray mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-corporate-blue focus:ring-2 focus:ring-corporate-blue/20 focus:outline-none transition-all resize-vertical"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-corporate-blue to-corporate-blue-dark text-white font-semibold py-4 px-6 rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;