import Image from "next/image";
import Link from "next/link";

export default function CompanyCard({ company }: { company: Company }) {
  return (
    <div className="group relative inline-block w-full overflow-hidden rounded-lg border border-muted p-4  @3xl:p-6 ">
      <span className="absolute end-0 top-0 size-20 -translate-y-10 translate-x-4 rotate-45 rounded-3xl bg-[#34C759]/15 "></span>
      <div className="flex items-center gap-2">
        <Image
          alt="company-img"
          src={
            "https://www.wavetransit.com/wp-content/uploads/2021/08/Facebook-logo.png"
          }
          width={64}
          height={64}
        />
        <Link href={`/company/${company.id}`}>{company.name}</Link>
      </div>
      <div className="mb-2 flex items-center justify-between border-b border-muted py-3">
        <p className=" font-normal ">
          <strong className="text-xl">{company.available_jobs}</strong> Openings
        </p>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 256 256"
          className="size-4 text-green-400"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M244,56v64a12,12,0,0,1-24,0V85l-75.51,75.52a12,12,0,0,1-17,0L96,129,32.49,192.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0L136,135l67-67H168a12,12,0,0,1,0-24h64A12,12,0,0,1,244,56Z"></path>
        </svg>
      </div>
      <div className="flex items-center gap-2">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 256 256"
          className="size-4 text-green-400"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M216.49,191.51a12,12,0,0,1-17,17L128,137,56.49,208.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0Zm-160-63L128,57l71.51,71.52a12,12,0,0,0,17-17l-80-80a12,12,0,0,0-17,0l-80,80a12,12,0,0,0,17,17Z"></path>
        </svg>
        <p className=" font-bold ">{company.hire_rate}%</p>
        Hire rate
      </div>
    </div>
  );
}
