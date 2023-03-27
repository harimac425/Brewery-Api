var div = document.createElement("div");
div.style.textAlign = "center";
var div1 = document.createElement("div");

var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "brewery");
input.placeholder = "Type Of Drink U Prefer";

var button = document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("btn","btn-primary");
button.innerHTML = "Search";
button.style.marginLeft = "5px";
button.addEventListener("click", foo);

var container = document.createElement("div");
container.setAttribute("id","cont");

div.append(input, button, container);
document.body.append(div);

async function foo() {
  try {
    var res = document.getElementById("brewery").value;
    console.log(res);
    if (res === "") throw new Error("Invalid Brewery Type");
    var url = `https://api.openbrewerydb.org/v1/breweries?by_type=${res}`; // brewery is found by brewery type.
    var res1 = await fetch(url);
    var res2 = await res1.json();
    console.log(res2);
    container.innerHTML = "";
    for (var i = 0; i < res2.length; i++) {
      var breweryDiv = document.createElement("div");
      breweryDiv.innerHTML = `
        <h2>Brewery Name: ${res2[i].name}</h2>
        <p>Brewery Type: ${res2[i].brewery_type}</p>
        <p>Address: ${res2[i].address_1}</p>
        <p>Website: ${res2[i].website_url}</p>
        <p>Phone: ${res2[i].phone}</p>
      `;
      container.appendChild(breweryDiv);
    }
  } catch (error) {
    console.log(error);
  }
}
