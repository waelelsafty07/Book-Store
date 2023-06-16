import { forwardRef } from 'react';

const Input = forwardRef(({ name }, ref) => (
  <input
    type="text"
    className="form-control-input bg-white"
    placeholder={name}
    ref={ref}
  />
));
Input.displayName = 'Input';
export default Input;
