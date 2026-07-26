const menu = [

{
name:"Cơm ba chỉ cháy cạnh",
price:"260"
},

{
name:"Cơm chả lá lốt",
price:"260"
},

{
name:"Cơm thịt kho trứng",
price:"260"
},

{
name:"Cơm cá kho",
price:"260"
},

{
name:"Cơm gà rang gừng",
price:"260"
},

{
name:"Cơm gà chiên mắm",
price:"260"
},

{
name:"Cơm gà xối mỡ",
price:"260"
},

{
name:"Cơm sườn xào chua ngọt",
price:"260"
}

];

const menuList=document.getElementById("menu-list");

function showMenu(data){

menuList.innerHTML="";

data.forEach(item=>{

menuList.innerHTML+=`

<div class="card">

<h3>${item.name}</h3>

<p class="price">${item.price} ₱</p>

<a class="order"

href="https://t.me/xiaobao1996"

target="_blank">

Đặt món

</a>

</div>

`;

});

}

showMenu(menu);

document.getElementById("search").addEventListener("input",function(){

const keyword=this.value.toLowerCase();

const result=menu.filter(item=>

item.name.toLowerCase().includes(keyword)

);

showMenu(result);

});
