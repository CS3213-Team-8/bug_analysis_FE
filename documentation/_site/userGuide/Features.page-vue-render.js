
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/index.html","title":"Home"}},[_v("BugSnapper")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"highlight-on":"sibling-or-child","href":"/userGuide/UserGuide.html"}},[_v("User Guide")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"highlight-on":"sibling-or-child","href":"/developerGuide/DeveloperGuide.html"}},[_v("Developer Guide")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"highlight-on":"sibling-or-child","href":"/team/AboutUs.html"}},[_v("About Us")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/CS3213-Team-8/bug_analysis_FE/","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('overlay-source',{attrs:{"id":"site-nav","tag-name":"nav","to":"site-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('site-nav',[_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/index.html"}},[_v("Home")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/UserGuide.html"}},[_v("User Guide")]),_v(" "),_c('div',{staticClass:"site-nav-dropdown-btn-container"},[_c('i',{staticClass:"site-nav-dropdown-btn-icon site-nav-rotate-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/QuickStart.html"}},[_v("Quick Start")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/Features.html"}},[_v("Features")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/FAQ.html"}},[_v("FAQ")])])])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/developerGuide/DeveloperGuide.html"}},[_v("Developer Guide")]),_v(" "),_c('div',{staticClass:"site-nav-dropdown-btn-container"},[_c('i',{staticClass:"site-nav-dropdown-btn-icon site-nav-rotate-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/developerGuide/SettingUp.html"}},[_v("Setting Up")])])])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/team/AboutUs.html"}},[_v("About Us")])])])])],1)],1)]),_v(" "),_c('div',{attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('hr'),_v(" "),_m(1),_v(" "),_m(2),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_m(5),_v(" "),_m(6),_v(" "),_m(7),_v(" "),_m(8),_v(" "),_c('hr'),_v(" "),_m(9),_v(" "),_c('hr'),_v(" "),_m(10),_v(" "),_m(11),_v(" "),_c('p',[_v("This feature allows you to view the Mean Time-to-Fix (TTF) for each DBMS (in hours).")]),_v(" "),_c('box',{attrs:{"type":"warning"},scopedSlots:_u([{key:"icon",fn:function(){return [_v("👤")]},proxy:true}])},[_v(" "),_c('h6',{staticStyle:{"color":"black","margin-bottom":"2px"},attrs:{"id":"who-is-it-for"}},[_v("Who is it for?"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#who-is-it-for","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v(" SQLancer and Database Developers who want to manage the resolution of bugs in the DBMSs. ")])])]),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_v("\nTime-to-Fix (TTF) is calculated as the difference in hours between the time the bug was reported (issue created on GitHub) and the time it was resolved (issue closed on GitHub).\n")]),_v(" "),_c('pic',{staticStyle:{"margin-bottom":"20px"},attrs:{"src":"/images/mean-ttf.png"}},[_v("\nMean-TTF Feature\n")]),_v(" "),_m(12),_v(" "),_m(13),_v(" "),_c('panel',{attrs:{"type":"success","expanded":""},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_c('strong',[_v("Steps to use")])])]},proxy:true}])},[_v(" "),_c('ol',[_c('li',[_v("Go to the "),_c('strong',[_v("Visualization")]),_v(" Page.")]),_v(" "),_c('li',[_v("View the bar chart displaying the Mean TTF for each DBMS.")])]),_v(" "),_c('div',{staticStyle:{"text-align":"center"}},[_c('pic',{staticStyle:{"width":"600px"},attrs:{"src":"/images/ttf_1.png"}})],1),_v(" "),_c('br'),_v(" "),_c('ol',{attrs:{"start":"3"}},[_c('li',[_v("Hover over each bar to see the exact Mean TTF value for that DBMS.")])]),_v(" "),_c('div',{staticStyle:{"text-align":"center"}},[_c('pic',{staticStyle:{"width":"600px"},attrs:{"src":"/images/ttf_2.png"}})],1),_v(" "),_c('br')]),_v(" "),_c('hr'),_v(" "),_m(14),_v(" "),_m(15),_v(" "),_c('p',[_v("This feature allows you to view the number of bugs found across different DBMSs.")]),_v(" "),_c('box',{attrs:{"type":"warning"},scopedSlots:_u([{key:"icon",fn:function(){return [_v("👤")]},proxy:true}])},[_v(" "),_c('h6',{staticStyle:{"color":"black","margin-bottom":"2px"},attrs:{"id":"who-is-it-for-2"}},[_v("Who is it for?"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#who-is-it-for-2","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v(" Database Developer who wants a visualisation for the state of bugs in their DBMS. ")]),_v(" "),_c('li',[_v(" Backend Developer who wants to identify trends in the number of bugs across different DBMSs, to choose one effectively. ")])])]),_v(" "),_c('box',{attrs:{"type":"warning","seamless":""}},[_v("\nThe currently displayed count values are not representative of the total number of bugs found in the DBMSs. The values are based on some number of open and closed issues pulled from GitHub.\n")]),_v(" "),_c('pic',{staticStyle:{"margin-bottom":"20px"},attrs:{"src":"/images/num-bugs.png"}},[_v("\nNumber of Bugs Across DBMSs\n")]),_v(" "),_m(16),_v(" "),_m(17),_v(" "),_c('panel',{attrs:{"type":"success","expanded":""},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_c('strong',[_v("Steps to use")])])]},proxy:true}])},[_v(" "),_c('ol',[_c('li',[_v("Go to the "),_c('strong',[_v("Visualization")]),_v(" Page.")]),_v(" "),_c('li',[_v("View the bar chart displaying the number of bugs found across different DBMSs.")])]),_v(" "),_c('div',{staticStyle:{"text-align":"center"}},[_c('pic',{staticStyle:{"width":"600px"},attrs:{"src":"/images/num-bugs_1.png"}})],1),_v(" "),_c('br'),_v(" "),_c('ol',{attrs:{"start":"3"}},[_c('li',[_v("Hover over each bar to see the exact number of bugs for that DBMS.")])]),_v(" "),_c('div',{staticStyle:{"text-align":"center"}},[_c('pic',{staticStyle:{"width":"600px"},attrs:{"src":"/images/num-bugs_2.png"}})],1),_v(" "),_c('br')]),_v(" "),_c('hr'),_v(" "),_m(18),_v(" "),_m(19),_v(" "),_c('p',[_v("This feature allows you to view the distribution of bugs across different categories, for each DBMS.")]),_v(" "),_c('box',{attrs:{"type":"warning"},scopedSlots:_u([{key:"icon",fn:function(){return [_v("👤")]},proxy:true}])},[_v(" "),_c('h6',{staticStyle:{"color":"black","margin-bottom":"2px"},attrs:{"id":"who-is-it-for-3"}},[_v("Who is it for?"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#who-is-it-for-3","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v(" SQLancer Developer who wants to compare the types/categories of database bugs reported across different DBMS to identiify common vulnerabilities and areas where SQLancer's testing could be improved. ")])])]),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_v("\nCurrently, the categories are fixed and set by the development team. The categories are: "),_c('strong',[_v("Security Vulnerabilities")]),_v(", "),_c('strong',[_v("Build Issues")]),_v(", "),_c('strong',[_v("Performance Bugs")]),_v(", "),_c('strong',[_v("Join Processing Bugs")]),_v(", "),_c('strong',[_v("Query Optimization Bugs")]),_v(", "),_c('strong',[_v("Predicate Evaluation Bugs")]),_v(", "),_c('strong',[_v("Suggestions")]),_v(" (and "),_c('strong',[_v("Others")]),_v(" as a catch-all).\n")]),_v(" "),_c('box',{attrs:{"type":"warning","seamless":""}},[_v("\nCurrently, the classification of bugs into categories is done using AI tools, so accuracy is not guaranteed.\n")]),_v(" "),_c('pic',{staticStyle:{"margin-bottom":"20px"},attrs:{"src":"/images/cat-distr.png"}},[_v("\nBugs Distribution across Categories\n")]),_v(" "),_m(20),_v(" "),_m(21),_v(" "),_c('panel',{attrs:{"type":"success","expanded":""},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_c('strong',[_v("Steps to use")])])]},proxy:true}])},[_v(" "),_c('ol',[_c('li',[_v("Go to the "),_c('strong',[_v("Visualization")]),_v(" Page.")]),_v(" "),_c('li',[_v("View the multi-bar chart displaying the distribution of bugs across difference categories for each DBMS.")])]),_v(" "),_c('div',{staticStyle:{"text-align":"center"}},[_c('pic',{staticStyle:{"width":"600px"},attrs:{"src":"/images/cat-distr_1.png"}})],1),_v(" "),_c('br'),_v(" "),_c('ol',{attrs:{"start":"3"}},[_c('li',[_v("Hover over each bar to see the exact number of bugs for that category and DBMS.")])]),_v(" "),_c('div',{staticStyle:{"text-align":"center"}},[_c('pic',{staticStyle:{"width":"600px"},attrs:{"src":"/images/cat-distr_2.png"}})],1),_v(" "),_c('br')]),_v(" "),_c('hr'),_v(" "),_m(22),_v(" "),_m(23),_v(" "),_c('p',[_v("This feature recommends the most suitable DBMS based on your project’s requirements.")]),_v(" "),_c('box',{attrs:{"type":"warning"},scopedSlots:_u([{key:"icon",fn:function(){return [_v("👤")]},proxy:true}])},[_v(" "),_c('h6',{staticStyle:{"color":"black","margin-bottom":"2px"},attrs:{"id":"who-is-it-for-4"}},[_v("Who is it for?"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#who-is-it-for-4","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v(" Backend Developers who are looking to select a DBMS based on their project's needs. ")])])]),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_v("\n    Tip: The accuracy of DBMS suggestions improves with more specific and detailed prompts.\n")]),_v(" "),_m(24),_v(" "),_m(25),_v(" "),_c('panel',{attrs:{"type":"success","expanded":""},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_c('strong',[_v("Steps to use")])])]},proxy:true}])},[_v(" "),_c('ol',[_c('li',[_v("Go to the "),_c('strong',[_v("Visualization")]),_v(" Page.")]),_v(" "),_c('li',[_v("Click "),_c('strong',[_v("\"GET SUGGEST DBMS\"")]),_v(" in the top-right corner.")])]),_v(" "),_c('div',{staticStyle:{"text-align":"center"}},[_c('pic',{staticStyle:{"width":"600px"},attrs:{"src":"/images/get-suggest.png"}})],1),_v(" "),_c('br'),_v(" "),_c('ol',{attrs:{"start":"3"}},[_c('li',[_c('strong',[_v("Enter Project Requirements")]),_v(". Provide detailed information about your project needs.")])]),_v(" "),_c('div',{staticStyle:{"text-align":"center"}},[_c('pic',{staticStyle:{"width":"600px"},attrs:{"src":"/images/get-suggest-2.png"}})],1),_v(" "),_c('br'),_v(" "),_c('panel',{scopedSlots:_u([{key:"header",fn:function(){return [_c('p',{staticClass:"card-title"},[_c('i',[_c('strong',[_c('span',[_v("Example requirements")])])])])]},proxy:true}])},[_v(" "),_c('ul',[_c('li',[_v("Operational Needs (e.g., low overhead, minimal maintenance)")]),_v(" "),_c('li',[_v("Performance (e.g., high-speed queries, large dataset handling)")]),_v(" "),_c('li',[_v("Automation & Integration (e.g., Kubernetes, CI/CD support)")]),_v(" "),_c('li',[_v("Stability (e.g., no frequent build failures)")]),_v(" "),_c('li',[_v("Scalability (e.g., handles data growth and traffic)")])])]),_v(" "),_c('br'),_v(" "),_c('ol',{attrs:{"start":"4"}},[_c('li',[_c('strong',[_v("Review the Suggested DBMS")]),_v("."),_c('br'),_v("\nThe system will suggest a DBMS along with a rationale for its selection. Review the suggestion to ensure it fits your project needs.")])]),_v(" "),_c('div',{staticStyle:{"text-align":"center"}},[_c('pic',{staticStyle:{"width":"600px"},attrs:{"src":"/images/get-suggest-3.png"}})],1),_v(" "),_c('br'),_v(" "),_c('ol',{attrs:{"start":"5"}},[_c('li',[_v("Click on the "),_c('strong',[_v("Cancel")]),_v(" button, or anywhere outside the pop-up dialog to close the dialog.")])])],1),_v(" "),_c('hr'),_v(" "),_m(26),_v(" "),_m(27),_v(" "),_c('p',[_v("This feature allows you to view the distribution of bugs across different categories, for a specific DBMS.")]),_v(" "),_c('box',{attrs:{"type":"warning"},scopedSlots:_u([{key:"icon",fn:function(){return [_v("👤")]},proxy:true}])},[_v(" "),_c('h6',{staticStyle:{"color":"black","margin-bottom":"2px"},attrs:{"id":"who-is-it-for-5"}},[_v("Who is it for?"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#who-is-it-for-5","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v(" DBMS Developers who want to identify common vulnerabilities in their DBMS to improve testing efforts. ")])])]),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_v("\nThis feature is a DBMS-specific version of the "),_c('a',{attrs:{"href":"#feature-categories-distr"}},[_v("View Bugs Distribution across different Categories")]),_v(" feature.\n")]),_v(" "),_c('pic',{staticStyle:{"margin-bottom":"20px"},attrs:{"src":"/images/catd.png"}},[_v("\nBugs Distribution across Categories\n")]),_v(" "),_m(28),_v(" "),_m(29),_v(" "),_c('panel',{attrs:{"type":"success","expanded":""},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_c('strong',[_v("Steps to use")])])]},proxy:true}])},[_v(" "),_c('ol',[_c('li',[_v("Go to the "),_c('strong',[_v("Visualization")]),_v(" Page.")]),_v(" "),_c('li',[_v("Use the tabs to navigate to the page of the DBMS you want to view.")])]),_v(" "),_c('div',{staticStyle:{"text-align":"center"}},[_c('pic',{staticStyle:{"width":"600px"},attrs:{"src":"/images/catd_1.png"}})],1),_v(" "),_c('br'),_v("\n  3. View the bar chart displaying the distribution of bugs across different categories.\n  "),_c('div',{staticStyle:{"text-align":"center"}},[_c('pic',{staticStyle:{"width":"600px"},attrs:{"src":"/images/catd_2.png"}})],1),_v(" "),_c('br'),_v("\n  4. Hover over each bar to see the exact number of bugs for that category.\n"),_c('div',{staticStyle:{"text-align":"center"}},[_c('pic',{staticStyle:{"width":"600px"},attrs:{"src":"/images/catd_3.png"}})],1),_v(" "),_c('br')]),_v(" "),_c('hr'),_v(" "),_m(30),_v(" "),_m(31),_v(" "),_c('p',[_v("This feature allows you to view the number of opened vs closed issues per month for a specific DBMS.")]),_v(" "),_c('box',{attrs:{"type":"warning"},scopedSlots:_u([{key:"icon",fn:function(){return [_v("👤")]},proxy:true}])},[_v(" "),_c('h6',{staticStyle:{"color":"black","margin-bottom":"2px"},attrs:{"id":"who-is-it-for-6"}},[_v("Who is it for?"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#who-is-it-for-6","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v(" DBMS Developers who want to visualise the state of bug resolution in their organisation. ")])])]),_v(" "),_c('pic',{staticStyle:{"margin-bottom":"20px"},attrs:{"src":"/images/oc.png"}},[_v("\nOpened and Closed Issues per Month\n")]),_v(" "),_m(32),_v(" "),_m(33),_v(" "),_c('panel',{attrs:{"type":"success","expanded":""},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_c('strong',[_v("Steps to use")])])]},proxy:true}])},[_v(" "),_c('ol',[_c('li',[_v("Go to the "),_c('strong',[_v("Visualization")]),_v(" Page.")]),_v(" "),_c('li',[_v("Use the tabs to navigate to the page of the DBMS you want to view.")])]),_v(" "),_c('div',{staticStyle:{"text-align":"center"}},[_c('pic',{staticStyle:{"width":"600px"},attrs:{"src":"/images/catd_1.png"}})],1),_v(" "),_c('br'),_v(" \n  3. View the line chart displaying the number of opened vs closed issues per month for the DBMS.\n  "),_c('div',{staticStyle:{"text-align":"center"}},[_c('pic',{staticStyle:{"width":"600px"},attrs:{"src":"/images/oc_1.png"}})],1),_v(" "),_c('br'),_v(" \n  4. Hover over each point to see the exact number of opened and closed issues for that month.\n  "),_c('div',{staticStyle:{"text-align":"center"}},[_c('pic',{staticStyle:{"width":"600px"},attrs:{"src":"/images/oc_2.png"}})],1),_v(" "),_c('br')]),_v(" "),_c('hr'),_v(" "),_m(34),_v(" "),_m(35),_v(" "),_c('p',[_v("This feature allows you to view a summary of bugs found for a specific DBMS.")]),_v(" "),_c('box',{attrs:{"type":"warning"},scopedSlots:_u([{key:"icon",fn:function(){return [_v("👤")]},proxy:true}])},[_v(" "),_c('h6',{staticStyle:{"color":"black","margin-bottom":"2px"},attrs:{"id":"who-is-it-for-7"}},[_v("Who is it for?"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#who-is-it-for-7","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v(" SQlancer and Database Developers who want to get an overview of the state of bugs in a specific DBMS. ")])])]),_v(" "),_c('box',{attrs:{"type":"warning","seamless":""}},[_v("\nThe summary is generated using AI tools, so accuracy is not guaranteed. Always verify the summary based on your own understanding of the data!\n")]),_v(" "),_c('pic',{staticStyle:{"margin-bottom":"20px"},attrs:{"src":"/images/sum.png"}},[_v("\nDBMS Summary Feature\n")]),_v(" "),_m(36),_v(" "),_m(37),_v(" "),_c('panel',{attrs:{"type":"success","expanded":""},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_c('strong',[_v("Steps to use")])])]},proxy:true}])},[_v(" "),_c('ol',[_c('li',[_v("Go to the "),_c('strong',[_v("Visualisation")]),_v(" Page.")]),_v(" "),_c('li',[_v("Use the tabs to navigate to the page of the DBMS you want to view.")])]),_v(" "),_c('div',{staticStyle:{"text-align":"center"}},[_c('pic',{staticStyle:{"width":"600px"},attrs:{"src":"/images/catd_1.png"}})],1),_v(" "),_c('br'),_v(" \n  3. View the bugs summary for the DBMS under "),_c('strong',[_v("Summary Statistics")]),_v(".\n  "),_c('div',{staticStyle:{"text-align":"center"}},[_c('pic',{staticStyle:{"width":"600px"},attrs:{"src":"/images/sum_1.png"}})],1),_v(" "),_c('br')]),_v(" "),_c('hr'),_v(" "),_m(38),_v(" "),_m(39),_v(" "),_c('p',[_v("This feature allows you to get a solution for the bug you are currently viewing.")]),_v(" "),_c('box',{attrs:{"type":"warning"},scopedSlots:_u([{key:"icon",fn:function(){return [_v("👤")]},proxy:true}])},[_v(" "),_c('h6',{staticStyle:{"color":"black","margin-bottom":"2px"},attrs:{"id":"who-is-it-for-8"}},[_v("Who is it for?"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#who-is-it-for-8","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v(" DBMS Developers who want to resolve bugs quickly and reduce debugging time. ")])])]),_v(" "),_c('box',{attrs:{"type":"warning","seamless":""}},[_v("\nThe solution is generated using AI tools, so accuracy is not guaranteed. Always verify the solution before applying it to your code!\n")]),_v(" "),_c('box',{attrs:{"type":"warning","seamless":""}},[_v("\nSince the solution is AI-generated, it may vary from run-to-run.\n")]),_v(" "),_c('pic',{staticStyle:{"margin-bottom":"20px"},attrs:{"src":"/images/sol.png"}},[_v("\nGet Bug Solution feature\n")]),_v(" "),_m(40),_v(" "),_m(41),_v(" "),_c('panel',{attrs:{"type":"success","expanded":""},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_c('strong',[_v("Steps to use")])])]},proxy:true}])},[_v(" "),_c('ol',[_c('li',[_v("Go to the "),_c('strong',[_v("Bugs List")]),_v(" Page.")]),_v(" "),_c('li',[_v("Navigate to the bug you want to view.")])]),_v(" "),_c('div',{staticStyle:{"text-align":"center"}},[_c('pic',{staticStyle:{"width":"600px"},attrs:{"src":"/images/sol_1.png"}})],1),_v(" "),_c('br'),_v(" \n  3. Click on the dropdown on the right side of the bug, to expand details of the bug and view the bug report.\n  "),_c('div',{staticStyle:{"text-align":"center"}},[_c('pic',{staticStyle:{"width":"600px"},attrs:{"src":"/images/sol_2.png"}})],1),_v(" "),_c('br'),_v(" \n  4. Click on the "),_c('strong',[_v("Get Solution")]),_v(" button at the top of the bug report. \n  "),_c('div',{staticStyle:{"text-align":"center"}},[_c('pic',{staticStyle:{"width":"600px"},attrs:{"src":"/images/sol_3.png"}})],1),_v(" "),_c('br'),_v(" \n  5. The solution will be displayed in a pop-up dialog in markdown format."),_c('br'),_v("\n  6. Click on the "),_c('strong',[_v("Cancel")]),_v(" button, or anywhere outside the pop-up dialog to close the dialog.\n  "),_c('div',{staticStyle:{"text-align":"center"}},[_c('pic',{staticStyle:{"width":"600px"},attrs:{"src":"/images/sol_4.png"}})],1),_v(" "),_c('br')]),_v(" "),_c('hr')],1),_v(" "),_c('overlay-source',{attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#features"}},[_v("Features‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#visualisation-page"}},[_v("Visualisation Page‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#bugs-list-page"}},[_v("Bugs List Page‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#category-page"}},[_v("Category Page‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#dbms-page"}},[_v("DBMS Page‎")])]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#feature-details"}},[_v("Feature Details‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#feature-analyse-mean-time-to-fix-ttf-across-dbmss"}},[_v("Feature: Analyse Mean Time-to-Fix (TTF) across DBMSs‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#feature-view-number-of-bugs-found-across-dbmss"}},[_v("Feature: View Number of Bugs Found across DBMSs‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#feature-view-bugs-distribution-across-different-categories"}},[_v("Feature: View Bugs Distribution across different Categories‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#feature-get-dbms-suggestion"}},[_v("Feature: Get DBMS Suggestion‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#feature-dbms-specific-view-bugs-distribution-across-different-categories"}},[_v("Feature: [DBMS-Specific] View Bugs Distribution across different Categories‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#feature-dbms-specific-analyse-number-of-opened-vs-closed-issues-per-month"}},[_v("Feature: [DBMS-Specific] Analyse Number of Opened vs Closed Issues per Month‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#feature-dbms-specific-get-summary-of-bugs-found-for-dbms"}},[_v("Feature: [DBMS-Specific] Get Summary of Bugs Found for DBMS‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#feature-get-bug-solution"}},[_v("Feature: Get Bug Solution‎")])])])])],1)]),_v(" "),_c('scroll-top-button')],1),_v(" "),_m(42)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"features"}},[_v("Features"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#features","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"visualisation-page"}},[_v("Visualisation Page"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#visualisation-page","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('h5',{attrs:{"id":"analyse-mean-time-to-fix-ttf-across-dbmss"}},[_c('a',{staticStyle:{"text-decoration":"none","color":"inherit"},attrs:{"href":"#feature-analyse-mean-ttf"}},[_v("Analyse Mean Time-to-Fix (TTF) across DBMSs")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#analyse-mean-time-to-fix-ttf-across-dbmss","onclick":"event.stopPropagation()"}})])]),_v(" "),_c('li',[_c('h5',{attrs:{"id":"view-number-of-gugs-found-across-dbmss"}},[_c('a',{staticStyle:{"text-decoration":"none","color":"inherit"},attrs:{"href":"#feature-num-of-bugs"}},[_v("View Number of Gugs Found across DBMSs")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#view-number-of-gugs-found-across-dbmss","onclick":"event.stopPropagation()"}})])]),_v(" "),_c('li',[_c('h5',{attrs:{"id":"view-bugs-distribution-across-different-categories"}},[_c('a',{staticStyle:{"text-decoration":"none","color":"inherit"},attrs:{"href":"#feature-categories-distr"}},[_v("View Bugs Distribution across different Categories")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#view-bugs-distribution-across-different-categories","onclick":"event.stopPropagation()"}})])]),_v(" "),_c('li',[_c('h5',{attrs:{"id":"get-dbms-suggestion"}},[_c('a',{staticStyle:{"text-decoration":"none","color":"inherit"},attrs:{"href":"#feature-get-dbms-suggestion"}},[_v("Get DBMS Suggestion")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#get-dbms-suggestion","onclick":"event.stopPropagation()"}})])]),_v(" "),_c('li',[_c('h5',{attrs:{"id":"get-detailed-view-of-each-dbms"}},[_v("Get Detailed View of each DBMS"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#get-detailed-view-of-each-dbms","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_c('h6',{attrs:{"id":"view-bugs-distribution-across-different-categories-2"}},[_c('a',{staticStyle:{"text-decoration":"none","color":"inherit"},attrs:{"href":"#feature-cat-distr-dbms"}},[_v("View Bugs Distribution across different Categories")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#view-bugs-distribution-across-different-categories-2","onclick":"event.stopPropagation()"}})])]),_v(" "),_c('li',[_c('h6',{attrs:{"id":"analyse-number-of-opened-vs-closed-issues-per-month"}},[_c('a',{staticStyle:{"text-decoration":"none","color":"inherit"},attrs:{"href":"#feature-num-open-close"}},[_v("Analyse Number of Opened vs Closed Issues per Month")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#analyse-number-of-opened-vs-closed-issues-per-month","onclick":"event.stopPropagation()"}})])]),_v(" "),_c('li',[_c('h6',{attrs:{"id":"get-summary-of-bugs-found-for-dbms"}},[_c('a',{staticStyle:{"text-decoration":"none","color":"inherit"},attrs:{"href":"#feature-dbms-summary"}},[_v("Get Summary of Bugs Found for DBMS")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#get-summary-of-bugs-found-for-dbms","onclick":"event.stopPropagation()"}})])])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"bugs-list-page"}},[_v("Bugs List Page"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#bugs-list-page","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('h5',{attrs:{"id":"view-list-of-bugs-found-across-dbmss"}},[_v("View List of Bugs found across DBMSs"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#view-list-of-bugs-found-across-dbmss","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_c('h5',{attrs:{"id":"view-bug-overview"}},[_v("View Bug Overview"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#view-bug-overview","onclick":"event.stopPropagation()"}})])]),_v(" "),_c('li',[_c('h5',{attrs:{"id":"view-detailed-bug-report"}},[_v("View Detailed Bug Report"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#view-detailed-bug-report","onclick":"event.stopPropagation()"}})])]),_v(" "),_c('li',[_c('h5',{attrs:{"id":"get-bug-solution"}},[_c('a',{staticStyle:{"text-decoration":"none","color":"inherit"},attrs:{"href":"#feature-get-bug-solution"}},[_v("Get Bug Solution")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#get-bug-solution","onclick":"event.stopPropagation()"}})])]),_v(" "),_c('li',[_c('h5',{attrs:{"id":"view-bug-report-on-github"}},[_v("View Bug Report on GitHub"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#view-bug-report-on-github","onclick":"event.stopPropagation()"}})])])])]),_v(" "),_c('li',[_c('h5',{attrs:{"id":"filter-bugs-by-category"}},[_v("Filter Bugs by Category"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#filter-bugs-by-category","onclick":"event.stopPropagation()"}})])]),_v(" "),_c('li',[_c('h5',{attrs:{"id":"filter-bugs-by-dbms"}},[_v("Filter Bugs by DBMS"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#filter-bugs-by-dbms","onclick":"event.stopPropagation()"}})])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"category-page"}},[_v("Category Page"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#category-page","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('h5',{attrs:{"id":"view-list-of-categories"}},[_v("View List of Categories"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#view-list-of-categories","onclick":"event.stopPropagation()"}})])]),_v(" "),_c('li',[_c('h5',{attrs:{"id":"add-new-category"}},[_v("Add New Category"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#add-new-category","onclick":"event.stopPropagation()"}})])]),_v(" "),_c('li',[_c('h5',{attrs:{"id":"edit-existing-category"}},[_v("Edit Existing Category"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#edit-existing-category","onclick":"event.stopPropagation()"}})])]),_v(" "),_c('li',[_c('h5',{attrs:{"id":"delete-existing-category"}},[_v("Delete Existing Category"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#delete-existing-category","onclick":"event.stopPropagation()"}})])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"dbms-page"}},[_v("DBMS Page"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#dbms-page","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('h5',{attrs:{"id":"view-list-of-dbmss"}},[_v("View List of DBMSs"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#view-list-of-dbmss","onclick":"event.stopPropagation()"}})])]),_v(" "),_c('li',[_c('h5',{attrs:{"id":"add-new-dbms"}},[_v("Add New DBMS"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#add-new-dbms","onclick":"event.stopPropagation()"}})])]),_v(" "),_c('li',[_c('h5',{attrs:{"id":"delete-existing-dbms"}},[_v("Delete Existing DBMS"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#delete-existing-dbms","onclick":"event.stopPropagation()"}})])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"feature-details"}},[_v("Feature Details"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#feature-details","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"id":"feature-analyse-mean-ttf"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"feature-analyse-mean-time-to-fix-ttf-across-dbmss"}},[_v("Feature: Analyse Mean Time-to-Fix (TTF) across DBMSs"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#feature-analyse-mean-time-to-fix-ttf-across-dbmss","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Key Capabilities")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("It displays the TTF for each DBMS in a bar chart format, making it easy to compare the TTF across different DBMSs.")]),_v(" "),_c('li',[_v("The TTF is calculated using the issue creation and resolution dates from the GitHub API.")]),_v(" "),_c('li',[_v("The TTF is displayed in hours, providing a clear and comparable metric for each DBMS.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"id":"feature-num-of-bugs"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"feature-view-number-of-bugs-found-across-dbmss"}},[_v("Feature: View Number of Bugs Found across DBMSs"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#feature-view-number-of-bugs-found-across-dbmss","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Key Capabilities")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("It displays the number of bugs found across different DBMSs in a bar chart format, making it easy to compare the number of bugs across different DBMSs.")]),_v(" "),_c('li',[_v("The number of bugs is calculated using the issue data from the GitHub API.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"id":"feature-categories-distr"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"feature-view-bugs-distribution-across-different-categories"}},[_v("Feature: View Bugs Distribution across different Categories"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#feature-view-bugs-distribution-across-different-categories","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Key Capabilities")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("It displays the distribution of bugs across different categories for each DBMS, making it easy to compare the distribution of bugs across different categories.")]),_v(" "),_c('li',[_v("The distribution is displayed in a multi-bar chart format, with each group representing a category and each bar representing a DBMS.")]),_v(" "),_c('li',[_v("The distribution is calculated using the issue data from the GitHub API, and the classification of bugs into categories by AI tools.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"id":"feature-get-dbms-suggestion"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"feature-get-dbms-suggestion"}},[_v("Feature: Get DBMS Suggestion"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#feature-get-dbms-suggestion","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Key Capabilities:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("The suggested DBMS takes into account the existing analyses conducted on our website.")]),_v(" "),_c('li',[_v("Currently, we support three "),_c('strong',[_v("DBMSs: DuckDB, TiDB, and CockroachDB")]),_v(". The suggestion will be limited to one of these supported options.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"id":"feature-cat-distr-dbms"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"feature-dbms-specific-view-bugs-distribution-across-different-categories"}},[_v("Feature: [DBMS-Specific] View Bugs Distribution across different Categories"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#feature-dbms-specific-view-bugs-distribution-across-different-categories","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Key Capabilities")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("It displays the distribution of bugs across different categories for a specific DBMS, making it easy to compare common vulnerabilities.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"id":"feature-num-open-close"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"feature-dbms-specific-analyse-number-of-opened-vs-closed-issues-per-month"}},[_v("Feature: [DBMS-Specific] Analyse Number of Opened vs Closed Issues per Month"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#feature-dbms-specific-analyse-number-of-opened-vs-closed-issues-per-month","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Key Capabilities")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("It displays the number of opened vs closed issues per month for a specific DBMS, making it easy to get an overview of the state of bug resolution.")]),_v(" "),_c('li',[_v("The number of opened and closed issues is calculated using the issue data from the GitHub API.")]),_v(" "),_c('li',[_v("The data is displayed in a line chart format, making it easy to compare the trend of opened vs closed issues over time.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"id":"feature-dbms-summary"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"feature-dbms-specific-get-summary-of-bugs-found-for-dbms"}},[_v("Feature: [DBMS-Specific] Get Summary of Bugs Found for DBMS"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#feature-dbms-specific-get-summary-of-bugs-found-for-dbms","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Key Capabilities")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("It displays a summary of bugs found for a specific DBMS, making use of the data on number of bugs, categories, and resolution times.")]),_v(" "),_c('li',[_v("The summary is generated using AI tools, providing a concise overview of the state of bugs in the DBMS.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"id":"feature-get-bug-solution"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"feature-get-bug-solution"}},[_v("Feature: Get Bug Solution"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#feature-get-bug-solution","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Key Capabilities")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("It uses OpenAI's GPT-4o-mini model to generate an intuitive, yet concise solution for the bug.")]),_v(" "),_c('li',[_v("The solution is generated based on the description of the bug, as provided in the bug report.")]),_v(" "),_c('li',[_v("The solution is displayed in a user-friendly markdown format, making it easy to read and understand.")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("["),_c('span',[_c('strong',[_v("Powered by")])]),_v(" "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.6.0")]),_v("]")])])])}
}];
  