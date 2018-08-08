export const filterData = filterParams =>
    (
        item =>
        {
            let result = true;
            let {vendor, model, year, engineCC, cyls} = item;
            let {modelParam, vendorParam, yearParam, engineCCParam, cylsParam} = filterParams;
            result &= model.startsWith(modelParam.value);
            result &= vendor.startsWith(vendorParam.value);
            result &= yearParam.value !== '' ? year == yearParam.value : true;
            result &= engineCCParam.value !== '' ? engineCC == engineCCParam.value : true;
            result &= cylsParam.value !== '' ? cyls == cylsParam.value : true;
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