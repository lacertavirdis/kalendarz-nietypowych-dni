const url = "https://pniedzwiedzinski.github.io/kalendarz-swiat-nietypowych/all.json";
let wynik = document.getElementById("wynik");
let btn = document.getElementById("btn");

btn.addEventListener("click", async function(){
    let dzien = Number(document.querySelector("input:first-of-type").value);
    let miesiac = Number(document.querySelector("input:last-of-type").value);

    fetch(`${url}`)
    .then((response) => response.json())
    .then((data)=>{
        for (const obj of data) {
            if (miesiac == obj.month && dzien == obj.day) {
              wynik.innerText = obj.name
            }
          }
            })

    ////
    wynik.removeAttribute("display");
    wynik.style.display = "flex";
})