var container = document.createElement("div");
container.className="container";

var row=document.createElement("div");
row.classList.add("row","mb-3");
container.append(row);

var res=fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json())
.then((data1)=>foo(data1))
.catch((data)=>console.log(data));

function foo(data1){
    console.log(data1);
    for(i=0;i<data1.length;i++){
        row.innerHTML+=`<div col--4>
        <div class="card text-white bg-secondary" style="max-width: 18rem;">
  <div class="card-header">${data1[i].name}</div>
  <div class="card-body">
  <img src="${data1[i].flag}" class="card-img-top" alt="country flags">
    <p class="card-text">Capital: ${data1[i].capital}</p>
    <p class="card-text">Region: ${data1[i].region}</p>
    <p class="card-text">Country Code: ${data1[i].alpha3Code}</p>
    <a href="#" class="btn btn-primary">Click for Weather</a>
  </div>
        </div>`
    }
    document.body.append(container);
}