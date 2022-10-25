const getDecimalFromPercentage = (percentage) => {
  return 1 + percentage / 100;
};

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

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
};
