import { color } from '@core/models/color';

export interface TableItem {
    name: string,
    colors: TableItemAction,
}

export interface TableItemAction {
    create: color,
    read: color,
    update: color,
    delete: color,
}

export const listOfUserData: TableItem[] = [
    {
        name: 'script',
        colors:
            {
                create: color.white,
                read: color.blue,
                update: color.yellow,
                delete: color.white,
            },

    },
    {
        name: 'props',
        colors: {
                create: color.white,
                read: color.blue,
                update: color.white,
                delete: color.red,
            },
    },
    {
        name: 'scenes',
        colors: {
                create: color.white,
                read: color.blue,
                update: color.yellow,
                delete: color.red,
            },
    },
    {
        name: 'money',
        colors: {
                create: color.green,
                read: color.white,
                update: color.white,
                delete: color.red,
            },
    },
    {
        name: 'stunt',
        colors: {
            create: color.white,
            read: color.blue,
            update: color.yellow,
            delete: color.red,
        },
    }
];
