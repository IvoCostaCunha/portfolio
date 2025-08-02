import { Lib } from './lib';

describe('Lib', () => {

    it("isCurrentHref", () => {
        const currentHref: string = document.location.href;
        const notCurrentHrefA: string = "https://wikipedia.org";
        const notCurrentHrefB: string = "";
        const notCurrentHrefC: string = document.location.href + "/random-path";
        expect(Lib.isCurrentHref(currentHref)).toBe(true);
        expect(Lib.isCurrentHref(notCurrentHrefA)).toBe(false);
        expect(Lib.isCurrentHref(notCurrentHrefB)).toBe(false);
        expect(Lib.isCurrentHref(notCurrentHrefC)).toBe(false);
    });

    it("sortByNumberAscending", () => {
        const nbTab: number[] = [];
        for (let i = 0; i < 10; i++) {
            nbTab.push(Math.random() * 1000);
        };
        nbTab.sort(Lib.sortByNumberAscending);
        let lastNb: number = -1;
        for (let i in nbTab) {
            expect(nbTab[i] > lastNb || nbTab[i] == lastNb).toBe(true);
            lastNb = nbTab[i];
        };
    });

    it("sortByNumberDescending", () => {
        const nbTab: number[] = [];
        for (let i = 0; i < 10; i++) {
            nbTab.push(Math.random() * 1000);
        };
        nbTab.sort(Lib.sortByNumberDescending);
        let lastNb: number = 10001;
        for (let i in nbTab) {
            expect(nbTab[i] < lastNb || nbTab[i] == lastNb).toBe(true);
            lastNb = nbTab[i];
        };
    });

    it("sortByStringAscending", () => {
        const stringTab: string[] = [];
        for (let i = 0; i < 10; i++) {
            stringTab.push((Math.random() * 1000).toString());
        };
        stringTab.sort(Lib.sortByStringAscending);
        let lastString: string = "-1";
        for (let i in stringTab) {
            expect(stringTab[i].localeCompare(lastString)).toBe(1 | 0);
            lastString = stringTab[i];
        };
    });

    it("sortByStringDescending", () => {
        const stringTab: string[] = [];
        for (let i = 0; i < 10; i++) {
            stringTab.push(Math.round((Math.random() * 1000)).toString());
        };
        stringTab.sort(Lib.sortByStringDescending);
        let lastString: string = "9999";
        for (let i in stringTab) {
            expect(lastString.localeCompare(stringTab[i])).toBe(1 | 0);
            lastString = stringTab[i];
        };
    });
});import { LINK_TYPE } from '../enums/LINK_TYPE';
