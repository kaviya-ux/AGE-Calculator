# 🎂 Age Calculator

A simple age calculator built with HTML, Tailwind CSS, and vanilla JavaScript. Enter a date of birth and instantly see your exact age along with extra details like your birth day, birth month, and life stage.

## Live Demo

Keep `index.html` and `script.js` in the same folder and open `index.html` in any browser. No installation, no build step required.

## Features

- Pick a date of birth using a native date picker
- Calculates exact age in years, correctly accounting for whether this year's birthday has already passed
- Shows the day of the week you were born on (e.g. "Wednesday")
- Shows the month you were born in (e.g. "March")
- Shows your birth year and today's current date/year
- Classifies your life stage as **Child**, **Teenager**, **Adult**, or **Senior Citizen** based on age
- Simple validation — alerts if no date of birth is selected before calculating

## Tech Stack

- HTML5
- [Tailwind CSS](https://tailwindcss.com/) (via CDN)
- Vanilla JavaScript (no frameworks, no libraries)

## How It Works

- The date of birth is read from the `<input type="date">` field and parsed into a JavaScript `Date` object.
- Age is calculated by subtracting birth year from the current year, then decremented by one if the current month/day hasn't reached the birth month/day yet this year.
- Day-of-week and month names are looked up from two hardcoded arrays (`days` and `months`) using `Date.getDay()` and `Date.getMonth()`.
- The calculated age is checked against a few thresholds (13, 20, 60) to assign a life-stage label.
- All the result details are injected into the page as HTML inside the `#result` div, which is hidden by default and revealed once a calculation is made.

## Project Structure

```
age-calculator/
├── index.html   # markup and Tailwind utility classes
├── script.js    # age calculation logic
└── README.md
```

## Running Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/kaviya-ux/AGE-Calculator.git
   ```
2. Make sure `index.html` and `script.js` stay in the same folder, and that `index.html` includes `<script src="script.js"></script>` before the closing `</body>` tag.
3. Open `index.html` in your browser.

## Possible Improvements

- Show age in months/days as well as years
- Add a "days until next birthday" countdown
- Support selecting a different "as of" date instead of always using today
- Add input validation to reject future dates of birth
