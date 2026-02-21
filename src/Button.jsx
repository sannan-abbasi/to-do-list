function Button() {
  const HandleClick = () => window.alert("stop");

  return <button onClick={HandleClick}>Click me</button>;
}
export default Button;
