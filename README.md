# fullstack-auth-rolebased

```markdown
# 🔐 MERN Authentication System with Role-Based Access

A full-stack authentication system built using **React (Vite)**, **Node.js**, **Express**, and **MongoDB**. This project supports **user signup**, **login/logout**, **JWT-based authentication**, and **role-based access control** (User/Admin).

---

## 🚀 Tech Stack

- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: Node.js + Express
- **Database**: MongoDB + Mongoose
- **Authentication**: JWT + bcrypt + httpOnly Cookies

---

## ✅ Features

- 📝 Signup & Login with JWT token authentication
- 🔒 Role-based access (admin / user)
- 🍪 Secure cookie handling with `httpOnly` flags
- ⚙️ .env support for configuration
- 🔄 Persistent login with cookies
- 🧼 Clean code structure (MERN best practices)

---

## 📁 Folder Structure

```

auth-system/
├── client/               # React Frontend
│   ├── src/
│   │   ├── pages/        # Signup, Login, Dashboard
│   │   └── utils/api.js  # Axios config
├── server/               # Node Backend
│   ├── models/User.js
│   ├── routes/auth.js
│   ├── middleware/verifyRole.js
│   └── index.js
├── .env                  # Environment Variables
├── README.md

````

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone (https://github.com/PRITAMALWAR/fullstack-auth-rolebased.git)
cd fullstack-auth-rolebased
````

---

### 2. Setup Backend

```bash
cd server
npm install
```

Create a `.env` file inside `server`:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/authdbms
JWT_SECRET=your_jwt_secret_here
```

Start the backend server:

```bash
node index.js
```

---

### 3. Setup Frontend

```bash
cd ../client
npm install
npm run dev
```

---

## 🔐 API Endpoints

| Method | Endpoint      | Description                |
| ------ | ------------- | -------------------------- |
| POST   | `/signup`     | Register a new user        |
| POST   | `/login`      | Authenticate & get token   |
| POST   | `/logout`     | Logout (clear cookie)      |
| GET    | `/user-only`  | Protected (user/admin)     |
| GET    | `/admin-only` | Admin-only protected route |

---

## 🧑‍💻 Roles

* **Admin** → Can access everything
* **User** → Can access limited routes
* Role is assigned during signup

---

## 🔐 Auth Flow

* On login, JWT is issued and stored in an **httpOnly cookie**
* All protected routes check the token
* Role-based middleware blocks unauthorized access

---

## 🌐 Live Demo (Optional)

> 🔗 [https://your-frontend-url.netlify.app](#)
> 🔗 [https://your-backend-api.vercel.app](#)


## 🙌 Credits

Developed by [pritam](https://github.com/PRITAMALWAR/fullstack-auth-rolebased)

---

## 📜 License

This project is licensed under the [@pritam](LICENSE).

`
