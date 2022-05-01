const Migrations = artifacts.require("Migrations");
// const GLDToken = artifacts.require('GLDToken.sol')

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  // deployer.deploy(GLDToken, 1000000000000);
};
