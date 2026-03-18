module.exports = async function (context, req) {
  context.res = {
    headers: { 'Content-Type': 'application/json' }
  };

  try {
    // Mock Products Data (B2B Automotive/Tyre)
    const products = [
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
      ...Array.from({ length: 24 }).map((_, i) => {
        const imgIndex = i % 6;
        const images = [
          '/tire_michelin_v2.png',
          '/tire_continental_v2.png',
          '/tire_bridgestone_v2.png',
          '/tire_pirelli_v2.png',
          '/tire_bfg_v2.png',
          '/tire_heavy_truck_v2.png'
        ];
        return {
          id: `TYRE-GEN-${700 + i}`,
          name: `Llantas Nexen Roadian HTX RH5 Series ${i + 1}`,
          category: i % 2 === 0 ? 'Camioneta / SUV' : 'Auto Premium',
          price: 2100.00 + (i * 150),
          unit: 'Pieza',
          image: '/tire_nexen_v2.png',
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

    context.res.status = 200;
    context.res.body = products;
  } catch (error) {
    context.res.status = 500;
    context.res.body = {
      error: 'Error fetching products'
    };
  }
};
