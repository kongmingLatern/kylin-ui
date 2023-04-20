import { useState } from "react";
import { useStyleRegister } from "../useStyleRegister";
import { render, renderHook } from "@testing-library/react";

const MyComponent = () => {
  const [styles, setStyles] = useState({
    div: {
      color: 'red'
    }
  });
  return (
    <div style={useStyleRegister(MyComponent, styles)}>
      This is my component.
    </div>
  );
};

test('happy path', () => {
  // const { container } = render(<MyComponent />);
  // expect(container.firstChild).toMatchInlineSnapshot(`
  //   <div>
  //     This is my component.
  //   </div>
  // `);
  // const [styles, setStyles] = useState({
  //   div: {
  //     color: 'red'
  //   }
  // });

  // const { result } = renderHook(() => useStyleRegister(MyComponent, {
  //   div: {
  //     color: 'red'
  //   }
  // }));
  // expect(result.current).toMatchInlineSnapshot()

})