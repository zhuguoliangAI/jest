export const timer = (fn) => {
    setTimeout(() => {
        fn();
    }, 3000);
}