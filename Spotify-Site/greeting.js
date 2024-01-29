const greetingElement = document.getElementById("greeting");

const currentHour = new Date().getHours();

if (currentHour >= 5 && currentHour < 12) {
  greetingElement.textContent = "Bom dia!";
} else if (currentHour >= 12 && currentHour < 18) {
  greetingElement.textContent = "Boa tarde!";
} else {
  greetingElement.textContent = "Boa noite!";
}

greetingElement.textContent = greetingMessage;