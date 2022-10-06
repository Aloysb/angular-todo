export interface ITodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean;
};

interface Deserialize<I, T> {
    deserialize(input: I): T
}

function staticImplements<T>() {
    return <U extends T>(_constructor: T) => { }
}


@staticImplements<Deserialize<Todo, ITodo>>()
export class Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean

    constructor({ userId, id, title, completed }: ITodo) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.completed = completed;
    }

    static deserialize(input: ITodo): Todo {
        return new Todo(input)
    }
} 