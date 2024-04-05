



export function ADD_TO_CART(Item){
    return{
        type:"ADD_CART",
        payload:Item
    }
}

export function REMOVE_CART_ITEMS(id){
    return{
        type:"REV_CART",
        payload:id
    }
}

export function REMOVE_ONE_ITEAM(Item){
    return{
        type:"REV_ONE",
        payload:Item
    }
}
