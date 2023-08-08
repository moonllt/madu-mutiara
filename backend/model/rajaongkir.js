const mongoose = require('mongoose');

const provinceSchema = new mongoose.Schema({
  provinceId: {
    type: String,
    required: true,
    unique: true,
  },
  province: {
    type: String,
    required: true,
  },
});

const Province = mongoose.model('Province', provinceSchema);

const citySchema = new mongoose.Schema({
  cityId: {
    type: String,
    required: true,
    unique: true,
  },
  city: {
    type: String,
    required: true,
  },
  provinceId: {
    type: String,
    required: true,
  },
});

const City = mongoose.model('City', citySchema);

module.exports = {
  Province,
  City,
};

