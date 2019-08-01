import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';

const CustomersList = ({customers, urlPath}) => {
    return (
        <div>
            <div className="cursomers-list">
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
        </div>
    );
};

CustomersList.propTypes = {
    customers: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default CustomersList;