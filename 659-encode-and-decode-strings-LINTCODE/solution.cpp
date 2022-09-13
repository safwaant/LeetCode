#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    /*
     * @param strs: a list of strings
     * @return: encodes a list of strings to a single string.
     */
    string encode(vector<string> &strs) {
        // write your code here
        string res = "";
        for(string s : strs) {
            int len = s.size();
            res += (len + "#" + s);
        }
        cout << res << endl;
        return res;
    }

    /*
     * @param str: A string
     * @return: dcodes a single string to a list of strings
     */
    vector<string> decode(string &str) {
        // write your code here
        int i = 0;
        vector<string> res;
        while(i < str.size()) {
            int j = i;
            while(str[j] != '#') {
                j++;
            }
            string sub = str.substr(i, j);
            int len = sub.size();
            string cur = str.substr(j + 1, j + 1 + len);
            res.push_back(cur);
            i = j + 1 + len;
        }
        return res;
    }
};  