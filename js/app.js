const allPhones = () => {
    document.getElementById("phone-container").innerHTML = '';
    const searchValue = document.getElementById("search-box").value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    fetch(url)
        .then((response) => response.json())
        .then(data => showPhone(data.data));
    document.getElementById("search-box").value = '';
};

const showPhone = (phones) => {
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

};

const details = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then((response) => response.json())
        .then(data => setDetails(data.data));
};
const setDetails = (info) => {
    console.log(info);
    document.getElementById("details-container").innerHTML = `
            <div class="card border p-5 ">
                <div class="pro-pic p-2">
                    <img class="w-25" src="${info.image}" alt="">
                </div>
                <h3>Name : ${info.name}</h3>
                <h4>Brand : ${info.brand}</h4>
                <h4> Release : ${info.releaseDate}</h4>
                <h4> Chipset : ${info.mainFeatures.chipSet}</h4>
                <h4> Dislay : ${info.mainFeatures.displaySize}</h4>
                <h4> Sensor : ${info.mainFeatures.sensors}</h4>
                
            </div>`;
};