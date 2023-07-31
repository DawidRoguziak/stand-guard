import type {PlanSettings} from "@/modules/plan/types/PlanSettings";
import type {PlanItem} from "@/modules/plan/types/PlanItem";
import {v4 as uuidv4} from 'uuid';

export default class PlanGenerator {
    private readonly _planSettings: PlanSettings;

    constructor(planSettings: PlanSettings) {
        this._planSettings = planSettings;
    }

    public generatePlan(): PlanItem[] {
        const result: PlanItem[] = [];

        const timeH = this._planSettings.cycles;
        for (let i = 0; i < timeH; i++) {

            result.push({
                id: uuidv4(),
                time: this._planSettings.sitTime,
                exercise: null,
                isSitTime: true
            });

            result.push({
                id: uuidv4(),
                time: this._planSettings.exerciseTime,
                exercise: {
                    ...this._planSettings.exercise,
                    value: this._planSettings.exerciseValue
                },
                isSitTime: false
            });

        }

        return result;
    }
}