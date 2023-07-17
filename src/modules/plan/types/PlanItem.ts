import type {ExerciseType} from "@/modules/plan/types/Exercise";

export type PlanItem = {
    time: number,
    exercise: ExerciseType,
    isSitTime: boolean
}