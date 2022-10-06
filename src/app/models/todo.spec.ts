import { ITodo, Todo } from "./todo.model";

describe('Todo.model', () => {
    it('should create a todo from the deserialize', () => {
        const mockTodo: ITodo = {
            userId: 1,
            id: 1,
            title: "Make a camomille tea",
            completed: false
        }

        const result = Todo.deserialize(mockTodo)

        expect(result).toBeInstanceOf(Todo);
        expect(result.completed).toBe(mockTodo.completed)
        expect(result.id).toBe(mockTodo.id)
        expect(result.title).toBe(mockTodo.title)
        expect(result.userId).toBe(mockTodo.userId)
    });

});