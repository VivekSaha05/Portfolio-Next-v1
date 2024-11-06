import Image from "next/image";
import { Fragment } from "react";
import { twMerge } from "tailwind-merge";

export const ToolItem = ({
  ToolboxItems,
  className,
  itemsWrapperClassName,
}: {
  ToolboxItems: {
    title: string;
    icon: string;
  }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6",
          itemsWrapperClassName
        )}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {ToolboxItems.map((item) => (
              <div
                key={item.title}
                className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={10}
                  height={10}
                  className="size-10"
                />
                <span className="font-semibold">{item.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
