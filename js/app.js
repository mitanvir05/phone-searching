const allPhones = () => {
    const searchValue = document.getElementById("search-box").value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    fetch(url)
        .then((response) => response.json())
        .then(data => showPhone(data.data));
}

const showPhone = (phones) => {
    for (const data of phones) {
        const parent = document.getElementById("phone-container");
        const div = document.createElement("div");
        div.innerHTML = `<div class="card border p-5 ">
                <div class="pro-pic p-2">
                    <img class="w-25" src="${data.image}" alt="">
                </div>
                <h4>Name : ${data.phone_name}</h4>
                <h3>Brand : ${data.brand}</h3>
                <div class="button">
                    <button onclick="details('${data.slug}')" class="btn btn-success">Details</button>
                </div>
            </div>`;
        parent.appendChild(div);
    }

}

const details = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
    .then((response) => response.json())
    .then (data => console.log(data));
}