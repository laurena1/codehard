{"filter":false,"title":"makemono.sh","tooltip":"/makemono.sh","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":19}},"text":"#!/usr/bin/env bash"},{"action":"insertText","range":{"start":{"row":0,"column":19},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":6,"column":0}},"lines":["mkdir data","echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest \"$@\"' > mongod","chmod a+x mongod","","npm install mongodb"]},{"action":"insertText","range":{"start":{"row":6,"column":0},"end":{"row":6,"column":20}},"text":"npm install mongoose"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":6,"column":20},"end":{"row":6,"column":20},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1416426816524,"hash":"f96cad0ac73272d0d103142cab6a8e83642e403e"}