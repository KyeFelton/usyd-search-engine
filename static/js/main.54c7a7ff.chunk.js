(this["webpackJsonpsearch-app"]=this["webpackJsonpsearch-app"]||[]).push([[0],{102:function(e,t,n){},103:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(12),c=n.n(r),l=(n(51),n(3)),o=n.n(l),u=n(6),i=n(7),p=n(16),h=n(46),d=n.p+"static/media/logo.79db4e19.png",b=n(28),m=n(1),j=[{value:"none",label:"-- no filter --"},{value:"Centre",label:"Centre"},{value:"Course",label:"Course"},{value:"Department",label:"Department"},{value:"Generic",label:"Generic"},{value:"News",label:"News"},{value:"Publication",label:"Publication"},{value:"Research",label:"Research"},{value:"Staff",label:"Staff"},{value:"Unit",label:"Unit"}],f=[{value:"name",label:"Name Search"},{value:"literal",label:"Literal Search"}];function O(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),s=n[0],r=n[1],c=Object(a.useState)(""),l=Object(i.a)(c,2),o=l[0],u=l[1],O=Object(a.useState)("name"),x=Object(i.a)(O,2),w=x[0],g=x[1];return Object(m.jsxs)("header",{className:"header container mb-3",id:"header",children:[Object(m.jsxs)("div",{className:"row mb-4",children:[Object(m.jsx)("div",{className:"col-sm-5 col-lg-4 col-xl-3",children:Object(m.jsx)("img",{src:d,className:"img-fluid",alt:"Univeristy of Sydney"})}),Object(m.jsx)("div",{className:"col-sm-3 col-lg-4 col-xl-5"}),Object(m.jsxs)("div",{className:"col-sm-4 col-lg-4 col-xl-4",children:[Object(m.jsx)(b.a,{options:j,menuPortalTarget:document.body,styles:{menuPortal:function(e){return Object(p.a)(Object(p.a)({},e),{},{zIndex:9999})}},onChange:function(e){"none"!==e.value?r("FILTER ( ?class IN ( ont:".concat(e.value," ) )")):r("")}}),Object(m.jsx)("p",{}),Object(m.jsx)(b.a,{options:f,menuPortalTarget:document.body,styles:{menuPortal:function(e){return Object(p.a)(Object(p.a)({},e),{},{zIndex:9999})}},onChange:function(e){g(e.value)}})]})]}),Object(m.jsx)("form",{onSubmit:function(t){t.preventDefault(),e.updateList(o,s,w)},children:Object(m.jsxs)("div",{className:"input-group mb-3",children:[Object(m.jsx)("input",{type:"text",className:"form-control",placeholder:"Search","aria-label":"Search","aria-describedby":"basic-addon1",value:o,onChange:function(e){u(e.target.value)}}),Object(m.jsx)("button",{type:"submit",className:"btn btn-primary",children:Object(m.jsx)(h.a,{})})]})})]})}function x(e){return null===e.results?null:0===e.results.length?Object(m.jsx)("p",{className:"m-3",children:"Searching..."}):""===e.results[0][0]?Object(m.jsx)("p",{className:"m-3",children:"No results found."}):Object(m.jsx)("ul",{className:"list-group list-group-flush",children:e.results.map((function(t,n){return Object(m.jsxs)("li",{id:n,className:"list-group-item list-group-item-action text-break",children:[Object(m.jsx)("a",{className:"result-title",href:"#header",onClick:function(){return n=t[0],void e.updatePanel(n);var n},children:""===t[2]?t[3]:t[2]}),Object(m.jsx)("p",{className:"result-class",children:t[4].replace("http://www.sydney.edu.au/ont/","")}),Object(m.jsx)("p",{className:"result-summary",children:t[5]}),Object(m.jsx)("a",{href:t[5],className:"result-link",target:"_blank",rel:"noreferrer",children:t[6]})]})}))})}function w(e){function t(t){e.updatePanel(t)}return null===e.results?null:Object(m.jsxs)("div",{className:"panel",id:"panel",children:[Object(m.jsx)("h2",{className:"panel-title",children:Object(m.jsx)("a",{href:e.results.homepage,target:"_blank",rel:"noreferrer",children:e.results.name})}),Object(m.jsx)("p",{className:"panel-class",children:e.results.type.toString().replace("http://www.sydney.edu.au/ont/","")}),Object(m.jsx)("p",{className:"panel-summary",children:e.results.summary}),e.results.attr.map((function(e){return""!==e[0]?Object(m.jsxs)("div",{className:"panel-attribute",children:[Object(m.jsxs)("b",{children:[e[0],": "]}),e[1].map((function(e,n,a){var s="";return n<a.length-1&&(s=","),""!==e[1]?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("a",{className:"panel-object",href:"#header",onClick:function(){return t(e[0])},children:e[1]}),s,"\xa0"]}):""!==e[2]?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("a",{className:"panel-object",href:"#header",onClick:function(){return t(e[0])},children:e[2]}),s,"\xa0"]}):e[0].includes("http://www.sydney.edu.au/kg")?null:e[0].startsWith("http:")?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("a",{className:"panel-object",href:e[0],children:e[0]}),s,"\xa0"]}):Object(m.jsxs)("span",{className:"panel-literal",children:[e[0],s,"\xa0"]})}))]}):null}))]})}var g=n(18),S=n(27),y=n(14),A=n.n(y),v=n(15),E="https://34.116.92.233:5821/usyd/query",N={username:"reader",password:"usyd"},L={Accept:"application/json-ld, text/csv","Access-Control-Allow-Headers":"accept, Authorization,  origin, sd-connection-string","Access-Control-Allow-Methods":"OPTIONS, GET","Access-Control-Allow-Origin":"*"};function P(e){return C.apply(this,arguments)}function C(){return(C=Object(u.a)(o.a.mark((function e(t){var n,a,s,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="\n        prefix stardog: <tag:stardog:api:property:>\n        prefix ont: <http://www.sydney.edu.au/kg/ont/>\n        prefix owl: <http://www.w3.org/2002/07/owl#>\n        prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n        \n        SELECT ?pX\n        ?o \n        (SAMPLE(?oname) AS ?oname)\n        (SAMPLE(?olabel) AS ?olabel) WHERE {\n            {\n                SELECT ?p ?o WHERE {\n                    <".concat(t,'> ?p ?o .\n                }\n            }\n            OPTIONAL { ?o ont:name ?oname . }\n            OPTIONAL { ?o rdfs:label ?olabel . }\n            BIND(REPLACE(str(?p), "http://www.sydney.edu.au/ont/", "", "i") AS ?pX)\n        }\n        GROUP BY ?pX ?o\n        ORDER BY asc(?pX)\n    '),a=null,e.next=4,A.a.get(E,{params:{query:n},auth:N,headers:L}).then((function(e){var t=Object(v.a)(e.data).data;t.shift(),t.pop();var n,a=new Map,s=Object(S.a)(t);try{for(s.s();!(n=s.n()).done;){var r=n.value,c=r.shift();c.includes("http:")&&(c=c.split("#")[1]),c=(c=c.replace(/([A-Z])/g," $1")).charAt(0).toUpperCase()+c.slice(1),a.has(c)||a.set(c,[]),a.get(c).push(r)}}catch(l){s.e(l)}finally{s.f()}return a})).catch((function(e){return console.log(e),null}));case 4:if(null!==(a=e.sent)){e.next=9;break}return e.abrupt("return",null);case 9:return c=function(e){for(var t=null,n=arguments.length,a=new Array(n>1?n-1:0),s=1;s<n;s++)a[s-1]=arguments[s];for(var r=0,c=a;r<c.length;r++){var l=c[r];null===t&&e.get(l)&&(t=Array.isArray(e.get(l)[0])?e.get(l)[0][0]:e.get(l)[0]),e.delete(l)}return t},n="\n            prefix stardog: <tag:stardog:api:property:>\n            prefix ont: <http://www.sydney.edu.au/kg/ont/>\n            prefix owl: <http://www.w3.org/2002/07/owl#>\n            prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n            \n            SELECT ?sclassX\n            ?s\n            (SAMPLE(?sname) AS ?sname)\n            (SAMPLE(?slabel) AS ?slabel) WHERE {\n                {\n                    SELECT ?s ?p WHERE {\n                        ?s ?p <".concat(t,'> .\n                    }\n                }\n                ?s a ?sclass .\n                OPTIONAL { ?s ont:name ?sname . }\n                OPTIONAL { ?s rdfs:label ?slabel . }\n                BIND(REPLACE(str(?sclass), "http://www.sydney.edu.au/ont/", "", "i") AS ?sclassX)\n            }\n            GROUP BY ?sclassX ?s\n            ORDER BY asc(?sclassX)\n        '),s=null,e.next=14,A.a.get(E,{params:{query:n},auth:N,headers:L}).then((function(e){var t=Object(v.a)(e.data).data;t.shift(),t.pop();var n,a=new Map,s=Object(S.a)(t);try{for(s.s();!(n=s.n()).done;){var r=n.value,c=r.shift();c=(c=c.replace(/([A-Z])/g," $1")).charAt(0).toUpperCase()+c.slice(1),a.has(c)||a.set(c,[]),a.get(c).push(r)}}catch(l){s.e(l)}finally{s.f()}return a}));case 14:return s=e.sent,r=null!==s?new Map([].concat(Object(g.a)(a),Object(g.a)(s))):a,e.abrupt("return",{name:c(r,"Name","Label"),type:c(r,"Type"),homepage:c(r,"Homepage","Website"),summary:c(r,"Summary","Description","Bio","Blurb","Media"),attr:Object(g.a)(r.entries())});case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e,t){return I.apply(this,arguments)}function I(){return(I=Object(u.a)(o.a.mark((function e(t,n){var a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return[],s='\n        prefix fts: <tag:stardog:api:search:>\n        prefix ont: <http://www.sydney.edu.au/kg/ont/>\n        prefix owl: <http://www.w3.org/2002/07/owl#>\n                \n        SELECT ?s (MAX(?score) AS ?score) \n            (SAMPLE(?name) AS ?name) \n            (SAMPLE(?label) AS ?label) \n            (SAMPLE(?class) AS ?class)\n            (SAMPLE(?summ) AS ?summ)\n            (SAMPLE(?homepage) AS ?homepage) \n            (MAX(?match) AS ?match) WHERE {\n            { \n                SELECT ?score ?result WHERE {\n                    SERVICE fts:textMatch {\n                        [] fts:query "'.concat(t,'";\n                            fts:score ?score ;\n                            fts:result ?result ;\n                            fts:threshold 0.5;\n                    } \n                }\n            }\n            ?s ?p ?result ; \n                ont:name ?name ; \n                rdfs:label ?label ;\n                ont:homepage ?homepage ;\n                a ?class .\n            BIND ( IF ( LCASE(?label) = LCASE("').concat(t,'"), 1, 0 ) AS ?match ) .\n            OPTIONAL { ?s ont:summary ?summ . }\n            FILTER ( ?class NOT IN ( owl:Thing ) )\n            ').concat(n,"\n        } \n        GROUP BY ?s \n        ORDER BY DESC(?match) DESC(?score)\n        LIMIT 100\n    "),a=A.a.get(E,{params:{query:s},auth:N,headers:L}).then((function(e){var t=Object(v.a)(e.data).data;return t.shift(),t.pop(),t})).catch((function(e){return console.log(e),[[""]]})),e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e,t){return T.apply(this,arguments)}function T(){return(T=Object(u.a)(o.a.mark((function e(t,n){var a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return[],s='\n        prefix stardog: <tag:stardog:api:property:>\n        prefix ont: <http://www.sydney.edu.au/kg/ont/>\n        prefix owl: <http://www.w3.org/2002/07/owl#>\n        \n        SELECT ?s (MAX(?score) AS ?score) \n            (SAMPLE(?name) AS ?name)\n            (SAMPLE(?label) AS ?label) \n            (SAMPLE(?class) AS ?class)\n            (SAMPLE(?summ) AS ?summ)\n            (SAMPLE(?homepage) AS ?homepage)\n            (MAX(?match) AS ?match) WHERE {\n\n            ?s rdfs:label ?label .\n            (?label ?score) stardog:textMatch "'.concat(t,'" .\n            BIND ( IF ( LCASE(?label) = LCASE("').concat(t,'"), 1, 0 ) AS ?match ) .\n\n            ?s ?p ?result ; \n                ont:name ?name ; \n                ont:homepage ?homepage ;\n                a ?class .\n            OPTIONAL { ?s ont:summary ?summ . }\n            FILTER ( ?class NOT IN ( owl:Thing ) )\n            ').concat(n,"\n        }\n        GROUP BY ?s \n        ORDER BY DESC(?match) desc(?score) asc(strlen(str(?name)))\n        LIMIT 100\n    "),a=A.a.get(E,{params:{query:s},auth:N,headers:L}).then((function(e){var t=Object(v.a)(e.data).data;return t.shift(),t.pop(),t})).catch((function(e){return console.log(e),[[""]]})),e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(102);function k(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(null),c=Object(i.a)(r,2),l=c[0],p=c[1];function h(){return(h=Object(u.a)(o.a.mark((function e(t,n,a){var r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s([]),p(null),r=[],e.t0=a,e.next="name"===e.t0?6:"literal"===e.t0?10:14;break;case 6:return e.next=8,R(t,n);case 8:return r=e.sent,e.abrupt("break",18);case 10:return e.next=12,M(t,n);case 12:return r=e.sent,e.abrupt("break",18);case 14:return e.next=16,R(t,n);case 16:return r=e.sent,e.abrupt("break",18);case 18:if(s(r),""===r[0][0]){e.next=25;break}return c=[],e.next=23,P(r[0][0]);case 23:c=e.sent,p(c);case 25:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return b.apply(this,arguments)}function b(){return(b=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(null),n=[],e.next=4,P(t);case 4:n=e.sent,p(n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(m.jsxs)("div",{className:"app",children:[Object(m.jsxs)("div",{className:"main",children:[Object(m.jsx)(O,{updateList:function(e,t,n){return h.apply(this,arguments)}}),Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-8",children:Object(m.jsx)(x,{results:n,updatePanel:d})}),Object(m.jsx)("div",{className:"col-4",children:Object(m.jsx)(w,{results:l,updatePanel:d})})]})})]}),Object(m.jsx)("div",{className:"error",children:"Please view on a larger screen."})]})}c.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(k,{})}),document.getElementById("root"))},51:function(e,t,n){},90:function(e,t){},92:function(e,t){}},[[103,1,2]]]);
//# sourceMappingURL=main.54c7a7ff.chunk.js.map