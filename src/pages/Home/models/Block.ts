import { Figure } from "./Figure";

export class Block {
  constructor(
    public columnStart: number,
    public rowStart: number,
    private _visible: boolean,
    private _figure: Figure
  ) {}

  get visible() {
    return this._visible;
  }

  get figure() {
    return this._figure;
  }

  makeVisible() {
    this._visible = true;
  }

  makeInvisible() {
    this._visible = false;
  }
}