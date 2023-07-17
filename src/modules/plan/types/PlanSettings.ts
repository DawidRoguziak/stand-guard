import type {ExerciseType} from "@/modules/plan/types/Exercise";

export type PlanSettings = {
    timeRange: number;
    exerciseTime: number;
    sitTime: number;
    exercise: ExerciseType;
}