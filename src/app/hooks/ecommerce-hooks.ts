import { useCallback, useEffect, useState } from 'react';
import { getRevenueList } from '../services/ecommerce';
import { RevenueType } from '../models/ECommerce/revenue-type';

export const useGetRevenueList = () => {
  const [revenue, setRevenue] = useState<RevenueType[]>([]);

  const requestRevenue = useCallback(() => {
    let ignore = false;
    getRevenueList()
      .then((data) => {
        if (!ignore) {
          setRevenue(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestRevenue();
  }, [requestRevenue]);

  return { requestECommerceRevenue: requestRevenue, eCommerceRevenue: revenue, setECommerceRevenue: setRevenue };
}
