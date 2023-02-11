export const Tabmenu = ({ tab, onClick }) => {
  return (
    <ul id="category_tap">
      {tab.map((menu, index) => {
        //console.log("tabmenu", index);
        return (
          <li
            key={index}
            style={{
              transition: "all 0.2s",
              color: menu.chk ? "#fff" : "#000",
              fontWeight: menu.chk ? "bold" : " ",
              backgroundColor: menu.chk ? "#bf1f1f" : "#fff",
            }}
            onClick={() => onClick(menu)}
          >
            {menu.name}
          </li>
        );
      })}
    </ul>
  );
};
