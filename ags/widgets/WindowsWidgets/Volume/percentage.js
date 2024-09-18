const audio = await Service.import("audio")

const PercentageLabel = Widget.Label({
    setup: self => {
        // Update the label with the percentage of the audio volume
        self.hook(audio.speaker, () => {
            self.label = `${Math.round(audio.speaker.volume * 100)}%`;
        });
    },
});

export { PercentageLabel }
