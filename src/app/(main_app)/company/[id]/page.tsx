import CompanyPage from "@/components/company";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  return <CompanyPage companyId={id} />;
}
