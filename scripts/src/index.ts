#!/usr/bin/env node
import { push } from './push';

async function main(path: string) {
  try {
    await push(path);
  } catch (e) {
    console.error(e);
  }
}

var args = process.argv.slice(2);
main(args[0]);
