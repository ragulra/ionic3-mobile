cd D:/Test/ionictrip/CargoDistribution-master
ng build 
cd D:/Test/ionictrip/myApp
rm -rf ./www/*
cp -r D:/Test/ionictrip/CargoDistribution-master/dist/* ./www
