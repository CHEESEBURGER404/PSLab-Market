
const button = document.querySelector("button");

const input = Array.from(document.getElementsByTagName("input")) //get info from these elements
//input[0] = <input class = year>
//input[1] = <input class = month>
//input[2] = <input class = day>
const output = Array.from(document.getElementsByTagName('span')) //return info to these elements
//output[0] = <span> days </span>
//output[1] = <span> months </span>
//output[2] = <span> years </span>

//rules
//output[2] = input[0]
//output[1] = input[1]
//output[0] = input[2]

function CalculateAge()
{ 
    //Client Age = Current(year/month/day) - Birthdate(year/month/day)
    let d = new Date()
    
    let year = input[2].valueAsNumber
    let month = input[1].valueAsNumber
    let day = input[0].valueAsNumber


    let yearsold = d.getFullYear() - year
    let monthsold = d.getMonth() - month
    let daysold = d.getDate() - day
    
    //If I enter March 24 2008, into May 6th 2025's calculator, I should get
    // 17 years / 2 months / |6-24| days (-1 month)
    if(daysold < 1){
        daysold+=input[0].valueAsNumber
    }

    document.getElementsByClassName('years')[0].textContent = yearsold
    document.getElementsByClassName('months')[0].textContent = monthsold
    document.getElementsByClassName('days')[0].textContent = daysold

}


button.addEventListener("click",() => {
    CalculateAge()
})
