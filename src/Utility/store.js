const getStoreCart=()=>{
    let bring_container=localStorage.getItem('cart')
    if(bring_container){
        return JSON.parse(bring_container)
    }
    return []
}
let save_local_storage=(cart)=>{
    let save_cart=JSON.stringify(cart)
    localStorage.setItem("cart",save_cart)
}
const addIdToLs=(id)=>{
    const find_container=getStoreCart()
    find_container.push(id)
    save_local_storage(find_container)
}
export default addIdToLs