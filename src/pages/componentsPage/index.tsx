import { useState } from "react";
import { IMenuItemsProps } from "../../model/IMenuItemsProps";
import { Button, Menu } from "ms-custom-react-components-library";

const ComponentsPage = () => {
  const [menuRouteSelected, setMenuRouteSelected] = useState<string>();
  const handleItemClick = (route: string) => {
    setMenuRouteSelected(route);
  };
  const menuItems: IMenuItemsProps[] = [
    {
      label: "Home",
      onClick: () => handleItemClick("/home"),
      menuItems: [],
    },
    {
      label: "Products",
      menuItems: [
        {
          label: "Product 1",
          onClick: () => handleItemClick("/products/product_1"),
          menuItems: [],
        },
        {
          label: "Product 2",
          onClick: () => handleItemClick("/products/product_2"),
          menuItems: [],
        },
      ],
    },
    {
      label: "About",
      onClick: () => handleItemClick("/about"),
      menuItems: [],
    },
    {
      label: "Contact",
      onClick: () => handleItemClick("/contact"),
      menuItems: [],
    },
  ];

  const buttonClick = (text: String) => {
    alert(text);
  };
  return (
    <div className="py-4 px-2 grid grid-cols-5">
      {/*Menu*/}
      <div className="m-2 ">
        <div className="bg-white rounded-md h-72 shadow-md">
          <div className="p-4">
            <div className="text-base font-semibold pb-1">Menu</div>
            <div className="py-1 text-sm">
              Selected Route :{" "}
              <span className="italic">{menuRouteSelected ?? "None"}</span>
            </div>
            <div className="flex">
              <div className="w-32">
                <Menu menuItems={menuItems} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Buttons*/}
      <div className="m-2 ">
        <div className="bg-white rounded-md h-72 shadow-md">
          <div className="p-4">
            <div className="text-base font-semibold pb-1">Buttons</div>

            <div className="flex items-center flex-wrap">
              <div className="mr-2 mb-2">
                <Button
                  primary
                  onClick={() => buttonClick("Primary Button clicked!")}
                >
                  Primary
                </Button>
              </div>
              <div className="mr-2 mb-2">
                <Button
                  primary
                  transition
                  onClick={() =>
                    buttonClick("Primary Button Transition clicked!")
                  }
                >
                  Primary Transition
                </Button>
              </div>
              <div className="mr-2 mb-2">
                <Button
                  transparent
                  onClick={() => buttonClick("Transparent Button clicked!")}
                >
                  Transparent
                </Button>
              </div>
              <div className="mr-2 mb-2">
                <Button
                  transparent
                  transition
                  onClick={() =>
                    buttonClick("Transparent Transition Button clicked!")
                  }
                >
                  Transparent Transition
                </Button>
              </div>
              <div className="mr-2 mb-2">
                <Button
                  alternate
                  onClick={() => buttonClick("Alternate Button clicked!")}
                >
                  Alternate
                </Button>
              </div>
              <div className="mr-2 mb-2">
                <Button
                  alternate
                  transition
                  onClick={() =>
                    buttonClick("Alternate Transition Button clicked!")
                  }
                >
                  Alternate Transition
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-2 ">
        <div className="bg-white rounded-md h-72 shadow-md">
          <div className="p-4">
            <div className="text-base font-semibold pb-1">Component3</div>
          </div>
        </div>
      </div>
      <div className="m-2 ">
        <div className="bg-white rounded-md h-72 shadow-md">
          <div className="p-4">
            <div className="text-base font-semibold pb-1">Component4</div>
          </div>
        </div>
      </div>
      <div className="m-2 ">
        <div className="bg-white rounded-md h-72 shadow-md">
          <div className="p-4">
            <div className="text-base font-semibold pb-1">Component5</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentsPage;
