const measureKelvin = () => {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        // C) Fix bug
        value: prompt('Degrees celsius: ')
    };
    // B) Find
    console.table(measurement);

    const kelvin = measurement.value + 273; // from Celsius to Kelvin: celsius + 273
    return kelvin;
};

// A) Identify
measureKelvin();