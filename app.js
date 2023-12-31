'use strict';
const btn=document.querySelector('.btn-country');
const countriesContainer=document.querySelector('.countries');

const renderCountry=function(data,className=''){

  const html=`
      <article class="country ${className}">
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
          //countriesContainer.style.opacity=1;
}

const renderError=function(msg){
  countriesContainer.insertAdjacentText('beforeend',msg);
 // countriesContainer.style.opacity=1

 }
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
//API=> Application Programming Interface
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

const renderCountry=function(data,className=''){

  const html=`
      <article class="country ${className}">
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
}

const getCountryAndNeighbor =function(country){
  //Ajax call country 1
  const request=new XMLHttpRequest();
  request.open('GET',`https://restcountries.com/v2/name/${country}`)
  request.send();
  
  request.addEventListener('load',function(){
      console.log(this.responseText)
      const [data]=JSON.parse(this.responseText);
      console.log(data);
  
//render country 1
      renderCountry(data);

      //Get neighbour country
      const [neighbour]=data.borders;
      
      if(!neighbour) return;

      //AJAX call country 2
      const request2=new XMLHttpRequest();
  request2.open('GET',`https://restcountries.com/v2/alpha/${neighbour}`)
  request2.send();
  request2.addEventListener('load',function(){
    //console.log(this.responseText);
    const data2=JSON.parse(this.responseText)
    //console.log(data2)
    renderCountry(data2,'neighbour')
  })
  }) 
}

//Callback hell
getCountryAndNeighbor('somalia');
setTimeout(()=>{
  console.log('1 second passed')
  setTimeout(()=>{
    console.log('2 second passed')
    setTimeout(()=>{
      console.log('3 second passed')
      setTimeout(()=>{
        console.log('4 second passed')
      },1000)
    },1000)
  },1000)
},1000)
//Callback makes code hard to understand and reason

//PROMISES=>an object used as a placeholder for the future result of an asynchronous operation
// A promise can either be pending , fulfilled or rejected.


 const request=fetch(`https://restcountries.com/v2/name/portugal`);
 console.log(request)

 const getCountryData=function(country){
  
fetch(`https://restcountries.com/v2/name/${country}`).then((response)=>response.json()
  ).then((data)=>renderCountry(data[0]))

 }
 getCountryData('portugal');*/
//https://restcountries.com/v2/name/${country}
//https://restcountries.com/v2/alpha/${neighbour}

 //CREATING A HELPER FUNCTION BELOW

 const getJSON=(url,errorMsg=`Something went wrong`)=>{
  return fetch(url).then(response=>{
    if(!response.ok) throw new Error(`${errorMsg},  (${response.status})`)
   return response.json()
  })

 } 

 /*
 const getCountryData=function(country){
  
  //Country 1
  fetch(`https://restcountries.com/v2/name/${country}`)
  .then(response=>{
    console.log(response)
 
    if(!response.ok)
    throw new Error(`Country not found (${response.status})`)
    return response.json()

  })
    .then(data=> {
    renderCountry(data[0])
    //const neighbour=data[0].borders[0]
    const neighbour='fgfgfg'
    if(!neighbour) return;

    //Country 2
    return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
 })
 .then(response=>{
  if(!response.ok)
  throw new Error(`Neighbour not found(${response.status})`)
  
  response.json()})
 .then(data=>renderCountry(data,'neighbour'))
 .catch(err=>{
  console.log(`${err} wtffff`)
  renderError(`Something went wrong , ${err.message}  Try again`)

})
//USING FINALLY METHOD
.finally(()=>{
  countriesContainer.style.opacity=1;
})
  
   };*/
   const getCountryData=(country)=>{
//Country 1
getJSON(`https://restcountries.com/v2/name/${country}`,'Country not found')
.then(data=>{
renderCountry(data[0])
const neighbour=data[0].borders[0]
if(!neighbour) throw new Error(`No Neighbour Found`);


//Country 2
return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`,` Neighbour Country not Found`)
})
.then(data=>renderCountry(data,'neighbour'))
.catch(err=>{
  console.log(`${err} here`)
  renderError(`Something Went Wrong ${err.message} , Try again`)
})
.finally(()=>{
countriesContainer.style.opacity=1
   })
}
  

//getCountryData('kenya')

//HANDLING REJECTED PROMISES
btn.addEventListener('click',function(){
  getCountryData('australia')
})
//THROWING ERRORS MANUALLY
//Throwing errors is a good practise