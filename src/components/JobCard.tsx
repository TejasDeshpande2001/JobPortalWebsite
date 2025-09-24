import { MapPin, Calendar, IndianRupee, Users, Briefcase } from 'lucide-react';

interface JobCardProps {
  job: {
    id: string;
    title: string;
    skills: string[];
    experience: string;
    salary: string;
    location: string;
    company: string;
    type: string;
    postedDate: string;
  };
  onClick: () => void;
}

const JobCard = ({ job, onClick }: JobCardProps) => {
  return (
    <div 
      className="job-card p-6 cursor-pointer group"
      onClick={onClick}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-corporate-gray group-hover:text-corporate-blue transition-colors">
            {job.title}
          </h3>
          <p className="text-corporate-gray-light font-medium mt-1">{job.company}</p>
        </div>
        <div className="flex items-center gap-2 text-xs bg-corporate-blue-light text-corporate-blue px-3 py-1 rounded-full">
          <Calendar size={12} />
          {job.postedDate}
        </div>
      </div>

      {/* Job Details */}
      <div className="space-y-3">
        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {job.skills.slice(0, 4).map((skill, index) => (
            <span 
              key={index}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
            >
              {skill}
            </span>
          ))}
          {job.skills.length > 4 && (
            <span className="text-xs text-gray-500">+{job.skills.length - 4} more</span>
          )}
        </div>

        {/* Experience, Salary, Location */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <Users size={16} className="text-corporate-blue" />
            <span>{job.experience}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <IndianRupee size={16} className="text-corporate-blue" />
            <span>{job.salary}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin size={16} className="text-corporate-blue" />
            <span>{job.location}</span>
          </div>
        </div>

        {/* Job Type */}
        <div className="flex items-center gap-2 text-sm">
          <Briefcase size={16} className="text-corporate-blue" />
          <span className="text-gray-600">{job.type}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Job ID: {job.id}</span>
          <button className="text-corporate-blue hover:text-corporate-blue-dark font-medium text-sm transition-colors">
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;