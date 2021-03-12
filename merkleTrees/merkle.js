const { MerkleTree } = require('merkletreejs');

const crypto = require('crypto');

let leaves;
let tree;
let layers;
let root;
let proof;
let verified;

// Function used for hashing leaves and nodes
function sha256(data) {

    // The crypto.createHash() method is used to create Hash instances.
    // That can be used to generate hash digests using the given algorithm, 'sha256'
    // Update method: Updates the hash content with the given data
    // Calculates the digest of all the data passed to be hashed (using the hash.update() method)

    return crypto.createHash('sha256').update(data).digest();
}

// Creates an array of hashed leaves
function createLeaves() {
    leaves = ['a', 'b', 'c'].map(x => sha256(x)) //mapping through the array and creating hashes
    console.log("Leaves");
    console.log(leaves);
}

// Constructs a new Merkle Tree with the hashed leaves and the hashing function
function createTree() {
    tree = new MerkleTree(leaves, sha256);
    console.log("Tree");
    console.log(tree);
}

// Returns array of all leaves of Merkle tree
function getLeaves() {
    leaves = tree.getLeaves();
    console.log("Leaves");
    console.log(leaves);
}

// Returns array of all layers of Merkle Tree, including leaves and root
function getLayers() {
    layers = tree.getLayers();
    console.log("Layers");
    console.log(layers);
}

// Returns the Merkle root hash
function getRoot() {
    root = tree.getRoot();
    console.log("Root");
    console.log(root);
}

// Returns the proof for a target leaf
function getProof() {
    proof = tree.getProof(leaves[2]);
    console.log("Proof");
    console.log(proof);
}

// Returns true if the proof path (array of hashes) can connect the target node to the Merkle root
// proof: The proof that should connect target node, which is leaves[2] to Merkle root
// Then we are comparing this proof back to the hashed target node
function VerifyNode() {
    verified = tree.verify(proof, leaves[2], root);
    console.log("Verified to be");
    console.log(verified);
}

createLeaves();
createTree();
getLeaves();
getLayers();
getRoot();
getProof();
VerifyNode();