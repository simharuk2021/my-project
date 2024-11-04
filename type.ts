
type Vehicle = {
    model:string    
    year:number 
    isElectric:boolean  
    engine?:Engine
    vehicleType: "motorcycle" |"car" | "truck";

}


type Engine = {
    type:string 
    horsepower:number   
    fuelType:string
}

let vehicle1:Vehicle = {
    model:"civic",
    year: 2005,
    isElectric: false,
    engine: {
        type: "inline-4",
        horsepower: 158,
        fuelType:"Gasoline"
    },
    vehicleType:"car"
}

function displayVehicleInfo(vehicle: Vehicle) {
    console.log(`${vehicle.model} has a ${vehicle.engine?.type} engine.`)
}

displayVehicleInfo(vehicle1)
