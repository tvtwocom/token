// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"_depthLeft","type":"uint16"},{"name":"_msgData","type":"bytes"}],"name":"callStackDepthAttack","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_depth","type":"uint16"},{"name":"_depthLeft","type":"uint16"}],"name":"_callStackDepthAttack","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_target","type":"address"}],"name":"init","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"attackData","outputs":[{"name":"","type":"bytes"}],"type":"function"},{"constant":true,"inputs":[],"name":"forwarding","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"target","outputs":[{"name":"","type":"address"}],"type":"function"}],
    binary: "60606040526000805460a060020a60ff021916815561047f90819061002390396000f3606060405236156100565760e060020a60003504630c38f2ec81146100715780630df688621461012357806319ab453c14610190578063203c8243146101b45780633ef000b414610211578063d4b8399214610224575b6101b260005460ff60a060020a9091041615610236576102b2565b60408051602060248035600481810135601f81018590048502860185019096528585526102b4958135959194604494929390920191819084018382808284375094965050505050505060008160016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061035c57805160ff19168380011785555b5061038c9291505b80821115610399576000815560010161010f565b6102b46004356024355b60008161ffff168361ffff16141561039d5760405160005460018054600160a060020a039290921692349281908390600281831615610100026000190190911604801561042b5780601f106104005761010080835404028352916020019161042b565b6000805473ffffffffffffffffffffffffffffffffffffffff19166004351790555b005b60408051600180546020600261010083851615026000190190921691909104601f81018290048202840182019094528383526102c893908301828280156104775780601f1061044c57610100808354040283529160200191610477565b6102b460005460a060020a900460ff1681565b610336600054600160a060020a031681565b6000805474ff0000000000000000000000000000000000000000191660a060020a17808255604051600160a060020a0390911691349136908083838082843782019150509250505060006040518083038185876185025a03f150506000805474ff00000000000000000000000000000000000000001916905550505b565b604080519115158252519081900360200190f35b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156103285780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60408051600160a060020a03929092168252519081900360200190f35b90505b92915050565b82800160010185558215610107579182015b8281111561010757825182600050559160200191906001019061036e565b505061035360548461012d565b5090565b30600160a060020a0316630df688623460018603856040518460e060020a028152600401808361ffff1681526020018261ffff1681526020019250505060206040518083038185886185025a03f115610002575050604051519250610356915050565b820191906000526020600020905b81548152906001019060200180831161040e57829003601f168201915b505091505060006040518083038185876185025a03f1925050509050610356565b820191906000526020600020905b81548152906001019060200180831161045a57829003601f168201915b50505050508156",
    unlinked_binary: "60606040526000805460a060020a60ff021916815561047f90819061002390396000f3606060405236156100565760e060020a60003504630c38f2ec81146100715780630df688621461012357806319ab453c14610190578063203c8243146101b45780633ef000b414610211578063d4b8399214610224575b6101b260005460ff60a060020a9091041615610236576102b2565b60408051602060248035600481810135601f81018590048502860185019096528585526102b4958135959194604494929390920191819084018382808284375094965050505050505060008160016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061035c57805160ff19168380011785555b5061038c9291505b80821115610399576000815560010161010f565b6102b46004356024355b60008161ffff168361ffff16141561039d5760405160005460018054600160a060020a039290921692349281908390600281831615610100026000190190911604801561042b5780601f106104005761010080835404028352916020019161042b565b6000805473ffffffffffffffffffffffffffffffffffffffff19166004351790555b005b60408051600180546020600261010083851615026000190190921691909104601f81018290048202840182019094528383526102c893908301828280156104775780601f1061044c57610100808354040283529160200191610477565b6102b460005460a060020a900460ff1681565b610336600054600160a060020a031681565b6000805474ff0000000000000000000000000000000000000000191660a060020a17808255604051600160a060020a0390911691349136908083838082843782019150509250505060006040518083038185876185025a03f150506000805474ff00000000000000000000000000000000000000001916905550505b565b604080519115158252519081900360200190f35b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156103285780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60408051600160a060020a03929092168252519081900360200190f35b90505b92915050565b82800160010185558215610107579182015b8281111561010757825182600050559160200191906001019061036e565b505061035360548461012d565b5090565b30600160a060020a0316630df688623460018603856040518460e060020a028152600401808361ffff1681526020018261ffff1681526020019250505060206040518083038185886185025a03f115610002575050604051519250610356915050565b820191906000526020600020905b81548152906001019060200180831161040e57829003601f168201915b505091505060006040518083038185876185025a03f1925050509050610356565b820191906000526020600020905b81548152906001019060200180831161045a57829003601f168201915b50505050508156",
    address: "0x4cd3d2afc1f85b6e0d06ee2e353212a27c5407da",
    generated_with: "2.0.9",
    contract_name: "UserContract"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("UserContract error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("UserContract error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("UserContract error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("UserContract error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.UserContract = Contract;
  }

})();