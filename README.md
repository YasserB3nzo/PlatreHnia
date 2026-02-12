1️⃣ Clear npm Authentication Issues
npm logout
npm config delete //registry.npmjs.org/:_authToken


Purpose:

Fixes 401/404 registry errors

Clears expired or “zombie” authentication tokens
.

Web Support & Dependencies
Install Web Translation Layers
npx expo install react-dom react-native-web

Build & Deployment
1️⃣ Export Web Build
npx expo export --platform web


This generates a production-ready static build inside the dist/ folder.

2️⃣ Deploy to Vercel

Move into the build directory:

cd dist


Initialize deployment:

npx vercel


Deploy to production:

npx vercel --prod


After deployment, Vercel generates a live URL