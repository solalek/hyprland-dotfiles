import { Bar } from "./panels/bar.js"

App.config({
    style: "./styles/custom.css",
    windows: [
        Bar(1),

        // you can call it, for each monitor
        // Bar(0),
        // Bar(1)
    ],
})

export { }
