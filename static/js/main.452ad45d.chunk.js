(this.webpackJsonpcodexpodcast=this.webpackJsonpcodexpodcast||[]).push([[0],{117:function(e,t,a){},118:function(e,t,a){},120:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},135:function(e,t){},137:function(e,t){},174:function(e,t,a){},175:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(27),r=a.n(n),o=(a(117),a(41)),i=a(7),l=(a(118),a(119),a(190)),d=a(188),j=(a(120),a.p+"static/media/codexLogoSM.d68fdd18.jpg"),b=a(1);var h=function(){return Object(b.jsxs)(l.a,{className:"customNavbar",expand:"lg",variant:"dark",children:[Object(b.jsx)(l.a.Brand,{href:"#home",children:Object(b.jsxs)(o.b,{to:"/",children:[Object(b.jsx)("img",{alt:"Codex Logo",src:j,width:"60",height:"60",className:"d-inline-block align-top navbarLogo"})," "]})}),Object(b.jsxs)(d.a,{align:"end",title:"Menu",id:"nav-dropdown",className:"dropdown",children:[Object(b.jsx)(o.b,{to:"/About",className:"navbarItem",children:"About"}),Object(b.jsx)("br",{}),Object(b.jsx)(o.b,{to:"/Contact",className:"navbarItem",children:"Contact"})]})]})},m=a(26),u=a(35),O=a(39),x=a(37),p=a(84),f=a.n(p),g=a(110),y=a(6),v=(a(125),a(183)),N=(a(126),function(e){var t=e.currentEpisodes;if(e.loading)return Object(b.jsx)("h1",{children:"Loading..."});function a(e){var t=new Date(e),a=t.getFullYear(),c=t.getMonth()+1,s=t.getDate();return s<10&&(s="0"+s),c<10&&(c="0"+c),c+"-"+s+"-"+a}return Object(b.jsx)("div",{children:t.map((function(e,t){return Object(b.jsx)("div",{className:"card mt-2 mb-2 singleEpisode",children:Object(b.jsx)(v.a,{children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)(v.a,{children:Object(b.jsx)("h5",{className:"card-title",children:e.title})}),Object(b.jsx)(v.a,{children:Object(b.jsx)("p",{children:a(e.isoDate)})}),Object(b.jsx)("div",{children:Object(b.jsx)("audio",{className:"customPlayer",controls:"controls",children:Object(b.jsx)("source",{src:e.enclosure.url})})}),Object(b.jsx)(v.a,{children:Object(b.jsx)("p",{className:"card-text",children:e.contentSnippet})})]})})},t)}))})}),C=a(85),w=(a(127),function(e){for(var t=e.episodesPerPage,a=e.totalEpisodes,c=e.paginate,s=[],n=1;n<=Math.ceil(a/t);n++)s.push(n);return Object(b.jsx)(C.a,{className:"paginationStyle",children:s.map((function(e){return Object(b.jsx)(C.a.Item,{onClick:function(){return c(e)},children:e},e)}))})}),k=a(184),S=a(191),T=new(a(128));var D=function(){var e=Object(c.useState)([]),t=Object(y.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(!1),r=Object(y.a)(n,2),o=r[0],i=r[1],l=Object(c.useState)(1),d=Object(y.a)(l,2),j=d[0],h=d[1],m=Object(c.useState)(5),u=Object(y.a)(m,1)[0];function O(){return(O=Object(g.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.next=3,T.parseURL("https://feeds.libsyn.com/141866/rss");case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=j*u,p=x-u,v=a.slice(p,x);return Object(c.useEffect)((function(){var e=!0;return function(){return O.apply(this,arguments)}().then((function(t){e&&(s(t.items.slice(0,25)),i(!1))})),function(){e=!1}}),[]),Object(b.jsxs)(k.a,{className:"episodeContainer",children:[Object(b.jsx)("h3",{className:"recentHeading mt-1",children:"Recent Episodes"}),Object(b.jsxs)(S.a,{className:"episodeCard",children:[Object(b.jsx)(N,{loading:o,currentEpisodes:v}),Object(b.jsx)(w,{className:"paginationStyle",episodesPerPage:u,totalEpisodes:a.length,paginate:function(e){return h(e)}})]})]})},H=a(185),F=a.p+"static/media/UHVGVol1.bd23ec57.jpg",M=a.p+"static/media/UHVGVol2.fc87a1d3.jpg",P=a.p+"static/media/MastersofDoom.7449bc99.jpg";var B=function(){return Object(b.jsxs)(k.a,{className:"episodeContainer",children:[Object(b.jsx)("h3",{className:"recentHeading mt-1",children:"Sources"}),Object(b.jsx)(S.a,{className:"episodeCard",children:Object(b.jsx)("div",{className:"card mt-2 mb-2 singleEpisode",children:Object(b.jsx)(v.a,{children:Object(b.jsxs)("div",{className:"card-body sourceCard",children:[Object(b.jsx)(v.a,{children:Object(b.jsx)("a",{className:"sourceAnchor",href:"https://www.amazon.com/Ultimate-History-Video-Games-Pokemon/dp/0761536434/",children:Object(b.jsx)("h5",{className:"card-title",children:"The Ultimate History of Video Games: From Pong to Pokemon-- The Story Behind the Craze That Touched Our Lives and Changed the World"})})}),Object(b.jsx)(v.a,{children:Object(b.jsx)("h6",{className:"card-title",children:"by Steven L. Kent"})}),Object(b.jsx)(H.a,{fluid:"true",rounded:"true",src:F,alt:"Tyler Ostby"})]})})})}),Object(b.jsx)(S.a,{className:"mt-3 episodeCard",children:Object(b.jsx)("div",{className:"card mt-2 mb-2 singleEpisode",children:Object(b.jsx)(v.a,{children:Object(b.jsxs)("div",{className:"card-body sourceCard",children:[Object(b.jsx)(v.a,{children:Object(b.jsx)("a",{className:"sourceAnchor",href:"https://www.amazon.com/Ultimate-History-Video-Games-Billion-Dollar/dp/1984825437/",children:Object(b.jsx)("h5",{className:"card-title",children:"The Ultimate History of Video Games, Volume 2: Nintendo, Sony, Microsoft, and the Billion-Dollar Battle to Shape Modern Gaming"})})}),Object(b.jsx)(v.a,{children:Object(b.jsx)("h6",{className:"card-title",children:"by Steven L. Kent"})}),Object(b.jsx)(H.a,{fluid:"true",rounded:"true",src:M,alt:"Tyler Ostby"})]})})})}),Object(b.jsx)(S.a,{className:"mt-3 episodeCard",children:Object(b.jsx)("div",{className:"card mt-2 mb-2 singleEpisode",children:Object(b.jsx)(v.a,{children:Object(b.jsxs)("div",{className:"card-body sourceCard",children:[Object(b.jsx)(v.a,{children:Object(b.jsx)("a",{className:"sourceAnchor",href:"https://www.amazon.com/Masters-Doom-Created-Transformed-Culture-ebook/dp/B000FBFNL0/",children:Object(b.jsx)("h5",{className:"card-title",children:"Masters of Doom: How Two Guys Created an Empire and Transformed Pop Culture "})})}),Object(b.jsx)(v.a,{children:Object(b.jsx)("h6",{className:"card-title",children:"by David Kushner"})}),Object(b.jsx)(H.a,{fluid:"true",rounded:"true",src:P,alt:"Tyler Ostby"})]})})})})]})},A=(a(174),a(186)),E=function(e){Object(O.a)(a,e);var t=Object(x.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(k.a,{className:"bannerContainer",children:Object(b.jsx)(H.a,{className:"bannerImage",fluid:"true",rounded:"true",src:"https://ik.imagekit.io/4lalrpwz0sy/codexBanner_gDp77JT5T.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647325128438",alt:"Codex Podcast Banner"})}),Object(b.jsx)(k.a,{children:Object(b.jsxs)(v.a,{className:"mt-3",children:[Object(b.jsx)(A.a,{md:!0,children:Object(b.jsx)(D,{})}),Object(b.jsx)(A.a,{md:!0,children:Object(b.jsx)(B,{})})]})})]})}}]),a}(s.a.Component),L=a.p+"static/media/MikeHeadshot.cbe0b0b9.jpg",G=a.p+"static/media/TylerHeadshot.00b9bc0c.jpg",V=function(e){Object(O.a)(a,e);var t=Object(x.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(k.a,{children:[Object(b.jsx)(v.a,{children:Object(b.jsx)("h3",{className:"recentHeading mt-1",children:"About Codex: History of Video Games"})}),Object(b.jsx)(v.a,{className:"p-3",style:{color:"#FAF3DD"},children:Object(b.jsx)("h5",{children:"Mike Coletta and Tyler Ostby talk about the history of video games. They started from the beginning using the Ultimate History of Video Games Vol. 1 by Steven L. Kent. as a source. Since then, they've branched off to cover the history of individual games, consoles, and moments in video game history! Other books covered so far include Masters of Doom by David Kushner and The Ultimate History of Video Games Vol. 2 by Steven L. Kent."})}),Object(b.jsx)(S.a,{className:"mt-3 p-3 aboutCard",children:Object(b.jsx)(S.a,{className:"mt-2 mb-2 pb-2 singleEpisode",children:Object(b.jsxs)(v.a,{className:"mt-3 aboutRow",children:[Object(b.jsxs)(A.a,{md:!0,className:"aboutCol",children:[Object(b.jsxs)("p",{children:["Mike Coletta is a Seattle based comedian originally from Alaska. When not doing stand-up he loves video games, Dungeons and Dragons, and annoying his cat Delilah. Coletta has performed at The Bridgetown Comedy Festival, Emerald City Comicon, Treefort Fest, and Bumbershoot. He's also the co-host of the HugLife Podcast. You can find Mike on Twitter ",Object(b.jsx)("a",{className:"aboutAnchor",href:"https://twitter.com/MeColetta",target:"_blank",rel:"noreferrer",children:"@MeColetta"})," and on his ",Object(b.jsx)("a",{className:"aboutAnchor",href:"https://colettacomedy.com",target:"_blank",rel:"noreferrer",children:"website."})]}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{children:"Favorite games:"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"Link's Awakening"}),Object(b.jsx)("li",{children:"Breath of the Wild"}),Object(b.jsx)("li",{children:"Doom (2016)"}),Object(b.jsx)("li",{children:"Super Mario World"}),Object(b.jsx)("li",{children:"Perfect Dark"}),Object(b.jsx)("li",{children:"Tony Hawk's Pro Skater"}),Object(b.jsx)("li",{children:"Bioshock"}),Object(b.jsx)("li",{children:"Pokemon Red"}),Object(b.jsx)("li",{children:"Destiny 2"})]})]}),Object(b.jsx)(A.a,{md:!0,xl:4,className:"aboutCol",children:Object(b.jsx)(H.a,{className:"aboutImage",fluid:"true",rounded:"true",src:L,alt:"Mike Coletta"})})]})})}),Object(b.jsx)(S.a,{className:"mt-3 p-3 aboutCard",children:Object(b.jsx)(S.a,{className:"mt-2 mb-2 pb-2 singleEpisode",children:Object(b.jsxs)(v.a,{className:"mt-3 aboutRow",children:[Object(b.jsx)(A.a,{md:!0,xl:4,className:"aboutCol",children:Object(b.jsx)(H.a,{fluid:"true",rounded:"true",src:G,alt:"Tyler Ostby"})}),Object(b.jsxs)(A.a,{md:!0,className:"aboutCol",children:[Object(b.jsxs)("p",{children:["Growing up, Tyler always loved games. From his Super Nintendo all the way to the latest high-end PC games, he's played it all. Originally from Kennewick, WA (the dry, desert-y part of Washington), he now lives in Los Angeles and works in the video game industry as a communications person. You can find him on Twitter ",Object(b.jsx)("a",{className:"aboutAnchor",href:"https://twitter.com/SneakerElph",target:"_blank",rel:"noreferrer",children:"@SneakerElph"})," and occasionally on ",Object(b.jsx)("a",{className:"aboutAnchor",href:"https://www.youtube.com/tylerostby",target:"_blank",rel:"noreferrer",children:"YouTube"})]}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{children:"Favorite games:"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"J-Bird (Obviously)"}),Object(b.jsx)("li",{children:"Banjo Kazooie"}),Object(b.jsx)("li",{children:"Metal Gear Solid"}),Object(b.jsx)("li",{children:"Final Fantasy"}),Object(b.jsx)("li",{children:"Tony Hawk's Pro Skater 2"})]})]})]})})})]})})}}]),a}(s.a.Component),U=a(111),K=a(187),_=a(189);a(175);var I=function(){var e=Object(c.useState)(!1),t=Object(y.a)(e,2),a=t[0],s=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("form",{onSubmit:function(e){e.preventDefault(),U.a.sendForm("service_97vqa14","codex_podcast",e.target,"user_15em2QL9mW3Hn6RUePoFM").then((function(e){console.log(e.text),s(!0)}),(function(e){console.log(e.text)})),e.target.reset()},children:Object(b.jsxs)("div",{className:"row pt-5 mx-auto",children:[Object(b.jsx)("div",{className:"col-8 form-group mx-auto",children:Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"Name",name:"name",required:!0})}),Object(b.jsx)("div",{className:"col-8 form-group pt-2 mx-auto",children:Object(b.jsx)("input",{type:"email",className:"form-control",placeholder:"Email Address",name:"email",required:!0})}),Object(b.jsx)("div",{className:"col-8 form-group pt-2 mx-auto",children:Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"Subject",name:"subject",required:!0})}),Object(b.jsx)("div",{className:"col-8 form-group pt-2 mx-auto",children:Object(b.jsx)("textarea",{className:"form-control",cols:"30",rows:"8",placeholder:"Your message",name:"message",required:!0})}),Object(b.jsx)("div",{className:"col-8 pt-2 mx-auto",children:Object(b.jsx)("input",{type:"submit",className:"btn sendButton",value:"Send"})})]})})}),a&&Object(b.jsx)(K.a,{position:"top-center",children:Object(b.jsxs)(_.a,{show:a,onClose:function(){return s(!a)},children:[Object(b.jsx)(_.a.Header,{children:Object(b.jsx)("strong",{className:"me-auto",children:"Codex Podast"})}),Object(b.jsx)(_.a.Body,{children:"Hotcakes and Gangbusters, your message was sent!"})]})})]})},W=function(e){Object(O.a)(a,e);var t=Object(x.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsxs)(k.a,{children:[Object(b.jsx)(v.a,{children:Object(b.jsx)("h3",{className:"recentHeading mt-1",children:"Contact Us!"})}),Object(b.jsx)(v.a,{style:{color:"#FAF3DD",justifyContent:"center"},children:"Have a question for the show? Send us an email below or at codexhistorypodcast@gmail.com!"})]}),Object(b.jsx)(I,{})]})}}]),a}(s.a.Component);a(176);var q=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(k.a,{className:"customFooter",children:"\xa9 Copyright 2022 - Mike Coletta and Tyler Ostby"})})};var z=function(){return Object(b.jsxs)(o.a,{basename:"",children:[Object(b.jsx)(h,{}),Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{path:"/",element:Object(b.jsx)(E,{})}),Object(b.jsx)(i.a,{path:"/about",element:Object(b.jsx)(V,{})}),Object(b.jsx)(i.a,{path:"/contact",element:Object(b.jsx)(W,{})})]}),Object(b.jsx)(q,{})]})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,192)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(z,{})}),document.getElementById("root")),R()}},[[177,1,2]]]);
//# sourceMappingURL=main.452ad45d.chunk.js.map