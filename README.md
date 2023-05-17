# 旦猫计划 前端

前端分为两个部分。技术栈：[Next.js](https://nextjs.org/)

* 与后端交互，获得NFT图片和与图片对应的签名
* 与区块链交互，连接Metamask发起交易将签名和NFT上链

头像申领界面主要做手机适配，因为大部分领取头像的同学都会在手机上操作；头像上链界面主要做电脑端适配，因为要链接MetaMask。

## 运行命令

```bash
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

#### Deploy on Vercel

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
