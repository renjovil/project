input.onButtonPressed(Button.A, function () {
    player += 1
    if (_var == 0) {
        if (player >= 14) {
            player = 1
        }
        pitches = chromatic[player]
    }
    if (_var == 1) {
        if (player >= 9) {
            player = 1
        }
        pitches = major[player]
    }
    if (_var == 2) {
        if (player >= 9) {
            player = 1
        }
        pitches = hminor[player]
    }
    if (_var == 3) {
        if (player >= 9) {
            player = 1
        }
        pitches = minor[player]
    }
    if (pitches == 1) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    if (pitches == 2) {
        music.playTone(277, music.beat(BeatFraction.Whole))
    }
    if (pitches == 3) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    }
    if (pitches == 4) {
        music.playTone(311, music.beat(BeatFraction.Whole))
    }
    if (pitches == 5) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    }
    if (pitches == 6) {
        music.playTone(349, music.beat(BeatFraction.Whole))
    }
    if (pitches == 7) {
        music.playTone(370, music.beat(BeatFraction.Whole))
    }
    if (pitches == 8) {
        music.playTone(392, music.beat(BeatFraction.Whole))
    }
    if (pitches == 9) {
        music.playTone(415, music.beat(BeatFraction.Whole))
    }
    if (pitches == 10) {
        music.playTone(440, music.beat(BeatFraction.Whole))
    }
    if (pitches == 11) {
        music.playTone(466, music.beat(BeatFraction.Whole))
    }
    if (pitches == 12) {
        music.playTone(494, music.beat(BeatFraction.Whole))
    }
    if (pitches == 13) {
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.AB, function () {
    _var += 1
    if (_var >= 4) {
        _var = 0
    }
    basic.showString("" + (_var))
    player = 0
})
input.onButtonPressed(Button.B, function () {
    player += -1
    if (_var == 0) {
        if (player <= 0) {
            player = 13
        }
        pitches = chromatic[player]
    }
    if (_var == 1) {
        if (player <= 0) {
            player = 8
        }
        pitches = major[player]
    }
    if (_var == 2) {
        if (player <= 0) {
            player = 8
        }
        pitches = hminor[player]
    }
    if (_var == 3) {
        if (player <= 0) {
            player = 8
        }
        pitches = minor[player]
    }
    if (pitches == 1) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    if (pitches == 2) {
        music.playTone(277, music.beat(BeatFraction.Whole))
    }
    if (pitches == 3) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    }
    if (pitches == 4) {
        music.playTone(311, music.beat(BeatFraction.Whole))
    }
    if (pitches == 5) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    }
    if (pitches == 6) {
        music.playTone(349, music.beat(BeatFraction.Whole))
    }
    if (pitches == 7) {
        music.playTone(370, music.beat(BeatFraction.Whole))
    }
    if (pitches == 8) {
        music.playTone(392, music.beat(BeatFraction.Whole))
    }
    if (pitches == 9) {
        music.playTone(415, music.beat(BeatFraction.Whole))
    }
    if (pitches == 10) {
        music.playTone(440, music.beat(BeatFraction.Whole))
    }
    if (pitches == 11) {
        music.playTone(466, music.beat(BeatFraction.Whole))
    }
    if (pitches == 12) {
        music.playTone(494, music.beat(BeatFraction.Whole))
    }
    if (pitches == 13) {
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
})
let player = 0
let pitches = 0
let hminor: number[] = []
let minor: number[] = []
let major: number[] = []
let chromatic: number[] = []
let _var = 0
basic.showString("" + (_var))
chromatic = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
major = [0, 1, 3, 5, 6, 8, 10, 12, 13]
minor = [0, 1, 3, 4, 6, 8, 9, 11, 13]
hminor = [0, 1, 3, 4, 6, 8, 9, 12, 13]
pitches = 0
player = 0
_var = 0
