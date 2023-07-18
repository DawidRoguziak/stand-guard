import type {PlanMetaData} from "@/modules/plan/types/PlanMetaData";

export default interface CalcPlanMetaData {
    calcPlanMetaData(): PlanMetaData;

    updatePlanSettings({cycles, sitTime, exerciseTime}: {
        cycles: number,
        sitTime: number,
        exerciseTime: number
    }): void;
}