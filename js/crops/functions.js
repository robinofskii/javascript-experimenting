// * Generic Functions
const getDecimalFromPercentage = (percentage) => {
  return 1 + percentage / 100;
};

// * End of Generic Functions

// * Yield Calculation Functions
const getYieldForPlant = (plant, environmentFactors) => {
  let sunFactor = 1;
  let windFactor = 1;

  if (environmentFactors?.sun) {
    sunFactor = getDecimalFromPercentage(
      plant.factor.sun[environmentFactors.sun]
    );
  }

  if (environmentFactors?.wind) {
    windFactor = getDecimalFromPercentage(
      plant.factor.wind[environmentFactors.wind]
    );
  }

  return plant.yield * sunFactor * windFactor;
};

const getYieldForCrop = (input, environmentFactors) => {
  const { crop, numCrops } = input;

  return getYieldForPlant(crop, environmentFactors) * numCrops;
};

const getTotalYield = (input, environmentFactors) => {
  let totalYield = 0;

  input.crops.forEach((crop) => {
    totalYield += getYieldForCrop(crop, environmentFactors);
  });

  return totalYield;
};

// * End of Yield Calculation Functions

// * Revenue / Profit Calculation Functions

const getRevenueForPlant = (plant, environmentalFactors) => {
  return getYieldForPlant(plant, environmentalFactors) * plant.price;
};

const getRevenueForCrop = (input, environmentalFactors) => {
  const { crop, numCrops } = input;

  return getRevenueForPlant(crop, environmentalFactors) * numCrops;
};

const getCostsForCrop = (input) => {
  const { crop, numCrops } = input;

  return crop.cost * numCrops;
};

const getProfitForCrop = (input, environmentFactors) => {
  const revenue = getRevenueForCrop(input, environmentFactors);

  return revenue - getCostsForCrop(input);
};

const getTotalProfit = (input, environmentFactors) => {
  let totalProfit = 0;

  input.crops.forEach((crop) => {
    totalProfit += getProfitForCrop(crop, environmentFactors);
  });

  return totalProfit;
};

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getRevenueForPlant,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
};
