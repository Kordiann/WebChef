import { color } from '@core/models/color';

export interface TableItem {
    name: string,
    actions: TableItemAction[],
}

export interface TableItemAction {
    color: color,
    title: string,
}

export const listOfUserData: TableItem[] = [
    {
        name: 'script',
        actions: [
            {
                color: color.grey,
                title: 'create',
            },
            {
                color: color.blue,
                title: 'read',
            },
            {
                color: color.yellow,
                title: 'update',
            },
            {
                color: color.grey,
                title: 'delete',
            }
        ],
    },
    {
        name: 'props',
        actions: [
            {
                color: color.blue,
                title: 'create',
            },
            {
                color: color.red,
                title: 'create',
            },
            {
                color: color.yellow,
                title: 'update',
            },
            {
                color: color.grey,
                title: 'delete',
            }
        ]
    },
    {
        name: 'scenes',
        actions: [
            {
                color: color.blue,
                title: 'delete',
            },
            {
                color: color.red,
                title: 'delete',
            },
            {
                color: color.red,
                title: 'create',
            },
            {
                color: color.grey,
                title: 'delete',
            }
        ]
    },
    {
        name: 'money',
        actions: [
            {
                color: color.grey,
                title: 'read',
            },
            {
                color: color.grey,
                title: 'update',
            },
            {
                color: color.yellow,
                title: 'create',
            },
            {
                color: color.blue,
                title: 'create',
            }
        ]
    },
    {
        name: 'stunt',
        actions: [
            {
                color: color.grey,
                title: 'create',
            },
            {
                color: color.blue,
                title: 'read',
            },
            {
                color: color.yellow,
                title: 'update',
            },
            {
                color: color.grey,
                title: 'delete',
            }
        ]
    }
];
