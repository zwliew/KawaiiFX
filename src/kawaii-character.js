import { LitElement, html } from 'lit-element';

export class KawaiiCharacter extends LitElement {
  static get properties() {
    return {
      image: { type: String },
      audio: { type: String },
      duration: { type: Number },
    };
  }

  play() {
    if (!this.audioEl) {
      this.audioEl = this.shadowRoot.getElementById('audio');
    }
    if (!this.container) {
      this.container = this.shadowRoot.getElementById('container');
    }

    this.audioEl.play();
    this.container.classList.add('tada', 'animated');
    setTimeout(() => {
      this.container.classList.remove('tada', 'animated');
    }, this.duration);
  }

  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
      />

      <style>
        .image {
          height: 20rem;
        }
      </style>

      <section
        id="container"
        @click="${this.play}"
        style="animation-duration: ${`${this.duration}ms`}"
      >
        <img id="image" class="image" src="${this.image}" />
        <audio id="audio" src="${this.audio}"></audio>
      </section>
    `;
  }
}
customElements.define('kawaii-character', KawaiiCharacter);
