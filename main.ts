music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
radio.sendNumber(15)
basic.forever(function () {
    music.rest(10 + 5)
    while (true) {
        continue;
    }
})
