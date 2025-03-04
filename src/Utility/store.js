const getStoreCart=()=>{
    const getStoreContainer =localStorage.getItem('cart')
    if(getStoreCart){
        let convert=JSON.parse(getStoreContainer)
        return convert
    }
    return []
}
const saveCart=(cart)=>{
    
   let save_container=JSON.stringify(cart)
   localStorage.setItem("cart",save_container)
}
const addToLs=id=>{
    let cart=getStoreCart()
    cart.push(id)
    saveCart(cart)
}
export default addToLs