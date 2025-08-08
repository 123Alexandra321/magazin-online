const produse = [
  { id: 1, nume: "Tricou", pret: 50 },
  { id: 2, nume: "Blugi", pret: 120 },
  { id: 3, nume: "Șapcă", pret: 35 },
  { id: 4, nume: "Pantofi", pret: 200 }
];

const cos = [];
let total = 0;

function afiseazaProduse() {
  const container = document.getElementById("produse");
  produse.forEach(prod => {
    const div = document.createElement("div");
    div.className = "produs";
    div.innerHTML = `
      <h3>${prod.nume}</h3>
      <p>${prod.pret} lei</p>
      <button onclick="adaugaInCos(${prod.id})">Adaugă în coș</button>
    `;
    container.appendChild(div);
  });
}

function adaugaInCos(id) {
  const produs = produse.find(p => p.id === id);
  cos.push(produs);
  total += produs.pret;
  actualizeazaCos();
}

function actualizeazaCos() {
  const lista = document.getElementById("cos");
  lista.innerHTML = "";
  cos.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.nume} - ${p.pret} lei`;
    lista.appendChild(li);
  });
  document.getElementById("total").textContent = `Total: ${total} lei`;
}

afiseazaProduse();

