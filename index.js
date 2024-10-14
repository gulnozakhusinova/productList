const productTypeSelect = document.getElementById("type-select")
const productNameSelect = document.getElementById("product-name")
const productCountSelect = document.getElementById("product-count")

const addProductButton = document.querySelector(".add-product")
const clearProductListButton = document.querySelector(".clear-list")
const productsListElement = document.querySelector(".products-list")

let productList = []


function addProduct() {
  const product = {
    id: new Date().getTime(),
    type: productTypeSelect.value,
    name: productNameSelect.value,
    count: Number(productCountSelect.value)
  }

  const isValid = validateProduct(product)

  if (isValid) {
    productList.push(product)
    creatProductElement(product)
  }

}


function creatProductElement(product) {
  const productItemElement = document.createElement('div')
  productItemElement.classList.add('product-item')
 

  const productItemCardElement = document.createElement('div')
  productItemCardElement.classList.add('product-item-card')

  const productItemTitle = document.createElement('div')
  productItemTitle.classList.add('product-item-type')
  productItemTitle.innerHTML = `${product.type}`

  const productItemName = document.createElement('div')
  productItemName.classList.add('product-item-name')
  productItemName.innerHTML = `${product.name}`

  const productItemCount = document.createElement('div')
  productItemCount.classList.add('product-item-count')
  productItemCount.innerHTML = `${product.count}`

  const productItemButton = document.createElement('button')
  productItemButton.classList.add('product-item-button')
  productItemButton.innerHTML = '-'

  productItemButton.addEventListener('click', () =>{
      productsListElement.removeChild( productItemElement)
      productList = productList.filter(item => item.id !== product.id);
      console.log(productList);
  })

  productItemElement.append(productItemCardElement)
  productItemCardElement.append(productItemTitle)
  productItemCardElement.append(productItemName)
  productItemCardElement.append(productItemCount)
  productItemElement.append(productItemButton)
  productsListElement.append(productItemElement)
}




function clearProductList() {
  productList = []
  productsListElement.innerHTML = " "
}


function validateProduct(product) {

  if (product.type == "") {
    alert("Choose product.")
    return false
  }

  if (product.name == "") {
    alert("Product name is required!")
    return false
  } else if (product.name.length <= 2) {
    alert("Product name to short.")
    return false
  } else if (containsNumber(product.name)) {
    alert("Product name cannot contain numeric value.")
    return false
  }

  if (product.count == 0) {
    alert("Min product count is 1.")
    return false
  }

  return true
}


function containsNumber(str) {
  const regex = /\d/;
  return regex.test(str);
}


addProductButton.addEventListener('click', addProduct)
clearProductListButton.addEventListener('click', clearProductList)








