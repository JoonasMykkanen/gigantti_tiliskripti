#  [TILISKRIPTI ▶️ LIVE DEMO](https://gigantti-tiliskripti-4hxhmincj-joonasmykkanen.vercel.app/)

### NOTE: It is not possible to test backend functionality since it requires company resources that are not with this repo for obvious reasons. It's up for showcasing implementation as well as showcasing the frontend design _ONLY_.

## Description

Having worked at Giganti for years, and after starting my CS studies, I found a perfect place for some nice automation.

Idea is simple, instead of manually generating product key, going to registering protals and entering informations and then filling out forms to provide for customer, this script will do it all at once, saving valuable time for the employee.

With provided idea, when deployed to all nordic stores, this script could save six or even seven figures per annum in wage expenses.

But first of all, it is not being deployed anywhere as of now, sadly. But this brings me to my next point, To best of my ability, this app is being developed to be production ready and solid enough to be deployed if need be.

## Installation

### Docker:
```
cd frontend && docker compose up --build
```
### Or manually
```
cd frontend && npm install && npm run dev
```


## Usage
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

### Future features being developed currently:
- CMS for languages ( Finnish, Swedish, Norwegian & English )
- Support for McAfee
- Support for Elkjop Cloud
- Support for E-Learning

### General ideas and learnings:
- My first proper Next.js && TypeScript project
- Running locally to make security that much easier
- Not saving ANY customer information to make GDPR simple
- Elkjop / Gigantti themed UI with compatible fonts, logos and color scheme
- Takes in an .config file to configure settings like country and store details

### Frontend:
- Next.js as main framework
- NextUI as component library
- TailwindCSS for styling

### Backend:
- FastApi as main framework
- SQLite database to save product keys ( f-secure )
- /upload to take in an .xlsx file containing product keys
- /register-fsec to create new customer to f-secure portal
- /stats to report usage statistic for billing
- / to ???

## Tests

Coming soon... :)
