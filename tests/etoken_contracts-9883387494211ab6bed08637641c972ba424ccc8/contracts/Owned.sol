import "Safe.sol";

contract Owned is Safe {
    address public contractOwner;
    address public pendingContractOwner;

    function Owned() {
        contractOwner = msg.sender;
    }

    modifier onlyContractOwner() {
        if (contractOwner == msg.sender) {
            _
        }
    }

    function changeContractOwnership(address _to) noValue() onlyContractOwner() returns(bool) {
        pendingContractOwner = _to;
        return true;
    }

    function claimContractOwnership() noValue() returns(bool) {
        if (pendingContractOwner != msg.sender) {
            return false;
        }
        contractOwner = pendingContractOwner;
        delete pendingContractOwner;
        return true;
    }

    function forwardCall(address _to, uint _value, bytes _data) onlyContractOwner() returns(bool) {
        if (!_to.call.value(_value)(_data)) {
            return _safeFalse();
        }
        return true;
    }
}