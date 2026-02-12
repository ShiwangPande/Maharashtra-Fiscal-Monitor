import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <header className="bg-primary text-white py-10 px-6 shadow-md border-b-4 border-accent">
            <div className="max-w-7xl mx-auto flex items-center gap-6">
                <div className="bg-white p-2 rounded-lg shadow-inner">
                    <Image
                        src="/icon.png"
                        alt="Maharashtra Fiscal Monitor Icon"
                        width={60}
                        height={60}
                        className="object-contain"
                    />
                </div>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight mb-1 text-white">
                        Maharashtra Fiscal Monitor
                    </h1>
                    <p className="text-blue-100 text-base font-medium opacity-80 uppercase tracking-widest">
                        Public Policy & Fiscal Transparency
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Header;
