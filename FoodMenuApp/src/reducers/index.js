//import {REMOVE_MENU} from '../actions/index';

// const menu =[
// {
//     item:"Pasta",
//     qty:5,
//     price:10
// },
//     {
//     item:"Pizza",
//     qty:5,
//     price:15}
// ]


import {combineReducers} from 'redux';
import Menu from './reducers-menu';
import Menuitems from './reducers-boll';

const allReducers = combineReducers({
    menu:Menu,
    bill:Menuitems
})

export default allReducers;