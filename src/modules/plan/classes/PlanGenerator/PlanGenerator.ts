import type {PlanSettings} from "@/modules/plan/classes/PlanGenerator/PlanSettings";

export default class PlanGenerator {
    private readonly _planSettings: PlanSettings;

    constructor(planSettings: PlanSettings) {
        this._planSettings = planSettings;
    }

    public generatePlan() {
        console.log(this._planSettings);
    }
}