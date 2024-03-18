#  [TILISKRIPTI ▶️ LIVE DEMO](https://gigantti-tiliskripti-4hxhmincj-joonasmykkanen.vercel.app/)

### NOTE: It is not possible to test backend functionality since it needs company resources that are not with this repo for obvious reasons. It's up for showcasing implementation as well as showcasing the frontend.

## Description

Having worked at Giganti for years, and after starting my CS studies, I found a perfect place for some nice automation.

Idea is simple, instead of manually generating product key, going to registering protals and entering informations and then filling out forms to provide for customer, this script will do it all at once.

With provided idea, when deployed to all nordic stores, this script could save six or even seven figures per annum in wage expenses.

But first of all, it is not being deployed anywhere as of now, sadly. 

Point is that even with just 5-8 minutes work time saved per usage, assuming hourly pay is 15€, the saving is merely 1,25€ - 2,00€ per run. As with all automation, it is profitable when you scale it.
Elkjop / Elgigantten / Gigantti has almost 400 stores all around nordics and this application could be used as many times as needed per day per store anywhere, anytime. 

## Installation

### Docker:
```
cd frontend && docker compose up --build
```

### Access in browser:
```
http://localhost:5173/
```

## Features

### General:
- Running locally to make security that much easier
- Not saving ANY customer information to make GDPR simple
- Gigantti themed UI with compatible fonts, logos and style

### Frontend:
- React as main frontend framework
- NextUI as component library
- TailwindCSS for styling

### Backend:
- FastApi as main framework
- SQLite database to save product keys
- /upload to take in an .xlsx file containing product keys
- /register to create new customer to f-secure portal
- /stats to report usage statistic for billing
- / to ???

## Tests

Coming soon... :)
