import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';
import { accessControl } from '../helpers/accessControl';
import { CUSTOMER_LIST } from '../constants/permisions';

const CustomersList = ({customers, urlPath}) => {
    return (
            <div className="customer-list">
                {
                    customers.map(item =>
                        <CustomerListItem
                            key={item.dni}
                            dni={item.dni}
                            name={item.name}
                            editAction={'Editar'}
                            delAction={'Eliminar'}
                            urlPath={urlPath} 
                        />
                    ) 
                }
            </div>
    );
};

CustomersList.propTypes = {
    customers: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default accessControl([CUSTOMER_LIST])(CustomersList);