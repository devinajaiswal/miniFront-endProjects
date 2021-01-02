// DOM elements

const time=document.getElementById('time'),
      greeting= document.getElementById('greeting'),
      name= document.getElementById('name'),
      focus= document.getElementById('focus');


// Show time

function showTime(){
    let today=new Date(),
    hour=today.getHours(),
    min=today.getMinutes(),
    sec=today.getSeconds();

    //Set AM or PM
    const amPM= hour>=12? 'PM':'AM';

    //12hr Format
    hour = hour%12 || 12;

    //output time
    time.innerHTML=`${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
}


// Add Zeroes

function addZero(n){
    return(parseInt(n,10)<10 ? '0' : '') + n;
}



// Set Background and Greeting

function setBgGreet(){

    let today=new Date(),
    hour = today.getHours();

    if(hour<12){
        //Morning 
        document.body.style.backgroundImage = "url('../img/morning.jpeg')";
        greeting.textContent = "Good Morning";
    }
    else if(hour<18){
        //Afternoon
        
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
        greeting.textContent = "Good Afternoon";
    }
    else{
        //Evening
        document.body.style.backgroundImage = "url('../img/night.jpeg')";
        greeting.textContent = "Good Evening";
        document.body.style.color='white';
    }
}

//GET NAME
function getName(){
    if(localStorage.getItem('name')===null){
        name.textContent = '[Enter Name]';
    }
    else{
        name.textContent=localStorage.getItem('name');
    }
}

//GET Focus
function getFocus(){
    if(localStorage.getItem('focus')===null){
        focus.textContent = '[Enter Focus]';
    }
    else{
        focus.textContent=localStorage.getItem('focus');
    }
}
//Set Name
function setName(e){
  if(e.type==='keypress'){
    // MAke sure enter is pressed
    if(e.which == 13 || e.keyCode == 13){
        localStorage.setItem('name', e.target.innerText);
        name.blur();
    }
  }else{
      localStorage.setItem('name', e.target.innerText);
  }
}
//Set Focus
function setFocus(e){
    if(e.type==='keypress'){
      // MAke sure enter is pressed
      if(e.which == 13 || e.keyCode == 13){
          localStorage.setItem('focus', e.target.innerText);
          focus.blur();
      }
    }else{
        localStorage.setItem('focus', e.target.innerText);
    }
  }

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//Run

showTime();
setBgGreet();
getFocus();
getName();