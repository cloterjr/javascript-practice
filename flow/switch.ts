const age:number = 60;
const money = 1001;

function podeEntrarNaBalada(age: number, money: number){
    if(age >= 18 && age <= 60 || money > 1000){
        console.log('You can enter in the club');
    } else if(money < 1000){
        console.log('You are poor');
    }
}

switch (age) {
    case 18:
        podeEntrarNaBalada(age, money);
        break;
    case 60:
        podeEntrarNaBalada(age, money);
        break;
    case 100:
        console.log('Voce pode entrar na balada');
        break;
    default:
        console.log('Nenhuma das anteriores');
        break;
}