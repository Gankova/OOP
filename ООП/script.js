/*Инкапсуляция*/
/*создание объекта */
const obj= {
    name: 'Vasya',
    age : 0,
    
    info : () => { /*функция ничиго не принимает выводит имя и */
    console.log(`$(this.name), $(this.age)`);
    }
} 
obj.age = 13;
obj.info();
console.log(obj);
console.log(obj['name']);
obj['info']();

obj["test"]="12"; /*до этой записи свойства test не было в obj */
obj.test = 56;/*после можно обращаться с точкой к test */

/*в JS  вместо наследования используется прототипирование */

//Object - является прототипов для всех объектов по умолчанию
console.log(obj.toString());
const obj2 = {
    id: 100,
    age : 18,
    info: () => {
        console.log('Hello')
    }
};
//obj2.__proto__ = obj; /*не правильно */
Object.setPrototypeOf(obj2, obj)//правильно
console.log(obj2);
console.log(obj2.name);
obj2.name = 'Petya';
console.log(obj2.name)/*вывод Petya */
console.log(obj.name)/*вывод Vasya */

function User (age) {
    this.age = age;
    this.info = () =>{
        console.log(this.age);
    }
}

const user = new User(12);
const user2 = new User(15);
console.log(user);
console.log(user2);

class Animal {
    color = 'red';
    age;
    
    constructor(age, color){
        this.age = age;
        this.color = color;
    }
     
    say () {
        console.log('???');
    }
}

const animal = new Animal(10, 'red');
console.log(animal);

class Dog extends Animal{
    name;

    constructor (name, age, color){
        super(age, color);/*вызывается конструктор родительского класса Animal */
        this.name =name;
    }
    #secret=21

    static PAW = 4;
    
    //вычисляемое свойсто (computed)

    ['test'+22]= 12//свойство test22

    say() {
        super.say;
        console.log('haw-haw');
    }

}
const dog = new Dog('Bobik',10, 'brown');
console.log(dog);
dog.say();
//console.log(dog.#secret); ошибка
console.log(dog.PAW);// undefine статическое свойство
console.log(Dog.PAW);// 4 статическое свойство, через класс


try{
    throw new Error('aaaaa')

}catch(e) {
    if (e instanceof Error){
        console.log('it`s Erorr')
    }
    if (e instanceof Animal){
        console.log('it`s Animal')
    }


    //console.log(e.message);

}finally{

}
const n = 12.56;
const b= true;
const s='hello';
const obj3 = {};

const fn = () => {};
function test() {};

console.log(typeof n); // number
console.log(typeof b);//boolean
console.log(typeof s);//String
console.log(typeof obj3); //object
console.log(typeof fn); //function
console.log(typeof test); //function
console.log(typeof Animal); //function

//функции генераторы - функции, которые могут возвращать промежуточные значения без завершения
function *gen(n) {
    n*=10;
    yield n;
    n--;
    yield n;

}
let it = gen(10);// становится объектом итератора
console.log(it.next());//{value : 100,done : false}
console.log(it.next())//{99, false}
console.log(it.next())//{undefined, false}

it =gen(10)
const d= it.next();
console.log(d.value);

