function submitData(name, email) {
  const userData = { name: name, email: email };
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ name: name, email: email }),
  })
    .then((res) => res.json())
    .then((users) => appendDom(users))
    .catch((error) => catchError(error));
}

function appendDom(users) {
  const body = document.querySelector("body");
  body.innerHTML = `${users.id}`;
}

function catchError(error) {
  const body = document.querySelector("body");
  body.innerHTML = error.message;
}

document.addEventListener("DOMContentLoaded", submitData);
