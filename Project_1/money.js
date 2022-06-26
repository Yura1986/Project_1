




let money, time;


function start() {
    
        money = +prompt("Ваш бюджет на месяц?", " " );
        
        time = +prompt("Введите дату в формате YYYY-MM-DD", " ")
    
    while(isNaN(money) || money === "" || money === null){
          
           money = +prompt("Ваш бюджет на месяц?", " " )
}

}
start();



const appData = {
  moneyData: money,
  timeData: time,
  expenses:{},
  optionalExpenses:{},
  income:[],
  savings:true
}

function chooseExpensev() {

 for( let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", " "),
        b = prompt("Во сколько обойдется?");

        if ( (typeof(a) ) ==='string' && (typeof(a)) != null && (typeof(b)) != null &&
        a != "" && b != ""  && a.length < 50) {
            console.log("DONE")
            appData.expenses[a] = b; 
        } else{
            i--
        }

}
}


chooseExpensev();


function detectDayBudget() {
   
    appDataPerday = (appData.moneyData / 30).toFixed();

     alert("Ежедневный бюджет: " + appDataPerday)
    }



function detectLevel() {
if(appDataPerday < 100) {
    console.log("Минимальный уровень достатка")

} else if (appDataPerday > 100 && appDataPerday < 2000) {
    console.log("Средний уровень достатка")

}else if (appDataPerday > 2000) {
    console.log("Высокий уровень достатка")

}else {
    console.log("Произошла ошибка")
}
}





function checkSavings(){
    if(appData.savings === true){

        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");


            appData.monthIncome = save/100/12*percent;

            alert("Доход за месяц с вашего депозита:" + appData.monthIncome )
    
    
    }



}
checkSavings();



function chooseOptExpenses() {
    for(i = 0; i < 3; i++){
        let ask = prompt("Статья необязательных расходов?", " ")

        if((typeof(ask))==="string" && ask !=null && ask !=""
           && ask.length < 50){
            
            appData.optionalExpenses[i] = ask

           }else{
            i--
           }            
    }


}