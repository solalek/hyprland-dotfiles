let box = null

const setBox = (newBox) => {
    box = newBox;
};

const getBox = () => {
    return box;
};

const flowBox = Widget.FlowBox({
    maxChildrenPerLine: 1,
    selection_mode: 0,
    setup(self) {
    }
})

export { flowBox, setBox, getBox }
