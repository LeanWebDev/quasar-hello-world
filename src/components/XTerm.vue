<template>
  <div>
    <div id="terminal"></div>
  </div>
</template>

<script>

// import { Terminal, WebSocket } from '../../node_modules/xterm/lib/xterm.js'

// const term = new Terminal({
//   cursorBlink: 'block'
// })
// const ws = new WebSocket('ws://localhost:3000', 'echo-protocol')
// let currLine = ''
// const entries = []
// term.open(document.getElementById('terminal'))
// term.write('web shell $ ')

// term.prompt = () => {
//   if (currLine) {
//     const data = { method: 'command', command: currLine }
//     ws.send(JSON.stringify(data))
//   }
// }
// term.prompt()

// // Receive data from socket
// ws.onmessage = msg => {
//   term.write('\r\n' + JSON.parse(msg.data).data)
//   currLine = ''
// }

// term.on('key', function (key, ev) {
//   // Enter
//   if (ev.keyCode === 13) {
//     if (currLine) {
//       entries.push(currLine)
//       term.write('\r\n')
//       term.prompt()
//     }
//   } else if (ev.keyCode === 8) {
//     // Backspace
//     if (currLine) {
//       currLine = currLine.slice(0, currLine.length - 1)
//       term.write('\b \b')
//     }
//   } else {
//     currLine += key
//     term.write(key)
//   }
// })

// // paste value
// term.on('paste', function (data) {
//   currLine += data
//   term.write(data)
// })

export default {
  name: 'XTerm'
}
</script>
