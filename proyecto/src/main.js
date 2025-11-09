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
  },
  {
    id: 'nissan-gtr-r35',
    brand: 'Nissan',
    model: 'GT-R R35',
    year: 2019,
    hp: 565,
    price: 115000,
    img: '/Imagenes/GTR.jpg',
    description: 'Uno de los deportivos japoneses más emblemáticos, con tracción total y aceleración explosiva.'
  },
  {
    id: 'audi-r8-v10',
    brand: 'Audi',
    model: 'R8 V10 Plus',
    year: 2020,
    hp: 602,
    price: 190000,
    img: '/Imagenes/Audi.jpg',
    description: 'Superdeportivo alemán con un V10 atmosférico único en su clase y manejo impecable.'
  },
  {
    id: 'bmw-m4-g82',
    brand: 'BMW',
    model: 'M4 Competition',
    year: 2022,
    hp: 503,
    price: 89000,
    img: '/Imagenes/BMW.jpg',
    description: 'Coupé de alto rendimiento con diseño moderno y prestaciones agresivas.'
  },
  {
    id: 'mercedes-amg-gt',
    brand: 'Mercedes-AMG',
    model: 'GT R',
    year: 2018,
    hp: 577,
    price: 132000,
    img: '/Imagenes/AMG.jpg',
    description: 'Diseño largo y agresivo, pensado para la pista con ingeniería alemana de precisión.'
  },
  {
    id: 'chevrolet-corvette-c8',
    brand: 'Chevrolet',
    model: 'Corvette C8',
    year: 2021,
    hp: 495,
    price: 72000,
    img: '/Imagenes/C8.jpeg',
    description: 'Motor central por primera vez en Corvette, rendimiento increíble a un precio competitivo.'
  },
  {
    id: 'ford-mustang-gt500',
    brand: 'Ford',
    model: 'Shelby GT500',
    year: 2020,
    hp: 760,
    price: 95000,
    img: '/Imagenes/Ford.jpg',
    description: 'Muscle car extremo con supercargador y un rugido inconfundible.'
  },
  {
    id: 'dodge-challenger-demon',
    brand: 'Dodge',
    model: 'Challenger SRT Demon',
    year: 2018,
    hp: 840,
    price: 130000,
    img: '/Imagenes/Dodge.jpg',
    description: 'Uno de los autos de producción más potentes para drag racing.'
  },
  {
    id: 'aston-martin-vantage',
    brand: 'Aston Martin',
    model: 'Vantage',
    year: 2019,
    hp: 503,
    price: 150000,
    img: '/Imagenes/Vantage.jpg',
    description: 'Lujo británico con un estilo elegante y motor AMG V8 biturbo.'
  },
  {
    id: 'jaguar-f-type-r',
    brand: 'Jaguar',
    model: 'F-Type R',
    year: 2020,
    hp: 575,
    price: 112000,
    img: '/Imagenes/Jaguar.jpg',
    description: 'Diseño exquisito y un V8 con sonido único.'
  },
  {
    id: 'lotus-evora-gt',
    brand: 'Lotus',
    model: 'Evora GT',
    year: 2021,
    hp: 416,
    price: 120000,
    img: '/Imagenes/Lotus.jpg',
    description: 'Ligero y ágil, un verdadero auto enfocado en el manejo puro.'
  },
  {
    id: 'bugatti-chiron',
    brand: 'Bugatti',
    model: 'Chiron',
    year: 2019,
    hp: 1500,
    price: 3000000,
    img: '/Imagenes/Chiron.jpg',
    description: 'Exclusividad absoluta con rendimiento que supera cualquier estándar.'
  },
  {
    id: 'koenigsegg-jesko',
    brand: 'Koenigsegg',
    model: 'Jesko',
    year: 2021,
    hp: 1600,
    price: 2800000,
    img: '/Imagenes/Jesko.jpg',
    description: 'Ingeniería extrema con récords de velocidad en mente.'
  },
  {
    id: 'pagani-huayra',
    brand: 'Pagani',
    model: 'Huayra',
    year: 2017,
    hp: 730,
    price: 2400000,
    img: '/Imagenes/Huayra.jpg',
    description: 'Artesanía italiana con materiales exóticos y diseño incomparable.'
  },
  {
    id: 'maserati-mc20',
    brand: 'Maserati',
    model: 'MC20',
    year: 2022,
    hp: 621,
    price: 210000,
    img: '/Imagenes/MC20.jpg',
    description: 'El renacimiento deportivo de Maserati con tecnología de punta.'
  },
  {
    id: 'lexus-lfa',
    brand: 'Lexus',
    model: 'LFA',
    year: 2012,
    hp: 552,
    price: 850000,
    img: '/Imagenes/LFA.jpeg',
    description: 'Uno de los mejores motores V10 jamás creados, con producción limitada.'
  },
  {
    id: 'subaru-wrx-sti',
    brand: 'Subaru',
    model: 'WRX STI',
    year: 2019,
    hp: 310,
    price: 45000,
    img: '/Imagenes/Subaru.jpg',
    description: 'Tracción total y espíritu rally, ideal para conducción deportiva diaria.'
  },
  {
    id: 'mazda-rx7-fd',
    brand: 'Mazda',
    model: 'RX-7 FD',
    year: 1997,
    hp: 276,
    price: 90000,
    img: '/Imagenes/Mazda.jpg',
    description: 'Motor rotativo icónico y uno de los JDM más queridos de la historia.'
  },
  {
    id: 'honda-nsx',
    brand: 'Honda',
    model: 'NSX',
    year: 1998,
    hp: 290,
    price: 140000,
    img: '/Imagenes/NSX.jpg',
    description: 'Supercar japonés con alma pura y manejo sublime.'
  },
  {
    id: 'tesla-roadster',
    brand: 'Tesla',
    model: 'Roadster',
    year: 2023,
    hp: 1000,
    price: 200000,
    img: '/Imagenes/tesla.jpg',
    description: 'Aceleración eléctrica extrema y diseño futurista.'
  },
  {
    id: 'rimac-nevera',
    brand: 'Rimac',
    model: 'Nevera',
    year: 2022,
    hp: 1914,
    price: 2200000,
    img: '/Imagenes/Nevera.jpg',
    description: 'Superdeportivo eléctrico que rompe récords en todos los sentidos.'
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
