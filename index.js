
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




// 1 задача

class user {

    constructor(login,password) {
        this.login = login
        this.password = +String(password).split("").reverse().join("")
    }

    replacement(passwordEnd,passwordNew){
        if (this.password === passwordEnd){
           this.password = passwordNew
        } else {
            this.password
        }
    }

    check(login,password){
        if (this.login === login && this.password === password){
            return "Операция успешна"
        } else {
            return "Не верный логин или пароль"
        }
    }

}

const user1 = new user("Alex1210",1234)
user1.replacement(4321,111111) 



console.log(user1.check("Alex1210",1111));


//// 2 задача

class bancAccaunt {

    constructor(owner){
        this.owner = owner
    }
    balance = 0
    
    balancePlus(sum){
        this.balance += sum
    }

    get userBalance () {
        return this.balance
    }
}

const Accaunt1 = new bancAccaunt("Alex")
Accaunt1.balancePlus(55)

console.log(Accaunt1); 


///// Сеть друзей 


class frendNetwork {
    #frends = []

    addFrands(frends){
        this.#frends.push(frends)
    }

    get frends () {
        return this.#frends
    }

    dilitFrands (frends) {
        this.#frends = this.#frends.reduce((acc,el,idx,arr)=>{
            if (el !== frends){
                acc.push(el)
                return acc
            } 
                return acc
        },[])
    }

    mutualFriends (user) {
        const res = user.frends.filter((el)=> this.#frends.includes(el))
        if (res.length > 0){
          return  user.frends.filter((el)=> this.#frends.includes(el))
        } else {
            return "У вас нет общих друзей"
        }
    } 
}

const frend = new frendNetwork()

frend.addFrands("Alex")
frend.addFrands("Danil")
frend.addFrands("Jon")
frend.addFrands("Ruslan")

const frend2 = new frendNetwork()

frend2.addFrands("Ale")
frend2.addFrands("Dani")
frend2.addFrands("Jon")


console.log(frend.mutualFriends(frend2));


////// Медицинская карта поциента 


class medicalRecord {

}


////// Электронный кошелек 


class electonicWallet {
    #balance = 0

    constructor(owner){
        this.owner = owner
    }

    get balance () {
        return this.#balance
    }

    set newBallance (balance){
        this.#balance = balance
    }

    addBalance (sum) {
        this.#balance += sum
    }

    minusBalance(sum) {
        
        if ((this.#balance - sum) < 0) {
            return "Недостаточно средств"
        } else {
            this.#balance -= sum
        }
    }
} 


const userCard = new electonicWallet("Alex")
userCard.addBalance(1000)
userCard.minusBalance(109)
userCard.minusBalance(1001)
console.log(userCard.balance); 



///// улучшенный электронный кошелек 



class SevingsAccaunt extends bancAccaunt {
    constructor (owner) {
        super(owner)
    }

    procentAdd (procent) {
        this.balance =  Math.trunc(this.balance * (1 + (procent / 100))) 
    }
}

const userBalance2 = new SevingsAccaunt ("Alex")

userBalance2.balancePlus(100_000)
userBalance2.procentAdd(50)

console.log(userBalance2); 



/////// управления заказами 


class Order {

    snake = [];

    summSnake = 0 
    

    addSnake (...args) {
        this.snake.push(...args)
        return this
    }

    sumSnake() { 
        const res = this.snake.reduce((acc,el,idx,arr)=>{
            acc += el.price
            return acc
             },0) 
             this.summSnake = res
        return this
        
    }

} 


const res1 = new Order 

res1.addSnake({
    product: "Огурец",
    price: 75
},
{
    product: "Лук",
    price: 50
},
{
    product: "Помидор",
    price: 150
}
)



console.log(res1.sumSnake()); 

class OnlineOrder extends Order {
    loadOrderStatus (status) {
        if (status === "Доставлен") {
            return "Доставлен"
        } else if (status === "Отправлен") {
            return "Отправлен"
        }
         else {
            return "Собирается"
        }
    }
} 

const OnlineOrderEdd = "Доставлен"
const OnlineOrderLaed = "Отправлен" 

const userOrder = new OnlineOrder

userOrder.addSnake({
    product: "Огурец",
    price: 75
},
{
    product: "Лук",
    price: 50
},
{
    product: "Помидор",
    price: 150
}
)

console.log(userOrder.loadOrderStatus(OnlineOrderEdd)); 


class InStoreOrder extends Order {

    balance = 200

    paySnake () {
        if ( this.balance >= this.summSnake) {
            return "Оплачено"
        } else {
            return "Недостаточный балланс"
        }
    } 
} 


const userOrder2 = new InStoreOrder 

userOrder2.addSnake({
    product: "Огурец",
    price: 75
},
{
    product: "Лук",
    price: 50
},
{
    product: "Помидор",
    price: 150
}
) 

console.log(userOrder2.sumSnake().paySnake ());