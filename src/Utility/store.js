const getStoreCart=()=>{
    const getContainer=localStorage.getItem("cart")
    if(getContainer){
        return JSON.parse(getContainer)
    }
    return[]
}
// save in local storage 
const saveLocalStorage=(cart)=>{
    const convert_into_strigify=JSON.stringify(cart)
    localStorage.setItem("cart",convert_into_strigify)
}
// add the data id
const addToLs=(id)=>{
    const cart=getStoreCart()
    cart.push(id)
    saveLocalStorage(cart)
}
export { addToLs, getStoreCart }

