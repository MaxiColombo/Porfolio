/* 
function sendEmail() {
    var name = document.getElementsByName('name')[0].value;
    var lastname = document.getElementsByName('lastname')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var company = document.getElementsByName('company')[0].value;
    var clientInfo = document.getElementsByName('clientInfo')[0].value;

    var emailBody = "Nombre: " + name + "<br>" +
                    "Apellido: " + lastname + "<br>" +
                    "Email: " + email + "<br>" +
                    "Empresa: " + company + "<br>" +
                    "Mensaje: " + clientInfo;

    Email.send({
        Host: "smtp.gmail.com",
        Username: "maximocolombo2003@gmail.com",
        Password: "troncotomas123",
        To: 'maximocolombo2003@gmail.com',
        From: email,
        Subject: "New Contact Form",
        Body: emailBody
    }).then(
        message => {
            alert("Message Sent Successfully");
        }
    ).catch(
        error => {
            console.error(error);
            alert("Error sending the message. Please try again later.");
        }
    );
} */