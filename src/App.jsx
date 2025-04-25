import { useEffect, useState } from "react";
// import axios from 'axios';
import Price from "@/components/Price";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Modal from "@/components/Modal";

const currencies = [
  { id: 1, label: "Bitcoin", value: "BTC" },
  { id: 2, label: "Litecoin", value: "LTC" },
  { id: 3, label: "Ethereum", value: "ETH" },
];

const fiats = [
  { id: 1, label: "United States Dollar", value: "USD" },
  { id: 2, label: "Canadian Dollar", value: "CAD" },
  { id: 3, label: "Euro", value: "EUR" },
  { id: 4, label: "Mexican Peso", value: "MXN" },
];

export default function App() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [fiat, setFiat] = useState(fiats[0]);
  const [amount, setAmount] = useState("0");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        const res = await fetch(
          `https://api.coinbase.com/v2/prices/${currency.value}-${fiat.value}/spot`,
        );
        const result = await res.json();
        setAmount(result.data.amount);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [currency, fiat]);

  return (
    <div className="flex h-screen flex-col items-center justify-between">
      <Navbar setIsOpen={setIsOpen} />
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        currency={currency}
        currencies={currencies}
        fiat={fiat}
        fiats={fiats}
        setCurrency={setCurrency}
        setFiat={setFiat}
      />
      <div className="flex h-full items-center justify-center text-slate-600">
        <Price amount={amount} currency={currency} fiat={fiat} />
      </div>
      <Footer />
    </div>
  );
}
