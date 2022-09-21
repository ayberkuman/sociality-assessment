import { ProfilePicPlaceHolder } from "@assets/svgs";

export const Info = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="flex gap-2">
        <OneInfo status="Published" color="bg-grey" />
        <OneInfo status="Scheduled" color="bg-green" />
        <OneInfo status="Need Approval" color="bg-yellow" />
        <OneInfo status="Published" color="bg-mainRed" />
        <OneInfo status="Published" color="bg-blue" />
      </div>
      <div className="bg-black">
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
