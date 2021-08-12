var LitElement = LitElement || Object.getPrototypeOf(customElements.get("home-assistant-main"));
var html = html || LitElement.prototype.html;
var css = css || LitElement.prototype.css;

class CardNumericPad extends LitElement {

    static get properties() {
        return {
            hass: {},
            config: {},
            active: {}
        };
    }

    constructor() {
        super();
    }

    render() {
        return html`
           <div class="grid-container">
             <div class="grid-item">
               <button class="btn ripple" @click=${() => this._click_button("1")}>1</button>
             </div>
             <div class="grid-item">
               <button class="btn ripple" @click=${() => this._click_button("2")}>2</button>
             </div>
             <div class="grid-item">
               <button class="btn ripple" @click=${() => this._click_button("3")}>3</button>
             </div> 
             <div class="grid-item">
               <button class="btn ripple" @click=${() => this._click_button("4")}>4</button>
             </div>
             <div class="grid-item">
               <button class="btn ripple" @click=${() => this._click_button("5")}>5</button>
             </div>
             <div class="grid-item">
               <button class="btn ripple" @click=${() => this._click_button("6")}>6</button>
             </div> 
             <div class="grid-item">
               <button class="btn ripple" @click=${() => this._click_button("7")}>7</button>
             </div>
             <div class="grid-item">
               <button class="btn ripple" @click=${() => this._click_button("8")}>8</button>
             </div>
             <div class="grid-item">
               <button class="btn ripple" @click=${() => this._click_button("9")}>9</button>
             </div>
             <div class="grid-item">
               <button class="btn"></button>
             </div>
             <div class="grid-item">
               <button class="btn ripple" @click=${() => this._click_button("0")}>0</button>
             </div>
             <div class="grid-item">
               <button class="btn"></button>
             </div> 
           </div>
          `;
    }

    updated() {
    }

    _click_button(button) {
        this.hass.callService("webostv", "button", {
            entity_id: this.config.entity,
            button: button
        });
    }

    setConfig(config) {
        if (!config.entity) {
            throw new Error("You need to define entity");
        }
        this.config = config;
    }

    getCardSize() {
        return 2;
    }

    static get styles() {
        return css`
    .grid-container {
      display: grid;
      grid-template-columns: auto auto auto;
      grid-template-rows: 115px 115px 115px 115px;
      background-color: transparent;
      padding: 10px;
      overflow: hidden;
    }
    
    .grid-item {
      background-color: transparent;
      // border: 1px solid rgba(0, 0, 0, 0.8);
      font-size: 30px;
      text-align: center;
      overflow: hidden;
    }

    .btn {
      background-color: var(--primary-background-color);
      color: var(--primary-text-color);
      font-size: 26px;
      width: 100%;
      height: 100%;
      border-width: 0px;
     border-radius: 80
    }
    
    /*Create ripple effec*/
    
    .ripple {
      position: relative;
      overflow: hidden;
      transform: translate3d(0, 0, 0);
    }
    
    .ripple:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
      background-image: radial-gradient(circle, #7a7f87 3%, transparent 7.01%);
      background-repeat: no-repeat;
      background-position: 50%;
      transform: scale(10, 10);
      opacity: 0;
      transition: transform .5s, opacity 1s;
    }
    
    .ripple:active:after {
      transform: scale(0, 0);
      opacity: .3;
      transition: 0s;
    }
    button:focus {outline:0;}
    `;
    }

}

customElements.define('card-numeric-pad', CardNumericPad);
