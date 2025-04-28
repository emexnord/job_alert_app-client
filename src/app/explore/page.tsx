"use client";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { useState } from "react";
import { Search, MapPin } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CompanyCard from "@/components/company-card";
import JobListing from "@/components/job_listing-card";
import JobListingCard from "@/components/job_listing-card";

interface Job {
  name: string;
  description: string;
  tags: string[];
}

const companies: Company[] = [
  {
    id: "1",
    name: "Acme Corp",
    image: "/logos/acme.png",
    available_jobs: 24,
    hire_rate: 75,
    countries: 12,
    company_id: "",
    company_url: "",
  },
  {
    id: "2",
    name: "Globex Inc",
    image: "/logos/globex.png",
    available_jobs: 18,
    hire_rate: 62,
    countries: 8,
    company_id: "",
    company_url: "",
  },
];

const jobs: Job[] = [
  {
    name: "Web Design",
    description: "Crafts engaging, user-friendly websites.",
    tags: ["Landing Page", "Website", "One Page"],
  },
  {
    name: "Graphic Design",
    description: "Creates impactful visuals and branding.",
    tags: ["Packaging", "Brand Identity", "Illustrations", "Logo", "Signage"],
  },
  {
    name: "Developer",
    description: "Builds functional and scalable solutions.",
    tags: ["Web Applications", "Mobile Apps", "Database", "Add-ons"],
  },
  {
    name: "Copywriting",
    description: "Delivers persuasive and creative content.",
    tags: ["Blog Posts", "Video Scripts", "Sales Pages", "Slogans"],
  },
];

export default function ExplorePage() {
  const [view, setView] = useState<"company" | "job">("company");
  const [search, setSearch] = useState("");

  return (
    <MaxWidthWrapper className="min-h-screen p-6">
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between ">
        {/* Title */}
        <div className="w-full text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Find <span className="text-blue-600">Opportunities</span> That Match
            Your Goals.
          </h1>
          <p className="text-xl font-semibold mb-8 py-6">
            Subscribe to get instant job alerts from your favorite companies or
            roles.
          </p>
          {/* 3. Search & Filter Section */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
            <input
              type="text"
              placeholder={`Search ${
                view === "company" ? "companies" : "job titles"
              }...`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Filters */}
            {view === "company" ? (
              <select className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm">
                <option value="">All Countries</option>
                <option value="us">United States</option>
                <option value="de">Germany</option>
                <option value="in">India</option>
              </select>
            ) : (
              <select className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm">
                <option value="">All Categories</option>
                <option value="tech">Tech</option>
                <option value="marketing">Marketing</option>
                <option value="finance">Finance</option>
              </select>
            )}
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full hidden lg:block lg:w-1/2 mb-10 lg:mb-0 flex justify-center lg:justify-end">
          <div className="relative">
            <Image
              src="/job-opp3.png"
              alt="Career Visual"
              className="rounded-full w-80 h-80 object-cover shadow-lg"
              width={320}
              height={320}
            />
            {/* Optional floating circles or lines as decoration can go here */}
          </div>
        </div>
      </section>

      {/* tabs */}
      <div className="relative flex space-x-4 mb-6">
        {/* Buttons Container */}
        <div className="relative flex space-x-3 px-4">
          <Button
            variant="ghost"
            onClick={() => setView("company")}
            className={`relative px-4 my-0 rounded-b-none border-2 border-gray-200 transition-all duration-300 ${
              view === "company"
                ? "border-b-0 z-5"
                : "  hover:text-gray-800 hover:bg-gray-100"
            }`}
          >
            <span>Companies</span>
            {/* Smooth transition for the border */}
            {view === "company" && (
              <div className="absolute bottom-0 left-0 right-0 h-px bg-white dark:bg-black"></div>
            )}
          </Button>

          <Button
            variant={"ghost"}
            onClick={() => setView("job")}
            className={`relative px-4 py-2 rounded-b-none border-2 border-gray-200 transition-all duration-300 ${
              view === "job"
                ? "border-b-white border-b-0 z-5"
                : " hover:text-gray-800 hover:bg-gray-100"
            }`}
          >
            <span>Job Titles</span>
            {/* Smooth transition for the border */}
            {view === "job" && (
              <div className="absolute bottom-0 left-0 right-0 h-px bg-white dark:bg-black"></div>
            )}
          </Button>
        </div>

        {/* Custom Border Path for Smooth Transition */}
        <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">
          <div
            className={`absolute h-px bg-gray-200 transition-all duration-300 w-full left-0 `}
          ></div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {view === "company"
          ? companies.map((c) => <CompanyCard key={c.id} company={c} />)
          : jobs.map((job, index) => <JobListingCard key={index} job={job} />)}
      </div>
      {/* : jobs.map((j) => <JobCard key={j.id} job={j} />)} */}
    </MaxWidthWrapper>
  );
}
