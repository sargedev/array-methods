enum Order {
    Ascending,
    Descending
}

/**
 * Extension containing multiple useful array
 * methods in blocks
 */
//% color=190 weight=0 icon="\uf03a" block="ArrayMethods"
namespace arrayMethods {
    /**
     * Join two arrays together and return the result
     * @returns Concatenated array instance
     */
    //% blockId=arrays_concatenate
    //% block="$x=variables_get(list1) joined with $y=variables_get(list2)"
    //% blockSetVariable=list
    export function concatenate(x: Array<any>, y: Array<any>): Array<any> {
        return x.concat(y);
    }

    /**
     * Flatten an array of arrays into single value;
     * Returns the result.
     * @param items List of arrays to join
     * @returns Concatenated array instance
     */
    //% blockId=arrays_concatenate_many
    //% block="concatenate list of arrays $items=variables_get(items)"
    //% blockSetVariable=list
    export function concatenate_many(items: Array<Array<any>>): Array<any> {
        let result: Array<any> = [];
        items.forEach((value, index) => {
            result = result.concat(value);
        })
        return result
    }

    /**
     * Sort number array using quick sort method
     * in ascending or descending order
     * @param order Enum: Ascending or Descending
     * @returns Returns sorted array instance
     */
    //% block="sort $array in order of $order"
    //% blockId=arrays_quick_sort
    //% blockSetVariable=sorted
    export function quick_sort(array: Array<number>, order: Order): Array<number> {
        if (array.length <= 1) {
            return array;
        }
        let pivot = array.pop();
        let greater: Array<number> = [];
        let lower: Array<number> = [];

        for (let i = 0; i < array.length; i++) {
            if (array[i] > pivot) {
                greater.push(array[i]);
            } else {
                lower.push(array[i]);
            }
        }
        let first_array;
        let second_array;

        if (order === Order.Ascending) {
            first_array = lower;
            second_array = greater;
        } else {
            first_array = greater;
            second_array = lower;
        }

        return quick_sort(first_array, order).concat([pivot]).concat(quick_sort(second_array, order));
    }
}