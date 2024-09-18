const audio = await Service.import("audio")

const slider = Widget.Slider({
    hexpand: true,
    draw_value: false,
    on_change: ({ value }) => audio.speaker.volume = value,
    setup: self => self.hook(audio.speaker, () => {
        self.value = audio.speaker.volume || 0
    }),
})

export { slider }
