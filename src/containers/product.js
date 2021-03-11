
import React from 'react';
import {bindActionCreators} from 'redux';
import {getSpecificProduct} from '../actions/product';
import {connect} from 'react-redux';

class Product extends React.Component{

     componentDidMount(){
       this.props.getSpecificProduct(parseInt(localStorage.getItem('getSpecificProduct')))
     }
    render(){
        return(
            <h1>
            I am in specific product page
        </h1>
        )
       
    }
}
function mapStatetoProps(appState){
    return {currentProduct:appState.currentProduct}
}
// //export default connect( appState => {isUserLoggedIn:appState.isUserLoggedIn}, dispatch => bindActionCreators({registerNewUser},dispatch) ) (Register);
 export default connect(mapStatetoProps, dispatch => bindActionCreators({getSpecificProduct},dispatch) ) (Product);

