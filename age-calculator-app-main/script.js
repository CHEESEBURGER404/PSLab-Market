
function CalculateAge(years, months, days){
    //1. Get the user's input (get "years", "months", and "days")
    
    //2.Use math to calculate age (2025 - input)

    //3. Make new variables:
    const date = new Date()
    today = date.getFullYear()

    let userage = today - (years + (12/months) + (30/days) );
    return userage
}

const input = [document.querySelector("years"),document.querySelector("months"), document.querySelector("days"),];

document.querySelector(".button").addEventListener("click",()=>{
    CalculateAge(input[0], input[1], input[2])
})

