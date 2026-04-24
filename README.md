# LinkUp 💬

A real-time chat application built using Node.js, Express.js, and Socket.IO.

LinkUp allows multiple users to send and receive messages instantly with a clean modern interface.

🚀 Features

* Real-time messaging
* Multi-user chat support
* Username-based chat
* Left / Right message bubbles
* Clean and responsive UI
* Instant updates without page refresh

🛠️ Tech Stack

* Node.js
* Express.js
* Socket.IO
* HTML
* CSS
* JavaScript

📂 Project Structure

```text
LinkUp/
│── server.js
│── package.json
│── package-lock.json
│── .gitignore
└── public/
    │── index.html
    │── style.css
    └── script.js
```

⚙️ Installation & Run

1. Clone the repository

https://github.com/prakul003/linkup-chat-app.git

2. Open project folder

```bash
cd linkup-chat-app
```

3. Install dependencies

```bash
npm install
```

4. Start server

```bash
node server.js
```

5. Open browser

http://localhost:3000

📸 Screenshots

1. <img width="1919" height="1016" alt="01-login-username png" src="https://github.com/user-attachments/assets/adeb9d0c-2d2e-49a8-be3a-de1a650938ef" />

   Shows the username input prompt when a user opens the chat application.

2. <img width="1919" height="1016" alt="02-user-a-chat png" src="https://github.com/user-attachments/assets/e07d0fa5-c500-41a8-82d2-9f342780fd6d" />

   Shows User A sending messages in real time with right-side message alignment.

3. <img width="1919" height="1017" alt="03-user-b-chat png" src="https://github.com/user-attachments/assets/e253d52b-a051-4107-8b5c-b32a7feed226" />

   Shows User B receiving messages instantly with left-side message alignment.

⚡ How It Works

* User enters username
* Client connects to server using Socket.IO
* Messages are sent to server
* Server broadcasts messages to all connected users
* Users receive messages instantly

👨‍💻 Author

Prakul Dobriyal
