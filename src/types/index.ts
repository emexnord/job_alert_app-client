export interface Company {
  id: string;
  company_id: string;
  name: string;
  image: string;
  category: string;
  intro?: string;
  headquarters: string;
  officePolicy: string;
  employees: string;
  founded?: string;
  company_url: string;
  available_jobs: number;
  hire_rate: number;
  countries: number;
  socialLinks: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    facebook?: string;
  };
}

export interface JobCategoryType {
  id: string;
  title: string;
  company: string;
  location: string;
  contractType: string;
  description: string;
  requiredSkills: string[];
  locationsCount: number;
  jobType: "Remote" | "Onsite" | "Both";
  postedDate: string;
  updatedDate: string;
}
