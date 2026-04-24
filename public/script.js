const socket = io();

const form = document.getElementById("form");
const input = document.getElementById("input");
const messages = document.getElementById("messages");

let username = prompt("Enter your username:");

if (!username || username.trim() === "") {
  username = "User";
}

form.addEventListener("submit", function(e){
  e.preventDefault();

  const msg = input.value.trim();

  if(msg !== ""){
    socket.emit("chat message", {
      text: msg,
      username: username
    });

    input.value = "";
  }
});

socket.on("chat message", function(data){
  const item = document.createElement("li");

  const name = document.createElement("strong");
  name.textContent = data.username;

  const text = document.createElement("span");
  text.textContent = data.text;

  item.appendChild(name);
  item.appendChild(text);

  if(data.sender === socket.id){
    item.classList.add("my-message");
  } else {
    item.classList.add("other-message");
  }

  messages.appendChild(item);
  messages.scrollTop = messages.scrollHeight;
});