document.querySelector("#button").addEventListener("click",()=>{
    let firstName=document.querySelector(".fisrt-name").value;
    let lastName=document.querySelector(".last-name").value;
    let email=document.querySelector(".email").value;
    let password=document.querySelector(".password").value;
    let conPassword=document.querySelector(".con-password").value;
    let errorMessage=document.querySelector("#error-message");
    let newData=document.querySelector("#new-data")
    


    if( password.length < 8){
        errorMessage.style.color ="red";
        errorMessage.innerHTML = "Minimum 8 simvol"
        
    }else if(password !== conPassword){
        errorMessage.style.color = "red"
        errorMessage.innerHTML = "Sifre yanlisdir"
    }
    else{
        errorMessage.innerHTML = "";

        let data= {
            firstName,
            lastName,
            email,
            password,
            conPassword
        }
        
        newData.innerHTML="Yeni hesab nəlumatları:"+"<br>"+"<br>"+"Ad: " +data.firstName + "<br>"+"Soyad: " +data.lastName+"<br>"+"Email: "+data.email+"<br>"+"Parol: "+data.password
    
        if(
            firstName =="filan" &&
            lastName == "filanov" &&
            email == "filan@mail.com" &&
            password == "filan2023" &&
            conPassword 
            ){
                window.location.pathname="/about.html"
            }
            // else{
            //     errorMessage.innerHTML="Hesab veya parol yanlisdi"
            // }
    }
    




    
    

    firstName=document.querySelector(".fisrt-name").value ="";
    lastName=document.querySelector(".last-name").value ="";
    email=document.querySelector(".email").value ="";
    password=document.querySelector(".password").value ="";
    conPassword=document.querySelector(".con-password").value ="";

    
})


let firstName = document.querySelector(".fisrt-name");
    firstName.addEventListener("keyup",()=>{
        checkName(firstName.value.length,firstName)
    })

let lastName = document.querySelector(".last-name");
    lastName.addEventListener("keyup",()=>{
        checkName(lastName.value.length,lastName)
    })

    function checkName(error, checkInput){
        console.log(error);
        if (error >= 3) {
            checkInput.style.border = "2px solid green"
        }
        else{
            checkInput.style.border = "2px solid red"
        }
        if( error == 0){
            checkInput.style.border = "none";
        }
    }




let password = document.querySelector(".password")
    password.addEventListener("keyup", () => {
        checkError(password.value.length,password)
    });

let conPassword = document.querySelector(".con-password")
    conPassword.addEventListener("keyup", () => {
        checkError(conPassword.value.length,conPassword)
    });
    
    function checkError(error, checkInput){
        console.log(error);
        if (error >= 8) {
            checkInput.style.border = "2px solid green"
        }
        else{
            checkInput.style.border = "2px solid red"
        }
        if( error == 0){
            checkInput.style.border = "none";
        }
    }