import * as singleSpa from 'single-spa'
import { GlobalEventDistributor } from './globalEventDistributor'
import { loadApp } from './util'

async function init() {
  const globalEventDistributor = new GlobalEventDistributor()

  const promiseList = []

  // app1: The URL "/app1/..." is being redirected to "http://localhost:9001/..." this is done by the webpack proxy (webpack.config.js)
  promiseList.push(loadApp('app1', '/react', '/app1/singleSpaEntry.js', '/app1/store.js', globalEventDistributor))

  // app3: The URL "/app2/..." is being redirected to "http://localhost:9002/..." this is done by the webpack proxy (webpack.config.js)
  promiseList.push(loadApp('app2', '/vue', '/app2/singleSpaEntry.js', null, null)) // does not have a store, so we pass null

  // wait until all stores are loaded and all apps are registered with singleSpa
  await Promise.all(promiseList)

  singleSpa.start()
}

init()
