import { useEffect, useState } from 'react';
import axios from 'axios';
import Price from './components/Price';
import Footer from './components/Footer';
import Settings from './components/Settings';
import Navbar from './components/Navbar';
import Modal from './components/Modal';

export default function App() {
  const [crypto, setCrypto] = useState('BTC');
  const [fiat, setFiat] = useState('USD');
  const [amount, setAmount] = useState('0');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios.get(`https://api.coinbase.com/v2/prices/${crypto}-${fiat}/spot`).then((res) => {
      let data = res.data.data;
      setAmount(data.amount);
    });
  }, [crypto, fiat]);

  return (
    <div className='flex flex-col justify-between h-screen bg-gradient-to-br from-green-400 to-indigo-600 antialiased'>
      <Navbar />
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        crypto={crypto}
        fiat={fiat}
        setCrypto={setCrypto}
        setFiat={setFiat}
      />
      <Price amount={amount} crypto={crypto} fiat={fiat} />
      <div className='flex justify-between items-center space-x-4 h-12 px-4 bg-reed-300'>
        <Footer />
        <Settings setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}
