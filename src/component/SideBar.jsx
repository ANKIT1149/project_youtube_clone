
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const SideBar = ({ CategoryList, setSelectedCategory }) => {

  return (
    <Stack
      direction={"row"}
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <>
          <button
            className="category-btn"
            key={category.icon}
            style={{
              background: category.name === CategoryList && "#fc1503",
              color: "#fff",
            }}
            onClick={() => {
              setSelectedCategory(category.name);
            }}
          >
            <span
              key={category.icon}
              style={{
                color: category.name === CategoryList ? "white" : "Red",
                marginRight: "15px",
              }}
            >
              {category.icon}
            </span>
            <span
              style={{ opacity: category.name === CategoryList ? "1" : "0.8" }}
            >
              {category.name}
            </span>
          </button>
        </>
      ))}
    </Stack>
  );
};

export default SideBar;
