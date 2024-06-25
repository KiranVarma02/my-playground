function occursMost(str) {

    let obj = {}

    for (let i = 0; i < str.length; i++) {
        if (Object.keys(obj).includes(str[i])) {
            obj[str[i]] = obj[str[i]] + 1
        } else {
            obj[str[i]] = 1
        }
    }

    console.log(obj)

    let out = ''
    let maxValue = 0
    for (const key of Object.keys(obj)) {
        if(obj[key] > maxValue) {
            maxValue = obj[key]
            out = key
        }
    }

    return out
}


console.log(occursMost('aabbbaabac'))














// let map = new Map()

// for (let i = 0; i < str.length; i++) {
//     if (map.has(str[i])) {
//         map.set(str[i], map.get(str[i])+1)
//     } else {
//         map.set(str[i], 1)
//     }
// }

// console.log(map)