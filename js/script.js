console.log('Sziasztok!')
document.getElementById('button').onclick = function(){
  document.getElementById("button").classList.toggle("red")
  document.getElementById("message").innerHTML=
  `
    <p class="message">
      Kihívás elfogadva!
    </p>  
  `
}