Application:
-  Header
   -  h1 - hreengrocers
   -  ul - class = "item-list store--item-list"
   -  li - List of fruit and vegetables
      -  div class = "store--item-icon"
      -  img - src
      -  button add to cart
   -  li


-  Main


STEP 1
New js file where all my code is written with the exception of index.js
Create new file index.js & rename index.js to state.js


const storeShelf = document.getElementById("storeShelf")

const renderProducts = () => {
    // return state
    return state.items.map(item => {
        const img = document.createElement("img")
        img.style.width = "100"
        img.setAttribute("src", `/assets/${item.id}.svg`)
        img.appendChild(img)
    })
}
