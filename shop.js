let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Night Lights Led Light Manga Slime Isekai Rimuru Tempest For Kids Bedroom Decor That Time I Got Reincarnated As A Anime 3d Lamp TenSura',
        image: 'shopping1.PNG',
        price: 999
    },
    {
        id: 2,
        name: 'RE:ZERO KARA HAJIMERU ISEKAI SEIKATSU HOODIES',
        image: 'shopping2.PNG',
        price: 999
    },
    {
        id: 3,
        name: 'No Game No Life White Yuu Enokimiya Art Works Scale Plastic Pre-painted Complete Figure',
        image: 'shopping3.JPG',
        price: 9999
    },
    {
        id: 4,
        name: 'Decompression Toy Anime Jobless Reincarnation Mushoku Tensei Alice PVC Action Figure 100% Original Genuine Collection Model Doll Toys Realsh',
        image: 'shopping4.PNG',
        price: 111111
    },
    {
        id: 5,
        name: '3d Lamp Slime Isekai Milim Nava Figure For Kids Bedroom Decor That Time I Got Reincarnated As A Slime Anime Led Light Tensura',
        image: 'shopping5.jpg',
        price: 129191923
    },

    {
        id: 6,
        name: 'PRODUCT NAME Isekai Embroidered Hoodie, Anime Streetwear Hoodie, Anime Embroidered Hoodie, Unisex Premium Hoodie',
        image: 'shopping6.png',
        price: 999
    },

    {
        id: 7,
        name: 'No Game No Life Shiro Complete Figure',
        image: 'shopping7.jpeg',
        price: 999
    },

    {
        id: 8,
        name: 'FIGURINE OTHERWORLDER RIMURU',
        image: 'shopping8.jpg',
        price: 999
    },
    {
        id: 9,
        name: 'Mushoku Tensei: Jobless Reincarnation Roxy Migurdia',
        image: 'shopping9.jpeg',
        price: 999
    },
    {
        id: 10,
        name: 'Isekai Delivery Service Shirt',
        image: 'shopping10.jpeg',
        price: 9999
    },
    {
        id: 11,
        name: 'Tanya the Evil Its not a war crime if you win Shirt',
        image: 'shopping11.jpeg',
        price: 111111
    },
    {
        id: 12,
        name: 'Isakei Anime Unisex t-shirt',
        image: 'shopping12.jpeg',
        price: 129191923
    },

    {
        id: 13,
        name: 'Chibi Aqua Konosuba Mug',
        image: 'shopping13.jpeg',
        price: 999
    },

    {
        id: 14,
        name: 'Anime Motion 3D Waterproof Decal Sticker',
        image: 'shopping14.jpeg',
        price: 999
    },

    {
        id: 15,
        name: 'Not Today Truck-Kun Hoodie',
        image: 'shopping15.jpeg',
        price: 999
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="img/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="img/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

window.onscroll = function() {scrollFunction()};
		
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}