// import brightness from "./brightnessService.js"
//
// const slider = Widget.Slider({
//     hexpand: true,
//     on_change: self => brightness.screen_value = self.value,
//     value: brightness.bind('screen-value'),
// });
//
// const label = Widget.Label({
//     label: brightness.bind('screen-value').as(v => `${v}`),
//     setup: self => self.hook(brightness, (self, screenValue) => {
//         // screenValue is the passed parameter from the 'screen-changed' signal
//         // self.label = screenValue ?? 0;
//         self.label = `${screenValue ?? 0}`;
//
//         // NOTE:
//         // since hooks are run upon construction
//         // the passed screenValue will be undefined the first time
//
//         // all three are valid
//         // self.label = `${brightness.screenValue}`;
//         // self.label = `${brightness.screen_value}`;
//         // self.label = `${brightness['screen-value']}`;
//
//     }, 'screen-changed'),
// });
//
// export function Brightness() { 
//     const brightnessBox = Widget.Box({
//         children: [
//             slider,
//             label,
//         ]
//     })
//     return brightnessBox
// }

import brightness from "./brightnessService.js"

const slider = Widget.Slider({
    hexpand: true,  // Allow the slider to expand horizontally
    draw_value: false,  // Don't display the value on the slider itself
    on_change: ({ value }) => brightness.screen_value = value,  // Change brightness based on slider
    setup: self => self.hook(brightness, () => {
        self.value = brightness.screen_value || 0;  // Initialize the slider with current brightness
    }),
});

const percentageLabel = Widget.Label({
    label: brightness.bind('screen-value').as(v => `${Math.round(v * 100)}%`),  // Display percentage
});

const brightnessBox = Widget.Box({
    class_name: "brightness",
    css: "min-width: 180px; padding: 5px;",
    children: [
        Widget.Label('󰃟'), 
        slider,
        percentageLabel,
    ],  
});

// Export the main function for the brightness widget
export function Brightness() {
    return brightnessBox;
}

// Export a simplified version for use in buttons or labels
export function brightness_label() {
    return icon;
}
