export const isMobile = window => {
    if ('maxTouchPoints' in window.navigator) {
        return window.navigator.maxTouchPoints > 0;
    } else if ('msMaxTouchPoints' in window.navigator) {
        return window.navigator.msMaxTouchPoints > 0;
    } else {
        // eslint-disable-next-line vars-on-top
        const mQ = window.matchMedia && window.matchMedia('(pointer:coarse)');

        if (mQ && mQ.media === '(pointer:coarse)') {
            return !!mQ.matches;
        } else if ('orientation' in window) {
            return true;
        } else {
            // Only as a last resort, fall back to user agent sniffing
            // eslint-disable-next-line vars-on-top, one-var
            const UA = window.navigator.userAgent;

            return (
                /\b(?:BlackBerry|webOS|iPhone|IEMobile)\b/iu.test(UA) ||
                /\b(?:Android|Windows Phone|iPad|iPod)\b/iu.test(UA)
            );
        }
    }
};
