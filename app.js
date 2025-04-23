function clicking() {
    const monthMap = {
        January: "01",
        February: "02",
        March: "03",
        April: "04",
        May: "05",
        June: "06",
        July: "07",
        August: "08",
        September: "09",
        October: "10",
        November: "11",
        December: "12"
    };
    const day = parseInt(document.getElementById("day").value);
    let month = parseInt(monthMap[document.getElementById("month").value]);
    const year = parseInt(document.getElementById("year").value);
    
    const today = new Date();

    const todayday = today.getDate();
    const todaymonth = today.getMonth() + 1;
    const todayyear = today.getFullYear();

    let ageyear;
    let agemonth;
    let agedate;

    if (todaymonth < month) {
        ageyear = todayyear - year - 1;
    } else if (todaymonth == month ) {
        if (todayday < day) {
            ageyear = todayyear - year - 1;
        }
        else {
            ageyear = todayyear - year;
        }
    } else {
        ageyear = todayyear - year;
    }
    console.log("You are "+ageyear+" years old");
    document.getElementById("output").textContent = "You are "+ageyear+" years old";

}

