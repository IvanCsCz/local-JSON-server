const titleInput = document.querySelector('.titleInput');
const nameInput = document.querySelector('.nameInput');
const btn = document.querySelector('.submitBtn');

btn.addEventListener('click', adder);

function adder() {
  fetch('http://localhost:3000/posts/', {
    method: 'POST',
    body: JSON.stringify({
      title: titleInput.value,
      name: nameInput.value,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      console.log(data);
    });
}
