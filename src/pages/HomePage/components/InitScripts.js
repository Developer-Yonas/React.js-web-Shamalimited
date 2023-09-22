import WOW from "wow.js"

export const InitScripts = () => {
    const wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: '0',
        mobile: true,
        live: true
    });
    wow.init();
}
