const battery = await Service.import("battery")

const BatteryBox = () => {     

    const value = battery.bind("percent").as(p => p > 0 ? p : 0)  // Battery percentage
    const icon = battery.bind("percent").as(p =>
        `battery-level-${Math.floor(p / 10) * 10}-symbolic`)  // Battery icon

    const box = Widget.Box({

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
    return box
}

export { BatteryBox }
