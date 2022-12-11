
var person =4
var potato =300*person
var salt = 0.125*person
var milk = 0.25*person
var nutmeg = 0.25*person
var butter = 12.5*person
var bread = 0.5*person
  function personcounter_plus(){
    person++
document.getElementById("person").innerHTML = person
potato = person*300
document.getElementById("potato").innerHTML = potato
salt = person*0.125
document.getElementById("salt").innerHTML = salt
milk = person*0.25
document.getElementById("milk").innerHTML = milk
nutmeg = person*0.25
document.getElementById("nutmeg").innerHTML = nutmeg
butter = person*12.5
document.getElementById("butter").innerHTML = butter
bread = person*0.5
document.getElementById("bread").innerHTML = bread

  }
  
  function personcounter_minus(){
    person--
    document.getElementById("person").innerHTML = person
    potato = person*300
    document.getElementById("potato").innerHTML = potato
    salt = person*0.125
    document.getElementById("salt").innerHTML = salt
    milk = person*0.25
    document.getElementById("milk").innerHTML = milk
    nutmeg = person*0.25
    document.getElementById("nutmeg").innerHTML = nutmeg
    butter = person*12.5
    document.getElementById("butter").innerHTML = butter
    bread = person*0.5
    document.getElementById("bread").innerHTML = bread
  }

  


