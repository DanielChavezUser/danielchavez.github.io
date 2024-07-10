//import * as _db_ from "/Users/danch/Downloads/InteractiveWebsite/database.js"; 
//import { getUserInfo } from "./database.js";

document.addEventListener("DOMContentLoaded", () =>{
    //getting the database;
    
    const MessageInput = document.getElementById("inputMessage");
    const chatBox = document.getElementsByClassName("chatBox")[0]; // modify this!
    const sendButton = document.getElementById("sendButton");

    
    sendButton.addEventListener("click", async () =>{
        //summary: we get the message from the DOM from input and using the func
        //and using the sendButton id we get the information and move it as we please
        //move forward...->
        chatBox.style = "red";
        const message = MessageInput.value.trim(); // removes spaces;\

        //this is testing
        //const userInfo = await getUserInfo("danjeans");
        if (message){
            const messageElement = document.createElement("div");
            messageElement.className = "bubbleMessage left";
            messageElement.innerText = message;
            chatBox.appendChild(messageElement);
            MessageInput.value = "";
        }
    });

    MessageInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            sendButton.click();
        }
    });



    //this would be create the text bubble;
    function addMessageToChat(From, Message){

    }

    
});