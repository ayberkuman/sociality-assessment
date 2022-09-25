import { ProfilePicPlaceHolder } from "@assets/svgs";

export const Info = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="flex gap-3 flex-wrap">
        <OneInfo status="Published" color="bg-grey" />
        <OneInfo status="Scheduled" color="bg-green" />
        <OneInfo status="Need Approval" color="bg-yellow" />
        <OneInfo status="Error" color="bg-mainRed" />
        <OneInfo status="Notes" color="bg-blue" />
      </div>
      <div className="bg-grey grid place-items-center w-10 h-10 rounded-3xl">
        <ProfilePicPlaceHolder />
      </div>
    </header>
  );
};

export const OneInfo = ({
  status,
  color,
}: {
  status: string;
  color: string;
}) => {
  return (
    <div className="flex items-center gap-3 text-lightGrey">
      <div className={`w-4 h-4 rounded-full ${color}`}></div>
      <div>{status}</div>
    </div>
  );
};
