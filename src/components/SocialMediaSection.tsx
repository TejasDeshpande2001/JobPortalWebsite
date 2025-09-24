import { MessageCircle, Linkedin, Twitter, Send } from 'lucide-react';

const SocialMediaSection = () => {
  const socialLinks = [
    {
      name: 'Telegram',
      icon: Send,
      href: 'https://t.me/jobnexusindia',
      color: 'bg-blue-500 hover:bg-blue-600',
      description: 'Get instant job alerts and updates'
    },
    {
      name: 'LinkedIn', 
      icon: Linkedin,
      href: 'https://linkedin.com/company/jobnexusindia',
      color: 'bg-blue-700 hover:bg-blue-800',
      description: 'Professional networking and career tips'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://twitter.com/jobnexusindia',
      color: 'bg-sky-500 hover:bg-sky-600',
      description: 'Latest industry news and job updates'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/jobnexusindia',
      color: 'bg-green-500 hover:bg-green-600',
      description: 'Quick updates and support'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-corporate-blue to-corporate-blue-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Stay Connected
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Follow us for the latest job opportunities, career tips, and industry insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${social.color} transition-all duration-300 mb-4 group-hover:scale-110`}>
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {social.name}
                  </h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    {social.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              🔔 Never Miss an Opportunity!
            </h3>
            <p className="text-blue-100 mb-6">
              Join our community of 50,000+ job seekers and get notified about new opportunities instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/jobnexusindia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-corporate-blue font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Send size={20} />
                Join Telegram
              </a>
              <a
                href="https://linkedin.com/company/jobnexusindia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-corporate-blue transition-all duration-300"
              >
                <Linkedin size={20} />
                Follow on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;