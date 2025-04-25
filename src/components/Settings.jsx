import { CogIcon } from "@heroicons/react/24/outline";

export default function Settings({ setIsOpen }) {
  return (
    <button className="cursor-pointer" onClick={() => setIsOpen(true)}>
      <CogIcon className="size-8 text-white text-shadow-lg" />
    </button>
  );
}
