// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ChattyNftCollection is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenId;

    string private _baseTokenURI = "http://helloworld";
    bool public revealed = false;

    constructor() ERC721("ChattyCollection", "CHTY") {}

    function setBaseURI(string calldata _baseUrl) public onlyOwner {
        _baseTokenURI = _baseUrl;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    function mint(address user, string memory tokenUri) public onlyOwner {
        uint newItemId = _tokenId.current();
        _tokenId.increment();
        _safeMint(user, newItemId);
        _setTokenURI(newItemId, tokenUri);
    }

    function reveal() external onlyOwner {
        revealed = true;
    }

    function tokenURI(
        uint256 tokenId
    ) public view virtual override returns (string memory) {
        require(
            _exists(tokenId),
            "ERC721MetaData: URI query for nonexistent token"
        );

        if (revealed) {
            return "";
        } else {
            return "";
        }
    }
}
