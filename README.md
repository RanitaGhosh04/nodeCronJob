# Task Scheduler Application

This project is a *Task Scheduler* that allows users to create scheduled tasks via a web interface. The tasks are sent to an email address at the scheduled time. The backend leverages cron for scheduling and nodemailer for sending emails. All task logs are stored in MongoDB for reference.

## Features
- Add tasks with a description, email, and schedule (in cron format).
- Scheduled emails are sent to the specified email address at the scheduled time.
- View all scheduled tasks in a list.

## Live Hosted Version

Backend hosted link - https://nodecronjob-backend.onrender.com

FronteEnd hosted link - https://node-cron-job-36vt.vercel.app/?authuser=0

## API Documentation
- POST /api/tasks: Add a new task (schedule an email).
  - Body:
    json
    {
      "task": "Task description",
      "email": "example@example.com",
      "schedule": "cron expression"
    }
    
- GET /api/tasks: Retrieve all scheduled tasks.

---

## Project Setup Instructions

### 1. Installation

#### Backend
1. Clone the repository:
   git clone https://github.com/RanitaGhosh04/nodeCronJob.git
   
