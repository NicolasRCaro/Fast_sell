const cars = [
  {
    id: 'ferrari-488',
    brand: 'Ferrari',
    model: '488 GTB',
    year: 2019,
    hp: 660,
    price: 245000,
    img: '/Imagenes/Ferrari.jpg',
    description: 'Motor V8 biturbo, manejo excepcional y diseño icónico. Excelente estado y mantenimiento al día.'
  },
  {
    id: 'lamborghini-huracan',
    brand: 'Lamborghini',
    model: 'Huracán EVO',
    year: 2020,
    hp: 630,
    price: 210000,
    img: '/Imagenes/Lambo.jpg',
    description: 'Tracción integral, rendimiento en pista y apariencia agresiva. Ideal para coleccionistas.'
  },
  {
    id: 'porsche-911',
    brand: 'Porsche',
    model: '911 Carrera S',
    year: 2021,
    hp: 443,
    price: 138000,
    img: '/Imagenes/Porsche.jpg',
    description: 'Coupé clásico alemán, equilibrio entre confort diario y desempeño deportivo.'
  },
  {
    id: 'mclaren-720',
    brand: 'McLaren',
    model: '720S',
    year: 2018,
    hp: 710,
    price: 280000,
    img: '/Imagenes/McLaren.jpg',
    description: 'Arquitectura ligera, aerodinámica avanzada y aceleración brutal. Estado de pista preparado.'
  },
  {
    id: 'Toyota Supra MK4',
    brand: 'Toyota',
    model: 'Supra',
    year: 2000,
    hp: 320,
    price: 165000,
    img: '/Imagenes/Supra.jpg',
    description: 'Su historia no solo está llena de éxitos en el mundo de la velocidad, sino también de una presencia cultural icónica.'
  }
];

const formatPrice = (n) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
const grid = document.getElementById('grid');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.getElementById('closeModal');

function render(list) {
  grid.innerHTML = '';
  list.forEach(car => {
    const el = document.createElement('article');
    el.className = 'card';
    el.innerHTML = `
      <img src="${car.img}" alt="${car.brand} ${car.model}"/>
      <div class="meta">
        <div>
          <div class="model">${car.brand} ${car.model} <span class="muted">• ${car.year}</span></div>
          <div class="muted">${car.hp} HP</div>
        </div>
        <div style="text-align:right">
          <div class="price">${formatPrice(car.price)}</div>
        </div>
      </div>
    `;
    el.addEventListener('click', ()=> openModal(car));
    grid.appendChild(el);
  });
}

function openModal(car) {
  modal.setAttribute('aria-hidden','false');
  modalBody.innerHTML = `
    <img src="${car.img}" alt="${car.brand} ${car.model}"/>
    <h2>${car.brand} ${car.model} (${car.year})</h2>
    <p class="muted">${car.hp} HP · ${formatPrice(car.price)}</p>
    <p>${car.description}</p>
    <button id="buyBtn" class="buy-btn">Comprar ahora</button>
  `;

  // acción del botón de compra
  const buyBtn = document.getElementById('buyBtn');
  buyBtn.addEventListener('click', () => {
    alert(`Gracias por tu interés en el ${car.brand} ${car.model}. Nuestro equipo se pondrá en contacto contigo para finalizar la compra.`);
    closeTheModal();
  });
}

function closeTheModal() {
  modal.setAttribute('aria-hidden','true');
  modalBody.innerHTML = '';
}

closeModal.addEventListener('click', closeTheModal);
modal.addEventListener('click', (e)=>{ if(e.target === modal) closeTheModal(); });

render(cars);
document.getElementById('year').textContent = new Date().getFullYear();
