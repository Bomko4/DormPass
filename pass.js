function formatDate(iso) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-');
  return `${d}.${m}.${y}`;
}

const raw = localStorage.getItem('dormPassData');
const data = raw ? JSON.parse(raw) : null;

if (data) {
  const dormMap = {
    '1': '1 (вул. Бой-Желенського, 14)',
    '3': '3 (вул. І. Карпінця, 27)',
    '4': '4 (вул. Академіка А. Сахарова, 25)',
    '5': '5 (вул. Лукаша, 4)',
    '6': '6 (вул. Академіка А. Сахарова, 27)',
    '7': '7 (вул. Лукаша, 1)',
    '8': '8 (вул. Академіка А. Сахарова, 23)',
    '9': '9 (вул. Лукаша, 2)',
    '10': '10 (вул. Відкрита, 1)',
    '11': '11 (вул. Лукаша, 5)',
    '12': '12 (вул. Академіка Лазаренка, 38)',
    '14': '14 (вул. Академіка Лазаренка, 40)',
    '15': '15 (вул. Академіка Лазаренка, 42)',
    '17': '17 (вул. Пулюя І., 33а)',
    '18': '18 (м. Львів, вул. Плужника, 5)',
    '19': '19 (м. Львів-смт. Брюховичі, вул. Сухомлинського, 18)',
    '21': '21 (м. Львів, вул. Пулюя І., 33)',
    '22': '22 (м. Львів, вул. В. Великого, 57 (5 під’їзд))'
  };

  const dateFmt = '31.08.2027';

  document.getElementById('dormOut').textContent = dormMap[data.dorm] || data.dorm;
  document.getElementById('roomOut').textContent = data.room;
  document.getElementById('validUntilOut').textContent = dateFmt;
  document.getElementById('validUntilStripA').textContent = dateFmt;
  document.getElementById('validUntilStripB').textContent = dateFmt;
  document.getElementById('fullnameOut').innerHTML =
    `${data.firstname}<br>${data.middlename}<br>${data.lastname}`;
}
