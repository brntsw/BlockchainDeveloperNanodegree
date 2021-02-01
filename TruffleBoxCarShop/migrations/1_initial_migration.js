/**
 * This handles deploying the Migrations.sol contract to observe subsequent smart contract migrations, and ensures 
 * we don't double-migrate unchanged contracts in the future.
 */

var Migrations = artifacts.require("./Migrations.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
