#  [TILISKRIPTI ▶️ LIVE DEMO](https://gigantti-tiliskripti.vercel.app/)

### NOTE: It is not possible to test backend functionality since it requires company resources that are not with this repo for obvious reasons. Created for showcasing design _ONLY_.

## Description

Having worked at Giganti for years, I found a perfect place for some nice automation that will make my day to day work easier.

There are multiple different products that can be activated for the customer ensuring best possible experience. This can sometimes be time consuming and repetive, thus annoying for the employee and keeping the customer waiting. Depending on the situation, this can take up to 10 minutes per customer to handle and **this app can dial that down to under one minute, two at worst**.

With provided idea, when deployed to all nordic stores, this script could save six or even seven figures per annum in wage expenses, depending on how often it would be used.

But first of all, it is not being deployed anywhere as of now, sadly. But this brings me to my next point, To best of my ability, this app is being developed to be production ready and solid enough to be deployed if opporturiny arrives.

## Installation
```
git clone https://github.com/JoonasMykkanen/gigantti_tiliskripti
```
### Docker:
```
cd frontend && docker compose up --build
```
### Or manually ( requires npm & node installed on the machine )
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
