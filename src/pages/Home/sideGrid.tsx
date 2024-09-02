import { Block as BlockComponent } from "./components/block";
import { useEffect, useMemo } from "react";
import { defaultGhost } from "./models/Ghost";
import { useBlock } from "./hooks/useBlock";

export function SideGrid() {
  const ghost = useMemo(() => {
    return defaultGhost;
  }, []);

  const { blocks, showBlock, hideBlock } = useBlock(ghost);

  useEffect(() => {
    let random: number | undefined;
    const interval = setTimeout(() => {
      random = showBlock();
    }, 500);

    return () => {
      clearTimeout(interval);
      if (random === undefined) return;

      setTimeout(() => {
        hideBlock(random as number);
      }, 2500);

      return;
    };
  }, [showBlock, hideBlock]);
  return (
    <>
      {blocks.map((block) => (
        <BlockComponent.Root
          block={block}
          key={`${block.columnStart}-${block.rowStart}`}
        >
          <BlockComponent.Element visible={block.visible}>
            {block.figure.points.map((point) => (
              <BlockComponent.Square point={point} key={`square-${point.x}-${point.y}`} visible={block.visible} />
            ))}
          </BlockComponent.Element>
        </BlockComponent.Root>
      ))}
    </>
  );
}
