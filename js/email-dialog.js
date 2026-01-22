
const emailFormNameElement = document.getElementById("email-dialog-fullname");
const emailFormEmailElement = document.getElementById("email-dialog-email");
const emailFormMessageElement = document.getElementById("email-dialog-message");

const nameRegex = /^([A-Z])([a-zA-Z'’-]*)$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

const messageLowerLimit = 25;
const messageUpperLimit = 500;

/*-- VALIDATIONS --*/
const nameValidator = (event) => {
    const fullname = emailFormNameElement.value;
    const nameParts = fullname.split(" ");

    for (const name of nameParts) {
        const matches = nameRegex.exec(name);
        
        if (!nameRegex.test(name)) {
            return false; 
        }
    }

    return true;
};

const emailValidator = (event) => emailRegex.test(emailFormEmailElement.value.trim());

const messsageValidator = (event) => {
    const message = emailFormMessageElement.value.Trim();
    if (message.length == 0) {
        alert("Your message can not be empty");
        return false;
    }
    
    if (messageLowerLimit > message.length
        && message.length > messageUpperLimit) {
            alert(`Your message is ${message.length} charcters long. \n
                 It must be between ${messageLowerLimit} and ${messageUpperLimit} characters long.`)
            return false;
    }
};

/* Email Form Submit Validations */
document.getElementById("email-form").addEventListener("submit", (event) => {
    let isValid = true;

    if (!nameValidator()) {
        isValid = false;
    }

    if (!emailValidator()) {
        isValid = false;
    }

    if (!messsageValidator()) {
        isValid = false;
    }
    
    if(!isValid) {
        event.preventDefault();
    }
});

