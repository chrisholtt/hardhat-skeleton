// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract SimpleStorage {
    uint256 public number;
    mapping(address => uint256) public payees;

    function store(uint256 num) public {
        number = num;
    }

    function fund() public payable {
        require(msg.value >= 1 ether, "Send more ether");
        payees[msg.sender] = msg.value;
    }

    function retrieve() public view returns (uint256) {
        return number;
    }
}
