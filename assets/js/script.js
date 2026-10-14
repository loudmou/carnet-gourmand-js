/* Le Carnet Gourmand — version minimale conforme au devoir */

const form = document.querySelector("#comment-form");
const nameInput = document.querySelector("#author-name");
const commentInput = document.querySelector("#comment-text");
const commentsList = document.querySelector("#comments-list");
const formMessage = document.querySelector("#form-message");

function showError(message) {
  formMessage.textContent = message;
  formMessage.hidden = false;
}

function clearError() {
  formMessage.textContent = "";
  formMessage.hidden = true;
}

function createComment(name, text) {
  const card = document.createElement("article");
  card.classList.add("comment-card");

  const author = document.createElement("h3");
  author.classList.add("comment-author");
  author.textContent = name;

  const body = document.createElement("p");
  body.classList.add("comment-body");
  body.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-button");
  deleteBtn.type = "button";
  deleteBtn.textContent = "🗑️";
  deleteBtn.setAttribute("aria-label", "Supprimer le commentaire de " + name);

  deleteBtn.addEventListener("click", () => {
    card.remove();
  });

  card.appendChild(author);
  card.appendChild(body);
  card.appendChild(deleteBtn);

  return card;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const text = commentInput.value.trim();

  if (name.length < 2) {
    showError("Le nom doit contenir au moins 2 caractères.");
    return;
  }

  if (text.length < 10) {
    showError("Le commentaire doit contenir au moins 10 caractères.");
    return;
  }

  const newComment = createComment(name, text);
  commentsList.prepend(newComment);

  form.reset();
  clearError();
});
