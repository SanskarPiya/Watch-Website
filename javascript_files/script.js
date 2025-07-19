
//Accessing add ,reduce and quantity Display tags;
let quantityDisplay = document.querySelector("#quantity");
let add = document.querySelector(".add");
let reduce = document.querySelector(".reduce");
let price = document.querySelector(".price");


//Initializing quantity as 0;
let quantity = 1 ;


//Increasing quantity by 1 and popping alert when quantity > 10;
add.addEventListener("click",()=>{
    quantity++;
    if (quantity <= 10){
        quantityDisplay.innerText=quantity;
    }
    else{
        alert("Only 10 watches can be purchased at a time.").
        break;
    }   
})

//Decreasing quantity by 1 and stopping when quantity == 0;
reduce.addEventListener("click",()=>{
    if (quantity > 1){
        quantity--;
        quantityDisplay.innerText=quantity;
    }
})


//Accessing the Add to bag button of product details page
let order = document.querySelector(".confirm-order");

order.addEventListener("click",()=>{
    alert("Your Order has been confirmed.");
})
