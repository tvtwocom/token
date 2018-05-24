// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"_stackDepthLib","type":"address"}],"name":"setupStackDepthLib","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"claimContractOwnership","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"}],"name":"changeContractOwnership","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"pendingContractOwner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"forwardCall","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"contractOwner","outputs":[{"name":"","type":"address"}],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "60606040526000805460a060020a60ff021916905560018054600160a060020a031916331790556102e1806100346000396000f3606060405236156100565760e060020a600035046312ab724281146100585780634592cd1d1461008b578063557f4bc9146100cd5780635aa77d3c146100e85780636effec50146100fa578063ce606ee0146101f1575b005b61020360043560008054600160a060020a03168082141561023457508054600160a060020a031916821790556001610236565b610203600060003411156102675761026733345b6102ca8282604051600090600160a060020a0384169083908381818185876185025a03f19695505050505050565b6102036004356000600034111561028657610286333461009f565b610217600254600160a060020a031681565b604080516020600460443581810135601f8101849004840285018401909552848452610203948235946024803595606494929391909201918190840183828082843750949650505050505050600154600090600160a060020a039081163390911614156102bc5783600160a060020a03168383604051808280519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156101ba5780820380516001836020036101000a031916815260200191505b5091505060006040518083038185876185025a03f19250505015156102b8576102c3600060003411156102d9576102d9333461009f565b610217600154600160a060020a031681565b604080519115158252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b505b919050565b506001805460028054600160a060020a0319928316600160a060020a0382161784559190911690555b90565b600254600160a060020a03908116339091161461023b57506000610264565b600154600160a060020a03908116339091161415610236575060028054600160a060020a031916821790556001610236565b5060015b9392505050565b90506102bc565b15156102d557610002565b5050565b50600061026456",
    unlinked_binary: "60606040526000805460a060020a60ff021916905560018054600160a060020a031916331790556102e1806100346000396000f3606060405236156100565760e060020a600035046312ab724281146100585780634592cd1d1461008b578063557f4bc9146100cd5780635aa77d3c146100e85780636effec50146100fa578063ce606ee0146101f1575b005b61020360043560008054600160a060020a03168082141561023457508054600160a060020a031916821790556001610236565b610203600060003411156102675761026733345b6102ca8282604051600090600160a060020a0384169083908381818185876185025a03f19695505050505050565b6102036004356000600034111561028657610286333461009f565b610217600254600160a060020a031681565b604080516020600460443581810135601f8101849004840285018401909552848452610203948235946024803595606494929391909201918190840183828082843750949650505050505050600154600090600160a060020a039081163390911614156102bc5783600160a060020a03168383604051808280519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156101ba5780820380516001836020036101000a031916815260200191505b5091505060006040518083038185876185025a03f19250505015156102b8576102c3600060003411156102d9576102d9333461009f565b610217600154600160a060020a031681565b604080519115158252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b505b919050565b506001805460028054600160a060020a0319928316600160a060020a0382161784559190911690555b90565b600254600160a060020a03908116339091161461023b57506000610264565b600154600160a060020a03908116339091161415610236575060028054600160a060020a031916821790556001610236565b5060015b9392505050565b90506102bc565b15156102d557610002565b5050565b50600061026456",
    address: "",
    generated_with: "2.0.9",
    contract_name: "Owned"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Owned error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("Owned error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Owned error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Owned error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Owned = Contract;
  }

})();