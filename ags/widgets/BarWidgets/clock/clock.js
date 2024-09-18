export function Clock() { 
    const date = Variable("", {
        poll: [1000, 'date "+%H:%M"'],
    })

    const label = Widget.Label({
        class_name: "clock",
        label: date.bind(),
    })

    const button = Widget.Button({
        on_primary_click: () => App.toggleWindow('calendar'),
        child: label,
    })
    return button
}

