import { FetchApi } from './fetch-api';
import { RevenueType } from '../models/ECommerce/revenue-type';

export async function getRevenueList(): Promise<RevenueType[]> {
  return await FetchApi.fetchApiResponse<RevenueType[]>('https://excel2json.io/api/share/03e74dde-d2e1-4fee-437d-08da496bf5f2', []);
}
