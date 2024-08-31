import { Point } from "./Point";

export abstract class Figure {
  constructor(private _points: Point[]) {}

  get points() {
    return this._points;
  }
}
