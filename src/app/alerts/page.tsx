"use client";

import JobCard from "@/components/job-card";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import React, { useState } from "react";

// Main Page Component
const jobs: Job[] = [
  {
    title: "Out Door Sales",
    company: "Fayida Academy PLC",
    location: "Addis Ababa, Ethiopia",
    salary: "3,000 birr plus commission and transport and mobile card",
    tags: ["Sales and Promotion", "Onsite - Part Time"],
    experienceLevel: "Junior",
    deadline: "May 21, 2025",
  },
  {
    title: "Hotel Front Desk Receptionist",
    company: "Private Client",
    location: "Addis Ababa, Ethiopia",
    salary: "3,000 ETB Monthly",
    tags: ["Hospitality and Tourism", "Onsite - Full Time"],
    experienceLevel: "Intermediate",
    deadline: "May 11, 2025",
  },
  {
    title: "Website Developer, Digital Marketer and Social Media Manager",
    company: "INTRACOM ICT SOLUTION PLC",
    location: "Addis Ababa, Ethiopia",
    tags: ["Information Technology", "Onsite - Full Time"],
    experienceLevel: "Junior",
    deadline: "May 5, 2025",
  },
  {
    title: "Script Writer",
    company: "Gize Photography",
    location: "Addis Ababa, Ethiopia",
    tags: ["Multimedia Content Production", "Hybrid - Full Time"],
    experienceLevel: "Expert",
    deadline: "Apr 26, 2025",
  },
];

const JobAlertsPage: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <MaxWidthWrapper className="relative p-4 md:p-6 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
        Jobs Alerts from your subscriptions.
      </h1>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <div className="flex-1  md:pr-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 mb-4">
            <input
              type="text"
              placeholder="Search for job"
              className="w-full sm:flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button className="sm:hidden" onClick={() => setIsFilterOpen(true)}>
              Filter
            </Button>
          </div>
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>

        {/* Filter Panel - Fixed on Desktop */}
        {/* <div className="hidden md:block w-80 p-4 rounded-lg shadow-md max-h-[calc(100vh-120px)] overflow-y-auto sticky top-20 self-start"> */}
        <Card className="p-4 rounded-lg shadow-md mb-4 hidden md:block w-80 rounded-lg shadow-md max-h-[calc(100vh-120px)] overflow-y-auto sticky top-20 self-start">
          <h2 className="text-lg font-semibold mb-4">Filter Jobs</h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Sector</label>
            <select className="w-full p-2 border border-gray-300 rounded-lg">
              <option>Select sector</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Job Types</label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Permanent (Full-time)
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Part-time
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remote
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Freelance
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Contractual
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Volunteer
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Intern (Paid)
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Intern (Unpaid)
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Job Sites</label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                On-site
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remote
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Hybrid
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Experience Level</label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Entry Level
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Junior
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Intermediate
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Senior
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Expert
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Education Level</label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                TVET
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Secondary School
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Certificate
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Diploma
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Bachelors Degree
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                PhD
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Masters Degree
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Not Required
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Gender</label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Male
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Female
              </label>
            </div>
          </div>
        </Card>
      </div>

      {/* Filter Drawer for Mobile */}
      <FilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
    </MaxWidthWrapper>
  );
};

export default JobAlertsPage;

const FilterDrawer: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Drawer open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DrawerContent>
        <div className="mx-auto w-full">
          <DrawerHeader>
            <DrawerTitle>Filter Jobs</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 pb-0 max-h-[60vh] overflow-y-auto">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Sector</label>
              <select className="w-full p-2 border border-gray-300 rounded-lg">
                <option>Select sector</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Job Types</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Permanent (Full-time)
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Part-time
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Remote
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Freelance
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Contractual
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Volunteer
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Intern (Paid)
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Intern (Unpaid)
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Job Sites</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  On-site
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Remote
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Hybrid
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                Experience Level
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Entry Level
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Junior
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Intermediate
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Senior
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Expert
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                Education Level
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  TVET
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Secondary School
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Certificate
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Diploma
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Bachelors Degree
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  PhD
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Masters Degree
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Not Required
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Gender</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Male
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Female
                </label>
              </div>
            </div>
          </div>
          <DrawerFooter>
            <Button onClick={onClose}>Apply Filters</Button>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
