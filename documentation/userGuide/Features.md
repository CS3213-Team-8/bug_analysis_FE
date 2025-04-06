---
  layout: default.md
  title: "Features"
  pageNav: 3
---

# Features

## Features Overview

### Visualisation Page
* ##### Analyse Mean Time-to-Fix (TTF) Chart across DBMSs
* ##### View Number of Gugs Found across DBMSs
* ##### View Bugs Distribution across different Categories
* ##### Get Suggested DBMS
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
