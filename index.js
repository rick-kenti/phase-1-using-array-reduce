

// Code your solution here
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Create a totalBatteries variable that sums all the batteries
const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);