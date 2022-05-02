// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";


document.getElementById("navbar").innerHTML=navbar()


var myFun=async()=>{

try{
var res=await fetch("https://masai-mock-api.herokuapp.com/news/top-headlines?country=in")
var data= await res.json()
append(data.articles)

console.log(data.articles)

}


catch{
console.log(err)
}


}


var append=(data)=>{
var container=document.getElementById("results")

data.map(function(elem){

var p3=document.createElement("div")

var image=document.createElement("img")
image.src=elem.urlToImage
image.setAttribute("class","image")
var p=document.createElement("p")
p.innerText=elem.title
var p1=document.createElement("p")
p1.innerText=elem.description
p3.append(image,p,p1)
container.append(p3)

})


}






document.getElementById("in").addEventListener("click",myFun)



var myFun1=async()=>{

    try{
    var res=await fetch("https://masai-mock-api.herokuapp.com/news/top-headlines?country=us")
    var data= await res.json()
    append(data.articles)
    
    console.log(data.articles)
    
    }
    
    
    catch{
    console.log(err)
    }
    
    
    }
    
    
    var append=(data)=>{
    var container=document.getElementById("results")
    container.innerHTML=""
    
    data.map(function(elem){
    
    var p3=document.createElement("div")
    
    var image=document.createElement("img")
    image.src=elem.urlToImage
    image.setAttribute("class","image")
    var p=document.createElement("p")
    p.innerText=elem.title
    var p1=document.createElement("p")
    p1.innerText=elem.description
    p3.append(image,p,p1)
    container.append(p3)
    
    })
    
    
    }
    
    
    
    
    
    
    document.getElementById("us").addEventListener("click",myFun1)
    
    
    
var myFun2=async()=>{

    try{
    var res=await fetch("https://masai-mock-api.herokuapp.com/news/top-headlines?country=ch")
    var data= await res.json()
    append(data.articles)
    
    console.log(data.articles)
    
    }
    
    
    catch{
    console.log(err)
    }
    
    
    }
    
    
    var append=(data)=>{
    var container=document.getElementById("results")
    container.innerHTML=""
    
    data.map(function(elem){
    
    var p3=document.createElement("div")
    
    var image=document.createElement("img")
    image.src=elem.urlToImage
    image.setAttribute("class","image")
    var p=document.createElement("p")
    p.innerText=elem.title
    var p1=document.createElement("p")
    p1.innerText=elem.description
    p3.append(image,p,p1)
    container.append(p3)
    
    })
    
    
    }
    
    
    
    
    
    
    document.getElementById("ch").addEventListener("click",myFun2)
    
       
var myFun2=async()=>{

    try{
    var res=await fetch("https://masai-mock-api.herokuapp.com/news/top-headlines?country=ch")
    var data= await res.json()
    append(data.articles)
    
    console.log(data.articles)
    
    }
    
    
    catch{
    console.log(err)
    }
    
    
    }
    
    
    var append=(data)=>{
    var container=document.getElementById("results")
    container.innerHTML=""
    
    data.map(function(elem){
    
    var p3=document.createElement("div")
    
    var image=document.createElement("img")
    image.src=elem.urlToImage
    image.setAttribute("class","image")
    var p=document.createElement("p")
    p.innerText=elem.title
    var p1=document.createElement("p")
    p1.innerText=elem.description
    p3.append(image,p,p1)
    container.append(p3)
    
    })
    
    
    }
    
    
    
    
    
    
    document.getElementById("ch").addEventListener("click",myFun2)
    
    
    
           
var myFun2=async()=>{

    try{
    var res=await fetch("https://masai-mock-api.herokuapp.com/news/top-headlines?country=ch")
    var data= await res.json()
    append(data.articles)
    
    console.log(data.articles)
    
    }
    
    
    catch{
    console.log(err)
    }
    
    
    }
    
    
    var append=(data)=>{
    var container=document.getElementById("results")
    container.innerHTML=""
    
    data.map(function(elem){
    
    var p3=document.createElement("div")
    
    var image=document.createElement("img")
    image.src=elem.urlToImage
    image.setAttribute("class","image")
    var p=document.createElement("p")
    p.innerText=elem.title
    var p1=document.createElement("p")
    p1.innerText=elem.description
    p3.append(image,p,p1)
    container.append(p3)
    
    })
    
    
    }
    
    
    
    
    
    
    document.getElementById("ch").addEventListener("click",myFun2)
    
           
var myFun2=async()=>{

    try{
    var res=await fetch("https://masai-mock-api.herokuapp.com/news/top-headlines?country=ch")
    var data= await res.json()
    append(data.articles)
    
    console.log(data.articles)
    
    }
    
    
    catch{
    console.log(err)
    }
    
    
    }
    
    
    var append=(data)=>{
    var container=document.getElementById("results")
    container.innerHTML=""
    
    data.map(function(elem){
    
    var p3=document.createElement("div")
    
    var image=document.createElement("img")
    image.src=elem.urlToImage
    image.setAttribute("class","image")
    var p=document.createElement("p")
    p.innerText=elem.title
    var p1=document.createElement("p")
    p1.innerText=elem.description
    p3.append(image,p,p1)
    container.append(p3)
    
    })
    
    
    }
    
    
    
    
    
    
    document.getElementById("ch").addEventListener("click",myFun2)
    
    
              
var myFun3=async()=>{

    try{
    var res=await fetch("https://masai-mock-api.herokuapp.com/news/top-headlines?country=uk")
    var data= await res.json()
    append(data.articles)
    
    console.log(data.articles)
    
    }
    
    
    catch{
    console.log(err)
    }
    
    
    }
    
    
    var append=(data)=>{
    var container=document.getElementById("results")
    container.innerHTML=""
    
    data.map(function(elem){
    
    var p3=document.createElement("div")
    
    var image=document.createElement("img")
    image.src=elem.urlToImage
    image.setAttribute("class","image")
    var p=document.createElement("p")
    p.innerText=elem.title
    var p1=document.createElement("p")
    p1.innerText=elem.description
    p3.append(image,p,p1)
    container.append(p3)
    
    })
    
    
    }
    
    
    
    
    
    
    document.getElementById("uk").addEventListener("click",myFun3)
    
              
var myFun3=async()=>{

    try{
    var res=await fetch("https://masai-mock-api.herokuapp.com/news/top-headlines?country=nz")
    var data= await res.json()
    append(data.articles)
    
    console.log(data.articles)
    
    }
    
    
    catch{
    console.log(err)
    }
    
    
    }
    
    
    var append=(data)=>{
    var container=document.getElementById("results")
    container.innerHTML=""
    
    data.map(function(elem){
    
    var p3=document.createElement("div")
    
    var image=document.createElement("img")
    image.src=elem.urlToImage
    image.setAttribute("class","image")
    var p=document.createElement("p")
    p.innerText=elem.title
    var p1=document.createElement("p")
    p1.innerText=elem.description
    p3.append(image,p,p1)
    container.append(p3)
    
    })
    
    
    }
    
    
    
    
    
    
    document.getElementById("nz").addEventListener("click",myFun3)
    