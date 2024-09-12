# Task Scheduler Application

**About Cron** -

Cron provides a way to repeat a task at a specific time interval. There may be repetitive tasks such as logging and performing backups that need to occur on a daily or weekly or monthly basis.

Install node-cron using npm: npm install --save node-cron

import cron from 'node-cron';

cron.schedule('* * * * *', () => {
  console.log('running a task every minute');
});

To learn more about cron visit https://www.npmjs.com/package/node-cron

## Live Hosted Version

Backend hosted link - https://nodecronjob-backend.onrender.com

FronteEnd hosted link - https://node-cron-job-36vt.vercel.app/?authuser=0

The project looks like this, you may change the ui accordingly -

![image](https://github.com/user-attachments/assets/ee3ee5ab-9a5d-41c3-8591-dcc48970b7b5)


**Project description** -

A Task Scheduler that enables users to plan and manage tasks via a web-based interface. Scheduled tasks are automatically sent to a specified email address at the designated time. The backend relies on cron for scheduling tasks and nodemailer for handling email delivery. Task logs are systematically recorded and stored in MongoDB for later access.

## Project Setup Instructions

**Clone the Repository**-
git clone https://github.com/RanitaGhosh04/nodeCronJob.git?authuser=0

#Install Dependencies
npm install

**Configure Environment Variables**
MONGO_URI=mongodb://localhost:27017/your-database
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
PORT=3000

**Run Backend**
-npm start

**Run FrontEnd**
-npm run dev

**APIs Provided**
**1. POST /api/tasks**
Description: Create a new task. This endpoint schedules an email to be sent based on the provided details.  

{  

  "task": "Task description",  
  
  "email": "example@example.com",  
  
  "schedule": "cron expression"  
  
}  

task: A string containing the description of the task.
email: The recipient's email address where the task notification will be sent.
schedule: A cron expression specifying when the email should be sent. Cron expressions follow a specific format to denote timing

Response:
Success: Returns a confirmation that the task has been created and scheduled.
Error: Returns an error message if the task could not be scheduled (e.g., invalid cron expression, missing fields).

**2. GET /api/tasks**

Description: Retrieve a list of all scheduled tasks. This endpoint provides details about all tasks that are currently set up in the system.
