# WPS Office Multi-Language

### Dependencies
Before you can create the snap you need to install the following packages:
- snapd
```sh
sudo apt-get install snapd
```
- snapcraft
```sh
sudo snap install snapcraft --classic
```
- lxd
```sh
sudo addgroup --system lxd
sudo adduser $USER lxd
sudo snap install lxd
# restart your desktop session so that the lxd group membership is applied
lxd init
# accept all the default options that it asks you
```

### Create the Snap
To create the snap you only have to use the following command:
```sh
snapcraft cleanbuild
```
