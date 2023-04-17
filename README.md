# How to make Next Auth work with Capacitor
## Before you start
**This is an example of a production use.** **It doesn't work straight out of the box on `localhost`**, as the application that runs on on Vercel doesn't allow requests from `localhost`. (See https://github.com/choutkamartin/next-auth-capacitor/issues/4)

This is an example of how would you authenticate user from your built Android application against a Next.js application running on a distant server.

## What is this?
If you have a Next.js application, you may know you can run it natively on Android or iOS using Capacitor.

Next Auth however doesn't work straight out the box. This repository shows that you can use some workarounds to make it work.

Basic Capacitor knowledge required.

## Tips
1. Use `chrome://inspect/#devices` to inspect the webview of your application. You can inspect cookies of your app this way.
2. Don't know much about Capacitor? Read this https://devdactic.com/nextjs-and-capacitor

## Caveats
### iOS and the forbidden usage of https scheme
iOS as a system doesn't allow the usage of `https` scheme, which is something we rely on in this repository, as we want our application to have a hostname with the `https` scheme

Read more at: https://forum.ionicframework.com/t/https-for-the-app-server-protocol-instead-of-capacitor-on-ios/200116/2


## What you need to do:
### 1. Change capacitor.config.ts to:
```ts
server: {
    hostname: `mob.next-auth-capacitor.vercel.app`, // We need to change hostname to subdomain of our domain the API is hosted on
    androidScheme: "https", // HTTPS should be set preferably
},
```

We need to set hostname and androidScheme to `https` so we can share our cookies with our application (domain - subdomain cookies sharing).

### 2. Change Next API config (headers) to enable CORS
You must change mainly these keys: `Access-Control-Allow-Credentials` and `Access-Control-Allow-Origin` so the application can connect to the server.
```js
async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: "https://mob.next-auth-capacitor.vercel.app",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
```
### 3. Create own OAuth flow 
See `utils/helper.ts`

### 4. Create own UseSession provider
See `utils/session.tsx`

### 5. Change `_app.tsx` SessionProvider to provider you just created
See `pages/_app.tsx`

### 6. Modify Next Auth config
See `pages/api/auth/[...nextauth].ts`

---
Based on a discussion: https://github.com/nextauthjs/next-auth/discussions/4446
Thanks to [@creativiii](https://github.com/creativiii)
