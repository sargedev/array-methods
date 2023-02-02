
//% color=190 weight=#b5d136 icon="\uf055" block="Concatenation"
namespace concatenation {
    export function concatenate(x: Array<any>, y: Array<any>): Array<any> {
        return x.concat(y);
    }
    
    export function extend(x: Array<any>, y: Array<any>): void {
        x = concatenate(x, y);
    }

    export function concatenate_many(items: Array<Array<any>>): Array<any> {
        let result: Array<any> = [];
        items.forEach((value, index) => {
            result.concat(value);
        })
        return result
    }
}