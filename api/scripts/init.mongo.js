/*
 * Run using the mongo shell. For remote databases, ensure that the
 * connection string is supplied in the command line. For example:
 * Atlas:
 *   mongosh "mongodb+srv://cluster0.u2rfn.mongodb.net/InventoryTry" --username pritesh11 scripts/init.mongo.js
 */

/* global db print */
/* eslint no-restricted-globals: "off" */

db.products.remove({});

const initialProducts = [
  {
    id: 1,
    name: "Spykar",
    category: 'Jeans',
    price: '20',
    imageUrl: 'https://picsum.photos/500/500',
  },
  {
    id: 2,
    name: 'Arrow',
    category: 'Shirts',
    price: '15',
    imageUrl: 'https://picsum.photos/500/500',
  },
];

db.products.insertMany(initialProducts);
const count = db.products.count();
print('Inserted total of ', count, 'products');

db.counters.remove({ _id: 'products' });
db.counters.insert({ _id: 'products', current: count });

db.products.createIndex({ id: 1 }, { unique: true });
db.products.createIndex({ name: 1 });
db.products.createIndex({ price: 1 });
db.products.createIndex({ category: 1 });
