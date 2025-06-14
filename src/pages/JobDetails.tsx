import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Share, MapPin, Clock, Calendar, BriefcaseBusiness, DollarSign, FileText, BookmarkPlus, Bookmark } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from '@/contexts/AuthContext';
import { useSavedJobs } from '@/contexts/SavedJobsContext';

const JobDetails = () => {
  const { id } = useParams<{ id: string }>();
  const jobId = parseInt(id || "1");
  const { isAuthenticated } = useAuth();
  const { saveJob, removeSavedJob, isJobSaved } = useSavedJobs();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const jobSaved = isJobSaved(jobId);

  // Sample job data - in a real app, this would come from an API or database
  const job = {
    id: jobId,
    title: "Frontend Developer",
    company: "TechCorp Inc.",
    companyLogo: "https://randomuser.me/api/portraits/lego/1.jpg",
    location: "Bangalore, India",
    type: "Full-time",
    postedDate: "May 10, 2024",
    applyBy: "June 10, 2024",
    salary: "₹12-18 LPA",
    experience: "2-4 years",
    skills: ["React", "JavaScript", "CSS", "HTML", "TypeScript", "Redux", "Tailwind CSS"],
    description: `
      <p>We are looking for a talented Frontend Developer to join our team at TechCorp Inc. The ideal candidate will have strong experience with React and modern JavaScript frameworks.</p>
      
      <h3>Responsibilities:</h3>
      <ul>
        <li>Develop and maintain responsive user interfaces using React</li>
        <li>Collaborate with backend developers to integrate REST APIs</li>
        <li>Optimize applications for maximum speed and scalability</li>
        <li>Implement responsive design for various screen sizes</li>
        <li>Write clean, maintainable, and well-documented code</li>
        <li>Participate in code reviews and provide constructive feedback</li>
        <li>Stay up-to-date with emerging trends in frontend development</li>
      </ul>
      
      <h3>Requirements:</h3>
      <ul>
        <li>2-4 years of experience in frontend development</li>
        <li>Strong proficiency in JavaScript, HTML, and CSS</li>
        <li>Experience with React and its ecosystem (Redux, React Router, etc.)</li>
        <li>Familiarity with RESTful APIs and asynchronous request handling</li>
        <li>Understanding of responsive design principles</li>
        <li>Experience with version control systems (Git)</li>
        <li>Knowledge of modern frontend build tools (Webpack, Babel, etc.)</li>
        <li>Strong problem-solving skills and attention to detail</li>
      </ul>
      
      <h3>Nice to Have:</h3>
      <ul>
        <li>Experience with TypeScript</li>
        <li>Knowledge of server-side rendering</li>
        <li>Familiarity with testing frameworks (Jest, React Testing Library)</li>
        <li>Experience with CSS preprocessors (SASS, LESS)</li>
        <li>Knowledge of UI design principles and UX best practices</li>
      </ul>
      
      <h3>Benefits:</h3>
      <ul>
        <li>Competitive salary and performance bonuses</li>
        <li>Health insurance for you and your family</li>
        <li>Flexible working hours and remote work options</li>
        <li>Professional development opportunities and learning budget</li>
        <li>5 days of paid sick leave and 20 days of annual leave</li>
        <li>Modern office in a central location</li>
        <li>Regular team building activities and events</li>
      </ul>
      
      <p>TechCorp Inc. is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.</p>
    `,
    aboutCompany: `
      <p>TechCorp Inc. is a leading technology company specializing in innovative software solutions for businesses. With over 10 years in the industry, we've built a reputation for delivering high-quality products that solve real-world problems.</p>
      
      <p>Our team consists of passionate professionals who are dedicated to pushing the boundaries of what's possible in technology. We foster a collaborative and inclusive work environment where creativity and innovation thrive.</p>
      
      <p>At TechCorp, we believe in work-life balance and investing in our employees' growth and well-being. Join us and be part of a team that's making a difference in the tech industry.</p>
    `
  };

  // Sample similar jobs
  const similarJobs = [
    {
      id: 2,
      title: "React Developer",
      company: "WebSolutions",
      location: "Remote",
      type: "Full-time",
      postedDate: "3 days ago"
    },
    {
      id: 4,
      title: "UI/UX Designer",
      company: "DesignHub",
      location: "Delhi, India",
      type: "Full-time",
      postedDate: "1 day ago"
    },
    {
      id: 7,
      title: "Mobile App Developer",
      company: "AppSphere",
      location: "Pune, India",
      type: "Full-time",
      postedDate: "2 days ago"
    }
  ];

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    if (!isBookmarked) {
      toast.success("Job saved to your bookmarks");
    } else {
      toast.info("Job removed from your bookmarks");
    }
  };

  const handleSaveJob = () => {
    if (!isAuthenticated) {
      toast.error("Please log in to save jobs", {
        action: {
          label: "Login",
          onClick: () => {
            window.location.href = "/login";
          }
        }
      });
      return;
    }

    if (jobSaved) {
      removeSavedJob(jobId);
      toast.success("Job removed from saved jobs");
    } else {
      saveJob({
        id: job.id,
        title: job.title,
        company: job.company,
        location: job.location,
        type: job.type,
        postedDate: job.postedDate,
        salary: job.salary,
        experience: job.experience,
        skills: job.skills
      });
      toast.success("Job saved successfully!");
    }
  };

  const handleApply = () => {
    if (!isAuthenticated) {
      toast.error("Please log in to apply for this job", {
        action: {
          label: "Login",
          onClick: () => {
            window.location.href = "/login";
          }
        }
      });
    } else {
      toast.success("Your application has been submitted");
    }
  };

  return (
    <>
      <Navbar />
      
      {/* Job Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-10">
            {/* Job Header */}
            <div className="p-6 md:p-8 border-b border-gray-100">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src={job.companyLogo} 
                    alt={job.company} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h1 className="text-2xl md:text-3xl font-bold mr-2">{job.title}</h1>
                    <Badge>{job.type}</Badge>
                  </div>
                  
                  <div className="flex flex-wrap items-center text-gray-600 gap-4">
                    <span className="flex items-center">
                      <BriefcaseBusiness size={16} className="mr-1" />
                      {job.company}
                    </span>
                    <span className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {job.location}
                    </span>
                    <span className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      Posted {job.postedDate}
                    </span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className={`${jobSaved ? 'text-brand-red bg-red-50' : ''}`}
                    onClick={handleSaveJob}
                  >
                    {jobSaved ? <Bookmark size={20} /> : <BookmarkPlus size={20} />}
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      navigator.share({
                        title: job.title,
                        text: `Check out this job: ${job.title} at ${job.company}`,
                        url: window.location.href
                      }).catch(() => {
                        navigator.clipboard.writeText(window.location.href);
                        toast.success("Link copied to clipboard");
                      });
                    }}
                  >
                    <Share size={20} />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Job Overview */}
            <div className="p-6 md:p-8 border-b border-gray-100">
              <h2 className="text-xl font-bold mb-4">Job Overview</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center text-gray-700 mb-2">
                    <Calendar size={18} className="mr-2 text-brand-red" />
                    <span className="font-medium">Date Posted</span>
                  </div>
                  <p>{job.postedDate}</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center text-gray-700 mb-2">
                    <Calendar size={18} className="mr-2 text-brand-red" />
                    <span className="font-medium">Apply By</span>
                  </div>
                  <p>{job.applyBy}</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center text-gray-700 mb-2">
                    <DollarSign size={18} className="mr-2 text-brand-red" />
                    <span className="font-medium">Salary</span>
                  </div>
                  <p>{job.salary}</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center text-gray-700 mb-2">
                    <BriefcaseBusiness size={18} className="mr-2 text-brand-red" />
                    <span className="font-medium">Experience</span>
                  </div>
                  <p>{job.experience}</p>
                </div>
              </div>
            </div>
            
            {/* Skills */}
            <div className="p-6 md:p-8 border-b border-gray-100">
              <h2 className="text-xl font-bold mb-4">Required Skills</h2>
              
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Job Description */}
            <div className="p-6 md:p-8 border-b border-gray-100">
              <h2 className="text-xl font-bold mb-4">Job Description</h2>
              
              <div className="prose max-w-none">
                <div dangerouslySetInnerHTML={{ __html: job.description }} />
              </div>
            </div>
            
            {/* About Company */}
            <div className="p-6 md:p-8">
              <h2 className="text-xl font-bold mb-4">About {job.company}</h2>
              
              <div className="prose max-w-none">
                <div dangerouslySetInnerHTML={{ __html: job.aboutCompany }} />
              </div>
            </div>
          </div>
          
          {/* Apply Button - Sticky at bottom on mobile */}
          <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg border-t border-gray-200 md:hidden z-30">
            <div className="container mx-auto">
              <Button 
                className="w-full bg-brand-red hover:bg-red-600 text-white"
                onClick={handleApply}
              >
                Apply Now
              </Button>
            </div>
          </div>
          
          {/* Apply Section - Desktop */}
          <div className="hidden md:block bg-white rounded-lg shadow-md overflow-hidden p-6 md:p-8 text-center">
            <h2 className="text-xl font-bold mb-4">Interested in this opportunity?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Apply now to connect with {job.company} and take the next step in your career journey.
            </p>
            
            <div className="flex justify-center gap-4">
              <Button 
                variant="outline" 
                className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
                onClick={handleSaveJob}
              >
                {jobSaved ? <Bookmark size={20} className="mr-2" /> : <BookmarkPlus size={20} className="mr-2" />}
                {jobSaved ? "Saved" : "Save Job"}
              </Button>
              
              <Button 
                className="bg-brand-red hover:bg-red-600 text-white min-w-40"
                onClick={handleApply}
              >
                <FileText size={20} className="mr-2" />
                Apply Now
              </Button>
            </div>
          </div>
          
          {/* Similar Jobs */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Similar Jobs</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarJobs.map((job) => (
                <div key={job.id} className="job-card">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs mt-2 sm:mt-0">
                      {job.type}
                    </span>
                  </div>
                  <div className="mb-4">
                    <p className="text-gray-700">{job.company}</p>
                    <p className="text-gray-600 text-sm">{job.location}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="text-gray-500 text-sm">Posted: {job.postedDate}</span>
                    <Link to={`/jobs/${job.id}`}>
                      <Button variant="outline" className="mt-3 sm:mt-0 border-brand-red text-brand-red hover:bg-brand-red hover:text-white">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default JobDetails;
