import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removemenu} from '../actions/index'

class display extends Component{

    render()
    {
        const {item} = this.props;

        return(
            <div className="container-fluid well well-sm">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
                <div className="row">
                <div className="col-sm-4 col-lg-4">
                    Item:{item.name}
                </div>
                <div className="col-sm-4 col-lg-4">
                    Price:${item.price}
                </div>
                <div className="col-sm-4 col-lg-4">
                    <button
                        className="btn btn-primary btn-xs"
                        onClick={() => {
                            this.props.removemenu(item)
                        }}
                    >Add</button>
                </div>
            </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
return {
 removemenu : (data) => dispatch(removemenu(data))
};
}

export default connect(null, mapDispatchToProps)(display);
