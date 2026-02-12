import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <header className="bg-primary text-white py-8 sm:py-10 px-6 shadow-md border-b-4 border-accent transition-all duration-300">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
                <div className="bg-white p-2 rounded-lg shadow-inner shrink-0 scale-90 sm:scale-100">
                    <Image
                        src="/icon.png"
                        alt="Maharashtra Fiscal Monitor Icon"
                        width={60}
                        height={60}
                        className="object-contain"
                    />
                </div>
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-1 text-white leading-tight">
                        Maharashtra Fiscal Monitor
                    </h1>
                    <p className="text-blue-100 text-[10px] sm:text-base font-medium opacity-80 uppercase tracking-widest">
                        Public Policy & Fiscal Transparency
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Header;
