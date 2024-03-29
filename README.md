# Pandora HSM
This repository provides an interface to create cryptographic keys, sign data, and generate CSR file by using TÜBİTAK Network HSM (Hardware Security Module) device.

## Instructions for VPN Mode in Ubuntu 22.04.2 LTS

`sudo su` 

`apt install apt-transport-https` 

`curl -fsSL https://swupdate.openvpn.net/repos/openvpn-repo-pkg-key.pub | gpg --dearmor > /etc/apt/trusted.gpg.d/openvpn-repo-pkg-keyring.gpg` 

`curl -fsSL https://swupdate.openvpn.net/community/openvpn3/repos/openvpn3-jammy.list >/etc/apt/sources.list.d/openvpn3.list` 

`apt update` 

`apt install openvpn3` 

`openvpn3 config-import --config *your_vpn_config_file_path*` 

`openvpn3 session-start --config *your_vpn_config_file_path*`


## Setting Up Dirak Client
Download and extract Dirak Client from [Safir Depo](https://safirdepo.b3lab.org/shares/public/share/S2PdP1CzwgRXdhmgamwiXRaigaBo8byX).

`cd /Downloads/3.2.17/3.2.17` 

`chmod +x dirak-client-setup-3.2.17-20230118.123853-Debian.sh` 

`./dirak-client-setup-3.2.17-20230118.123853-Debian.sh` 

Fill in the IP and Serial Number fields as with your spesific informations:
![image](https://user-images.githubusercontent.com/58122506/224932725-4aa2be22-393c-4847-a6da-7c8e6314d712.png)

`cd /etc/bilgemHsm/bin` 

`sudo service dirakAuthenticator restart` 

`sudo ./dirakAuthenticatorApp -i -t srpP -u username -p password` 
 You must see: "*your_spesific_ip*": Requested function succeeded!
 
 To check connection health: 
`ping *your_spesific_ip*`
 
 Run dirakClient64 test application to check if you can connect to the HSM device and sign. 
 `sudo ./dirakClient64`
 
 ## Run the Application
 In the project's main directory first run: 
 `npm i`
 
 If everything is fine run : 
 `npm run generate` 
 
 This will generate a keypair, sign the data with the private key, and put the CSR down to `pandora.csr` file.
