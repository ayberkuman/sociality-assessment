import { motion } from "framer-motion";
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
    <div className="ml-[255px] p-6 cursor-default">
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
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1 }}
        animate={{ x: 0, opacity: 1 }}
        className="grid justify-center gap-6 py-4 lg:grid-flow-col lg:justify-start"
      >
        {data[day as keyof object].map((post: any, i: number) => {
          return <Card key={i} {...post} />;
        })}
      </motion.div>
    </div>
  );
};
