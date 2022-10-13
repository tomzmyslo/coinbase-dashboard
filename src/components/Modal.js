import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function Modal({ isOpen, setIsOpen, crypto, fiat, setCrypto, setFiat }) {
  console.log('Open:', isOpen);
  const [newCrypto, setNewCrypto] = useState(crypto);
  const [newFiat, setNewFiat] = useState(fiat);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-50' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-sm transform overflow-hidden rounded-lg bg-white p-21 text-left align-middle shadow-xl transition-all'>
                <Dialog.Title
                  as='h3'
                  className='flex justify-center items-center text-lg font-bold leading-6 text-white h-10 px-2 py-1 bg-indigo-600'
                >
                  Settings
                </Dialog.Title>
                <div className='my-2 px-2 sm:px-8 space-y-2'>
                  <div className=''>
                    <label htmlFor='crypto' className='text-xs font-bold'>
                      Crypto
                    </label>
                    <select
                      id='crypto'
                      className='w-full border border-gray-400 bg-white h-8'
                      value={newCrypto}
                      onChange={(e) => setNewCrypto(e.target.value)}
                    >
                      <option value='BTC'>BTC</option>
                      <option value='LTC'>LTC</option>
                      <option value='ETH'>ETH</option>
                    </select>
                  </div>

                  <div className=''>
                    <label htmlFor='fiat' className='text-xs font-bold'>
                      Fiat
                    </label>
                    <select
                      id='fiat'
                      className='w-full border border-gray-400 bg-white h-8'
                      value={newFiat}
                      onChange={(e) => setNewFiat(e.target.value)}
                    >
                      <option value='USD'>United States Dollar</option>
                      <option value='CAD'>Canadian Dollar</option>
                      <option value='EUR'>Euro</option>
                      <option value='MXN'>Mexican Peso</option>
                    </select>
                  </div>

                  <div className='flex justify-center mt-2'>
                    <button
                      type='button'
                      className='bg-indigo-600 text-white font-bold w-full sm:w-32 h-10 mt-2 px-3 py-1 rounded border-2'
                      onClick={() => {
                        setIsOpen(false);
                        setCrypto(newCrypto);
                        setFiat(newFiat);
                      }}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
