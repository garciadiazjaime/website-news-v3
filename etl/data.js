const fs = require('fs');
const mongoose = require('mongoose');
const debug = require('debug')('etl:data')

const { News } = require('./models')
const config = require('./config');

function openDB() {
  return mongoose.connect(config.get('db.url'), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
}

function load(filename, rawData) {
  const data = JSON.stringify(rawData);
  fs.writeFileSync(`./static/data/${filename}.json`, data);
}

async function saveHomepage() {
  const news = await News.find().sort({createdAt: -1}).limit(100)

  load('homepage', news)
}

function createDirectory() {
  const dir = './static/data'

  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
}

async function main() {
  createDirectory()
  await openDB()

  await saveHomepage()
}


if (require.main === module) {
  main().then(() => {
    debug('data generated')
    process.exit(0);
  });
}
