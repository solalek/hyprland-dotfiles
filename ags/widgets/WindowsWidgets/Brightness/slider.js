import brightness from "./brightnessService.js"

const slider = Widget.Slider({
    hexpand: true,  // Allow the slider to expand horizontally
    draw_value: false,  // Don't display the value on the slider itself
    on_change: ({ value }) => brightness.screen_value = value,  // Change brightness based on slider
    setup: self => self.hook(brightness, () => {
        self.value = brightness.screen_value || 0;  // Initialize the slider with current brightness
    }),
});

export { slider }
