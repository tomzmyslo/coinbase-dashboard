import { useState } from "react";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Field,
  Label,
  Select,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];

export default function Modal({
  isOpen,
  setIsOpen,
  currency,
  currencies,
  fiat,
  fiats,
  setCurrency,
  setFiat,
}) {
  const [newCurrency, setNewCurrency] = useState(currency);
  const [newFiat, setNewFiat] = useState(fiat);

  return (
    <Transition show={isOpen}>
      <Dialog className="relative z-10" onClose={setIsOpen}>
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-xs transform overflow-hidden rounded-lg bg-white text-left align-middle ring-2 ring-indigo-600 transition-all">
                <div className="space-y-4 p-4 pt-2">
                  <DialogTitle className="text-xl font-bold text-indigo-600">Settings</DialogTitle>
                  <Field>
                    <Label className="mb-2 block text-xs font-bold">Currency</Label>
                    <div className="relative">
                      <Select
                        className="h-10 w-full appearance-none rounded border border-indigo-500 bg-white pl-2"
                        value={newCurrency.value}
                        onChange={(e) =>
                          setNewCurrency(
                            currencies.find((currency) => currency.value === e.target.value),
                          )
                        }
                      >
                        {currencies.map((currency) => (
                          <option key={currency.id} value={currency.value}>
                            {currency.label}
                          </option>
                        ))}
                      </Select>
                      <ChevronDownIcon className="pointer-events-none absolute top-2.5 right-2 size-4 text-indigo-500" />
                    </div>
                  </Field>

                  <Field>
                    <Label className="mb-2 block text-xs font-bold">Fiat</Label>
                    <div className="relative">
                      <Select
                        className="h-10 w-full appearance-none rounded border border-indigo-500 pl-2"
                        value={newFiat.value}
                        onChange={(e) =>
                          setNewFiat(fiats.find((fiat) => fiat.value === e.target.value))
                        }
                      >
                        {fiats.map((fiat) => (
                          <option key={fiat.id} value={fiat.value}>
                            {fiat.label}
                          </option>
                        ))}
                      </Select>
                      <ChevronDownIcon className="pointer-events-none absolute top-2.5 right-2 size-4 text-indigo-500" />
                    </div>
                  </Field>

                  <Button
                    type="button"
                    className="mt-4 h-10 w-full cursor-pointer rounded-md border-2 border-indigo-600 bg-white px-3 py-1 font-bold text-indigo-600 transition hover:bg-indigo-600 hover:text-white"
                    onClick={() => {
                      setIsOpen(false);
                      setCurrency(newCurrency);
                      setFiat(newFiat);
                    }}
                  >
                    Update
                  </Button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
