export const mean = (arr) => {
    let sum = arr.reduce((acc, val) => acc + val, 0)
    return sum / arr.length
}

export const median = (arr) => {
    let sorted = arr.sort((a, b) => a - b)
    let mid = Math.floor(sorted.length / 2)
    return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2
}

export const mode = (arr) => {
    arr = arr.map((value) => value.toFixed(3))

    const Obj = {}
    arr.forEach((elem) => (Obj[elem] = Obj[elem] + 1 || 1))

    let modes = []
    let maxFreq = 0
    for (const key in Obj) {
        if (Obj[key] > maxFreq) {
            modes = [Number(key)]
            maxFreq = Obj[key]
        } else if (Obj[key] === maxFreq) {
            modes.push(Number(key))
        }
    }

    if (modes.length === Object.keys(Obj).length) modes = []

    if (modes.length === 0) return 'No Mode'
    return modes.length > 1 ?
        modes.map((mode) => mode.toFixed(3) + ', ') :
        modes.map((value) => value.toFixed(3))
}