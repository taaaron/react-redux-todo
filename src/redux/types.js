// TO_DO Reducers
export const ADD_TODO = Symbol('ADD_TODO');
export const DELETE_TODO = Symbol('DELETE_TODO');
export const EDIT_TODO = Symbol('EDIT_TODO');

//null type
export const NULL_TYPE = Symbol('NULL_TYPE');

// Visibility Reducers
export const TOGGLE_OPTIONS = {
    ALL: Symbol('ALL'),
    DONE: Symbol('DONE'),
    TODO: Symbol('TODO')
}