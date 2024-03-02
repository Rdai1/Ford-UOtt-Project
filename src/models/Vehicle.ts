import db from "../config/firebaseAdminConfig"

class Vehicle {
    currentCharge: number; // Percentage or kWh representing current battery charge
    model: string; // Model of the car
    make: string; // Make of the car, e.g., Ford
    carUser: string; // Identifier for the user of the car, could be user ID or name
    batteryCapacity: number; // Capacity of the battery in kWh
  
    constructor(currentCharge: number, model: string, make: string, carUser: string, batteryCapacity: number) {
      this.currentCharge = currentCharge;
      this.model = model;
      this.make = make;
      this.carUser = carUser;
      this.batteryCapacity = batteryCapacity;
    }
  
    // Method to calculate remaining range based on current charge and battery capacity
    async getRange(): Promise<number> {
      // Assuming an average consumption. You may adjust the formula based on real-world data or specific models
      const averageWhPerMile = 250; // Example value: 250 Wh per mile
      const remainingKWh = this.batteryCapacity * (this.currentCharge / 100);
      const range = remainingKWh / (averageWhPerMile / 1000); // Convert Wh to kWh for calculation
      return range;
    }
  
    // Method to update current charge, e.g., after charging
    async updateCharge(newCharge: number): Promise<void> {
        try {
          if (newCharge < 0 || newCharge > 100) {
            throw new Error("Charge must be between 0 and 100 percent.");
          }
          this.currentCharge = newCharge;
          console.log("SUCCESS: Charge updated to", newCharge);
        } catch (error) {
            
        }
      }
    

  async saveVehicle(): Promise<void> {
    try {
      const vehicleRef = db.collection('vehicles').doc(this.carUser);
      await vehicleRef.set({
        // Vehicle data to be saved onto our database
        vehicleId: this.carUser,
        make: this.make,
        model: this.model,
        currentCharge: this.currentCharge,
        batteryCapacity: this.batteryCapacity
      });
      console.log('Vehicle saved successfully');
    } catch (error) {
      console.error('Error saving vehicle:', error);
      throw error;
    }
    }
}
  
  