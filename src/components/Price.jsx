import clsx from "clsx";

export default function Price({ amount, currency, fiat }) {
  let formatter = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: fiat.value,
  });

  return (
    <div className="text-center text-white text-shadow-lg">
      <h1
        className={clsx(
          "mb-2 font-semibold sm:text-6xl",
          ["CAD", "MXN"].includes(fiat.value) ? "text-4xl" : "text-6xl",
        )}
      >
        {formatter.format(amount)}
      </h1>
      <p className="text-2xl">1 {currency.value}</p>
    </div>
  );
}
