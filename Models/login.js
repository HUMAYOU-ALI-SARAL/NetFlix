const visibility = (element, style) => {
  element.style.visibility = style;
};
const emailValidation = (email_value) => {
  if (email_value.value.length === 0) {
    email_value.labels[0].classList.remove("label");
  }
  const error_email = document.querySelector("#error-email");
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email_value.value)) {
    visibility(error_email, "hidden");
    email_value.style.borderBottom = "none";
  } else {
    visibility(error_email, "visible");
    email_value.style.borderBottom = "2px solid #e87c03";
  }
};

const validatePassword = (password) => {
  const error_password = document.querySelector("#error-password");
  if (password.value.length === 0) {
    password.labels[0].classList.remove("label");
  }
  if (password.value.length > 4) {
    visibility(error_password, "hidden");
    password.style.borderBottom = "none";
  } else {
    visibility(error_password, "visible");
    password.style.borderBottom = "2px solid #e87c03";
  }
};

const email_input = document.querySelector("#email");
email_input.addEventListener("focusin", (e) => {
  e.preventDefault();
  email_input.labels[0].classList.add("label");
});
email_input.addEventListener("focusout", (e) => {
  e.preventDefault();
  emailValidation(email_input);
});

const password_input = document.querySelector("#password");
password_input.addEventListener("focusin", (e) => {
  e.preventDefault();
  password_input.labels[0].classList.add("label");
  show.style.visibility='visible'

});
const show=document.querySelector("#show")
let hide=false;
show.addEventListener('click',(e)=>{
  e.preventDefault();
  if(hide===false){
    password_input.setAttribute('type','text')
  show.innerHTML='HIDE'
  hide=true;
  }
  else{
    password_input.setAttribute('type','password')
    show.innerHTML='SHOW'
    hide=false
  }
  
})
password_input.addEventListener("focusout", (e) => {
  e.preventDefault();
  validatePassword(password_input);
});
learn_more = document.querySelector("#learn-more");
learn_more_content = document.querySelector("#learn-more-cont");
learn_more.addEventListener("click", (e) => {
  e.preventDefault();
  visibility(learn_more_content, "visible");
  visibility(learn_more, "hidden");
});
