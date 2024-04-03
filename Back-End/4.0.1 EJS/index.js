import express from "express";

const app = express();
const port = 4400;


app.get("/", (req, res) => {
    const d = new Date('2024 04 13');
    let day = d.getDay();

    let ans = '';
    if (day < 6) {
        ans = "weekday, time to work hard!"
    } else {
    
        ans = "weekend, time to have fun!"
    }

    res.render("index.ejs",
        {
            ans: ans,
        }
    )
})

app.get("/test", (req, res) => {
    res.send("<h1>Test</h1>")
})

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

