let s = "aabacbebebe"
function distinct(s, k) {
    let j = 0
    let i = 0
    let mp = {}
    let max = 0
    while (j < s.length) {
        if (mp[s[j]]) {
            mp[s[j]]++
        } else {
            mp[s[j]] = 1
        }
        if (Object.keys(mp).length < k) {
            j++
        } else if (Object.keys(mp).length == k) {
            max = Math.max(max, j - i + 1)
            j++
        } else if (Object.keys(mp).length > k) {
            while (Object.keys(mp).length > k) {
                mp[s[i]]--
                if (mp[s[i]] == 0) {
                   delete mp[s[i]]

                }
                i++
            }
            j++

        }
    }
    return max
}
let a = distinct(s, 3)
console.log(a)