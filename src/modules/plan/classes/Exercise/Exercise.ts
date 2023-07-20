import type {ExerciseType} from "@/modules/plan/types/Exercise";

export default class Exercise {
    public exerciseTypes: ExerciseType[] = [
        {
            key: 'pushups',
            label: 'Push-ups',
            unit: 'counter',
            value: null
        },
        {
            key: 'squats',
            label: 'Squats',
            unit: 'counter',
            value: null
        },
        {
            key: 'standing',
            label: 'Standing',
            unit: 'time',
            value: null
        }
    ];

    constructor() {
    }



}