const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("dotenv").config();

const indexRouter = require("./routes/index");
const profileRouter = require("./routes/profile");
const candidateRouter = require("./routes/candidate");
const messageRouter = require("./routes/message");
const chatroomRouter = require("./routes/chatroom");

const app = require("express")();
const http = require("http").createServer(app);
// const io = require("socket.io")(http);
const cors = require("cors");
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
// app.use("/api", profileRouter);
// app.use("/api", candidateRouter);
// app.use("/api", messageRouter);
// app.use("/api", chatroomRouter);

// io.on("connection", (socket) => {
//   socket.on("login", ({ name, room }, callback) => {
//     const { user, error } = addUser(socket.id, name, room);
//     if (error) return callback(error);
//     socket.join(user.room);
//     socket
//       .in(room)
//       .emit("notification", {
//         title: "Someone's here",
//         description: `${user.name} just entered the room`,
//       });
//     io.in(room).emit("users", getUsers(room));
//     callback();
//   });

//   socket.on("sendMessage", (message) => {
//     const user = getUser(socket.id);
//     io.in(user.room).emit("message", { user: user.name, text: message });
//   });

//   socket.on("disconnect", () => {
//     const user = deleteUser(socket.id);
//     if (user) {
//       io.in(user.room).emit("notification", {
//         title: "Someone just left",
//         description: `${user.name} just left the room`,
//       });
//       io.in(user.room).emit("users", getUsers(user.room));
//     }
//   });

//   socket.on("logout", () => {
//     const user = deleteUser(socket.id);
//     if (user) {
//       io.in(user.room).emit("notification", {
//         title: "Someone just left",
//         description: `${user.name} just left the room`,
//       });
//       io.in(user.room).emit("users", getUsers(user.room));
//     }
//   });
// });

app.get("/", (req, res) => {
  res.send("Server is up and running");
});

http.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});