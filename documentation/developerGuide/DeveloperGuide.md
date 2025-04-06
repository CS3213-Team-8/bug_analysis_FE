---
  layout: default.md
  title: "Developer Guide"
  pageNav: 3
---

# BugSnapper Developer Guide

--------------------------------------------------------------------------------------------------------------------

## Introduction

Welcome to the Developer Guide. As a developer, this guide helps you understand how you can set up the development environment. It is designed to provide you with the necessary information to effectively contribute to the project.

## Purpose of this Guide
The main objectives of this guide are to:

1. Orient new developers to the software's tech stack.
2. Provide a brief overview of the software architecture.
3. Detail the setup process for a development environment.

## Product Overview

BugSnapper is a web-based bug analysis tool built to support the [SQLancer](https://github.com/sqlancer/sqlancer) ecosystem by providing insights into bugs across open-source DBMSs like DuckDB, TiDB, and CockroachDB.

BugSnapper is built for learning, contribution, and practical impact in database testing — and there’s lots of room for you, as a developer, to shape where it goes next!

## Tech Stack

BugSnapper is built using a modern full-stack architecture, combining a responsive React frontend with a lightweight Python-based backend and a robust PostgreSQL database. Here’s an overview of the technologies powering the project:

<pic src="../images/tech_stack.png" style="margin-bottom: 20px;" />

<style>
  .tech-stack-table {
    width: 100%;
    border-collapse: collapse;
    margin: 1em 0;
    font-size: 1rem;
    border: 1px solid #ddd;
  }

  .tech-stack-table th,
  .tech-stack-table td {
    border: 1px solid #ddd;
    padding: 12px 16px;
    text-align: left;
  }

  .tech-stack-table td:first-child {
    font-size: 1.1rem;
    color: #e46c0a;
    font-weight: bold;
  }

  .tech-stack-table th {
    background-color: #f5f5f5;
    font-weight: bold;
    font-size: 1.2rem;
  }

  .tech-stack-table tr:nth-child(even) {
    background-color: #fcfcfc;
  }

  .tech-stack-table tr:hover {
    background-color: #f1f1f1;
  }
</style>

<table class="tech-stack-table">
  <thead>
    <tr>
      <th>Layer</th>
      <th>Technology</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Frontend</td>
      <td>React</td>
    </tr>
    <tr>
      <td></td>
      <td>Tailwind CSS</td>
    </tr>
    <tr>
      <td></td>
      <td>Material UI</td>
    </tr>
    <tr>
      <td>Backend</td>
      <td>FastAPI</td>
    </tr>
    <tr>
      <td></td>
      <td>SQLAlchemy</td>
    </tr>
    <tr>
      <td></td>
      <td>OpenAI API</td>
    </tr>
    <tr>
      <td></td>
      <td>GitHub API</td>
    </tr>
    <tr>
      <td>Database</td>
      <td>PostgreSQL</td>
    </tr>
    <tr>
      <td>Testing</td>
      <td>Pytest</td>
    </tr>
    <tr>
      <td></td>
      <td>React Testing Library</td>
    </tr>
    <tr>
      <td>Deployment</td>
      <td>Vercel (Frontend)</td>
    </tr>
    <tr>
      <td></td>
      <td>Render (Backend)</td>
    </tr>
  </tbody>
</table>

## Architecture Overview

BugSnapper is built using a modular architecture designed for maintainability and extensibility. The system follows a clear separation of concerns between the frontend, backend, and supporting services.

#### System Overview

<div class="text-center">
<pic src="../images/system_context.png" style="margin-bottom: 20px; width: 75%" />
</div>

#### Backend Component Overview

<div class="text-center">
<pic src="../images/backend_context.png" style="margin-bottom: 20px; width: 75%" />
</div>

#### Web App Component Overview

<div class="text-center">
<pic src="../images/frontend_context.png" style="margin-bottom: 20px; width: 75%" />
</div>

<box type="tip">
  Want to get started with contributing to BugSnapper? Check out the <a href="./SettingUp.md">Setting Up and Getting Started</a> section for a step-by-step guide on how to set up the development environment.
</box>