// 入口文件

export function to<T, U = Error>(promise: Promise<T>, errExt?: object): Promise<[U, undefined] | [null, T]> {
    return promise
        .then<[null, T]>((data: T) => [null, data])
        .catch<[U, undefined]>((e: U) => {
            if (errExt) {
                return [Object.assign({}, e, errExt), undefined];
            }
            return [e, undefined];
        });
}
