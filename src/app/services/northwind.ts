import { CustomersType } from '../models/Northwind/customers-type';

export async function getCustomers(): Promise<CustomersType[]> {
  const response = await fetch('../../static-data/northwind-customers-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}
