import {calcTimeFromMinutes} from "@/plugins/dayjs";
import type {PlanMetaData} from "@/modules/plan/types/PlanMetaData";
import type CalcPlanMetaData from "@/modules/plan/classes/PlanComputedValues/CalcPlanMetaData";

export default class PlanCalcValues implements CalcPlanMetaData {
    private _exerciseTime: number;
    private _sitTime: number;
    private _cycles: number;


    constructor({cycles, sitTime, exerciseTime}: { cycles: number, sitTime: number, exerciseTime: number }) {
        this._exerciseTime = exerciseTime;
        this._sitTime = sitTime;
        this._cycles = cycles;
    }

    calcPlanMetaData = (): PlanMetaData => {
        return {
            estimatedTime: this._calcEstimatedTime(),
            totalSitsTime: this._calcTotalSits(),
            totalExercises: this._calcTotalExercises(),
        }
    }

    updatePlanSettings = ({cycles, sitTime, exerciseTime}: {
        cycles: number,
        sitTime: number,
        exerciseTime: number
    }): void => {
        this._exerciseTime = exerciseTime;
        this._sitTime = sitTime;
        this._cycles = cycles;
    }

    private _calcEstimatedTime = (): string => {
        return calcTimeFromMinutes((this._exerciseTime + this._sitTime) * this._cycles);
    }

    private _calcTotalSits = (): string => {
        return calcTimeFromMinutes(this._sitTime * this._cycles);
    }

    private _calcTotalExercises = (): string => {
        return calcTimeFromMinutes(this._exerciseTime * this._cycles);
    }

}