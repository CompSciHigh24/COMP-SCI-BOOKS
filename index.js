const ejs = require("ejs");
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method}: ${req.path}`);
  next();
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});

app.get("/books", (req, res) => {
  const data = {
    books: [
      {
        name: "The Fire Next Time ",
        author: "James Baldwin",
        cover_pic:
          "https://m.media-amazon.com/images/I/91IevsDY-iL._AC_UF1000,1000_QL80_.jpg",
        summary:
          "The Fire Next Time by James Baldwin is a powerful exploration of race and religion in America. Baldwin shares his personal experiences and calls for an end to racial injustice, offering a thought-provoking perspective on the urgent need for change.",
        teacher: "Mr.Brooks",
      },
      {
        name: "Looking for Alaska ",
        author: "John Green",
        cover_pic: "",
        summary:
          "A new student arrives to a boarding school and meets a young girl named Alaska. During his time getting to know and understand her he slowly falls in love with her. But through his time with her, he finds out that her life isn't as perfect as he thought.",
        teacher: "Mr.Brooks",
      },

      {
        name: "Honor Girl",
        author: "Maggie Thrash ",
        cover_pic:
          "https://m.media-amazon.com/images/I/714P-vGWZiL._AC_UF1000,1000_QL80_.jpg",
        summary:
          "Honor Girl was first published in 2015 and was a Los Angeles Times Book Prize Finalist. This is a non-fiction book, based on true events and is presented as a graphic novel. It is about a girl discovering her sexual attraction to another, older girl at summer camp.",
        teacher: "Mr.Ryan",
      },
      {
        name: "They Can't Kill Us Until They Kill Us ",
        author: "Hanif Abdurraqib",
        cover_pic:
          "https://m.media-amazon.com/images/I/81uox57RYNL._AC_UF350,350_QL50_.jpg",
        summary:
          "They Can't Kill Us Until They Kill Us critiques our culture and politics through the lens of music. Lyrical but poignant, Abdurraqib's essays make sharp observations about current events and pop culture as well as his experiences being black and Muslim in the US.",
        teacher: "Mr.Brooks",
      },
    ],
  };
  res.render("books.ejs", data);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
