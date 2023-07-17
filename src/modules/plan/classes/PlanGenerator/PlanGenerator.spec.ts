import {expect, it, describe} from "vitest";
import PlanGenerator from "@/modules/plan/classes/PlanGenerator/PlanGenerator";

describe('PlanGenerator', () => {
    it('', () => {
        const planGenerator = new PlanGenerator({
            timeRange: 2,
            exerciseTime: 1,
            sitTime: 1,
            exercise: {
                key: 'pushups',
                label: 'Push-ups',
                unit: 'counter'
            },
        });
        expect(true).toBe(true);
    });
});