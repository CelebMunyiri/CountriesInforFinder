'use strict';
//Async js are used to make ajax calls to API's
/*
const p=document.querySelector(".p");
p.textContent='My name is Dawud';
alert('Text set');
p.style.color='red';
//Synchronous code is executed line by line
setTimeout(function(){
    p.textContent='My name is Dawud!';

},5000)
p.style.color='red';
//asynchrnous is when actions do not occur at the same time 
//Ajax=> asynchronous js and XML
//API=> Application Programming Interface*/
//Making first ajax and API call
const btn=document.querySelector('.btn-country');
const countriesContainer=document.querySelector('.countries');

const getCountryData=function(country){
const request=new XMLHttpRequest();
request.open('GET',`https://restcountries.com/v2/name/${country}`)
request.send();

request.addEventListener('load',function(){
    console.log(this.responseText)
    const [data]=JSON.parse(this.responseText);
    console.log(data);

    const html=`
    <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>`;

        countriesContainer.insertAdjacentHTML('beforeend',html)
        countriesContainer.style.opacity=1;
})
};
const info=prompt('Enter a country name to see its data')
getCountryData(info)
//getCountryData('usa')
//getCountryData('kenya')
