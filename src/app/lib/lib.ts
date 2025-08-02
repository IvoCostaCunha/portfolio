import { Injectable } from '@angular/core';
import { LINK_TYPE} from '../enums/LINK_TYPE';

@Injectable()
export class Lib {
    /**
     * Array of objets that associate a LINK_TYPE to a Bootstrap icon.
     */
    static linkIcons = [
        { name: LINK_TYPE.GITHUB, icon: "bi bi-github" },
        { name: LINK_TYPE.GITLAB, icon: "bi bi-codeberg" },
        { name: LINK_TYPE.CODEBERG, icon: "bi bi-git" },
        { name: LINK_TYPE.DOC, icon: "bi bi-paperclip" },
        { name: LINK_TYPE.LINK, icon: "bi bi-link" },
        { name: LINK_TYPE.LINKEDIN, icon: "bi bi-linkedin" }
    ];

    /**
     * Return a Bootstrap icon based on a LINK_TYPE value.
     * @param linkType - An LINK_TYPE attribute.
     * @returns string|null - Returns either icon associated with the link type
     * or null.
     */
    static getIcon(linkType: LINK_TYPE) {
        let icon: string | null = null;
        Lib.linkIcons.forEach((link) => {
            if (link.name == linkType) icon = link.icon;
        });
        return icon;
    }

    /**
     * Invokes user email default app with a predefined subject.
     * @param address - Address at which send the email.
     */
    static async sendMail(address: string): Promise<any> {
        window.location.assign(`mailto:${address}?subject=From portfolio.ivocostacunha.com`);
    };

    /**
     * @deprecated Using the basic <a> +href provides the expected behavior for
     * the user.
     * Opens a file in a new tab.
     * @param path - Path of the file.
     */
    static async openFile(path: string): Promise<any> {
        window.open(path);
    };

    /**
     * Return true if url corresponds to current one, false if not.
     * @param url - URL to test.
     */
    static isCurrentHref(url: string): boolean {
        let localUrl: string = document.location.href;
        return url === localUrl ? true : false;
    };

    /**
     * @deprecated Using the basic <a> +href provides the expected behavior for
     * the user.
     * @param url - URL to which redirect.
     * @param newTab - If the URL is to be opened in a new tab, false by
     * default.
     */
    static redirect(url: string, newTab: boolean = false): void {
        const isCurHref: boolean = Lib.isCurrentHref(url) ? true : false;
        console.log(newTab, isCurHref);
        newTab && !isCurHref && url !== "" ? window.open(url) : window.location.href = url;
    };

    /**
     * Fallback function to sort numbers in an ascending form.
     * @param {number} a - First number.
     * @param {number} b - Second number.
     * @returns {number} If a <= b return 1, -1 otherwise.
     */
    static sortByNumberAscending(a: number, b: number): number {
        return (a >= b) ? 1 : -1;
    };

    /**
     * Fallback function to sort numbers in an descending form.
     * @param {number} a - First number.
     * @param {number} b - Second number.
     * @returns {number} If a >= b return 1, -1 otherwise.
     */
    static sortByNumberDescending(a: number, b: number): number {
        return (a <= b) ? 1 : -1;
    };

    /**
     * Fallback function to sort string in an ascending form.
     * Uses localeCompare().
     * @param {string} a - First string.
     * @param {string} b - Second string.
     * @returns {number} If a < b return 1, -1 if a > b, O if equal.
     */
    static sortByStringAscending(a: string, b: string): number {
        return (a.localeCompare(b));
    };

    /**
     * Fallback function to sort string in an descending form.
     * Uses localeCompare().
     * @param {string} a - First string.
     * @param {string} b - Second string.
     * @returns {number} If a > b return 1, 1 if a < b, O if equal.
     */
    static sortByStringDescending(a: string, b: string): number {
        return (b.localeCompare(a));
    };
}
