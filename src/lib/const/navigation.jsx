import { RiHeart2Fill, RiShoppingBag3Fill, RiUser3Fill } from "react-icons/ri"

export const HEADER_NAV = [
    {
        label: "Profile",
        path: "/profile",
        icon: <RiUser3Fill fontSize={20} />,
    },
    {
        label: "Orders",
        path: "/orders",
        icon: <RiHeart2Fill fontSize={20} />,
    },
    {
        label: "My Cart",
        path: "/cart",
        icon: <RiShoppingBag3Fill fontSize={20} />,
    },
]

export const CATEGORY_LINKS = [
    {
        label: "Mobile Phones",
        path: "/list",
        subCategories: [
            { label: "SubCategory 1-1", path: "/category-1/sub-1" },
            { label: "SubCategory 1-2", path: "/category-1/sub-2" },
        ],
    },
    
    {
        label: "Laptops & Desktops",
        path: "/list",
    },
    {
        label: "PC Games",
        path: "/list",
    },
    {
        label: "Home & Furnitures",
        path: "/list",
    },
]
