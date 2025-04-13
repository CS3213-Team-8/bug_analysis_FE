---
  layout: default.md
  title: "Features"
  pageNav: 3
---

# Features

<hr />

### Visualisation Page

- ##### <a href="#feature-analyse-mean-ttf" style="text-decoration: none; color: inherit;">Analyse Mean Time-to-Fix (TTF) across DBMSs</a>
- ##### <a href="#feature-num-of-bugs" style="text-decoration: none; color: inherit;">View Number of Bugs Found across DBMSs</a>
- ##### <a href="#feature-categories-distr" style="text-decoration: none; color: inherit;">View Bugs Distribution across different Categories</a>
- ##### <a href="#feature-get-dbms-suggestion" style="text-decoration: none; color: inherit;">Get DBMS Suggestion</a>
- ##### Get Detailed View of each DBMS
  - ###### <a href="#feature-cat-distr-dbms" style="text-decoration: none; color: inherit;">View Bugs Distribution across different Categories</a>
  - ###### <a href="#feature-categories-distr-sql" style="text-decoration: none; color: inherit;">View SQLancer-specific Bugs Distribution across different Categories</a>
  - ###### <a href="#feature-num-open-close" style="text-decoration: none; color: inherit;">Analyse Number of Opened vs Closed Issues per Month</a>
  - ###### <a href="#feature-dbms-summary" style="text-decoration: none; color: inherit;">Get Summary of Bugs Found for DBMS</a>

### Bugs List Page

- ##### View List of Bugs found across DBMSs
  - ###### <a href="#feature-buglistpage" style="text-decoration: none; color: inherit;">View Bug Overview</a>
  - ###### <a href="#feature-bugdetail" style="text-decoration: none; color: inherit;">View Detailed Bug Report</a>
  - ###### <a href="#feature-get-bug-solution" style="text-decoration: none; color: inherit;">Get Bug Solution</a>
  - ###### <a href="#feature-bugGithub" style="text-decoration: none; color: inherit;">View Bug Report on GitHub</a>
- ##### Filter Bugs
  - ###### <a href="#feature-bugsFilter" style="text-decoration: none; color: inherit;">Filter Bugs Tips</a>
  - ###### <a href="#feature-filterSqlancer" style="text-decoration: none; color: inherit;">Filter SQLancer found bugs</a>
  - ###### <a href="#feature-filterCategory" style="text-decoration: none; color: inherit;">Filter Bugs by Category</a>
  - ###### <a href="#feature-filterDBMS" style="text-decoration: none; color: inherit;">Filter Bugs by DBMS</a>

### <a href="#feature-category-management" style="text-decoration: none; color: inherit;">Category Page</a>

- ##### <a href="#feature-category-read" style="text-decoration: none; color: inherit;">View List of Categories</a>
- ##### <a href="#feature-category-create" style="text-decoration: none; color: inherit;">Add New Category</a>
- ##### <a href="#feature-category-update" style="text-decoration: none; color: inherit;">Edit Existing Category</a>
- ##### <a href="#feature-category-delete" style="text-decoration: none; color: inherit;">Delete Existing Category</a>

### <a href="#feature-database-management" style="text-decoration: none; color: inherit;">DBMS Page</a>

- ##### <a href="#feature-dbms-read" style="text-decoration: none; color: inherit;">View List of DBMSs</a>
- ##### <a href="#feature-dbms-create" style="text-decoration: none; color: inherit;">Add New DBMS</a>
- ##### <a href="#feature-dbms-delete" style="text-decoration: none; color: inherit;">Delete Existing DBMS</a>

---

## Stakeholders Overview

| **Stakeholders**   | **Definition**                                                                 |
| ------------------ | ------------------------------------------------------------------------------ |
| SQLancer Developer | Developers of SQLancer interested in the progress and improvement of SQLancer  |
| Backend Developer  | Users interested in selecting DBMS for use in projects                         |
| Database Developer | Owners/Developers of the DBMS interested in debugging bugs found in their DBMS |

<hr />

## Feature Details

<hr />

<a id="feature-analyse-mean-ttf"></a>

### Feature: Analyse Mean Time-to-Fix (TTF) across DBMSs

This feature allows you to view the Mean Time-to-Fix (TTF) for each DBMS (in hours).

<box type="warning"  icon="👤">
<h6 style="color: black; margin-bottom: 2px;">Who is it for?</h6>
<ul>
<li> SQLancer and Database Developers who want to manage the resolution of bugs in the DBMSs. </li>
</ul>
</box>

<box type="tip" seamless>
Time-to-Fix (TTF) is calculated as the difference in hours between the time the bug was reported (issue created on GitHub) and the time it was resolved (issue closed on GitHub).
</box>

<pic src="../images/mean-ttf.png" style="margin-bottom: 20px;">
Mean-TTF Feature
</pic>

**Key Capabilities**:

- It displays the TTF for each DBMS in a bar chart format, making it easy to compare the TTF across different DBMSs.
- The TTF is calculated using the issue creation and resolution dates from the GitHub API.
- The TTF is displayed in hours, providing a clear and comparable metric for each DBMS.

<panel header="**Steps to use**" type="success" expanded>

1. Go to the **Visualization** Page.
2. View the bar chart displaying the Mean TTF for each DBMS.
<div style="text-align: center;">
  <pic src="../images/ttf_1.png" style="width: 600px"></pic>
</div>  
<br>

3. Hover over each bar to see the exact Mean TTF value for that DBMS.
  <div style="text-align: center;">
  <pic src="../images/ttf_2.png" style="width: 600px"></pic>
  </div>
  <br> 
</panel>

<hr />

<a id="feature-num-of-bugs"></a>

### Feature: View Number of Bugs Found across DBMSs

This feature allows you to view the number of bugs found across different DBMSs.

<box type="warning"  icon="👤">
<h6 style="color: black; margin-bottom: 2px;">Who is it for?</h6>
<ul>
<li> Database Developer who wants a visualisation for the state of bugs in their DBMS. </li>
<li> Backend Developer who wants to identify trends in the number of bugs across different DBMSs, to choose one effectively. </li>
</ul>
</box>

<box type="warning" seamless>
The currently displayed count values are not representative of the total number of bugs found in the DBMSs. The values are based on some number of open and closed issues pulled from GitHub.
</box>

<pic src="../images/num-bugs.png" style="margin-bottom: 20px;">
Number of Bugs Across DBMSs
</pic>

**Key Capabilities**:

- It displays the number of bugs found across different DBMSs in a bar chart format, making it easy to compare the number of bugs across different DBMSs.
- The number of bugs is calculated using the issue data from the GitHub API.

<panel header="**Steps to use**" type="success" expanded>

1. Go to the **Visualization** Page.
2. View the bar chart displaying the number of bugs found across different DBMSs.
<div style="text-align: center;">
  <pic src="../images/num-bugs_1.png" style="width: 600px"></pic>
</div>  
<br>

3. Hover over each bar to see the exact number of bugs for that DBMS.
  <div style="text-align: center;">
  <pic src="../images/num-bugs_2.png" style="width: 600px"></pic>
  </div>
  <br> 
</panel>

<hr />

<a id="feature-categories-distr"></a>

### Feature: View Bugs Distribution across different Categories

This feature allows you to view the distribution of bugs across different categories, for each DBMS.

<box type="warning"  icon="👤">
<h6 style="color: black; margin-bottom: 2px;">Who is it for?</h6>
<ul>
<li> SQLancer Developer who wants to compare the types/categories of database bugs reported across different DBMS to identiify common vulnerabilities and areas where SQLancer's testing could be improved. </li>
</ul>
</box>

<box type="tip" seamless>
Currently, the categories are fixed and set by the development team. The categories are: <strong>Security Vulnerabilities</strong>, <strong>Build Issues</strong>, <strong>Performance Bugs</strong>, <strong>Join Processing Bugs</strong>, <strong>Query Optimization Bugs</strong>, <strong>Predicate Evaluation Bugs</strong>, <strong>Suggestions</strong> (and <strong>Others</strong> as a catch-all).
</box>
<box type="warning" seamless>
Currently, the classification of bugs into categories is done using AI tools, so accuracy is not guaranteed.
</box>

<pic src="../images/cat-distr.png" style="margin-bottom: 20px;">
Bugs Distribution across Categories
</pic>

**Key Capabilities**:

- It displays the distribution of bugs across different categories for each DBMS, making it easy to compare the distribution of bugs across different categories.
- The distribution is displayed in a multi-bar chart format, with each group representing a category and each bar representing a DBMS.
- The distribution is calculated using the issue data from the GitHub API, and the classification of bugs into categories by AI tools.

<panel header="**Steps to use**" type="success" expanded>

1. Go to the **Visualization** Page.
2. View the multi-bar chart displaying the distribution of bugs across difference categories for each DBMS.
<div style="text-align: center;">
  <pic src="../images/cat-distr_1.png" style="width: 600px"></pic>
</div>  
<br>

3. Hover over each bar to see the exact number of bugs for that category and DBMS.
  <div style="text-align: center;">
  <pic src="../images/cat-distr_2.png" style="width: 600px"></pic>
  </div>
  <br> 
</panel>

<hr />

<a id="feature-get-dbms-suggestion"></a>

### Feature: Get DBMS Suggestion

This feature recommends the most suitable DBMS based on your project’s requirements.
<box type="warning"  icon="👤">

<h6 style="color: black; margin-bottom: 2px;">Who is it for?</h6>
<ul>
<li> Backend Developers who are looking to select a DBMS based on their project's needs. </li>
</ul>
</box>

<box type="tip" seamless>
    Tip: The accuracy of DBMS suggestions improves with more specific and detailed prompts.
</box>

<pic src="../images/get-suggest-1.png" style="margin-bottom: 20px;">
Suggested DBMS
</pic>


**Key Capabilities:**

- The suggested DBMS takes into account the existing analyses conducted on our website.
- Currently, we support three **DBMSs: DuckDB, TiDB, and CockroachDB**. The suggestion will be limited to one of these supported options.

<panel header="**Steps to use**" type="success" expanded>

1. Go to the **Visualization** Page.
2. Click **"GET SUGGEST DBMS"** in the top-right corner.
<div style="text-align: center;">
  <pic src="../images/get-suggest.png" style="width: 600px"></pic>
</div>  
<br>

3. **Enter Project Requirements**. Provide detailed information about your project needs.
<div style="text-align: center;">
<pic src="../images/get-suggest-2.png" style="width: 600px"></pic>
</div>
<br>

  <panel>
    <p slot="header" class="card-title">
      <i><strong><span>Example requirements</span></strong></i>
    </p>
    <ul>
      <li>Operational Needs (e.g., low overhead, minimal maintenance)</li>
      <li>Performance (e.g., high-speed queries, large dataset handling)</li>
      <li>Automation & Integration (e.g., Kubernetes, CI/CD support)</li>
      <li>Stability (e.g., no frequent build failures)</li>
      <li>Scalability (e.g., handles data growth and traffic)</li>
    </ul>
  </panel>  
  <br>

4. **Review the Suggested DBMS**.  
The system will suggest a DBMS along with a rationale for its selection. Review the suggestion to ensure it fits your project needs.
<div style="text-align: center;">
<pic src="../images/get-suggest-3.png" style="width: 600px"></pic>  
</div>
<br>

5. Click on the **Cancel** button, or anywhere outside the pop-up dialog to close the dialog.
   </panel>

<br><br>

<a id="feature-cat-distr-dbms"></a>

### Feature: [DBMS-Specific] View Bugs Distribution across different Categories

This feature allows you to view the distribution of bugs across different categories, for a specific DBMS.
<box type="warning"  icon="👤">

<h6 style="color: black; margin-bottom: 2px;">Who is it for?</h6>
<ul>
<li> DBMS Developers who want to identify common vulnerabilities in their DBMS to improve testing efforts. </li>
</ul>
</box>

<box type="tip" seamless>
This feature is a DBMS-specific version of the <a href="#feature-categories-distr">View Bugs Distribution across different Categories</a> feature.
</box>

<pic src="../images/cate-1.png" style="margin-bottom: 20px;">
Bugs Distribution across Categories
</pic>

**Key Capabilities**:

- It displays the distribution of bugs across different categories for a specific DBMS, making it easy to compare common vulnerabilities.

<panel header="**Steps to use**" type="success" expanded>

1. Go to the **Visualization** Page.
2. Use the tabs to navigate to the page of the DBMS you want to view.
<div style="text-align: center;">
  <pic src="../images/catd_1.png" style="width: 600px"></pic>
</div>  
<br>
3. View the bar chart displaying the distribution of bugs across different categories.
<div style="text-align: center;">
<pic src="../images/cate-2.png" style="width: 600px"></pic>
</div>
<br>
4. Hover over each bar to see the exact number of bugs for that category.
<div style="text-align: center;">
  <pic src="../images/cat-dist-sql_2.png" style="width: 600px"></pic>
  </div>
  <br> 
</panel>

<hr />

<a id="feature-categories-distr-sql"></a>

### Feature: [DBMS-Specific] View SQLancer-specific Bugs Distribution across different Categories

This feature allows you to view the distribution of SQLancer-specific bugs across different categories, for each DBMS.

<box type="warning"  icon="👤">
<h6 style="color: black; margin-bottom: 2px;">Who is it for?</h6>
<ul>
<li> SQLancer Developer who wants to compare the types/categories of database bugs reported by SQLancer, across different DBMS, to understand the state and progress of SQLancer testing. </li>
</ul>
</box>

<box type="warning" seamless>
Currently, the notion of a "SQLancer-specific" bug is captured manually. Therefore, there may be some SQLancer-specific issues that might have been missed during our analysis.
</box>

<pic src="../images/cat-dist-sql.png" style="margin-bottom: 20px;">
SQlancer-specific Bugs Distribution across Categories
</pic>

**Key Capabilities**:

- It displays the distribution of SQLancer-specific bugs across different categories for each DBMS, making it easy to compare different vulnerabilities targetted by SQLancer.

<panel header="**Steps to use**" type="success" expanded>

1. Go to the **Visualization** Page.
2. Use the tabs to navigate to the page of the DBMS you want to view.
<div style="text-align: center;">
  <pic src="../images/catd_1.png" style="width: 600px"></pic>
</div>  
<br>

3. View the bar chart displaying the distribution of SQLancer-specific bugs across different categories.
<div style="text-align: center;">
<pic src="../images/cat-dist-sql_1.png" style="width: 600px"></pic>
</div>
<br>

4. Hover over each bar to see the exact number of SQLancer-specific bugs for that category.
<div style="text-align: center;">
  <pic src="../images/cat-dist-sql_2.png" style="width: 600px"></pic>
  </div>
  <br> 
</panel>

<hr />

<a id="feature-num-open-close"></a>

### Feature: [DBMS-Specific] Analyse Number of Opened vs Closed Issues per Month

This feature allows you to view the number of opened vs closed issues per month for a specific DBMS.
<box type="warning"  icon="👤">

<h6 style="color: black; margin-bottom: 2px;">Who is it for?</h6>
<ul>
<li> DBMS Developers who want to visualise the state of bug resolution in their organisation. </li>
</ul>
</box>

<pic src="../images/oc_3.png" style="margin-bottom: 20px;">
Opened and Closed Issues per Month
</pic>

**Key Capabilities**:

- It displays the number of opened vs closed issues per month for a specific DBMS, making it easy to get an overview of the state of bug resolution.
- The number of opened and closed issues is calculated using the issue data from the GitHub API.
- The data is displayed in a line chart format, making it easy to compare the trend of opened vs closed issues over time.

<panel header="**Steps to use**" type="success" expanded>

1. Go to the **Visualization** Page.
2. Use the tabs to navigate to the page of the DBMS you want to view.
<div style="text-align: center;">
<pic src="../images/catd_1.png" style="width: 600px"></pic>
</div>
<br>
3. View the line chart displaying the number of opened vs closed issues per month for the DBMS.
<div style="text-align: center;">
<pic src="../images/oc_5.png" style="width: 600px"></pic>
</div>
<br>
4. Hover over each point to see the exact number of opened and closed issues for that month.
  <div style="text-align: center;">
  <pic src="../images/oc_6.png" style="width: 600px"></pic>
  </div>
  <br> 
</panel>

<hr />

<a id="feature-dbms-summary"></a>

### Feature: [DBMS-Specific] Get Summary of Bugs Found for DBMS

This feature allows you to view a summary of bugs found for a specific DBMS.
<box type="warning"  icon="👤">

<h6 style="color: black; margin-bottom: 2px;">Who is it for?</h6>
<ul>
<li> SQlancer and Database Developers who want to get an overview of the state of bugs in a specific DBMS. </li>
</ul>
</box>
<box type="warning" seamless>
The summary is generated using AI tools, so accuracy is not guaranteed. Always verify the summary based on your own understanding of the data!
</box>

<pic src="../images/sum1.png" style="margin-bottom: 20px;">
DBMS Summary Feature
</pic>

**Key Capabilities**:

- It displays a summary of bugs found for a specific DBMS, making use of the data on number of bugs, categories, and resolution times.
- The summary is generated using AI tools, providing a concise overview of the state of bugs in the DBMS.

<panel header="**Steps to use**" type="success" expanded>

1. Go to the **Visualisation** Page.
2. Use the tabs to navigate to the page of the DBMS you want to view.
<div style="text-align: center;">
<pic src="../images/catd_1.png" style="width: 600px"></pic>
</div>
<br>
3. View the bugs summary for the DBMS under <strong>Summary Statistics</strong>.
  <div style="text-align: center;">
  <pic src="../images/sum2.png" style="width: 600px"></pic>
  </div>
  <br> 
</panel>

<hr />

<a id="feature-buglistpage"></a>

### View List of Bugs found across DBMSs

### Feature: View Bug Overview

This feature allows you to view the list of bug issues fetched from Github.

<box type="warning"  icon="👤">
<h6 style="color: black; margin-bottom: 2px;">Who is it for?</h6>
<ul>
<li> Database and Backend Developers who wants to have a centralised and consolidated view of the DBMS bug reports. SQLancer developers who wants to the bugs found by sqlancer. </li>
</ul>
</box>

<box type="warning" seamless>
Currently, the number of bug issues displayed is limited to a subset of all issues available on GitHub.
</box>

<box type="tip" seamless>
In each bug issue card section, there are the following components:

1. **Bug issue status**
   - Open: Indicated by a mint-colored circle
   - Closed: Indicated by a purple checkmark
2. **Bug Issue Title**
   - Displayed prominently in bold
3. **Bug issue Source**
   - Shows the GitHub organization and repository name
4. **Github icon**
   - Clickable icon linking directly to the issue on GitHub
5. **Issue Time Information**
   - Open Issues: Shows the duration since the issue was created
   - Closed Issues: Shows the time taken to resolve the issue
6. **Bug issue category label**
   - Automatically classified into one of the following categories:(**Predicate Evaluation, Join Processing, Query Optimisation, Others, Security Vulnerabilities, Performance Bugs, Suggestions or Build Issues**)
7. **Bug Issue Sqlancer label**
   - Only issues labelled with "SQLancer" are found by sqlancer
8. **Pagination**
   - Each page displays 50 issues. Use the **"LOAD MORE"** button to reveal additional issues.
     </box>

<pic src="../images/buglistpage.png" style="margin-bottom: 20px;">
Bugs List Page Overview
</pic>

**Key Capabilities**:

- Displays a consolidated list of bug issues from multiple GitHub repositories, allowing for streamlined monitoring and analysis.
- Each issue card provides detailed metadata, including source repository, status, category, and timestamps—making it easy to scan and prioritize at a glance.
- BugSnapper makes use of AI to categorise each bug into specific categories.
- The use of Scheduler will allow automatic fetching of bug issues every set time interval.

<panel header="**Steps to use**" type="success" expanded>

1. Go to the **Bugs List** Page.
2. Browse through the list to get a summary of each bug’s key details.
3. To explore more issues, click on the **"LOAD MORE"** button at the bottom of the page.
  <div style="text-align: center;">
  <pic src="../images/bugpaging.png" style="width: 600px"></pic>
  </div>
  <br> 
</panel>

<hr />

<a id="feature-bugdetail"></a>

### Feature: View Detailed Bug Report

This feature allows you to view the comprehensive information for each individual bug issue.

<box type="warning"  icon="👤">
<h6 style="color: black; margin-bottom: 2px;">Who is it for?</h6>
<ul>
<li> Database and Backend Developers who wants in-depth understanding of database system bugs to aid debugging, analysis, and resolution. </li>
</ul>
</box>

<box type="tip" seamless>
Click on any bug card to expand it and view a detailed breakdown of the issue. This includes a bug summary, steps to reproduce, DBMS version information, and other relevant technical information. 
</box>

<pic src="../images/buglistDetail.png" style="margin-bottom: 20px;">
Detailed Bug Report
</pic>

**Key Capabilities**:

- Provide access to detailed bug descriptions, including summaries, reproduction steps, affected DBMS versions, and context.
- Include reproduction steps and environment detail to allow quick replicate bugs for debugging and testing.
- Understand which versions of the DBMS are impacted, aiding in regression tracking and version-specific debugging efforts.

<panel header="**Steps to use**" type="success" expanded>

1. Go to the **Bugs List** Page.
2. Click on any bug card to expand it and view detailed bug information.
  <div style="text-align: center;">
  <pic src="../images/bugdetail.png" style="width: 600px"></pic>
  </div>
  <br> 
</panel>

<hr />

<a id="feature-get-bug-solution"></a>

### Feature: Get Bug Solution

This feature allows you to get a solution for the bug you are currently viewing.

<box type="warning"  icon="👤">
<h6 style="color: black; margin-bottom: 2px;">Who is it for?</h6>
<ul>
<li> DBMS Developers who want to resolve bugs quickly and reduce debugging time. </li>
</ul>
</box>

<box type="warning" seamless>
The solution is generated using AI tools, so accuracy is not guaranteed. Always verify the solution before applying it to your code!
</box>
<box type="warning" seamless>
Since the solution is AI-generated, it may vary from run-to-run.
</box>

<pic src="../images/sol.png" style="margin-bottom: 20px;">
Get Bug Solution feature
</pic>

**Key Capabilities**:

- It uses OpenAI's GPT-4o-mini model to generate an intuitive, yet concise solution for the bug.
- The solution is generated based on the description of the bug, as provided in the bug report.
- The solution is displayed in a user-friendly markdown format, making it easy to read and understand.

<panel header="**Steps to use**" type="success" expanded>

1. Go to the **Bugs List** Page.
2. Navigate to the bug you want to view.
<div style="text-align: center;">
<pic src="../images/sol_1.png" style="width: 600px"></pic>
</div>
<br>
3. Click on the dropdown on the right side of the bug, to expand details of the bug and view the bug report.
<div style="text-align: center;">
<pic src="../images/sol_2.png" style="width: 600px"></pic>
</div>
<br>
4. Click on the <strong>Get Solution</strong> button at the top of the bug report.
<div style="text-align: center;">
<pic src="../images/sol_3.png" style="width: 600px"></pic>
</div>
<br>
5. The solution will be displayed in a pop-up dialog in markdown format.<br>
6. Click on the <strong>Cancel</strong> button, or anywhere outside the pop-up dialog to close the dialog.
  <div style="text-align: center;">
  <pic src="../images/sol_4.png" style="width: 600px"></pic>
  </div>
  <br> 
</panel>

<hr />

<a id="feature-bugGithub"></a>

### Feature: View Bug Report on Github

This feature allows you to access the original bug report on GitHub.

<box type="warning"  icon="👤">
<h6 style="color: black; margin-bottom: 2px;">Who is it for?</h6>
<ul>
<li> Database and Backend Developers who want direct access to the original GitHub issue for further investigation, collaboration, or updates.</li>
</ul>
</box>

**Key Capabilities**:

- The embedded GitHub icon for each bug issue allows access the source of the bug.
- This allows developers to view the complete conversation thread, including comments from contributors, maintainers, and the original reporter, for better understanding of the issue's history and progress.

<panel header="**Steps to use**" type="success" expanded>

1. Go to the **Bugs List** Page.
2. Locate the bug you're interested in.
3. Click on the GitHub icon within the bug card to be redirected to the original GitHub issue.
  <div style="text-align: center;">
  <pic src="../images/bugGithub.png" style="width: 600px"></pic>
  </div>
  <br> 
</panel>

<hr />

<a id="feature-bugsFilter"></a>

### Feature: Bugs filtering

This feature allows you to filter bug reports based on:

- Whether they were discovered by SQLancer
- Category
- DBMS
  (read the following feature sections for more details)

<box type="tip" seamless>

##### Tips for Using Search and Filters Effectively

1. **Use the top search bar** to locate specific bug issues by entering relevant keywords.

2. **Search filters are persistent**—when loading more issues, your search is retained automatically.

3. **All filters remain active** across paginated results. When you click **"LOAD MORE"**, newly loaded issues will also respect the current filters.

4. If no results appear for your selected filter(s), try clicking **"LOAD MORE"** to fetch additional relevant issues.

5. Selecting **"All"** will reset all filters and display the complete list of bug reports.

6. **Combine multiple filters** for more refined results—e.g., filter by _Category_, _DBMS_, and whether it was found by _SQLancer_.

</box>

<pic src="../images/bugFilters.png" style="margin-bottom: 20px;">
Bugs Issue Filter Components
</pic>

<a id="feature-filterSqlancer"></a>

### Feature: Filter SQLancer found bugs

This feature allows you to filter the displayed bug reports based on whether they were discovered by SQLancer.

<box type="warning"  icon="👤">
<h6 style="color: black; margin-bottom: 2px;">Who is it for?</h6>
<ul>
<li> SQLancer Developers who want to evaluate SQLancer's bug-finding effectiveness across different DBMS types, categories, and issue volumes.</li>
</ul>
</box>

<box type="tip" seamless>
Selecting "SQLancer" in the filter includes only bugs labeled as found by SQLancer. 
</box>

**Key Capabilities**:

- Allows isolation and analysis of bugs found specifically by SQLancer, helping in measuring SQLancer's test coverage and effectiveness.
- Gain visibility into the cateegory of bugs and DBMSs found by SQLancer which supports ongoing evaluation and refinement of SQLancer.
- Enables toggling between viewing SQLancer-found, non-SQLancer, or all bugs, enabling comparative analysis and focused debugging.

<panel header="**Steps to use**" type="success" expanded>

1. Go to the **Bugs List** Page.
2. Locate the filter dropdown at the top of the page.
3. Choose from the following options:

   - **SQLancer Issues** – View only bugs discovered by SQLancer
   - **Non-SQLancer Issues** – View bugs found through other means
   - **All** – Display all bug reports without filtering
       <div style="text-align: center;">
       <pic src="../images/bugSqlancer.png" style="width: 600px"></pic>
       </div>

        <div style="text-align: center;">
       <pic src="../images/sqlancer.png" style="width: 600px">Filter by SQLancer Issues</pic>
       </div>

        <div style="text-align: center;">
       <pic src="../images/general.png" style="width: 600px">Filter by Non-SQLancer Issues</pic>
       </div>
       
       <br> 
     </panel>

<hr />

<a id="feature-filterCategory"></a>

### Feature: Filter Bugs by Category

This feature allows you to filter bug reports based on BugSnapper's predefined categories.

<box type="warning"  icon="👤">
<h6 style="color: black; margin-bottom: 2px;">Who is it for?</h6>
<ul>
<li> SQLancer Developer who wants to compare the categories of database bugs reported across different DBMS. </li>
<li> Database and Backend Developers who want to focus on specific types of issues relevant to their area of expertise or current debugging efforts. </li>
</ul>
</box>

**Key Capabilities**:

- Filter bugs into meaningful categories which helps users quickly drill down into specific problem areas.
- Provides comparision of bug types across DBMSs or isolate categories to assist in triaging and fixing issues relevant to user's domain.
- For SQLancer developers, this feature helps uncover testing gaps by showing which types of bugs are most commonly found or missed by automated testing.

<panel header="**Steps to use**" type="success" expanded>

1. Go to the **Bugs List** Page.
2. Locate the cateogry filter dropdown at the top of the page.
3. Choose from the following options: **Predicate Evaluation, Join Processing, Query Optimisation, Others, Security Vulnerabilities, Performance Bugs, Suggestions, Build Issues or All**
<div style="text-align: center;">
<pic src="../images/bugCategory.png" style="width: 600px"></pic>
</div>

  <div style="text-align: center;">
  <pic src="../images/categoryIssues.png" style="width: 600px">Filter by category issues</pic>
  </div>
  <br> 
</panel>

<hr />

<a id="feature-filterDBMS"></a>

### Feature: Filter Bugs by DBMS

This feature allows you to filter and view bug reports based on the Database Management System (DBMS) in which the bugs were reported

<box type="warning"  icon="👤">
<h6 style="color: black; margin-bottom: 2px;">Who is it for?</h6>
<ul>
<li> SQLancer Developer who want to assess and compare SQLancer's bug detection performance across various DBMSs.</li>
<li> Database and Backend Developers who want to investigate or debug issues related to specific DBMSs relevant to their projects.</li>
</ul>
</box>

**Key Capabilities**:

- Allows for targeted debugging to narrow down the list of bugs to only those affecting a specific DBMS, enabling more relevant and efficient troubleshooting.
- Easily compare the types and frequency of bugs reported across different database systems to identify common weaknesses or inconsistencies.
- For SQLancer users, this filter helps visualize which DBMSs are more thoroughly tested or where bug detection might need improvement.

<panel header="**Steps to use**" type="success" expanded>

1. Go to the **Bugs List** Page.
2. Locate the DBMS filter dropdown at the top of the page.
3. Choose from the following options: **Cockroach DB, Duck DB, TiDB or All**
<div style="text-align: center;">
<pic src="../images/bugDbms.png" style="width: 600px"></pic>
</div>

  <div style="text-align: center;">
  <pic src="../images/dbIssues.png" style="width: 600px">Filter by DBMS issues</pic>
  </div>
  <br> 
</panel>

<hr />

<a id="feature-category-management"></a>

### Feature: Category Management

This is an admin-only feature used to manage and maintain all BugSnapper generated categories for bug issues.

<div style="text-align: center;">
<pic src="../images/category_read.png" style="margin-bottom: 20px;">
Category Page [Admin Use Only]
</pic>  
</div>
<br>

**Key Capabilities:**

- Full CRUD (Create, Read, Update, Delete) functionality for bug issue categories.
- Display of all category names and their respective descriptions.
- Currently, BugSnapper supports the 6 bug categories:
  **Predicate Evaluation, Join Processing, Query Optimisation, Others, Security Vulnerabilities, Performance Bugs, Suggestions and Build Issues**
- Manual creation of new categories.
- Manual updating of existing category descriptions.
- Manual deletion of existing categories.

<panel header="**Steps to use**" type="success" expanded>

<a id="feature-category-read"></a>

1. Navigate to the **Category** page.

2. A list of category names (in bold) and their descriptions will be displayed.

<a id="feature-category-create"></a> 3. To **create** a new category, click on the **"CREATE CATEGORY"** button in the top-right corner.

4. Enter the desired category name and description, then click **"SUBMIT"**. The new category will then appear on the page.
<div style="text-align: center;">
<pic src="../images/category_create.png" style="width: 600px"></pic>  
</div>
<br>

<a id="feature-category-update"></a> 5. To **update** an existing category, click the **edit** (yellow pen) icon next to it. Modify the description as needed.

6. Click **"SAVE CHANGES"** to apply your edits. The updated description will be reflected immediately.
<div style="text-align: center;">
<pic src="../images/category_update.png" style="width: 600px"></pic>  
</div>
<br>

<a id="feature-category-delete"></a> 7. To **delete** a category, click the **delete** (red bin) icon next to it.

8. Confirm deletion by clicking **OK**. The category will be removed and the change will be reflected on the page.
<div style="text-align: center;">
<pic src="../images/category_delete.png" style="width: 600px"></pic>  
</div>
<br>

</panel>

<hr />

<a id="feature-database-management"></a>

### Feature: Database (DBMS) Management

This is an admin-only feature used to manage and maintain the list of database (DBMS) that BugSnapper supports, which are **DuckDB, TiDB and CrockroachDB**.

<div style="text-align: center;">
<pic src="../images/dbms_read.png" style="margin-bottom: 20px;">
DBMS Page [Admin Use Only]
</pic>  
</div>
<br>

**Key Capabilities:**

- Display of all types of DBMS that BugSnapper supports.
- Manual creation of new DBMS.
- Manual deletion of existing DBMS.

<panel header="**Steps to use**" type="success" expanded>
<a id="feature-dbms-read"></a>

1. Navigate to the **DBMS** page.

2. A list of DBMS supported by BugSnapper will be displayed.

<a id="feature-dbms-create"></a>

3. To **create** or add a new DBMS to BugSnapper, click on the **"CREATE DBMS"** button in the top-right corner.

4. Enter the desired DBMS name, then click **"SUBMIT"**. The new DBMS will then appear on the page.
<div style="text-align: center;">
<pic src="../images/dbms_create.png" style="width: 600px"></pic>  
</div>
<br>

<a id="feature-dbms-delete"></a>

5. To **delete** a DBMS, click the **"DELETE"** button next to it.

6. Confirm deletion by clicking **OK**. The DBMS will be removed and the change will be reflected on the page.
<div style="text-align: center;">
<pic src="../images/dbms_delete.png" style="width: 600px"></pic>  
</div>
<br>

</panel>

<br><br>
