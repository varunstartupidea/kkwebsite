/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/kkwebsite',
  assetPrefix: '/kkwebsite/',
  images: { unoptimized: true },
};
module.exports = nextConfig;
```

Then open **`.gitignore`** and make sure these lines are in it:
```
.next
out
node_modules