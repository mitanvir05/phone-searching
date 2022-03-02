const allPhones = () => {
    document.getElementById("details-container").textContent = '';
    document.getElementById("phone-container").textContent = '';
    const searchValue = document.getElementById("search-box").value;
    const errorShow = document.getElementById("error-show");

    if (searchValue == '') {
        errorShow.innerText = ('Please Enter Brand Name');
    } else if (searchValue <= 0) {
        errorShow.innerText = ('Please Enter Brand Name');
    } else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
        fetch(url)
            .then((response) => response.json())
            .then(data => showPhone(data.data.slice(0, 20)));
        document.getElementById("search-box").value = '';
    }
};

// showing phone 
const showPhone = (phones) => {
    document.getElementById("error-show").textContent = '';
    const errorShow = document.getElementById("error-show");
    if (phones.length === 0) {
        errorShow.innerText = ('Sorry ! No Phone Found');
    } else {
        for (const data of phones) {
            const parent = document.getElementById("phone-container");
            const div = document.createElement("div");
            div.innerHTML = `<div class="card border p-5 ">
                <div class="pro-pic p-2">
                    <img class="w-25" src="${data.image}" alt="">
                </div>
                <h3>Name : ${data.phone_name}</h3>
                <h4>Brand : ${data.brand}</h4>
                <div class="button">
                    <button onclick="details('${data.slug}')" class="btn btn-success">Details</button>
                </div>
            </div>`;
            parent.appendChild(div);
        }
    }
};
// details section 
const details = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then((response) => response.json())
        .then(data => setDetails(data.data));

};

const setDetails = (info) => {
    document.getElementById("details-container").innerHTML = `
            <div class = "card border p-5">
                <div div class = "pro-pic p-2 text-center" >
                    <img class="w-25" src="${info.image}" alt="">
                </div>
                <h3 class="">Name : ${info.name}</h3>
                <h4>Brand : ${info.brand}</h4>
                <h4> ReleaseDate : ${info.releaseDate ? info.releaseDate : "Release Date Not Found !!!!!" }</h4>
                <h4 class="font-weight-bold text-primary text-center">MainFeatures</h4>
                <h4> Storage : ${info.mainFeatures.storage}</h4>
                <h4> DisplaySize : ${info.mainFeatures.displaySize}</h4> 
                <h4> Chipset : ${info.mainFeatures.chipSet}</h4>
                <h4> Memory : ${info.mainFeatures.memory}</h4>
                <h3 class="font-weight-bold text-primary text-center">Sensors</h3>
                <h4> Sensors : ${info.mainFeatures.sensors}</h4>
                <h4 class = "font-weight-bold text-primary text-center">Others Info </h4>
                <h4> WLAN : ${info?.others?.WLAN ? info?.others?.WLAN:"Info Not Found !" }</h4>
                <h4> Bluetooth : ${info?.others?.Bluetooth ? info?.others?.Bluetooth :"Info Not Found!"}</h4>
                <h4> GPS : ${info?.others?.GPS ? info?.others?.GPS : "Info Not Found !"}</h4>
                <h4> NFC : ${info?.others?.NFC ? info?.others?.NFC : "Info Not Found !"}</h4>
                <h4> Radio : ${info?.others?.Radio ? info?.others?.Radio : "Info Not Found !"}</h4>
                <h4> USB : ${info?.others?.USB ? info?.others?.USB : "Info Not Found !"}</h4>       
            <div/>`;
    window.scrollTo(0, 100);
};