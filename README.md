
About
======

This is a responsive gallery created on the basis of NextJS + React and various js libraries for image processing/display. 

Overview
=========

The server part is based on NextJS framework

Turn off telemetry after cloning of project

```
npx next telemetry disable
```



Start development server:

```
npm run dev
```


Production build
=================

The package.json should contain the following (generic) scripts:

```
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```
In particular, the ```build``` goal runs `next build` which builds the application for production usage



Deployment (using Vercel platform)
===================================

I chose the fastest and the easiest way to deploy Next.js to production - via Vercel platform.
Vercel is a cloud platform for static sites, hybrid apps, and Serverless Functions.

# Deployment via Vercel

The steps:

1. Sign up to Vercel.

2. After signing up/ logging in, choose "New project", then "Import Project" -> "From Git Repository", choose the Git provider you use and set up an integration with your personal account/selected repository, with permissions to 1) read metadata, and 2) read and write access to administration, checks, code, commit statuses, deployments, issues, pull requests, and repository hooks. I does make sense to allow access to only specific repository.

3. Once that’s set up, click "Import Project From..." and import your Next.js app. It auto-detects that your app is using Next.js and sets up the build configuration. On this stage one can skip the creation of team, if you are the single contributor/owner for your project, so one can go straight to project configuration. One can choose the pre-defined configuration from a quite long list of various frameworks/platforms.

4. After importing, it’ll deploy Next.js app and provide a deployment URL. Click "Visit" to see your app in production.

See more at https://nextjs.org/docs/deployment


# Adding a Domain

Adding custom domain - see the https://vercel.com/docs/custom-domains

Generally, this task can be done in 3 steps:

Step 1: Select Your Project

Select one from the Dashboard

Step 2: Navigate to Domain Settings

Choose Settings -> Domains

Step 3: Enter Your Chosen Domain

Enter the domain name (can be an apex domain, i.e. example.com, or subdomain. f.e. docs.example.com)

# Configuring DNS


Notes about code
=================

1. requirements for card's images on the main page:
   
   * resolution 400x267 px
   * apply median filter with radius=9
   
2. requirements for thumbnail images on the preview pages:
   
   * resolution height=400 px
   * compression quality < 75


