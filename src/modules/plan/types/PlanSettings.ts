import type {ExerciseType} from "@/modules/plan/types/Exercise";

export type PlanSettings = {
    cycles: number;
    exerciseTime: number;
    sitTime: number;
    exercise: ExerciseType;
}