const VENDOR_YAMAHA = 'Yamaha';
const VENDOR_KTM = 'KTM';
const VENDOR_APRILIA = 'Aprilia';
const VENDOR_DUCATI = 'Ducati';
const VENDOR_KAWASAKI = 'Kawasaki';

const URL_KAWASAKI = 'http://www.kawasaki.com';
const URL_DICATI = 'http://www.ducati.com';
const URL_APRILIA = 'http://www.aprilia.com';
const URL_KTM = 'http://www.ktm.com';
const URL_YAMAHA = 'http://www.yamaha.com';

export const hnFilterStructure =
{
    modelParam : {label: 'Model', value: ''},
    vendorParam : {label: 'Vendor', value: ''},
    yearParam: {label: 'Year', value: ''},
    engineCCParam: {label: 'Displacement', value: ''},
    cylsParam: {label: 'Cyls', value: ''}
};

export const motoFilterStructure =
{
    modelParam : {label: 'Model', value: ''},
    vendorParam : {label: 'Vendor', value: ''},
    yearParam: {label: 'Year', value: ''},
    engineCCParam: {label: 'Displacement', value: ''},
    cylsParam: {label: 'Cyls', value: ''}
};

export let motoSourceData =
[
    {
        objId: 0,
        vendor: VENDOR_YAMAHA,
        vendorUrl: URL_YAMAHA,
        model: 'MT09SP',
        year: '2018',
        engineCC: '850',
        cyls: '3'
    },
    {
        objId: 1,
        vendor: VENDOR_YAMAHA,
        vendorUrl: URL_YAMAHA,
        model: 'MT10',
        year: '2018',
        engineCC: '998',
        cyls: '4'
    },
    {
        objId: 2,
        vendor: VENDOR_KTM,
        vendorUrl: URL_KTM,
        model: 'Duke 1290',
        year: '2018',
        engineCC: '1290',
        cyls: '2',
    },
    {
        objId: 3,
        vendor: VENDOR_APRILIA,
        vendorUrl: URL_APRILIA,
        model: 'Shiver 900',
        year: '2017',
        engineCC: '890',
        cyls: '2',
    },
    {
        objId: 4,
        vendor: VENDOR_DUCATI,
        vendorUrl: URL_DICATI,
        model: 'Monster 1080',
        year: '2017',
        engineCC: '1080',
        cyls: '2',
    },
    {
        objId: 5,
        vendor: VENDOR_KAWASAKI,
        vendorUrl: URL_KAWASAKI,
        model: 'Z800',
        year: '2018',
        engineCC: '800',
        cyls: '4',
    }
];