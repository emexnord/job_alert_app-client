"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface JobCategory {
  id: string;
  type: string;
  company: string;
  companyLogo: string;
  title: string;
  color: string;
  data: Record<string, any>;
}

interface SubscriptionDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  category: JobCategory | null;
}

export default function SubscriptionDrawer({
  isOpen,
  onClose,
  category,
}: SubscriptionDrawerProps) {
  const [location, setLocation] = useState<string>("");
  const [degree, setDegree] = useState<string>("any");
  const [workType, setWorkType] = useState<string>("any");
  const [experience, setExperience] = useState<string>("any");
  const [salary, setSalary] = useState<string>("any");

  if (!isOpen || !category) return null;

  return (
    <div className="fixed inset-0 overflow-hidden z-50">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={onClose}
        ></div>
        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          <div className="pointer-events-auto w-screen max-w-md">
            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
              <div className="px-4 py-6 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2 className="text-lg font-medium text-gray-900">
                    Subscribe to {category.title} alerts
                  </h2>
                  <div className="ml-3 flex h-7 items-center">
                    <button
                      type="button"
                      className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                      onClick={onClose}
                    >
                      <span className="sr-only">Close panel</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-1">
                  <p className="text-sm text-gray-500">
                    Customize your job alert preferences for {category.company}
                  </p>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto px-4 sm:px-6">
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Location
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="location"
                        id="location"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                        placeholder="City, state, or remote"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="degree"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Degree Requirement
                    </label>
                    <select
                      id="degree"
                      name="degree"
                      className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                      value={degree}
                      onChange={(e) => setDegree(e.target.value)}
                    >
                      <option value="any">Any degree</option>
                      <option value="bachelor">Bachelor's degree</option>
                      <option value="master">Master's degree</option>
                      <option value="phd">PhD</option>
                      <option value="none">No degree required</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="workType"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Work Type
                    </label>
                    <select
                      id="workType"
                      name="workType"
                      className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                      value={workType}
                      onChange={(e) => setWorkType(e.target.value)}
                    >
                      <option value="any">Any work type</option>
                      <option value="remote">Remote only</option>
                      <option value="onsite">On-site only</option>
                      <option value="hybrid">Hybrid</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="experience"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Experience Level
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                    >
                      <option value="any">Any experience level</option>
                      <option value="entry">Entry level</option>
                      <option value="mid">Mid level</option>
                      <option value="senior">Senior level</option>
                      <option value="executive">Executive</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="salary"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Salary Range
                    </label>
                    <select
                      id="salary"
                      name="salary"
                      className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                      value={salary}
                      onChange={(e) => setSalary(e.target.value)}
                    >
                      <option value="any">Any salary range</option>
                      <option value="0-50k">$0 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-150k">$100,000 - $150,000</option>
                      <option value="150k+">$150,000+</option>
                    </select>
                  </div>

                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="instant"
                        name="instant"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="instant"
                        className="font-medium text-gray-700"
                      >
                        Instant notifications
                      </label>
                      <p className="text-gray-500">
                        Get notified immediately when matching jobs are posted
                      </p>
                    </div>
                  </div>

                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="similar"
                        name="similar"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="similar"
                        className="font-medium text-gray-700"
                      >
                        Similar categories
                      </label>
                      <p className="text-gray-500">
                        Include similar job categories in your alerts
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-shrink-0 justify-end px-4 py-4">
                <button
                  type="button"
                  className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="ml-4 inline-flex justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
