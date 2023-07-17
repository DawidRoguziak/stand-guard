import type {TimeHType} from "@/modules/plan/types/TimeHType";
import type {ExerciseType} from "@/modules/plan/types/Exercise";

export type PlanSettings = {
    timeH: TimeHType;
    defaultExercise: ExerciseType;
}