function encodeMessage() {
    let message = document.querySelector("textarea").value;
    let encodedMessage = message.replace(/e/g, "enter")
                                .replace(/i/g, "imes")
                                .replace(/a/g, "ai")
                                .replace(/o/g, "ober")
                                .replace(/u/g, "ufat");
           
    document.getElementById("output-message").innerHTML = encodedMessage;
    verifyMessage();
    verifyCopy();
}

function decodeMessage() {
    let message = document.querySelector("textarea").value;
    let decodedMessage = message.replace(/enter/g, "e")
                                .replace(/imes/g, "i")
                                .replace(/ai/g, "a")
                                .replace(/ober/g, "o")
                                .replace(/ufat/g, "u");
           
    document.getElementById("output-message").innerHTML = decodedMessage;
    verifyMessage();
    verifyCopy();
}

function copyMessage() {
    navigator.clipboard.writeText(document.getElementById("output-message").innerText);
}

function verifyMessage() {
    let thereIsMessage = document.getElementById("output-message");
    let noMessageImage = document.getElementById("no-msg");

    if (thereIsMessage.innerText.trim() !== "") {
        noMessageImage.style.display = "none";    
    } else {
        noMessageImage.style.display = "block";        
    }
}

function verifyCopy() {
    let thereIsMessage = document.getElementById("output-message");
    let copyB = document.getElementById("copy");

    if (thereIsMessage.innerText.trim() !== "") {
        copyB.style.visibility = "visible";    
    } else {
        copyB.style.visibility = "hidden";       
    }
}

window.onload = verifyCopy();

function normalizeInput(input) {
    input = input.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let normalized = input.replace(/[^a-zA-Z\s]/g, '');
    normalized = normalized.toLowerCase();
    return normalized;
}

function validateTextarea(event) {
    const textarea = event.target;
    const cursorPosition = textarea.selectionStart;
    const normalized = normalizeInput(textarea.value);
    if (textarea.value !== normalized) {
        textarea.value = normalized;
        textarea.setSelectionRange(cursorPosition, cursorPosition);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('input-message');
    textarea.addEventListener('input', validateTextarea);
});