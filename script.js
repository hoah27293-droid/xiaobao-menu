const menu = [

{
category:"🍚 Cơm",
name:"Cơm ba chỉ cháy cạnh",
price:"260 ₱"
},

{
category:"🍚 Cơm",
name:"Cơm chả lá lốt",
price:"260 ₱"
},

{
category:"🍚 Cơm",
name:"Cơm thịt kho trứng",
price:"260 ₱"
},

{
category:"🍚 Cơm",
name:"Cơm cá kho",
price:"260 ₱"
},

{
category:"🍚 Cơm",
name:"Cơm gà rang gừng",
price:"260 ₱"
},

{
category:"🍚 Cơm",
name:"Cơm gà chiên mắm",
price:"260 ₱"
},

{
category:"🍚 Cơm",
name:"Cơm gà xối mỡ",
price:"260 ₱"
},

{
category:"🍚 Cơm",
name:"Cơm sườn xào chua ngọt",
price:"260 ₱"
},

{
category:"🍜 Mỳ",
name:"Mỳ xào bò",
price:"300 ₱"
},

{
category:"🍜 Mỳ",
name:"Mỳ xào hải sản",
price:"300 ₱"
},

{
category:"🍜 Mỳ",
name:"Mỳ xào gà",
price:"300 ₱"
}

];

const menuList = document.getElementById("menu-list");
const search = document.getElementById("search");

function render(data){

menuList.innerHTML="";

data.forEach(food=>{

menuList.innerHTML +=`

<div class="card">

<h3>${food.name}</h3>

<p>${food.category}</p>

<div class="price">${food.price}</div>

<a class="order"

target="_blank"

href="https://t.me/xiaobao1996">

Đặt qua Telegram

</a>

</div>

`;

});

}

render(menu);

search.addEventListener("keyup",()=>{

const key=search.value.toLowerCase();

const result=menu.filter(item=>

item.name.toLowerCase().includes(key)

);

render(result);

});
/* ==========================
   FOOD IMAGE
========================== */

.food-image{
    width:100%;
    height:180px;
    object-fit:cover;
    border-radius:15px;
    margin-bottom:15px;
}

.category{
    display:inline-block;
    background:#d4af37;
    color:#000;
    padding:6px 12px;
    border-radius:20px;
    font-size:13px;
    font-weight:bold;
    margin-bottom:12px;
}

.card{
    overflow:hidden;
}

.card:hover .food-image{
    transform:scale(1.08);
    transition:.4s;
}
menuList.innerHTML +=`

<div class="card">

<img
class="food-image"
src="https://picsum.photos/400/300?random=${Math.floor(Math.random()*1000)}">

<div class="category">
${food.category}
</div>

<h3>${food.name}</h3>

<div class="price">
${food.price}
</div>

<a
class="order"
target="_blank"
href="https://t.me/xiaobao1996">

Đặt qua Telegram

</a>

</div>

`;
