!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();!function(){if(React&&React.addons){var e=React.addons.Perf,t=function(t){function o(e){n(this,o);var t=r(this,Object.getPrototypeOf(o).call(this,e));return t.state={isTest:!1,printInclusive:!0,printOperations:!1,printWasted:!0},t.handleToggle=t.handleToggle.bind(t),t}return i(o,t),a(o,[{key:"handleToggle",value:function(){var t=this.state,n=t.printInclusive,r=t.printOperations,i=t.printWasted,a=!this.state.isTest;a?(e.start(),console.log("React.addons.perf.start...")):(e.stop(),n&&(console.log("React.addons.perf.printInclusive"),e.printInclusive()),r&&(console.log("React.addons.Perf.printOperations"),e.printOperations?e.printOperations():e.printDOM()),i&&(console.log("React.addons.Perf.printWasted"),e.printWasted())),this.setState({isTest:a})}},{key:"render",value:function(){var t=this;if(e){var n=this.state.isTest?"green":"#cccccc";return React.createElement("a",{href:"javascript:;",style:{display:"block",width:"2rem",height:"2rem"}},React.createElement("svg",{style:{width:"100%",height:"100%",opacity:"0.5"},onClick:this.handleToggle,width:"32",height:"32",viewBox:"0 0 32 32"},React.createElement("g",{transform:"scale(0.03125, 0.03125)"},React.createElement("path",{d:"M969.142857 548.571429q0 14.848-10.861714 25.709714t-25.709714 10.861714l-128 0q0 97.718857-38.290286 165.705143l118.857143 119.442286q10.861714 10.861714 10.861714 25.709714t-10.861714 25.709714q-10.276571 10.861714-25.709714 10.861714t-25.709714-10.861714l-113.152-112.566857q-2.852571 2.852571-8.557714 7.424t-23.990857 16.274286-37.156571 20.845714-46.848 16.566857-55.442286 7.424l0-512-73.142857 0 0 512q-29.147429 0-58.002286-7.716571t-49.700571-18.870857-37.705143-22.272-24.868571-18.578286l-8.557714-8.009143-104.557714 118.272q-11.446857 11.995429-27.428571 11.995429-13.714286 0-24.576-9.142857-10.861714-10.276571-11.702857-25.417143t8.850286-26.587429l115.419429-129.718857q-33.133714-65.133714-33.133714-156.562286l-128 0q-14.848 0-25.709714-10.861714t-10.861714-25.709714 10.861714-25.709714 25.709714-10.861714l128 0 0-168.009143-98.852571-98.852571q-10.861714-10.861714-10.861714-25.709714t10.861714-25.709714 25.709714-10.861714 25.709714 10.861714l98.852571 98.852571 482.304 0 98.852571-98.852571q10.861714-10.861714 25.709714-10.861714t25.709714 10.861714 10.861714 25.709714-10.861714 25.709714l-98.852571 98.852571 0 168.009143 128 0q14.848 0 25.709714 10.861714t10.861714 25.709714zM694.857143 219.428571l-365.714286 0q0-75.995429 53.430857-129.426286t129.426286-53.430857 129.426286 53.430857 53.430857 129.426286z",fill:n}))),React.createElement("div",{className:"options"},React.createElement("div",{className:"inner"},React.createElement("label",null,"printInclusive ",React.createElement("input",{type:"checkbox",onChange:function(e){t.setState({printInclusive:e.target.checked})},checked:this.state.printInclusive})),React.createElement("label",null,"printWasted ",React.createElement("input",{type:"checkbox",onChange:function(e){t.setState({printWasted:e.target.checked})},checked:this.state.printWasted})),React.createElement("label",null,"printOperations ",React.createElement("input",{type:"checkbox",onChange:function(e){t.setState({printOperations:e.target.checked})},checked:this.state.printOperations})))))}return React.createElement("noscript",null)}}]),o}(React.Component),o="react-perf-switch-wrap",c=document.createElement("div");c.className=o,document.body.appendChild(c);var s="\n."+o+" {\n  position: fixed;\n  right: 0.5rem;\n  bottom: 0.5rem;\n  z-index: 99999;\n}\n\n."+o+" div.options {\n  display: none;\n  position: absolute;\n  bottom: 0;\n  right: 100%;\n  width: 10.5em;\n}\n\n."+o+" div.options div.inner {\n  position: relative;\n  border: solid 1px rgba(0,0,0,0.3);\n  background: #fed;\n  width: 10em;\n  margin-right: 1em;\n  text-align: right;\n  padding: 0.5em;\n  border-radius: 8px;\n}\n\n\n."+o+" a:hover div.options {\n  display: block;\n}\n\n."+o+' div.inner::before {\n  content: "";\n  position: absolute;\n  bottom: 0.6em;\n  right: -.4em;\n  padding: .35em;\n  background: inherit;\n  border: inherit;\n  border-left: 0;\n  border-top: 0;\n  transform: rotate(-45deg);\n}\n',l=document.createElement("style");l.type="text/css",l.innerHTML=s,document.head.appendChild(l),ReactDOM.render(React.createElement(t,null),c)}}()}]);