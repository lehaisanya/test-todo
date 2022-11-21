import { TodoState } from './type'

export const mockTodoState: TodoState = {
    todos: [
        {
            id: 1,
            description: 'Lorem ipsum text notice',
            done: false,
        },
        {
            id: 2,
            description: 'Lorem ipsum text notice',
            done: false,
        },
        {
            id: 3,
            description: 'Lorem ipsum text notice',
            done: false,
        },
        {
            id: 4,
            description:
                'Lorem ipsum text noticsasae lond with super long text goes to ',
            done: true,
        },
    ],
    lastId: 5,
    filters: {
        pattern: '',
        onlyDone: false,
    },
}
