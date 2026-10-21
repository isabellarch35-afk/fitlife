const linkDoBot = "https://landbot.online/v3/H-3536646-QXL2W5I3EXBK0J0J/index.html";

const botoes = [
    document.getElementById("botaoChat"),
    document.getElementById("botaoChatFinal")
];

botoes.forEach(function(botao) {
    if (botao) {
        botao.addEventListener("click", function() {
            window.open(linkDoBot, "_blank");
        });
    }
});