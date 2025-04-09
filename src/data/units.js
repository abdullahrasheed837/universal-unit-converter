const units = {
    length: {
      meter: 1,
      kilometer: 1000,
      centimeter: 0.01,
      millimeter: 0.001,
      micrometer: 1e-6,
      nanometer: 1e-9,
      mile: 1609.344,
      yard: 0.9144,
      foot: 0.3048,
      inch: 0.0254,
      nautical_mile: 1852,
    },
  
    weight: {
      kilogram: 1,
      gram: 0.001,
      milligram: 0.000001,
      microgram: 1e-9,
      ton: 1000,
      pound: 0.453592,
      ounce: 0.0283495,
      stone: 6.35029,
    },
  
    volume: {
      liter: 1,
      milliliter: 0.001,
      cubic_meter: 1000,
      cubic_centimeter: 0.001,
      cubic_inch: 0.0163871,
      cubic_foot: 28.3168,
      gallon: 3.78541,
      quart: 0.946353,
      pint: 0.473176,
      cup: 0.24,
      tablespoon: 0.015,
      teaspoon: 0.005,
    },
  
    area: {
      square_meter: 1,
      square_kilometer: 1e6,
      square_centimeter: 0.0001,
      square_millimeter: 0.000001,
      hectare: 10000,
      acre: 4046.86,
      square_mile: 2.59e6,
      square_yard: 0.836127,
      square_foot: 0.092903,
      square_inch: 0.00064516,
    },
  
    speed: {
      meter_per_second: 1,
      kilometer_per_hour: 0.277778,
      mile_per_hour: 0.44704,
      foot_per_second: 0.3048,
      knot: 0.514444,
    },
  
    time: {
      second: 1,
      millisecond: 0.001,
      microsecond: 1e-6,
      nanosecond: 1e-9,
      minute: 60,
      hour: 3600,
      day: 86400,
      week: 604800,
      month: 2.63e6, // approx (30.44 days)
      year: 3.154e7, // approx (365.25 days)
    },
  
    digital: {
      bit: 1,
      byte: 8,
      kilobit: 1000,
      kilobyte: 8000,
      megabit: 1e6,
      megabyte: 8e6,
      gigabit: 1e9,
      gigabyte: 8e9,
      terabit: 1e12,
      terabyte: 8e12,
    },
  
    temperature: {
      // Handled with formulas in the converter logic
    },
  };
  
  export default units;
  