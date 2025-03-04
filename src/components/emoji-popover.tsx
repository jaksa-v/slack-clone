import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import * as React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface EmojiPopoverProps {
  children: React.ReactNode;
  hint?: string;
  onEmojiSelect: (value: string) => void;
}

export const EmojiPopover = React.forwardRef<
  HTMLDivElement,
  EmojiPopoverProps
>(({
  children,
  hint = "Emoji",
  onEmojiSelect,
}, ref) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const onSelect = (value: EmojiClickData) => {
    onEmojiSelect(value.emoji);
    setPopoverOpen(false);

    setTimeout(() => {
      setTooltipOpen(false);
    }, 500);
  };

  return (
    <div ref={ref}>
      <TooltipProvider>
        <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
          <Tooltip
            open={tooltipOpen}
            onOpenChange={setTooltipOpen}
            delayDuration={50}
          >
            <PopoverTrigger asChild>
              <TooltipTrigger asChild>{children}</TooltipTrigger>
            </PopoverTrigger>
            <TooltipContent className="bg-black text-white border border-white/5">
              <p className="font-medium font-xs">{hint}</p>
            </TooltipContent>
          </Tooltip>
          <PopoverContent className="p-0 w-full border-none shadow-none">
            <EmojiPicker onEmojiClick={onSelect} />
          </PopoverContent>
        </Popover>
      </TooltipProvider>
    </div>
  );
});

EmojiPopover.displayName = "EmojiPopover";
