const state = {
  items: [
    {
      id: "001-beetroot",
      name: "beetroot",
      price: 0.35,
    },
    {
      id: "002-carrot",
      name: "carrot",
      price: 0.35,
    },
    {
      id: "003-apple",
      name: "apple",
      price: 0.35,
    },
    {
      id: "004-apricot",
      name: "apricot",
      price: 0.35,
    },
    {
      id: "005-avocado",
      name: "avocado",
      price: 0.35,
    },
    {
      id: "006-bananas",
      name: "bananas",
      price: 0.35,
    },
    {
      id: "007-bell-pepper",
      name: "bell pepper",
      price: 0.35,
    },
    {
      id: "008-berry",
      name: "berry",
      price: 0.35,
    },
    {
      id: "009-blueberry",
      name: "blueberry",
      price: 0.35,
    },
    {
      id: "010-eggplant",
      name: "eggplant",
      price: 0.35,
    },
  ],
  cart: [],
};

//const groceryShelf = document.querySelector(".store--items-list")

// function clearCartItems() {
//   const cartItemsUL = document.querySelector('.cart--item-list');
//   cartItemsUL.innerHTML = ""
// }

function addShopItemToCart(shopItem) {
  let cartItem = state.cart.find((item => {
    return (item.id === shopItem.id)
  })
  
  if(cartItem !== undefined) {
    cartItem.quantity++;
  }
  else {
    cartItem = {...shopItem}
    cartItem.quantity = 1
    state.cart.push(cartItem)
  }
  populateCartItems()
}
//console.log(state)

function increaseCartItemQuantity(cartItem) {
  cartItem.quantity++

  populateCartItems()

  // updateCartPrice
}

const cartItemsUL = document.querySelector('.cart--item-list')
const shopItemsUL = document.querySelector(".store--item-list");

function createShopItemCard(shopItem) {
  const li = document.createElement("li");

  const div = document.createElement("div");
  div.setAttribute("class", "store--item-icon");
  li.appendChild(div);

  const imageSource = `./assets/icons/${shopItem.id}.svg`;
  const img = document.createElement("img");
  img.setAttribute("src", imageSource);

  div.appendChild(img);

  const button = document.createElement("button");
  button.innerText = "Add to cart";
  li.append(button);
  button.addEventListener('click', function(){
    addShopItemToCart(storeItem)
    
    // state.cart.push(shopItem) //just added
    // populateCartItems()// render the DOM - change of state
  })

  return li;
}

function populateShopItems() {
  shopItemsUL.innerHTML = ""
  const shopItemsUL = document.querySelector(".store--item-list");
  console.log(shopItemsUL);
  for (let i = 0; i < state.items.length; i++) {
    const shopItem = state.items[i];

    const currentItemLI = createShopItemCard(shopItem);
    shopItemsUL.append(currentItemLI);
  }
}




function createCartItem(cartItem) {
  const li = document.createElement("li");
  console.log('Im here', cartItem)
  

  const imageSource = `./assets/icons/${cartItem.id}.svg`;
  const img = document.createElement("img");
  img.setAttribute("src", imageSource);
  li.appendChild(img);

  const p = document.createElement("p");
  p.innerHTML = cartItem.name;
  //strip off 001 --> done changed p.innerHTML = cartItem.id to p.innerHTML = cartItem.name;
  li.appendChild(p);

  const removeButton = document.createElement("button");
  //removeButton.setAttribute("class", remove-btn);
  removeButton.classList.add("remove-btn");
  removeButton.classList.add("center");
  removeButton.innerText = " - ";
  removeButton.addEventListener('click', function(){ //event -> cartItem?
    //console.log('Im also here', cartItem.id) // look in console and check for ID  && cartItem.id
    //console.log('state', state.items) // checks if we have state && .items.id
  
    const itemFound = state.cart.find(item => item.id === cartItem.id)
    console.log('item found', itemFound)
    const check = state.cart.splice(state.cart.indexOf(itemFound, 1))
    //console.log('check', check)
    //span.innerText--
    itemFound.quantity
    populateCartItems()
    })
  
  li.appendChild(removeButton)
  // button.innerHTML -= cartItem.id
  //add listner click +1 in HTML

  const span = document.createElement("span");
  span.classList.add("quantity-text");
  span.classList.add("center");
  span.innerText = "1"
  span.innerText = cartItem.quantity
  li.appendChild(span);

  const addButton = document.createElement("button");
  addButton.classList.add("add-btn");
  addButton.classList.add("center");
  addButton.innerText = " + ";
  addButton.addEventListener('click', function() {
    const itemFound = state.items.find(item => item.id === cartItem.id)
    const check = state.cart.push(state.cart.indexOf(itemFound, 1))

    populateCartItems()
  })
  li.appendChild(addButton);

  return li;
}

function populateCartItems() {
  const cartItemsUL = document.querySelector('.cart--item-list')
  console.log(cartItemsUL)
  cartItemsUL.innerHTML = "" //just added NB

  for (let i = 0; i < state.cart.length; i++) {
    const cartItem = state.cart[i];
    
    const currentItemLI = createCartItem(cartItem);
    cartItemsUL.append(currentItemLI);
  }
}

function run() {
  populateShopItems();
  populateCartItems();
}

run();
//render