const state = {
  items: [
    {
      id: "001-beetroot",
      name: "beetroot",
      price: 0.35
    },
    {
      id: "002-carrot",
      name: "carrot",
      price: 0.35
    },
    {
      id: "003-apple",
      name: "apple",
      price: 0.35
    },
    {
      id: "004-apricot",
      name: "apricot",
      price: 0.35
    },
    {
      id: "005-avocado",
      name: "avocado",
      price: 0.35
    },
    {
      id: "006-bananas",
      name: "bananas",
      price: 0.35
    },
    {
      id: "007-bell-pepper",
      name: "bell pepper",
      price: 0.35
    },
    {
      id: "008-berry",
      name: "berry",
      price: 0.35
    },
    {
      id: "009-blueberry",
      name: "blueberry",
      price: 0.35
    },
    {
      id: "010-eggplant",
      name: "eggplant",
      price: 0.35
    }
  ],
  cart: []
};

//const groceryShelf = document.querySelector(".store--items-list")



function createShopItemCard(shopItem) {
  const li = document.createElement('li')


  const div = document.createElement('div')
  div.setAttribute('class', 'store--item-icon')
  li.appendChild(div)
  
  const imageSource = `./assets/icons/${shopItem.id}.svg`
  const img = document.createElement('img')
  img.setAttribute('src', imageSource)
  
  div.appendChild(img)

  

  return li
}

function populateShopItems() {
  const shopItemsUL = document.querySelector('.store--item-list')
  console.log(shopItemsUL)
for (let i = 0; i < state.items.length; i++) {
  const shopItem = state.items[i]
  
  const currentItemLI = createShopItemCard(shopItem)
  shopItemsUL.append(currentItemLI)

}
}

populateShopItems()