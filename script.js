const tombol = document.querySelector("#themeBtn");
const kartu = document.querySelector(".card");
const body = document.body;

const tema = [
    {
        bg: "linear-gradient(135deg, #667eea, #764ba2)",
        card: "#ffffff",
        button: "linear-gradient(135deg, #667eea, #764ba2)",
        shadow: "0 10px 20px rgba(102,126,234,0.5)"
    },
    {
        bg: "linear-gradient(135deg, #ffecd2, #fcb69f)",
        card: "#fff8e1",
        button: "linear-gradient(135deg, #ffb347, #ffcc33)",
        shadow: "0 10px 20px rgba(255,179,71,0.5)"
    },
    {
        bg: "linear-gradient(135deg, #c8e6c9, #81c784)",
        card: "#e8f5e9",
        button: "linear-gradient(135deg, #66bb6a, #43a047)",
        shadow: "0 10px 20px rgba(67,160,71,0.5)"
    },
    {
        bg: "linear-gradient(135deg, #bbdefb, #64b5f6)",
        card: "#e3f2fd",
        button: "linear-gradient(135deg, #42a5f5, #1e88e5)",
        shadow: "0 10px 20px rgba(30,136,229,0.5)"
    },
    {
        bg: "linear-gradient(135deg, #f8bbd0, #f06292)",
        card: "#fce4ec",
        button: "linear-gradient(135deg, #ec407a, #d81b60)",
        shadow: "0 10px 20px rgba(216,27,96,0.5)"
    }
];

let index = 0;

tombol.addEventListener("click", () => {
    index = (index + 1) % tema.length;

    body.style.background = tema[index].bg;
    kartu.style.backgroundColor = tema[index].card;

    tombol.style.background = tema[index].button;
    tombol.style.boxShadow = tema[index].shadow;
});