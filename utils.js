export function promisify(func, obj) {
    return new Promise((resolve, reject) => {
        func({
            ...obj,
            success: resolve,
            fail: reject
        })
    })
}

