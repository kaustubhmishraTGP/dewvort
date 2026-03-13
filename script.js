const text="DewVortzz"

let i=0

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i)

i++

setTimeout(typing,120)

}

}

typing()



window.addEventListener("load",()=>{

document.querySelector(".loader").style.display="none"

})



const cursor=document.querySelector(".cursor")

document.addEventListener("mousemove",e=>{

cursor.style.left=e.clientX+"px"
cursor.style.top=e.clientY+"px"

})



function reveal(){

const reveals=document.querySelectorAll(".reveal")

reveals.forEach(el=>{

const windowHeight=window.innerHeight
const elementTop=el.getBoundingClientRect().top

if(elementTop < windowHeight - 100){

el.classList.add("active")

}

})

}

window.addEventListener("scroll",reveal)



particlesJS("particles-js",{

particles:{

number:{value:80},

color:{value:"#ff0000"},

shape:{type:"circle"},

opacity:{value:0.5},

size:{value:3},

line_linked:{
enable:true,
distance:150,
color:"#ff0000",
opacity:0.4,
width:1
},

move:{enable:true,speed:2}

}

})



const cmd=document.getElementById("cmd")
const output=document.getElementById("output")

cmd.addEventListener("keydown",function(e){

if(e.key==="Enter"){

let value=cmd.value

if(value==="help"){

output.innerHTML="commands: help, about, skills"

}

else if(value==="about"){

output.innerHTML="I am DewVortzz, cyber developer."

}

else if(value==="skills"){

output.innerHTML="Minecraft | Discord | Web Dev"

}

else{

output.innerHTML="unknown command"

}

cmd.value=""

}

})
