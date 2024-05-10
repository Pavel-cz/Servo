if (input.buttonIsPressed(Button.A)) {
    servos.P0.run(0)
} else {
    servos.P0.run(20)
    servos.P0.setAngle(10)
}
basic.forever(function () {
	
})
