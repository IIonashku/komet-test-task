import { useLogsStore } from "../../store/logs.store";

const TradeDetails = () => {
  const { logs } = useLogsStore();

  return (
    <div className="h-full w-[412px] flex flex-col justify-start items-start rounded-lg bg-slate-300">
      <span className="text-xl p-4 font-bold text-zinc-700 uppercase">
        Your trade details
      </span>
      <div className="w-full h-full pl-4 pb-4 overflow-y-auto overflow-x-hidden flex flex-col justify-end items-start gap-2">
        {logs.map((log, logIndex) => {
          return (
            <span key={logIndex} className="text-base text-zinc-600">
              {log}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default TradeDetails;
