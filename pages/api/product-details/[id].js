import path from 'path';
import fsPromises from 'fs/promises';

const data = require('../../../json/products.json');

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { id } = req.query;
    const products = await data;
    const detail = products.filter((elem) => elem.id === Number(id));
    res.status(200).json(detail[0]);
  }
}
