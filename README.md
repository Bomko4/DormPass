# Перепустка в гуртожиток

Простий статичний сайт (без збірки): форма введення даних → сторінка перепустки.

## Файли
- `index.html` — форма (гуртожиток, кімната, ПІБ, дійсний до)
- `pass.html` — готова перепустка (стилізована під скріншот)
- `style.css`, `script.js`, `pass.js`

## Запуск локально
Просто відкрий `index.html` у браузері, або:
```
npx serve .
```

## Найпростіший деплой на Vercel (без термінала)

1. Зайди на https://vercel.com і залогінься (можна через GitHub).
2. Створи новий репозиторій на GitHub і заливи туди всі файли цієї папки
   (на github.com можна натиснути "Add file → Upload files" і перетягнути їх).
3. На vercel.com натисни **Add New → Project**, обери щойно створений репозиторій.
4. Framework Preset: **Other** (це звичайний статичний сайт, білд не потрібен).
5. Натисни **Deploy** — за хвилину отримаєш посилання виду `https://твій-проект.vercel.app`.

## Деплой через термінал (якщо є git і Node.js)

```bash
cd dorm-pass
git init
git add .
git commit -m "Dorm pass app"
git branch -M main
git remote add origin https://github.com/ТВІЙ_ЛОГІН/dorm-pass.git
git push -u origin main

npm i -g vercel
vercel --prod
```

`vercel --prod` сам запропонує залогінитись і задеплоїть проєкт за секунди.
