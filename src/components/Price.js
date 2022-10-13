export default function Price({ amount, crypto, fiat }) {
  let formatter = new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: fiat,
  });
  return (
    <div className='text-center'>
      <h1 className='text-6xl text-gray-800'>{formatter.format(amount)}</h1>
      <p>1 {crypto}</p>
    </div>
  );
}
