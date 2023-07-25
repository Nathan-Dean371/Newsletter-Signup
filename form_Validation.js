
var validation_Error_Message = document.getElementsByClassName("email-error-message");
const email_Input = document.getElementsByClassName("email-input");


document.querySelector( "form" ).addEventListener( "invalid", function( event ) 
        {
            event.preventDefault();
            console.log("submit");

            document.getElementById("email-error-message").style.display = "block"; 
        }, true );



document.querySelector( "form" ).addEventListener( "valid", function( event ) 
{
    event.preventDefault();
    window.location.href = "/success.html";
});
       

function submit_test()
{
    
}

