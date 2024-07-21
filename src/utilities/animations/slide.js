const slideIn = (direction, fromPosition, delay, transition = 0.7) => {
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
                duration: transition,
                type: 'tween',
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            }
        },
    };
};

const slideInText = (text, direction, fromPosition, delay, transition = 0.7) => {
    return text.split('').map((char, index) => ({
        char,
        animation: slideIn(direction, fromPosition, delay + index * 0.2, transition),
    }));
};

export { slideIn, slideInText };
export default slideIn;
