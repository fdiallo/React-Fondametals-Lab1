import type { AlertBoxProps } from "../../types";


function AlertBox({type, message}: AlertBoxProps) {
  return (
      <div>
          <h1>Alert Type:  {type}</h1>
          <strong>{message}</strong>  
    </div>
  );
}

export default AlertBox;