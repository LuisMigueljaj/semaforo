let noise = 0
basic.forever(function () {
    noise = input.soundLevel()
    if (noise <= 80) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.showString("LOW NOISE")
    } else if (noise > 160) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.showString("HIGH NOISE")
    } else {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.showString("MODERATE NOISE")
    }
    basic.pause(5000)
})
