import {visibilityReducer} from "../../redux/reducers/visibilityReducer";
import {TOGGLE_OPTIONS} from "../../redux/types";


describe('visibilityReducer tests', () => {
    it('should toggle to ALL visibility state given ALL visibility action passed and nonEmpty state and' +
        'toggle visibility type', () => {

        const action = {type: TOGGLE_OPTIONS.ALL};
        const state = TOGGLE_OPTIONS.TODO;

        expect(visibilityReducer(state, action)).toEqual(TOGGLE_OPTIONS.ALL);

    })

    it('should toggle to DONE visibility state given DONE visibility action passed and nonEmpty state and' +
        'toggle visibility type', () => {
        const action = {type: TOGGLE_OPTIONS.DONE};
        const state = TOGGLE_OPTIONS.TODO;

        expect(visibilityReducer(state, action)).toEqual(TOGGLE_OPTIONS.DONE);
    })

    it('should toggle to TODO visibility state given TODO visibility action passed and nonEmpty state and' +
        'toggle visibility type', () => {
        const action = {type: TOGGLE_OPTIONS.TODO};
        const state = TOGGLE_OPTIONS.ALL;

        expect(visibilityReducer(state, action)).toEqual(TOGGLE_OPTIONS.TODO);
    })
})