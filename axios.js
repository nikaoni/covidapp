const section1 = document.querySelector ("#country")
const location1=document.querySelector ("#loc")
const up1 = document.querySelector ("#up")
const con1 = document.querySelector ("#con")
const pop1 = document.querySelector ("#pop")
const dea1 = document.querySelector ("#dea")
const exp1 = document.querySelector ("#exp")
const inf1 = document.querySelector ("#inf")
const rate1 = document.querySelector ("#rate")

 //დავამატე ატრბუტი//
const globoption=document.createElement ("option")
globoption.setAttribute( "selected","selected")
globoption.innerText= "Global" 
section1.appendChild (globoption)


axios.get ("https://covid-api.mmediagroup.fr/v1/cases").then (response =>{
      console.log(response.data);
      let ddata = response.data;
  
      let confnumb=response.data.Global.All.confirmed 
      let popnumb=response.data.Global.All.population
      let deathnumb=response.data.Global.All.deaths 

      location1.innerText=response.data.Global.All.location
      con1.innerText=response.data.Global.All.confirmed
      pop1.innerText=response.data.Global.All.population
      dea1.innerText=response.data.Global.All.deaths
      inf1.innerText=Math.round (confnumb/popnumb*100 )
      rate1.innerText=Math.round (deathnumb/popnumb*100)
      
          
        
    const propertyValues = Object.keys(ddata);
    console.log(propertyValues);
  
      for (let i=0; i<propertyValues.length-1; i++){
        const option=document.createElement ("option")
        option.innerText=propertyValues[i] 
        section1.appendChild (option)
     }
  
     const button1 = document.querySelector(".spani") 
     const hidediv = document.querySelector (".hidediv")
     const button5 = document.querySelector (".buttonm")
 
     button5.addEventListener ("click", ()=> {
       hidediv.classList.toggle("hideklass")
 
      if (hidediv.classList.contains ("hideklass"))
        button5.innerText="view more"
      
      if (!hidediv.classList.contains ("hideklass")) {
          button5.innerText= "view less"
        }
  })   

       //select_value//
   section1.addEventListener ("change",update=()=>{
    console.log(section1.value)

       //აქ გავუწერე ცვლადები რო გამეგო პროცენტი//
     confnumb=response.data[section1.value].All.confirmed 
     popnumb=response.data[section1.value].All.population
       
       
    location1.innerText=response.data[section1.value].All.location
    up1.innerText=response.data[section1.value].All.updated
    con1.innerText=response.data[section1.value].All.confirmed
    pop1.innerText=response.data[section1.value].All.population
    dea1.innerText=response.data[section1.value].All.deaths
    exp1.innerText=response.data[section1.value].All.life_expectancy
    inf1.innerText=Math.round (confnumb/popnumb*100)
    rate1.innerText=Math.round (deathnumb/popnumb*100)
    

      // თუ რომელიმე ელემენტი არ//
    let nnn=response.data[section1.value].All
     if (nnn.hasOwnProperty ("location")) {
    location1.innerText=response.data[section1.value].All.location
     }
    if (nnn.hasOwnProperty ("updated")) {
      up1.innerText=response.data[section1.value].All.updated

     } 


    
   })

 })


