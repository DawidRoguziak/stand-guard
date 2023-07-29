import type {PlanMetaData} from "@/modules/plan/types/PlanMetaData";

export default interface CalcPlanMetaData {
    totalTimeInMinutes: number;
    MAX_TIME_FOR_PLAN: number;

    calcPlanMetaData(): PlanMetaData;

    updatePlanSettings({cycles, sitTime, exerciseTime}: {
        cycles: number,
        sitTime: number,
        exerciseTime: number
    }): void;
}