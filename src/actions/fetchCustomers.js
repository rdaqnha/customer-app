import { FETCH_CUSTOMERS } from './../constants/index';

export const fetchCustomers = () => {
    return { type: FETCH_CUSTOMERS, payload: null}
};