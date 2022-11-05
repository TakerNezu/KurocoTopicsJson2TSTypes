import Convert from "../src";

describe('convert', (): void => {
    test('run', (): void => {
        const result = Convert.run("aa")
        expect(result).toBe("aa")
    })
})
