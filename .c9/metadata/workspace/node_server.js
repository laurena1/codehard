{"changed":true,"filter":false,"title":"node_server.js","tooltip":"/node_server.js","value":"var express = require('express');\nvar bodyParser = require('body-parser');\nvar app = express();\n\n//The first step to get started is to implemtnt a basic Node.js webserver. This will serve static files that serve certain routes.\napp.use('/', express.static('./static')).//This mapes to ./static in the project directory and contains the HTML documetns to be served statically\n    use('/images', express.static( './images')).//This maps to ./images from the project directory and serves any images used in examples\n    use('/lib', express.static( './lib'));\n    \n\napp.use(bodyParser.urlencoded({ extended: true }));\napp.use(bodyParser.json());\n\napp.listen(process.env.PORT, process.env.IP);\n","undoManager":{"mark":-250,"position":100,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":145},"end":{"row":5,"column":146}},"text":"y"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":48},"end":{"row":6,"column":49}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":49},"end":{"row":6,"column":50}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":50},"end":{"row":6,"column":51}},"text":"T"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":51},"end":{"row":6,"column":52}},"text":"h"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":52},"end":{"row":6,"column":53}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":53},"end":{"row":6,"column":54}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":54},"end":{"row":6,"column":55}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":55},"end":{"row":6,"column":56}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":56},"end":{"row":6,"column":57}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":57},"end":{"row":6,"column":58}},"text":"k"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":58},"end":{"row":6,"column":59}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":59},"end":{"row":6,"column":60}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":60},"end":{"row":6,"column":61}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":6,"column":60},"end":{"row":6,"column":61}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":6,"column":59},"end":{"row":6,"column":60}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":6,"column":58},"end":{"row":6,"column":59}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":6,"column":57},"end":{"row":6,"column":58}},"text":"k"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":57},"end":{"row":6,"column":58}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":58},"end":{"row":6,"column":59}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":59},"end":{"row":6,"column":60}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":60},"end":{"row":6,"column":61}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":61},"end":{"row":6,"column":62}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":62},"end":{"row":6,"column":63}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":63},"end":{"row":6,"column":64}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":64},"end":{"row":6,"column":65}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":65},"end":{"row":6,"column":66}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":66},"end":{"row":6,"column":67}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":67},"end":{"row":6,"column":68}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":68},"end":{"row":6,"column":69}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":69},"end":{"row":6,"column":70}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":70},"end":{"row":6,"column":71}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":71},"end":{"row":6,"column":72}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":72},"end":{"row":6,"column":73}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":73},"end":{"row":6,"column":74}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":74},"end":{"row":6,"column":75}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":75},"end":{"row":6,"column":76}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":76},"end":{"row":6,"column":77}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":77},"end":{"row":6,"column":78}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":78},"end":{"row":6,"column":79}},"text":"h"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":79},"end":{"row":6,"column":80}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":80},"end":{"row":6,"column":81}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":81},"end":{"row":6,"column":82}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":82},"end":{"row":6,"column":83}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":6,"column":82},"end":{"row":6,"column":83}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":82},"end":{"row":6,"column":83}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":83},"end":{"row":6,"column":84}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":84},"end":{"row":6,"column":85}},"text":"j"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":85},"end":{"row":6,"column":86}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":86},"end":{"row":6,"column":87}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":87},"end":{"row":6,"column":88}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":88},"end":{"row":6,"column":89}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":89},"end":{"row":6,"column":90}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":90},"end":{"row":6,"column":91}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":91},"end":{"row":6,"column":92}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":92},"end":{"row":6,"column":93}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":93},"end":{"row":6,"column":94}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":94},"end":{"row":6,"column":95}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":95},"end":{"row":6,"column":96}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":96},"end":{"row":6,"column":97}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":97},"end":{"row":6,"column":98}},"text":"y"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":98},"end":{"row":6,"column":99}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":99},"end":{"row":6,"column":100}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":100},"end":{"row":6,"column":101}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":101},"end":{"row":6,"column":102}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":102},"end":{"row":6,"column":103}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":103},"end":{"row":6,"column":104}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":104},"end":{"row":6,"column":105}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":105},"end":{"row":6,"column":106}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":106},"end":{"row":6,"column":107}},"text":"v"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":107},"end":{"row":6,"column":108}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":108},"end":{"row":6,"column":109}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":109},"end":{"row":6,"column":110}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":110},"end":{"row":6,"column":111}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":111},"end":{"row":6,"column":112}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":112},"end":{"row":6,"column":113}},"text":"y"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":113},"end":{"row":6,"column":114}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":114},"end":{"row":6,"column":115}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":115},"end":{"row":6,"column":116}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":116},"end":{"row":6,"column":117}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":117},"end":{"row":6,"column":118}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":118},"end":{"row":6,"column":119}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":119},"end":{"row":6,"column":120}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":120},"end":{"row":6,"column":121}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":121},"end":{"row":6,"column":122}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":122},"end":{"row":6,"column":123}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":123},"end":{"row":6,"column":124}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":124},"end":{"row":6,"column":125}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":125},"end":{"row":6,"column":126}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":126},"end":{"row":6,"column":127}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":127},"end":{"row":6,"column":128}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":128},"end":{"row":6,"column":129}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":129},"end":{"row":6,"column":130}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":130},"end":{"row":6,"column":131}},"text":"x"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":131},"end":{"row":6,"column":132}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":132},"end":{"row":6,"column":133}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":133},"end":{"row":6,"column":134}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":134},"end":{"row":6,"column":135}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":135},"end":{"row":6,"column":136}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":136},"end":{"row":6,"column":137}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":12,"column":0},"end":{"row":14,"column":0}},"nl":"\n","lines":["","    "]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":14,"column":0},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1415643984098}