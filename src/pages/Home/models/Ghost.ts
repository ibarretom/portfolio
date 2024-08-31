import { Figure } from "./Figure";
import { Point } from "./Point";

export class Ghost extends Figure {}

export const defaultGhost = new Ghost([
  new Point(10, 3),
  new Point(10, 5),
  new Point(10, 7),
  new Point(10, 9),
  new Point(11, 4),
  new Point(11, 6),
  new Point(11, 8),
  new Point(10, 11),
  new Point(11, 10),
  new Point(8, 3),
  new Point(8, 11),
  new Point(6, 3),
  new Point(6, 11),
  new Point(8, 6),
  new Point(7, 7),
  new Point(8, 8),
  new Point(5, 5),
  new Point(5, 9),
  new Point(4, 11),
  new Point(4, 3),
  new Point(3, 4),
  new Point(2, 6),
  new Point(2, 8),
  new Point(3, 10),
]);
