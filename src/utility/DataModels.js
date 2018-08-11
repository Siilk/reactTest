import
{
    VENDOR_YAMAHA,
    VENDOR_KTM,
    VENDOR_APRILIA,
    VENDOR_DUCATI,
    VENDOR_KAWASAKI,
    URL_KAWASAKI,
    URL_DICATI,
    URL_APRILIA,
    URL_KTM,
    URL_YAMAHA,
    hackNewsUrl,
    largeColumn,
    medColumn,
    smallColumn
} from './StaticData'

export const hackNewsModel =
{
    idField : 'objectID',
    columns :
    {
        authorParam: {label: 'Author', value: '', field: 'author', colWidth: medColumn},
        titleParam: {label: 'Title', value: '', field: 'title', colWidth: largeColumn},
    }
};

export const motoModel =
{
    idField : 'objId',
    columns :
    {
        modelParam: {label: 'Model', value: '', field: 'model', colWidth: medColumn},
        vendorParam: {label: 'Vendor', value: '', field: 'vendor', colWidth: medColumn},
        yearParam: {label: 'Year', value: '', field: 'year', colWidth: smallColumn},
        engineCCParam: {label: 'Displacement', value: '', field: 'engineCC', colWidth: medColumn},
        cylsParam: {label: 'Cyls', value: '', field: 'cyls', colWidth: largeColumn}
    }
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

export let motoDataSource = () => motoSourceData;

export let hackNewsDataSource = () =>
{
    return motoDataSource();
};