import { Search, MapPin, Briefcase } from 'lucide-react';
import { useState } from 'react';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    // Scroll to jobs section
    const jobsSection = document.querySelector('#jobs');
    if (jobsSection) {
      jobsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-16 pb-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional IT workplace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-corporate-blue/90 via-corporate-blue/70 to-corporate-blue/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Discover Exciting Jobs <br />
            <span className="text-blue-200">and Internships</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Your gateway to top IT careers in India. Connect with leading companies and find your dream job today.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Job Search */}
            <div className="relative">
              <div className="flex items-center">
                <Briefcase className="absolute left-4 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Job title, skills, or Job ID"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:border-corporate-blue focus:ring-2 focus:ring-corporate-blue/20 focus:outline-none transition-all"
                />
              </div>
            </div>

            {/* Location */}
            <div className="relative">
              <div className="flex items-center">
                <MapPin className="absolute left-4 text-gray-400" size={20} />
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:border-corporate-blue focus:ring-2 focus:ring-corporate-blue/20 focus:outline-none transition-all appearance-none"
                >
                  <option value="">All States</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="karnataka">Karnataka</option>
                  <option value="delhi">Delhi</option>
                  <option value="hyderabad">Telangana</option>
                  <option value="tamil-nadu">Tamil Nadu</option>
                  <option value="gujarat">Gujarat</option>
                  <option value="west-bengal">West Bengal</option>
                  <option value="punjab">Punjab</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="flex items-center justify-center bg-gradient-to-r from-corporate-blue to-corporate-blue-dark text-white font-semibold py-4 px-8 rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Search className="mr-2" size={20} />
              Search Jobs
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="text-white">
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-blue-200">Active Jobs</div>
          </div>
          <div className="text-white">
            <div className="text-4xl font-bold mb-2">100+</div>
            <div className="text-blue-200">Companies</div>
          </div>
          <div className="text-white">
            <div className="text-4xl font-bold mb-2">10K+</div>
            <div className="text-blue-200">Successful Placements</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;