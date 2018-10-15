/*
Keep triggering at 0 until everything stops, trigger event once
 */
function debounce(wait, func) {
    let timeout;
    return function(...args) {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            func(...args);
            timeout = null;
        }, wait);
    };
}