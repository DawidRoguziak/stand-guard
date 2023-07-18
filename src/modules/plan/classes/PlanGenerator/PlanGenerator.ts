import type {PlanSettings} from "@/modules/plan/types/PlanSettings";
import type {PlanItem} from "@/modules/plan/types/PlanItem";

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
                time: this._planSettings.sitTime,
                exercise: null,
                isSitTime: true
            });

            result.push({
                time: this._planSettings.exerciseTime,
                exercise: this._planSettings.exercise,
                isSitTime: false
            });

        }

        return result;
    }
}