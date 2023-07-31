import type {ExerciseType} from "@/modules/plan/types/Exercise";

export type PlanItem = {
    id: string,
    time: number,
    exercise: ExerciseType | null
    isSitTime: boolean
}