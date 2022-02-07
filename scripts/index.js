
 let menu=document.getElementById("menu")
async function getproducts()
{
   try{
       
       let res=await fetch( `https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian`);
       let data=await res.json()
       appendproduct(data.meals)
    //    console.log("el:",data)
   }
   catch(err)
   {
       console.log("err:",err)
   }
}
getproducts()
 
function  appendproduct(arr)
{
 arr.map(function(el){
    //  console.log("el:",arr)
    let div=document.createElement("div")
    div.setAttribute("id","main")
    
    // let div2=document.createElement("div")
    // div2.setAttribute("id","main2")

    let image=document.createElement("img")
    image.src=el.strMealThumb
    
    let name=document.createElement("h5")
    name.innerText=el.strMeal
    
    let button=document.createElement("button")
    button.textContent="ADD TO CART"
    button.setAttribute("id","AddToCart")
   
    // function AddToCart(arr)
    // {
    //     let cart=JSON.parse(localStorage.getItem("carts"))||[]
    //     carts.push(arr)
    //     localStorage.setItem("carts",JSON.stringify(cart))
    //     cartcount(cart)
    // }


    let price=document.createElement("h4")
    price.innerHTML= Math.random()*2000+"$";
     

//   div2.append(image)
   
 div.append(image,name,price,button)
 menu.append(div)
 button.onclick=function(event)
 {
     
     console.log(div)
     AddToCart(arr)
    
 }   
 function AddToCart(arr){
     let cart=localStorage.getItem("carts")
     cart=JSON.parse(localStorage.getItem("carts"))||[]
        // cart.push(arr)
        localStorage.setItem("carts",JSON.stringify(cart))
        cartcount(cart)   
        console.log(div)
 }
});

}
count=0
function cartcount(cart)   {
  
    
        count++
    
    console.log(count)
      let c=document.querySelector("#count")
      c.textContent=count
}

 
  

         