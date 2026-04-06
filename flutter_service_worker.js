'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "83317421b47d5bb6b2556bdf634eff08",
".git/config": "c8d68913f2c64aabed2ade255f0a8fcb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c4ec1470d8812e3bb8c4d21370466f54",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "075b161709fc3e32274b35d9c77fab52",
".git/logs/refs/heads/main": "c8dc624d1f25fac4379091ec739ebbfe",
".git/logs/refs/remotes/origin/main": "cca6c1efb007b041fdd65acd460aa95f",
".git/objects/01/05adcc322c395abdc0c5f4d9a11fb4e18856c7": "004ed8848676fe58b8ec13f320cd3640",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/49bbdb805cfb36b6facfad5879421ff1915bde": "88c9dc35ef4eba46fe6cb67c9ff1b72a",
".git/objects/05/c1185a66ac88b4e1ef4191580ec89700da2810": "326be43da8f03b4300ad7c52a076d1cb",
".git/objects/05/d5fcd1b4fff9f32dfec84994957a98e4807011": "5516d0d0c67957d9836546c2dfa47fed",
".git/objects/07/5dc8e44aea46de0d5f70bab036b6ffc760be12": "bc8a99c4de510452b95894e3ca3482db",
".git/objects/09/cf6f0dd59164513871c94057aa4b87234246ac": "8d2c9ccc4ba7cc7b371520114994179d",
".git/objects/0b/097d57804dc92c4ab0c06debda0f5e0a258e53": "1d889d315f081c7dd53c867306dc4951",
".git/objects/0b/de56331a0138e03c42571e0240d8fe6861f651": "8364ea6387139a541cd3492fad07472f",
".git/objects/0c/bd1f4e9e6581a5a690439affde4cb99b52037f": "00f964bf6426eb7389bd7ffd8fa261c5",
".git/objects/0d/eda5c5fb8211561b24dca5209466b77ea85697": "af53096af1a16f522a86a6af0ff09566",
".git/objects/13/1697612e36b7f23fb3fa6f623f4f5298244a97": "89ba84561ee48bafff144ad6d67c9214",
".git/objects/15/292fdb44e6bf91d36e189102c284deb5fe06a5": "97540002b46dd27ae4682a44975325b8",
".git/objects/15/42093d8627d643619d06813b033fda0202c279": "d8daf3624589fc0837a9ddb26c4080fa",
".git/objects/15/98a666db62ed10f1793b218e9f9b0a328346c3": "d9dd90f52614164aa0a37fab2cb2bbbf",
".git/objects/16/2756e00a892e5594734ff4cd9cb10fdc1ea597": "a8688e49fc50df04a95db65a4c9b1608",
".git/objects/16/3563398e3793dfb270feb60de0c045e1310c0c": "da0ca8454f78cd22c45184a90637468d",
".git/objects/18/cb8268f1dcc27b9ebc3517cd67fa7dfd2220f4": "c4f365d4c8acdb390197a76d2b78084d",
".git/objects/1c/13f309384cad43c821d39f0ebe9561cf5630c8": "6ea52d5a0dd3240b8d9f62b1cf3d405b",
".git/objects/1d/c307ec5333da54f3766771faf2da73b71b77e2": "2e5774980558b63f0ae5dd6b9a09f923",
".git/objects/1e/0a5a4fabc7f6d5198253dba3d0d8a0bc87e338": "0ccbf1bf74eb139dfeb97719ea105466",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/23/82f4361d93a6b94210b1b3d3cd4b2e32bb36c4": "70d915fbe840b99d6b91d55084399fa7",
".git/objects/24/2e58dc85aa6bc730e8cb24abcfa52d64d9dbea": "366d8829ef89de115bb41edb0fc23d28",
".git/objects/25/07efb28de782dff79cf6283c135269796ebc08": "5c323a7337f90bbdb2b7030b8f1dc3fb",
".git/objects/25/84d78cd4effce7c6fb6a3e9e723e249db1b6f5": "1bcdf1f3b33341f3aa86bc65bd710be5",
".git/objects/29/01cc7c0be11b98414bbe0166dfb4acc03f3ad6": "9bcaad9b15e303cde223a046161d2db4",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2b/01b404b4fc731f1aef96353a34be33a93a9c4d": "e03f5303b8438d3bc2799b67064a870a",
".git/objects/2c/3c585e4686afd52f866fe0bd0294e7daed6894": "c17feebf8fdd2efa7171520448cd4133",
".git/objects/2c/8d8bed34fd006c4085fbd118205a51561d88d9": "1602d063e70d477ce8e88fc8eeb65c3f",
".git/objects/2e/4dc3ca504a5922243b66bedb5dba7769215df5": "32490eb9352f417b4badded5446feaa9",
".git/objects/2e/ef60495df71505609ba15e63e9140744970fca": "8d1089ab8e7af6c9bd66a032b9b64d8f",
".git/objects/2f/eb947572ae6f493c23a7bd8db4960e7df28cbe": "ecbf640dca93bdfac337a7b2521fd21d",
".git/objects/30/2473547ac15715d60149ddbd766b0f5f14c5c3": "f3eeb01e50c1a7450772570ae056041a",
".git/objects/33/4412cd88294a00a4145fb5ae7135d5093989e8": "0849ce9dd97f41355801fc92147798ef",
".git/objects/33/44d12db4eb95850bdccd7bb82c65baa7269855": "7b0f6d834f7a9d1189dffa7d8cea3daa",
".git/objects/33/54ddae76067dc09ca11ce9072f848820da1de7": "d23275c69e65b4fde65c11a7a798d6eb",
".git/objects/36/e336888e8111e38440f93053db8ef8117cbc2c": "0aa804ec62ff8d96e939dc5933fdbb21",
".git/objects/37/e584da562737d134d7b0a709ed8db3a72bd626": "cda1e7ed7aee1d7d77313087cf3dd80a",
".git/objects/39/ececd6197ed61dd81367f9a532bd300cde2623": "20696894462bc1a9ed6827e02fb8bb5a",
".git/objects/3a/8404968f317e683b7ed3efa5055477ed52f449": "5dc4f0345374000e6217a41858aa179a",
".git/objects/3b/9e93c082547159321e2be790aced6745679762": "a422f0336fcb2183571ae36e1237e23e",
".git/objects/3c/7870e61d2231baa18c47fb738add7708713c28": "8de4c1afe922a7f7ae2f0d672d453726",
".git/objects/3e/5c0418ac988d9b48718859aaa4d4a116268089": "14952df1affe0cbe28247e36cc15bcef",
".git/objects/3f/4864c0075301ee54fc8904467b84a7801fb77d": "9b18c906ad71639bfffc9b3c1401a10d",
".git/objects/3f/e03798358e5ddd92ad71ad3fa26b19489fad0b": "f8d6d9948bacb4048fcfd7c2ccfdc2b7",
".git/objects/42/b3bffa4293090d57df08ded0758af38ea762d3": "39f40930f3b8dff07432a487ae97341c",
".git/objects/43/33dc2392ee9bf70ce069a9475aa749d242dc49": "04b2db31adaee533434449e7982cc8ae",
".git/objects/43/71a199f436c54618a65f6ea6966475be951b9c": "04289e7d83cbc517157b8ca38ee3541a",
".git/objects/44/4f17bf867842f8c23ec7d6d25f2317a1f449b9": "b31d03329406706e6b1c0b041a0146ea",
".git/objects/44/6027bd8a1fdbc5c97d3fb9068d2b1da9d61216": "e9fa6d4a1ff73596ea7684e07993f088",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/ad2a2ab36861edf400fc8ce0827ee0ec728042": "1aa56abdc82f94b1d78931b599455010",
".git/objects/48/04ea4a6c11506409508f3ab6db319cc68e94ae": "afa9b6b1f1b3bf4d8b344d9e4e08893e",
".git/objects/4a/41d504da56f2e473c58ea725ceb0c22080a900": "a1c53929ed521d3b1bea0f5c234c404d",
".git/objects/4d/0d7913ddfb65137aa8279edfaef500a8793dee": "d087a4549fe9cdfc1375df563472846a",
".git/objects/4d/68f0e781a7820c32de2fc84e2e8596a40e1859": "4c4caa1ecd316d2be8ff337a79ea0949",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4e/fdc539ed49469a183f03162c6413223e5d3eb1": "4a624e3a2816580c83eb43ad2cbcc010",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/50/152c7ed0c9e44910c76f7e970512c0a72ce44d": "bad74d3ee64e9d0b08d15329b9a1b028",
".git/objects/51/d96a020904e54972bee66f32342f0761173ed7": "e1b70d6919b9f7eb2145280113e62ae6",
".git/objects/52/a713d06d0f7ca854bb71d36942ede6d251edb8": "bf6616815588efc7ea9c656b2cf3b6a5",
".git/objects/54/2d411c0a26a857295108b863be666f78563ab9": "aa2cf43557925922d55cad53d42cc4ad",
".git/objects/54/d28ea92aa77fb1ea8dca5fac6b27025d788391": "a781dea00b15f96c14437507057ac063",
".git/objects/54/d2ae49c5ef01702728563578883d996a5ef4fa": "501c72a9052e26c39aff1997211f8b06",
".git/objects/57/443f956d55b9574f5dae9521c21d2f0bb0ea04": "dba7f1fa631221c0388c79122015b447",
".git/objects/58/43a99cc773dd65ee1a5e474955703ef6459d3f": "aa4012638772a800b9fac7d838583b67",
".git/objects/58/a83e8fe0b2e99c42588c2bf6f84d5373d20c46": "b98de82e77f2571d4872695e307bd320",
".git/objects/5a/ea9380ab9d4ff8e92bd41fa95b4f27949082ca": "e48704df51b4f7b28bd1e5c11d0362f1",
".git/objects/5b/8f5d4456581f6ba2fc4159e63ab30abe528366": "ecf2a3e19dc82cd38373291963fdd24b",
".git/objects/5c/0c80d7f98d5e15aa16ae7d96bb981aba72a5fb": "dbd29cadf4d06e1d90236fe165ba09b3",
".git/objects/5c/62cec7fded250fa4dc128afa26d0c0cc50ceb7": "b62b063daed06707e5a8c169c3f825af",
".git/objects/5f/54a1718c51e6b151d2306f499ccd9927fe5a5f": "c14673c27afe3b14b6c28e6a70663258",
".git/objects/5f/5d1570aa53878ad54325a9acb3e51193d7427c": "f7ce60bb34c082bf7e9920132e279941",
".git/objects/5f/8d81503d1733e273a5263f5e3d3324a54969cd": "f0f88b1dafec0b7df07977ff9981060c",
".git/objects/62/c357330f984ceb72461e395a8fb8efe198e47d": "041860bd7771582491baa003a30e1e7b",
".git/objects/64/5d56d79a7cc8a5b24d0c02034ece1ef13bff20": "714ee9a441f603b2a346554688095d12",
".git/objects/66/fc6ce38ac489fb7c4963b8bc203a1f40c22a08": "dfec7f564f6020b9c41542466e7c16be",
".git/objects/68/0843125e81715e3c2cc86020562b9066da3cf7": "5832be5b2140f0ec8218fafd4543fb75",
".git/objects/69/3422de563f05b6902045afc70d3ecd42794b4b": "d4ec5d4fe220280f5e31b94c5547d043",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6a/36bdbfaad1e055f332bedba0ce28684905db75": "6294759aa84ca473e74573c98b0e1cba",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/ceee91e0486943eb7fd45d173375f94e9e466c": "f8ce6bb10073d386dd43219b6248e885",
".git/objects/70/33ed5aca7ea6e5a344e1264fa75c43ea2529bb": "4cf454b446f0011fe5799c6190aaec37",
".git/objects/70/4d96dc0025173112db2be2b4aa01ecfdf1d6ec": "8c369383ef6f4d09df7389b1c553c77b",
".git/objects/71/28eb5f7be9e23cdb05da383304a86f69314175": "5c4aa9c2b245fe78d42b5375be59c5c5",
".git/objects/72/0fcdef76ebc95891f93e0b62bf48f7bba5d507": "4c5aabfb0688a71168f2d98d1a029254",
".git/objects/73/4e3a18a1d566bf3790ad89d1a25d65ff06606b": "2cfe9478a566f9baf00d266aa576768a",
".git/objects/73/e74065820dd825bb18f5dd56ce9ef32a15991d": "247fe271282a7170c8be8c30ca933841",
".git/objects/74/aaffaf3e10c8eada45290286dd0e6245eff1a7": "2bdb5e63d53449a0eae3442e49a80c27",
".git/objects/74/f50e50d040d06a747724b676b89610dac4d77b": "b843bb56d218559263d00782fcb68555",
".git/objects/78/e266b6ab64a01e5099142d568449c799706b7e": "f96171a18aa42947874daf6de90a2dd5",
".git/objects/7a/02094ebd38e9dd6cbb7d8de58fc594b8e1eb36": "74edb3fecb49ca5d3d5d59bfa884133c",
".git/objects/7a/3904cda0ddf33820eea2408d359eefa9451750": "21e524f4aa0330d4d4f17591e3bfabff",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7b/4abef6a41fe83347da8599c33cb981a1a133a8": "6dba07be8d7f8e2aada2d56b046405cd",
".git/objects/7c/056aaf0d8a63129417b86d9fa9f34fa849f4e0": "4605014a509f25f09766f3757ac0092e",
".git/objects/7c/1846a68b7f02f4d84c76399e93564efe716674": "6f130c440b4a3a9555702a15f5fdf78b",
".git/objects/7c/aaf73cd29cb4076e227c636bac16975f05492a": "88962a2b84e62d65b0ecd224f039b5e8",
".git/objects/7d/4bd2fe02aaec997ca5a0d67171aef08a47f774": "96093e5d7658f053da2fdc3617c9cac6",
".git/objects/7e/d46a6d270f66e2029e08d001a7bb16b1a05f97": "dfa268beef87ae5bab2bdf2297568128",
".git/objects/7f/d5a3677377a319cdcd3c30fbe8bc5c90b6676a": "b6cb536f3b0d087188fb70ecaf33f989",
".git/objects/82/67861e27ccb9fcef9481ebe2a73ef9d4bab060": "0fb78ae103290665f7cdac375b0ddc21",
".git/objects/82/ab12a862dd60c49496c53d30532becb78efd9b": "fab1b36251335700968d5cb45d91c248",
".git/objects/82/ac18179b32b826b5c21250733bcf4827a3dce6": "e856c72811519e63fd1d1d9b093a15cf",
".git/objects/83/51ccc097a89b873ce89c163c44cb0cd4cc8e0e": "ad6ed847e6bfe995234aafab8abdff2e",
".git/objects/86/84b47718e59a2d2ffd2a739d41ccb4493a9a19": "ab94d600096b823b152e0540469d2524",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/5d18502b584b5d4a7a93bbcca6af917eae1822": "a7df00170d4d228272af361314b35f29",
".git/objects/89/c724dfed64bfc546a71dcd797b7c79c990a83b": "8f02bd44e01a6bd0ed87faa3ffb41e26",
".git/objects/8a/993e12a249d08c2264b368d81118ccf47b539d": "780b8492b0cf2e53e605c8f18b6370c3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/aab84ff35c4eb99bbd706f98ae3a7c74a17ca2": "128b55d2ffae822be2fffd5c8dc68923",
".git/objects/8c/fb67b9362a7d153b9b13e3b3e293525ff0fe24": "9db774e9922a34c9df84ab89cfb7bdba",
".git/objects/8d/659dd462d6b115140eb241b22fba236df09a7f": "f39e62e73f11911afa5a23379bccdc57",
".git/objects/8f/6a50f8352ce6a3e67ae1e4461a25bdd2aadd3a": "e2df2645637799f49145df8092898855",
".git/objects/8f/ca5d4ca540f0099dafdf1e459897ede5bc8487": "ea618502ca622d203e00fbf14ca103de",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/91/b5e82bcbf6256e4057d0077c30c7ff5e1e284a": "63613929284632e4761e13f875dd9ab0",
".git/objects/91/ca9381367a9444ded011e311e6d855ed937340": "57cb0b9a544e76fc3f8fb23f07eb828a",
".git/objects/94/15b816cb70890167f0d2647df1fee04fc24c48": "81908213b17ec8c31649b1536cfca2ed",
".git/objects/95/a926a8ee9fbba6547ea5cc53e2c284f010a926": "712447423357644673437dadf9f13e38",
".git/objects/96/0a594a042a8414937be54c9bf32cf9f114ea42": "eb16a560d40875e65a5962dfe902a895",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/98/6c7d4ff8f3f518a3a1f54f894d70bf016c2392": "d59e347f3ad9b813d3a690bd55f03b58",
".git/objects/99/2486f26bb6a4f096d9c988ce5d3477f64e5f5c": "68f9f1a77177296fb4d3c39a56d7a5a3",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9d/20791a10b113031ff2e90c318de06b641d6733": "27d8c9d5ac628c2551b5fa4ab18633d9",
".git/objects/9d/9daec6a197ed5db1e2ae38d6e6889ddda0eeb7": "2382232b8d7d542756e567cf478ad0bc",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a1/e790dc82b7d7f2fda04cce6b9ab98a90eb8a5b": "272562bbad78bbd7fc07390408f9fd45",
".git/objects/a2/2ee70fec7e5b73c4047b54c385fd213bb47b5b": "572b330fbd47b10d61f005c3026d7033",
".git/objects/a5/a6df1ddaa9ed39aea45e07a1498adf66953f72": "c264c90af18444d566b83aa46497d92e",
".git/objects/a7/13ab4169d50cfb3ab1e9e616598d539eb858d6": "820488c02ab1c97d790c188815a5623f",
".git/objects/a8/ad80bc7b4ad10adcff1a676de66b0f307c7c94": "80c9b64236f244cb4e1b16059ea8c2a7",
".git/objects/aa/4c6900048bf6df07352fd61983b299b15d9153": "81ff2829afd6360e9239e76a9bab5b3f",
".git/objects/ae/ce8113fc7de85a3acc191abe0e0304b59f2b10": "13f53b3f4d79b689676fa19bb394db51",
".git/objects/af/94127ac19343e30b34cf1e7c98f480782484dc": "c893d909e51251152671e2212be13d21",
".git/objects/b1/5e3892869aceb8e648363d28e77fc1234dc01c": "072b20ecfa558603d65ff027d36598e7",
".git/objects/b3/277bee0bc6318192acda0e58416d4ccf6922da": "05d7063e292f9e9f91f360d249444f7e",
".git/objects/b3/b77c205d21cfb0772765f9bb03f578f714c083": "a2b4cebf52cda45b20bc0930712848b9",
".git/objects/b4/20a3a8b7f0d0010cabcb2628906672a01c8e3e": "9b264ffdb5d36ad4e082fd72daa32b69",
".git/objects/b4/4b66e69961d85b0e279c291cd1ebf2c8c897b1": "65bfc55c84cb25f5268ce4121cdc23c0",
".git/objects/b4/6c09241669e6b340a050e9abb79ed2091ac087": "27cf0ac356b5b2c7cf755c39097262f0",
".git/objects/b5/d5637dd438f2d11e327276c87914fb440d1de0": "0f33de507b06115fe473f6e96eb3e2eb",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/b9b6d281e62cd6ab012a554e93f22ee858cc6b": "7ddaa6715150b72c8fc5ce905beaec88",
".git/objects/b8/6fa77b0183361a768f5ac19897eb97dd24d143": "15b15fc771b028d2eafebabd0832d400",
".git/objects/b8/d33df9a9e6fccd9b4fe758eac21f2a05075522": "678a2070791a94cdb406a6c6416a5bb5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/9ba14889a8e63ed3d309950b5f8cd8c9ccacfc": "cc7e33d82c2b82c1d8eab27f04575ffc",
".git/objects/ba/ca67f95de3e322034a19749911451f063bdbd2": "1ebe8cfd24cb23cdad50aaa7f70764a8",
".git/objects/be/e90fdb07154594e3cd1b582d02edcf1b9122d7": "cad0803f85b5c1a84b11ec2caf6d039c",
".git/objects/bf/e366cf7fa44113fc239fd02711ff185f9558aa": "4698e1cb5d15f8a44c41c37442f030fe",
".git/objects/c0/02ee444cbe0e44dbed708cad7b541168be297d": "9256f327a3c8bd454f481af531938673",
".git/objects/c2/204529015ed6ae7e220342c85936466998c613": "ca4d2392e3d1c1bca7b98f227d325ce2",
".git/objects/c2/550e06a736f7372bac2d0713651fcae5d5fcb2": "38b8ff83969b1923b1132c79dcdf1502",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c4/64f9e5d971323e805eae72eb30eea884e88fc0": "96bff18530587293638e7280fbcc5661",
".git/objects/c6/72e0bd21d4a64063c5bf0259b33ea61beade3a": "652bcfcd2a0bade6b928f9efee76843a",
".git/objects/c8/394f527f566c6f083d8505f56fe47fe627775a": "fe755cbcc8072915638dc31e872e118f",
".git/objects/c8/651f4108928eecfff25509bd96b603c70d5897": "6dce7edae27c2fc2d3f6bcc342ddfe75",
".git/objects/c8/a86ca86238ad3ec8d30962e1c24aff9a1ef12b": "75b8570b8f7b77bdd42e48e09c391767",
".git/objects/c9/e919fe09f961c9787d6f3b36cda32a6b513537": "039ea62285a841700a879c01f23cc343",
".git/objects/ca/296bcee3c2675c202614877f742be6d5fa5cf5": "df9771f45e2c06f69716beaac72512f9",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/ca/9e123a9e5b485de394fb2938e9381e6d54aed3": "f7178d4b74a904376f26568a1c27a1c6",
".git/objects/cb/1fb0249def01c86e289d0f8a14f0bc9de74218": "ef4b148670ecf1ea439bfb2e19186129",
".git/objects/cb/55bde3f6e01ae9052f5373ab1952c5c5e83450": "cd895fc6ce3b5a5fe32f72335685a732",
".git/objects/cd/07ed420e8a56becbcb2690df247a969a087ac4": "1a9a2fde3bec7f51709a762fecf2adbb",
".git/objects/cd/5f5c335ae80261cf218a390c044ea65edf09e9": "c246cb26161c1225cd3228866906171f",
".git/objects/ce/df93291076accb93890e59f2d676e8b38f26bc": "fa3768a7525f42f1f897abcbffcbdb76",
".git/objects/cf/f0e84d3c72bb2215a49386bf40febf936041f2": "e5089be39e90a3b75f7309a819671b8e",
".git/objects/d2/2338834a7ee5e4ce251dd5f96a0ede0b8c4533": "8edf14fd94a0a370c2dcf55211da35e1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/f396c441f7407aea84580f589b588600d64063": "dbc4f990308f0948b035aa9d376d3ec4",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/491038dde9cd0957c5a7ffc6904503b854b781": "fe09b2cf0aee21a9b1e974f2e59859a7",
".git/objects/db/b8f7e858a3ac335ca40a57bb17fe7519e91680": "683059a1f01e3fdec7afe16ec9235499",
".git/objects/dc/5e7a886290420ed946d723fe2a373158797976": "ec8e531d8705eddff045ad2e72a7b7c0",
".git/objects/df/5cc74a95ca4d3b058cf41db56ae76f82014f70": "d046852518b404c78bb6ae929d6c3708",
".git/objects/e1/94e6c6b11a91bff43f6ad8648c21393d965ae3": "463fde38f2a51718a56b7896dc64d11c",
".git/objects/e1/aec5de778749d72c38a66e83917247a1a6820a": "d1aa1076e6936416cdfe201364dca723",
".git/objects/e2/eac78b803a9b09f6dbfe4b87d554de578a1707": "9a93c814c14a73e04bfd1aef658a55fe",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e4/7202041d74800b25c2701ff72a5867aa1eb7c0": "0309b8666fcdc5c3644f7b222ff30cfc",
".git/objects/e4/92475b2df18af125e4922a4444b881cb560e18": "bb6c0b75fee2f06a61ca86494d54944b",
".git/objects/e4/edd133503c3d88dd191ef683b6ba0376764f06": "b348cf4606cf6dadf02218b0dea82623",
".git/objects/e6/807e3521d9dc53be6835e587d3325b4584590d": "d02f495e53a2f50fbbe2fc2074c8c145",
".git/objects/e6/e379d822f326d8863be8b306edffbd4db7b9c2": "e34f217fed08675e8ed4ea97c6b6841e",
".git/objects/e9/4ae26efd1bffb8d65f66bde4ff26d232e4dbae": "bf05fdc62c6df82551041b07160914bc",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/961931dd93d3a8a9b289a72c5cfd3615b2f371": "19787dcc81017285b8d7e8afd1b81231",
".git/objects/e9/d6bb112c34c2ceb8b590c5448cc6e9dfff876f": "db69767a1b795ef65212ce1b94cc6fd4",
".git/objects/e9/ea5a84a642f571f561b42c687a5c0ee4777ae0": "7d9ad01b1e14c8d1439bdb62fae8957f",
".git/objects/ea/3dd11f0b8118d78785e936a90483a9d19ef9fd": "721a238bb53e262887408f99e162b6ba",
".git/objects/ea/a89621fba9b86d0f4465101f9942b1fc0a38b9": "22a48a8375a606476288161cbbdedab3",
".git/objects/eb/06ce6bb766c151716fe2a39188537b6bcd67a4": "f4d7357172c3908faba8ebf223626423",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ef/ade8fd103d0ee01579ceadb02ee4ab50ca41a9": "2da3d48b980d03a13c3f829edc0ef39d",
".git/objects/f1/f9f959f14457417a1cf9ac559752f3dfbb903d": "47123a9f881bcca4f99a9c0dec64cdfd",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/174b849d2473034f3c711f49cd3f706ff1d90a": "62ccad336082277d3a6134fc5fc51321",
".git/objects/f2/3c048e011cec8bdd516a2b4ad25a0734aebbf5": "e6be7d33c75bcaf63b5eee7b0a2d382e",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/bdb10c7acb37e1bc25cf1ac0fe1aa71de64be2": "3a014c13ab96205e809485ec5d502216",
".git/objects/f7/3249572d483f1915868c3140f62618ffd81ff6": "ae9e69285c7d8f1afcaf034301db3757",
".git/objects/f8/14fd9a80a87d3193d4381397be86fec75e602a": "b9e8037e9241cc723501971f0f10cd82",
".git/objects/f8/620a6a733ccd6621253e988677ac86143b3d0a": "3325185949c6a18630acc6ec99e22f16",
".git/objects/f8/d4283dec7ff7c685b973f8d5bf26b751e58dc1": "1f5bf2aeac2c1dfb56b35d8d1cee1d65",
".git/objects/f9/1267c4114de8068869f2fc539c7c34a2b4bd7f": "c80eeeb0a32fdb64511afcf8fd20a899",
".git/objects/f9/33800a6dddfb8291e326ec8afafb9763e6dd2b": "2356bc60897202b856d9f1fc1507af75",
".git/objects/fb/83fe8b891a8617ddc4c8944e0d4c39eb67a4b8": "c5f8ee95f37e189706e472d1c117319d",
".git/objects/fb/c4b5e8f87aa81cb45e7b9882d999a5128adc51": "d57b164faab799fb87773330d5d5b343",
".git/objects/fc/22e3e0638e249ea1c04d1724be19a5d4b4a0d1": "801b01de9fb793f3caba5cd580e116ec",
".git/objects/fd/20fba42d093fea6dda1b7ae331a8bede00a64d": "0e2738228d8528607feda660ec265c61",
".git/objects/fd/d439f8a6b86c51de2b69454d5569bfe549648c": "a4a6b020efbd81baff3a5d62183d1d39",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fe/6cec13aba9dbbb89553b7c792c79f424978fa0": "b84d67916255c6edcebd13ad6db59e6d",
".git/objects/ff/6abd492afd09201f7fab7552f1109544fe91f8": "2bc4405a70b5901f9a4684a90440a45d",
".git/objects/ff/72deca56f2abac8b6ab273555ee6ad54667544": "9643152a0ee424d6e4a1cadc3ba6ee44",
".git/refs/heads/main": "fea7882bb6943bbe583a73347e496974",
".git/refs/remotes/origin/main": "fea7882bb6943bbe583a73347e496974",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "98e7d5a41b9c45fff777a44292d4c9e8",
"assets/NOTICES": "96a35f6fcff743e80d159dd2bbc7f7d8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "fcf31e7a5f1d398914f0c0ac1a60ab9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2e4414063d38ad9b99352a8309bcdb46",
"/": "2e4414063d38ad9b99352a8309bcdb46",
"main.dart.js": "cf2dfa99a8af8634d5beffecc3984918",
"manifest.json": "cc536acf55aacf6cd035b17cdff0a273",
"version.json": "b444a71335828140906f56be2a380bbf"};
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
