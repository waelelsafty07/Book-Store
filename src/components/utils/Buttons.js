const Button = ({ buttonName, handleSubmit }) => (
  <button className="btn" type="submit" onClick={handleSubmit}>
    {buttonName}
  </button>
);

export default Button;
