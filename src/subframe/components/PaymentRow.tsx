"use client";
/*
 * Documentation:
 * Payment Row — https://app.subframe.com/0404b3bb1ee2/library?component=Payment+Row_d3dc6efe-0c7a-456e-8135-892263521819
 * Avatar — https://app.subframe.com/0404b3bb1ee2/library?component=Avatar_bec25ae6-5010-4485-b46b-cf79e3943ab2
 * Badge — https://app.subframe.com/0404b3bb1ee2/library?component=Badge_97bdb082-1124-4dd7-a335-b14b822d0157
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { Badge } from "./Badge";

interface PaymentRowRootProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  amount?: string;
  due?: string;
  isPaid?: boolean;
  avatar?: React.ReactNode;
  className?: string;
}

const PaymentRowRoot = React.forwardRef<HTMLElement, PaymentRowRootProps>(
  function PaymentRowRoot(
    {
      name,
      amount,
      due,
      isPaid = false,
      avatar,
      className,
      ...otherProps
    }: PaymentRowRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "group/d3dc6efe flex w-full cursor-pointer items-center gap-4 border-b border-solid border-neutral-border pt-3 pr-3 pb-3 pl-3 flex-row flex-wrap hover:bg-neutral-50",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        {avatar ? <div className="flex items-center">{avatar}</div> : null}
        <div className="flex grow shrink-0 basis-0 items-center flex-row flex-wrap gap-0">
          {name ? (
            <span className="grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
              {name}
            </span>
          ) : null}
          <div className="flex items-center justify-end gap-4 flex-row flex-wrap">
            <Badge
              className={SubframeCore.twClassNames("hidden", { flex: isPaid })}
              variant="success"
            >
              Paid
            </Badge>
            <div
              className={SubframeCore.twClassNames("flex items-center gap-1", {
                hidden: isPaid,
              })}
            >
              <span className="text-caption font-caption text-subtext-color">
                Due
              </span>
              {due ? (
                <span className="text-caption font-caption text-subtext-color">
                  {due}
                </span>
              ) : null}
            </div>
            {amount ? (
              <span className="text-body-bold font-body-bold text-default-font">
                {amount}
              </span>
            ) : null}
          </div>
        </div>
        <SubframeCore.Icon
          className="text-heading-3 font-heading-3 text-neutral-400 group-hover/d3dc6efe:text-default-font"
          name="FeatherChevronRight"
        />
      </div>
    );
  }
);

export const PaymentRow = PaymentRowRoot;
