import Link from 'next/link';
import React from 'react';

const Sidebar = ({ docs }) => {
  const allDocuments = docs;

  // প্যারেন্ট ডকুমেন্টগুলো ফিল্টার করুন
  const parentDocuments = allDocuments.filter(doc => doc.parent === null);

  // চাইল্ড ডকুমেন্টগুলো ফিল্টার করুন
  const childDocuments = allDocuments.filter(doc => doc.parent !== null);

  return (
    <nav className="hidden lg:mt-10 lg:block">
      <ul role="list" className="border-l border-transparent">
        {parentDocuments.map(parentDoc => (
          <li key={parentDoc.id} className="relative">
            <Link
              aria-current="page"
              className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white"
              href={`/docs/${parentDoc.id}`}
            >
              <span className="truncate">{parentDoc.title}</span>
            </Link>
            {/* চাইল্ড ডকুমেন্টগুলো রেন্ডার করুন */}
            <ul role="list" style={{ opacity: 1 }}>
              {childDocuments
                .filter(childDoc => childDoc.parent === parentDoc.id)
                .map(childDoc => (
                  <li key={childDoc.id}>
                    <Link
                      className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                      href={`/docs/${parentDoc.id}/${childDoc.id}`}
                    >
                      <span className="truncate">{childDoc.title}</span>
                    </Link>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;