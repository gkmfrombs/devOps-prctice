
***
# 🧠 DevOps Quiz App

![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)
![GitHub Pages](https://img.shields.io/badge/Deployed_on-GitHub_Pages-2ea44f?logo=github)

> A lightweight, mobile-friendly quiz application built for **Linux & DevOps interview preparation**, featuring real-time feedback and quick revision tracking.

### 🔗 [Play the Live Demo Here!](https://gkmfrombs.github.io/devOps-prctice/)

---

## ✨ Features

- **📱 Responsive UI:** Clean, glassmorphism design that works flawlessly on mobile and desktop.
- **🎯 Massive Question Bank:** 200+ interview questions loaded dynamically.
- **⏱️ Time Pressure:** Built-in 30-second countdown timer per question.
- **🎨 Instant Feedback:** Visually highlights correct (🟢) and incorrect (🔴) choices the moment you click.
- **📊 Score Tracking:** Live progress updates and a final end-screen summary.
- **🎚️ Dynamic Filtering:** Filter questions by *All, Easy, Medium,* or *Hard* difficulties.
- **🔁 Easy Navigation:** Freely move to the *Previous* or *Next* question.

---

## 📂 Project Structure
```text
devOps-prctice/
│── index.html       # Main UI structure
│── style.css        # Modern, responsive styling
│── script.js        # Quiz logic, timer, and state management
└── questions.json   # Data file containing all questions and answers
```

---

## 🚀 Run Locally

Want to test it out offline or build upon it? It requires zero dependencies.

1. **Clone the repository:**
   
```bash
   git clone [https://github.com/gkmfrombs/devOps-prctice.git](https://github.com/gkmfrombs/devOps-prctice.git)
   ```
2. **Navigate to the directory:**
   ```bash
   cd devOps-prctice
   ```
3. **Run the app:**
   Simply double-click `index.html` to open it in your browser, or serve it using an extension like VS Code's "Live Server".

---

<details>
<summary><b>💡 How to add your own questions (Click to expand)</b></summary>
<br>
Because the app is data-driven, you don't need to touch the HTML or JS to add content. Just open `questions.json` and add a new object to the array:
```json
{
  "question": "What is the default port for SSH?",
  "answer": "22",
  "difficulty": "easy"
}
```
The app will automatically shuffle and inject your new questions on the next reload!
</details>

---

## ⭐ Support

If you found this tool helpful for your interview prep, please consider giving it a ⭐ on GitHub!
```