music.onEvent(MusicEvent.MelodyStarted, function () {
    if (start == true) {
        _64 = 1
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Happy)
            basic.showIcon(IconNames.Asleep)
            basic.showIcon(IconNames.Sad)
        }
        for (let index = 0; index <= 2; index++) {
            basic.showIcon(IconNames.Silly)
            basic.showIcon(IconNames.Surprised)
            basic.showIcon(IconNames.Meh)
        }
        while (_64 >= 1 && _64 <= 3) {
            basic.showIcon(IconNames.Scissors)
            basic.showIcon(IconNames.SmallSquare)
            basic.showIcon(IconNames.Square)
            _64 += 1
        }
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Duck)
            basic.showIcon(IconNames.House)
            basic.showIcon(IconNames.Tortoise)
        }
        start = false
    }
})
let start = false
let _64 = 0
start = true
music.playMelody("C D E F G A B C5 ", 120)
music.playMelody("E D G F B A C5 B ", 120)
music.playMelody("A F E F D G E F ", 120)
music.playMelody("C5 A B G A F G E ", 120)
music.playMelody("C5 B A G F E D C ", 120)
