import type {PlanSettings} from "@/modules/plan/types/PlanSettings";

export default class PlanGenerator {
    private readonly _planSettings: PlanSettings;

    constructor(planSettings: PlanSettings) {
        this._planSettings = planSettings;
    }

    public generatePlan(): any {
        console.log('aaa',this._planSettings);

        return this._planSettings;
    }
}