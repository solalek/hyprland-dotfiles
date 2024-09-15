const battery = await Service.import("battery")

const progress = Widget.CircularProgress({
    css: 'min-width: 50px;'  // its size is min(min-height, min-width)
        + 'min-height: 50px;'
        + 'font-size: 6px;' // to set its thickness set font-size on it
        + 'margin: 4px;' // you can set margin on it
        + 'background-color: #131313;' // set its bg color
        + 'color: aqua;', // set its fg color
    rounded: false,
    inverted: false,
    startAt: 0.75,
    value: battery.bind('percent').as(p => p / 100),
    child: Widget.Icon({
        icon: battery.bind('icon-name'),
    }),
})

export function BatteryLabel() {
    const value = battery.bind("percent").as(p => p > 0 ? p : 0)  // Battery percentage
    const icon = battery.bind("percent").as(p =>
        `battery-level-${Math.floor(p / 10) * 10}-symbolic`)  // Battery icon

    const battery_box = Widget.Box({
        css: "box-shadow: none; text-shadow: none;",
        class_name: "battery",
        visible: battery.bind("available"),
        children: [
            Widget.Icon({ icon }),
            Widget.Label({
                label: value.as(p => `${p}%`),  // Display the percentage
                justification: 'right',
            }),
        ],
    })

    return battery_box
}
