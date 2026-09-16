document.getElementById('passForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const data = {
    dorm: document.getElementById('dorm').value,
    room: document.getElementById('room').value.trim(),
    lastname: document.getElementById('lastname').value.trim(),
    firstname: document.getElementById('firstname').value.trim(),
    middlename: document.getElementById('middlename').value.trim(),
    validUntil: document.getElementById('validUntil').value
  };

  localStorage.setItem('dormPassData', JSON.stringify(data));
  window.location.href = 'pass.html';
});

// Default the date field to a sensible future date if empty
const validUntilInput = document.getElementById('validUntil');
if (validUntilInput && !validUntilInput.value) {
  const d = new Date();
  d.setFullYear(d.getFullYear() + 1);
  validUntilInput.value = d.toISOString().slice(0, 10);
}
