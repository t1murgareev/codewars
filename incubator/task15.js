function queueTime(customers, n) {
    if (!customers.length) {
        return 0
    }
    const ar = [...customers]
    const k = Array(Math.min(n, customers.length)).fill(0)
    while (ar.length) {
        const customer = ar.shift()
        const kMin = k.indexOf(Math.min(...k))
        k[kMin] += customer
    }
    return Math.max(k)
}