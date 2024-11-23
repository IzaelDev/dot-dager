import React from "react";

const MiniWindow = ({ url } : { url : string}) => {
  return (
    <div className="h-[100svh] w-full">
      <iframe
        src={url}
        title="Mini Window"
        className="h-full w-full"
      ></iframe>
    </div>
  );
};

export default MiniWindow;