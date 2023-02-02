
//% color=#b5d136 weight=0 icon="\uf055" block="Concatenation"
namespace concatenation {
    //% blockId=concat_concatenate
    //% block="%x=variables_get(list) joined with %y=variables_get(list1)"
    export function concatenate(x: Array<any>, y: Array<any>): Array<any> {
        return x.concat(y);
    }
    
    //% blockId=concat_extend
    //% block="concatenate %y=variables_get(list) to the end of %x=variables_get(list1)"
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