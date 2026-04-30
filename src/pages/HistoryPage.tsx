import { useEffect } from "react";

const HistoryPage = () => {
  useEffect(() => { document.title = "ERA2 — История"; }, []);
  return (
    <div className="space-y-4">
      <h1 className="text-3xl md:text-4xl">История</h1>
      <p className="text-muted-foreground">Все ваши генерации в одном месте</p>
    </div>
  );
};
export default HistoryPage;
