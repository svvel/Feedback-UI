const rating = document.querySelectorAll(".e")
const btn = document.querySelector(".btn")
const contain = document.querySelector(".container")
let feed = ""

rating.forEach((element)=> element.addEventListener("click", (e)=> { remove(e);active(e)}))
function active(e){
    feed = e.target.innerText||e.target.parentNode.innerText;
    console.log(feed)
    e.target.parentNode.classList.add("activ")
    document.querySelector(".emoji").classList.remove("activ")

}

function remove(e){
    document.querySelector(".emoji").classList.remove("activ")
    rating.forEach((element)=> element.classList.remove("activ"))

}

btn.addEventListener("click",show)

function show(){
    if(feed !== ""){
        contain.innerHTML = `<h1>Feed back: ${feed}</h1>
        <h2>Thank you for your feed back!</h2> `
    }
    
}


