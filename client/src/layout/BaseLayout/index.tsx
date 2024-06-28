import { FC, ReactNode } from "react";

type BaseLayoutProps = {
  children: ReactNode;
};

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-dvh flex justify-center py-16 gap-12 items-end">
      {children}
    </div>
  );
};

export default BaseLayout;
