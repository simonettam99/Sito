// Lista prodotti
const prodotti = [
    {nome: "Tazza Personalizzata", prezzo: "15€", img: "img/body.jpeg"},
    {nome: "Maglietta Personalizzata", prezzo: "25€", img: "img/maglietta.jpeg"},
    {nome: "Portachiavi Personalizzato", prezzo: "10€", img: "img/bavetta.jpeg"}
];

// Inserire prodotti nella pagina
const container = document.querySelector(".prodotti-container");
prodotti.forEach(prod => {
    const card = document.createElement("div");
    card.classList.add("prodotto-card");
    card.innerHTML = `
        <img src="${prod.img}" alt="${prod.nome}">
        <h3>${prod.nome}</h3>
        <p>Prezzo: ${prod.prezzo}</p>
    `;
    container.appendChild(card);
});

// Popolare select nel modulo
const selectProdotto = document.getElementById("prodotto");
prodotti.forEach(prod => {
    const option = document.createElement("option");
    option.value = prod.nome;
    option.textContent = `${prod.nome} - ${prod.prezzo}`;
    selectProdotto.appendChild(option);
});

// Gestione form con invio email tramite EmailJS
document.getElementById("ordine-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Inserisci qui integrazione con EmailJS o Formspree
    document.getElementById("success-message").style.display = "block";
    this.reset();
});
