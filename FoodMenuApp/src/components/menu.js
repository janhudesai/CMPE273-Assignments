import React, {Component} from 'react';

import {removemenu} from '../actions/index';
import {connect} from 'react-redux';
import Display from './display';
import Display2 from './display2';
import Total from './total';

class menu extends Component{

    render()
    {
        return(
                <div className="container-fluid">
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
                    <div className="row">
                        <div className="col-md-offset-2 col-xs-offset-0 col-sm-offset-0 col-md-4 col-xs-6 col-sm-6">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    Menu
                                </div>
                                <div className="panel-body">
                                    {
                                        this.props.itemArr.map((todo,index) => {
                                            return(
                                                <Display
                                                    key={index}
                                                    item={todo.items}
                                                />
                                            );
                                        })
                                    }
                                    </div>
                                </div>
                            </div>



                        <div className="col-md-4 col-xs-6 col-sm-6">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    BILL
                                </div>
                                <div className="panel-body">
                                    <Display2 key={1}/>
                                </div>

                            </div>

                        </div>
                    </div>

                    </div>


        );
    }
}

//
// function mapStateToProps(menuitems) {
//     const itemArr = Object.keys(menuitems).map((items) => (
//         {
//             'items' : menuitems[items]
//
//
//         }
//     ));
//     return {itemArr};
// }

function mapStateToProps(state) {
    const itemArr = Object.keys(state.menu).map((items) => (
        {
            'items' : state.menu[items]


        }
    ));
    return {itemArr};
}

//function mapDispatchToProps(dispatch) {
    //return {
       // removemenu : (data) => dispatch(removemenu(data))
    //};
//}

export default connect(mapStateToProps, null)(menu);

