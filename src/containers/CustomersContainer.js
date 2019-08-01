import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFrame from '../components/AppFrame';
import CustomerList from './../components/CustomersList';
import CustomerActions from '../components/CustomerActions';
import { fetchCustomers } from './../actions/fetchCustomers';

const customers = [
    {
        "dni": "343423432",
        "name": "Manolo García",
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

class CustomersContainer extends Component {

    componentDidMount(){
        const { fetchCustomers } = this.props;
        fetchCustomers();
    }

    handleAddNew = () => {
        this.props.history.push('curtomers/new');
    }

    renderBody = customers => (
        <div>
            <CustomerList 
                customers={customers} 
                urlPath={'customer/'} 
            />
            <CustomerActions>
                <button onClick={this.handleAddNew}>Nuevo Cliente</button>
            </CustomerActions>
        </div>
        
    )

    render() {
        return (
            <div>
                <AppFrame 
                    header={'Listado de clientes'}
                    body={this.renderBody(customers)}
                />
            </div>
        );
    }
};

CustomersContainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => (
    {
        fetchCustomers: () => dispatch(fetchCustomers())
    }
)

export default withRouter(connect(null, mapDispatchToProps)(CustomersContainer));