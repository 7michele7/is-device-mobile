import { isMobile } from './isMobile';

describe('isMobile', () => {
    const IOS_USER_AGENT = `Mozilla/5.0 (iPhone; CPU iPhone OS 11_1_2 like Mac OS X)
                            AppleWebKit/604.1.34 (KHTML, like Gecko)
                            CriOS/63.0.3239.73 Mobile/15B202 Safari/604.1`;

    const DESKTOP_USER_AGENT = `Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0)
                                Gecko/20100101 Firefox/42.0`;
    let fakeWindow;

    beforeEach(() => {
        fakeWindow = {};
    });

    it('should return true if device has maxTouchPoints', () => {
        fakeWindow = {
            navigator: {
                maxTouchPoints: 1
            }
        };

        expect(isMobile(fakeWindow)).toBe.true;
    });

    it('should return true if device has msMaxTouchPoints', () => {
        fakeWindow = {
            navigator: {
                msMaxTouchPoints: 1
            }
        };

        expect(isMobile(fakeWindow)).toBe.true;
    });

    it('should return true if device has (pointer:coarse) Media Query', () => {
        fakeWindow = {
            matchMedia: () => {
                return {
                    matches: true,
                    media: '(pointer:coarse)'
                };
            },
            navigator: { userAgent: IOS_USER_AGENT }
        };

        expect(isMobile(fakeWindow)).toBe.true;
    });

    it('should return true if device has orientation', () => {
        fakeWindow = {
            matchMedia: () => {
                return {
                    matches: false,
                    media: ''
                };
            },
            orientation: 90,
            navigator: { userAgent: IOS_USER_AGENT }
        };

        expect(isMobile(fakeWindow)).toBe.true;
    });

    it('should return true if device has mobile userAgent', () => {
        fakeWindow = {
            matchMedia: () => {
                return {
                    matches: false,
                    media: ''
                };
            },
            navigator: { userAgent: IOS_USER_AGENT }
        };

        expect(isMobile(fakeWindow)).toBe.true;
    });

    it('should return false if device has desktop userAgent', () => {
        fakeWindow = {
            matchMedia: () => {
                return {
                    matches: false,
                    media: ''
                };
            },
            navigator: { userAgent: DESKTOP_USER_AGENT }
        };

        expect(isMobile(fakeWindow)).toBe.false;
    });
});
