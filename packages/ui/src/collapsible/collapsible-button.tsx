import React, { FC } from "react";
import { DropdownIcon } from "../icons";
import { cn } from "../../helpers";

type Props = {
  isOpen: boolean;
  title: string;
  hideChevron?: boolean;
  indicatorElement?: React.ReactNode;
  actionItemElement?: React.ReactNode;
};

export const CollapsibleButton: FC<Props> = (props) => {
  const { isOpen, title, hideChevron = false, indicatorElement, actionItemElement } = props;
  return (
    <div className="flex items-center justify-between gap-3 h-12 px-2.5 py-3 border-b border-custom-border-100">
      <div className="flex items-center gap-3.5">
        <div className="flex items-center gap-3">
          {!hideChevron && (
            <DropdownIcon
              className={cn("size-2 text-custom-text-300 hover:text-custom-text-200 duration-300", {
                "-rotate-90": !isOpen,
              })}
            />
          )}
          <span className="text-base text-custom-text-100 font-medium">{title}</span>
        </div>
        {indicatorElement && indicatorElement}
      </div>
      {actionItemElement && isOpen && actionItemElement}
    </div>
  );
};
