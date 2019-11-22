export default class Todo {
    constructor(
        text,
        complete = false,
        categories = [],
        priority = 1
        )
    {
        this.id = null
        this.text = text;
        this.complete = complete;
        this.creationDate = null;
        this.completeDate = null;
        this.categories = categories;
        this.priority = priority;

        return {...this};
    }
}