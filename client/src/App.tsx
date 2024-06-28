import BaseButton from "./components/BaseButton";
import TradeDetails from "./components/TradeDetails";
import BaseLayout from "./layout/BaseLayout";
import { useLogsStore } from "./store/logs.store";
import { Lambda } from "./types/lambda.type";
import { socket } from "./lib/socket";
import { useEffect, useState } from "react";
import { Order } from "./types/order.type";

function App() {
  const [isSocketConnected, setIsSocketConnected] = useState(socket.connected);

  const { handleClearLogs, handleAddLog } = useLogsStore();

  useEffect(() => {
    handleAddLog("Connecting to Backend...");

    const onConnect = () => setIsSocketConnected(true);

    const onDisconnect = () => setIsSocketConnected(false);

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

  const handleClick = () => {
    if (isSocketConnected) {
      handleAddLog("Connected to Backend...");

      socket.emit("pingLambdaFn", (data: Lambda) => {
        handleAddLog("Get Master Trade...");
        handleAddLog("Replicating Master Trade...");
        socket.emit("sendOrder", data, (response: Order) => {
          handleAddLog("Successfully Replicated Master Trade...");
          handleAddLog(JSON.stringify(response, null, 2));
        });
      });
    }
  };

  return (
    <BaseLayout>
      <TradeDetails />
      <div className="flex flex-col gap-2 justify-start items-start">
        <BaseButton
          title="Reset"
          bgColor="bg-red-500"
          onClick={handleClearLogs}
        />
        <BaseButton title="Trade" onClick={handleClick} />
      </div>
    </BaseLayout>
  );
}

export default App;
