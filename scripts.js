var reservationCounter = 0; 

document.getElementById("reservationForm").addEventListener("submit", function(event){
  event.preventDefault(); 
  
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  

  
  reservationCounter++; 
  alert("予約が完了しました。予約番号は " + reservationCounter + " 番目です。");
  document.getElementById("reservationForm").reset();
});
