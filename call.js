function Car(carType, fuelType) {
    this.carType = carType;
    this.fuelType = fuelType;
}

function setCarBrand(carBrand) {
    Car.call(this, 'crossover', 'petrol');
    this.carBrand = carBrand;
    console.log(`inside setCarBrand: `, this);
}

function setCarPrice(carPrice) {
    Car.call(this, 'suv', 'gas');
    this.carPrice = carPrice;
    console.log(`inside setCarPrice: `, this);
}

const newBrand = setCarBrand('bmw');
const newPrice = setCarPrice(10000);