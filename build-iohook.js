const events = require('events');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

(async function processKeymapHeader() {
  try {
    const rl = readline.createInterface({
      input: fs.createReadStream(path.join(__dirname, '/libuiohook/include/uiohook.h')),
      crlfDelay: Infinity
    });

    var output = fs.createWriteStream('src/iohook.ts');

    const VC_MATCH = /^#define VC_([^ ]+) +((?:[^ ]+)(?: \| [^ ]+)?)/;
    const MOUSE_MATCH = /^#define MOUSE_([^ ]+) +([0-9]+)/;
    const calculated = [];
    const keys = [];

    rl.on('line', (line) => {
      if (line.startsWith('#define VC_')) {
        const matches = line.match(VC_MATCH);
        
        if (matches) {
          // console.log(`VC match: ${JSON.stringify(matches.slice(1))}`);
          keys.push(`KEY_${matches[1]}`);

          if (matches[2].includes('|')) {
            calculated.push([ `KEY_${matches[1]}`, matches[2] ]);
          } else {
            output.write(`const IOHOOK_KEY_${matches[1]} = ${matches[2]};\n`);
          }
        } else {
          console.log(`Unknown IOHOOK_KEY: ${line}`);
        }
      } else if (line.startsWith('#define MOUSE_')){
        const matches = line.match(MOUSE_MATCH);
        
        if (matches) {
          // keys.push(`MOUSE_${matches[1]}`);

          // console.log(`MOUSE match: ${JSON.stringify(matches.slice(1))}`);
          // output.write(`const IOHOOK_MOUSE_${matches[1]} = ${matches[2]};\n`);
        } else {
          console.log(`Unknown IOHOOK_MOUSE: ${line}`);
        }
      } else if (line.startsWith('#define ')){
        // console.log(`Unknown: ${line}`);
      }
    });

    await events.once(rl, 'close');

    for (const [ key, value ] of calculated) {
      output.write(`const IOHOOK_${key} = ${value.replace('VC_', 'IOHOOK_KEY_')};\n`)
    }

    output.write('\nexport const ENUM_TO_IOHOOK = {\n');

    for (const key of keys) {
      output.write(`  ${key}: IOHOOK_${key},\n`);
    }

    output.write('};\n');
  } catch (err) {
    console.error(err);
  }
})();
