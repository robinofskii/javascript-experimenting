const getYieldForPlant = (plant) => {
  return plant.yield;
};

const getYieldForCrop = (input) => {
  const { crop, numCrops } = input;
  return getYieldForPlant(crop) * numCrops;
};

const getTotalYield = (input) => {
  let totalYield = 0;

  input.crops.forEach((crop) => {
    totalYield += getYieldForCrop(crop);
  });

  return totalYield;
};

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
};
