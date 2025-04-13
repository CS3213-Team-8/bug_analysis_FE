---
  layout: default.md
  title: "FAQ"
  pageNav: 3
---

# FAQ

<box type="tip">
This section answers common questions about BugSnapper or specific features.
</box>

<panel header="**Question:** What Database systems does BugSnapper support?">

**Answer:** Currently, BugSnapper supports DuckDB, TiDB, and CockroachDB. Support for more DBMSs can be added in the future.
</panel>
<br>
<panel header="**Question:** How accurate is bug solution provided by BugSnapper?">

**Answer:** The solution is generated using AI tools, so accuracy is not guaranteed. Always verify the solution before applying it to your code!
</panel>
<br>
<panel header="**Question:** How is Mean Time-to-Fix (TTF) calculated?">

**Answer:** TTF is calculated as the average time taken to resolve a bug, measured from the date the bug was reported (issue created on GitHub) to the date it was resolved (issue closed on GitHub).
</panel>
<br>
<panel header="**Question:** Where does BugSnapper get its data from?">

**Answer:** BugSnapper collects data directly from the GitHub repositories of the supported DBMSs. It uses the GitHub API to fetch issue data, including bug reports, their status, and resolution times.
</panel>
<br>
<panel header="**Question:** Why do some bugs have their category classified as 'Others'?">

**Answer:** The 'Others' category is a catch-all for bugs that do not fit into the predefined categories. This allows for flexibility in bug classification and ensures that all bugs are accounted for, even if they don't fit neatly into a specific category.
</panel>
<br>
<panel header="**Question:** I can't see any visualisation or bugs when I first open BugSnapper. What should I do?">

**Answer:** If you are unable to see any visualisation or bugs when you first open BugSnapper, this may be due to the rate-limiting of the GitHub API. BugSnapper fetches data from GitHub, and if you exceed the rate limit, it may not be able to retrieve the data. Please wait for a while and try again later.
</panel>
