# WPS Office Multi-Language

[![Get it from the Snap Store](https://snapcraft.io/static/images/badges/en/snap-store-white.svg)](https://snapcraft.io/wps-office-multilang)

## Overview
WPS Office, is an office productivity suite. WPS Office including Writer, Presentation and Spreadsheets, is a powerful office suite, which is able to process word file, produce wonderful slides, and analyse data as well. It is deeply compatible with all of the latest Microsoft Office file formats. It can easily open and read the documents created with Microsoft Office. This is the Linux version.  
Website: http://wps-community.org

**ABOUT THIS PACKAGE**  
This is a multilanguage snap package for wps-office. It contains all interface languages available for the Windows version.
This package is based on the wps-office-all-lang-no-internet package and the official wps-office package.
The official wps-office can be found at https://snapcraft.io/wps-office.
The package wps-office-all-lang-no-internet can be found at https://snapcraft.io/wps-office-all-lang-no-internet or https://github.com/cyrpaut/wps-office-all-lang-no-internet.
Because of security and privacy this package is shipped without internet plug. So there is no risk of a backdoor.

This package can be found at https://snapcraft.io/wps-office-multilang and https://github.com/HoLuLuLu/wps-office-multilang.

**SUPPORTED INTERFACE LANGUAGES**
- Chinese (CN)
- English (GB, US)
- French (CA, FR)
- German (DE)
- Indonesian (ID)
- Polish (PL)
- Portuguese (BR, PT)
- Russian (RU)
- Spanish (ES, MX)

**SUPPORTED SPELLCHECK LANGUAGES**
- Catalan (ES)
- Croatian (HR)
- Czech (CZ)
- Dutch (NL)
- English (AU, GB, US)
- French (FR)
- German (DE)
- Greek (GR)
- Italian (IT)
- Khmer (KH)
- Lithuanian (LT)
- Polish (PL)
- Portuguese (BR, PT)
- Romanian (RO)
- Russian (RU)
- Slovak (SK)
- Spanish (ES, MX)
- Swedish (SE)
- Turkish (TR)
- Ukrainian (UA)

## How to build a snap from this "source"
This short guide will show you how to build a snap from this "source" for your own. The following commands are for Ubuntu based distributions.

**DEPENDENCIES**  
There are a few steps to do before you can build your own snap package.
- install snapd - manager for snap packages
```sh
sudo apt-get install snapd
```
- install snapcraft - needed to build snap packages
```sh
sudo snap install snapcraft --classic
```
- create the lxd user group and add your user account to it
```sh
sudo addgroup --system lxd
sudo adduser $USER lxd
```
-  install lxd - lightweight container hypervisor
```sh
sudo snap install lxd
```
- restart your desktop session so that the lxd group membership is applied
```sh
lxd init
```
- accept all the default options that it asks you


**BUILD THE SNAP**  
The package creation is very simple.
- go into your project folder
- build the snap with the following content
```sh
snapcraft cleanbuild
```
That's it!
