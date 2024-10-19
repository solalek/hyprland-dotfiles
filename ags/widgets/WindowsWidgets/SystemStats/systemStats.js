
// Function to get CPU usage (this is just a placeholder, replace with actual system command)
export const getCpuUsage = () => {
    const usage = parseFloat(Utils.exec(`bash -c ~/.local/bin/cpu_usage.sh`))
    return {
        usage: usage.toFixed(2), // Return usage as a percentage
    };
};



// Function to get CPU temperature (placeholder for actual command)
export const getCpuTemperature = () => {
    const temp = parseFloat(Utils.exec(`bash -c ~/.local/bin/cpu_temperature.sh`));
    return {
        temp: temp, // Return temperature
    };
};

// Function to get Memory usage (placeholder for actual command)
export const getMemoryUsage = () => {
    const memInfo = Utils.exec(`free -m`);
    const lines = memInfo.toString().split("\n");
    const memory = lines[1].split(/\s+/);
    const usedMemory = memory[2] / memory[1];
    return {
        usage: usedMemory.toFixed(2), // Return usage percentage
        allMemory: memory[1],
        takenMemory: memory[2],
    };
};
