import { ModeToggle } from "./mode-toggle";
import SignOutButton from "./signout";

export default function Navbar() {
  return (
    <div className="h-16 flex justify-between items-center font-bold text-2xl">
      <div />
      devtopia
      <ModeToggle />
      <SignOutButton />
    </div>
  );
}
