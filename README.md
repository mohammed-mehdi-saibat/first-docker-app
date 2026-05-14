# 🐳 My First Docker App

> A simple Node.js web app containerized with Docker — my first dive into the world of containers!

![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📌 What is this?

This is a beginner-friendly project that demonstrates how to:

- Build a minimal Node.js web server **from scratch** (no frameworks)
- Serve an HTML page with an interactive button
- **Containerize** the app using Docker
- Run it anywhere with a single command

---

## 🚀 Live Demo

Click the button → get a response from the server. Simple, but it's running inside a **Docker container**. 🎉

---

## 🗂️ Project Structure

```
my-first-docker-app/
├── index.js        # Node.js HTTP server
├── index.html      # Frontend with the button
├── package.json    # Project metadata
├── Dockerfile      # Instructions to build the Docker image
└── .gitignore
```

---

## 🐳 Docker Concepts Used

| Concept               | What it does                                           |
| --------------------- | ------------------------------------------------------ |
| `Dockerfile`          | A recipe that tells Docker how to build your app image |
| `FROM node:18-alpine` | Starts from a lightweight Node.js base image           |
| `WORKDIR`             | Sets the working directory inside the container        |
| `COPY`                | Copies your files into the container                   |
| `EXPOSE`              | Documents which port the app listens on                |
| `docker build`        | Packages your app into a reusable image                |
| `docker run -p`       | Runs the container and maps a port to your machine     |

---

## ⚙️ Getting Started

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/my-first-docker-app.git
cd my-first-docker-app
```

### 2. Build the Docker image

```bash
docker build -t my-first-docker-app .
```

### 3. Run the container

```bash
docker run -p 3000:3000 my-first-docker-app
```

### 4. Open in your browser

```
http://localhost:3000
```

Click the button and watch the magic happen! ✨

### 5. Stop the container

Press `Ctrl+C` in the terminal.

---

## 🧠 What I Learned

- How Docker **isolates** an app from the host machine
- The difference between a Docker **image** (blueprint) and a **container** (running instance)
- How to write a `Dockerfile` step by step
- How **port mapping** works with `-p host:container`
- Why Docker makes apps easy to share — _"it works on my machine"_ is no longer an excuse 😄

---

## 📚 Resources

- [Docker Getting Started Guide](https://docs.docker.com/get-started/)
- [Node.js HTTP module docs](https://nodejs.org/api/http.html)
- [Dockerfile reference](https://docs.docker.com/engine/reference/builder/)

---

## 👤 Author

**kuklinski** — learning Docker one container at a time 🐳

---

> ⭐ If you found this helpful, feel free to star the repo!
