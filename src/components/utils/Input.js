const Input = ({ name, onChange, value }) => (
  <input
    type="text"
    className="form-control-input bg-white"
    placeholder={name}
    value={value}
    onChange={onChange}
  />
);
export default Input;
