export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex w-full justify-center py-4">
      <p className="space-y-3 text-center text-xs text-white text-shadow-lg">
        Pricing provided by the Coinbase API
      </p>
    </footer>
  );
}
