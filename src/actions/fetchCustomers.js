import { FETCH_CUSTOMERS } from './../constants/index';
import { createAction } from 'redux-actions';

const customers = [
    {
        "dni": "343423432",
        "name": "Manolo García Pio",
        "age": 23
    },
    {
        "dni": "344233432",
        "name": "Paco Nuñez",
        "age": 35
    },
    {
        "dni": "5343423432",
        "name": "Jose Blanco",
        "age": 56
    }
];

export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => customers);