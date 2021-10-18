# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 2.0.0 (2021-10-18)


### ⚠ BREAKING CHANGES

* **routes:** You now need to import the express router like this: `import h5pAjaxExpressRouter from 'h5p-nodejs-library/build/src/adapters/H5PAjaxRouter/H5PAjaxExpressRouter';`
* **editor and player:** The ILibraryStorage and IContentStorage interfaces have new methods that are needed for complete library management functionality. 
There are new language strings.
The configuration was extended to cater for addon configuration.
There is a new REST endpoint adapter for Express for library administration functionality. Implementation should either add the Express router (and protect it from unauthorized access!) or offer their own REST endpoint.
The example now includes React components that speak with the library administration REST endpoint. Implementations can use or extend the example components.
Updating content was broken and is now fixed.
* the IContentStorage and ILibraryStorage interfaces were extended with the `getFileStats` method, which returns size and creation time information about files. The file system storage classes and Mongo/S3 storage class were extended to remain compatible.

Furthermore, there was a lot of refactoring to improve typing and extensibility.
* **mimetypes:** type script usability and better request return values (#503)
* Consolidated and improved all public interfaces.
* **metadata:** Version 2.0.0 release in package.json
* **dependencies:** Updated all dependencies (#407)
* **ajax responses:** ILibraryStorage.getFileStream is now async!

* test: Added more AJAX endpoint tests

* test(express adapter): Added test for content type endpoint

* tests(AJAX endpoint): Added more tests for AJAX endpoint

* tests(ajax endpoint): Added test for getting library data and fixed related issues where current implementation doesn't conform to the H5P standard

* tests(ajax endpoints): Added tests for getting translations and validation errors when uploading packages

* refactor: Cleanup and added documentation

* docs: Added error handling to documentation

* feat(error reporting): Errors reported to the client now follow the H5P standard

* fix(error reporting): Corrected replacements

* refactor(example): Removed ineffective string interpolation

* docs: Corrected typos
* **editor:** URLs hardcoded into data structures are now resolved correctly (#202)
* **temporary-files:** Add temporary file manager (#87) (#189)
* **types:** Make naming and interface usage more consistent (closes #119) (#187)
* **config:** move URLConfig to EditorConfig
* **H5PEditor:** Moved user from constructor of H5PEditor to method calls (#158) (#176)

### Features

* add initial configuration to start new relic monitoring when environment variables are present ([66384a4](https://github.com/Lumieducation/H5P-Nodejs-library/commit/66384a448db3924d7b1347a680a4ac06dfbb5b94))
* add/modify translations ([dba85ff](https://github.com/Lumieducation/H5P-Nodejs-library/commit/dba85ff2193b61e33f244a0fb3ea52ac6210427e))
* add/modify translations ([cd5b082](https://github.com/Lumieducation/H5P-Nodejs-library/commit/cd5b082a95a238dee32ffefc5a8815bb9ae73a24))
* add/modify translations ([a320f28](https://github.com/Lumieducation/H5P-Nodejs-library/commit/a320f28d184495dc83bf8338b8b4e7d009f11f64))
* add/modify translations ([c4aa198](https://github.com/Lumieducation/H5P-Nodejs-library/commit/c4aa19872ec12fc41114d09cc21a12b19105167d))
* add/modify translations ([35e8207](https://github.com/Lumieducation/H5P-Nodejs-library/commit/35e8207b5c1e0ad5a11a7bd0a7b3dc65791a9cea))
* add/modify translations ([d7f3946](https://github.com/Lumieducation/H5P-Nodejs-library/commit/d7f39461b13c87a0c2553ba9bcb2ad6e6a4ed2bd))
* add/modify translations ([57b5952](https://github.com/Lumieducation/H5P-Nodejs-library/commit/57b5952f33ffba19c23729d911bb3198408f4c52))
* **ajax endpoint:** Added POST filter endpoint (package uploads now work) ([#379](https://github.com/Lumieducation/H5P-Nodejs-library/issues/379)) ([e589788](https://github.com/Lumieducation/H5P-Nodejs-library/commit/e589788966db78e886389d15d9c3b7c2fe54530f))
* **ajax responses:** Improved localization handling, error reporting and success messages ([#363](https://github.com/Lumieducation/H5P-Nodejs-library/issues/363)) ([340945d](https://github.com/Lumieducation/H5P-Nodejs-library/commit/340945dcc60d313d151d361fed6b7d9a769d2495))
* **copypaste:** Support copy and paste ([#254](https://github.com/Lumieducation/H5P-Nodejs-library/issues/254)) ([3598163](https://github.com/Lumieducation/H5P-Nodejs-library/commit/3598163c7103e940fc84ca4136e073e46a4ba0f7))
* **core:** upload audio events ([43fc284](https://github.com/Lumieducation/H5P-Nodejs-library/commit/43fc2840e0554716174ebd481e672e177bdc008c))
* **editor and player:** addons and library management ([3e61915](https://github.com/Lumieducation/H5P-Nodejs-library/commit/3e619155e9fbe58651e00850772e5958aef537b4))
* **editor:** URLs hardcoded into data structures are now resolved correctly ([#202](https://github.com/Lumieducation/H5P-Nodejs-library/issues/202)) ([5a4bcdd](https://github.com/Lumieducation/H5P-Nodejs-library/commit/5a4bcdd6a509682cc3cfa16bd681a4d0b92f2ad0))
* **example:** add link to example player to download packages ([#177](https://github.com/Lumieducation/H5P-Nodejs-library/issues/177)) ([3755c56](https://github.com/Lumieducation/H5P-Nodejs-library/commit/3755c561323ca9ff3118f4729f345589325d6c22))
* **exports:** the package now exports all classes and interfaces needed to write an implementation as types. ([#280](https://github.com/Lumieducation/H5P-Nodejs-library/issues/280)) ([89b3764](https://github.com/Lumieducation/H5P-Nodejs-library/commit/89b37646dc95e4a6b6964256082488691f5170ba))
* **h5pcore:** update h5p-core to v1.24 ([#219](https://github.com/Lumieducation/H5P-Nodejs-library/issues/219)) ([5d3db0f](https://github.com/Lumieducation/H5P-Nodejs-library/commit/5d3db0f4eb4ff32fd7103f6a57726d20f61aadb3))
* hide original course presentation ([0eebaf0](https://github.com/Lumieducation/H5P-Nodejs-library/commit/0eebaf0719b830131fe7cc87235b53dbca0ec29a))
* **implementation:** add default fs-implementation (closes [#284](https://github.com/Lumieducation/H5P-Nodejs-library/issues/284)) ([#298](https://github.com/Lumieducation/H5P-Nodejs-library/issues/298)) ([e781b29](https://github.com/Lumieducation/H5P-Nodejs-library/commit/e781b29ea41e172c0ddabf5216dd129b3121f863))
* **interactive video:** seeking in videos works ([#647](https://github.com/Lumieducation/H5P-Nodejs-library/issues/647)) ([18fc0d2](https://github.com/Lumieducation/H5P-Nodejs-library/commit/18fc0d225bdf0cceeea6431bc1ca84b4b6b4f140))
* **libraries:** emit audio events ([1a4968f](https://github.com/Lumieducation/H5P-Nodejs-library/commit/1a4968f831e9d5907f7032a8fcb2adba1b160942))
* **library:** add ability to customize row/column count ([03ca90a](https://github.com/Lumieducation/H5P-Nodejs-library/commit/03ca90a317450d323ffe1f0610a5d36d33413b15))
* **library:** add audio element to DOM ([be2de91](https://github.com/Lumieducation/H5P-Nodejs-library/commit/be2de91476798fd8e38c2157fc022160dc6a996d))
* **library:** add option to lock sliding for course presentation ([6cd4a24](https://github.com/Lumieducation/H5P-Nodejs-library/commit/6cd4a242e648bb06bc6f6ae31608e62f91a3a804))
* **library:** amend xAPI for audio feature ([3c134bd](https://github.com/Lumieducation/H5P-Nodejs-library/commit/3c134bddcddf191da9064aae3cc0c51197ecd11c))
* **library:** only track scores when check is clicked ([bf585cc](https://github.com/Lumieducation/H5P-Nodejs-library/commit/bf585cc2d0522f41056f188e4c586bdec440831a))
* **library:** translations ([948e575](https://github.com/Lumieducation/H5P-Nodejs-library/commit/948e57533734f6c5e5d719250ad1f9161329a97b))
* **localization:** added localization of editor ([#513](https://github.com/Lumieducation/H5P-Nodejs-library/issues/513)) ([0713317](https://github.com/Lumieducation/H5P-Nodejs-library/commit/071331703f45abe0766739f672445a56cffd0444))
* **log:** Add logging module (closes [#153](https://github.com/Lumieducation/H5P-Nodejs-library/issues/153)) ([#173](https://github.com/Lumieducation/H5P-Nodejs-library/issues/173)) ([7ce2548](https://github.com/Lumieducation/H5P-Nodejs-library/commit/7ce2548837bf0e3a1ae58c50e8627e40b161b8a9))
* **metadata:** Version 2.0.0 release in package.json ([36e163f](https://github.com/Lumieducation/H5P-Nodejs-library/commit/36e163f5a9cba5dc3030d1db9e60cf448bc727a5))
* **mimetypes:** type script usability and better request return values ([#503](https://github.com/Lumieducation/H5P-Nodejs-library/issues/503)) ([f30a49f](https://github.com/Lumieducation/H5P-Nodejs-library/commit/f30a49f0f0635d6c5547092f581f572436d42018))
* Release 2.0.0 ([be2af45](https://github.com/Lumieducation/H5P-Nodejs-library/commit/be2af45cbd13e2299a539875350d318a68561072))
* **saving:** implement content scanner ([#222](https://github.com/Lumieducation/H5P-Nodejs-library/issues/222)) ([c3c59c9](https://github.com/Lumieducation/H5P-Nodejs-library/commit/c3c59c9e5ccdfc2ae631c8ab3c2c0cc10184cec7))
* **saving:** implement saving with temporary content files ([#229](https://github.com/Lumieducation/H5P-Nodejs-library/issues/229)) ([1d6903d](https://github.com/Lumieducation/H5P-Nodejs-library/commit/1d6903d06b2d2f845d44c9c6a2a78ba70854b552))
* **storage:** added S3 temporary file storage ([#491](https://github.com/Lumieducation/H5P-Nodejs-library/issues/491)) ([26713bc](https://github.com/Lumieducation/H5P-Nodejs-library/commit/26713bc0eaf764d45cfbb2321752bd6e2359e0d5))
* **storage:** direct access to content S3 storage in player ([#496](https://github.com/Lumieducation/H5P-Nodejs-library/issues/496)) ([2d07b74](https://github.com/Lumieducation/H5P-Nodejs-library/commit/2d07b74062e1c73729925bf45e6304cc81c3ef16))
* **storage:** MongoDB and S3 content storage ([#481](https://github.com/Lumieducation/H5P-Nodejs-library/issues/481)) ([b246cec](https://github.com/Lumieducation/H5P-Nodejs-library/commit/b246cecc79dcd8c9cf15d821f906be55e657eb29))
* type script usability and better request return values ([a91508c](https://github.com/Lumieducation/H5P-Nodejs-library/commit/a91508cfe3e7dd6d77d5a69c0ae38508e9aad91f))
* **types:** add types to released module ([#242](https://github.com/Lumieducation/H5P-Nodejs-library/issues/242)) ([75bb8ce](https://github.com/Lumieducation/H5P-Nodejs-library/commit/75bb8cea3d67ef88c58ce4431c2dfdc8f3ece508))
* update libraries ([697bf45](https://github.com/Lumieducation/H5P-Nodejs-library/commit/697bf457c58c2ec785d5a1b25d8ddbe2fdf343bf))


### Bug Fixes

* 'Malformed request' error (H5P-94) ([2c41d6f](https://github.com/Lumieducation/H5P-Nodejs-library/commit/2c41d6fe0a0aa08c8720cde2c77542da99930b28))
* activity upload failures ([6d65458](https://github.com/Lumieducation/H5P-Nodejs-library/commit/6d654588789794cd4a3269db4bc82d92e67a0b36))
* **alert:** Chrome alerts fail to display ([90a79f6](https://github.com/Lumieducation/H5P-Nodejs-library/commit/90a79f621605a9b27505db888a5911be267c9a03))
* **alert:** H5P core Chrome alerts fail to display ([66c9e55](https://github.com/Lumieducation/H5P-Nodejs-library/commit/66c9e5592911b61ef547c7b8a414cf4eab761cd5))
* **CI:** coverage generation is only run once ([#303](https://github.com/Lumieducation/H5P-Nodejs-library/issues/303)) ([6facfa8](https://github.com/Lumieducation/H5P-Nodejs-library/commit/6facfa89b9ce8e2eefa4bf31fcbdd3bfca48bc0a))
* CKEditor doesn't load ([1bd6678](https://github.com/Lumieducation/H5P-Nodejs-library/commit/1bd6678e8c24010abc3fe70a2a10a67484ef907c))
* **ContentTypeCache:** localContentType is converted to HubContentType (fixes [#308](https://github.com/Lumieducation/H5P-Nodejs-library/issues/308)) ([#313](https://github.com/Lumieducation/H5P-Nodejs-library/issues/313)) ([f37052e](https://github.com/Lumieducation/H5P-Nodejs-library/commit/f37052ec6624247c2a6b0bdb3b07ea94dc509331))
* **deps:** move dev&test deps to devDeps & remove old deps ([#224](https://github.com/Lumieducation/H5P-Nodejs-library/issues/224)) ([73ecc27](https://github.com/Lumieducation/H5P-Nodejs-library/commit/73ecc271a54b6fb96fadc7992c7f635c3cecf657))
* **deps:** update dependency axios to ^0.20.0 ([53cda92](https://github.com/Lumieducation/H5P-Nodejs-library/commit/53cda92adfe26c92b2282b7924d088efa063b4b1))
* **deps:** update dependency fs-extra to v9 ([#396](https://github.com/Lumieducation/H5P-Nodejs-library/issues/396)) ([f27db81](https://github.com/Lumieducation/H5P-Nodejs-library/commit/f27db81a9f55d5b92fb107fe525a43f37fed624f))
* **deps:** update dependency mkdirp to v1 ([#348](https://github.com/Lumieducation/H5P-Nodejs-library/issues/348)) ([8069251](https://github.com/Lumieducation/H5P-Nodejs-library/commit/80692519a0d1f2c3f30d3758c200f3bc187b1522))
* **deps:** update dependency puppeteer to v2 ([#198](https://github.com/Lumieducation/H5P-Nodejs-library/issues/198)) ([9de0eb7](https://github.com/Lumieducation/H5P-Nodejs-library/commit/9de0eb74958e1ab8df7718675fe21ff4b1bc906f))
* **deps:** update dependency tmp-promise to v3 ([#497](https://github.com/Lumieducation/H5P-Nodejs-library/issues/497)) ([c5c8ae2](https://github.com/Lumieducation/H5P-Nodejs-library/commit/c5c8ae2c184f511afe758e5a4672f68f006a50b7))
* **editor core:** updated editor core to v1.24.1 ([#562](https://github.com/Lumieducation/H5P-Nodejs-library/issues/562)) ([b9eaffe](https://github.com/Lumieducation/H5P-Nodejs-library/commit/b9eaffe6065e58cdbcd83db57a7450c3c6bc4c47)), closes [#490](https://github.com/Lumieducation/H5P-Nodejs-library/issues/490)
* **editor:** files with very long filenames now shortened ([68b265e](https://github.com/Lumieducation/H5P-Nodejs-library/commit/68b265e67513934fdbdeb150cd034717a28dbf40))
* **editor:** improved stability when saving content ([#569](https://github.com/Lumieducation/H5P-Nodejs-library/issues/569)) ([a8bd394](https://github.com/Lumieducation/H5P-Nodejs-library/commit/a8bd394787a6906218726bbfa98e23f336e05123))
* **editor:** saving of course presentation sample from Hub works ([#733](https://github.com/Lumieducation/H5P-Nodejs-library/issues/733)) ([5bad62d](https://github.com/Lumieducation/H5P-Nodejs-library/commit/5bad62d1be24f1239e8ca57d32b5d87ca039d8f4))
* **example:** improved package validation ([#449](https://github.com/Lumieducation/H5P-Nodejs-library/issues/449)) ([57ea24e](https://github.com/Lumieducation/H5P-Nodejs-library/commit/57ea24ec4fc1d45b34fa8df8ca5ae362d6a37054))
* **example:** increased upload limit ([#447](https://github.com/Lumieducation/H5P-Nodejs-library/issues/447)) ([dfdf756](https://github.com/Lumieducation/H5P-Nodejs-library/commit/dfdf756aa314e1025bd4942b1821869d08a2ebe7))
* **Express adapter:** Added documentation on new optional configuration options ([6fe0ecc](https://github.com/Lumieducation/H5P-Nodejs-library/commit/6fe0ecc2c31144b25833964efd92ffe1e279a38d))
* **express:** removed types with express dependency from export ([#702](https://github.com/Lumieducation/H5P-Nodejs-library/issues/702)) ([0ad0ba3](https://github.com/Lumieducation/H5P-Nodejs-library/commit/0ad0ba309ce0d89e166e776c30d11fe8d9b7f05b))
* **file uploads:** files get a generic name during upload ([#759](https://github.com/Lumieducation/H5P-Nodejs-library/issues/759)) ([d643e09](https://github.com/Lumieducation/H5P-Nodejs-library/commit/d643e09d39734fbd3f5ee39d259a3e5e24e10a87))
* **file uploads:** stricter filename sanitization ([#596](https://github.com/Lumieducation/H5P-Nodejs-library/issues/596)) ([08cad21](https://github.com/Lumieducation/H5P-Nodejs-library/commit/08cad2115a6cf9901063acc797b8c02b80d82125))
* **FileLibraryStorage:** Removed hardcoded FileLibraryStorage directory ([#383](https://github.com/Lumieducation/H5P-Nodejs-library/issues/383)) ([7d7bd0c](https://github.com/Lumieducation/H5P-Nodejs-library/commit/7d7bd0c4a573c01911aa94b156c2efe40708e352))
* **findlibraries:** prevent TypeError object[key].match is not a function (fixes [#320](https://github.com/Lumieducation/H5P-Nodejs-library/issues/320)) ([#321](https://github.com/Lumieducation/H5P-Nodejs-library/issues/321)) ([2a269de](https://github.com/Lumieducation/H5P-Nodejs-library/commit/2a269dede488493913faccc5947f68f6df33fb82))
* **h5p core:** added h5peditor-fullscreenbar.js to assets ([#445](https://github.com/Lumieducation/H5P-Nodejs-library/issues/445)) ([90ddd8f](https://github.com/Lumieducation/H5P-Nodejs-library/commit/90ddd8f90aa9d5e493e68532e35f39ea6f977ec7))
* **h5p-editor:** improve error messages ([#265](https://github.com/Lumieducation/H5P-Nodejs-library/issues/265)) ([7ed5a68](https://github.com/Lumieducation/H5P-Nodejs-library/commit/7ed5a68732c5039daac5340d091651a9a5d2b588)), closes [#233](https://github.com/Lumieducation/H5P-Nodejs-library/issues/233)
* **h5p-server:** stricter file upload validation ([fb52def](https://github.com/Lumieducation/H5P-Nodejs-library/commit/fb52def6b1d34c48061be95d247d8dbfc970727e))
* highest available lib version not selected ([2b16f4e](https://github.com/Lumieducation/H5P-Nodejs-library/commit/2b16f4ecbc28ecf6cd92c4ff8a337253676fb58e))
* **image upload:** editor returns image size of uploads (closes [#425](https://github.com/Lumieducation/H5P-Nodejs-library/issues/425)) ([#507](https://github.com/Lumieducation/H5P-Nodejs-library/issues/507)) ([328a2f7](https://github.com/Lumieducation/H5P-Nodejs-library/commit/328a2f71fac3f30b37b098c59b6c4e8670fe67e5))
* language not being applied to content types ([582d02a](https://github.com/Lumieducation/H5P-Nodejs-library/commit/582d02a559b28f1a8e59988c8fce4d4780167158))
* **library management:** remove id and libraryId properties of installed libraries ([#296](https://github.com/Lumieducation/H5P-Nodejs-library/issues/296)) ([b553515](https://github.com/Lumieducation/H5P-Nodejs-library/commit/b553515bb2bf33287aa0c8ff737f5c9d2243833a))
* **library storage:** Make ILibraryStorage.getFileStream async ([#374](https://github.com/Lumieducation/H5P-Nodejs-library/issues/374)) ([49e2b6a](https://github.com/Lumieducation/H5P-Nodejs-library/commit/49e2b6ac52a584aeccc8bd61f6e7a96ffdbbaec5))
* **library:** 'retry' popup in audio recorder activity not visible ([a5e5464](https://github.com/Lumieducation/H5P-Nodejs-library/commit/a5e546457d63b3acba4b63465a845380e224fd01))
* **library:** 'retry' popup in audio recorder activity not visible ([f672e85](https://github.com/Lumieducation/H5P-Nodejs-library/commit/f672e85585b41b705173df86345a50bb46dc607c))
* **library:** 404 error ([b9633f5](https://github.com/Lumieducation/H5P-Nodejs-library/commit/b9633f5a9740ea0798ab544d12ad146525d50ab4))
* **library:** activity preview is blank ([9812b58](https://github.com/Lumieducation/H5P-Nodejs-library/commit/9812b58c9718e7f25434e0fa08b26b77cc780425))
* **library:** add custom slide block for Drag Text subcontent ([61809e7](https://github.com/Lumieducation/H5P-Nodejs-library/commit/61809e7092bc5251b2b12ce02ddeb650fe87d4b0))
* **library:** add workaround for image height on Safari ([35046c6](https://github.com/Lumieducation/H5P-Nodejs-library/commit/35046c6fc5e37774cc14c7706b9e61bcacef73b5))
* **library:** address row/column count feedback ([69362ea](https://github.com/Lumieducation/H5P-Nodejs-library/commit/69362eab065084ac8573fcd2e8c001b139b7dd45))
* **library:** attention and hint timer not starting before interaction ([7650435](https://github.com/Lumieducation/H5P-Nodejs-library/commit/76504352d0fbefa732d0651f7c542c4f3187d540))
* **library:** crash in ActiveSurface mode ([54346ab](https://github.com/Lumieducation/H5P-Nodejs-library/commit/54346abc5ead1a4037d62a0205481efabe86da7d))
* **library:** experimental scaling adjustment ([99c3666](https://github.com/Lumieducation/H5P-Nodejs-library/commit/99c3666476e65b91617fd50da2a53b230d30f6fa))
* **library:** letter grid not showing on student screen ([ab767c5](https://github.com/Lumieducation/H5P-Nodejs-library/commit/ab767c5ffeb06c60f2e19cd135bc0c9daa9a5a42))
* **npm package:** package now includes translation files ([#580](https://github.com/Lumieducation/H5P-Nodejs-library/issues/580)) ([5bcfc88](https://github.com/Lumieducation/H5P-Nodejs-library/commit/5bcfc8864871b7cb1fb5a96861ef8716c74ed931))
* **npm:** update .npmignore to publish only relevant files ([#256](https://github.com/Lumieducation/H5P-Nodejs-library/issues/256)) ([79d5dca](https://github.com/Lumieducation/H5P-Nodejs-library/commit/79d5dca2a4f24bb9324f7521a29691d0baad305a))
* **package upload:** content of uploaded packages is now not permanently stored in the system ([#289](https://github.com/Lumieducation/H5P-Nodejs-library/issues/289)) ([f5d84ca](https://github.com/Lumieducation/H5P-Nodejs-library/commit/f5d84ca1df0ad8b53624ddfb7001f8c20f479c97))
* **package upload:** missing temporary files ([#645](https://github.com/Lumieducation/H5P-Nodejs-library/issues/645)) ([903a6b0](https://github.com/Lumieducation/H5P-Nodejs-library/commit/903a6b0e86245d828afeb805bb42636e02d589ad))
* **package upload:** more robust handling of missing files ([#679](https://github.com/Lumieducation/H5P-Nodejs-library/issues/679)) ([addfec2](https://github.com/Lumieducation/H5P-Nodejs-library/commit/addfec21a1d34d3854463a905bb5a5846905413b))
* **package uploads:** filenames inside uploaded packages work in S3 ([#499](https://github.com/Lumieducation/H5P-Nodejs-library/issues/499)) ([3c87799](https://github.com/Lumieducation/H5P-Nodejs-library/commit/3c87799170d77ab8f604f00babf246a6542a602c))
* **package upload:** uploaded packages with missing files work ([#642](https://github.com/Lumieducation/H5P-Nodejs-library/issues/642)) ([b447e87](https://github.com/Lumieducation/H5P-Nodejs-library/commit/b447e87e6e4b3c0776c5015864d27d3d5cbc4417))
* **player:** added compatibility with interactive book ([#717](https://github.com/Lumieducation/H5P-Nodejs-library/issues/717)) ([defd344](https://github.com/Lumieducation/H5P-Nodejs-library/commit/defd344f4013c87dc90e80a99e2b6146420ce4aa))
* **player:** custom scripts now inserted correctly ([#555](https://github.com/Lumieducation/H5P-Nodejs-library/issues/555)) ([6c7e1eb](https://github.com/Lumieducation/H5P-Nodejs-library/commit/6c7e1eb46d156cc2d8afec2ebcfe20e0ecbad34a))
* **player:** the user defined integration now overwrites the default one ([#328](https://github.com/Lumieducation/H5P-Nodejs-library/issues/328)) ([16a97c7](https://github.com/Lumieducation/H5P-Nodejs-library/commit/16a97c79d080245116273c6e3869204b1773b41d))
* **release:** add semantic-release git & github as deps ([#305](https://github.com/Lumieducation/H5P-Nodejs-library/issues/305)) ([0d551f0](https://github.com/Lumieducation/H5P-Nodejs-library/commit/0d551f046cbaf1034b198cd1800af1a27238c59a))
* remove deprecated h5p-editor.js ([#191](https://github.com/Lumieducation/H5P-Nodejs-library/issues/191)) ([1bb7827](https://github.com/Lumieducation/H5P-Nodejs-library/commit/1bb7827103f473ec292743cc1f101384b79fd0ea))
* **saving:** exported packages now allows conform to the h5p.json schema (resolves [#294](https://github.com/Lumieducation/H5P-Nodejs-library/issues/294)) ([#323](https://github.com/Lumieducation/H5P-Nodejs-library/issues/323)) ([b2fd4e6](https://github.com/Lumieducation/H5P-Nodejs-library/commit/b2fd4e6391f2c470f1b038f9bd173cd12e4ed38c))
* **security:** introduce React to fix content list XSS ([a15fc50](https://github.com/Lumieducation/H5P-Nodejs-library/commit/a15fc5082d1aca8093ddb442c1469d8d09b5a6ff))
* **security:** introduce React to fix editor XSS ([58b17a5](https://github.com/Lumieducation/H5P-Nodejs-library/commit/58b17a531fc15e0a0e19235a767384c8a483d033))
* **security:** introduce React to fix player XSS ([5ef8757](https://github.com/Lumieducation/H5P-Nodejs-library/commit/5ef8757238e57ace03fe8987575732975eee7f64))
* slack integration message breaks pipeline ([cf99994](https://github.com/Lumieducation/H5P-Nodejs-library/commit/cf999947fa0864acda694128cbeabaa3ff52b084))
* **storage:** Data directories of storage implementations are now automatically created on startup. ([#360](https://github.com/Lumieducation/H5P-Nodejs-library/issues/360)) ([9e6a366](https://github.com/Lumieducation/H5P-Nodejs-library/commit/9e6a366f372eaa0b82217842b4c818f67e83a5b2))
* **storage:** Media files now stored in subdirectories (closes [#375](https://github.com/Lumieducation/H5P-Nodejs-library/issues/375)) ([#426](https://github.com/Lumieducation/H5P-Nodejs-library/issues/426)) ([4a4ccd0](https://github.com/Lumieducation/H5P-Nodejs-library/commit/4a4ccd00047c3883ac3355f3bca0fa00f2f19cb0))
* **temporaryfilestorage:** streams of temporary files are now properly closed ([#309](https://github.com/Lumieducation/H5P-Nodejs-library/issues/309)) ([72ef6cb](https://github.com/Lumieducation/H5P-Nodejs-library/commit/72ef6cb2879e9029b8348929777ffae3a63acc95))
* **test:** adjusted tests based on new player render ([7d90e60](https://github.com/Lumieducation/H5P-Nodejs-library/commit/7d90e6077fd44987c8943233079015c944a5c6be))
* **test:** adjusting render html test ([6618086](https://github.com/Lumieducation/H5P-Nodejs-library/commit/661808687d3c674f1d4529785a99e1d60c9007ce))
* **translation:** adapter now tolerant of missing translation function ([#450](https://github.com/Lumieducation/H5P-Nodejs-library/issues/450)) ([5520078](https://github.com/Lumieducation/H5P-Nodejs-library/commit/5520078f6c6c8f91c305144ecbe53edd8d9188a8))
* **translations:** missing translations bug ([4cc700e](https://github.com/Lumieducation/H5P-Nodejs-library/commit/4cc700ee1820bfc599d2dda8318e1befcd4bc8e8))


### feature

* **temporary-files:** Add temporary file manager ([#87](https://github.com/Lumieducation/H5P-Nodejs-library/issues/87)) ([#189](https://github.com/Lumieducation/H5P-Nodejs-library/issues/189)) ([7b66a2d](https://github.com/Lumieducation/H5P-Nodejs-library/commit/7b66a2daddfd237120add89519dfbc5738fb2857))


* **config:** move URLConfig to EditorConfig ([ba6a638](https://github.com/Lumieducation/H5P-Nodejs-library/commit/ba6a638291251a7aa6de887464f12de183abc4c6))
* **dependencies:** Updated all dependencies ([#407](https://github.com/Lumieducation/H5P-Nodejs-library/issues/407)) ([1738604](https://github.com/Lumieducation/H5P-Nodejs-library/commit/1738604437244adc50f706b10833b610eb6cf87a))
* **H5PEditor:** Moved user from constructor of H5PEditor to method calls ([#158](https://github.com/Lumieducation/H5P-Nodejs-library/issues/158)) ([#176](https://github.com/Lumieducation/H5P-Nodejs-library/issues/176)) ([04527e7](https://github.com/Lumieducation/H5P-Nodejs-library/commit/04527e7500b07c8faa91712cd75c0472f809186f))
* **routes:** removed exported Express routes ([#701](https://github.com/Lumieducation/H5P-Nodejs-library/issues/701)) ([def9bbb](https://github.com/Lumieducation/H5P-Nodejs-library/commit/def9bbb8748525ba9c6ebef97adf4845ea46ba89))
* **types:** Make naming and interface usage more consistent (closes [#119](https://github.com/Lumieducation/H5P-Nodejs-library/issues/119)) ([#187](https://github.com/Lumieducation/H5P-Nodejs-library/issues/187)) ([bf609af](https://github.com/Lumieducation/H5P-Nodejs-library/commit/bf609afc50b2b2e44b74587f610631f91acac6d8))
