const form = document.querySelector("form");

form.addEventListener('submit',(e)=>{
    e.preventDefault();

   const height =  parseInt(document.querySelector('#height').value);
   const weight =  parseInt(document.querySelector('#weight').value);
   const results = document.querySelector("#results")
   const bmiresult = document.querySelector("#bmi-results");

   let bmi = 0;


     if(height === ''||
      height<0  || 
      isNaN(height))
     {
        results.innerHTML = "Please give a valid height"
     } else if(weight === ''||
     weight<0  || 
     isNaN(weight)){
        results.innerHTML = "Please Give a valid weight"
     }else{
         bmi = (weight/((height*height)/10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`;
     }


     if(0<=bmi && bmi<=19){
        bmiresult.innerHTML = `Your bmi is ${bmi} and you are Under Weight`;
     }else if(19<=bmi && bmi<=25){
        bmiresult.innerHTML = `Your bmi is ${bmi} and you weight is Normal`;
     }
     else if(bmi>=25){
        bmiresult.innerHTML = `Your bmi is ${bmi} and you have to <br><span>loose weight and start dieting</span>`;
     }
}) 