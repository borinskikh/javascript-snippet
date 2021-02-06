class Device {
    constructor(name = "Device", description = "Description", brand = "Brand") {
        this.name = name;
        this.description = description;
        this.brand = brand;
    }
}

class ElectronicDevice extends Device {
    constructor(name, description, brand, battery = [false, false], pluggedIn = false, turnedOn = false) {
        super(name, description, brand);
        this.battery = battery;
        this.pluggedIn = pluggedIn;
        this.turnedOn = turnedOn;
    }

    plugIn() {
        this.pluggedIn = true;
        console.log(this.name + ' is connected to the outlet');
    }

    unplug() {
        this.pluggedIn = false;
        console.log(this.name + ' is disconnected from the outlet');
    }

    turnOn() {
        if (this.battery[0]) {
            console.log(this.name + ' has a battery');
            if (this.battery[1]) {
                console.log('The battery is charged');
            } else {
                console.log('The battery isn\'t charged');
            }
        }
        if (!this.battery[0] || !this.battery[1]) {
            if (this.pluggedIn) {
                console.log(this.name + ' is connected to the outlet');
            } else {
                console.log(this.name + ' is not connected to the outlet, connecting...');
                this.plugIn();
            }
        }
        this.turnedOn = true;
        console.log(this.name + ' is turned on');
    }

    turnOff() {
        if (this.turnedOn) {
            this.turnedOn = false;
            console.log(this.name + ' is turned off');
            if (this.pluggedIn) {
                this.unplug();
            }
        } else {
            console.log(this.name + ' is already turned off');
        }
    }
}

class ComputerMonitor extends ElectronicDevice {
    constructor(name, brand, size = 0, resolution = [0, 0], refreshRate = 0, pluggedIn, turnedOn) {
        const description = 'A computer monitor is an output device that displays information in pictorial form. A monitor usually comprises the visual display, circuitry, casing, and power supply. The display device in modern monitors is typically a thin film transistor liquid crystal display with LED backlighting having replaced cold-cathode fluorescent lamp backlighting.';
        const battery = [false, false];
        super(name, description, brand, battery, pluggedIn, turnedOn);
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.refreshRate = refreshRate;
        this.isPlugged = false;
    }
}

class Speaker extends ElectronicDevice {
    constructor(name, brand, type = "", soundVolume = 0, weight = 0, battery, pluggedIn, turnedOn) {
        const description = 'Speakers are transducers that convert electromagnetic waves into sound waves. The speakers receive audio input from a device such as a computer or an audio receiver. This input may be either in analog or digital form. Analog speakers simply amplify the analog electromagnetic waves into sound waves. Since sound waves are produced in analog form, digital speakers must first convert the digital input to an analog signal, then generate the sound waves.';
        super(name, description, brand, battery, pluggedIn, turnedOn);
        this.type = type;
        this.soundVolume = soundVolume;
    }
}

const monitor = new ComputerMonitor(model = "27GN750-B", brand = "LG", size = 27, resolution = [1920, 1080], refreshRate = 240, pluggedIn = false, turnedOn = false);
const speaker = new Speaker(model = "The New SOUNDBOKS (3rd Gen)", brand = "SOUNDBOKS", type = "Wireless", soundVolume = 126, weight = 15.4, battery = [true, true], pluggedIn = false, turnedOn = false);

monitor.turnOn();
speaker.turnOn();
monitor.turnOff();
speaker.turnOff();

console.log(monitor);
console.log(speaker);