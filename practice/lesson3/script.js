// function sayHello(name) {
//     return `Hello ${name}`
// }

// let username = prompt('Как тебя зовут?')
// console.log(sayHello(username))

function nekrasov() {
    let x = confirm('Вам хорошо живется?');
    alert(x ? 'Тогда мы идем к вам!' : 'Ну вы держитесь там :(');
}


function getMax(arr) {
    return Math.max(...arr.filter((_, i) => i % 2 == 0))
}

array = [2, 4, 66, 5, 768, 3, 44, 5, -23];
console.log(getMax(array));
