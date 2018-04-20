'use strict';

describe('Thermostat', function(){
    var a_thermostat;

    beforeEach(function() {
        a_thermostat = new Thermostat();
      });

    describe ('Constructor', function() {
        it ('constructs a Thermostat object with a default temp of 20', function() {
            expect (a_thermostat.temp).toEqual(20);
        });

        it ('constructs a Thermostat object with a min temp of 10', function() {
            expect (a_thermostat.MINIMUM).toEqual(10);
        });
    });

    describe ('Increase temp function', function() {
        it ('increases temperature by 1', function() {
            a_thermostat.upTemp();
            expect (a_thermostat.temp).toEqual(21);
        });
    });

    describe ('Decrease temp function', function() {
        it ('decreases temperature by 1', function() {
            a_thermostat.downTemp();
            expect (a_thermostat.temp).toEqual(19);
        });

        it ('cannot go lower than minimum', function(){
            a_thermostat.temp = 10;
            a_thermostat.downTemp();
            expect (a_thermostat.temp).toEqual(10);
        });
    });

    describe ('Powersave', function() {
        it ('when powersave mode is on, max temp is 25', function() {
            a_thermostat.powersaveOn();
            expect (a_thermostat.max).toEqual(25);
        });

        it ('when powersave mode is off, max temp is 32', function() {
            a_thermostat.powersaveOff();
            expect (a_thermostat.max).toEqual(32);
        });
    });

    describe ('Reset', function() {
        it ('resets temperature to 20 when called', function() {
            a_thermostat.upTemp();
            a_thermostat.reset();
            expect (a_thermostat.temp).toEqual(20);
        });
    });

    describe ('Usage', function() {
        it ('should return low-usage if temperature below 18', function() {
            a_thermostat.temp = 17;
            expect (a_thermostat.usage()).toMatch('Low Usage');
        });

        it ('should return medium usage if temperature between 18 & 25', function() {
            expect (a_thermostat.usage()).toMatch('Medium Usage');
        });

        it ('should return high usage if temperature is 25 or above', function() {
            a_thermostat.temp = 26;
            expect (a_thermostat.usage()).toMatch('High Usage');
        });
    }); 
});
