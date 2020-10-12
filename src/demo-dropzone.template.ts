import { html } from 'lit-element';
import { DemoDropzone } from './demo-dropzone.component';

import '@spectrum/sp-dropzone';
import '@spectrum/sp-container';


export default function template(this: DemoDropzone) {
  return html`
  <sp-container>
  <sp-rule medium label="Dropzone"></sp-rule>
      <sp-demo width="400" height="500">
        <pre><sp-dropzone heading="Drag and Drop Your File" description="from you computer" linkPath="/dropzone" linkLabel="Select a File "></sp-dropzone></pre>
      </sp-demo>
  </sp-container>
  <sp-rule medium label="Dropzone"></sp-rule>
  <sp-demo width="400" height="500">
    <pre><sp-dropzone heading="Drag and Drop Your File" description="from you computer" linkPath="/dropzone" linkLabel="Select a File " dragged></sp-dropzone></pre>
  </sp-demo>
</sp-container>
  `;
}
