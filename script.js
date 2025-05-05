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

function CalculateAge(date,month,year)
{ 
    let d = new Date()
    //if days = 43, the program should  [month++, days=11]
    for (date-=d.getDate(); date > 31; month++) {
        date-=31;
    }
    for (date-=d.getDate; date < 1; month--) {
        date+=31
    }
    //if months = 24, the program should get [year++, months=11]
    for (month-=d.getMonth(); month > 12; year++) {
        month-=12;
    }
    for (month-=d.getMonth(); month < 1; year--) {
        date+=12
    }
}


button.addEventListener("click",() => {
    output.at(2).textContent = input.at(0).valueAsNumber
    output.at(1).textContent = input.at(1).valueAsNumber
    output.at(0).textContent = input.at(2).valueAsNumber
    CalculateAge(output.at(0).valueAsNumber,output.at(1).valueAsNumber,output.at(2).valueAsNumber)
})
