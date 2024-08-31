import { Block } from "./models/Block";
import { Block as BlockComponent } from "./components/block";

interface IProps {
  blocks: Block[];
}

export function SideGrid({ blocks }: IProps) {
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
