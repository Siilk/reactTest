import React from "react";

export const filterData = filterParams =>
    (
        item =>
        {
            let result = true;
            Object.keys(filterParams.columns).map
            (
                modelField =>
                {
                    let columnDef = filterParams.columns[modelField];
                    result &= item[columnDef.field].startsWith(columnDef.value);
                }
            );
            return result;
        }
    );

export const deepCopy = object =>
{
    let target = {};
    for (let property in object)
    {
        if (object.hasOwnProperty(property))
        {
            let fieldVal = object[property];
            if (fieldVal !== null && typeof fieldVal === 'object')
            {
                fieldVal = deepCopy(fieldVal);
            }
            target[property] = fieldVal;
        }
    }
    return target;
};