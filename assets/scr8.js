var BW = new function() {

  //var addressPrefix = So;
  var addressPrefix = 0x1a9a;
  var salt = '4721283fee2db41e1f2fc50ea9f6d783'; // IMPORTANT: only change it locally before generating new wallet for extra security, when changed it will be impossible to restore previously generated wallets!
  
  this.getStringWords = function(string) {
    return string.replace(/^\s*(.*)\s*$/, '$1').replace(/\s+/, ' ').split(' ');
  };

  this.generateWallet = function(words) {
    var seed = CryptoJS.SHA256(salt + words.join(' ')).toString();
    return cnUtil.create_address(addressPrefix, seed);
  };

};