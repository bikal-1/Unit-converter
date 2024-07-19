let input1 = document.querySelector('#input1');
let input2= document.querySelector('#input2');
let output1 = document.querySelector('#output1');
let output2 = document.querySelector('#output2');
let btn1 = document.querySelector('#submitKtm');
let btn2 = document.querySelector('#submitMtk');
let options = document.querySelector('#optionValue');
let class2 = document.querySelector('#class-2');
let class1 = document.querySelector('#class-1');
let body = document.querySelector(".container");



function getResultKtm(){
    output1.value = input1.value * 16.666666666666666667;
    output1.value =`${output1.value} m/s`;
  };

function getResultMtk(){
  output2.value = input2.value * 0.06;
  output2.value = `${output2.value} km/hr`;
};


 options.addEventListener('click', ()=>{
   if(options.innerText === 'm/s to km/hr'){
    class2.style.visibility = 'visible';
    body.style ="background: linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);"
    options.innerText= 'km/hr to m/s';
    class1.style.visibility = 'hidden';
    options.style = "background: rgb(63,94,251);";
    input1.value = '';
    output1.value = '';
    
   }else{
     class1.style.visibility = 'visible';
     body.style ="background-color: rgb(4, 204, 14);";
     options.innerText = 'm/s to km/hr';
     class2.style.visibility = 'hidden';
     options.style ="background-color: rgb(255, 100, 53);";
     input2.value = '';
     output2.value = '';
   }
 });

 btn1.addEventListener('click', getResultKtm);
 btn2.addEventListener('click', getResultMtk);