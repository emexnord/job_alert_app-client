"use client";

import { useState } from "react";
import {
  Bell,
  Briefcase,
  ChevronRight,
  Clock,
  DollarSign,
  MapPin,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import SubscriptionDrawer from "./subscription-drawer";
import ListingCard from "./listing-card";

// Types for our card data
interface JobCategory {
  id: string;
  type: string;
  company: string;
  companyLogo: string;
  title: string;
  color: string;
  data: Record<string, any>;
}

export default function JobCategoryCards() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<JobCategory | null>(
    null
  );

  // Mock data for our cards
  const jobCategories: JobCategory[] = [
    {
      id: "1",
      type: "essentials",
      company: "Google",
      companyLogo: "/placeholder.svg?height=40&width=40",
      title: "Software Engineering",
      color: "bg-blue-500",
      data: {
        openPositions: 12,
        lastUpdated: "2 days ago",
      },
    },
    {
      id: "2",
      type: "insight",
      company: "Microsoft",
      companyLogo: "/placeholder.svg?height=40&width=40",
      title: "Product Management",
      color: "bg-green-500",
      data: {
        salaryRange: "$120K-$150K",
        hiringVelocity: "15 positions/month",
        competition: "45 applicants/position",
        demandLevel: 85,
      },
    },
    {
      id: "3",
      type: "social",
      company: "Amazon",
      companyLogo: "/placeholder.svg?height=40&width=40",
      title: "Data Science",
      color: "bg-orange-500",
      data: {
        subscribers: 523,
        newSubscribers: 87,
        trending: true,
      },
    },
    {
      id: "4",
      type: "skill",
      company: "Meta",
      companyLogo: "/placeholder.svg?height=40&width=40",
      title: "Frontend Development",
      color: "bg-indigo-500",
      data: {
        skills: ["React", "TypeScript", "CSS", "GraphQL", "Next.js"],
        match: 85,
      },
    },
    {
      id: "5",
      type: "timeline",
      company: "Apple",
      companyLogo: "/placeholder.svg?height=40&width=40",
      title: "UX Design",
      color: "bg-gray-500",
      data: {
        recentPostings: [
          { date: "Apr 15, 2025" },
          { date: "Mar 28, 2025" },
          { date: "Mar 10, 2025" },
        ],
        nextExpected: "7 days",
      },
    },
    {
      id: "6",
      type: "benefits",
      company: "Netflix",
      companyLogo: "/placeholder.svg?height=40&width=40",
      title: "Content Production",
      color: "bg-red-500",
      data: {
        benefits: [
          { icon: "💰", text: "Top 10% compensation" },
          { icon: "🌐", text: "Remote-friendly positions" },
          { icon: "🚀", text: "Fast-track promotion path" },
        ],
      },
    },
    {
      id: "7",
      type: "location",
      company: "Spotify",
      companyLogo: "/placeholder.svg?height=40&width=40",
      title: "Audio Engineering",
      color: "bg-green-500",
      data: {
        cities: 15,
        remotePositions: 7,
        headquarters: "Stockholm",
      },
    },
    {
      id: "8",
      type: "comparison",
      company: "Adobe",
      companyLogo: "/placeholder.svg?height=40&width=40",
      title: "Visual Design",
      color: "bg-red-500",
      data: {
        salaryComparison: "+15% above average",
        workLifeBalance: "4.2/5",
        careerGrowth: "3.8/5",
      },
    },
    {
      id: "9",
      type: "urgency",
      company: "Twitter",
      companyLogo: "/placeholder.svg?height=40&width=40",
      title: "DevOps Engineering",
      color: "bg-blue-400",
      data: {
        activelyHiring: true,
        daysRemaining: 14,
        positionsToFill: 5,
      },
    },
    {
      id: "10",
      type: "personalized",
      company: "LinkedIn",
      companyLogo: "/placeholder.svg?height=40&width=40",
      title: "Sales Development",
      color: "bg-blue-700",
      data: {
        skillsMatch: "High",
        experienceLevel: "Appropriate",
        salaryIncrease: "+20% from current",
      },
    },
  ];

  const handleCardClick = (category: JobCategory) => {
    setSelectedCategory(category);
    setIsDrawerOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Job Category Subscription Cards
          </h1>
          <p className="mt-2 text-gray-600">
            Click on any card to open the subscription drawer
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 1. The Essentials Card */}
          <div
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-gray-200"
            onClick={() => handleCardClick(jobCategories[0])}
          >
            <div className="p-5">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <img
                    src={jobCategories[0].companyLogo || "/placeholder.svg"}
                    alt={jobCategories[0].company}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">
                      {jobCategories[0].title}
                    </h3>
                    <p className="text-gray-600">{jobCategories[0].company}</p>
                  </div>
                </div>
                <Bell className="w-5 h-5 text-gray-400" />
              </div>
              <div className="mt-4 flex justify-between text-sm">
                <div className="flex items-center">
                  <Briefcase className="w-4 h-4 mr-1 text-gray-500" />
                  <span>
                    {jobCategories[0].data.openPositions} open positions
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1 text-gray-500" />
                  <span>Updated {jobCategories[0].data.lastUpdated}</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3 text-sm text-gray-600 flex justify-between items-center">
              <span>Subscribe</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

          {/* 2. The Insight-Driven Card */}
          <div
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-gray-200"
            onClick={() => handleCardClick(jobCategories[1])}
          >
            <div className="flex">
              <div className={`${jobCategories[1].color} w-2`}></div>
              <div className="p-5 flex-1">
                <div className="flex items-center">
                  <img
                    src={jobCategories[1].companyLogo || "/placeholder.svg"}
                    alt={jobCategories[1].company}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">
                      {jobCategories[1].title}
                    </h3>
                    <p className="text-gray-600">{jobCategories[1].company}</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-2 text-gray-500" />
                    <span>
                      Avg. salary: {jobCategories[1].data.salaryRange}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-gray-500" />
                    <span>
                      Hiring velocity: {jobCategories[1].data.hiringVelocity}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-gray-500" />
                    <span>
                      Competition: {jobCategories[1].data.competition}
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-xs text-gray-500 mb-1">
                    Demand level: High
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${jobCategories[1].data.demandLevel}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3 text-sm font-medium text-center text-green-600">
              Set Alert
            </div>
          </div>

          {/* 3. The Social Proof Card */}
          <div
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-gray-200"
            onClick={() => handleCardClick(jobCategories[2])}
          >
            <div className="p-5">
              <div className="flex items-center">
                <img
                  src={jobCategories[2].companyLogo || "/placeholder.svg"}
                  alt={jobCategories[2].company}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h3 className="font-semibold text-lg">
                    {jobCategories[2].title}
                  </h3>
                  <p className="text-gray-600">{jobCategories[2].company}</p>
                </div>
              </div>
              <div className="mt-5">
                <div className="flex items-center">
                  <div className="flex -space-x-2 mr-3">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 rounded-full border-2 border-white ${
                          [
                            "bg-blue-500",
                            "bg-green-500",
                            "bg-yellow-500",
                            "bg-purple-500",
                            "bg-red-500",
                          ][i]
                        }`}
                      ></div>
                    ))}
                  </div>
                  <div className="text-gray-600">
                    +{jobCategories[2].data.subscribers - 5} more
                  </div>
                </div>
                <div className="mt-3 text-sm text-gray-600">
                  <p>
                    <span className="font-semibold">
                      {jobCategories[2].data.subscribers}
                    </span>{" "}
                    professionals subscribed
                  </p>
                  <p className="mt-1">
                    <span className="font-semibold">
                      {jobCategories[2].data.newSubscribers}
                    </span>{" "}
                    new subscribers this week
                  </p>
                </div>
              </div>
              {jobCategories[2].data.trending && (
                <div className="mt-4 flex items-center text-sm text-orange-500">
                  <Sparkles className="w-4 h-4 mr-1" />
                  <span>Trending in your network</span>
                </div>
              )}
            </div>
            <div className="bg-orange-500 text-white px-5 py-3 text-center font-medium">
              Join them
            </div>
          </div>

          {/* 4. The Skill-match Card */}
          <div
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-gray-200"
            onClick={() => handleCardClick(jobCategories[3])}
          >
            <div className="p-5">
              <div className="flex items-center">
                <img
                  src={jobCategories[3].companyLogo || "/placeholder.svg"}
                  alt={jobCategories[3].company}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h3 className="font-semibold text-lg">
                    {jobCategories[3].title}
                  </h3>
                  <p className="text-gray-600">{jobCategories[3].company}</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {jobCategories[3].data.skills
                    .slice(0, 3)
                    .map((skill: string, index: number) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  {jobCategories[3].data.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                      +{jobCategories[3].data.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-2 mr-3">
                  <div
                    className="bg-indigo-500 h-2 rounded-full"
                    style={{ width: `${jobCategories[3].data.match}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium">
                  {jobCategories[3].data.match}% match
                </span>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3">
              <div className="text-center text-indigo-600 font-medium">
                Customize Alert
              </div>
              <div className="text-xs text-center text-gray-500 mt-1">
                Refine by location, experience level & more
              </div>
            </div>
          </div>

          {/* 5. The Timeline Card */}
          <div
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-gray-200"
            onClick={() => handleCardClick(jobCategories[4])}
          >
            <div className="p-5">
              <div className="flex items-center">
                <img
                  src={jobCategories[4].companyLogo || "/placeholder.svg"}
                  alt={jobCategories[4].company}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h3 className="font-semibold text-lg">
                    {jobCategories[4].title}
                  </h3>
                  <p className="text-gray-600">{jobCategories[4].company}</p>
                </div>
              </div>
              <div className="mt-5 relative">
                <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                {jobCategories[4].data.recentPostings.map(
                  (posting: any, index: number) => (
                    <div
                      key={index}
                      className="flex items-center mb-4 relative z-10"
                    >
                      <div className="w-4 h-4 rounded-full bg-gray-500 mr-3"></div>
                      <span className="text-sm text-gray-600">
                        {posting.date}
                      </span>
                    </div>
                  )
                )}
              </div>
              <div className="mt-2 text-sm text-gray-600 flex items-center">
                <Clock className="w-4 h-4 mr-1 text-gray-500" />
                <span>
                  Next posting expected within{" "}
                  {jobCategories[4].data.nextExpected}
                </span>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3">
              <div className="text-xs text-gray-500 mb-1 text-center">
                Never miss an opportunity
              </div>
              <div className="text-center text-gray-700 font-medium">
                Get notified
              </div>
            </div>
          </div>

          {/* 6. The Benefit-focused Card */}
          <div
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-gray-200"
            onClick={() => handleCardClick(jobCategories[5])}
          >
            <div className="p-5">
              <div className="flex items-center">
                <img
                  src={jobCategories[5].companyLogo || "/placeholder.svg"}
                  alt={jobCategories[5].company}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h3 className="font-semibold text-lg">
                    {jobCategories[5].title}
                  </h3>
                  <p className="text-gray-600">{jobCategories[5].company}</p>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                {jobCategories[5].data.benefits.map(
                  (benefit: any, index: number) => (
                    <div key={index} className="flex items-start">
                      <span className="text-xl mr-3">{benefit.icon}</span>
                      <span className="text-sm text-gray-700">
                        {benefit.text}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="bg-red-500 text-white px-5 py-3 text-center">
              <div className="font-medium">Learn more & subscribe</div>
              <div className="text-xs mt-1 text-red-100">
                Customize your alert preferences
              </div>
            </div>
          </div>

          {/* 7. The Location-centric Card */}
          <div
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-gray-200"
            onClick={() => handleCardClick(jobCategories[6])}
          >
            <div className="p-5">
              <div className="flex items-center">
                <img
                  src={jobCategories[6].companyLogo || "/placeholder.svg"}
                  alt={jobCategories[6].company}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h3 className="font-semibold text-lg">
                    {jobCategories[6].title}
                  </h3>
                  <p className="text-gray-600">{jobCategories[6].company}</p>
                </div>
              </div>
              <div className="mt-4 bg-gray-100 h-32 rounded-lg flex items-center justify-center">
                <MapPin className="w-8 h-8 text-gray-400" />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
                <div className="bg-gray-50 p-2 rounded text-center">
                  <div className="font-semibold">
                    {jobCategories[6].data.cities}
                  </div>
                  <div className="text-xs text-gray-500">Cities</div>
                </div>
                <div className="bg-gray-50 p-2 rounded text-center">
                  <div className="font-semibold">
                    {jobCategories[6].data.remotePositions}
                  </div>
                  <div className="text-xs text-gray-500">Remote</div>
                </div>
                <div className="bg-gray-50 p-2 rounded text-center">
                  <div className="font-semibold">HQ</div>
                  <div className="text-xs text-gray-500">
                    {jobCategories[6].data.headquarters}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3 text-center text-green-600 font-medium">
              Find opportunities near you
            </div>
          </div>

          {/* 8. The Comparison Card */}
          <div
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-gray-200"
            onClick={() => handleCardClick(jobCategories[7])}
          >
            <div className="p-5">
              <div className="flex items-center">
                <img
                  src={jobCategories[7].companyLogo || "/placeholder.svg"}
                  alt={jobCategories[7].company}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h3 className="font-semibold text-lg">
                    {jobCategories[7].title}
                  </h3>
                  <p className="text-gray-600">{jobCategories[7].company}</p>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Salary</span>
                    <span className="text-green-600">
                      {jobCategories[7].data.salaryComparison}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Work-life balance</span>
                    <span>{jobCategories[7].data.workLifeBalance}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Career growth</span>
                    <span>{jobCategories[7].data.careerGrowth}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full w-3/5"></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-sm text-center text-gray-500 underline">
                Compare with similar roles
              </div>
            </div>
            <div className="bg-red-500 text-white px-5 py-3 text-center font-medium">
              Subscribe for updates
            </div>
          </div>

          {/* 9. The Urgency Card */}
          <div
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-gray-200"
            onClick={() => handleCardClick(jobCategories[8])}
          >
            <div className="p-5">
              <div className="flex items-center">
                <img
                  src={jobCategories[8].companyLogo || "/placeholder.svg"}
                  alt={jobCategories[8].company}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h3 className="font-semibold text-lg">
                    {jobCategories[8].title}
                  </h3>
                  <p className="text-gray-600">{jobCategories[8].company}</p>
                </div>
              </div>
              {jobCategories[8].data.activelyHiring && (
                <div className="mt-3 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse"></div>
                  <span className="text-sm font-medium text-red-600">
                    Actively hiring
                  </span>
                </div>
              )}
              <div className="mt-3 bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm">
                <div className="font-medium text-yellow-800">
                  Limited application window
                </div>
                <div className="text-yellow-700 mt-1">
                  {jobCategories[8].data.daysRemaining} days remaining
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <Briefcase className="w-4 h-4 mr-1 text-gray-500" />
                  <span>
                    {jobCategories[8].data.positionsToFill} positions to be
                    filled
                  </span>
                </div>
                <div className="text-blue-600">Fast-track</div>
              </div>
            </div>
            <div className="bg-blue-500 text-white px-5 py-3 text-center font-medium">
              Don't miss out
            </div>
          </div>

          {/* 10. The Personalized Card */}
          <div
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-gray-200"
            onClick={() => handleCardClick(jobCategories[9])}
          >
            <div className="p-5">
              <div className="flex items-center">
                <img
                  src={jobCategories[9].companyLogo || "/placeholder.svg"}
                  alt={jobCategories[9].company}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h3 className="font-semibold text-lg">
                    {jobCategories[9].title}
                  </h3>
                  <p className="text-gray-600">{jobCategories[9].company}</p>
                </div>
              </div>
              <div className="mt-3 bg-blue-50 border border-blue-100 rounded-lg p-3 text-sm text-blue-800">
                Based on your profile, this could be your next career move
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Skills match:</span>
                  <span className="font-medium">
                    {jobCategories[9].data.skillsMatch}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Experience level:</span>
                  <span className="font-medium">
                    {jobCategories[9].data.experienceLevel}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Salary range:</span>
                  <span className="font-medium text-green-600">
                    {jobCategories[9].data.salaryIncrease}
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-blue-700 text-white px-5 py-3 text-center">
              <div className="font-medium">Create personalized alert</div>
              <div className="text-xs mt-1 text-blue-200">
                Refine your preferences in the next step
              </div>
            </div>
          </div>

          {/* 11 mine */}
          <ListingCard
            JobTitle={"Software Enginer"}
            salary_range={"12$ - 24$"}
            subscribers={20}
            updated={new Date(new Date().getTime() - 1000 * 60 * 60 * 96)}
            // profile_matches
            next_posting={new Date()}
          />
        </div>
      </main>

      {/* Subscription Drawer */}
      <SubscriptionDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        category={selectedCategory}
      />
    </div>
  );
}
