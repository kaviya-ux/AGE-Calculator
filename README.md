#  Age Calculator

A simple, clean, and responsive web app that calculates your exact age from your date of birth — along with your birth day, birth month, and life stage — built with **HTML, Tailwind CSS, and vanilla JavaScript**.

##  Features

- 📅 Pick your Date of Birth using a simple date picker
- 🧮 Instantly calculates your **exact age in years**
- 📆 Displays your **birth day** and **birth month** by name
- 🏷️ Classifies you into a life stage — **Child, Teenager, Adult, or Senior Citizen**
- 🕒 Shows the **current date and year** for reference
- 💻 Fully responsive UI powered by **Tailwind CSS**
- ⚡ Zero dependencies — pure HTML, CSS, and JavaScript


##  Getting Started

### Prerequisites

No installation or build tools required — this is a static, single-file web app.

### Run Locally

1. Clone the repository
   ```bash
   https://github.com/kaviya-ux/AGE-Calculator
   ```
2. Navigate into the project folder
   ```bash
   cd <AGE-Calculator>
   ```
3. Open `index.html` in your browser
   ```bash
   open index.html   # macOS
   start index.html  # Windows
   ```

That's it — no server or dependencies needed.

##  How It Works

1. The user selects their date of birth using the HTML `<input type="date">` field.
2. On clicking **Calculate Age**, JavaScript compares the birth date with the current date.
3. The exact age is calculated by adjusting for whether the birthday has occurred yet this year.
4. The app determines the day and month of birth using JavaScript's `Date` object.
5. Based on the calculated age, the user is classified into a life stage:
   - **Child** — under 13
   - **Teenager** — 13 to 19
   - **Adult** — 20 to 59
   - **Senior Citizen** — 60 and above
6. All results are displayed dynamically in a styled result card.

##  Project Structure

```
├── index.html      # Main application file (HTML + CSS + JS)
└── README.md        # Project documentation
```

⭐ If you found this project useful, consider giving it a star on GitHub!
