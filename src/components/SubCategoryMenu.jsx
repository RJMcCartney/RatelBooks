import React from 'react';
import Link from 'next/link';

function SubCategoryMenu({ subCategories }) {
    if (!subCategories || subCategories.length === 0) {
        return null;
    }

    return (
        <div className="border-t border-t-gray-300 bg-white">
            <div className="layout-w px-2">
                <div className="py-3">
                    <ul className="flex items-center gap-6 text-sm">
                        {subCategories.map((subCat, idx) => (
                            <Link key={subCat.path + idx} href={subCat.path} className="hover:opacity-80 transition-opacity">
                                {subCat.label}
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SubCategoryMenu;
