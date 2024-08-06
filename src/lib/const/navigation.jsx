import React, { useState } from 'react';
import { RiHeart2Fill, RiShoppingBag3Fill, RiUser3Fill } from "react-icons/ri";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"; // Importing icons for pagination

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
];

export const CATEGORY_LINKS = [
    {
        label: "Military-History",
        path: "/military-history",
        subCategories: [
            { label: "Frontier Wars", path: "/military-history/frontier-wars" },
            { label: "Anglo-Boer Wars", path: "/military-history/anglo-boer-wars" },
            { label: "Anglo-Zulu Wars", path: "/military-history/anglo-zulu-wars" },
            { label: "World War I", path: "/military-history/world-war-i" },
            { label: "World War II", path: "/military-history/world-war-ii" },
            { label: "Korean War", path: "/military-history/korean-war" },
            { label: "Vietnam War", path: "/military-history/vietnam-war" },
            { label: "Border War", path: "/military-history/border-war" },
            { label: "Rhodesian Bush War", path: "/military-history/rhodesian-bush-war" },
            { label: "Gulf Wars", path: "/military-history/gulf-wars" },
            { label: "Afghanistan War", path: "/military-history/afghanistan" },
            { label: "Other Wars", path: "/military-history/other-wars" },
            { label: "Military Hardware", path: "/military-history/military-hardware" },
            { label: "Regimental Histories", path: "/military-history/regimental-histories" },
        ],
    },
    {
        label: "Books",
        path: "/books",
        subCategories: [
            { label: "Africa", path: "/africa" },
            { label: "Africana", path: "/africana" },
            { label: "Antarctic", path: "/antarctic" },
            { label: "Anthropology", path: "/anthropology" },
            { label: "Archaeology", path: "/archaeology" },
            { label: "Paleontology", path: "/paleontology" },
            { label: "Aviation", path: "/aviation" },
            { label: "Biographies", path: "/biographies" },
            { label: "Botany", path: "/botany" },
            { label: "Geology", path: "/geology" },
            { label: "Marine Biology", path: "/marine-biology" },
            { label: "Military History", path: "/military-history" },
            { label: "Science & Engineering", path: "/science-engineering" },
            { label: "Travel & Exploration", path: "/travel-exploration" },
            { label: "Zoology", path: "/zoology" },
            { label: "Sport", path: "/sport" },
            { label: "Fiction", path: "/fiction" },
            { label: "General literature", path: "/general-literature" }
        ].sort((a, b) => a.label.localeCompare(b.label)), // Sort alphabetically
    },
    {
        label: "Memorabilia",
        path: "/memorabilia",
        subCategories: [
            { label: "Military", path: "/memorabilia/military" },
            { label: "Other", path: "/memorabilia/other" },
        ],
    },
];

const CategoryList = () => {
    const categories = [
        { label: "Africa", path: "/africa" },
        { label: "Africana", path: "/africana" },
        { label: "Antarctic", path: "/antarctic" },
        { label: "Anthropology", path: "/anthropology" },
        { label: "Archaeology", path: "/archaeology" },
        { label: "Paleontology", path: "/paleontology" },
        { label: "Aviation", path: "/aviation" },
        { label: "Biographies", path: "/biographies" },
        { label: "Botany", path: "/botany" },
        { label: "Geology", path: "/geology" },
        { label: "Marine Biology", path: "/marine-biology" },
        { label: "Military History", path: "/military-history" },
        { label: "Science & Engineering", path: "/science-engineering" },
        { label: "Travel & Exploration", path: "/travel-exploration" },
        { label: "Zoology", path: "/zoology" },
        { label: "Sport", path: "/sport" },
        { label: "Fiction", path: "/fiction" },
        { label: "General literature", path: "/general-literature" }
    ].sort((a, b) => a.label.localeCompare(b.label)); // Sort alphabetically

}