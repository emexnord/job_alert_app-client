"use client";

import { CiBookmark } from "react-icons/ci";
import Image from "next/image";
import type { JobCategoryType } from "@/types";

interface JobCategoryProps {
  job: JobCategoryType;
}

export default function JobCategory({ job }: JobCategoryProps) {
  const handleSubscribeToCategory = () => {
    console.log("Subscribed to job category:", job.title);
    alert(`Subscribed to job category: ${job.title}`);
  };

  // Function to render job type badge
  const renderJobTypeBadge = (type: string) => {
    let bgColor = "";

    switch (type) {
      case "Remote":
        bgColor = "bg-green-100 text-green-800";
        break;
      case "Onsite":
        bgColor = "bg-blue-100 text-blue-800";
        break;
      case "Both":
        bgColor = "bg-purple-100 text-purple-800";
        break;
      default:
        bgColor = "bg-gray-100 text-gray-800";
    }

    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor}`}
      >
        {type}
      </span>
    );
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-white">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Company Logo */}
        <div className="shrink-0">
          <Image
            src="https://cosmicventures-llc.com/wp-content/uploads/2023/01/cos-logo-8.png"
            alt={`${job.company} logo`}
            width={60}
            height={60}
            className="border border-gray-200 rounded-md"
          />
        </div>

        {/* Job Details */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {job.title}
              </h2>
              <p className="text-sm text-gray-500">{job.company}</p>
              <p className="text-sm text-gray-500">{job.location}</p>
            </div>

            <div className="flex items-start">
              <button
                className="flex items-center justify-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={handleSubscribeToCategory}
              >
                <CiBookmark className="h-4 w-4 mr-1.5" />
                Subscribe to this Category
              </button>
            </div>
          </div>

          {/* Contract Type */}
          <div className="mt-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              {job.contractType}
            </span>
            {renderJobTypeBadge(job.jobType)}
            <span className="ml-2 text-sm text-gray-500">
              {job.locationsCount}{" "}
              {job.locationsCount === 1 ? "location" : "locations"}
            </span>
          </div>

          {/* Required Skills */}
          <div className="mt-2">
            <h3 className="text-sm font-medium text-gray-700">
              Required Skills:
            </h3>
            <div className="mt-1 flex flex-wrap gap-1">
              {job.requiredSkills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Job Description */}
          <div className="mt-2">
            <p className="text-sm text-gray-700 line-clamp-2">
              {job.description}
            </p>
          </div>

          {/* Posted/Updated Info */}
          <div className="mt-2 text-xs text-gray-500">
            Posted {job.postedDate} | Updated {job.updatedDate}
          </div>
        </div>
      </div>
    </div>
  );
}
