"use strict";
let vehicle1 = {
    model: "civic",
    year: 2005,
    isElectric: false
};
function displayVehicleInfo(vehicle) {
    var _a;
    console.log(`${vehicle.model} has a ${(_a = vehicle.engine) === null || _a === void 0 ? void 0 : _a.type} engine.`);
}
displayVehicleInfo(vehicle1);
