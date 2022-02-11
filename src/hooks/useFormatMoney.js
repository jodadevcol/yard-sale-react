export default function useFormatMoney(Price = 0, Country = 'en-US', Currency = 'USD') {
  const formatMoney = new Intl.NumberFormat(Country, {
    style: "currency",
    currency: Currency,
    minimumFractionDigits: 2,
  });

  return formatMoney.format(Price);
}