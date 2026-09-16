const dormDetails = {
  '1': { commander: 'Зварич Сергій Мирославович', phone: '(032) 238-60-49' },
  '3': { commander: 'Семенюк Лідія Олексіївна', phone: '(032) 238-59-95' },
  '4': { commander: 'Лоха Тетяна Іванівна', phone: '(032) 238-25-73' },
  '5': { commander: 'Якібчук Марія Михайлівна', phone: '(032) 258-12-14' },
  '6': { commander: 'Юрович Уляна Мирославівна', phone: '(032) 238-25-83' },
  '7': { commander: 'Колякіна Кароліна Валеріївна', phone: '(032) 238-60-84' },
  '8': { commander: 'Ісюк Сергій Михайлович', phone: '(032) 258-26-09' },
  '9': { commander: 'Волошин Орися Василівна', phone: '(032) 238-60-86' },
  '10': { commander: 'Боєчко Ірина Михайлівна', phone: '(032) 238-60-20' },
  '11': { commander: 'Кавка Наталя Орестівна', phone: '(032) 238-60-57' },
  '12': { commander: 'Фортуна Любов Тарасівна', phone: '(032) 238-77-85' },
  '14': { commander: 'Маїк Наталя Мирославівна', phone: '(032) 238-77-83' },
  '15': { commander: 'Мельник Наталя Романівна', phone: '(032) 238-77-82' },
  '17': { commander: 'Крет Богдан Степанович', phone: '(032) 258-32-08' },
  '18': { commander: 'Рудка Михайло Степанович', phone: '(032) 252-51-25' },
  '19': { commander: 'Павлишин Наталія Михайлівна', phone: '(032) 234-61-57' },
  '21': { commander: 'Крет Богдан Степанович', phone: '(032) 263-02-94' },
  '22': { commander: 'Нахвостач Христина Валентинівна', phone: '(032) 263-13-52' }
};

const dormInput = document.getElementById('dorm');
const dormContact = document.getElementById('dormContact');

function updateDormContact() {
  const details = dormDetails[dormInput.value];
  dormContact.textContent = `Комендант: ${details.commander} · ${details.phone}`;
}

dormInput.addEventListener('change', updateDormContact);
updateDormContact();

document.getElementById('passForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const data = {
    dorm: document.getElementById('dorm').value,
    room: document.getElementById('room').value.trim(),
    lastname: document.getElementById('lastname').value.trim(),
    firstname: document.getElementById('firstname').value.trim(),
    middlename: document.getElementById('middlename').value.trim(),
    validUntil: '2027-08-31'
  };

  localStorage.setItem('dormPassData', JSON.stringify(data));
  window.location.href = 'pass.html';
});

