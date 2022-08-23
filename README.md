# rems
## Contents
- [Description](#description)
- [Features](#features)
- [Setup](#setup)
- [Requirements](#requirements)

## Description
> In today's world, a physician's job is complicated by tedious and repetitive forms, reports, and surveys. Rems is a platform that serves not only to optimize these time consuming aspects of a physician's workload, but also to provide a framework of tools and services designed to help physicians organize patients, track important dates, and communicate with drug manufacturers.

## Features
- **Dashboard**    
  Display of upcoming deadlines and important events, including high risk and flagged patients
- **Surveys**    
  Interface with drug manufacturers by filling out and submitting surveys in response to adverse events experienced by patients.
- **Patients**    
  Database of patients
- **Calendar**     
  Organizational calendar to track prescriptions, refills, and patient check ups.
- **Reports**    
  Export patient reports to other formats.

## Setup

### UI

Clone repository

```bash
git clone https://github.com/jdai1/rems.git
```

Install dependencies

```bash
npm install
```

Serve app
```bash
npm start
```

### Amplify

--> Install and configure [AWS Amplify](https://docs.amplify.aws/cli/start/install/)

Run

```bash
amplify configure
```

to configure the AWS project. The command will ask you to log in to the AWS management console and create a new IAM user for the project. Upon creating the IAM user, you are given an accessKeyId and a secretKey to verify the new user in the console. 

Note: Save the accessKeyId and secretKey on your computer somewhere as you will not have access to it after the creation of the user.

Then navigate to the project root and initialize AWS Amplify with the default options in the new directory by running 

```bash
amplify init
```

### Cognito

--> Create User Pool from AWS management console.

To configure the user pool, in the MFA and verifications section, enable the SMS text message option for required multifactor authentication.

In order to send texts from AWS, you will have to provide an IAM role for Cognito to send messages from (at the bottom of the MFA and verifcations page). 

To complete the MFA set up, configure a Sandbox environemnt in SNS (Simple Notification Service). To do so, first navigate to AWS pinpoint, and request a phone number under the SMS and voice section. Click the toll-free option to received a TFN (toll-free number) provisioned by AWS that will send the SMS messages required for MFA. Then, navigate to SNS and add the verified phone numbers that will be used for demo purposes (Sandbox requries that the numbers used in a develop environment are verified).

Import the user pool to the amplify project (you may be prompted for the accessKeyId and secretKey):

```bash
amplify import auth
```

### Hosting on Amplify

--> Add [hosting](https://docs.amplify.aws/start/getting-started/hosting/q/integration/js/)

In the amplify add hosting configurations, select Amazon Cloudfront and S3 for plugin module, DEV for environment, and index.html for index doc.

After successfully running

```bash
amplify publish
```

the web app will be hosted on an S3 bucket which can be seen from the AWS management console. The web app will be accessible from the link in the output.
