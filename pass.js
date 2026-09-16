function formatDate(iso) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-');
  return `${d}.${m}.${y}`;
}

const raw = localStorage.getItem('dormPassData');
const data = raw ? JSON.parse(raw) : null;

if (data) {
  const dormMap = {
    '1': '1 (вул. Академіка А. Сахарова 25)',
    '2': '2 (вул. Академіка А. Сахарова 25)',
    '3': '3 (вул. Академіка А. Сахарова 25)',
    '4': '4 (вул. Академіка А. Сахарова 25)',
    '5': '5 (вул. Академіка А. Сахарова 25)',
    '6': '6 (вул. Академіка А. Сахарова 25)'
  };

  const dateFmt = formatDate(data.validUntil);

  document.getElementById('dormOut').textContent = dormMap[data.dorm] || data.dorm;
  document.getElementById('roomOut').textContent = data.room;
  document.getElementById('validUntilOut').textContent = dateFmt;
  document.getElementById('validUntilStripA').textContent = dateFmt;
  document.getElementById('validUntilStripB').textContent = dateFmt;
  document.getElementById('fullnameOut').innerHTML =
    `${data.firstname}<br>${data.middlename}<br>${data.lastname}`;
}
