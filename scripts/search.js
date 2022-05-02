// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar()

let myFun=()=>{
let input= document.getElementById("search_input").value
let url=`https://masai-mock-api.herokuapp.com/news?q=${input}`
fetch(url)
.then(function(res){
    return res.json()
})
.then(function(res){
    console.log(res.articles)
})
.catch(function(err){
    console.log(err)
})


}






document.getElementById("search_input").addEventListener("input",myFun)