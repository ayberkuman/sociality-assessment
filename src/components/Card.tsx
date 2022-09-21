import { AddButton, CartIcon } from "@assets/svgs";
import Image from "next/image";
import { useMemo } from "react";
import { formattedDate, colorOfStatus, socialMediaChannel } from "../helpers";
import { InteractionButton, OptionButton } from "./Buttons";
import { ImageWithFallback } from "./ImageWithFallback";

type CardProps = {
  status: number;
  published_at: string;
  account: {
    channel: string;
  };
  entry: {
    image: Array<string>;
  };
};

export const Card = ({ status, account, published_at, entry }: CardProps) => {
  const memoizedDate = useMemo(
    () => formattedDate(published_at),
    [published_at]
  );

  return (
    <div className="flex max-w-[350px] border-[1px] rounded-lg m-auto">
      <div
        className={`${colorOfStatus(
          status
        )} min-w-[30px] rounded-l-lg grid place-items-center text-white font-bold`}
      >
        {socialMediaChannel(account.channel)}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center p-1 text-grey">
          <div className="">{memoizedDate}</div>
          <div className="flex gap-4">
            <OptionButton />
            <OptionButton />
            <OptionButton />
          </div>
        </div>
        <div className="p-2 text-grey font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          aspernatur.
        </div>
        <div className="">
          <ImageWithFallback
            alt="post-image"
            src={entry.image[0]}
            width={400}
            height={400}
          />
        </div>
        <div className="p-2 flex">
          {Array(4)
            .fill(true)
            .map((_, i) => (
              <InteractionButton value={0} key={i} />
            ))}
        </div>
      </div>
    </div>
  );
};
