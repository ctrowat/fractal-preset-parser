import * as fs from 'fs';

const SYSEX_START:number = 0xF0;
const SYSEX_END:number = 0xF7;

let binary = fs.readFileSync('./binary.syx');

let blockArray: MidiBlock[] = [];
let currentArray: number[] = [];
let counter: number = 1;

for (const nextByte of binary) {
    if (nextByte === SYSEX_START) {
        console.log(`Sysex Start byte`);
    } else if (nextByte === SYSEX_END) {
        blockArray.push({
            buffer:Buffer.from(currentArray)
        })
        fs.writeFileSync(`./block${counter++}.bin`,Buffer.from(currentArray));
        currentArray = [];
    } else {
        currentArray.push(nextByte);
        if (currentArray.length > 10000) {
            console.log('Error processing file!');
            break;
        }
    }
}

console.log('Done');