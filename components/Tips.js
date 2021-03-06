const { html, Component } = require('htm/preact');

class Tips extends Component {
  // eslint-disable-next-line class-methods-use-this
  render({ tips = [] }) {
    return (tips && tips.length && tips.map((tip) => html`
            <div class="tip tip--${tip.type}">
                <ul class="tip__item tip__item--${tip.type}">
                    ${tip.messages.map((message) => html`<li dangerouslySetInnerHTML="${{ __html: message }}"/>`)}
                </ul>
            </div>`)) || null;
  }
}

module.exports = Tips;
