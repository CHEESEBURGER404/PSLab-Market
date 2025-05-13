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
    
    //(05 8 2025) - (03 24 2008) = 01 23 17 

    let d = new Date()
    //step 1: get input
    ytd = input[2].valueAsNumber
    mtd = input[1].valueAsNumber
    dtd = input[0].valueAsNumber
    //calculate birthdate
    let yearsold = d.getFullYear() - ytd
    let monthsold = d.getMonth() + 1 - mtd 
    let daysold = d.getDate() - dtd
    for (daysold; daysold < 0; monthsold--) {
        daysold+=dtd/2
    }
    for (daysold; daysold > 30; monthsold--) {
        daysold+=dtd/2
    }
    for (monthsold; monthsold < 0; yearsold--) {
        monthsold+=mtd/2
    }
    
    //step 3: output the date
    output.at(0).textContent = yearsold
    output.at(1).textContent = monthsold
    output.at(2).textContent = daysold
}


button.addEventListener("click",() => {
    CalculateAge()
})
