//use local storage to manage cart

const addToDb=(id)=>
{
  let shoppingCart={}; 
  
//get the shopping cart
  const storedCart=localStorage.getItem('shopping-cart');
  if(storedCart)
  {
     shoppingCart=JSON.parse(storedCart);  //string converts to object
  }

  //add quantity
  const quantity=shoppingCart[id];
  if(quantity)
  {
     const newQuantity=quantity+1;
     shoppingCart[id]=newQuantity;
  }else{
      shoppingCart[id]=1;
  }
  localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));



  
    // const quantity=localStorage.getItem(id);
    // if(quantity)
    // {
    //   const newQuantity=parseInt(quantity)+1;
    //    localStorage.setItem(id,newQuantity);
    // }else
    // {
    //     localStorage.setItem(id,1);
    // }
}
const removeFromDb=(id)=>
{
  const storedCart=localStorage.getItem('shopping-cart');
  if(storedCart)
  {
    const shoppingCart=JSON.parse(storedCart);   //object
    if(id in shoppingCart)
    {
      delete shoppingCart[id];
      localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));


       //   const quantity=shoppingCart[id];
    //   if(quantity)
    //   {
    //      const newQuantity=quantity-1;
    //      shoppingCart[id]=newQuantity;
    //   }else{
    //       delete shoppingCart[id];
    //   }
    //   localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));
    }
  }
}
 


// const deleteShoppingCart=()=>
// {
//   localStorage.removeItem("shopping-cart");
// }

export{
  addToDb,
  removeFromDb,
  // deleteShoppingCart
}
        