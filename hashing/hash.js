const sha256 = require('js-sha256');

/**
 * Alice has created a will (legal document) detailing how she would like to distribute her personal assets. She wants to 
 * record the reveal her network or account addresses to the public. To do this she computes the SHA256 of her document,
 * records the hash to the blockchain and sends the complete document to Bob, her heir
 */

 /**
  * The secret document
  */

const document = 'Give 50 BTC from my wallet 1Ajf09dshfsd890hfds98h1DHiNa to Bob';

/**
 * Alice computes the hash of her document
 */

const hash = sha256(document);

console.log(`Alice hashes her document and records the following hash value to the blockchain: ${hash}`);

/**
 * Bob receives a document, which should be from Alice. He can compare the document to the hash by computing the received
 * document's SHA256 and verifying it matches the value he obtains from the blockchain
 */

if(sha256(document) === hash) {
    console.log('Document is legit');
}
else{
    console.log(`Whoa! That's a fake document`);
}

/**
 * Suppose instead that Bob's sister Eve wanted to inherit Alice's bitcoins, and she distributes a forged will.
 * Alice and Bob can still communicate with all the reliability as if she'd publicly written her will to the
 * blockchain itself
 */

 const fake = 'Give 50 BTC from my wallet 1Ajf09dshfsd890hfds98h1DHiNa to Eve';
 if(sha256(fake) === hash) {
    console.log('Document is legit');
}
else{
    console.log(`Whoa! That's a fake document`);
}