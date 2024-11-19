import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        // dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;

// In the solution, as a first step, a ref is created inside the Form component. This ref is then "connected" to the <form> element and will be used for calling the form's reset() method whenever the (to-be-added) clear() method will be called from inside some other component:

// import React from 'react';

// export default function Form(props, ref) {
//   const form = React.useRef();

//   return (
//     <form ref={form}>
//       <p>
//         <label>Name</label>
//         <input type="text" />
//       </p>

//       <p>
//         <label>Email</label>
//         <input type="email" />
//       </p>
//       <p id="actions">
//         <button>Save</button>
//       </p>
//     </form>
//   );
// }

// To expose a clear() method that can be called from inside the App component, React's useImperativeHandle Hook must be used. This Hook allows you (= the developer) to expose an API (a collection of methods) from a component to other components.

// This useImperativeHandle Hook needs a (forwarded) ref (coming from the component that wants to access the exposed API) as a first input value.

// As a second argument, it expects to get a function that must return an object that contains all methods that should be exposed.

// Therefore, the Form component is also wrapped with forwardRef.

// Inside the object returned in the second argument function of useImperativeHandle, a clear() method is added. Inside that method, the form ref is used to access the JavaScript form object (belonging to <form>) and call its reset() method.

// import React from 'react';

// const Form = React.forwardRef(function Form(props, ref) {
//   const form = React.useRef();
//   React.useImperativeHandle(ref, () => {
//     return {
//       clear() {
//         form.current.reset();
//       },
//     };
//   });

//   return (
//     <form ref={form}>
//       <p>
//         <label>Name</label>
//         <input type="text" />
//       </p>

//       <p>
//         <label>Email</label>
//         <input type="email" />
//       </p>
//       <p id="actions">
//         <button>Save</button>
//       </p>
//     </form>
//   );
// });

// export default Form;

// Finally, the App component is edited to call that clear() method from inside handleRestart.

// A new ref (form) is created and passed via the special ref prop to the custom Form component.

// That form ref is then used to call the Form component's clear() method:

// import React from 'react';

// import Form from './Form';

// export function App() {
//   const form = React.useRef();

//   function handleRestart() {
//     form.current.clear();
//   }

//   return (
//     <div id="app">
//       <button onClick={handleRestart}>Restart</button>
//       <Form ref={form} />
//     </div>
//   );
// }
