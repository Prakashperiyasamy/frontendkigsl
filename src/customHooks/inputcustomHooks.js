import { useState } from "react";


const useFormFields =(initialState)=> {
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    function(event) {
      setValues({
        ...fields,
        [event.target.name]: event.target.value
      });
    },
     () => setValues({...initialState}),
  ];
}

export default useFormFields