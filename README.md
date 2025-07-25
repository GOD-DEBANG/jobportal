# JobPortal

A professional job portal application built with JavaScript (Node.js and Express) and MongoDB. This repository provides a scalable backend for job postings, applications, user management, and company profiles. It is designed to power modern recruitment platforms, job search engines, or internal hiring dashboards.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Highlights](#api-highlights)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **User Authentication:** Secure registration and login with password hashing and JWT-based sessions.
- **User Profiles:** Users can update profiles, upload resumes, and manage experience, education, and skills.
- **Roles:** Support for user and admin roles with access control.
- **Job Postings:** Companies can post jobs with details such as title, description, salary, employment type, requirements, responsibilities, and skills.
- **Applications:** Users can apply to jobs by submitting resumes and cover letters. Track status (Applied, Interviewing, Offered, Rejected).
- **Company Profiles:** Companies have profiles including name, description, logo, website, industry, and employee list.
- **Statistics:** Track the number of applicants per job and employee counts for companies.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Authentication:** JWT, bcrypt
- **Other:** dotenv, cookie-parser, cors

## Getting Started

### Prerequisites

- Node.js >= 14.x
- MongoDB database (local or cloud)
- npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/GOD-DEBANG/jobportal.git
   cd jobportal/backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in `backend/` with:
   ```
   PORT=3000
   MONGO_URI=your_mongo_connection_string
   SECRET_KEY=your_jwt_secret
   NODE_ENV=development
   ```

4. **Run the server:**
   ```bash
   npm start
   ```
   The backend server will start on `http://localhost:3000`.

## Project Structure

```
backend/
│
├── models/
│   ├── user.model.js
│   ├── job.model.js
│   ├── company.model.js
│   └── application.model.js
│
├── controller/
│   └── user.controller.js
│
├── utils/
│   └── db.js
│
├── index.js
└── ...
```

## API Highlights

### User Endpoints

- `POST /register` — Register new user
- `POST /login` — Login and receive JWT token
- `POST /logout` — Logout
- `PUT /profile/:userId` — Update user profile
- `GET /profile/:userId` — Get user profile

### Job Endpoints

- `POST /jobs` — Create job posting
- `GET /jobs` — List jobs
- `GET /jobs/:id` — Get job details
- `POST /jobs/:id/apply` — Apply to a job

### Company Endpoints

- `POST /companies` — Create company profile
- `GET /companies` — List companies

### Application Endpoints

- `GET /applications/:userId` — Get applications for a user

> For full API details, see the controller and model files in the `backend/` folder.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for review.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is currently not licensed. You may use or modify it as you wish. Please contact the repository owner for more information.

---

**Author:** [GOD-DEBANG](https://github.com/GOD-DEBANG)
