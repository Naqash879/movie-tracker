"use client";
import * as Tooltip from "@radix-ui/react-tooltip";

function ToolTip() {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger>Hover me</Tooltip.Trigger>
        <Tooltip.Content>Tooltip text</Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
export default ToolTip;
