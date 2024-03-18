# <TILISKRIPTI> [LIVE DEMO](https://gigantti-tiliskripti-4hxhmincj-joonasmykkanen.vercel.app/)

### NOTE: It is not possible to test backend functionality since it needs company resources that are not with this repo for obvious reasons. It's up for showcasing implementation as well as showcasing the frontend.

## Description

Having worked at Giganti for years, and after starting my CS studies, I found a perfect place for some nice automation. It started off years ago as a CMD tool without UI and now has evolved to full fledged fullstack applications with integration to Gigantti and F-Secure systems.

## Installation

### Docker:
```
cd frontend && docker compose up --build
```

### Access in browser:
```
http://localhost:5173/
```

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

## Features

### Frontend:
- React as main frontend framework
- NextUI as component library
- TailwindCSS for styling

### Backend:
- FastApi as main framework
- SQLite database to save product keys
- 
- /upload to take in an .xlsx file containing product keys
- /register to create new customer to f-secure portal
- /stats to report usage statistic for billing

## Tests

Coming soon... :)
