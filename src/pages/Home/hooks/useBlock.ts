import { useCallback, useState } from "react";
import { Block } from "../models/Block";
import { Figure } from "../models/Figure";

export function useBlock(figure: Figure, amount: number = 80) {
  const [blocks, setBlocks] = useState<Array<Block>>(
    Array.from(
      { length: amount },
      (_, i) =>
        new Block(9 + ((i + 1) % 8), Math.floor((i + 1) / 8), false, figure)
    )
  );

  const getRandom = useCallback(() => {
    return Math.floor(Math.random() * blocks.length);
  }, [blocks]);

  const randomBlock = useCallback(() => {
    const allVisible = blocks.every((block) => block.visible);

    if (allVisible) return undefined;

    let random = getRandom();

    while (blocks[random].visible) {
      random = Math.floor(Math.random() * blocks.length);
    }

    return random;
  }, [blocks, getRandom]);

  const setVisible = useCallback(
    (index: number) => {
      setBlocks((prev) => {
        prev[index].makeVisible();
        return prev.map((block) => block);
      });
    },
    [setBlocks]
  );

  const showBlock = useCallback(() => {
    const random = randomBlock();

    if (random === undefined) return;

    setVisible(random);

    return random;
  }, [randomBlock, setVisible]);

  const setInvisible = useCallback(
    (index: number) => {
      setBlocks((prev) => {
        prev[index].makeInvisible();

        return prev;
      });
    },
    [setBlocks]
  );

  const hideBlock = useCallback(
    (index: number) => {
      if (index === undefined) return;

      setInvisible(index);
    },
    [setInvisible]
  );

  return { blocks, showBlock, hideBlock };
}
