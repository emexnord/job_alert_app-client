import { Bell, Clock, DollarSign, Sparkles, TrendingUp } from "lucide-react";
import React from "react";

interface ListingCardProps {
  JobTitle: string;
  profile_matches?: boolean;
  salary_range: string;
  subscribers: number;
  updated: Date;
  next_posting?: Date;
}

const ListingCard = ({
  JobTitle,
  profile_matches,
  salary_range,
  subscribers,
  updated,
  next_posting,
}: ListingCardProps) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200"
      //   onClick={() => handleCardClick(jobCategories[0])}
    >
      <div className="p-5 flex flex-col">
        <div className="flex justify-between items-start">
          <div className="flex items-center">
            <div>
              <h3 className="font-semibold text-lg">{JobTitle}</h3>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1 text-gray-500" />
                <span className="text-gray-500">
                  Updated{" "}
                  {(() => {
                    const diffInHours = Math.floor(
                      (new Date().getTime() - updated.getTime()) /
                        (1000 * 60 * 60)
                    );
                    if (diffInHours < 24) {
                      return "today";
                    } else if (diffInHours < 48) {
                      return "yesterday";
                    } else {
                      const diffInDays = Math.floor(diffInHours / 24);
                      return `${diffInDays} day${
                        diffInDays > 1 ? "s" : ""
                      } ago`;
                    }
                  })()}
                </span>
              </div>
            </div>
          </div>
          <div className="cursor-pointer">
            <Bell className="w-5 h-5 text-gray-400" />
          </div>
        </div>
        {profile_matches && (
          <div className="mt-3 bg-blue-50 border border-blue-100 rounded-lg p-3 text-sm text-blue-800">
            Based on your profile, this could be your next career move
          </div>
        )}

        <div className="mt-5">
          {subscribers > 15 && (
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
              <div className="text-gray-600">+{subscribers - 5} more</div>
            </div>
          )}

          <div className="mt-4 space-y-2 text-sm">
            {subscribers > 15 && (
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-2 text-gray-500" />
                <span className="font-semibold">{subscribers} </span> +
                professionals subscribed
              </div>
            )}

            <div className="flex items-center">
              <DollarSign className="w-4 h-4 mr-2 text-gray-500" />
              <span>Avg. salary: {salary_range}</span>
            </div>
            <div className="flex items-center">
              {next_posting && (
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-gray-500" />
                  Next Posting Expected Within
                  {(() => {
                    const diffInDays = Math.ceil(
                      (next_posting.getTime() - new Date().getTime()) /
                        (1000 * 60 * 60 * 24)
                    );
                    if (diffInDays <= 1) {
                      return "1 day";
                    } else if (diffInDays > 30) {
                      const months = Math.ceil(diffInDays / 30);
                      return `${months} month${months > 1 ? "s" : ""}`;
                    } else {
                      return `${diffInDays} day${diffInDays > 1 ? "s" : ""}`;
                    }
                  })()}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-700 text-white px-5 py-3 text-center cursor-pointer">
        <div className="flex items-center justify-center font-medium">
          <Sparkles className="w-4 h-4 mr-1" />
          Create personalized alert
        </div>
        <div className="text-xs mt-1 text-blue-200">
          Refine your preferences in the next step
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
