---
  layout: default.md
  title: "Features"
  pageNav: 3
---

# Features

### Visualisation Page
* ##### Analyse Mean Time-to-Fix (TTF) Chart across DBMSs
* ##### View Number of Gugs Found across DBMSs
* ##### View Bugs Distribution across different Categories
* ##### <a href="#feature-get-dbms-suggestion" style="text-decoration: none; color: inherit;">Get DBMS Suggestion</a>
* ##### Get Detailed View of each DBMS
    * ###### View Bugs Distribution across different Categories
    * ###### Analyse Number of Opened vs Closed Issues per Month
    * ###### Get Summary of Bugs Found for DBMS
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
<a id="feature-get-bug-solution"></a>

### Feature: Get Bug Solution

This feature allows you to get a solution for the bug you are currently viewing.

<box type="warning" seamless>
The solution is generated using AI tools, so accuracy is not guaranteed. Always verify the solution before applying it to your code!
</box>

<box type="info">
<h5 style="color:green; margin-bottom: 5px;">User Story</h5>
As a DBMS developer, I can view a suggested solution for the bug I am currently viewing based on the bug report, so that I can resolve the bug quickly and reduce debugging time.
</box>

<pic src="../images/bug_solution.png" style="margin-bottom: 20px;">
Get Bug Solution feature
</pic>

Key Capabilities:
* It uses OpenAI's GPT-4o-mini model to generate an intuitive, yet concise solution for the bug.
* The solution is generated based on the description of the bug, as provided in the bug report.
* The solution is displayed in a user-friendly markdown format, making it easy to read and understand.

Steps to Use:
1. Navigate to the bug you want to view on the **Bugs List** page.
2. Click on the dropdown on the right side of the bug, to expand details of the bug and view the bug report.
3. Click on the **Get Solution** button at the top of the bug report.
4. The solution will be displayed in a pop-up dialog in markdown format.
5. Click on the **Cancel** button, or anywhere outside the pop-up dialog to close the dialog.

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

<br><br>

