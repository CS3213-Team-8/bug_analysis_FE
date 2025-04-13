---
  layout: default.md
  title: "Setting up and Getting Started"
  pageNav: 3
---

# Setting up and Getting Started

--------------------------------------------------------------------------------------------------------------------

This section provides a comprehensive guide to setting up the BugSnapper project on your local machine.

## Backend Setup

This section walks you through the process of setting up the BugSnapper backend, which is built using FastAPI, on your local machine.

### Prerequisites
- Ensure you have Python 3.8 or higher installed on your machine.
- Ensure you have PostgreSQL installed and running.

### Steps to Set Up the Backend
#### 1. Clone the Repository
Clone the repository to your local machine using the following command:

```bash
https://github.com/CS3213-Team-8/bug_analysis_BE.git
```

#### 2. Create a Virtual Environment
Navigate to the project directory and create a virtual environment:

```bash
cd bug_analysis_BE
python -m venv venv
```
Activate the virtual environment:
- On Windows:
```bash
venv\Scripts\activate
```
- On macOS/Linux:
```bash
source venv/bin/activate
```

Then, there are two ways to set up the backend. You can either use Docker or set it up manually.

#### 3a. Set Up Using Docker
If you prefer to use Docker, ensure you have Docker installed on your machine. Then, run the following command in the project directory:

```bash
docker-compose up
```

##### 3b. Set Up Manually
If you prefer to set up the backend manually, follow these steps:
1. Install the required dependencies using pip:

```bash
pip install -r requirements.txt
```

2. Create a `.env` file in the root of the project directory and add the following environment variables:

```bash
DATABASE_URL=""
SECRET_KEY=""
OPENAI_API_KEY=""
```

Replace the values with your PostgreSQL database URL, a secret key for JWT authentication, and your OpenAI API key.

3. Create the database locally using the following command:

```bash
CREATE DATABASE devdb;
```

4. Run the backend server using the following command:

```bash
python main.py
```

[Note: You may have to use `Base.metadata.create_all(bind=engine)` to create the database tables if they do not exist.]





## Frontend Setup

This section walks you through the process of setting up the BugSnapper frontend, which is built using React, on your local machine.

### Prerequisites
- Ensure you have Node.js and npm installed on your machine.

### Steps to Set Up the Frontend

#### 1. Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/CS3213-Team-8/bug_analysis_FE.git
```

#### 2. Install Dependencies
Navigate to the project directory and install the required dependencies:

```bash
cd bug_analysis_FE
npm install
```

#### 3. Set Up Environment Variables
Create a `.env` file in the root of the project directory and add the following environment variables:

```bash
REACT_APP_API_URL=<your_api_url>
```
Replace `<your_api_url>` with the URL of your locally running backend server.

#### 4. Start the Development Server
Start the development server using the following command:

```bash
npm start
```
