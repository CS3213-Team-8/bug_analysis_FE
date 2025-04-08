---
  layout: default.md
  title: "Features"
  pageNav: 3
---

# Features

<hr />

### Visualisation Page
* ##### <a href="#feature-analyse-mean-ttf" style="text-decoration: none; color: inherit;">Analyse Mean Time-to-Fix (TTF) across DBMSs</a>
* ##### <a href="#feature-num-of-bugs" style="text-decoration: none; color: inherit;">View Number of Gugs Found across DBMSs</a>
* ##### <a href="#feature-categories-distr" style="text-decoration: none; color: inherit;">View Bugs Distribution across different Categories</a>
* ##### <a href="#feature-get-dbms-suggestion" style="text-decoration: none; color: inherit;">Get DBMS Suggestion</a>
* ##### Get Detailed View of each DBMS
    * ###### <a href="#feature-cat-distr-dbms" style="text-decoration: none; color: inherit;">View Bugs Distribution across different Categories</a>
    * ###### <a href="#feature-num-open-close" style="text-decoration: none; color: inherit;">Analyse Number of Opened vs Closed Issues per Month</a>
    * ###### <a href="#feature-dbms-summary" style="text-decoration: none; color: inherit;">Get Summary of Bugs Found for DBMS</a>
### Bugs List Page
  * ##### View List of Bugs found across DBMSs
    * ##### View Bug Overview
    * ##### View Detailed Bug Report
    * ##### <a href="#feature-get-bug-solution" style="text-decoration: none; color: inherit;">Get Bug Solution</a>
    * ##### View Bug Report on GitHub
  * ##### Filter Bugs by Category
  * ##### Filter Bugs by DBMS

### Category Page
  * ##### View List of Categories
  * ##### Add New Category
  * ##### Edit Existing Category
  * ##### Delete Existing Category

### DBMS Page
  * ##### View List of DBMSs
  * ##### Add New DBMS
  * ##### Delete Existing DBMS

-------

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
* It displays the TTF for each DBMS in a bar chart format, making it easy to compare the TTF across different DBMSs.
* The TTF is calculated using the issue creation and resolution dates from the GitHub API.
* The TTF is displayed in hours, providing a clear and comparable metric for each DBMS.

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
* It displays the number of bugs found across different DBMSs in a bar chart format, making it easy to compare the number of bugs across different DBMSs.
* The number of bugs is calculated using the issue data from the GitHub API.

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
* It displays the distribution of bugs across different categories for each DBMS, making it easy to compare the distribution of bugs across different categories.
* The distribution is displayed in a multi-bar chart format, with each group representing a category and each bar representing a DBMS.
* The distribution is calculated using the issue data from the GitHub API, and the classification of bugs into categories by AI tools.

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

**Key Capabilities:**
* The suggested DBMS takes into account the existing analyses conducted on our website.
* Currently, we support three **DBMSs: DuckDB, TiDB, and CockroachDB**. The suggestion will be limited to one of these supported options.

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

<hr />

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

<pic src="../images/catd.png" style="margin-bottom: 20px;">
Bugs Distribution across Categories
</pic>

**Key Capabilities**:
* It displays the distribution of bugs across different categories for a specific DBMS, making it easy to compare common vulnerabilities.

<panel header="**Steps to use**" type="success" expanded>

  1. Go to the **Visualization** Page.
  2. Use the tabs to navigate to the page of the DBMS you want to view. 
  <div style="text-align: center;">
    <pic src="../images/catd_1.png" style="width: 600px"></pic>
  </div>  
  <br>
  3. View the bar chart displaying the distribution of bugs across different categories.
  <div style="text-align: center;">
  <pic src="../images/catd_2.png" style="width: 600px"></pic>
  </div>
  <br>
  4. Hover over each bar to see the exact number of bugs for that category.
<div style="text-align: center;">
  <pic src="../images/catd_3.png" style="width: 600px"></pic>
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

<pic src="../images/oc.png" style="margin-bottom: 20px;">
Opened and Closed Issues per Month
</pic>

**Key Capabilities**:
* It displays the number of opened vs closed issues per month for a specific DBMS, making it easy to get an overview of the state of bug resolution.
* The number of opened and closed issues is calculated using the issue data from the GitHub API.
* The data is displayed in a line chart format, making it easy to compare the trend of opened vs closed issues over time.

<panel header="**Steps to use**" type="success" expanded>

  1. Go to the **Visualization** Page.
  2. Use the tabs to navigate to the page of the DBMS you want to view.
  <div style="text-align: center;">
  <pic src="../images/catd_1.png" style="width: 600px"></pic>
  </div>
  <br> 
  3. View the line chart displaying the number of opened vs closed issues per month for the DBMS.
  <div style="text-align: center;">
  <pic src="../images/oc_1.png" style="width: 600px"></pic>
  </div>
  <br> 
  4. Hover over each point to see the exact number of opened and closed issues for that month.
  <div style="text-align: center;">
  <pic src="../images/oc_2.png" style="width: 600px"></pic>
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

<pic src="../images/sum.png" style="margin-bottom: 20px;">
DBMS Summary Feature
</pic>

**Key Capabilities**:
* It displays a summary of bugs found for a specific DBMS, making use of the data on number of bugs, categories, and resolution times.
* The summary is generated using AI tools, providing a concise overview of the state of bugs in the DBMS.

<panel header="**Steps to use**" type="success" expanded>

  1. Go to the **Visualisation** Page. 
  2. Use the tabs to navigate to the page of the DBMS you want to view.
  <div style="text-align: center;">
  <pic src="../images/catd_1.png" style="width: 600px"></pic>
  </div>
  <br> 
  3. View the bugs summary for the DBMS under <strong>Summary Statistics</strong>.
  <div style="text-align: center;">
  <pic src="../images/sum_1.png" style="width: 600px"></pic>
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
* It uses OpenAI's GPT-4o-mini model to generate an intuitive, yet concise solution for the bug.
* The solution is generated based on the description of the bug, as provided in the bug report.
* The solution is displayed in a user-friendly markdown format, making it easy to read and understand.

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



