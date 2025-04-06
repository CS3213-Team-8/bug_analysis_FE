
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/bug_analysis_FE/index.html","title":"Home"}},[_v("BugSnapper")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"highlight-on":"sibling-or-child","href":"/bug_analysis_FE/userGuide/UserGuide.html"}},[_v("User Guide")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"highlight-on":"sibling-or-child","href":"/bug_analysis_FE/developerGuide/DeveloperGuide.html"}},[_v("Developer Guide")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"highlight-on":"sibling-or-child","href":"/bug_analysis_FE/team/AboutUs.html"}},[_v("About Us")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/CS3213-Team-8/bug_analysis_FE/","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('overlay-source',{attrs:{"id":"site-nav","tag-name":"nav","to":"site-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('site-nav',[_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bug_analysis_FE/index.html"}},[_v("Home")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bug_analysis_FE/userGuide/UserGuide.html"}},[_v("User Guide")]),_v(" "),_c('div',{staticClass:"site-nav-dropdown-btn-container"},[_c('i',{staticClass:"site-nav-dropdown-btn-icon site-nav-rotate-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bug_analysis_FE/userGuide/QuickStart.html"}},[_v("Quick Start")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bug_analysis_FE/userGuide/Features.html"}},[_v("Features")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bug_analysis_FE/userGuide/FAQ.html"}},[_v("FAQ")])])])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bug_analysis_FE/developerGuide/DeveloperGuide.html"}},[_v("Developer Guide")]),_v(" "),_c('div',{staticClass:"site-nav-dropdown-btn-container"},[_c('i',{staticClass:"site-nav-dropdown-btn-icon site-nav-rotate-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bug_analysis_FE/developerGuide/SettingUp.html"}},[_v("Setting Up")])])])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/bug_analysis_FE/team/AboutUs.html"}},[_v("About Us")])])])])],1)],1)]),_v(" "),_c('div',{attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('hr'),_v(" "),_m(1),_v(" "),_c('p',[_v("Welcome to the Developer Guide. As a developer, this guide helps you understand how you can set up the development environment. It is designed to provide you with the necessary information to effectively contribute to the project.")]),_v(" "),_m(2),_v(" "),_c('p',[_v("The main objectives of this guide are to:")]),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_m(5),_v(" "),_c('p',[_v("BugSnapper is built for learning, contribution, and practical impact in database testing — and there’s lots of room for you, as a developer, to shape where it goes next!")]),_v(" "),_m(6),_v(" "),_c('p',[_v("BugSnapper is built using a modern full-stack architecture, combining a responsive React frontend with a lightweight Python-based backend and a robust PostgreSQL database. Here’s an overview of the technologies powering the project:")]),_v(" "),_c('pic',{staticStyle:{"margin-bottom":"20px"},attrs:{"src":"/bug_analysis_FE/images/tech_stack.png"}}),_v(" "),_m(7),_v(" "),_m(8),_v(" "),_c('p',[_v("BugSnapper is built using a modular architecture designed for maintainability and extensibility. The system follows a clear separation of concerns between the frontend, backend, and supporting services.")]),_v(" "),_m(9),_v(" "),_c('div',{staticClass:"text-center"},[_c('pic',{staticStyle:{"margin-bottom":"20px","width":"75%"},attrs:{"src":"/bug_analysis_FE/images/system_context.png"}})],1),_v(" "),_m(10),_v(" "),_c('div',{staticClass:"text-center"},[_c('pic',{staticStyle:{"margin-bottom":"20px","width":"75%"},attrs:{"src":"/bug_analysis_FE/images/backend_context.png"}})],1),_v(" "),_m(11),_v(" "),_c('div',{staticClass:"text-center"},[_c('pic',{staticStyle:{"margin-bottom":"20px","width":"75%"},attrs:{"src":"/bug_analysis_FE/images/frontend_context.png"}})],1),_v(" "),_c('box',{attrs:{"type":"tip"}},[_v("\n  Want to get started with contributing to BugSnapper? Check out the "),_c('a',{attrs:{"href":"/bug_analysis_FE/developerGuide/SettingUp.html"}},[_v("Setting Up and Getting Started")]),_v(" section for a step-by-step guide on how to set up the development environment.\n")])],1),_v(" "),_c('overlay-source',{attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#bugsnapper-developer-guide"}},[_v("BugSnapper Developer Guide‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#introduction"}},[_v("Introduction‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#purpose-of-this-guide"}},[_v("Purpose of this Guide‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#product-overview"}},[_v("Product Overview‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#tech-stack"}},[_v("Tech Stack‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#architecture-overview"}},[_v("Architecture Overview‎")])])])],1)]),_v(" "),_c('scroll-top-button')],1),_v(" "),_m(12)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"bugsnapper-developer-guide"}},[_v("BugSnapper Developer Guide"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#bugsnapper-developer-guide","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"introduction"}},[_v("Introduction"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#introduction","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"purpose-of-this-guide"}},[_v("Purpose of this Guide"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#purpose-of-this-guide","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Orient new developers to the software's tech stack.")]),_v(" "),_c('li',[_v("Provide a brief overview of the software architecture.")]),_v(" "),_c('li',[_v("Detail the setup process for a development environment.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"product-overview"}},[_v("Product Overview"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#product-overview","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("BugSnapper is a web-based bug analysis tool built to support the "),_c('a',{attrs:{"href":"https://github.com/sqlancer/sqlancer"}},[_v("SQLancer")]),_v(" ecosystem by providing insights into bugs across open-source DBMSs like DuckDB, TiDB, and CockroachDB.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"tech-stack"}},[_v("Tech Stack"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tech-stack","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('table',{staticClass:"tech-stack-table"},[_c('thead',[_c('tr',[_c('th',[_v("Layer")]),_v(" "),_c('th',[_v("Technology")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("Frontend")]),_v(" "),_c('td',[_v("React")])]),_v(" "),_c('tr',[_c('td'),_v(" "),_c('td',[_v("Tailwind CSS")])]),_v(" "),_c('tr',[_c('td'),_v(" "),_c('td',[_v("Material UI")])]),_v(" "),_c('tr',[_c('td',[_v("Backend")]),_v(" "),_c('td',[_v("FastAPI")])]),_v(" "),_c('tr',[_c('td'),_v(" "),_c('td',[_v("SQLAlchemy")])]),_v(" "),_c('tr',[_c('td'),_v(" "),_c('td',[_v("OpenAI API")])]),_v(" "),_c('tr',[_c('td'),_v(" "),_c('td',[_v("GitHub API")])]),_v(" "),_c('tr',[_c('td',[_v("Database")]),_v(" "),_c('td',[_v("PostgreSQL")])]),_v(" "),_c('tr',[_c('td',[_v("Testing")]),_v(" "),_c('td',[_v("Pytest")])]),_v(" "),_c('tr',[_c('td'),_v(" "),_c('td',[_v("React Testing Library")])]),_v(" "),_c('tr',[_c('td',[_v("Deployment")]),_v(" "),_c('td',[_v("Vercel (Frontend)")])]),_v(" "),_c('tr',[_c('td'),_v(" "),_c('td',[_v("Render (Backend)")])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"architecture-overview"}},[_v("Architecture Overview"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#architecture-overview","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"system-overview"}},[_v("System Overview"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#system-overview","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"backend-component-overview"}},[_v("Backend Component Overview"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#backend-component-overview","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"web-app-component-overview"}},[_v("Web App Component Overview"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#web-app-component-overview","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("["),_c('span',[_c('strong',[_v("Powered by")])]),_v(" "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.6.0")]),_v("]")])])])}
}];
  