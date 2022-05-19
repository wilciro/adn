export const capitalize = (text: string): string =>
  text
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

export const formatPrice = (text: string): string => {
  const price = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(parseFloat(text));
  return `${price}`;
};