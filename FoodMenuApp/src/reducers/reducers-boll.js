
import {REMOVE_MENU} from '../actions/index';
import {REMOVE_BILL} from '../actions/index'
const bill={
   // items : []
}



const menuitems =(state=bill,action) =>
{
    switch (action.type) {
        case REMOVE_MENU :
            // return {
            //
            //     ...state,
            //     [action.item.name]:[action.item]
            //
            // };

            //
            // function temp()
            // {
            //     var value;
            //     state.map((keys) =>
            //         {
            //             if (keys.name == action.item.name)
            //             {
            //                 value = 1;
            //                 keys.qty +=1;
            //                 console.log(keys.item);
            //             }
            //         }
            //     )
            //     return value;
            // }
            //
            // if (temp() == 1) {
            //
            //         // has to change according to the new structure
            //     // for (var i = 0 ; i < state.items.length; i++)
            //     // {
            //     //     if (state.items[i].item == action.item.name )
            //     //         {
            //     //             state.items[i].qty = state.items[i].qty + 1;
            //     //          break;
            //     //         }
            //     // }
            //     state.map((keys) =>
            //         {
            //             if (keys.name == action.item.name)
            //             {
            //                 value = 1;
            //                 console.log(keys.item);
            //             }
            //         }
            //     )
            //     return state;
            //
            //
            //     // initial version
            //     // return Object.assign({}, state, {
            //     //
            //     //     items: [
            //     //         ...state.items,
            //     //         {
            //     //             ...state.items.item,
            //     //             qty: action.item.qty +1,
            //     //             ...state.items.price
            //     //         }
            //     //     ]
            //     // })
            //
            // }
            // else
            // {
            //     // for corrupted qty
            //     // return Object.assign({}, state, {
            //     //
            //     //     items: [
            //     //         ...state.items,
            //     //         {
            //     //             item: action.item.name,
            //     //             qty: 1,
            //     //             price:action.item.price
            //     //         }
            //     //     ]
            //     // })
            //
            //     state[action.item.name] = {name:action.item.name
            //                                 ,qty :action.item.qty,
            //                                price :action.item.price     };
            //
            //     return state;
            //
            //
            // }

            var value =0;
            //state.map((keys) =>
                for (var keys in state) {
                    if (state[keys].name == action.item.name) {
                        value = 1;
                        state[keys].qty += 1;
                        console.log(state[keys].item);
                    }
                }


            if(value != 1) {
                state[action.item.name] = {name:action.item.name
                    ,qty :1,
                    price :action.item.price     };
            }

            return state;
            // return Object.assign({}, state, {
            //     items: [
            //         ...state.items,
            //         {
            //             item: action.item.name,
            //             qty :action.item.qty
            //         }
            //     ]
            // })

        case REMOVE_BILL:

            if (action.item.qty ==1 )
            {
                //delete state[action.item];
                for (var keys in state) {
                    if (state[keys].name == action.item.name) {
                        delete state[keys];
                    }}
            }
            else if(action.item.qty>1)
            {
                action.item.qty -= 1;
            }
            return state;
        default :
            return state;
    }


}


export default menuitems;