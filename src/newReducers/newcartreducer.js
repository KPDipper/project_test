//hami yesma tai user le click gareko item haru(like mobile ,pc etc) matra include hune cha

const initialData={

    cart_items:[]

}


function newcartreducer(state=initialData,action){

    switch (action.type) {
        case "ADD_TO_CART":
            return{
               
               cart_items:[...state.cart_items,action.payload]
            }
        case "Empty the cart":
            return{
                cart_items:[]//here jaba kasaile empty the card garchan then sabai cart_item initialData ma vhayeko array empty huncha
                //ra cart ma khali huncha
            }

        case "REMOVE_FROM_CART":
            return { 
                  //multiple state bhyo bhane tai (...state ) use garnu parcha
                cart_items:state.cart_items.filter(item=>action.payload.item_name!==item.item_name)//paila purai item aucha ani sab check garcha
                //by using filter here cart.js bata ako payload value tai yeta ko state value lai check garcha ra jaba duitai value check garcha
                // then it will be skipped and jun same chaina tyo tai cart_items ma gayera bascha
            }                                                                    
    
        default:
            return state
    }
  
}
export default newcartreducer