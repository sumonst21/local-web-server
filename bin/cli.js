#!/usr/bin/env node
'use strict'
const LocalWebServer = require('../')

const ws = new LocalWebServer()
ws.addCors()
  .addJson()
  .addRewrite()
  .addBodyParser()
  .addBlacklist()
  .addCache()
  .addMimeOverride()
  .addCompression()
  .addLogging()
  .addMockResponses()
  .addSpa()
  .addStatic()
  .addIndex()
  .listen()
