const initialData = {
    cart_value:10//yeta tai value ayera bascha ra yeta save huncha
}

function cartreducer(state=initialData,action){//yesko kam tai value lai manipulate garcha

    switch(action.type){//here updatecart ma bhayeko type value like (ADD) action ma gayera bascha
        case 'ADD':
            return{
            cart_value:++state.cart_value //now that if that value is ADD
            }
        
        case 'REMOVE':
            return{
            cart_value:--state.cart_value//here hamile since yo statmenet yo object ho tesaile hamile eslai curly bracket ma lyaunu parcha
            }
        default:
            return state;
    }

  
}

export default cartreducer