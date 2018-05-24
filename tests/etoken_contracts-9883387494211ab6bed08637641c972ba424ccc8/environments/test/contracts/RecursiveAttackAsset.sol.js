// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[],"name":"multiAsset","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"","type":"bytes32"}],"name":"isSigned","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_stackDepthLib","type":"address"}],"name":"setupStackDepthLib","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"}],"name":"getAddress","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"emitApprove","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"emitTransfer","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_multiAsset","type":"address"},{"name":"_symbol","type":"bytes32"}],"name":"init","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"index","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_reference","type":"string"}],"name":"transferFromWithReference","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"sendToOwner","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_icap","type":"bytes32"},{"name":"_value","type":"uint256"}],"name":"transferToICAP","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_icap","type":"bytes32"},{"name":"_value","type":"uint256"},{"name":"_reference","type":"string"}],"name":"transferToICAPWithReference","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_cosigner","type":"address"}],"name":"setCosignerAddress","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes32"}],"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_icap","type":"bytes32"},{"name":"_value","type":"uint256"},{"name":"_reference","type":"string"}],"name":"transferFromToICAPWithReference","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_icap","type":"bytes32"},{"name":"_value","type":"uint256"}],"name":"transferFromToICAP","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_reference","type":"string"}],"name":"transferWithReference","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_addr","type":"address"}],"name":"setAddress","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_icap","type":"bytes32"}],"name":"setIcap","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"}],"name":"attack","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_from","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approve","type":"event"}],
    binary: "60606040526000805460a060020a60ff0219168155610ecc90819061002390396000f3606060405236156101325760e060020a6000350463029a8bf78114610134578063095ea7b3146101465780630a25035b146101d857806312ab7242146101e657806318160ddd1461021957806321f8a7211461028c57806323385089146102af57806323b872dd146102cb57806323de6651146102f95780632cc0b2541461030f5780635250fec71461035c5780636461fe391461037d5780636620a935146104c757806370a08231146104e5578063733480b71461056e57806377fe38a41461059857806382fc49b8146106b757806395d89b411461073f578063a48a663c14610748578063a525f42c14610879578063a9059cbb146108a7578063ac35caee146108d1578063ca446dd914610a06578063ce946b3a14610a32578063d018db3e14610a3d578063dd62ed3e14610a53575b005b610ae7600254600160a060020a031681565b610b046004356024355b604080516002546003547f4f09eba7000000000000000000000000000000000000000000000000000000008352600160a060020a03868116600485015260248401869052604484019190915292516000939190911691634f09eba7916064828101926020929190829003018187876161da5a03f1156100025750506040515191506103569050565b610b0460043560015b919050565b610b0460043560008054600160a060020a031680821415610b2a57508054600160a060020a0319168217905560016101e1565b610b18604080516002546003547fb524abcf00000000000000000000000000000000000000000000000000000000835260048301529151600092600160a060020a03169163b524abcf916024828101926020929190829003018187876161da5a03f1156100025750506040515191505090565b610ae7600435600081815260016020526040902054600160a060020a03166101e1565b610132600435602435604435806000191415610306575b505050565b610b046004356024356044355b6000610b3084848460206040519081016040528060008152602001506103cb565b6101326004356024356044355b6102c683610a44565b610b04600435602435600060006000341115610b5d57610b5d33345b610ec182825b604051600090600160a060020a0384169083908381818185876185025a03f193505050505b92915050565b610ae7600435600160205260009081526040902054600160a060020a031681565b604080516020606435600481810135601f8101849004840285018401909552848452610b04948135946024803595604435956084949201919081908401838280828437509496505050505050505b6000600260009054906101000a9004600160a060020a0316600160a060020a031663f0cbe059868686600360005054876040518660e060020a0281526004018086600160a060020a0316815260200185600160a060020a0316815260200184815260200183600019168152602001806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156104955780820380516001836020036101000a031916815260200191505b5096505050505050506020604051808303816000876161da5a03f115610002575050604051519150505b949350505050565b610b0460006000600060006000341115610bd257610bd2333461032b565b610b186004355b600254600354604080517f4d30b6be000000000000000000000000000000000000000000000000000000008152600160a060020a038581166004830152602482019390935290516000939290921691634d30b6be91604481810192602092909190829003018187876161da5a03f1156100025750506040515191506101e19050565b610b046004356024355b6000610cec838360206040519081016040528060008152602001506105e5565b604080516020604435600481810135601f8101849004840285018401909552848452610b049481359460248035959394606494929391019181908401838280828437509496505050505050505b6000600260009054906101000a9004600160a060020a0316600160a060020a031663c54876618585856040518460e060020a0281526004018084600019168152602001838152602001806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f16801561068a5780820380516001836020036101000a031916815260200191505b509450505050506020604051808303816000876161da5a03f115610002575050604051519150610b339050565b610b046004355b604080516002546003547fe82b7cb2000000000000000000000000000000000000000000000000000000008352600160a060020a03858116600485015260248401919091529251600093919091169163e82b7cb2916044828101926020929190829003018187876161da5a03f1156100025750506040515191506101e19050565b610b1860035481565b604080516020606435600481810135601f8101849004840285018401909552848452610b04948135946024803595604435956084949201919081908401838280828437509496505050505050505b6000600260009054906101000a9004600160a060020a0316600160a060020a031663ea98e540868686866040518560e060020a0281526004018085600160a060020a0316815260200184600019168152602001838152602001806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f16801561084b5780820380516001836020036101000a031916815260200191505b50955050505050506020604051808303816000876161da5a03f1156100025750506040515191506104bf9050565b610b046004356024356044355b6000610b308484846020604051908101604052806000815260200150610796565b610b046004356024355b6000610cec8383602060405190810160405280600081526020015061091e565b604080516020604435600481810135601f8101849004840285018401909552848452610b049481359460248035959394606494929391019181908401838280828437509496505050505050505b6000600260009054906101000a9004600160a060020a0316600160a060020a03166364ef212e8585600360005054866040518560e060020a0281526004018085600160a060020a0316815260200184815260200183600019168152602001806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156109d85780820380516001836020036101000a031916815260200191505b50955050505050506020604051808303816000876161da5a03f115610002575050604051519150610b339050565b61013260043560243560008281526001602052604090208054600160a060020a031916821790555b5050565b600480359055610132565b6101326004355b600060006000610cf3326104ec565b610b186004356024355b600254600354604080517f1c8d5d38000000000000000000000000000000000000000000000000000000008152600160a060020a0386811660048301528581166024830152604482019390935290516000939290921691631c8d5d3891606481810192602092909190829003018187876161da5a03f1156100025750506040515191506103569050565b60408051600160a060020a03929092168252519081900360200190f35b604080519115158252519081900360200190f35b60408051918252519081900360200190f35b50919050565b90505b9392505050565b60028054600160a060020a031916821790556003839055600191505b5092915050565b506002548390600160a060020a03166000141580610bc4575080600160a060020a0316632f553d31846040518260e060020a02815260040180826000191681526020019150506020604051808303816000876161da5a03f115610002575050604051511590505b15610b3a5760009150610b56565b604080516002546003547f02571be300000000000000000000000000000000000000000000000000000000835260048301529151600160a060020a0392909216916302571be39160248181019260209290919082900301816000876161da5a03f115610002575050604051519350505030600160a060020a031631905060016000821115610c6757610c648383610331565b90505b600254600160a060020a03166357cfeeee84610c82816104ec565b6003600050546040518460e060020a0281526004018084600160a060020a031681526020018381526020018260001916815260200193505050506020604051808303816000876161da5a03f1156100025750506040515190508015610ce45750805b935050505090565b9050610356565b9250309150610d01826106be565b50610d0c82846108b1565b50610d3d82846040604051908101604052806006815260200160d060020a6541747461636b0281526020015061091e565b50600454610d4b9084610578565b50600454604080518082019091526006815260d060020a6541747461636b026020820152610d7b919085906105e5565b50610d8882600019610150565b50604080516002546003547f401e336700000000000000000000000000000000000000000000000000000000835232600160a060020a0390811660048501528681166024850152604484018890526064840191909152925192169163401e33679160848181019260209290919082900301816000876161da5a03f1156100025750610e1691508590506104ec565b610e208532610a5d565b1015610e3057610e398432610a5d565b610e39846104ec565b9050610e468483836102d8565b50610e788483836040604051908101604052806006815260200160d060020a6541747461636b028152602001506103cb565b50610e898460046000505483610886565b50600454604080518082019091526006815260d060020a6541747461636b026020820152610eba9186918490610796565b5050505050565b1515610a2e5761000256",
    unlinked_binary: "60606040526000805460a060020a60ff0219168155610ecc90819061002390396000f3606060405236156101325760e060020a6000350463029a8bf78114610134578063095ea7b3146101465780630a25035b146101d857806312ab7242146101e657806318160ddd1461021957806321f8a7211461028c57806323385089146102af57806323b872dd146102cb57806323de6651146102f95780632cc0b2541461030f5780635250fec71461035c5780636461fe391461037d5780636620a935146104c757806370a08231146104e5578063733480b71461056e57806377fe38a41461059857806382fc49b8146106b757806395d89b411461073f578063a48a663c14610748578063a525f42c14610879578063a9059cbb146108a7578063ac35caee146108d1578063ca446dd914610a06578063ce946b3a14610a32578063d018db3e14610a3d578063dd62ed3e14610a53575b005b610ae7600254600160a060020a031681565b610b046004356024355b604080516002546003547f4f09eba7000000000000000000000000000000000000000000000000000000008352600160a060020a03868116600485015260248401869052604484019190915292516000939190911691634f09eba7916064828101926020929190829003018187876161da5a03f1156100025750506040515191506103569050565b610b0460043560015b919050565b610b0460043560008054600160a060020a031680821415610b2a57508054600160a060020a0319168217905560016101e1565b610b18604080516002546003547fb524abcf00000000000000000000000000000000000000000000000000000000835260048301529151600092600160a060020a03169163b524abcf916024828101926020929190829003018187876161da5a03f1156100025750506040515191505090565b610ae7600435600081815260016020526040902054600160a060020a03166101e1565b610132600435602435604435806000191415610306575b505050565b610b046004356024356044355b6000610b3084848460206040519081016040528060008152602001506103cb565b6101326004356024356044355b6102c683610a44565b610b04600435602435600060006000341115610b5d57610b5d33345b610ec182825b604051600090600160a060020a0384169083908381818185876185025a03f193505050505b92915050565b610ae7600435600160205260009081526040902054600160a060020a031681565b604080516020606435600481810135601f8101849004840285018401909552848452610b04948135946024803595604435956084949201919081908401838280828437509496505050505050505b6000600260009054906101000a9004600160a060020a0316600160a060020a031663f0cbe059868686600360005054876040518660e060020a0281526004018086600160a060020a0316815260200185600160a060020a0316815260200184815260200183600019168152602001806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156104955780820380516001836020036101000a031916815260200191505b5096505050505050506020604051808303816000876161da5a03f115610002575050604051519150505b949350505050565b610b0460006000600060006000341115610bd257610bd2333461032b565b610b186004355b600254600354604080517f4d30b6be000000000000000000000000000000000000000000000000000000008152600160a060020a038581166004830152602482019390935290516000939290921691634d30b6be91604481810192602092909190829003018187876161da5a03f1156100025750506040515191506101e19050565b610b046004356024355b6000610cec838360206040519081016040528060008152602001506105e5565b604080516020604435600481810135601f8101849004840285018401909552848452610b049481359460248035959394606494929391019181908401838280828437509496505050505050505b6000600260009054906101000a9004600160a060020a0316600160a060020a031663c54876618585856040518460e060020a0281526004018084600019168152602001838152602001806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f16801561068a5780820380516001836020036101000a031916815260200191505b509450505050506020604051808303816000876161da5a03f115610002575050604051519150610b339050565b610b046004355b604080516002546003547fe82b7cb2000000000000000000000000000000000000000000000000000000008352600160a060020a03858116600485015260248401919091529251600093919091169163e82b7cb2916044828101926020929190829003018187876161da5a03f1156100025750506040515191506101e19050565b610b1860035481565b604080516020606435600481810135601f8101849004840285018401909552848452610b04948135946024803595604435956084949201919081908401838280828437509496505050505050505b6000600260009054906101000a9004600160a060020a0316600160a060020a031663ea98e540868686866040518560e060020a0281526004018085600160a060020a0316815260200184600019168152602001838152602001806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f16801561084b5780820380516001836020036101000a031916815260200191505b50955050505050506020604051808303816000876161da5a03f1156100025750506040515191506104bf9050565b610b046004356024356044355b6000610b308484846020604051908101604052806000815260200150610796565b610b046004356024355b6000610cec8383602060405190810160405280600081526020015061091e565b604080516020604435600481810135601f8101849004840285018401909552848452610b049481359460248035959394606494929391019181908401838280828437509496505050505050505b6000600260009054906101000a9004600160a060020a0316600160a060020a03166364ef212e8585600360005054866040518560e060020a0281526004018085600160a060020a0316815260200184815260200183600019168152602001806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156109d85780820380516001836020036101000a031916815260200191505b50955050505050506020604051808303816000876161da5a03f115610002575050604051519150610b339050565b61013260043560243560008281526001602052604090208054600160a060020a031916821790555b5050565b600480359055610132565b6101326004355b600060006000610cf3326104ec565b610b186004356024355b600254600354604080517f1c8d5d38000000000000000000000000000000000000000000000000000000008152600160a060020a0386811660048301528581166024830152604482019390935290516000939290921691631c8d5d3891606481810192602092909190829003018187876161da5a03f1156100025750506040515191506103569050565b60408051600160a060020a03929092168252519081900360200190f35b604080519115158252519081900360200190f35b60408051918252519081900360200190f35b50919050565b90505b9392505050565b60028054600160a060020a031916821790556003839055600191505b5092915050565b506002548390600160a060020a03166000141580610bc4575080600160a060020a0316632f553d31846040518260e060020a02815260040180826000191681526020019150506020604051808303816000876161da5a03f115610002575050604051511590505b15610b3a5760009150610b56565b604080516002546003547f02571be300000000000000000000000000000000000000000000000000000000835260048301529151600160a060020a0392909216916302571be39160248181019260209290919082900301816000876161da5a03f115610002575050604051519350505030600160a060020a031631905060016000821115610c6757610c648383610331565b90505b600254600160a060020a03166357cfeeee84610c82816104ec565b6003600050546040518460e060020a0281526004018084600160a060020a031681526020018381526020018260001916815260200193505050506020604051808303816000876161da5a03f1156100025750506040515190508015610ce45750805b935050505090565b9050610356565b9250309150610d01826106be565b50610d0c82846108b1565b50610d3d82846040604051908101604052806006815260200160d060020a6541747461636b0281526020015061091e565b50600454610d4b9084610578565b50600454604080518082019091526006815260d060020a6541747461636b026020820152610d7b919085906105e5565b50610d8882600019610150565b50604080516002546003547f401e336700000000000000000000000000000000000000000000000000000000835232600160a060020a0390811660048501528681166024850152604484018890526064840191909152925192169163401e33679160848181019260209290919082900301816000876161da5a03f1156100025750610e1691508590506104ec565b610e208532610a5d565b1015610e3057610e398432610a5d565b610e39846104ec565b9050610e468483836102d8565b50610e788483836040604051908101604052806006815260200160d060020a6541747461636b028152602001506103cb565b50610e898460046000505483610886565b50600454604080518082019091526006815260d060020a6541747461636b026020820152610eba9186918490610796565b5050505050565b1515610a2e5761000256",
    address: "0x6751275283a83ef6f4960f848e4f5b73964c97ba",
    generated_with: "2.0.9",
    contract_name: "RecursiveAttackAsset"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("RecursiveAttackAsset error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("RecursiveAttackAsset error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("RecursiveAttackAsset error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("RecursiveAttackAsset error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.RecursiveAttackAsset = Contract;
  }

})();