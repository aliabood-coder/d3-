let count = 0
input.onButtonPressed(Button.A, function () {
    count += 1
    if (0 % 1 == 0) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Angry)
    }
})
input.onButtonPressed(Button.B, function () {
    count += -1
    basic.showNumber(count)
})
