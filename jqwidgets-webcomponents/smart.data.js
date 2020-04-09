
/* Smart HTML Elements v7.4.0 (2020-Apr) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=24)}({24:function(e,t){Smart.DataAdapter=window.smartDataAdapter=class{constructor(e){e||(e={});const t=Object.assign(this,e);t.key=(65536*(1+Math.random())|0).toString(16).substring(1),t.$document=Smart.Utilities.Extend(document),t.boundSource=!1===t.observable?[]:new Smart.ObservableArray,t.dataItemById=[],void 0===t.allowAdd&&(t.allowAdd=!0),void 0===t.allowRemove&&(t.allowRemove=!0),void 0===t.allowUpdate&&(t.allowUpdate=!0),void 0===e.observable&&(t.observable=!0),e.dataSource||(t.dataSource=[]),e.dataFields||(t.dataFields=[]),e.dataSourceType||(t.dataSourceType="array"),e.id||(t.id=null),e.autoFetch||(t.autoFetch=!0),e.dataFields&&(t.dataFields=e.dataFields),e&&!1!==e.autoBind&&t.dataBind(),t.isInitialized=!0}get dataFields(){return this._dataFields}set dataFields(e){return this._dataFields=this._getDataFieldObjects(e),this._dataFields}_getDataFieldObjects(e){let t=[];if("number"==typeof e){const n="A".charCodeAt(0);let r="",a=0;for(let o=0;o<e;o++){const e=String.fromCharCode(n+a);a++;const o=r+e;t.push({name:o,dataType:"string"}),a>=26&&(a=0,r+="A")}}else if(e.length>0)for(let n=0;n<e.length;n++){const r=e[n];if("string"==typeof r){const e=r.split(":"),n=e[0].trim(),a=e.length>1?e[1].trim():"string";t.push({name:n,dataType:a})}else t.push(r)}return t}get dataSource(){const e=this;return e._dataSource||(e._dataSource=[]),e._dataSource}set dataSource(e){const t=this;t._dataSource=e,t.isInitialized&&(t.boundSource=!1===t.observable?[]:new Smart.ObservableArray,t.dataItemById=[],t.bindingCompleted=!1,t.dataBind())}get canNotify(){const e=this;return void 0===e._canNotify&&(e._canNotify=!0),e._canNotify}set canNotify(e){this._canNotify=e}_notify(e){const t=this;t.canNotify&&t.notifyFn&&t.notifyFn(e)}notify(e){e&&(this.notifyFn=e)}toArray(){return this.boundSource.toArray()}dataBind(){const e=this;e.clear();const t=()=>{e.observable&&e.boundSource.notify((function(t){if("update"===t.action&&t.path&&t.path.indexOf(".")>=0&&-1===t.path.indexOf("children")&&-1===t.path.indexOf("loaded")&&-1===t.path.indexOf("level")&&-1===t.path.indexOf("leaf")&&-1===t.path.indexOf("expanded")){let n=!1;for(let r=0;r<e.dataFields.length;r++){const a=e.dataFields[r].name;t.path.indexOf(a)>=0&&(n=!0)}e._notify&&n&&e._notify({action:"update",data:t.target,index:t.index})}})),e.groupBy?e.groupBy.toArray&&(e.groupBy=e.groupBy.toArray()):e.groupBy=[],e.groupBy=new Smart.ObservableArray(e.groupBy),e.groupBy.notify((function(){e.boundHierarchy=null,e.refreshHierarchy(),e.onGroup&&e.onGroup()})),e._onBindingComplete()};"string"==typeof e.dataSource&&e.dataSource.indexOf(".json")>=0?(e.url=e.dataSource,e.dataSourceType="json",new n(e,t=>{e.dataSource=t,e._bindToJSON()})):"string"==typeof e.dataSource&&e.dataSource.indexOf(".xlsx")>=0?(e.url=e.dataSource,e.dataSourceType="xlsx",new n(e,n=>{if(!n[0])return n=[],e._bindToArray(),void t();const r=Object.keys(n[0]),a={},o=[];if(!1!==e.exportHeader){let t=0;for(let n in r){a[r[n]]=e.dataFields[t++].name}for(let e=1;e<n.length;e++){const t=n[e],i={};for(let e in r){const n=r[e];i[a[n]]=t[n]}o.push(i)}e.dataSource=o}e._bindToArray(),t()})):"string"==typeof e.dataSource&&e.dataSource.indexOf(".csv")>=0?(e.dataSourceType="csv",new n(e,()=>{e._bindToArray()})):"string"==typeof e.dataSource&&e.dataSource.indexOf(".tsv")>=0?(e.dataSourceType="tsv",new n(e,()=>{})):"array"===e.dataSourceType?(e._bindToArray(),t()):"json"===e.dataSourceType&&(e._bindToJSON(),t())}_onBindingComplete(){const e=this;e._buildHierarchy(),e.onBindingComplete&&e.onBindingComplete({data:e.boundSource}),e._notify&&e._notify({action:"bindingComplete",data:e.boundSource}),e.bindingCompleted=!0}refreshHierarchy(){this._buildHierarchy()}find(){return this.boundSource.find.apply(this.boundSource,arguments)}onVirtualDataSourceRequested(e,t){const n=this;let r=t?t.first:1/0,a=t?t.last:1/0,o=t?t.row:null;if(void 0===r&&(r=1/0),void 0===a&&(a=1/0),n.virtualFirstIndex=r,n.virtualLastIndex=a,n.virtualDataSource){const i=function(i){void 0!==i.virtualDataSourceLength&&(n.virtualDataSourceLength=i.virtualDataSourceLength),new Smart.DataAdapter({dataSource:i.dataSource,dataFields:i.dataFields||n.dataFields,data:t,onBindingComplete(t){if(n.virtualDataSourceOnExpand&&o)return t.data&&t.data.length>0?n.add(t.data,o.$.id):o.leaf=!0,n.onFilter&&n.onFilter(),void e();if(r===1/0)n.add(t.data);else{let e=[],o=[];for(let n=0;n<t.data.length;n++){const i=t.data[n];r+n<=a&&(e.push(i),o.push(r+n))}n.update(o,e)}n.onFilter&&n.onFilter(),e()}})};let l=!1;const d=e=>0===Object.entries(e).length&&(e.constructor===Object||e.constructor===Array),c=d(t.sorting)&&d(t.filtering)&&d(t.grouping)&&!t.row&&"filter"!==t.action&&"sort"!==t.action&&"group"!==t.action;if(n.virtualDataSourceCache&&r!==1/0&&c){let e=0;for(let t=r;t<a;t++)n[t].$.isEmpty||e++;e===a-r&&(l=!0)}l?e():"expand"===t.action?n.virtualDataSourceOnExpand(i,{first:r,last:a,row:t.row,sorting:t.sorting,filtering:t.filtering,grouping:t.grouping,action:t.action}):n.virtualDataSource(i,{first:r,last:a,sorting:t.sorting,filtering:t.filtering,grouping:t.grouping,action:t.action})}else e()}add(e,t){const n=this;if(!e)return;let r=!0;const a=function(e){const a=n._getDataItem(e,n.boundSource.length);n[n.boundSource.length]=a,n.dataItemById[a.$.id]=a;const o=n.boundSource.push(a);return void 0!==t&&(a.$.parentId=t),o||(r=!1),a};if(e.length){let t=[];for(let n=0;n<e.length;n++){const r=a(e[n]);t.push(r)}n._notify({action:"add",data:t})}else{const t=a(e);n._notify({action:"add",data:t})}return n.refreshHierarchy(),r}refreshIndexes(){const e=this;for(let t=0;t<e.boundSource.length;t++)e[t]=e.boundSource[t],e[t].$.index=t,e.dataItemById[e[t].$.id]=e[t]}removeLast(){delete this[this.boundSource.length-1];const e=this.boundSource.pop();return this._notify({action:"removeLast",data:e}),this.refreshHierarchy(),e}removeAt(e){const t=this.boundSource[e];if(!t)throw new Error("Invalid Item Index");this.boundSource.splice(e,1),this.refreshIndexes(),this._notify({action:"remove",index:e,data:t}),this.refreshHierarchy()}update(e,t){const n=this;if(Smart.Utilities.Types.isArray(e)&&Smart.Utilities.Types.isArray(t)&&0===e.length&&0===t.length)return void n.refreshHierarchy();if(t.length&&e.length){let r=[];for(let a=0;a<e.length;a++){const o=n._getDataItem(t[a],e[a]),i=e[a];r.push(o),n.boundSource[i]=o,n[i]=n.boundSource[i],n.dataItemById[o.$.id]=n[i]}return n._notify({action:"update",index:e,data:r}),void n.refreshHierarchy()}const r=n._getDataItem(t,e);return n.boundSource[e]=r,n[e]=n.boundSource[e],n.dataItemById[r.$.id]=n[e],n._notify({action:"update",index:e,data:r}),n.refreshHierarchy(),r}insert(e,t){t=this._getDataItem(t,e);const n=this.boundSource.splice(e,0,t);return this.refreshIndexes(),this._notify({action:"insert",index:e,data:t}),this.refreshHierarchy(),n}move(e,t){if(t>e&&t-e==1||e===t)return;const n=this,r=n.boundSource.splice(e,1)[0];t>e?(t--,n.boundSource.splice(t,0,r)):n.boundSource.splice(t,0,r),n.refreshIndexes(),n._notify({action:"move",index:t,data:n.boundSource[t]}),n.refreshHierarchy()}indexOf(e){return this.boundSource.indexOf(e)}get length(){const e=this;return void 0!==e.virtualDataSourceLength?e.virtualDataSourceLength:e.dataSourceLength?e.dataSourceLength:"number"==typeof e.dataSource?e.dataSource:e.bindingCompleted?e.boundSource.length:e.dataSource&&"string"!=typeof e.dataSource&&e.dataSource.length?e.dataSource.length:e.boundSource.length}clear(){const e=this;if(!e.isInitialized)return e._cachedValues=[],void(e.dataItemById=[]);for(let t=0;t<e.boundSource.length;t++)delete e[t];e._cachedValues=[],e.boundSource=e.observable?new Smart.ObservableArray:[],e.dataItemById=[],e.refreshHierarchy()}_getId(e,t,n){if(null===e||void 0===e.name||!e.name||!t.getAttribute){if(e&&e.toString().length>0&&t.getAttribute){let n=t.getAttribute(e);if(null!==n&&n.toString().length>0)return n.trim().split(" ").join("").replace(/([ #;?%&,.+*~\':'!^$[\]()=>|\/@])/g,"");{let n=e.split(this.mapChar);if(n.length>1){let e=t;for(let t=0;t<n.length;t++)void 0!==e&&(e=e[n[t]]);if(void 0!==e)return e}else if(void 0!==t[e])return t[e]}}return n}{let r=t.getAttribute(e.name);if(null!==r&&r.toString().length>0)return r;if(e.map)try{let n=t.getAttribute(e.map);if(null!==n&&n.toString().length>0)return n}catch(e){return n}}}_buildHierarchy(){const e=this;if(e.reservedNames){const t=e.reservedNames;t.leaf||(t.leaf="leaf"),t.parent||(t.parent="parent"),t.expanded||(t.expanded="expanded"),t.checked||(t.checked="checked"),t.selected||(t.selected="selected"),t.level||(t.level="level"),t.data||(t.data="data")}else e.reservedNames={leaf:"leaf",parent:"parent",expanded:"expanded",checked:"checked",selected:"selected",level:"level",icon:"icon",data:"data"};const t=e.reservedNames;if(e.childrenDataField){const n=[];for(let r=0;r<e.boundSource.length;r++){const a=Object.assign({},e.boundSource[r]);if(!a)continue;n.push(a);const o=function(n){const r=e.childrenDataField.split(e.mapChar);let a=null;if(r.length>1){let e=n;for(let t=0;t<r.length;t++)void 0!==e&&(e=e[r[t]]);a=e}else a=n.children;n.children=a,(null===n.children||void 0===n.children||n.children&&0===n.children.length)&&(n[t.leaf]=!0)};o(a),a[t.level]=0,a.$||(a.$={}),a[t.parent]=null,a[t.data]=a,void 0===a[t.expanded]&&(a[t.expanded]=!1);const i=function(n,r){if(r)for(let a=0;a<r.length;a++){let l=e._getDataItem(r[a],a);l&&(o(l),l[t.level]=n[t.level]+1,l[t.parent]=n,l[t.data]=l,n&&(n.children[a]=l),void 0===l[t.expanded]&&(l[t.expanded]=!1),i(l,l.children))}else n.children=new Array};i(a,a.children)}if(e.boundHierarchy=n,!e._boundSourceUpdate){for(let t=0;t<e.boundHierarchy.length;t++){const n=e.boundHierarchy[t];if(n.children){const t=function(n){if(e.dataItemById[n.$.id]||(e.boundSource.canNotify=!1,e.dataItemById[n.$.id]=n,e[e.boundSource.length]=n,e.boundSource.push(n),e.boundSource.canNotify=!0),n.children)for(let e=0;e<n.children.length;e++){const r=n.children[e];r.children&&t(r)}};t(n)}}e._boundSourceUpdate=!0}}e.xmlRoot&&"xml"===e.dataSourceType&&(e.boundHierarchy=this._getHierarchy("uid","_parentuid","children",null,e.boundSource)),e.keyDataField&&e.parentDataField&&(e.boundHierarchy=this._getHierarchy(e.keyDataField,e.parentDataField,"children",null,e.boundSource)),e.groupBy&&e.groupBy.length>0&&(e.boundHierarchy=this._getGroupHierarchy(e.groupBy,"children","label",null,"data",null,"parent",e.boundSource)),e.virtualDataSourceOnExpand&&(e.boundHierarchy=this._getHierarchy("id","parentId","children",null,e.boundSource))}_getGroupHierarchy(e,t,n,r,a,o,i,l,d){d||(d=0);let c=this.reservedNames;const s=function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()};let u=new Array;for(let t=0;t<e.length;t++)u[t]=s();t||(t="children"),n||(n="group"),a||(a="item"),i||(i="parent"),void 0===o&&(o="value");const f=new Array,h=new Array;let p=0;const g=function(e){let t=e;if(r)for(let e in r){const n=r[e];n.name&&n.map&&(t[n.map]=t[n.name])}return t};for(let r=0;r<l.length;r++){let y=Object.assign({},g(l[r]));y[c.leaf]=!1;let m=new Array,b=0;for(let t=0;t<e.length;t++){const n=e[t],r=y[n];null!==r&&(m[b++]={value:r,group:n,hash:u[t]})}if(m.length!==e.length)break;let S=null,v="";for(let e=0;e<m.length;e++){const r=m[e].value,l=m[e].group;if(v=v+"_"+m[e].hash+"_"+r,void 0===h[v]||null===h[v]){if(null===S){S={$:{}},S[c.level]=0,S[c.leaf]=!1,S[i]=null,S[n]=r,S[a]=y,S.groupDataField=l,void 0!==y[c.expanded]?S[c.expanded]=y[c.expanded]:S[c.expanded]=!1,o&&(S[o]=y[o]),S[t]=new Array;let e=f.length+d;this.id&&"number"!=typeof y.$.id&&!isFinite(y.$.id)||(e="Item"+e),void 0===S.$.id&&(S.$.id=e),f[p++]=S}else{const e={$:{}};e[c.level]=S[c.level]+1,e[i]=S,e[n]=r,e[t]=new Array,e[a]=y,e.groupDataField=l,e[c.leaf]=!1,void 0!==y[c.expanded]?e[c.expanded]=y[c.expanded]:e[c.expanded]=!1,o&&(e[o]=y[o]),void 0===e.$.id&&(e.$.id=S.$.id+"_"+S[t].length),S[t][S[t].length]=e,S=e}h[v]=S}else S=h[v]}y&&(y[c.leaf]=!0),null!==S?(null===this.id?void 0===y.$.id&&(y.$.id=S.$.id+"_"+S[t].length):void 0===y.$.id&&-1===y.$.id.toString().indexOf(S.$.id)&&(y.$.id=S.$.id+"_"+y.$.id),y[i]=S,y[c.level]=S[c.level]+1,S[t][S[t].length]=y):void 0===y.$.id&&(y.$.id=s())}return f}_getHierarchy(e,t,n,r,a){const o=this,i=new Array;let l=this.boundSource;if(a&&(l=a),0===this.boundSource.length)return null;const d=null!==n?n:"children";let c=new Array,s=l,u=s.length,f=o.reservedNames;const h=function(e){let t=e;if(r)for(let e in r){const n=r[e];n.name&&n.map&&(t[n.map]=t[n.name])}return t};for(let n=0;n<u;n++){let r=s[n],a=r[t],o=r[e];"parentId"===t&&(a=r.$.parentId),"id"===e&&(o=r.$.id),r[d]=new Array,c[o]={parentId:a,item:r}}for(let n=0;n<u;n++){const r=s[n];let a=r[t],o=r[e];if("parentId"===t&&(a=r.$.parentId),"id"===e&&(o=r.$.id),void 0!==c[a]){let e={parentId:a,item:c[o].item},t=c[a].item;t[d]||(t[d]=new Array);let n=t[d].length;e=e.item,f?void 0===e[f.parent]&&(e[f.parent]=t):void 0===e.parent&&(e.parent=t);const r=h(e);t[d][n]=r,c[a].item=t,c[o].item=e}else{let e=c[o].item;f?void 0===e[f.parent]&&(e[f.parent]=null):void 0===e.parent&&(e.parent=null);const t=h(e);f?t[f.level]=0:t.level=0,i[i.length]=t}}if(0!==i.length){let e=function(t,n){for(let r=0;r<n.length;r++){const a=n[r];f?a[f.level]=t:a.level=t;const i=a[d];i&&i.length>0?e(t+1,i):o.virtualDataSourceOnExpand?void 0===a.leaf&&(a.leaf=!1):f?a[f.leaf]=!0:a.leaf=!0}};e(0,i)}return i}summarize(e,t){const n=this;Array.isArray(e)||(e=[e]);let r=[];for(let t=0;t<e.length;t++){const n=e[t];for(let e in n){const t=n[e];r.push({dataField:e,functions:t})}}e=r;let a={},o=new Array;t||(t=n.boundSource);let i=t.length;if(0!==i&&void 0!==i){for(let n=0;n<i;n++){let r=t[n];for(let t=0;t<e.length;t++){const i=e[t];let l=r[i.dataField];if(i.functions){a[i.dataField]=a[i.dataField]||{},o[i.dataField]=o[i.dataField]||0,o[i.dataField]++;const e=function(e){for(let t in e){let n=a[i.dataField][t];null==n&&(a[i.dataField][t]=0,n=0),"function"==typeof e[t]&&(n=e[t](n,l,i.dataField,r)),a[i.dataField][t]=n}};let t=parseFloat(l);t=!isNaN(t),t&&(l=parseFloat(l)),"number"==typeof l&&isFinite(l)?i.functions.forEach((function(t){let r=a[i.dataField][t];if(null==r&&(r=0,"min"===this&&(r=9999999999999),"max"===this&&(r=-9999999999999)),"sum"===t||"avg"===t||"stdev"===t||"stdevp"===t||"var"===t||"varp"===t)r+=parseFloat(l);else if("product"===t)0===n?r=parseFloat(l):r*=parseFloat(l);else if("min"===t)r=Math.min(r,parseFloat(l));else if("max"===t)r=Math.max(r,parseFloat(l));else if("count"===t)r++;else if("object"==typeof t)return void e(t);a[i.dataField][t]=r})):i.functions.forEach((function(t){if("min"===t||"max"===t||"count"===t||"product"===t||"sum"===t||"avg"===t||"stdev"===t||"stdevp"===t||"var"===t||"varp"===t){if(null===l)return!0;let e=a[i.dataField][t];return null==e&&(e=0),a[i.dataField][t]=e,!0}"object"==typeof t&&e(t)}))}}}for(let n=0;n<e.length;n++){const r=e[n];if(r.functions){if(a[r.dataField]||(a[r.dataField]={},r.functions.forEach((function(e){a[r.dataField][e]=0}))),void 0!==a[r.dataField].avg){const e=a[r.dataField].avg,t=o[r.dataField];a[r.dataField].avg=0===t||void 0===t?0:e/t}else void 0!==a[r.dataField].count&&(a[r.dataField].count=i);(a[r.dataField].stdev||a[r.dataField].stdevp||a[r.dataField].var||a[r.dataField].varp)&&r.functions.forEach((function(e){if("stdev"===e||"var"===e||"varp"===e||"stdevp"===e){const n=a[r.dataField][e],o=i,l=n/i;let d=0;for(let e=0;e<i;e++){let n=t[e][r.dataField];d+=(n-l)*(n-l)}let c="stdevp"===e||"varp"===e?o:o-1;0===c&&(c=1),"var"===e||"varp"===e?a[r.dataField][e]=d/c:"stdevp"!==e&&"stdev"!==e||(a[r.dataField][e]=Math.sqrt(d/c))}}))}}return a}}_getDataItem(e,t){const n=this,r={},a="number"==typeof n.dataSource||n.dataSourceLength;if(!e)return{$:{id:t,isEmpty:!0,index:t}};if("string"==typeof e&&(e={"":e}),a){for(let e=0;e<n.dataFields.length;e++){r[(n.dataFields?n.dataFields[e]:{}).name]=""}return r.$={},r.$.id=t,r.$.index=t,r}const o=e;if(void 0!==o.expanded&&(r.expanded=o.expanded,"true"===o.expanded||!0===o.expanded||1===o.expanded?r.expanded=!0:r.expanded=!1),n.childrenDataField?void 0!==o[n.childrenDataField]&&(r.children=o[n.childrenDataField]):void 0!==o.children?r.children=o.children:void 0!==o.items&&(r.children=o.items),void 0!==o.leaf&&(r.leaf=o.leaf),void 0!==o.level&&(r.level=o.level),n.keyDataField&&void 0!==o[n.keyDataField]&&(r[n.keyDataField]=o[n.keyDataField]),n.parentDataField&&void 0!==o[n.parentDataField]&&(r[n.parentDataField]=o[n.parentDataField]),0===n.dataFields.length){const t=Object.getOwnPropertyNames(e);for(let e=0;e<t.length;e++)"$"!==t[e]&&n.dataFields.push({name:t[e],dataType:"string"})}for(let t=0;t<n.dataFields.length;t++){const a=n.dataFields?n.dataFields[t]:{};let i="";if(null==a)continue;if(e.length&&(i=e[t]),a.map){let e=a.map.split(n.mapChar);if(e.length>0){let t=o;for(let n=0;n<e.length;n++)o&&(t=t[e[n]]);i=t}else i=o[a.map]}null!=i?i=i.toString():void 0===i&&null!==i&&(i="");let l=!1;""===i&&(l=!0,i=e[a.name],null!=i?"array"!==a.dataType&&"date"!==a.dataType&&(i=i.toString()):i=""),"[object Object]"===i&&a.map&&l&&(i=""),n._cachedValues[i+"_"+a.dataType]?i=n._cachedValues[i+"_"+a.dataType]:("bool"===a.dataType||"boolean"===a.dataType?"true"===i||"1"===i?i=!0:"false"!==i&&"0"!==i||(i=!1):i=n.$document.deserialize(""+i,a.dataType,!0),n._cachedValues[i+"_"+a.dataType]=i),"string"!==a.dataType&&"boolean"!==a.dataType&&"bool"!==a.dataType&&(isNaN(i)||i===-1/0||i===1/0)&&(i=0),r[a.name]=i}let i=t;return n.id?(i=o[n.id],"object"==typeof i&&(i=t)):!n.virtualDataSource&&n.dataItemById&&n.dataItemById[i]&&(i=n.length),r.$||(r.$={}),r.$.id=i,r.$.index=t,new Object(r)}_bindToArray(){const e=this,t="number"==typeof e.dataSource||e.dataSourceLength,n=[];e.boundSource.canNotify=!1;for(let r=0;r<e.length;r++){const a=t?{}:e.dataSource[r],o=e._getDataItem(a,r);n.push(o)}if(t&&e.dataSourceLength&&e.dataSource.length>0)for(let t=0;t<e.dataSource.length;t++){const r=e.dataSource[t].cell,a=e.dataSource[t].value,o=r.replace(/[^0-9]/g,""),i=r.replace(/[0-9]/g,"");n[o-1][i]=a}e.boundSource=!1===e.observable?n:new Smart.ObservableArray(n);for(let t=0;t<e.length;t++)e[t]=e.boundSource[t],e.dataItemById[e[t].$.id]=e[t];e.boundSource.canNotify=!0}_bindToJSON(){const e=this,t=[],n=Object.entries(e.dataSource);e.boundSource.canNotify=!1;for(let r=0;r<n.length;r++){const a=n[r],o=e._getDataItem(a,r);t.push(o)}e.boundSource=!1===e.observable?t:new Smart.ObservableArray(t);for(let t=0;t<e.length;t++)e[t]=e.boundSource[t],e.dataItemById[e[t].$.id]=e[t];e.boundSource.canNotify=!0}sortBy(e,t,n){const r=this;if(!t)for(let n=0;n<r.dataFields.length;n++){const a=r.dataFields[n];if(a.name===e){t=a.dataType;break}}if(r.boundHierarchy){const a=function(o){r._sort(o,e,n,t);for(let r=0;r<o.length;r++){const i=o[r];i.children&&a(i.children,e,n,t)}};a(r.boundHierarchy)}else r._sort(r.boundSource,e,n,t)}_createFilter(e,t){const n={"=":"EQUAL","<>":"NOT_EQUAL","<":"LESS_THAN",">":"GREATER_THAN","<=":"LESS_THAN_OR_EQUAL",">=":"GREATER_THAN_OR_EQUAL",equal:"EQUAL","not equal":"NOT_EQUAL","less than":"LESS_THAN","greater than":"GREATER_THAN","greater than or equal":"GREATER_THAN_OR_EQUAL","less than or equal":"LESS_THAN_OR_EQUAL","starts with":"STARTS_WITH","ends with":"ENDS_WITH",null:"null","":"EMPTY",isblank:"EMPTY",isnotblank:"NOT_EMPTY",contains:"CONTAINS",notcontains:"DOES_NOT_CONTAIN",startswith:"STARTS_WITH",endswith:"ENDS_WITH",NULL:"NULL",NOT_NULL:"NOT_NULL"};let r=[];for(let e=0;e<t.length;e++){const n=t[e],a=-1===n.indexOf('"')?n.split(" "):n.split('"');let o=[];for(let e=0;e<a.length;e++){const t=a[e];""!==t&&o.push(t.trim())}r.push(o)}const a=new Smart.FilterGroup,o=[],i=[];for(let t=0;t<r.length;t++){const a=r[t];if(a.length>1){const t=new Smart.FilterGroup;let r="and",o=0;for(let i=0;i<a.length;i++){const l=a[i];if("and"!==l&&"or"!==l){if(o++,2===o){const d=t.createFilter(e,l,n[a[i-1]]);o=0,r&&t.addFilter(r,d)}}else r=l}i.push(t)}else{const e=a[0];if("and"!==e&&"or"!==e)throw new Error('Filter Exprresion expects "AND" or "OR", but the token is: '+e);o.push(e)}}let l=0;if(1===i.length)return i[0];for(let e=0;e<i.length;e++){let t=o[l];(e+1)%2==0&&l++,t||(t="and"),a.addFilter(t,i[e])}return a}filterBy(e,...t){const n=this,r=(()=>{for(let t=0;t<n.dataFields.length;t++){const r=n.dataFields[t];if(r.name===e)return r.dataType}})(),a=n._createFilter(r,t);return n.boundSource.filter(t=>a.evaluate(t[e]))}_filter(e,t="and"){const n=this,r=[],a=[];if(0===e.length)return void n.clearFilter();const o=e=>{for(let t=0;t<n.dataFields.length;t++){const r=n.dataFields[t];if(r.name===e)return r.dataType}};let i,l;"and"===t?(i=!0,l=function(e,t,n){return e&&t.evaluate(n[t.dataField])}):(i=!1,l=function(e,t,n){return e||t.evaluate(n[t.dataField])});for(let t=0;t<e.length;t++){const i=e[t],l=i[0];let d=null;d=i[1]instanceof Smart.FilterGroup?i[1]:n._createFilter(o(l),i.splice(1)),d&&(a.push(l),d.dataField=l,r.push(d))}if(n.boundHierarchy){const e=function(e){let t=i;for(let n=0;n<r.length;n++){const a=r[n];t=l(t,a,e)}return e.$.filtered=t,t},t=function(r,a,o){let i=0;for(let n=0;n<r.length;n++){const o=r[n];e(o),o.$.filtered&&i++,o.children&&t(o.children,o,a)}i>0&&n.groupBy.length>0&&a?(a.$.filtered=!0,o&&!o.$.filtered&&(o.$.filtered=!0)):i>0&&i!==r.length&&a&&(a.$.filtered=null,o&&!o.$.filtered&&(o.$.filtered=null))};t(n.boundHierarchy,null,null)}else for(let e=0;e<n.boundSource.length;e++){const t=n.boundSource[e];let a=i;for(let e=0;e<r.length;e++){const n=r[e];a=l(a,n,t)}t.$.filtered=a}n.onFilter&&n.onFilter()}clearGroup(){const e=this;e.groupBy=[],e.boundHierarchy=null,e.refreshHierarchy(),e.onGroup&&e.onGroup()}clearFilter(){const e=this;for(let t=0;t<e.boundSource.length;t++){e.boundSource[t].$.filtered=!0}if(e.boundHierarchy){const t=function(e,n,r){for(let r=0;r<e.length;r++){const a=e[r];a.$.filtered=!0,a.$.filtered,a.children&&t(a.children,a,n)}n&&(n.$.filtered=!0,r&&!r.$.filtered&&(r.$.filtered=!0))};t(e.boundHierarchy,null,null)}e.onFilter&&e.onFilter()}clearSort(){this._sort(this.boundSource,[],[],[])}_sort(e,t,n,r,a){const o=this;let i=!1;if(0===e.length)return;if(e&&e.constructor&&e instanceof Smart.ObservableArray&&(i=!0),(!e||!Array.isArray(e)||0===e.length||!t||Array.isArray(t)&&0===t.length)&&!i&&!o.boundHierarchy)throw new Error("sort: Missing or Invalid arguments!");"string"==typeof t&&(t=[t]);const l=[],d=[];void 0===n&&(n=[]);const c=function(e,t){let n;switch(t||typeof e){case"string":n=(new Intl.Collator).compare;break;case"number":n=function(e,t){return e-t};break;case"boolean":case"bool":n=function(e,t){return e===t?0:!1===e?-1:1};break;case"date":case"time":case"dateTime":e instanceof Date?n=function(e,t){return e.getTime()-t.getTime()}:(e instanceof Smart.Utilities.DateTime||e instanceof Smart.Utilities.BigNumber)&&(n=function(e,t){return e.compare(t)});break;case"object":if(e instanceof Date)n=function(e,t){return e.getTime()-t.getTime()};else if(e instanceof Smart.Utilities.DateTime||e instanceof Smart.Utilities.BigNumber)n=function(e,t){return e.compare(t)};else if(e instanceof Smart.Utilities.Complex||window.NIComplex&&e instanceof window.NIComplex){const e=new Smart.Utilities.ComplexNumericProcessor;n=function(t,n){return e.compareComplexNumbers(t,n)}}}return n};for(let a=0;a<t.length;a++){void 0===n[a]||"asc"===n[a]||"ascending"===n[a]?l[a]=1:l[a]=-1;const o=e[0][t[a]];d[a]=c(o,r[a])}if(a)a(e,t,n,d);else{e.sort((function(e,n){for(let r=0;r<t.length;r++){const a=d[r](e[t[r]],n[t[r]]);if(0===a){if(t[r+1])continue;return void 0!==e._index?(e._index-n._index)*l[r]:0}return a*l[r]}if(0===t.length)return e.$.index<n.$.index?-1:e.$.index>n.$.index?1:0}));for(let t=0;t<e.length;t++)o[t]=e[t]}}static Filter(e,t,n,r){return e.filter(e=>{let a=!0;for(let o=0;o<n.length;o++){const i=n[o],l=t[o];a=r?a&&r(e,l,i):a&&i.evaluate(e[l])}return a})}filter(e,t,n){Smart.DataAdapter.Filter(this.boundSource,e,t,n)}sort(e,t,n){Smart.DataAdapter.Sort(this.boundSource,e,t,n)}static Sort(e,t,n,r){const a=function(e){let t;switch(typeof e){case"string":t=(new Intl.Collator).compare;break;case"number":t=function(e,t){return e-t};break;case"boolean":t=function(e,t){return e===t?0:!1===e?-1:1};break;case"object":if(e instanceof Date)t=function(e,t){return e.getTime()-t.getTime()};else if(e instanceof Smart.Utilities.DateTime||e instanceof BigNumberNG)t=function(e,t){return e.compare(t)};else if(e instanceof Smart.Utilities.Complex||window.NIComplex&&e instanceof window.NIComplex){const e=new Smart.Utilities.ComplexNumericProcessor;t=function(t,n){return e.compareComplexNumbers(t,n)}}}return t};if(!e||!Array.isArray(e)||0===e.length||!t||Array.isArray(t)&&0===t.length)return;"string"==typeof t&&(t=[t]);const o=[],i=[];void 0===n&&(n=[]);for(let r=0;r<t.length;r++)void 0===n[r]||"asc"===n[r]||"ascending"===n[r]?o[r]=1:o[r]=-1,i[r]=a(e[0][t[r]]);if(r)return void r(e,t,n,i);const l=e.slice(0);return l.sort((function(e,n){for(let r=0;r<t.length;r++){const a=i[r](e[t[r]],n[t[r]]);if(0===a){if(t[r+1])continue;return void 0!==e._index?(e._index-n._index)*o[r]:0}return a*o[r]}})),l}};class n{constructor(e,t){this.config=e,this.callback=t,!1!==e.autoFetch&&this.call(e)}call(e){const t=this;e||(e=t.config);let n="GET",r=e.url,a=null,o=!0;if(e.type&&(n=e.type),e.data)if("GET"===n){r+="?";for(let t in e.data)e.data.hasOwnProperty(t)&&(r+=encodeURI(t+"="+e.data[t]+"&"));"&"===r.charAt(r.length-1)&&(r=r.slice(0,r.length-1))}else"POST"===n&&(a=JSON.stringify(e.data));e&&!1===e.async&&"xlsx"!==e.dataSourceType&&(o=!1),void 0!==window.fetch&&o?t.ajaxFetch(e,n,r,a):t.ajaxXMLHttpRequest(e,n,r,a,o)}ajaxFetch(e,t,n,r){const a=this,o={method:t};let i,l,d,c;switch(e.dataSourceType){case"json":i="json";break;case"xlsx":i="arrayBuffer";break;default:i="text"}if(e&&e.contentType&&(o.headers=new Headers({"Content-Type":e.contentType})),null!==r&&(o.body=r),e.timeout&&(d=setTimeout((function(){c=!0}),e.timeout)),e.beforeSend){if(!1===e.beforeSend(o,e))return}fetch(n,o).then((function(e){if(c)throw l=408,new Error("timeout");if(d&&clearTimeout(d),l=e.status,!e.ok)throw new Error(e.statusText);return e[i]()})).then((function(t){if("arrayBuffer"===i)return JSZip.loadAsync(t).then((function(t){return t.files["xl/worksheets/sheet1.xml"].async("text").then((function(n){return t.files["xl/sharedStrings.xml"].async("text").then((function(t){const r=a.parseXLSXData(n,t);a.ajaxComplete(e,r,l)}))}))}));a.ajaxComplete(e,t,l)})).catch((function(t){"JSZip is not defined"===t.message&&(t.message="JSZip is not defined. Please include a reference to JSZip to be able to load data from XLSX files."),e&&e.loadError&&e.loadError(l,t),a.callback&&a.callback(t,l)}))}ajaxXMLHttpRequest(e,t,n,r,a){const o=new XMLHttpRequest,i=this;if(o.open(t,n,a),o.ontimeout=function(){e&&e.loadError&&e.loadError(408,"timeout")},o.onload=function(){if(4===o.readyState){const t=o.status;let n=o.response;t>=200&&t<=299?("json"===e.dataSourceType&&(n=JSON.parse(n)),i.ajaxComplete(e,n,t)):e&&e.loadError&&e.loadError(t,n)}},o.onerror=function(){e&&e.loadError&&e.loadError(o.status,o.response)},e&&e.contentType&&o.setRequestHeader("Content-Type",e.contentType),a&&e.timeout&&(o.timeout=e.timeout),e.beforeSend){if(!1===e.beforeSend(o,e))return}o.send(r)}ajaxComplete(e,t,n){if(e){if(e.beforeLoadComplete){const n=e.beforeLoadComplete(t);n&&(t=n)}e.loadComplete&&e.loadComplete(t,n),this.callback&&this.callback(t,n)}}parseXLSXData(e,t){const n=new DOMParser,r=n.parseFromString(t,"text/xml"),a=Array.from(r.getElementsByTagName("si")),o=[],i=n.parseFromString(e,"text/xml"),l=Array.from(i.getElementsByTagName("row")),d=[];return a.forEach((function(e){let t=e.getElementsByTagName("t");if(1===t.length)o.push(t[0].innerHTML);else{let e="";t=Array.from(t),t.forEach((function(t){e+=t.innerHTML})),o.push(e)}})),l.forEach((function(e){const t={};Array.from(e.getElementsByTagName("c")).forEach((function(e){const n=e.getAttribute("r").match(/\D+/)[0],r=e.getAttribute("t"),a=e.getElementsByTagName("v")[0].innerHTML;let i;switch(r){case"s":i=o[parseFloat(a)];break;case"b":i=1===parseFloat(a);break;default:i=parseFloat(a)}t[n]=i})),d.push(t)})),d}}}});