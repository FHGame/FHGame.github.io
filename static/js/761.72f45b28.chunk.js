(self.webpackChunkfisthero_ui=self.webpackChunkfisthero_ui||[]).push([[761],{6446:function(t){t.exports=function(){"use strict";var t,e,n=1e3,r=6e4,o=36e5,i=864e5,u=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,s=2592e6,c=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,l={years:a,months:s,days:i,hours:o,minutes:r,seconds:n,milliseconds:1,weeks:6048e5},f=function(t){return t instanceof y},d=function(t,e,n){return new y(t,n,e.$l)},h=function(t){return e.p(t)+"s"},v=function(t){return t<0},p=function(t){return v(t)?Math.ceil(t):Math.floor(t)},m=function(t){return Math.abs(t)},g=function(t,e){return t?v(t)?{negative:!0,format:""+m(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},y=function(){function v(t,e,n){var r=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return d(t*l[h(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){r.$d[h(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var o=t.match(c);if(o){var i=o.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=i[0],this.$d.months=i[1],this.$d.weeks=i[2],this.$d.days=i[3],this.$d.hours=i[4],this.$d.minutes=i[5],this.$d.seconds=i[6],this.calMilliseconds(),this}}return this}var m=v.prototype;return m.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*l[n]}),0)},m.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=p(t/a),t%=a,this.$d.months=p(t/s),t%=s,this.$d.days=p(t/i),t%=i,this.$d.hours=p(t/o),t%=o,this.$d.minutes=p(t/r),t%=r,this.$d.seconds=p(t/n),t%=n,this.$d.milliseconds=t},m.toISOString=function(){var t=g(this.$d.years,"Y"),e=g(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var r=g(n,"D"),o=g(this.$d.hours,"H"),i=g(this.$d.minutes,"M"),u=this.$d.seconds||0;this.$d.milliseconds&&(u+=this.$d.milliseconds/1e3);var a=g(u,"S"),s=t.negative||e.negative||r.negative||o.negative||i.negative||a.negative,c=o.format||i.format||a.format?"T":"",l=(s?"-":"")+"P"+t.format+e.format+r.format+c+o.format+i.format+a.format;return"P"===l||"-P"===l?"P0D":l},m.toJSON=function(){return this.toISOString()},m.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",r={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(u,(function(t,e){return e||String(r[t])}))},m.as=function(t){return this.$ms/l[h(t)]},m.get=function(t){var e=this.$ms,n=h(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?p(e/l[n]):this.$d[n],0===e?0:e},m.add=function(t,e,n){var r;return r=e?t*l[h(e)]:f(t)?t.$ms:d(t,this).$ms,d(this.$ms+r*(n?-1:1),this)},m.subtract=function(t,e){return this.add(t,e,!0)},m.locale=function(t){var e=this.clone();return e.$l=t,e},m.clone=function(){return d(this.$ms,this)},m.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},m.milliseconds=function(){return this.get("milliseconds")},m.asMilliseconds=function(){return this.as("milliseconds")},m.seconds=function(){return this.get("seconds")},m.asSeconds=function(){return this.as("seconds")},m.minutes=function(){return this.get("minutes")},m.asMinutes=function(){return this.as("minutes")},m.hours=function(){return this.get("hours")},m.asHours=function(){return this.as("hours")},m.days=function(){return this.get("days")},m.asDays=function(){return this.as("days")},m.weeks=function(){return this.get("weeks")},m.asWeeks=function(){return this.as("weeks")},m.months=function(){return this.get("months")},m.asMonths=function(){return this.as("months")},m.years=function(){return this.get("years")},m.asYears=function(){return this.as("years")},v}();return function(n,r,o){t=o,e=o().$utils(),o.duration=function(t,e){var n=o.locale();return d(t,{$l:n},e)},o.isDuration=f;var i=r.prototype.add,u=r.prototype.subtract;r.prototype.add=function(t,e){return f(t)&&(t=t.asMilliseconds()),i.bind(this)(t,e)},r.prototype.subtract=function(t,e){return f(t)&&(t=t.asMilliseconds()),u.bind(this)(t,e)}}}()},9694:function(t){t.exports=function(){"use strict";return function(t,e,n){t=t||{};var r=e.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function i(t,e,n,o){return r.fromToBase(t,e,n,o)}n.en.relativeTime=o,r.fromToBase=function(e,r,i,u,a){for(var s,c,l,f=i.$locale().relativeTime||o,d=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],h=d.length,v=0;v<h;v+=1){var p=d[v];p.d&&(s=u?n(e).diff(i,p.d,!0):i.diff(e,p.d,!0));var m=(t.rounding||Math.round)(Math.abs(s));if(l=s>0,m<=p.r||!p.r){m<=1&&v>0&&(p=d[v-1]);var g=f[p.l];a&&(m=a(""+m)),c="string"==typeof g?g.replace("%d",m):g(m,r,p.l,l);break}}if(r)return c;var y=l?f.future:f.past;return"function"==typeof y?y(c):y.replace("%s",c)},r.to=function(t,e){return i(t,e,this,!0)},r.from=function(t,e){return i(t,e,this)};var u=function(t){return t.$u?n.utc():n()};r.toNow=function(t){return this.to(u(this),t)},r.fromNow=function(t){return this.from(u(this),t)}}}()},1635:function(t){t.exports=function(){"use strict";var t="minute",e=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(r,o,i){var u=o.prototype;i.utc=function(t){return new o({date:t,utc:!0,args:arguments})},u.utc=function(e){var n=i(this.toDate(),{locale:this.$L,utc:!0});return e?n.add(this.utcOffset(),t):n},u.local=function(){return i(this.toDate(),{locale:this.$L,utc:!1})};var a=u.parse;u.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),a.call(this,t)};var s=u.init;u.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else s.call(this)};var c=u.utcOffset;u.utcOffset=function(r,o){var i=this.$utils().u;if(i(r))return this.$u?0:i(this.$offset)?c.call(this):this.$offset;if("string"==typeof r&&(r=function(t){void 0===t&&(t="");var r=t.match(e);if(!r)return null;var o=(""+r[0]).match(n)||["-",0,0],i=o[0],u=60*+o[1]+ +o[2];return 0===u?0:"+"===i?u:-u}(r),null===r))return this;var u=Math.abs(r)<=16?60*r:r,a=this;if(o)return a.$offset=u,a.$u=0===r,a;if(0!==r){var s=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(a=this.local().add(u+s,t)).$offset=u,a.$x.$localOffset=s}else a=this.utc();return a};var l=u.format;u.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return l.call(this,e)},u.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},u.isUTC=function(){return!!this.$u},u.toISOString=function(){return this.toDate().toISOString()},u.toString=function(){return this.toDate().toUTCString()};var f=u.toDate;u.toDate=function(t){return"s"===t&&this.$offset?i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():f.call(this)};var d=u.diff;u.diff=function(t,e,n){if(t&&this.$u===t.$u)return d.call(this,t,e,n);var r=this.local(),o=i(t).local();return d.call(r,o,e,n)}}}()},5035:function(t,e,n){"use strict";n.d(e,{V:function(){return mt}});var r=n(9472),o=n(5531),i=n(3430),u=n(3738),a=n(6222),s=n(8489),c=n(7313),l=n(8281),f=n(6497),d=n(1267),h=n(3352),v=n(6698),p=n(6971),m=n(4143),g=n(5678),y=n(3759),$=n(1464),w=n(161),E=function(t){return t[t.Forwards=0]="Forwards",t[t.Backwards=1]="Backwards",t}(E||{});var M=n(200);var T=n(7626);function b(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return(0,c.useMemo)((function(){return T.r.apply(void 0,e)}),[].concat(e))}var D=n(7992);function C(t,e,n,r){var o=(0,D.E)(n);(0,c.useEffect)((function(){function n(t){o.current(t)}return(t=null!=t?t:window).addEventListener(e,n,r),function(){return t.removeEventListener(e,n,r)}}),[t,e,r])}function S(t){"function"==typeof queueMicrotask?queueMicrotask(t):Promise.resolve().then(t).catch((function(t){return setTimeout((function(){throw t}))}))}function k(t,e){var n=(0,c.useRef)([]),u=(0,$.z)(t);(0,c.useEffect)((function(){var t,o=(0,r.Z)(e.entries());try{for(o.s();!(t=o.n()).done;){var a=(0,i.Z)(t.value,2),s=a[0],c=a[1];if(n.current[s]!==c){var l=u(e);return n.current=e,l}}}catch(f){o.e(f)}finally{o.f()}}),[u].concat((0,o.Z)(e)))}var P=["initialFocus","containers","features"],Y=function(t){return t[t.None=1]="None",t[t.InitialFocus=2]="InitialFocus",t[t.TabLock=4]="TabLock",t[t.FocusLock=8]="FocusLock",t[t.RestoreFocus=16]="RestoreFocus",t[t.All=30]="All",t}(Y||{}),Z=Object.assign((0,f.yV)((function(t,e){var n=(0,c.useRef)(null),o=(0,d.T)(n,e),i=t.initialFocus,s=t.containers,h=t.features,v=void 0===h?30:h,p=(0,u.Z)(t,P);(0,m.H)()||(v=1);var T=b(n);!function(t,e){var n=t.ownerDocument,r=(0,c.useRef)(null);C(null==n?void 0:n.defaultView,"focusout",(function(t){!e||r.current||(r.current=t.target)}),!0),k((function(){e||((null==n?void 0:n.activeElement)===(null==n?void 0:n.body)&&(0,y.C5)(r.current),r.current=null)}),[e]);var o=(0,c.useRef)(!1);(0,c.useEffect)((function(){return o.current=!1,function(){o.current=!0,S((function(){!o.current||((0,y.C5)(r.current),r.current=null)}))}}),[])}({ownerDocument:T},Boolean(16&v));var D=function(t,e){var n=t.ownerDocument,r=t.container,o=t.initialFocus,i=(0,c.useRef)(null);return k((function(){if(e){var t=r.current;if(t){var u=null==n?void 0:n.activeElement;if(null!=o&&o.current){if((null==o?void 0:o.current)===u)return void(i.current=u)}else if(t.contains(u))return void(i.current=u);null!=o&&o.current?(0,y.C5)(o.current):(0,y.jA)(t,y.TO.First)===y.fE.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),i.current=null==n?void 0:n.activeElement}}}),[e]),i}({ownerDocument:T,container:n,initialFocus:i},Boolean(2&v));!function(t,e){var n=t.ownerDocument,o=t.container,i=t.containers,u=t.previousActiveElement,a=function(){var t=(0,c.useRef)(!1);return(0,M.e)((function(){return t.current=!0,function(){t.current=!1}}),[]),t}();C(null==n?void 0:n.defaultView,"focus",(function(t){if(e&&a.current){var n=new Set(null==i?void 0:i.current);n.add(o);var s=u.current;if(s){var c=t.target;c&&c instanceof HTMLElement?function(t,e){var n,o,i=(0,r.Z)(t);try{for(i.s();!(o=i.n()).done;){if(null!=(n=o.value.current)&&n.contains(e))return!0}}catch(u){i.e(u)}finally{i.f()}return!1}(n,c)?(u.current=c,(0,y.C5)(c)):(t.preventDefault(),t.stopPropagation(),(0,y.C5)(s)):(0,y.C5)(u.current)}}}),!0)}({ownerDocument:T,container:n,containers:s,previousActiveElement:D},Boolean(8&v));var Y=function(){var t=(0,c.useRef)(0);return(0,w.s)("keydown",(function(e){"Tab"===e.key&&(t.current=e.shiftKey?1:0)}),!0),t}(),Z=(0,$.z)((function(){var t,e=n.current;!e||(0,l.E)(Y.current,(t={},(0,a.Z)(t,E.Forwards,(function(){return(0,y.jA)(e,y.TO.First)})),(0,a.Z)(t,E.Backwards,(function(){return(0,y.jA)(e,y.TO.Last)})),t))})),R={ref:o};return c.createElement(c.Fragment,null,Boolean(4&v)&&c.createElement(g._,{as:"button",type:"button",onFocus:Z,features:g.A.Focusable}),(0,f.sY)({ourProps:R,theirProps:p,defaultTag:"div",name:"FocusTrap"}),Boolean(4&v)&&c.createElement(g._,{as:"button",type:"button",onFocus:Z,features:g.A.Focusable}))})),{features:Y});var R=new Set,O=new Map;function F(t){t.setAttribute("aria-hidden","true"),t.inert=!0}function A(t){var e=O.get(t);!e||(null===e["aria-hidden"]?t.removeAttribute("aria-hidden"):t.setAttribute("aria-hidden",e["aria-hidden"]),t.inert=e.inert)}var H=n(1168),x=(0,c.createContext)(!1);function I(){return(0,c.useContext)(x)}function B(t){return c.createElement(x.Provider,{value:t.force},t.children)}var z=["target"];var L=c.Fragment,V=(0,f.yV)((function(t,e){var n=t,r=(0,c.useRef)(null),o=(0,d.T)((0,d.h)((function(t){r.current=t})),e),u=b(r),a=function(t){var e=I(),n=(0,c.useContext)(U),r=b(t),o=(0,c.useState)((function(){if(!e&&null!==n||"undefined"==typeof window)return null;var t=null==r?void 0:r.getElementById("headlessui-portal-root");if(t)return t;if(null===r)return null;var o=r.createElement("div");return o.setAttribute("id","headlessui-portal-root"),r.body.appendChild(o)})),u=(0,i.Z)(o,2),a=u[0],s=u[1];return(0,c.useEffect)((function(){null!==a&&(null!=r&&r.body.contains(a)||null==r||r.body.appendChild(a))}),[a,r]),(0,c.useEffect)((function(){e||null!==n&&s(n.current)}),[n,s,e]),a}(r),s=(0,c.useState)((function(){var t;return"undefined"==typeof window?null:null!=(t=null==u?void 0:u.createElement("div"))?t:null})),l=(0,i.Z)(s,1)[0],h=(0,m.H)(),v=(0,c.useRef)(!1);return(0,M.e)((function(){if(v.current=!1,a&&l)return a.contains(l)||(l.setAttribute("data-headlessui-portal",""),a.appendChild(l)),function(){v.current=!0,S((function(){var t;!v.current||!a||!l||(a.removeChild(l),a.childNodes.length<=0&&(null==(t=a.parentElement)||t.removeChild(a)))}))}}),[a,l]),h&&a&&l?(0,H.createPortal)((0,f.sY)({ourProps:{ref:o},theirProps:n,defaultTag:L,name:"Portal"}),l):null})),N=c.Fragment,U=(0,c.createContext)(null),j=(0,f.yV)((function(t,e){var n=t.target,r=(0,u.Z)(t,z),o={ref:(0,d.T)(e)};return c.createElement(U.Provider,{value:n},(0,f.sY)({ourProps:o,theirProps:r,defaultTag:N,name:"Popover.Group"}))})),_=Object.assign(V,{Group:j}),W=(0,c.createContext)(null);function q(){var t=(0,c.useContext)(W);if(null===t){var e=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,q),e}return t}function G(){var t=(0,c.useState)([]),e=(0,i.Z)(t,2),n=e[0],r=e[1];return[n.length>0?n.join(" "):void 0,(0,c.useMemo)((function(){return function(t){var e=(0,$.z)((function(t){return r((function(e){return[].concat((0,o.Z)(e),[t])})),function(){return r((function(e){var n=e.slice(),r=n.indexOf(t);return-1!==r&&n.splice(r,1),n}))}})),n=(0,c.useMemo)((function(){return{register:e,slot:t.slot,name:t.name,props:t.props}}),[e,t.slot,t.name,t.props]);return c.createElement(W.Provider,{value:n},t.children)}}),[r])]}var J=(0,f.yV)((function(t,e){var n=q(),r="headlessui-description-".concat((0,p.M)()),o=(0,d.T)(e);(0,M.e)((function(){return n.register(r)}),[r,n.register]);var i=t,u=(0,s.Z)((0,s.Z)({ref:o},n.props),{},{id:r});return(0,f.sY)({ourProps:u,theirProps:i,slot:n.slot||{},defaultTag:"p",name:n.name||"Description"})})),K=n(426),Q=(0,c.createContext)((function(){}));Q.displayName="StackContext";var X=function(t){return t[t.Add=0]="Add",t[t.Remove=1]="Remove",t}(X||{});function tt(t){var e=t.children,n=t.onUpdate,r=t.type,o=t.element,i=(0,c.useContext)(Q),u=(0,$.z)((function(){null==n||n.apply(void 0,arguments),i.apply(void 0,arguments)}));return(0,M.e)((function(){return u(0,r,o),function(){return u(1,r,o)}}),[u,r,o]),c.createElement(Q.Provider,{value:u},e)}var et,nt=n(5941),rt=["open","onClose","initialFocus","__demoMode"],ot=((et=ot||{})[et.Open=0]="Open",et[et.Closed=1]="Closed",et),it=function(t){return t[t.SetTitleId=0]="SetTitleId",t}(it||{}),ut=(0,a.Z)({},0,(function(t,e){return t.titleId===e.id?t:(0,s.Z)((0,s.Z)({},t),{},{titleId:e.id})})),at=(0,c.createContext)(null);function st(t){var e=(0,c.useContext)(at);if(null===e){var n=new Error("<".concat(t," /> is missing a parent <Dialog /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(n,st),n}return e}function ct(t,e){return(0,l.E)(e.type,ut,t,e)}at.displayName="DialogContext";var lt=f.AN.RenderStrategy|f.AN.Static,ft=(0,f.yV)((function(t,e){var n,s=t.open,v=t.onClose,y=t.initialFocus,w=t.__demoMode,E=void 0!==w&&w,D=(0,u.Z)(t,rt),S=(0,c.useState)(0),k=(0,i.Z)(S,2),P=k[0],Y=k[1],H=(0,K.oJ)();void 0===s&&null!==H&&(s=(0,l.E)(H,(n={},(0,a.Z)(n,K.ZM.Open,!0),(0,a.Z)(n,K.ZM.Closed,!1),n)));var x=(0,c.useRef)(new Set),I=(0,c.useRef)(null),z=(0,d.T)(I,e),L=(0,c.useRef)(null),V=b(I),N=t.hasOwnProperty("open")||null!==H,U=t.hasOwnProperty("onClose");if(!N&&!U)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!N)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!U)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof s)throw new Error("You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: ".concat(s));if("function"!=typeof v)throw new Error("You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: ".concat(v));var j=s?0:1,W=(0,c.useReducer)(ct,{titleId:null,descriptionId:null,panelRef:(0,c.createRef)()}),q=(0,i.Z)(W,2),J=q[0],Q=q[1],et=(0,$.z)((function(){return v(!1)})),ot=(0,$.z)((function(t){return Q({type:0,id:t})})),it=!!(0,m.H)()&&(!E&&0===j),ut=P>1,st=null!==(0,c.useContext)(at),ft=ut?"parent":"leaf";(function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];(0,M.e)((function(){if(e&&t.current){var n=t.current,o=(0,T.r)(n);if(o){R.add(n);var i,u=(0,r.Z)(O.keys());try{for(u.s();!(i=u.n()).done;){var a=i.value;a.contains(n)&&(A(a),O.delete(a))}}catch(s){u.e(s)}finally{u.f()}return o.querySelectorAll("body > *").forEach((function(t){if(t instanceof HTMLElement){var e,n=(0,r.Z)(R);try{for(n.s();!(e=n.n()).done;){var o=e.value;if(t.contains(o))return}}catch(s){n.e(s)}finally{n.f()}1===R.size&&(O.set(t,{"aria-hidden":t.getAttribute("aria-hidden"),inert:t.inert}),F(t))}})),function(){if(R.delete(n),R.size>0)o.querySelectorAll("body > *").forEach((function(t){if(t instanceof HTMLElement&&!O.has(t)){var e,n=(0,r.Z)(R);try{for(n.s();!(e=n.n()).done;){var o=e.value;if(t.contains(o))return}}catch(s){n.e(s)}finally{n.f()}O.set(t,{"aria-hidden":t.getAttribute("aria-hidden"),inert:t.inert}),F(t)}}));else{var t,e=(0,r.Z)(O.keys());try{for(e.s();!(t=e.n()).done;){var i=t.value;A(i),O.delete(i)}}catch(s){e.e(s)}finally{e.f()}}}}}}),[e])})(I,!!ut&&it),(0,nt.O)((function(){var t,e;return[].concat((0,o.Z)(Array.from(null!=(t=null==V?void 0:V.querySelectorAll("body > *, [data-headlessui-portal]"))?t:[]).filter((function(t){return!(!(t instanceof HTMLElement)||t.contains(L.current)||J.panelRef.current&&t.contains(J.panelRef.current))}))),[null!=(e=J.panelRef.current)?e:I.current])}),et,it&&!ut),C(null==V?void 0:V.defaultView,"keydown",(function(t){t.defaultPrevented||t.key===h.R.Escape&&0===j&&(ut||(t.preventDefault(),t.stopPropagation(),et()))})),(0,c.useEffect)((function(){var t;if(0===j&&!st){var e=(0,T.r)(I);if(e){var n=e.documentElement,r=null!=(t=e.defaultView)?t:window,o=n.style.overflow,i=n.style.paddingRight,u=r.innerWidth-n.clientWidth;if(n.style.overflow="hidden",u>0){var a=u-(n.clientWidth-n.offsetWidth);n.style.paddingRight="".concat(a,"px")}return function(){n.style.overflow=o,n.style.paddingRight=i}}}}),[j,st]),(0,c.useEffect)((function(){if(0===j&&I.current){var t=new IntersectionObserver((function(t){var e,n=(0,r.Z)(t);try{for(n.s();!(e=n.n()).done;){var o=e.value;0===o.boundingClientRect.x&&0===o.boundingClientRect.y&&0===o.boundingClientRect.width&&0===o.boundingClientRect.height&&et()}}catch(i){n.e(i)}finally{n.f()}}));return t.observe(I.current),function(){return t.disconnect()}}}),[j,I,et]);var dt=G(),ht=(0,i.Z)(dt,2),vt=ht[0],pt=ht[1],mt="headlessui-dialog-".concat((0,p.M)()),gt=(0,c.useMemo)((function(){return[{dialogState:j,close:et,setTitleId:ot},J]}),[j,J,et,ot]),yt=(0,c.useMemo)((function(){return{open:0===j}}),[j]),$t={ref:z,id:mt,role:"dialog","aria-modal":0===j||void 0,"aria-labelledby":J.titleId,"aria-describedby":vt};return c.createElement(tt,{type:"Dialog",element:I,onUpdate:(0,$.z)((function(t,e,n){var r;"Dialog"===e&&(0,l.E)(t,(r={},(0,a.Z)(r,X.Add,(function(){x.current.add(n),Y((function(t){return t+1}))})),(0,a.Z)(r,X.Remove,(function(){x.current.add(n),Y((function(t){return t-1}))})),r))}))},c.createElement(B,{force:!0},c.createElement(_,null,c.createElement(at.Provider,{value:gt},c.createElement(_.Group,{target:I},c.createElement(B,{force:!1},c.createElement(pt,{slot:yt,name:"Dialog.Description"},c.createElement(Z,{initialFocus:y,containers:x,features:it?(0,l.E)(ft,{parent:Z.features.RestoreFocus,leaf:Z.features.All&~Z.features.FocusLock}):Z.features.None},(0,f.sY)({ourProps:$t,theirProps:D,slot:yt,defaultTag:"div",features:lt,visible:0===j,name:"Dialog"})))))))),c.createElement(g._,{features:g.A.Hidden,ref:L}))})),dt=(0,f.yV)((function(t,e){var n=st("Dialog.Overlay"),r=(0,i.Z)(n,1)[0],o=r.dialogState,u=r.close,a=(0,d.T)(e),s="headlessui-dialog-overlay-".concat((0,p.M)()),l=(0,$.z)((function(t){if(t.target===t.currentTarget){if((0,v.P)(t.currentTarget))return t.preventDefault();t.preventDefault(),t.stopPropagation(),u()}})),h=(0,c.useMemo)((function(){return{open:0===o}}),[o]);return(0,f.sY)({ourProps:{ref:a,id:s,"aria-hidden":!0,onClick:l},theirProps:t,slot:h,defaultTag:"div",name:"Dialog.Overlay"})})),ht=(0,f.yV)((function(t,e){var n=st("Dialog.Backdrop"),r=(0,i.Z)(n,2),o=r[0].dialogState,u=r[1],a=(0,d.T)(e),s="headlessui-dialog-backdrop-".concat((0,p.M)());(0,c.useEffect)((function(){if(null===u.panelRef.current)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")}),[u.panelRef]);var l=(0,c.useMemo)((function(){return{open:0===o}}),[o]);return c.createElement(B,{force:!0},c.createElement(_,null,(0,f.sY)({ourProps:{ref:a,id:s,"aria-hidden":!0},theirProps:t,slot:l,defaultTag:"div",name:"Dialog.Backdrop"})))})),vt=(0,f.yV)((function(t,e){var n=st("Dialog.Panel"),r=(0,i.Z)(n,2),o=r[0].dialogState,u=r[1],a=(0,d.T)(e,u.panelRef),s="headlessui-dialog-panel-".concat((0,p.M)()),l=(0,c.useMemo)((function(){return{open:0===o}}),[o]),h=(0,$.z)((function(t){t.stopPropagation()}));return(0,f.sY)({ourProps:{ref:a,id:s,onClick:h},theirProps:t,slot:l,defaultTag:"div",name:"Dialog.Panel"})})),pt=(0,f.yV)((function(t,e){var n=st("Dialog.Title"),r=(0,i.Z)(n,1)[0],o=r.dialogState,u=r.setTitleId,a="headlessui-dialog-title-".concat((0,p.M)()),s=(0,d.T)(e);(0,c.useEffect)((function(){return u(a),function(){return u(null)}}),[a,u]);var l=(0,c.useMemo)((function(){return{open:0===o}}),[o]);return(0,f.sY)({ourProps:{ref:s,id:a},theirProps:t,slot:l,defaultTag:"h2",name:"Dialog.Title"})})),mt=Object.assign(ft,{Backdrop:ht,Panel:vt,Overlay:dt,Title:pt,Description:J})}}]);