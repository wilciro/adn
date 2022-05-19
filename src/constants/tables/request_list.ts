import { formatPrice } from 'utils/text';

export const requestListHeader = [
  {
    label: 'Mascota',
    row: 'pet_name',
  },
  {
    label: 'Tipo mascota',
    row: 'pet_type',
  },
  {
    label: 'Edad mascota',
    row: 'pet_age',
  },
  {
    label: 'Dueño',
    row: 'owner_name',
  },
  {
    label: 'Documento dueño',
    row: 'owner_document',
  },
  {
    label: 'Date',
    row: 'date',
  },
  {
    label: 'Precio',
    row: 'price',
    format: (price: string) => formatPrice(price),
  },
];
