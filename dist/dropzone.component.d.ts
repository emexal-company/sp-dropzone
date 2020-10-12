import { Base } from '@spectrum/sp-base';
export declare class Dropzone extends Base {
    static componentStyles: import("lit-element").CSSResult[];
    dragged: boolean;
    heading: string;
    linkPath: string;
    linkLabel: string;
    description: string;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-dropzone': Dropzone;
    }
}
