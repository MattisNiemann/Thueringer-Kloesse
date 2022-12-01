var clicks = 0
var person_number = 1
var salt_number = 0.5
var person_number = document.getElementById("personcount")
var salt_number =document.getElementById("salt")
function fritzcounter(){
    clicks = clicks +1
    fritzcount.innerHTML = clicks
  } 

  function personcounter_plus(){
    person_number =person_number +1
    personcount.innerHTML= person_number
    var salt_number = 0.125
    salt_number = salt_number*person_number
    salt.innerHTML= salt_number


  }
  function personcounter_minus(){
    person_number =person_number -1
    personcount.innerHTML=person_number
    var salt_number = 0.125
    salt_number = salt_number* person_number
    salt.innerHTML= salt_number
  }
