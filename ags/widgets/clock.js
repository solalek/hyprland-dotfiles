const date = Variable("", {
    poll: [1000, 'date "+%H:%M"'],
})

export function Clock() {
    const label = Widget.Label({
        class_name: "clock",
        label: date.bind(),
    })

    return Widget.Button({
        onClicked: (_, event) => App.toggleWindow('calendar'),
        child: label,
    })
}
