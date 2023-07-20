export type ExerciseUnit = 'counter' | 'time';

export type ExerciseType = {
    key: string;
    label: string;
    unit: ExerciseUnit;
    value: number | null;
}
