import { isModuleNamespaceObject } from "util/types";

function podeEntrarNaBalada(age: number, money: number){
    if(age >= 18 && age <= 60 || money > 1000){
        console.log('You can enter in the club');
    } else if(money < 1000){
        console.log('You are poor');
    }
}

let age = 20;
let money = 700;
// na sintaxe do if a verificao deve sempre retornar um booleano true|false
// Guiche 1 (Vip) -- se o cara for rico(money > 1000) a idade nao importa - OK
podeEntrarNaBalada(age, money);

age = 62;
money = 1001;
podeEntrarNaBalada(age, money);


age = 15;
money = 700;
podeEntrarNaBalada(age, money);

age = 90;

// Guiche 2
if(age >= 18 && age <= 60){
    console.log('You can enter in the club');
} else {
    console.log('You cannot enter in the club. Because is not permitted for your age');
}

age = 59;

// Guiche 3
if(age >= 18 && age <= 60){
    console.log('You can enter in the club');
} else {
    console.log('You cannot enter in the club. Because is not permitted for your age');
}