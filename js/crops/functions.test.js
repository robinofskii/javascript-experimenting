const {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getRevenueForPlant,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
} = require("./functions.js");

const environmentFactors = {
  sun: "low",
};

describe("getYieldForPlant", () => {
  const corn = {
    name: "corn",
    yield: 30,
    factor: {
      sun: {
        low: -50,
        medium: 0,
        high: 50,
      },
    },
  };

  test("Get yield for plant with no environment factors", () => {
    expect(getYieldForPlant(corn)).toBe(30);
  });

  test("Get yield for plant with environment factors ", () => {
    expect(getYieldForPlant(corn, environmentFactors)).toBe(15);
  });
});

describe("getYieldForCrop", () => {
  test("Get yield for crop, simple", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };

    const input = {
      crop: corn,
      numCrops: 10,
    };
    expect(getYieldForCrop(input)).toBe(30);
  });

  test("Get yield for crop, with environment factors", () => {
    const corn = {
      name: "corn",
      yield: 3,
      factor: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
      },
    };

    const input = {
      crop: corn,
      numCrops: 10,
    };
    expect(getYieldForCrop(input, environmentFactors)).toBe(15);
  });
});

describe("getTotalYield", () => {
  test("Calculate total yield with multiple crops", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
    };
    const crops = [
      { crop: corn, numCrops: 5 },
      { crop: pumpkin, numCrops: 2 },
    ];
    expect(getTotalYield({ crops })).toBe(23);
  });

  test("Calculate total yield with 0 amount", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const crops = [{ crop: corn, numCrops: 0 }];
    expect(getTotalYield({ crops })).toBe(0);
  });

  test("Calculate total yield with multiple crops and environmental factors", () => {
    const corn = {
      name: "corn",
      yield: 3,
      factor: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
      },
    };

    const pumpkin = {
      name: "pumpkin",
      yield: 4,
      factor: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
      },
    };

    const crops = [
      { crop: corn, numCrops: 5 },
      { crop: pumpkin, numCrops: 2 },
    ];

    expect(getTotalYield({ crops }, environmentFactors)).toBe(11.5);
  });
});

describe("getRevenueForPlant", () => {
  test("Get revenue for plant with environmental factors", () => {
    const corn = {
      name: "corn",
      yield: 3,
      price: 2,
      factor: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
      },
    };

    expect(getRevenueForPlant(corn, environmentFactors)).toBe(3);
  });
});

describe("getRevenueForCrop", () => {
  test("Get revenue for crop with environmental factors", () => {
    const corn = {
      name: "corn",
      yield: 3,
      price: 2,
      factor: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
      },
    };

    const input = {
      crop: corn,
      numCrops: 10,
    };

    expect(getRevenueForCrop(input, environmentFactors)).toBe(30);
  });
});

describe("getProfitForCrop", () => {
  test("Get profit for crop with environmental factors", () => {
    const corn = {
      name: "corn",
      yield: 3,
      price: 2,
      cost: 0.5,
      factor: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
      },
    };

    const input = {
      crop: corn,
      numCrops: 10,
    };

    expect(getProfitForCrop(input, environmentFactors)).toBe(25);
  });
});

describe("getTotalProfit", () => {
  test("Get total profit for all crops with environmental factors", () => {
    const corn = {
      name: "corn",
      yield: 3,
      price: 2,
      cost: 0.5,
      factor: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
      },
    };

    const pumpkin = {
      name: "pumpkin",
      yield: 4,
      price: 2.5,
      cost: 0.75,
      factor: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
      },
    };

    const crops = [
      { crop: corn, numCrops: 10 },
      { crop: pumpkin, numCrops: 2 },
    ];

    expect(getTotalProfit({ crops }, environmentFactors)).toBe(33.5);
  });
});
