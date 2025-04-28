"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

// Define 12 light gradient color combinations
const gradientColors = [
  "bg-gradient-to-r from-blue-100 to-indigo-100", // 0
  "bg-gradient-to-r from-purple-100 to-pink-100", // 1
  "bg-gradient-to-r from-green-100 to-teal-100", // 2
  "bg-gradient-to-r from-yellow-100 to-orange-100", // 3
  "bg-gradient-to-r from-red-100 to-pink-100", // 4
  "bg-gradient-to-r from-cyan-100 to-blue-100", // 5
  "bg-gradient-to-r from-indigo-100 to-purple-100", // 6
  "bg-gradient-to-r from-pink-100 to-rose-100", // 7
  "bg-gradient-to-r from-teal-100 to-emerald-100", // 8
  "bg-gradient-to-r from-orange-100 to-amber-100", // 9
  "bg-gradient-to-r from-lime-100 to-green-100", // 10
  "bg-gradient-to-r from-rose-100 to-violet-100", // 11
];

// Interface for Job Card props
interface Job {
  name: string;
  description: string;
  tags: string[];
}

interface JobCardProps {
  job: Job;
}

const JobListingCard: React.FC<JobCardProps> = ({ job }) => {
  // Determine the gradient based on the length of the job name
  const gradientClass = gradientColors[job.name.length % 12];

  return (
    <Card className={`w-full max-w-sm  border-none shadow-sm p-2`}>
      <CardContent className={`p-6 h-full rounded-lg ${gradientClass}`}>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{job.name}</h3>
        <p className="text-gray-700 mb-4">{job.description}</p>
        <div className="flex flex-wrap gap-2">
          {job.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-white/50 rounded-full text-sm text-gray-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="px-6 pt-0 flex justify-between items-center h-12">
        <span className="text-sm font-bold">EXPLORE</span>
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-600 hover:text-gray-800"
        >
          <ArrowRight className="w-5 h-5" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default JobListingCard;
