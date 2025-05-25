**Fullstack Role-Based Authentication App** 

---

````markdown
# 🔐 Fullstack MERN Authentication System with Role-Based Access

A complete authentication system built using the **MERN stack** — supporting **user registration**, **JWT-based login/logout**, and **role-based access control**. Built with **React (Vite)**, **Node.js**, **Express**, and **MongoDB**, this project follows clean and scalable coding practices.

---

## 🚀 Tech Stack

> Modern tools & frameworks used

- **Frontend**: React (Vite) + Tailwind CSS
- **Backend**: Node.js + Express
- **Database**: MongoDB + Mongoose
- **Auth & Security**: JWT, bcrypt, httpOnly cookies

---

## ✅ Key Features

- 📝 **User Registration & Login** with JWT
- 🔐 **Role-based Access Control** (User / Admin)
- 🍪 **Secure Authentication** using `httpOnly` cookies
- 🔄 **Persistent Login** via token-based sessions
- ⚙️ Environment-based config with `.env` support
- 🧼 **Clean Project Structure** following MERN best practices

---

## 📁 Project Structure

```bash
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

## 🛠️ Getting Started

### 📥 1. Clone the Repository

```bash
git clone https://github.com/PRITAMALWAR/fullstack-auth-rolebased.git
cd fullstack-auth-rolebased
```

---

### 🔧 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the `server/` directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/authdbms
JWT_SECRET=your_jwt_secret_here
```

Then run the backend:

```bash
node index.js
```

---

### 🌐 3. Frontend Setup

```bash
cd ../client
npm install
npm run dev
```

Frontend will be running on: `http://localhost:5173`

---

## 📡 API Endpoints

| Method | Endpoint      | Description                  |
| ------ | ------------- | ---------------------------- |
| POST   | `/signup`     | Register a new user          |
| POST   | `/login`      | Authenticate & receive token |
| POST   | `/logout`     | Clear auth token (logout)    |
| GET    | `/user-only`  | Protected route (User/Admin) |
| GET    | `/admin-only` | Admin-only protected route   |

---

## 🧑‍💼 Roles & Permissions

| Role  | Access Level                        |
| ----- | ----------------------------------- |
| Admin | 🔓 Full access to all routes        |
| User  | 🔒 Limited access (user-only route) |

> 🛂 Roles are automatically assigned during signup.

---

## 🔐 Authentication Flow

1. User logs in → JWT is issued & stored in `httpOnly` cookie.
2. Protected routes validate the JWT from the cookie.
3. Middleware ensures role-based access before proceeding.

---

## 🌍 Live Demo *(optional)*

> 🌐 Frontend: [https://your-frontend-url.netlify.app](#)
> 🔗 Backend: [https://your-backend-api.vercel.app](#)

---

## 🙌 Acknowledgements

Developed by [**PRITAMALWAR**](https://github.com/PRITAMALWAR/fullstack-auth-rolebased)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

```

---


```
