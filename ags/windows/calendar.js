export function window_calendar() {
    const calendar = Widget.Calendar({
        showDayNames: true,
        showDetails: true,
        showHeading: true,
        showWeekNumbers: true,
        // detail: (self, y, m, d) => {
        //     return `<span color="white">${y}. ${m}. ${d}.</span>`
        // },
        // onDaySelected: ({ date: [y, m, d] }) => {
        //     print(`${y}. ${m}. ${d}.`)
        // },
    })


    return Widget.Window({
        name: 'calendar',
        anchor: ['top'],
        exclusivity: 'normal',
        keymode: 'none',
        // layer: 'top',
        margins: [0, 0],
        child: calendar,
        visible: false,
    })
}
