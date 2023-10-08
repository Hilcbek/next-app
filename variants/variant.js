export let Fade = (direction, delay) => {
    return {
        hidden : {
            y : direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity : 0,
            x : direction === "right" ? -100 : direction === "left" ? 100 : 0
        },
        show : {
            x: 0,
            y : 0,
            opacity : 1,
            transition : {
                type : 'tween',
                duration : 1.2,
                delay : delay,
                ease : [0.25,0.25,0.25,0.75]
            }
        }
    }
}