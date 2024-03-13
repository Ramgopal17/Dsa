let s = "pwwkew"
function distinct(s) {
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
        if (Object.keys(mp).length < j-i+1) {
            j++
        } else if (Object.keys(mp).length == j-i+1) {
            max = Math.max(max, j - i + 1)
            j++
        } else if (Object.keys(mp).length < j-i+1) {
            while (Object.keys(mp).length <j-i+1) {
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
let a = distinct(s)
console.log(a)