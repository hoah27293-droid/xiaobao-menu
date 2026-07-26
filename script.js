const menuList =
document.getElementById("menu-list");


const search =
document.getElementById("search");



let menu=[];



fetch("menu.json")

.then(res=>res.json())

.then(data=>{

menu=data;

render(menu);

});




function render(data){


menuList.innerHTML="";


data.forEach(food=>{


menuList.innerHTML += `


<div class="card">


<img 
class="food-image"
src="${food.image}">



<div class="content">


<div class="category">

${food.category}

</div>



<h3>

${food.name}

</h3>



<div class="price">

${food.price}

</div>



<a 

class="order"

href="https://t.me/xiaobao1996"

target="_blank">

Đặt món

</a>


</div>


</div>



`;


});


}




search.addEventListener(
"keyup",
()=>{


let key =
search.value.toLowerCase();



let result =
menu.filter(item=>

item.name
.toLowerCase()
.includes(key)

);



render(result);


});
