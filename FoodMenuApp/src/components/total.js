import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removemenu} from '../actions/index'

class total extends Component {

    item()
    {
        var value =0;
        return this.props.itemArr.map((keys) =>{
            value = value+ keys.price;
            return(
                    value
                );
            }
        )
    }


    render()
    {
        const {item} = this.props;

        return(
            <div >
                {this.item()}
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {
        itemArr:state.bill.items
    };
}



export default connect(mapStateToProps, null)(total);