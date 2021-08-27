
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




Deployment (using Vercel platform)
===================================

I chose the fastest and the easiest way to deploy Next.js to production - via Vercel platform.
Vercel is a cloud platform for static sites, hybrid apps, and Serverless Functions.

# Deployment via Vercel

The steps:

1. Sign up to Vercel.

2. After signing up, go to "Import Project" -> "From Git Repository", choose the Git provider you use and set up an integration.

3. Once that’s set up, click "Import Project From..." and import your Next.js app. It auto-detects that your app is using Next.js and sets up the build configuration.

4. After importing, it’ll deploy Next.js app and provide a deployment URL. Click "Visit" to see your app in production.

See more at https://nextjs.org/docs/deployment


# Adding a Domain

Adding custom domain - see the https://vercel.com/docs/custom-domains



# Configuring DNS


Notes about code
=================

1. requirements for card's images on the main page:
   
   * resolution 400x267 px
   * apply median filter with radius=9
   
   



