import React from "react";
import { Card } from "./ui/card";

const JobCard: React.FC<{ job: Job }> = ({ job }) => {
  return (
    // <div className="p-4 rounded-lg shadow-md mb-4">
    <Card className="p-4 rounded-lg shadow-md mb-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">{job.title}</h2>
        <div className="flex gap-2">
          <button className="text-gray-500 hover:text-gray-700">↻</button>
          <button className="text-gray-500 hover:text-gray-700">□</button>
        </div>
      </div>
      <p className="">
        {job.company} • {job.location}
      </p>
      {job.salary && <p className=" mt-1">{job.salary}</p>}
      <div className="flex gap-2 mt-2 flex-wrap">
        {job.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4 flex-wrap gap-2">
        <div className="flex gap-2">
          <span className="">{job.experienceLevel} EXPERIENCE LEVEL</span>
          <span className="">{job.deadline} DEADLINE</span>
        </div>
        <button className="px-4 py-2 bg-pink-500 text-white rounded-lg">
          View Details
        </button>
      </div>
    </Card>
    // <Card className="h-full group flex flex-col-reverse lg:flex-row justify-between">
    //             <div className="lg:p-4 w-full lg:border-r lg:flex items-end">
    //               <div>
    //                 <CardHeader className="pt-0 pb-3">
    //                   <CardTitle>{job.title}</CardTitle>
    //                   <CardDescription>{project2.description}</CardDescription>
    //                 </CardHeader>
    //                 <CardFooter className="*:mr-2 *:mb-2 flex flex-wrap">
    //                   {project2.tags.map((tag) => (
    //                     <Badge variant="secondary" key={tag}>
    //                       {tag}
    //                     </Badge>
    //                   ))}
    //                 </CardFooter>
    //               </div>
    //             </div>

    //           </Card>
  );
};

export default JobCard;
