const buyBtn = document.querySelector("#buy");
const filterBtn = document.querySelector("#filter");
const carList = document.querySelector("#car-list");

let myCars = [
    {name:"Volvo",color:"blue"},
    {name:"Saab", color:"red"}
];

const renderList = (arr) => {

    carList.innerHTML = "";
    
    arr.forEach(car => {
        let li = document.createElement("li");
        li.innerText = `${car.name} - ${car.color}`;
        carList.append(li);
    })
}

buyBtn.addEventListener("click", () => {
    //Dropdown-value
    const car = document.querySelector("select#cars").value;
    //Radio-button value
    let color = document.querySelector("[name=color]:checked").value;

    //Alternativt sätt
    //const allRadioBtns = document.querySelectorAll("[name=color]")
    // allRadioBtns.forEach((radio) => {
    //     if(radio.checked === true){
    //         console.log(radio.value);
    //         color = radio.value; 
    //     }
    // })

    let termsCheckbox = document.querySelector("#terms");
    if(termsCheckbox.checked){

        let newCar = {
            name: car,
            color:color,
        }
        myCars.push(newCar);
        //Uppdaterar DOM:en
        renderList(myCars);
    } else {
        alert("Please agree to terms and conditions")
    }
})

 //Filtrering
 filterBtn.addEventListener("click", () => {
    let filterName = document.querySelector("#filter-name").value;
    let filterColor = document.querySelector("#filter-color").value;
    console.log(filterColor)

    let filteredCars = myCars.filter((x) => x.name === filterName && x.color === filterColor);
    renderList(filteredCars);
 })


  renderList(myCars);