const viewCard = document.querySelector(".card");
const Buttons = document.querySelectorAll("button");
const closeBUtton = document.querySelector(".material-icons")
const HeaderName = document.querySelector("h1");
const username = document.querySelector(".username");
const address = document.querySelector(".address");
const street = document.querySelector(".street");
const suite = document.querySelector(".suite");
const city = document.querySelector(".city");
const zipcode = document.querySelector(".zipcode");
const lat = document.querySelector(".lat");
const lng = document.querySelector(".lng");
const email = document.querySelector(".email");
const phone = document.querySelector(".phone");
const website = document.querySelector(".website");
const companyName = document.querySelector(".companyName");
const catchPhrase = document.querySelector(".catchphrase");
const btnsList = document.querySelector(".buttons-list");
const bs = document.querySelector(".bs");
let j;




//Close Button
closeBUtton.addEventListener("click", () => {
    viewCard.style.display = "none";
})


//Creating Buttons
function createBtn() {
    for (let i = 0; i < 10; i++) {
        const buttons = document.createElement("button");
        buttons.setAttribute("data-id", i)
        btnsList.append(buttons)
        buttons.addEventListener("click", displayCard)
        buttons.innerHTML = "userDetails -" + " " + (i + 1);

    }
}
createBtn()

//Popup 
function displayCard() {
    let dataValue = this.getAttribute("data-id")
    j = dataValue;
    viewCard.style.display = "block";


    //API 
    async function userValue() {
        const apiLink = await fetch("https://jsonplaceholder.typicode.com/users")
        const jsObj = await apiLink.json()
        HeaderName.innerHTML = "ID : " + jsObj[j].id + " " + jsObj[j].name;
        username.innerHTML = jsObj[j].username;
        street.innerHTML = "<h4> Street : " + jsObj[j].address.street + "</h4>";
        suite.innerHTML = "<h4> Suite : " + jsObj[j].address.suite + "</h4>";
        city.innerHTML = "<h4> city : " + jsObj[j].address.city + "</h4>";
        zipcode.innerHTML = "<h4> zipcode : " + jsObj[j].address.zipcode + "</h4>";
        lat.innerHTML = "<h4> lat : " + jsObj[j].address.geo.lat + "</h4>";
        lng.innerHTML = "<h4> lng : " + jsObj[j].address.geo.lng + "</h4>";
        email.innerHTML = "<h4> Email : " + jsObj[j].email + "</h4>";
        phone.innerHTML = "<h4> Phone : " + jsObj[j].phone + "</h4>";
        website.innerHTML = "<h4> Website : " + jsObj[j].website + "</h4>";
        street.innerHTML = "<h4> Street : " + jsObj[j].address.street + "</h4>";
        companyName.innerHTML = "<h4> companyName : " + jsObj[j].company.name + "</h4>";
        catchPhrase.innerHTML = "<h4> catchphrase : " + jsObj[j].company.catchPhrase + "</h4>";
        bs.innerHTML = "<h4> bs : " + jsObj[j].company.bs + "</h4>";
        j = "";
    }
    userValue()
}