import React, { useState } from "react";

const Pagination = () => {
    return (
        <>
            <nav aria-label="Page Navigation" class="mx-auto flex max-w-xs justify-between space-x-5 pb-12 mb-10">
                <a href="#" class="flex items-center space-x-1 font-medium hover:text-cyan-400" aria-label="First Page">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
                        <path fill-rule="evenodd" d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clip-rule="evenodd" />
                    </svg>
                </a>
                <a href="#" class="flex items-center space-x-1 font-medium hover:text-cyan-400" aria-label="Previous Page">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
                        <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clip-rule="evenodd" />
                    </svg>
                </a>
                <ul class="flex items-center">
                    <li><a href="#" class="px-2 text-lg font-medium text-gray-400 sm:px-3 hover:text-cyan-400" aria-label="Page 8">8</a></li>
                    <li><a href="#" class="rounded-md px-2 text-2xl font-medium bg-gradient-to-t from-purple-500 to-cyan-400 bg-clip-text text-transparent sm:px-3" aria-label="Current Page">9</a></li>
                    <li><a href="#" class="px-2 text-lg font-medium text-gray-400 sm:px-3 hover:text-cyan-400" aria-label="Page 10">10</a></li>
                </ul>
                <a href="#" class="flex items-center space-x-1 font-medium hover:text-cyan-400" aria-label="Next Page">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
                        <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
                    </svg>
                </a>
                <a href="#" class="flex items-center space-x-1 font-medium hover:text-cyan-400" aria-label="Last Page">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
                        <path fill-rule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clip-rule="evenodd" />
                    </svg>
                </a>
            </nav>

        </>
    )
}

export default Pagination;