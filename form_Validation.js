
const form_container  = document.getElementById("form-container");
const success_container = document.getElementById("success-container");
const email_input = document.getElementById("email-input");
const email_submit = document.getElementById("email-submit");

var validEmailRegEx = /^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([\.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i



document.querySelector( "form" ).addEventListener( "invalid", function( event ) 
        {
            event.preventDefault();
            console.log("invalid");

            document.getElementById("email-error-message").style.display = "block"; 
        }, true );
       
function submit_test()
{
    form_container.style.display = "none";
    success_container.style.display = "flex"

}


document.querySelector( "form" ).addEventListener( "input", function( event ) 
        {
            if(validEmailRegEx.test(email_input.value))
            {
                console.log("is valid");
                email_submit.classList.add("active");
            }
            else
            {
                email_submit.classList.remove("active");
            }
           

        })
