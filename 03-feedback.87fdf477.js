function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function p(e,t,n){var i,r,o,a,u,f,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,o=r;return i=r=void 0,l=t,a=e.apply(o,n)}function h(e){return l=e,u=setTimeout(S,t),c?y(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=o}function S(){var e=v();if(j(e))return w(e);u=setTimeout(S,function(e){var n=t-(e-f);return s?m(n,o-(e-l)):n}(e))}function w(e){return u=void 0,p&&i?y(e):(i=r=void 0,a)}function O(){var e=v(),n=j(e);if(i=arguments,r=this,f=e,n){if(void 0===u)return h(f);if(s)return u=setTimeout(S,t),y(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=b(t)||0,g(n)&&(c=!!n.leading,o=(s="maxWait"in n)?d(b(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=f=r=u=void 0},O.flush=function(){return void 0===u?a:w(v())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:i,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form"),h=y.querySelector('input[name="email"]'),j=y.querySelector('textarea[name="message"]');y.addEventListener("input",e(t)((()=>{const e={email:email.value.trim(),message:message.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),y.addEventListener("submit",(e=>{e.preventDefault();const t=h.value.trim(),n=j.value.trim();""===t||""===n?alert("Both fields must be filled before sending"):(localStorage.removeItem("feedback-form-state"),y.reset());try{const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);h.value=t.email,j.value=t.message}catch(e){console.log(e)}}));
//# sourceMappingURL=03-feedback.87fdf477.js.map
