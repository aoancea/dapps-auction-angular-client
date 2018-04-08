(function () {

    var eth = new Eth(TestRPC.provider());
    var el = function (id) { return document.querySelector(id); };
    /*
    // uncomment to enable MetaMask support:
    if (typeof window.web3 !== 'undefined' && typeof window.web3.currentProvider !== 'undefined') {
        eth.setProvider(window.web3.currentProvider);
    } else {
        eth.setProvider(provider); // set to TestRPC if not available
    }
    */
    eth.accounts().then(function (accounts) {
        accounts.forEach(function (address) {
            bidAccount.innerHTML += '<option value="' + address + '">'
                + address + '</option>';
        });

        el('#accountAddress').innerHTML = accounts[0].substr(0, 12);
        var SimpleAuctionBytecode = '6060604052341561000f57600080fd5b60405160408061070e83398101604052808051906020019091908051906020019091905050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055504260018190555081600281905550505061067b806100936000396000f30060606040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631998aeef146100935780632a24f46c1461009d57806338af3eed146100b25780633ccfd60b146101075780634f245ef71461013457806391f901571461015d578063d074a38d146101b2578063d57bde79146101db575b600080fd5b61009b610204565b005b34156100a857600080fd5b6100b0610390565b005b34156100bd57600080fd5b6100c56104cd565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561011257600080fd5b61011a6104f2565b604051808215151515815260200191505060405180910390f35b341561013f57600080fd5b610147610617565b6040518082815260200191505060405180910390f35b341561016857600080fd5b61017061061d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101bd57600080fd5b6101c5610643565b6040518082815260200191505060405180910390f35b34156101e657600080fd5b6101ee610649565b6040518082815260200191505060405180910390f35b6002546001540142111561021757600080fd5b6004543411151561022757600080fd5b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156102db5760045460056000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b33600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550346004819055507ff4757a49b326036464bec6fe419a4ae38c8a02ce3e68bf0809674f6aab8ad3003334604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a1565b60025460015401421115156103a457600080fd5b600660009054906101000a900460ff16156103be57600080fd5b6001600660006101000a81548160ff0219169083151502179055507fdaec4582d5d9595688c8c98545fdd1c696d41c6aeaeb636737e84ed2f5c00eda600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600454604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a16000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004549081150290604051600060405180830381858888f1935050505015156104cb57600080fd5b565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050600081111561060e576000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050151561060d5780600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060009150610613565b5b600191505b5090565b60015481565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b600454815600a165627a7a72305820950dcf6d6f9c40bf82e800a01b0bd507afabaea068b635b5970aff14c55827b80029';
        var SimpleAuctionABI = [{ "constant": false, "inputs": [], "name": "bid", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [], "name": "auctionEnd", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "beneficiary", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "withdraw", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "auctionStart", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "highestBidder", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "biddingTime", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "highestBid", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [{ "name": "_biddingTime", "type": "uint256" }, { "name": "_beneficiary", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "bidder", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }], "name": "HighestBidIncreased", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "winner", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }], "name": "AuctionEnded", "type": "event" }];
        var SimpleAuction = eth.contract(SimpleAuctionABI, SimpleAuctionBytecode, { from: accounts[0], gas: 3000000 });
        var simpleAuctionInstance;
        var beneficiary = accounts[0];
        var biddingTime = 30; // 15 thousand seconds
        
        // poll for new auction data
        var auctionInterval = setInterval(function updateAuctionHTML() {
            if (!simpleAuctionInstance) { return; }

            eth.getBalance(accounts[0]).then(function (balance) {
                el('#accountBalance').innerHTML = Eth.fromWei(balance, 'ether');
            });

            eth.getBalance(simpleAuctionInstance.address).then(function (auctionBalance) {
                el('#raised').innerHTML = Eth.fromWei(auctionBalance, 'ether');
            });

            simpleAuctionInstance.beneficiary().then(function (beneficiary) {
                el('#beneficiary').innerHTML = beneficiary[0].substr(0, 12);
            });

            simpleAuctionInstance.highestBidder().then(function (highestBidder) {
                el('#highestBidder').innerHTML = highestBidder[0].substr(0, 12);
            });

            simpleAuctionInstance.highestBid().then(function (highestBid) {
                el('#highestBid').innerHTML = Eth.fromWei(highestBid[0], 'ether');
            });

            simpleAuctionInstance.auctionStart().then(function (auctionStart) {
                simpleAuctionInstance.biddingTime().then(function (biddingTime) {
                    var timeleft = (auctionStart[0].add(biddingTime[0]))
                        .sub(new Eth.BN((new Date()).getTime() / 1000));

                    el('#timeleft').innerHTML = timeleft.toString(10);

                    // time left is less than or equal to (lte) 0
                    if (timeleft.negative == 1) {
                        clearInterval(auctionInterval);
                        el('#endAuction').disabled = '';
                    }
                });
            });
        }, 600);

        SimpleAuction.new(biddingTime, beneficiary, function (deployError, deployTxHash) {
            if (deployError) {
                el('#response').innerHTML = 'Hmm, there was an error: ' + String(deployError);
            }

            var checkTransaction = setInterval(function () {
                eth.getTransactionReceipt(deployTxHash).then(function (receipt) {
                    if (receipt) {
                        clearInterval(checkTransaction);
                        simpleAuctionInstance = SimpleAuction.at(receipt.contractAddress);

                        el('#makeBid').addEventListener('click', function () {
                            var bidTxObject = {
                                from: el('#bidAccount').value,
                                value: Eth.toWei(el('#bidAmount').value, 'ether'),
                            };
                            el('#response').innerHTML = 'Placing bid..';
                            simpleAuctionInstance.bid(bidTxObject, function (bidError, bidResult) {
                                if (bidError) {
                                    el('#response').innerHTML = 'Hmm, there was an error' + String(bidError);
                                } else {
                                    el('#response').innerHTML = 'Making bid with tx hash: ' + String(bidResult);
                                }
                            });
                        });

                        el('#endAuction').addEventListener('click', function () {
                            el('#response').innerHTML = 'Ending auction...';
                            simpleAuctionInstance.auctionEnd(function (endError, endResult) {
                                if (endError) {
                                    el('#response').innerHTML = 'Hmm, there was an error' + String(endError);
                                } else {
                                    el('#response').innerHTML = 'Ending auction with tx hash: ' + String(endResult);
                                }
                            });
                        });
                    }
                });
            }, 400);

        });
    });
}());
