# rems
## Contents
- [Description](#description)
- [Features](#features)
- [Setup](#setup)
- [Requirements](#requirements)

## Description
> In today's world, a physician's job is complicated by tedious and repetitive forms, reports, and surveys. Rems is a platform that serves not only to optimize these time consuming aspects of a physician's workload, but also to provide a framework of tools and services designed to help physicians organize patients, track important dates, and communicate with drug manufacturers.

## Features
- **Dashboard:**    

- **Surveys**    

- **Patients**    

- **Calendar**     
  
- **Reports**    
  

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

Be sure to download the [accesKeyId and secretKey](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html)

--> Add [hosting](https://docs.amplify.aws/start/getting-started/hosting/q/integration/js/)

In the amplify add hosting configurations, select Amazon Cloudfront and S3 for plugin module, DEV for environment, and index.html for index doc.

After successfully running

```bash
amplify publish
```

the web app will be hosted on an S3 bucket which can be seen from the AWS management console. The web app will be accessible from the link in the output.

### Cognito

Create User Pool from AWS management console.

Configuration:


Import the user pool to the amplify project (you may be prompted for accessKeyId and secretKey)

```bash
amplify import auth
```






