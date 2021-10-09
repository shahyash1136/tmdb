import React, { useContext } from "react";

function Consumer(WrapperComponent, contexts) {
  const Consumer = React.forwardRef((props, ref) => {
    let values = {};
    for (let c in contexts) {
      let context = contexts[c];

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

export default Consumer;
