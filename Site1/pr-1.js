const quotes = [
    {
        quote: "hello",
     person: "world"
    },
    {
        quote:"The way to get started is to quit talking and begin doing.",
        person:" -Walt Disney"
    },
    {
        quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        person:"-Steve Jobs"
    },
    {
        quote:"Life is what happens when you're busy making other plans.",
        person:"John Lennon"
    },
    {
        quote:"Aag lagi basti mei,hum apni hi masti mai.",
        person:"Soubhik Gon"
    }];

// console.log(random);

let quoteDisplay=document.querySelector('h3');
let quotePerson=document.querySelector('span');
let btn =document.querySelector('.btn-quote');
btn.addEventListener('click',function(){
    
    if(btn.classList.contains('btn-pressed')){
        btn.classList.remove('btn-pressed');
    }
    else{
        btn.classList.add('btn-pressed');
        for(var i=1;i<10000;i++){
            var j=i*i
        }
        btn.classList.remove('btn-pressed');
    }

let random =Math.floor(Math.random()*quotes.length);
    quoteDisplay.innerText=quotes[random].quote;
    quotePerson.innerText=quotes[random].person;
});