import Settings from "@/components/Settings";

export default function Navbar({ setIsOpen }) {
  return (
    <nav className="fixed w-full bg-white/20 text-lg font-bold shadow backdrop-blur">
      <div className="flex h-14 items-center justify-between px-4 xl:px-40">
        <h1 className="text-white text-shadow-lg">Crypto Dashboard</h1>
        <Settings setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
}
