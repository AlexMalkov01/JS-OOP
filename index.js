
product.prototype.myMethod = function (product,quantity=0) {
    if (this.product === product) {
        this.product
        this.quantity += quantity
    } else {
        this.product = product
        this.quantity = quantity
    }
} 




product.prototype.myMethod2 = function (product1,quantity=0) {
    if (this.product === product1){
        this.product
        this.quantity -= quantity 
        if (this.quantity === 0) {
            product = null
        }
    }else {
        return "Такого продукта нет"
    }
}

const product1 = new product("Икра",5)

const product2 = new product("Рыба",2)

const product3 = new product("Овощи",10)

const product4 = new product("Мясо",50) 

product4.myMethod("Мясо",)
product4.myMethod2("Мясо",45)