"use client";

import { CiBookmark } from "react-icons/ci";
import Image from "next/image";
import type { Company } from "@/types";

interface HeaderProps {
  company: Company;
}

export default function Header({ company }: HeaderProps) {
  const handleSubscribeToCompany = () => {
    console.log("Subscribed to company:", company.name);
    alert(`Subscribed to company: ${company.name}`);
  };

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          {/* Company Logo */}
          <div className="shrink-0">
            <Image
              src={company.image || "/placeholder.svg"}
              alt={`${company.name} logo`}
              width={80}
              height={80}
              className="border border-gray-200 rounded-md"
            />
          </div>

          {/* Company Info */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900">{company.name}</h1>
            <p className="text-sm text-gray-500">{company.category}</p>
            {company.intro && (
              <p className="mt-2 text-gray-700">{company.intro}</p>
            )}
          </div>

          {/* Subscribe Button */}
          <div>
            <button
              className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={handleSubscribeToCompany}
            >
              <CiBookmark className="h-5 w-5 mr-2" />
              Subscribe to this Company
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
