input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 50; index++) {
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.showString("Go!Go!Go!")
        strip.clear()
        basic.pause(1000)
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
        strip.show()
        basic.showString("Slow down!")
        strip.clear()
        basic.pause(1000)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        basic.showString("Stop!")
        strip.clear()
        basic.pause(1000)
    }
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB_RGB)
basic.forever(function () {
	
})
