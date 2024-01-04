function setFormMessage(formElement, type, message)
{
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--successs", "form__message--error");
    messageElement.classList.add('form__mesage--${type}');    
}

function setInputError(inputElement, message)
{
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement)
{
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";

}
document.addEventListener("DOMContentLoaded", ()=>{
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    })
    
    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    })

    loginForm.addEventListener("submit", e=> {
        e.preventDefault();

        //Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e=> {
            if(e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10)
            {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        })
    
        inputElement.addEventListener("input", e=> {
            clearInputError(inputElement);
        });
    })
    const cabinetSelector = document.querySelector('select#cabinet');
    cabinetSelector.addEventListener("change", e=> {
        const selectedCabinet = e.target.value;
        let positions = [];
        if(selectedCabinet === "president")
        {
            positions = ["Chief of Staff", "DEI Director", "Member Relations Chair", "Intramural Coordinator", "Organization Development", "HLSA Executive Director"];
            
        } else if(selectedCabinet==="operations"){
            positions = ["Assistant Operations Executive Director", 
                "Interrelations Director", 
                "Intercabinet Liason",
                "Affiliated Organization Liason",
                "Alumni Outreach Director]"];
        } else if(selectedCabinet==="programming"){
            positions = ["Assistant Executive Director",
            "Community Affairs Director",
            "External Projects Director",
            "GBM Director",
            "Keystone Event Director", 
            "Service Director",
            "Special Events Director"];
        } else if(selectedCabinet==="communications"){
            positions = ["Assistant Communications Executive Director", 
            "Creative and Graphics Director",
            "Content Creation Director",
            "Public Relations Director",
            "Visual Media Director",
            "Webmaster"]
        } else if(selectedCabinet==="treasury"){
            position =["Assisstant Treasury", "Financial Literacy Director"];
        } else if(selectedCabinet==="secretary"){
            position=["Assistant Director", "Newsletter Director"];
        } else if(selectedCabinet==="mlpFall"){
            positions = ["Assistant Executive Director", 
            "Finance Director",
            "Health and Wellness Affairs Director",
            "Marketing Director",
            "Membership Relations Director",
            "Mentorship Director",
            "Inclusivity and Multicultural Affairs Director", 
            "Professional and Academic Development Director",
            "Servant Leadership Director"]
        } else if(selectedCabinet==="mlpSpring"){
            positions = ["Assistant Executive Director", 
            "Professional and Academic Development Director",
            "Mentorship Director",
            "Membership Relations Director",
            "Finance Director",
            "Marketing Director",
            "Inclusivity and Multicultural Affairs Director",
            "Health and Wellness Affairs Director",
            "Servant Leadership Director"]
        } else if(selectedCabinet==="opa") {
            positions=["Assistant OPA Executive Director",
            "OPA Communications Director",
            "OPA Special Events Director",
            "Research and Education Director",
            "Community Engagement Director",
            "OPA External Projects Directors"]
        }
        var str=""
        
        for(let i = 0; i <positions.length; i++)
        {
            str += "<option>" + positions[i] + "</option>";
        }
        document.getElementById("position").innerHTML = str;
    })

});
