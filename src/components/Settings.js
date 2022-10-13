import { CogIcon } from '@heroicons/react/24/outline';

export default function Settings({ setIsOpen }) {
  return (
    <button onClick={() => setIsOpen(true)}>
      <CogIcon className='h-8 w-8 text-slate-800' />
    </button>
  );
}
