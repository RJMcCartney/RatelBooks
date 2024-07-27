import { CATEGORY_LINKS } from "@/lib/const/navigation";
import Link from "next/link";
import React, { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import SubCategoryMenu from "./SubCategoryMenu";

function CategoryMenu() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (category) => {
        if (selectedCategory && selectedCategory.path === category.path) {
            setSelectedCategory(null); // Deselect the category if it's already selected
        } else if (category.subCategories && category.subCategories.length > 0) {
            setSelectedCategory(category); // Select the category if it has sub-categories
        } else {
            setSelectedCategory(null); // Deselect the category if it doesn't have sub-categories
        }
    };

    return (
        <div className="border-b border-b-gray-300 bg-white">
            <div className="layout-w px-2">
                <div className="py-3">
                    <ul className="flex items-center gap-6 text-sm">
                        <Link
                            href={"/categories"}
                            className="hover:opacity-70 transition-opacity flex items-center gap-2"
                        >
                            <RiMenu2Line fontSize={18} />
                            All Category
                        </Link>
                        {CATEGORY_LINKS.map((cat, idx) => (
                            <div key={cat.path + idx} className="relative">
                                <a
                                    href={cat.path}
                                    className="hover:opacity-80 transition-opacity cursor-pointer"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleCategoryClick(cat);
                                    }}
                                >
                                    {cat.label}
                                </a>
                            </div>
                        ))}
                    </ul>
                </div>
                {selectedCategory && selectedCategory.subCategories && (
                    <SubCategoryMenu subCategories={selectedCategory.subCategories} />
                )}
            </div>
        </div>
    );
}

export default CategoryMenu;
