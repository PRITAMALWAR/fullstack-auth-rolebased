Absolutely! Here's a **simple, clean, and sweet** version of your README — easy to read and straight to the point:

---

````markdown
# 🔐 Fullstack Role-Based Authentication (MERN)

A simple and secure authentication system built with **React (Vite)**, **Node.js**, **Express**, and **MongoDB**. Includes **JWT auth**, **httpOnly cookies**, and **role-based access (User/Admin)**.

---

## 🚀 Tech Stack

- **Frontend**: React + Vite + Tailwind CSS  
- **Backend**: Node.js + Express  
- **Database**: MongoDB + Mongoose  
- **Auth**: JWT + bcrypt + httpOnly cookies

---

## ✅ Features

- 📝 Signup & Login
- 🔐 Role-based Access (User / Admin)
- 🍪 Secure Cookies for Auth
- 🔄 Persistent Login
- ⚙️ Easy `.env` config

---

## 📁 Project Structure

```bash
auth-system/
├── client/      # React app
├── server/      # Node.js backend
└── .env         # Config file
````

---

## 🛠️ Setup

### Backend

```bash
cd server
npm install

# .env file
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

node index.js
```

### Frontend

```bash
cd client
npm install
npm run dev
```

---

## 🔐 API Endpoints

| Method | Endpoint      | Access        |
| ------ | ------------- | ------------- |
| POST   | `/signup`     | Public        |
| POST   | `/login`      | Public        |
| POST   | `/logout`     | Authenticated |
| GET    | `/user-only`  | User/Admin    |
| GET    | `/admin-only` | Admin Only    |

---

## 👤 Roles

* **Admin** → Full access
* **User** → Limited access

---

## 🙌 Author

[**PRITAMALWAR**](https://github.com/PRITAMALWAR)

---

## 📄 License

MIT License

```

---

Let me know if you want this in a downloadable file or with some visuals like badges or screenshots — happy to help!
```
