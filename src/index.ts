// ==UserScript==
// @name         tampermonkey-starter
// @license      MIT
// @version      0.0.1
// @description  油猴脚本起步模板
// @author       Nauxscript
// @run-at       document-start
// @match        */swagger-ui/*
// @match        */*/swagger-ui/*
// @match        */*/*/swagger-ui/*
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.4/jquery.js
// @namespace    Nauxscript
// ==/UserScript==
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference types="jquery" />

(function () {
  'use strict'
  $('body').text('hello world')

  // eslint-disable-next-line no-console
  console.log('done')
})()
