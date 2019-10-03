import React, { Component } from 'react';
import AppFrame from '../components/AppFrame';
import CustomerActions from '../components/CustomerActions';

class HomeContainer extends Component {

    handleOnClick = () => {
        this.props.history.push('/customers');
    } 

    render() {
        return (
            <div>
                <AppFrame 
                    header='Home'
                    body={
                        <div>
                            <img src="../resources/area-clientes.jpg" alt="area-clientes"/>
                            <CustomerActions>
                                <button onClick={this.handleOnClick}>Listado de clientes</button>
                            </CustomerActions>
                        </div>
                    }
                />
            </div>
        );
    }
};

export default HomeContainer;