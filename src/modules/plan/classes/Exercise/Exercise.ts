import type {ExerciseType} from "@/modules/plan/types/Exercise";

export default class Exercise {
    public exerciseTypes: ExerciseType[] = [
        {
            key: 'pushups',
            label: 'Push-ups',
            unit: 'counter'
        },
        {
            key: 'squats',
            label: 'Squats',
            unit: 'counter'
        },
        {
            key: 'standing',
            label: 'Standing',
            unit: 'time'
        }
    ];

    constructor() {
    }


}