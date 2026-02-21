function list(props) {
  const catagory = props.catagory;
  const itemList = props.items;
  const listItem = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: <b>{item.calories}</b>
    </li>
  ));
  return (
    <>
      <h3 className="list-catagory">{catagory}</h3>
      <ol className="list-item">{listItem}</ol>
    </>
  );
}
export default list;
