import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import dropzoneStyles from './dropzone.styles';
import template from './dropzone.template';
let Dropzone = class Dropzone extends Base {
    constructor() {
        super(...arguments);
        this.dragged = false;
        this.heading = '';
        this.linkPath = '';
        this.linkLabel = '';
        this.description = '';
    }
    render() {
        return template.call(this);
    }
};
Dropzone.componentStyles = [dropzoneStyles];
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Dropzone.prototype, "dragged", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Dropzone.prototype, "heading", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Dropzone.prototype, "linkPath", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Dropzone.prototype, "linkLabel", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Dropzone.prototype, "description", void 0);
Dropzone = __decorate([
    customElement('sp-dropzone')
], Dropzone);
export { Dropzone };
//# sourceMappingURL=dropzone.component.js.map