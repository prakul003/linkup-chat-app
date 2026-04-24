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

1. <img width="1919" height="1013" alt="Screenshot 2026-04-24 194855" src="https://github.com/user-attachments/assets/585d9890-f48b-4479-a127-a2dd8e603b6b" />

   Shows the username input prompt when a user opens the chat application.

2. <img width="1919" height="1015" alt="Screenshot 2026-04-24 194952" src="https://github.com/user-attachments/assets/67f45d58-0925-4398-9260-171270fe7127" />

   Shows User A sending messages in real time with right-side message alignment.

3. <img width="1919" height="1009" alt="Screenshot 2026-04-24 195010" src="https://github.com/user-attachments/assets/237b35e8-8704-47a6-b6d4-11e798a40989" />

   Shows User B receiving messages instantly with left-side message alignment.

⚡ How It Works

* User enters username
* Client connects to server using Socket.IO
* Messages are sent to server
* Server broadcasts messages to all connected users
* Users receive messages instantly

👨‍💻 Author

Prakul Dobriyal
