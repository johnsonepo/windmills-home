const slideIn = (direction, fromPosition, delay) => {
    return { 
        hidden: {
            y: direction === 'up' ? fromPosition : direction === 'down' ? -fromPosition : 0,
            opacity: 0,
            x: direction === 'left' ? fromPosition : direction === 'right' ? -fromPosition : 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.7,
                type: 'tween',
                delay: delay,
                ease: [0.25,0.25, 0.25, 0.75],
            }
        },
    };
}

export default slideIn;