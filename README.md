# 🎓 ACM Student Chapter Management Information System

RUB-ACM-MIS is a web-based platform built to streamline the management of the ACM Student Chapter at the College of Science and Technology. This project was developed as a team project to support activities like member registration, event management, and report generation.

---

## 📌 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [System Pages (with screenshots)](#system-pages)
- [Setup Instructions](#setup-instructions)
- [Team Members](#team-members)
- [License](#license)

---

## 🧾 About the Project

This system was built to address common administrative challenges faced by ACM student chapters office bearers. It allows chapter leaders to manage members, organize events, record participation, and manage the chapter's finances.

---

## ✅ Features

- Student and admin login systems
- Member registration and management
- Event creation, tracking, and attendance
- Income and Expense Tracking
- Dashboard for analytics and chapter overview

---

## 💻 Tech Stack

- **Frontend**: Next.JS
- **Backend**: Next.JS
- **Database**: MongoDB
- **Other Tools**: Git (Version Control), GitHub (Collaboration), Figma (Design)

---

## 🧭 System Pages

> You can insert screenshots or diagrams under each section by adding image files to a `/screenshots` folder and using markdown like:
> `![Alt Text](screenshots/login_page.png)`

### 🔐 Login Page

Simple login form for admins and student members.
![Login Page](/public/screenshots/login_page.png)

---

### 🏠 Dashboard

Admin dashboard showing key statistics like total members, upcoming events, and activities.
![Dashboard](/public/screenshots/dashboard_page.png)

---

### 📋 Member Management

Add, view, edit, and delete student members with full search and filter capabilities.
![Member Management](/public/screenshots/member_management.png)

---

### 📅 Event Management

Create and manage events with attendee tracking
![Event Page](/public/screenshots/event_management.png)

---

### 🛎️ Announcement Management

Create and manage announcement
![Announcement Page](/public/screenshots/announcement.png)

---

### 📊 Reports

Generate annual or custom reports for attendance, members, and finance activities.
![Finance Report](/public/screenshots/finance.png)
![Attendance Report](/public/screenshots/attendance.png)

---

## 🛠️ Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/JigmePwangyel/RUB-ACM-MIS.git
cd acm-mis
```

2. Install Packagaes

```bash
npm i
```

3. Setup Environment Variables
   Create a .env.local file in the root directory and add the following:

```
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000

```

4. Run the application

```bash
npm run dev
```

## 👨‍💻 Team Members

- Jigme Phuntsho Wangyel (https://github.com/JigmePwangyel)
- Suzal Wakhley (https://github.com/suzWaks)
- Tashi Kuenga Phuntsho (https://github.com/TashiKP)
- Pema Lhamo (https://github.com/peeymaa2020)
- Depashna Pradhan (https://github.com/dhulpari)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---
