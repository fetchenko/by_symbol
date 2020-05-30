option

id | string | mean route path

sections | array of items |

each items can be stand alone or can have a subitems

standalone items have

id | subroute of page
symbols | symbols data that present on page

items with subitems should have sections - array of subitems

sumitems should have 
id | sumroute of page
symbols | symbols on the page


each symbols should have
id | use as translation key
size | use to manage sizes
title |
description |

MenuItem : {
    id: string,
    title: string,
    description: string,
    symbols: [
        {
            id: string,
            sizes: {
                xs: number,
                sm: number,
                md: number,
                lg: number,
            },
            areas: array
        }
    ]
}

MenuItem : {
    id: string,
    sections: [
        {
            id: string,
            title: string,
            description: string,
            symbols: [
                {
                    id: string,
                    sizes: {
                        xs: number,
                        sm: number,
                        md: number,
                        lg: number,
                    },
                }
            ]
        }
        {
            id: string,
            title: string,
            description: string,
            symbols: [
                {
                    id: string,
                    sizes: {
                        xs: number,
                        sm: number,
                        md: number,
                        lg: number,
                    },
                },
                {
                    id: string,
                    sizes: {
                        xs: number,
                        sm: number,
                        md: number,
                        lg: number,
                    },
                }
            ]
        },
    ]
}

_____

menuitem : {  
    id: string,
    symbols: [
        {
            id: string,
        },
        {
            id: string,
        }
    ]
}

menuitem : {
    id: string,
    sections: [
        {
            id: string,
        },
        {
            id: string,
        },
    ]
}