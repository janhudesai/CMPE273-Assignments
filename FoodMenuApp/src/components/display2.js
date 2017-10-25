import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removemenu} from '../actions/index'
import {removebill} from '../actions/index'

class display2 extends Component {

    state =
    {
        temp: 0
     }
    item()
    {

        return this.props.itemArr.map((todo,index) =>{
            return(
                <div className="container-fluid well well-sm">
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
                    <div className="row">
                        <div className="col-sm-4 col-lg-4">
                            Item:{todo.items.name}
                        </div>

                        <div className="col-sm-4 col-lg-4">
                            Qty:{todo.items.qty}/Price: ${todo.items.price}
                        </div>
                        <div className="col-sm-4 col-lg-4">
                            <button
                                className="btn btn-primary btn-xs"
                                onClick={() => {
                                    this.props.removebill(todo.items)
                                }}
                            >Remove</button>
                    </div>
                </div>
                </div>
            );
            }
        )
    }

    total()
    {
        var temp1 =0;

        this.props.itemArr.map((todo,index) =>{

            temp1 =temp1 + (todo.items.qty*todo.items.price);


        });
        return temp1;


    }

    render()
    {
        const {item} = this.props;

        return(
            <div >
                <div>
                {this.item()}
                </div>
                <div>
                   Your Bill is: ${this.total()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {


    // item vadu version
    // return {
    //     itemArr:state.bill.items
    // };

    const itemArr = Object.keys(state.bill).map((items) => (
        {
            'items' : state.bill[items]


        }
    ));
    return {itemArr};
}

function mapDispatchToProps(dispatch) {
    return {
        removebill : (data) => dispatch(removebill(data))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(display2);