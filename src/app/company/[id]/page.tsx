"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import JobCategory from "@/components/JobCategory";
import type { Company, JobCategoryType } from "@/types";

import { CiBookmark } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoFunnelOutline } from "react-icons/io5";

// Mock data for a company
const mockCompanyData: Company = {
  id: "1",
  name: "Northern Base",
  image:
    "https://cosmicventures-llc.com/wp-content/uploads/2023/01/cos-logo-8.png",
  category: "Data Center • Health Care",
  intro: "Leading provider of data center solutions and healthcare technology",
  headquarters: "Ashburn, VA, USA",
  officePolicy: "Remote & Onsite",
  employees: "1-50",
  founded: "2016",
  company_url: "https://northernbase.example.com",
  socialLinks: {
    instagram: "https://instagram.com/northernbase",
    twitter: "https://twitter.com/northernbase",
  },
  company_id: "",
  available_jobs: 0,
  hire_rate: 0,
  countries: 0,
};

// Mock data for job categories
const mockJobCategories: JobCategoryType[] = [
  {
    id: "1",
    title: "POS QA Analyst",
    company: "Cosmic-I LLC DBA Northern Base",
    location: "Dublin, Ohio, USA",
    contractType: "Contract",
    description:
      "Title: QA Analyst POS Testing | Aloha POS Experience Required Location: Need Local (Dublin, OH) Type: C2C or W2 Both option available Job Description: We are seeking an experienced QA Analyst to test restaurant POS applications...",
    requiredSkills: ["Aloha POS", "QA Testing", "SQL", "Test Planning"],
    locationsCount: 3,
    jobType: "Both", // Remote, Onsite, or Both
    postedDate: "7 hours ago",
    updatedDate: "7 hours ago",
  },
  {
    id: "2",
    title: "Project Manager - Oracle Fusion HCM/Payroll",
    company: "Cosmic-I LLC DBA Northern Base",
    location: "Atlanta, Georgia, USA",
    contractType: "Contract",
    description:
      "Job Description: Client: Atlanta Public School Position: Location: Atlanta, GA, United States (Onsite) Hiring type: C2C/ W2",
    requiredSkills: [
      "Oracle Fusion",
      "HCM",
      "Payroll",
      "Project Management",
      "JIRA",
    ],
    locationsCount: 1,
    jobType: "Onsite",
    postedDate: "1 day ago",
    updatedDate: "12 hours ago",
  },
  {
    id: "3",
    title: "Senior Frontend Developer",
    company: "Cosmic-I LLC DBA Northern Base",
    location: "Remote, USA",
    contractType: "Full-time",
    description:
      "We are looking for a Senior Frontend Developer with experience in React and TypeScript to join our growing team.",
    requiredSkills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
      "GraphQL",
    ],
    locationsCount: 5,
    jobType: "Remote",
    postedDate: "2 days ago",
    updatedDate: "1 day ago",
  },
  {
    id: "4",
    title: "DevOps Engineer",
    company: "Cosmic-I LLC DBA Northern Base",
    location: "Ashburn, VA, USA",
    contractType: "Full-time",
    description:
      "Join our infrastructure team to help build and maintain our cloud-based systems.",
    requiredSkills: ["AWS", "Kubernetes", "Docker", "Terraform", "CI/CD"],
    locationsCount: 2,
    jobType: "Both",
    postedDate: "3 days ago",
    updatedDate: "2 days ago",
  },
];

export default function CompanyPage({ params }: { params: { id: string } }) {
  const [company, setCompany] = useState<Company | null>(null);
  const [jobCategories, setJobCategories] = useState<JobCategoryType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] =
    useState("All Departments");

  // Mock fetch data (would be replaced with real API call)
  useEffect(() => {
    // In a real app, this would fetch data based on the ID
    setCompany(mockCompanyData);
    setJobCategories(mockJobCategories);
  }, [params.id]);

  // Filter jobs based on search term and department
  const filteredJobs = jobCategories.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDepartment =
      selectedDepartment === "All Departments" ||
      job.title.includes(selectedDepartment);

    return matchesSearch && matchesDepartment;
  });

  const handleSubscribeToFilter = () => {
    console.log("Subscribed to filter:", { searchTerm, selectedDepartment });
    alert(`Subscribed to filter: ${searchTerm} in ${selectedDepartment}`);
  };

  if (!company) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header Component */}
      <Header company={company} />

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8">
            <a
              href="#"
              className="py-4 px-1 text-gray-500 hover:text-gray-700 border-b-2 border-transparent"
            >
              Overview
            </a>
            <a
              href="#"
              className="py-4 px-1 text-gray-500 hover:text-gray-700 border-b-2 border-transparent"
            >
              Benefits
            </a>
            <a
              href="#"
              className="py-4 px-1 text-gray-900 font-medium border-b-2 border-red-500"
            >
              Jobs
            </a>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Job Listings */}
          <div className="flex-1">
            {/* Search and Filter */}
            <div className="mb-6 flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CiSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="relative sm:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <IoFunnelOutline className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                >
                  <option>All Departments</option>
                  <option>Engineering</option>
                  <option>QA</option>
                  <option>Project Management</option>
                  <option>DevOps</option>
                </select>
              </div>

              <button
                className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={handleSubscribeToFilter}
              >
                <CiBookmark className="h-5 w-5 mr-2" />
                Subscribe to this Filter
              </button>
            </div>

            {/* Job Count */}
            <div className="mb-4 text-sm text-gray-500">
              1 - {filteredJobs.length} of {jobCategories.length} Jobs
            </div>

            {/* Job Cards */}
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <JobCategory key={job.id} job={job} />
              ))}
            </div>
          </div>

          {/* Company Stats Sidebar */}
          <div className="w-full md:w-80 shrink-0">
            <div className="border border-gray-200 rounded-lg p-4">
              <h2 className="text-lg font-medium mb-4">Company Stats</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm text-gray-500">Headquarters</h3>
                  <p className="font-medium">{company.headquarters}</p>
                </div>

                <div>
                  <h3 className="text-sm text-gray-500">Office Policy</h3>
                  <p className="font-medium">{company.officePolicy}</p>
                </div>

                <div>
                  <h3 className="text-sm text-gray-500">Employees</h3>
                  <p className="font-medium">{company.employees}</p>
                </div>

                <div>
                  <h3 className="text-sm text-gray-500">Founded</h3>
                  <p className="font-medium">{company.founded}</p>
                </div>

                <div>
                  <h3 className="text-sm text-gray-500">Website</h3>
                  <a
                    href={company.company_url}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    View Website
                  </a>
                </div>

                <div>
                  <h3 className="text-sm text-gray-500">Social</h3>
                  <div className="flex space-x-2 mt-1">
                    <a
                      href={company.socialLinks.instagram}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href={company.socialLinks.twitter}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
