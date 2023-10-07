fetch('https://fakestoreapi.com/products/1',{
    method:"get"
}).then((val)=>val.json()).then((val)=>{
 console.log(val)
})
