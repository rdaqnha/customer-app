import React from 'react';
import PropTypes from 'prop-types';
import CustomersActions from './CustomerActions';
import { accessControl } from '../helpers/accessControl';
import { CUSTOMER_VIEW } from '../constants/permisions';




const CustomerData = ({id, name, dni, age, onBack, isDeleteAllow, onDelete}) => {
    return (
        <div>
            <div className="customer-data">
                <h2>Datos del Cliente</h2>
                <div><strong>Nombre</strong><i>{name}</i></div>
                <div><strong>Dni</strong><i>{dni}</i></div>
                <div><strong>Edad</strong><i>{age}</i></div>
                <CustomersActions>
                        <button onClick={onBack}>Volver</button>
                        {isDeleteAllow && <button onClick={() => onDelete(id)}>Elininar</button>}
                </CustomersActions>
            </div>
        </div>
    );
};

CustomerData.propTypes =  {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
    isDeleteAllow: PropTypes.bool,
    onDelete: PropTypes.func
}

export default accessControl([CUSTOMER_VIEW])(CustomerData);