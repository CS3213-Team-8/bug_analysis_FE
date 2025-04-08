---
  layout: default.md
  title: "Features"
  pageNav: 3
---

# Features

### Visualisation Page

- ##### Analyse Mean Time-to-Fix (TTF) Chart across DBMSs
- ##### View Number of Gugs Found across DBMSs
- ##### View Bugs Distribution across different Categories
- ##### <a href="#feature-get-dbms-suggestion" style="text-decoration: none; color: inherit;">Get DBMS Suggestion</a>
- ##### Get Detailed View of each DBMS
  - ###### View Bugs Distribution across different Categories
  - ###### Analyse Number of Opened vs Closed Issues per Month
  - ###### Get Summary of Bugs Found for DBMS

### Bugs List Page

- ##### View List of Bugs found across DBMSs
  - ##### View Bug Overview
  - ##### View Detailed Bug Report
  - ##### <a href="#feature-get-bug-solution" style="text-decoration: none; color: inherit;">Get Bug Solution</a>
  - ##### View Bug Report on GitHub
- ##### Filter Bugs by Category
- ##### Filter Bugs by DBMS

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

- It uses OpenAI's GPT-4o-mini model to generate an intuitive, yet concise solution for the bug.
- The solution is generated based on the description of the bug, as provided in the bug report.
- The solution is displayed in a user-friendly markdown format, making it easy to read and understand.

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

<a id="feature-category-management"></a>

### Feature: Category Management

This is an admin-only feature used to manage and maintain all BugSnapper generated categories for bug issues.

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
<div style="text-align: center;">
<pic src="../images/category_read.png" style="width: 600px"></pic>  
</div>
<br>

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

<br><br>

<a id="feature-database-management"></a>

### Feature: Database (DBMS) Management

This is an admin-only feature used to manage and maintain the list of database (DBMS) that BugSnapper supports, which are **DuckDB, TiDB and CrockroachDB**.

**Key Capabilities:**

- Display of all types of DBMS that BugSnapper supports.
- Manual creation of new DBMS.
- Manual deletion of existing DBMS.

<panel header="**Steps to use**" type="success" expanded>
<a id="feature-dbms-read"></a>

1. Navigate to the **DBMS** page.

2. A list of DBMS supported by BugSnapper will be displayed.
<div style="text-align: center;">
<pic src="../images/dbms_read.png" style="width: 600px"></pic>  
</div>
<br>

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
