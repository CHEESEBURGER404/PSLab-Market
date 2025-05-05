
```js
function CalculateAge(date,month,year)
{
    ageDate = d.getDate() - date
    ageMonth = d.getMonth() - month.valueAsNumber
    ageYear = d.getFullYear() - year.valueAsNumber

   return {ageDate,ageMonth,AgeYear}
}

button.addEventListener("click",() => {
        CalculateAge(input.at(2), input.at(1), input.at(0))
    })
```
The goal here is to get the input items to be the parameter "fullfillers" for the function.

```js (How to fix)
let someObject=new Date

function CalculateAge(date,month,year){
    ageDate = getDate() - date 
    //for every date > 31: date = 1 ; month++
    ageMonth = getMonth() - month
    //for every month > 12, month = 1 year++
    ageYear = getFullYear() - year
    
    // y=12m
    // m=28d; m=30d ;m=31d
}

