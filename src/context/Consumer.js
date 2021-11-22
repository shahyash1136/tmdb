import React, { useContext } from "react";

function Consume(WrapperComponent, contexts) {
  const Consumer = React.forwardRef((props, ref) => {
    let values = {};
    for (let key in contexts) {
      let context = contexts[key];

      // eslint-disable-next-line react-hooks/rules-of-hooks
      let value = useContext(context);
      if (context.displayName) {
        values[context.displayName] = value;
      }
    }
    return <WrapperComponent ref={ref} {...props} {...values} />;
  });

  return Consumer;
}

export default Consume;
