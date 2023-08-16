const subhanAllahCount = document.getElementById('subhanAllahCount');
const subhanAllahIncrement = document.getElementById('subhanAllahIncrement');
const subhanAllahDecrement = document.getElementById('subhanAllahDecrement');

const alhamdullilahCount = document.getElementById('alhamdullilahCount');
const alhamdulilahIncrement = document.getElementById('alhamdulilahIncrement');
const alhamdulilahDecrement = document.getElementById('alhamdulilahDecrement');

const allahHuAkbarCount = document.getElementById('allahHuAkbarCount');
const allahhuAkbarIncrement = document.getElementById('allahhuAkbarIncrement');
const allahhuAkbarDecrement = document.getElementById('allahhuAkbarDecrement');

const resetBtn = document.getElementById('reset-btn');

let initialValuofSubhanAllah = 0;
let initialValuofAlhamdulillah = 0;
let initialValuofAllahhuakbar = 0;

subhanAllahIncrement.addEventListener('click', function(){
   if(initialValuofSubhanAllah === 33){
     return alert('You are completed SubhanAllah. Try another One');
   }
    initialValuofSubhanAllah += 1;
    subhanAllahCount.innerText =initialValuofSubhanAllah;
});
subhanAllahDecrement.addEventListener('click', function(){
    if(initialValuofSubhanAllah === 0){
        return alert('You can not add negative number');
       }
    initialValuofSubhanAllah -= 1;
    subhanAllahCount.innerText =initialValuofSubhanAllah;
});

alhamdulilahIncrement.addEventListener('click', function(){
    if(initialValuofAlhamdulillah === 33){
      return alert('You are completed Alhamdulillah. Try another One');
    }
     initialValuofAlhamdulillah += 1;
     alhamdullilahCount.innerText =initialValuofAlhamdulillah;
 });
 alhamdulilahDecrement.addEventListener('click', function(){
     if(initialValuofAlhamdulillah === 0){
         return alert('You can not add negative number');
        }
     initialValuofAlhamdulillah -= 1;
     alhamdullilahCount.innerText =initialValuofSubhanAllah;
 });

 allahhuAkbarIncrement.addEventListener('click', function(){
    if(allahHuAkbarCount ===33){
        return alert('You are completed Allah hu Akbar. Try onother one');
    }
    initialValuofAllahhuakbar +=1;
    allahHuAkbarCount.innerText = initialValuofAllahhuakbar;
 });
 allahhuAkbarDecrement.addEventListener('click', function(){
    if(initialValuofAllahhuakbar === 0){
        return alert ( 'You can not add negative number');
    }
    initialValuofAllahhuakbar -=1;
    allahHuAkbarCount.innerText = initialValuofAllahhuakbar;
 });

 resetBtn.addEventListener('click', function(){
    subhanAllahCount.innerText = 0;
    alhamdullilahCount.innerText = 0;
    allahHuAkbarCount.innerText = 0;
    initialValuofSubhanAllah = 0;
    initialValuofAlhamdulillah = 0;
    initialValuofAllahhuakbar = 0;

 });