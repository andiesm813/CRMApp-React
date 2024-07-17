import { useCallback, useEffect, useState } from 'react';
import { CustomersType } from '../models/Northwind/customers-type';
import { getCustomers } from '../services/northwind';

export const useGetCustomers = () => {
  const [customers, setCustomers] = useState<CustomersType[]>([]);

  const requestCustomers = useCallback(() => {
    let ignore = false;
    getCustomers()
      .then((data) => {
        if (!ignore) {
          setCustomers(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestCustomers();
  }, [requestCustomers]);

  return { requestNorthwindCustomers: requestCustomers, northwindCustomers: customers, setNorthwindCustomers: setCustomers };
}
