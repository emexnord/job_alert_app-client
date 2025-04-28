import Link from "next/link";

export default function Footer() {
  function getCurrentYear() {
    return new Date().getFullYear();
  }

  return (
    <div className="h-16 border-t mt-8 flex items-center justify-center text-sm">
      ©{getCurrentYear()}{" "}
      <Link className="ml-1" href={"/"}>
        devtopia
      </Link>
    </div>
  );
}
