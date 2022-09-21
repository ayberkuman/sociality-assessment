import { useState } from "react";
import { formattedDate } from "src/helpers";
import { Card } from "./Card";
import { Info } from "./Info";

type TimelineProps = {
  data: {
    status: number;
    published_at: string;
  };
};

export const Timeline = ({ data }: TimelineProps) => {
  const [days, setDays] = useState<any>(Object.keys(data));
  return (
    <div className="ml-[255px] p-6">
      <Info />
      {days.map((day: any) => {
        return <OneDayInTimeline key={day} day={day} data={data} />;
      })}
    </div>
  );
};

export const OneDayInTimeline = ({
  day,
  data,
}: {
  day: string;
  data: TimelineProps["data"];
}) => {
  const formatted = formattedDate(day);
  return (
    <div className="py-6">
      <h1 className="text-2xl text-grey ">{formatted.split("-").shift()}</h1>
      <div className="grid grid-flow-col justify-start gap-6 py-4">
        {data[day as keyof object].map((post: any, i: number) => {
          return <Card key={i} {...post} />;
        })}
      </div>
    </div>
  );
};
