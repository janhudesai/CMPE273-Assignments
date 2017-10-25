export const REMOVE_MENU ='REMOVE_MENU';
export const REMOVE_BILL='REMOVE_BILL';


export function removemenu(item) {
    return{
        type:REMOVE_MENU,
        item

    }
}



export function removebill(item) {
    return{
        type:REMOVE_BILL,
        item

    }
}