/*
Есть биржа, на которой продается и покупается зерно.Цена покупки и продажи одинакова.

    пример: [13, 6, 3, 4, 10, 2, 3]

это исторические данные
предположим что в прошлый понедельник цена на покупку и продажу зерна была 13
на следующий день она стала 6, потом 3
Нужно найти индексы дня покупки и последующей продажи для получения максимальной выгоды.Вернуть массив из 2х элументов - индекс дня покупки и индекс дня продажи.Если выигрышных вариантов нет - вернуть пустой массив.
В данном случае нам было бы выгодно купить за 3 и продать в последствии за 10 - с выгодой в 7

profit([13, 6, 3, 4, 10, 2, 3])
#[2, 4] >> купили за 3(индекс 2) и продали за 10(индекс 4)

profit([13, 6, 3, 1])
#[] >> нет выигрышных вариантов 

*Решение:
    1.  Создать две переменные:
        В первой будет храниться выгода от продажи (По умолчанию - 0)
        Во второй будет храниться массив с индексами.

    2.  Поступающий массив перебрать
        На каждой итерации сравнивать разницу цены продажи и покупки (текущей итерации) с ранее объявленной
        переменной.
        Если получаемая сумма больше переприсвоить значение в переменной.
        
    3. В массив с индексами записать индексы дня покупки и дня продажи

    4. Если по окончанию перебора выгода отрицательная, вернуть пустой массив.

*/

const price = [13, 6, 3, 4, 10, 2, 3];
const price2 = [13, 6, 3, 1];
const price3 = [12, 8, 14, 9, 10]

function findIndex(arr) {
    let profit = 0;
    let indexes = [];

    arr.forEach((number, index, array) => array.forEach((secondNumber, secondIndex) => {
        if (secondIndex <= index) {
            return
        }

        if (profit < (secondNumber - number)) {
            profit = secondNumber - number
            indexes[0] = index
            indexes[1] = secondIndex
        }
    }))

    if (profit <= 0) {
        return [];
    }

    return indexes;
}

console.log(findIndex(price))
console.log(findIndex(price2))
console.log(findIndex(price3))