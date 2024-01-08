const productList = document.querySelectorAll('.product')
const priceList = document.querySelectorAll('.item-price')
const shopBtnList = document.querySelectorAll('.shop-btn')


productList.forEach(product => {
    product.addEventListener('click', () => {
        let index = product.id
        shopBtnList[index].style.display = 'block' 
        priceList[index].style.display = 'none'
    })
})

productList.forEach(product => {
    product.addEventListener('click', () => {
        let index = product.id
        shopBtnList[index].style.display = 'none' 
        priceList[index].style.display = 'block'
    })
})

