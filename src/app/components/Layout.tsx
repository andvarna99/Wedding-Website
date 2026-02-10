import { Outlet } from "react-router";
import Navigation from "../../app/components/Navigation";

export default function Layout() {
  return (
    <div className="size-full bg-[#D4C5B9] overflow-y-auto">
      <Navigation />
      <Outlet />
    </div>
  );
}
