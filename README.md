# AI Email Reply Generator Online

[![Netlify Status](https://api.netlify.com/api/v1/badges/0a89d538-caa8-4707-ad50-454b974e3600/deploy-status)](https://app.netlify.com/projects/email-reply-generator-online/deploys)

## 🚀 Live Demo
- Netlify Deployment: [https://email-reply-generator-online.netlify.app/](https://email-reply-generator-online.netlify.app/)

---

## 📧 Project Overview
AI Email Reply Generator is a web application that helps you generate smart, professional, and context-aware email replies instantly using AI. The app is designed to save you time and boost productivity by automating the process of drafting email responses.

---

## ✨ Features
- Generate AI-powered email replies in seconds
- Choose the tone of your reply (e.g., professional, friendly)
- Copy generated replies to clipboard with one click
- Responsive and modern UI
- Fast and reliable backend

---

## 🛠️ Tech Stack
- **Frontend:** React, TypeScript, CSS
- **Backend:** Spring Boot (Java 21), REST API
- **Deployment:**
  - Frontend: [Netlify](https://email-reply-generator-online.netlify.app/)
  - Backend: [Render](https://aierg2.onrender.com)

---

## 🖥️ Local Setup

### Prerequisites
- Node.js & npm
- Java 21 & Maven

### 1. Clone the repository
```bash
git clone https://github.com/rajat1903/AIERG2.git
cd AIERG2
```

### 2. Start the Backend
```bash
cd email-writer-sb/email-writer-sb
./mvnw clean package
java -jar target/email-writer-sb-0.0.1-SNAPSHOT.jar
```
The backend will run on [http://localhost:8080](http://localhost:8080)

### 3. Start the Frontend
```bash
cd ../../email-writer-react
npm install
npm start
```
The frontend will run on [http://localhost:3000](http://localhost:3000)

---

## 🌐 Deployment
- **Frontend:** Automatically deployed to Netlify on push to main branch.
- **Backend:** Automatically deployed to Render on push to main branch.

---

## 📄 Usage
1. Open the [live frontend](https://email-reply-generator-online.netlify.app/)
2. Enter your email content and select the desired tone
3. Click "Generate Reply"
4. Copy and use the AI-generated reply in your email client

---

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📬 Contact
- [GitHub](https://github.com/rajat1903)
- [Live Frontend](https://email-reply-generator-online.netlify.app/)
- [Live Backend](https://aierg2.onrender.com)

---

## 📝 License
This project is licensed under the MIT License.







