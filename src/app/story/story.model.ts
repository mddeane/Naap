import { Graphic } from "../graphic/graphic.model";

export class Story {

    storyId: number;
    storyState: string;         // empty (gray), working (yellow), ready for approval (blue), approved (green)
    storyTitle: string;
    storyScript: string;
    storyEst: number;
    storyGraphics: Graphic[];

    constructor(
        storyId: number,
        storyState: string,
        storyTitle: string,
        storyScript: string,
        storyEst: number,
        storyGraphics: Graphic[]
    ) {
        this.storyId = storyId;
        this.storyState = storyState;
        this.storyTitle = storyTitle;
        this.storyScript = storyScript;
        this.storyEst = storyEst;
        this.storyGraphics = storyGraphics;
    }
}