let money = +prompt("Ваш бюджет на месяц?", " " ),
    time = +prompt("Введите дату в формате YYYY-MM-DD", " ")

const appData = {
  moneyData: money,
  timeData: time,
  expenses:{},
  optionalExpenses:{},
  income:[],
  savings: false
}

for( let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", " "),
        b = prompt("Во сколько обойдется?");

        if( (typeof(a) ) ==='string' && (typeof(a)) != null && (typeof(b)) != null &&
        a != "" && b != ""  && a.length < 50) {
            console.log("DONE")
            appData.expenses[a] = b; 
        }

}

appDataPerday = appData.moneyData / 30

alert("Ежедневный бюджет: " + appDataPerday)

if(appDataPerday < 100) {
    console.log("Минимальный уровень достатка")

} else if (appDataPerday > 100 && appDataPerday < 2000) {
    console.log("Средний уровень достатка")

}else if (appDataPerday > 2000) {
    console.log("Высокий уровень достатка")

}else {
    console.log("Произошла ошибка")
}

