import { useState, useEffect } from 'react';
import { Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import JobCard from './JobCard';

// Mock job data
const mockJobs = [
  {
    id: 'JN001',
    title: 'Senior React Developer',
    company: 'TechCorp Solutions',
    skills: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'AWS'],
    experience: '3-5 years',
    salary: '8-15 LPA',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    postedDate: '2 days ago'
  },
  {
    id: 'JN002', 
    title: 'Full Stack Developer',
    company: 'Innovation Labs',
    skills: ['Python', 'Django', 'React', 'PostgreSQL', 'Docker'],
    experience: '2-4 years',
    salary: '6-12 LPA',
    location: 'Mumbai, Maharashtra',
    type: 'Full-time',
    postedDate: '1 day ago'
  },
  {
    id: 'JN003',
    title: 'DevOps Engineer',
    company: 'CloudTech Inc',
    skills: ['AWS', 'Kubernetes', 'Jenkins', 'Docker', 'Terraform'],
    experience: '4-6 years',
    salary: '10-18 LPA',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    postedDate: '3 days ago'
  },
  {
    id: 'JN004',
    title: 'Data Scientist Intern',
    company: 'AI Dynamics',
    skills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL', 'Statistics'],
    experience: '0-1 years',
    salary: '25K-40K/month',
    location: 'Delhi, NCR',
    type: 'Internship',
    postedDate: '1 day ago'
  },
  {
    id: 'JN005',
    title: 'Mobile App Developer',
    company: 'MobiTech Solutions',
    skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase'],
    experience: '2-3 years',
    salary: '5-10 LPA',
    location: 'Pune, Maharashtra',
    type: 'Full-time',
    postedDate: '4 days ago'
  },
  {
    id: 'JN006',
    title: 'UI/UX Designer',
    company: 'Design Studio Pro',
    skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Research'],
    experience: '1-3 years',
    salary: '4-8 LPA',
    location: 'Chennai, Tamil Nadu',
    type: 'Full-time',
    postedDate: '2 days ago'
  }
];

const JobListings = () => {
  const [jobs, setJobs] = useState(mockJobs);
  const [filteredJobs, setFilteredJobs] = useState(mockJobs);
  const [searchTerm, setSearchTerm] = useState('');
  const [stateFilter, setStateFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 4;

  // Filter jobs based on search term and state
  useEffect(() => {
    let filtered = jobs;

    if (searchTerm) {
      filtered = filtered.filter(job =>
        job.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (stateFilter && stateFilter !== 'all') {
      filtered = filtered.filter(job =>
        job.location.toLowerCase().includes(stateFilter.toLowerCase())
      );
    }

    setFilteredJobs(filtered);
    setCurrentPage(1);
  }, [searchTerm, stateFilter, jobs]);

  // Pagination
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const currentJobs = filteredJobs.slice(startIndex, startIndex + jobsPerPage);

  const handleJobClick = (job: any) => {
    // Here you would navigate to job details page
    console.log('Clicked job:', job);
  };

  return (
    <section id="jobs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-corporate-gray mb-4">
            Current Openings
          </h2>
          <p className="text-xl text-corporate-gray-light max-w-2xl mx-auto">
            Explore exciting career opportunities with top companies across India
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search Bar */}
            <div className="md:col-span-2 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by Job ID, Job Title, or Skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-corporate-blue focus:ring-2 focus:ring-corporate-blue/20 focus:outline-none transition-all"
              />
            </div>

            {/* State Filter */}
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={stateFilter}
                onChange={(e) => setStateFilter(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-corporate-blue focus:ring-2 focus:ring-corporate-blue/20 focus:outline-none transition-all appearance-none"
              >
                <option value="">All States</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="karnataka">Karnataka</option>
                <option value="delhi">Delhi</option>
                <option value="telangana">Telangana</option>
                <option value="tamil nadu">Tamil Nadu</option>
                <option value="gujarat">Gujarat</option>
                <option value="west bengal">West Bengal</option>
                <option value="punjab">Punjab</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {currentJobs.length} of {filteredJobs.length} jobs
          </div>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {currentJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onClick={() => handleJobClick(job)}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search size={64} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No jobs found</h3>
            <p className="text-gray-500">Try adjusting your search terms or filters</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={20} />
              Previous
            </button>
            
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentPage === page
                      ? 'bg-corporate-blue text-white'
                      : 'border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;