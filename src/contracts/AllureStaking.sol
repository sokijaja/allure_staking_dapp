pragma solidity ^0.5.0;

import './ART.sol';
import './Allure.sol';

contract AllureStaking {
    string public name = 'Allure Staking';
    address public owner;
    Allure public allure;
    ART public art;

    address[] public stakers;
     
    mapping(address => uint) public stakingBalance;
    mapping(address => bool) public hasStaked;
    mapping(address => bool) public isStaked;

    constructor(ART _art, Allure _allure) public {
        art = _art;
        allure = _allure;
        owner = msg.sender
    }

    //Staking function
    function depositTokens(uint amount) public {

        // require staking amount to be greater than zero
        require(_amount > 0, 'amount cannot be 0');

        //Transfer allure tokens to this contract for staking
        allure.transferFrom(msg.sender, address(this), _amount);

        // Update Staking Balance
        stakingBalance[msg.sender] = stakingBalance[msg.sender] + _amount;

        if(!hasStaked[msg.sender]) {
            stakers.psuh(msg.sender);
        }

        // Update Staking Balance
        isStaking[msg.sender] = true;
        hasStaked[msg.sender] = true;
    }

    //unstake tokens
    function unstakeTokens() public {
        uint balance = stakingBalance[msg.sender];
        require(balance > 0, 'unstaking balance cannot be less than zero');

        //transfer the tokens to the specified contract address
        allure.transfer(msg.sender, balance);

        // reset staking Balance
        stakingBalance[msg.sender] = 0;


        // Update Staking Status
        isStaking[msg.sender] = false;
    }

    // issue rewards\
    function issueTokens() public {
        // require the owner to issue tokens only
        require(msg.sender == owner, 'caller must be the owner of the message');
        for (uint i=0; i<stakers.length; i++) {
            address recipients = stakers[i];
            uint balance = stakingBalance[recipients] / 9;
            if(balance > 0) {
                art.transfer(receipient, balance);
            }
        }
    }

    

}