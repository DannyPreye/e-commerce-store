// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const prod = require('../../json/products.json');

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const products = await prod;
    res.status(200).json(products);
  }
}
