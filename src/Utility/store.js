const getStoreCart=()=>{
    const getContainer=localStorage.getItem("cart")
    if(getContainer){
        return JSON.parse(getContainer)
    }
    return[]
}
// save in local storage 
const saveLocalStorage=(cart)=>{
    const save_cart_in_local_storage=JSON.stringify(cart)
    localStorage.setItem("cart",save_cart_in_local_storage)
}

// add the data id
const addToLs=(id)=>{
    const cart=getStoreCart()
    cart.push(id)
    saveLocalStorage(id)
}
export { addToLs }
