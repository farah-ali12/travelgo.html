const buttons=document.querySelectorAll(".btn");
buttons.forEach(function(button){
    button.addEventListener("click",function(){
     button.nextElementSibling.textContent=" your trip has been booked successfully";
    });
  });
  const form=document.querySelector("form");
  form.addEventListener("submit",function(event){
    event.preventDefault();
    const name=document.querySelector('input[type="text"]');
    const email=document.querySelector('input[type="email"]');
    const message=document.querySelector('textarea');
if(name.value===""||email.value===""||message.value===""){
    alert("Please fill in all fields");
    }
    else{
      alert("message sent successfully");
      form.reset();
    }

  });
  
    