let array = [];

document.addEventListener("DOMContentLoaded", async () => {
  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const table = await response.json();
    array = table;

    return table;
  };

  await getData().then((data) => {
    //console.log(data)
    for (index of data) {
      const table = document.querySelector("#tbody");
      const TR = document.createElement("tr");
      const TD = document.createElement("td");
      const TD1 = document.createElement("td");
      const TD2 = document.createElement("td");
      TD.innerHTML = index["name"];
      TD1.innerHTML = index["username"];
      TD2.innerHTML = index["email"];
      TR.appendChild(TD);
      TR.appendChild(TD1);
      TR.appendChild(TD2);
      table.appendChild(TR);

      //console.log(index)

      /*Object.keys(index).forEach(function(key, y){
                console.log(key, y)
            })*/
    }
  });
});
function search() {
  const table = document.querySelector("#tbody");
  table.innerHTML = "";
  const INPUT = document.querySelector(".form-control").value.toLowerCase();
  const OPTION = document.querySelector("select").value.toLowerCase();
  for (index of array) {
    const NAME = index["name"].toLowerCase();
    const USERNAME = index["username"].toLowerCase();
    const EMAIL = index["email"].toLowerCase();
    let ricerca = "";
    if (OPTION === "name") {
      ricerca = NAME;
    } else if (OPTION === "username") {
      ricerca = USERNAME;
    } else if (OPTION === "email") {
      ricerca = EMAIL;
    }
    if (ricerca.includes(INPUT)) {
      const TR = document.createElement("tr");
      const TD = document.createElement("td");
      const TD1 = document.createElement("td");
      const TD2 = document.createElement("td");
      TD.innerHTML = index["name"];
      TD1.innerHTML = index["username"];
      TD2.innerHTML = index["email"];
      TR.appendChild(TD);
      TR.appendChild(TD1);
      TR.appendChild(TD2);
      table.appendChild(TR);
    }
  }
  //console.log(array)
}

/*window.onload = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const table = await response.json()

        console.log(table);
    }*/
