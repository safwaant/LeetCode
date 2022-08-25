/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
let levelOrder = (root) => {
    let res = [];
    if(!root){
      return res;   
    } 
    // construct a queue with the root node
    const q = new Queue();
    q.enqueue(root);
    // perform BFS with this queue
    while(!q.isEmpty()) {
        // keep track of size since it will change as more Nodes are added
        // and store each level in a temporary array
        let size = q.size(), level = [];
        for(let i = 0; i < size; i++) {
            // pop front and continue BFS traversal
            let front = q.dequeue();
            if(front.left) {
                q.enqueue(front.left);
            }
            if(front.right) {
                q.enqueue(front.right);
            }
            // level is completed
            level.push(front.val);
        }
        // push level onto result
        res.push(level);
    }
    return res;
    
};