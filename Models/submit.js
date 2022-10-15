window.addEventListener('load',()=>{
  if(document.cookie!==''){
  location.replace("../layout/main.html")
}
})
const userData = [
  {
    id:'123a',
    email: "humayoualisaral@gmail.com",
    password: "ali123",
    paid: "yes",
  },
  {
    id:'123b',
    email: "qaisarabbas5422@gmail.com",
    password: "abbas@12",
    paid: "yes",
  },
  {
    id:'123c',
    email: "rumailabbas@gmail.com",
    password: "rumail@123",
    paid: "yes",
  },
  {
    id:'123d',
    email: "farazhussain@gmail.com",
    password: "faraz@123",
    paid: "yes",
  },
  {
    id:'123e',
    email: "alimohammadi@gmail.com",
    password: "muhammad@123",
    paid: "no",
  },
  {
    id:'123f',
    email:"hussainminhaj62@gmail.com",
    password:"12345",
    paid:'yes'
  }
];
const setCookieData=(id,value,exp)=>{
  const d = new Date();
  d.setTime(d.getTime() + (exp * 24 * 60 * 60 * 1000));
  const expires = "expires=" + d.toUTCString();
  document.cookie = id + "=" + value + ";" + expires + ";path=/";
 
}
 
const button = document.querySelector("#button");
const invalid = document.querySelector("#invalid-credentials");
email=document.querySelector("#email");
password=document.querySelector("#password");
button.addEventListener("click", (e) => {
  e.preventDefault();
  userData.find((user) => {
    if (
      user.email == email.value &&
      user.password == password.value
    ) {
      invalid.style.display = "none";
      if (user.paid == "no") {
        invalid.style.display = "flex";
        invalid.innerHTML = "you didn't have recharged it yet ";
      } else {
        if(remember.checked){
          setCookieData("user",user.id,1)
        }
        window.location.replace("../layout/main.html");
        
      }
      return user;
    } else {
      invalid.innerHTML = `
       <span>
       <b>Incorrect password.</b>Please try again or you can <a href=""> reset your password.</a>
       </span>
       `;
      invalid.style.display = "flex";
    }
    
  });
});
