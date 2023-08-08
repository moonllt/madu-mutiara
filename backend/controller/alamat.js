const express = require('express');
const axios = require('axios');
const router = express.Router();
// const { Province, City } = require('../model/rajaongkir');

router.get('/provinces', async (req, res) => {
  try {
    const response = await axios.get('https://api.rajaongkir.com/starter/province', {
      headers: {
        key: '6dbb5e3430fcd86f560c7850606558ea', // Replace 'Your-RajaOngkir-API-Key' with your actual API key
      },
    });
    const provinces = response.data.rajaongkir.results;
    res.json(provinces);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan saat mengambil daftar provinsi.' });
  }
});


router.get('/cities/:provinceId', async (req, res) => {
  try {
    const { provinceId } = req.params;
    const response = await axios.get(`https://api.rajaongkir.com/starter/city?province=${provinceId}`, {
      headers: {
        key: '6dbb5e3430fcd86f560c7850606558ea',
      },
    });
    const cities = response.data.rajaongkir.results;
    res.json(cities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan saat mengambil daftar kota.' });
  }
});

// // Endpoint untuk menghitung ongkos kirim
// app.post('/shipping-cost', async (req, res) => {
//   try {
//     // Ambil data dari permintaan POST yang dikirimkan oleh frontend
//     const { origin, destination, weight } = req.body;

//     // Panggil API RajaOngkir untuk menghitung ongkos kirim
//     const response = await axios.post('https://api.rajaongkir.com/starter/cost', {
//       origin,
//       destination,
//       weight,
//       courier: 'jne' // Ganti dengan kurir yang Anda inginkan
//     }, {
//       headers: {
//         'Content-Type': 'application/json',
//         'key': '5318b58653673b45a3c46d261c2426c2' // Ganti dengan API key RajaOngkir Anda
//       }
//     });

//     // Mengirimkan data ongkos kirim sebagai respons ke frontend
//     res.json(response.data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });



// Buat endpoint untuk menghitung estimasi harga ongkir
router.post('/shipping-cost', async (req, res) => {
  try {
    const { origin, destination, weight } = req.body;
    const response = await axios.post(
      'https://api.rajaongkir.com/starter/cost',
      {
        origin,
        destination,
        weight,
        courier: 'jne',
      },
      {
        headers: {
          key: '6dbb5e3430fcd86f560c7850606558ea',
        },
      }
    );
    
    if (response.data.rajaongkir && response.data.rajaongkir.results && response.data.rajaongkir.results.length > 0) {
      const shippingCosts = response.data.rajaongkir.results[0].costs.map(cost => ({
        service: cost.service,
        description: cost.description,
        cost: cost.cost[0].value,
        etd: cost.cost[0].etd,
      }));
      res.json({ payload: shippingCosts });
    } else {
      throw new Error('Invalid response from RajaOngkir API');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to calculate shipping cost' });
  }
});


module.exports = router;
