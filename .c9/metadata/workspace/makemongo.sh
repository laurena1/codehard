{"filter":false,"title":"makemongo.sh","tooltip":"/makemongo.sh","undoManager":{"mark":-1,"position":-1,"stack":[[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":0,"column":0},"end":{"row":4,"column":0}},"nl":"\n","lines":["#!/usr/bin/env bash","mkdir data","echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest \"$@\"' > mongod","chmod a+x mongod"]},{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":1}},"text":"{"},{"action":"insertText","range":{"start":{"row":0,"column":1},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":21,"column":0}},"lines":["  \"name\": \"NMA-Express\",","  \"description\": \"A package containing all of the code for Part IV of the NMA book\",","  \"author\": \"Lauren Alvarez, Rodrigo Mata, Chern Hee\",","  \"version\": \"1.0.0\",","  \"dependencies\": {","    \"mongodb\": \"latest\",","    \"mongoose\": \"latest\",","    \"express\": \"latest\",","    \"jade\": \"latest\",","    \"ejs\": \"latest\",","    \"basic-auth-connect\": \"latest\",","    \"body-parser\": \"latest\",","    \"connect-mongo\": \"latest\",","    \"cookie-parser\": \"latest\",","    \"cookie-session\": \"latest\",","    \"express-session\": \"latest\",","    \"serve-static\": \"latest\"","","  },","  \"engine\": \"node >= 0.10.30\""]},{"action":"insertText","range":{"start":{"row":21,"column":0},"end":{"row":21,"column":1}},"text":"}"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":4,"column":0},"end":{"row":4,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1415215391000,"hash":"bce09e6bc93b270050255ae9593c246015c4612f"}