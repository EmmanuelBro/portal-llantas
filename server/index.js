import express from 'express';
import cors from 'cors';
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Mock Products Data (B2B Automotive/Tyre)
const products = [
  // Llantas de Carga / Industrial (Anterior)
  {
    id: 'TYRE-HVY-001',
    name: 'Neumático All-Terrain Ultra X',
    category: 'Llantas de Carga',
    price: 3450.00,
    unit: 'Pieza',
    image: '/tire_heavy_truck_v2.png',
    specs: ['Rango de Carga: H', 'Tracción: A', 'Temperatura: A', 'Índice de Carga: 121/118Q'],
    techSpecs: {
      width: '295',
      ratio: '80',
      construction: 'R',
      rim: '22.5',
      load: '152/148',
      speed: 'M (130 km/h)'
    },
    discountTiers: [{ min: 4, discount: '5%' }, { min: 20, discount: '15%' }],
    availability: { 'Querétaro': 150, 'Monterrey': 45 }
  },
  {
    id: 'TYRE-LUX-202',
    name: 'Continental PremiumContact 6',
    category: 'Auto Premium',
    price: 4200.00,
    unit: 'Pieza',
    image: '/tire_continental_v2.png',
    specs: ['SSR Runflat', 'Tecnología ContiSilent', 'Tracción: AA', 'Temperatura: A'],
    techSpecs: {
      width: '245',
      ratio: '40',
      construction: 'R',
      rim: '19',
      load: '98',
      speed: 'Y (300 km/h)'
    },
    discountTiers: [{ min: 4, discount: '8%' }, { min: 16, discount: '12%' }],
    availability: { 'CDMX': 80, 'Monterrey': 30 }
  },
  {
    id: 'TYRE-SPT-303',
    name: 'Michelin Pilot Sport 4S',
    category: 'Deportivas',
    price: 5800.00,
    unit: 'Pieza',
    image: '/tire_michelin_v2.png',
    specs: ['UHP (Ultra High Performance)', 'Velocidad: (Y)', 'Tracción: AA', 'Temperatura: A'],
    techSpecs: {
      width: '265',
      ratio: '35',
      construction: 'ZR',
      rim: '20',
      load: '99',
      speed: '(Y) (>300 km/h)'
    },
    discountTiers: [{ min: 4, discount: '10%' }, { min: 12, discount: '18%' }],
    availability: { 'CDMX': 40, 'Guadalajara': 25 }
  },
  {
    id: 'TYRE-SUV-404',
    name: 'BFGoodrich All-Terrain T/A KO2',
    category: 'Camioneta / SUV',
    price: 5250.00,
    unit: 'Pieza',
    image: '/tire_bfg_v2.png',
    specs: ['Tégnologia CoreGard', 'Tracción: A', 'Montaña Copo Nieve', 'Índice 121/118S'],
    techSpecs: {
      width: '265',
      ratio: '70',
      construction: 'R',
      rim: '17',
      load: '121/118',
      speed: 'S (180 km/h)'
    },
    discountTiers: [{ min: 4, discount: '5%' }, { min: 40, discount: '20%' }],
    availability: { 'Querétaro': 200, 'Tijuana': 65 }
  },
  {
    id: 'TYRE-VAN-505',
    name: 'Bridgestone Duravis R660',
    category: 'Flotillas / Van',
    price: 2850.00,
    unit: 'Pieza',
    image: '/tire_bridgestone_v2.png',
    specs: ['Alta Durabilidad Sidewall', 'Carga: C', 'Tracción: B', 'Kms: +60,000'],
    techSpecs: {
      width: '205',
      ratio: '65',
      construction: 'R',
      rim: '16',
      load: '107',
      speed: 'T (190 km/h)'
    },
    discountTiers: [{ min: 10, discount: '12%' }, { min: 50, discount: '25%' }],
    availability: { 'Villahermosa': 120, 'CDMX': 45 }
  },
  {
    id: 'TYRE-WNT-606',
    name: 'Pirelli Winter Sottozero 3',
    category: 'Invierno',
    price: 4950.00,
    unit: 'Pieza',
    image: '/tire_pirelli_v2.png',
    specs: ['Compuesto Térmico Especial', 'Laminillas 3D', 'Agarre en Hielo+', 'Vel: H'],
    techSpecs: {
      width: '225',
      ratio: '45',
      construction: 'R',
      rim: '18',
      load: '95',
      speed: 'V (240 km/h)'
    },
    discountTiers: [{ min: 4, discount: '15%' }],
    availability: { 'Chihuahua': 30, 'Toluca': 15 }
  },
  // Generics to reach 30
  ...Array.from({ length: 24 }).map((_, i) => {
    const nexenModels = [
      { name: "Nexen N'Fera Sport UHP", image: '/tire_nexen_sport.png', category: 'Auto Premium', basePrice: 2800 },
      { name: "Nexen Roadian GTX SUV", image: '/tire_nexen_suv.png', category: 'Camioneta / SUV', basePrice: 3100 },
      { name: "Nexen Roadian MTX Mud Terrain", image: '/tire_nexen_at.png', category: 'Todo Terreno', basePrice: 4200 },
      { name: "Nexen Winguard Winspike Winter", image: '/tire_nexen_winter.png', category: 'Invierno', basePrice: 2950 }
    ];
    const model = nexenModels[i % 4];

    return {
      id: `TYRE-NEX-${700 + i}`,
      name: `${model.name} Series ${Math.floor(i / 4) + 1}`,
      category: model.category,
      price: model.basePrice + (i * 20),
      unit: 'Pieza',
      image: model.image,
      specs: [`Medida: 2${i % 9}5/65R1${i % 5 + 6}`, 'Tracción: A', 'Temperatura: B'],
      techSpecs: {
        width: `2${i % 9}5`,
        ratio: '65',
        construction: 'R',
        rim: `1${i % 5 + 6}`,
        load: `${90 + i}`,
        speed: 'H (210 km/h)'
      },
      discountTiers: [{ min: 4, discount: '5%' }, { min: 20, discount: '10%' }],
      availability: { 'Querétaro': 20 + i, 'CDMX': 10 + i }
    };
  })
];

// Mock AD Authentication
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  if ((username === 'ebriseno@axtel.com.mx' && password === 'admin123') || (username === 'admin' && password === 'admin')) {
    res.json({
      success: true,
      token: 'mock-jwt-token-ad-sso',
      user: {
        name: 'Usuario30891',
        role: 'Compras Corporativas',
        email: 'ebriseno@axtel.com.mx',
        creditLimit: 500000,
        balance: 125400
      }
    });
  } else {
    res.status(401).json({ success: false, message: 'El nombre de usuario o la contraseña son incorrectos.' });
  }
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`B2B Backend running on http://localhost:${PORT}`);
});
