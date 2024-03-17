const app = document.querySelector("#app");
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

app.addEventListener("keypress", async function (event) {
  if (event.key === "Enter") {
    await delay(150);
    getInputValue();

    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function (event) {
  const input = document.querySelector("input");
  input.focus();
});

async function open_terminal() {
  createText("Welcome");
  await delay(700);
  createText("Starting the server...");
  await delay(1500);
  createText("You can run several commands:");

  createCode("about me", "Who am i and what do i do.");
  createCode("all", "See all commands.");
  createCode("social -a", "All my social networks.");
  createCode("contact", "Contact me via Email.");

  await delay(500);
  new_line();
}

function new_line() {
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path");
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/behnam-ghafary";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone");
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
}

function removeInput() {
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue() {
  const value = document.querySelector("input").value.trim().toLowerCase();
  if (value === "all") {
    trueValue(value);

    createCode(
      "projects",
      "My github page with my projects. Follow me there ;)"
    );
    createCode("about me", "Who am i and what do i do.");
    createCode("social -a", "All my social networks.");
    createCode("clear", "Clean the terminal.");
  } else if (value === "projects") {
    trueValue(value);
    createText(
      "<a href='https://github.com/behnamgh' target='_blank'><i class='fab fa-github white'></i> github.com/behnamgh</a>"
    );
  } else if (value === "about me") {
    trueValue(value);
    createText("Hi, My name is Behnam ;)");
    createText(
      "Working as a full-stack developer.I'm currently based in Berlin, Germany. I'm passionate about web development and I love to learn new things. I'm always looking for new opportunities and challenges. My main focus is on entire javascript ecosystem, specially React and Node.js."
    );
  } else if (value === "social -a" || value === "social --all") {
    trueValue(value);
    createText(
      "<a href='https://github.com/behnamgh' target='_blank'><i class='fab fa-github white'></i> github.com/behnamgh</a>"
    );
    createText(
      "<a href='https://www.linkedin.com/in/behnamghafary' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/behnamghafary</a>"
    );
    createText(
      "<a href='https://www.instagram.com/behnamghafary/' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/behnamghafary</a>"
    );
    createText(
      "<a href='mailto:behnam.ghafary@gmail.com' target='_blank'><i class='fa fa-envelope white'></i> behnam.ghafary@gmail.com</a>"
    );
  } else if (value === "social") {
    trueValue(value);
    createText("Didn't you mean: social -a?");
  } else if (value === "contact") {
    trueValue(value);
    createText(
      "<a href='mailto:behnam.ghafary@gmail.com' target='_blank'><i class='fa fa-envelope white'></i> behnam.ghafary@gmail.com</a>"
    );
  } else if (value === "clear") {
    document.querySelectorAll("p").forEach((e) => e.parentNode.removeChild(e));
    document
      .querySelectorAll("section")
      .forEach((e) => e.parentNode.removeChild(e));
  } else if (value === "") {
    trueValue(value);
  } else if (["mkdir", "ls -la", "ls", "cd ~", "pwd", "ls ~"].includes(value)) {
    falseValue(value);
    createText(`${value}: <span class='error'>Operation not permitted</span>`);
  } else {
    falseValue(value);
    createText(`command not found: ${value}`);
  }
}

function trueValue(value) {
  const div = document.createElement("section");
  div.setAttribute("class", "type2");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone");
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess");
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value) {
  const div = document.createElement("section");
  div.setAttribute("class", "type2");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error");
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error");
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname) {
  const p = document.createElement("p");

  p.innerHTML = text;
  app.appendChild(p);
}

function createCode(code, text) {
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML = `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();
