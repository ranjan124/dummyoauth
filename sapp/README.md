Use yarn or npm 

yarn build
mkdir mobile
cd mobile
cordova create hello com.example.hello HelloWorld
cd hello
cordova plugin add cordova-plugin-customurlscheme --variable URL_SCHEME=mytestapp
copy disp/sapp content inside mobile/hello/www folder
cordova platform add android
cordova build
cordova run android
