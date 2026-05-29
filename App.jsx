export default function App() {
  const cars = [
    {
      name: 'Nissan GT‑R',
      power: '565 HP',
      image:
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Porsche 911 Turbo S',
      power: '640 HP',
      image:
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Lamborghini Huracán',
      power: '602 HP',
      image:
        'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  return (
    <div>
      <header className="hero">
        <div className="overlay">
          <h1>DREAM CARS</h1>
          <p>Сайт про лучшие спортивные автомобили мира</p>
          <a href="#cars">Смотреть машины</a>
        </div>
      </header>

      <section id="cars" className="cars">
        <h2>Популярные спорткары</h2>

        <div className="grid">
          {cars.map((car, index) => (
            <div className="card" key={index}>
              <img src={car.image} alt={car.name} />
              <div className="card-content">
                <h3>{car.name}</h3>
                <p>{car.power}</p>
                <button>Подробнее</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer>
        © 2026 Dream Cars
      </footer>
    </div>
  )
}
