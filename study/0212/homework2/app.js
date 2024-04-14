// https://fakestoreapi.com/products

function getShopping() {
  fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((json) => {
      const shopping = json
      console.log('shopping: ', shopping)
      addItem(shopping)
    })

}

function addItem(shopping) {
  for(let i = 0; i < shopping.length; i++) {
    const app = document.getElementById("shopping");

    // Add Titile
    const addTitle = document.createElement("a");
    addTitle.innerHTML = shopping[i].title
    addTitle.href = shopping[i].url
    addTitle.target = '_blank'
    addTitle.setAttribute("class", "shoppingTitle");
    app.appendChild(addTitle)

    // Add Price
    const addPrice = document.createElement("div");
    addPrice.innerHTML = `Price: $ ${shopping[i].price} -`;
    app.appendChild(addPrice)

    // Add Rating
    const addRating = document.createElement("div");
    addRating.innerHTML = `Rating: ${shopping[i].rating.rate} / ${shopping[i].rating.count}人が評価した`;
    app.appendChild(addRating)

    // Add Category
    const addCategory = document.createElement("div");
    addCategory.innerHTML = shopping[i].category
    if(shopping[i].category === "men's clothing"){
      addCategory.setAttribute("class", "shoppingCategoryMens");
    } else if (shopping[i].category === "women's clothing"){
      addCategory.setAttribute("class", "shoppingCategoryWomens");
    } else if (shopping[i].category === "electronics"){
      addCategory.setAttribute("class", "shoppingCategoryElectronics");
    } else {
      addCategory.setAttribute("class", "shoppingCategoryjewelery");
    }
    app.appendChild(addCategory)

    // Add Image
    const addImage = document.createElement("img");
    addImage.src = shopping[i].image
    app.appendChild(addImage)


  }
}

getShopping()
