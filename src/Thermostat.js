function Thermostat() {
    this.temp = 20;
    this.max = 25;
    this.MINIMUM = 10;
    this.powersave = true;
};

Thermostat.prototype.upTemp = function() {
    if (this.temp === this.max)
        this.temp = this.max;
    else
        this.temp += 1;
};        

Thermostat.prototype.downTemp = function() {
    if (this.temp === this.MINIMUM)
        this.temp = this.MINIMUM;
    else
        this.temp -= 1;
};

Thermostat.prototype.powersaveOn = function() {
    this.max = 25;
    this.powersave = true
};

Thermostat.prototype.powersaveOff = function() {
    this.max = 32;
    this.powersave = false;
};

Thermostat.prototype.reset = function() {
    this.temp = 20
    this.powersave = true;
};

Thermostat.prototype.usage = function() {
    if (this.temp < 18)
        return 'Low Usage';
    else if (this.temp < 25)
        return 'Medium Usage';
    else (this.temp > 24)
        return 'High Usage';
};