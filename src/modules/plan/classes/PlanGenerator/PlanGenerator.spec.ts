import {expect, it, describe} from "vitest";
import PlanGenerator from "@/modules/plan/classes/PlanGenerator/PlanGenerator";
import type {PlanSettings} from "@/modules/plan/types/PlanSettings";

const examplePlanSettings: PlanSettings ={
    cycles: 2,
    exerciseTime: 60,
    sitTime: 30,
    exercise: {
        key: 'pushups',
        label: 'Push-ups',
        unit: 'counter'
    },
};
describe('PlanGenerator', () => {
    it('should generate correct number of events', () => {
        const planGenerator = new PlanGenerator(examplePlanSettings);
        expect(planGenerator.generatePlan()).length(examplePlanSettings.cycles * 2);
    });

    it('should exercise event time should have exerciseTime', () => {
        const planGenerator = new PlanGenerator(examplePlanSettings);
        const plan = planGenerator.generatePlan();

        for (let i = 0; i < plan.length; i++) {
            if (!plan[i].isSitTime) {
                expect(plan[i].time).equal(examplePlanSettings.exerciseTime);
            }
        }
    });

    it('should sit event time should have exerciseTime', () => {
        const planGenerator = new PlanGenerator(examplePlanSettings);
        const plan = planGenerator.generatePlan();

        for (let i = 0; i < plan.length; i++) {
            if (plan[i].isSitTime) {
                expect(plan[i].time).equal(examplePlanSettings.sitTime);
            }
        }
    });

    it(' exercise event should have any exercise', () => {
        const planGenerator = new PlanGenerator(examplePlanSettings);
        const plan = planGenerator.generatePlan();

        for (let i = 0; i < plan.length; i++) {
            if (!plan[i].isSitTime) {
                expect(plan[i].exercise?.key).equal(examplePlanSettings.exercise.key);
            }
        }
    });

    it(' sit event should not have any exercise', () => {
        const planGenerator = new PlanGenerator(examplePlanSettings);
        const plan = planGenerator.generatePlan();

        for (let i = 0; i < plan.length; i++) {
            if (plan[i].isSitTime) {
                expect(plan[i].exercise).equal(null);
            }
        }
    });
});