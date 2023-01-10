const menuLists = [
  { title: "Cameras", link: "#" },
  { title: "Laptops", link: "#" },
  { title: "Tablets", link: "#" },
  { title: "Mouse", link: "#" },
];

const ProductList = () => {
  return (
    <div className="menulist">
      {menuLists.map((menuLists, index) => (
        <div key={index}>
          <button className="bottom">{menuLists.title}</button>
        </div>
      ))}
    </div>
  );
};
export default ProductList;
