input.onButtonPressed(Button.A, function () {
    if (input.compassHeading() == 0) {
        basic.showString("N")
    } else if (input.compassHeading() == 90) {
        basic.showString("E")
    } else if (input.compassHeading() == 180) {
        basic.showString("S")
    } else if (input.compassHeading() == 270) {
        basic.showString("W")
    } else if (input.compassHeading() == 360) {
        basic.showString("N")
    }
})
input.onButtonPressed(Button.B, function () {
    if (input.compassHeading() > 0) {
        music.playMelody("C5 B A G F E D C ", 411)
        basic.showString("N")
    } else if (input.compassHeading() == 90) {
        music.playMelody("C5 G B A F A C5 B ", 411)
        basic.showString("E")
    } else if (input.compassHeading() == 180) {
        music.playMelody("G F G A - F E D ", 411)
        basic.showString("S")
    } else if (input.compassHeading() == 270) {
        music.playMelody("C5 A B G A F G E ", 411)
        basic.showString("W")
    } else if (input.compassHeading() == 360) {
        music.playMelody("C5 B A G F E D C ", 411)
        basic.showString("N")
    }
})
