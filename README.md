# 0x1337
### An Ethereum vanity address generator for NodeJS

 
Start by installing the package dependencies.
```
npm install
```

Note: you can only use 0-9 and a-F. The prefix checker is case sensitive
```
node index.js --prefix=1337
```

Once you enter a prefix, it will brute-force an address that matches your prefix. The longer your prefix, the lower the odds of finding a match.
```
Checking if '590A' == '1337'
Checking if '40cC' == '1337'
Checking if 'E76D' == '1337'
Checking if '0a2D' == '1337'
Checking if '9D34' == '1337'
Checking if '109d' == '1337'
Checking if 'e5E8' == '1337'
Checking if 'Fc58' == '1337'
Checking if '2EBa' == '1337'
Checking if 'bd42' == '1337'
Checking if '1337' == '1337'

-----
Match found!
Store your private key in a secure location.

THIS INFORMATION WILL NOT BE DISPLAYED AGAIN
 {
  address: '0x1337F4748ccCa0C599notarealddrC7763Fa035C352',
  privateKey: '0x9181df999f8e6notarealkeycb7ed9c7da7e0a266cb8726e8271'
}
```

ETH tips: 0x1337d298865575b1378B93Ff543250977346FfE0