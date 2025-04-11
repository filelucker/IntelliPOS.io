'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "cbdaea830cbfd547acb95047ae536023",
"version.json": "9be419aacdb77585a8759c8940af8a10",
"index.html": "2fe8fe68587263b3ac75e844264ba23b",
"/": "2fe8fe68587263b3ac75e844264ba23b",
"main.dart.js": "ef2ae3063c47f455335f9e3bc23fa1c0",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7bac48c6d5705339b5ef80254314dd2b",
".git/ORIG_HEAD": "6c71c2efbe27570bd161bd5ba25179f5",
".git/config": "3682bb5d64dc20181ed16bcadff5dc88",
".git/objects/0d/353713e6c15b7dfe76bd5bddfd7406a1a75022": "df9aaa676b6958d8d25581f85b59b9b3",
".git/objects/0c/bca88584fa4b9cc07332a5a73123b58b5e4cae": "5aee247656317adac0bfd1d5a5b1a99f",
".git/objects/50/594d27f506a2e1714348049cde835a4554050a": "aee8d200ed02157537514aa57ec8c3a6",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/03/dbbef373598083d6662d4b20d3207e5fb2e95b": "63e4a7ead700cd1c43a535f6fd61dd65",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/9e/607b986bacb905df63b9085265ca393e2809d5": "07e3ec61ec95e69ba909a01f0c7d72c6",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/64f55bf615b9aee50c5fe800d519cb1405913c": "4e89770dc6380cb8436f09d8e567eaed",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/35/eb1ddfbbc029bcab630581847471d7f238ec53": "b69277a8e391674b63a06b70141a9094",
".git/objects/69/bca8da92ab30095f7bed88251124c32bde1cb7": "70da009ce58e4eab810312d1f4ddc7b9",
".git/objects/3c/c0dcb935bc527f21d3eaaf848276efb969f31a": "c8eba077ad3857e48ee8da3a59c6a283",
".git/objects/51/190be7244eddbd2721e329954a1e70eb9d4c09": "4d776cc6cf42975f37f5f5ce6082b929",
".git/objects/58/cdf1269660b48d97594a303096ad0eeea71a33": "23ddb5c0f76eb671da40f36e22eb08db",
".git/objects/94/249a1960332226c8bfb9e54325e263560f0bd1": "85fa113fd3754dac26b6caba2872522d",
".git/objects/5f/6a8ad350da823591436ff4677e5401cc6638c6": "8868bed47065e2119bce0fdfcd4779b0",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/05/462aa44d640c32c7c03b4eb7921ceae30c9dfc": "ef07a9822a2a4b2f2db881a0db4ee848",
".git/objects/9d/8c0b8aa9f4dae70fd68135656161d9a5c776f0": "ad235dcce8e884420bdb8a4fcb8f45cb",
".git/objects/9c/93d34a4641a7cdeffabc9342e5c2bfec3cc7e0": "45707ddb5def8c9df8072d9335544787",
".git/objects/02/473c2e9ed7e4abc1f55cf84b6284d47a2d7bb0": "b90e82f10d811a9e92032922916ccd4b",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/ad/eab9fa5bfd2dff4d3761a0e1ee26fbed939d71": "c7ed26da53a705760e9a944ee9acf85c",
".git/objects/bb/f7127a4a4e4154ac1ed3e8eda7ae5c5bf2c36c": "c35b935d3fd70e9349c6f703875f89c6",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/df/9f6d5b2955f2f4e02616ebea8cf9f7e0a3a5f8": "80ecb720b1c89fe6f6c348b40fce1db2",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/b4/700708912e9c8f2ae4a227780018abe5282a46": "0a88509d6a7400414beaf25b1077e4d5",
".git/objects/a2/a3dbbaf72e3d87e13310ecf901cb292fd33118": "b487db04be1159814593c0b672dac3f8",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d6/ae79118fc5b9743e0a42754c257bd6879c330d": "dd8816509efd8892dda9d08c1292dd42",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/bc/88e4edcbe531c6607840dc1f91494fd1c1ae02": "17f2327cbe773ca98bff82924d980706",
".git/objects/f4/4691996957617478c454222a5ad40e8928c251": "8b59e2b779215a18c0b35c65882de611",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/fd/cfdd0026344531cf59c7cfd185778bbc3e5291": "32804e9d8ff2536ef723ce8c67c89576",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/ca/19004d82c2a8bd3217ca327e2e101b307fd6ea": "2f9969717ba9ffd7dd39f0848bf7d521",
".git/objects/20/5aa1948672cbfa8a170bc5a6133d46b8b3752f": "d67d2fdf0bd47ec2ac06411ed40d6ccb",
".git/objects/29/e4fba17cfa9ffb4fd8fb36097a849eebe1b771": "944e8b46f54c89ce34a4aa1cdffe740c",
".git/objects/29/0835eab515d494d740dc48c9880eaabeb76eee": "19201f54f660d8eb1c443e23fad1ede0",
".git/objects/7c/cec682107f7aa2184554e05cabc54d1a76732c": "363dad53b9e581f163d508a83d08fc1c",
".git/objects/74/2ab475aec2262a1e5f5b6111a3264171658859": "da5c0cfec00fc1fcba6ab6ae25c05c43",
".git/objects/17/5195cb4d14bff38351996dc10917c5a18e059a": "1ea290ef7113094305338bc559c97d36",
".git/objects/7b/3056a45297e0682bbb3231b9fb19f98ff729f9": "c8584a763292609e6f694ba4ecd8f87e",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/d9a508ee91a759584ae850484024a898bd0c37": "9fae25bd111d3c58824798dd010c5a7e",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/86/6d69a7fe04b303e4a4778803e4ff3160680872": "08657bed643eb18fad04d0ec688c928b",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/2a/ba3d6c12bde0f3e5355b24431bf6dd6698e61d": "eeec4573aa9d336521d93b2acbd2edcc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9abf986a2783ab5462cba07e357252415027b9": "0e606b09837978fdf5efb10517b7295d",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/00/3713d1bad751a47d8549f7e5307e7f51e5f38a": "ea62b953e3933971fe04a2537d6a7d03",
".git/objects/6e/361d640dd4eb97d1c16ade348906d85891ea1c": "264c67a9a5f81cc05694f4a259d42a64",
".git/objects/9a/b7516b2b8712e13a55de7b4eefcd03d5436cba": "445655758310347e655876016819462f",
".git/objects/36/755b730ab1468a154ecf900bfc6a8cc3df45b6": "0a532614f8d9c043e2e970517f171316",
".git/objects/91/c14a0b2c2006245c4367eeddb5131eeac0ec42": "722863d2948f5399630caeabf1c864a4",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/7d814e89dd0b5b833f1f563366ceb92f2e9858": "09bca5a516c9b48086a6629c2bc51df7",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/37/909109ff2e30b6b653c0feb9e4c002684f7e62": "d5f609f651390c7766c4ae8d387c206d",
".git/objects/37/21ff64034cda4d0ee4f8c1f941155b602951c8": "b753a9daa68ff81d3db607bf86e65ad3",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/1e47b0ec4c8c49c614971601309c955de92f85": "ba5e2a94147c6264cdb7c0a36401ccfd",
".git/objects/6c/cfac7ff02162c8655b0eef5a49aebd13e69328": "bd4efa613ecf4fd6f9cab794bbf6caa4",
".git/objects/52/df1c8af53d79d7017db6720a04cc96b058c981": "a2c78d4b9597c5e94a2026c26b9f141d",
".git/objects/0a/1286d9b580d35af1d35307b02fef88cadea24e": "49839927a43edcd11ca47af741efc4b3",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a7/9c0cb872fc7090a0d2ff1ff776b0a510417343": "92cbaf041e7701fc05533a83648bde49",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/dd/5edb1a7e46855a8138b7028913a7aed7e07a26": "15779bbfbf84adb4b688dcd6964caa7f",
".git/objects/dd/9e9b6d403faa92897077cb747763689ac7e66f": "6d0236a209eb660a5c64857d6da18f6e",
".git/objects/dc/508baf399cfbea32f51b9542fe69f91cfae884": "b96c46ed4195adad3b35a2d13f3b26e1",
".git/objects/b6/2026c1df909633159fb94052a0b78c50c4a26f": "bf09873b2e8fc9b8859ef5ac6ba502be",
".git/objects/d2/46813172bfbc1f9883163b7872be01582dc6d6": "fa7c265b9b6c9eb30852d96f5a7b3962",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/a9afcc2147f0f7330e6e89a8d88189879568e3": "6f55126477e5bba13474d71a4dbf3787",
".git/objects/a8/0e8ad87181002044ab00244f77a801ba3ddae4": "4b85dea20da532a6ffbd8bf3a52a291c",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a6/7c07ab1155ef21791c32ba570e5a6a752ff031": "34879352bb80ec8fc65ee96445c964c2",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/cd/ca6c7883284033971dbb35d2692f9c14f15a62": "618eda840fecce9c07d290c462d5ce28",
".git/objects/cc/43d2b574495d997901848a71775b3aea0dd9a3": "58423dcf807227c827133d7e77c34749",
".git/objects/f0/09aab3e29330b6aa7373bfec9e8960462d62af": "5b88341e7101440bd2185f27f7dc2c3c",
".git/objects/ff/4962fa07bc64b72bb2f3313597c3eb687b9b2a": "d14eb2d6da8b802606a020a2c458d876",
".git/objects/f6/a0228224464f12478c4224cb7d88febd6c2a26": "99e2fe5e80b7f614f849af91e601f069",
".git/objects/ce/bbd4421d38821bef135766ea59fc1dd9ab561b": "c6b4e68e5b48b3c00729bd9fe52c98b0",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/70/830b8919ff4d4b795075a6dea69e35da2614fe": "e0f569c0534f626a37e9e9b632074922",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4f/16b48fe3e515088078d97b833f2a78830bfde7": "820f2231e2e41fddc28a782ee03cce0c",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/12/757bc5fd1172252711bbd86aa84c7673eb8d80": "4c2f850b6ff35a0a117a9bd570fbce21",
".git/objects/71/780849bd8c1653e42422ef9a17739160cfc2d2": "aff0c4108305054b251ae1ea3bf66e45",
".git/objects/76/57fb80560d8c64f7416a692e6ba1ba4328472a": "45b9cf0210b1edd64422c76875597a1c",
".git/objects/76/a6d9edb46fc3927123db4b905bf4ca28e26c3a": "e6e559fcb8d95409dfbaffabe2f557ca",
".git/objects/76/8734ad6fdaae0ad1c82cedbc6c571fcf1a6397": "48f0201dad3c57be4253a3f45fbf1262",
".git/objects/76/42610f3a66b32ac6954769e37e67226e9362e8": "e7e7ed2416ae78908c37a5bac91c2ba9",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/47/e0b52ce23c2e28461eb57f6d57887bbd4d438c": "ae1ecfef3a05717b9a8a37d9aa7a3d90",
".git/objects/22/069ff90528ba945e7276322da9379a838de361": "848646ce620bc14e3613a2f773d10614",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d26306c9dc6dacc55645db3262286d12",
".git/logs/refs/heads/main": "57ca58a4fbadf8a961f8d170796ccd04",
".git/logs/refs/remotes/origin/main": "1acc82ed76ac46dbd0fb778513875374",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "bc44f0a2f67cb1057352abad48c6106c",
".git/refs/remotes/origin/main": "bc44f0a2f67cb1057352abad48c6106c",
".git/index": "9e8459ab9b23e3a8e2f2e997f701d562",
".git/COMMIT_EDITMSG": "4d742b2f247bec99b41a60acbebc149a",
".git/FETCH_HEAD": "08358ff53ff328ef6b9ad26b4d1eaa15",
"assets/images/splash_bottom_img.png": "c11c9ef8aa8a2cdfc7148101591df8b0",
"assets/images/IntelleqPOS.png": "43a46863d80ed20154650095d5c52abe",
"assets/images/login_img.png": "5bebe29867b453b6a539a5e45cc2cc3a",
"assets/images/load.gif": "56df365a18fd90c799d9d6cf5d93f600",
"assets/images/splash_screen_bg.png": "d845f670b3b438671a8e36910a93ce4b",
"assets/images/splash_logo.png": "5edbac915b9b7ef2a50300ff582af6d0",
"assets/AssetManifest.json": "1c2ca9a9f0a29a7adf319c5ba0eec27e",
"assets/NOTICES": "c732e38a0a2681b87c3e5e281f128acc",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/AssetManifest.bin.json": "9e2605be02b40a6f042c69e19ca942f8",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3759b2f7a51e83c64a58cfe07b96a8ee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b5501031c3adaa9925086ed8d0556df3",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "afe24842f9d9bc080209630a7a8531c5",
"assets/fonts/MaterialIcons-Regular.otf": "c341c6efd1b9dbb8ff3fa8cd18e42501",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
".idea/vcs.xml": "8c9c0403ab0f6457841c605f08a3340c",
".idea/other.xml": "d185ab668225244eb8b888074199c41f",
".idea/workspace.xml": "bdb4f08f71f502daceb7f82aa1b0be9b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
