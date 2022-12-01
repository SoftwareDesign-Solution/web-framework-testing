import {describe, expect, it} from "vitest";
import slug from './Slug';

describe('Slug', () => {

    it('Slug', () => {

        const result: String = slug('Jack & Jill like numbers 1,2,3 and 4 and silly characters ?%.$!/');

        expect(result).toBe('aufgabe-2');

    });

})