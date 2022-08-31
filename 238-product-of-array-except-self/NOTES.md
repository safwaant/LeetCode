# Product of Array Except Self
* The product of a single `ith` number can be broken into all products **before** that number and all products **after** that number 
* Store all **prefix products** into an array, then all **postfix products** into a different array 
* To compute the product for the `ith` element find 
	*  the `i - 1` element in the *prefix array* 
	*  the `i + 1` element in the *postfix array*
	*  multiple these together and return set it to `nums[i]`
