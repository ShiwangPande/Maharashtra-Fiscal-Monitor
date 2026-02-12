"use client";

import React from 'react';

const Disclaimer: React.FC = () => {
    return (
        <div className="bg-gray-50 border-t border-gray-200 py-12 px-6">
            <div className="max-w-4xl mx-auto text-gray-400">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-gray-500">
                    Important Disclaimers & Fair Use
                </h3>
                <div className="space-y-4 text-[11px] leading-relaxed font-normal opacity-80">
                    <p>
                        <span className="font-bold">Independent Project:</span> This dashboard is an independent citizen-led analytics project. It is <span className="text-gray-600 font-bold">not affiliated with, endorsed by, or an official publication of the Government of Maharashtra</span> or any of its departments.
                    </p>
                    <p>
                        <span className="font-bold">Data Accuracy:</span> While every effort has been made to ensure the accuracy of the data presented, all figures are sourced from public documents including the <span className="italic">Maharashtra State Budget 2025-26</span> and <span className="italic">PRS Legislative Research</span>. This dashboard should be used for informational and educational purposes only and not as a substitute for official government budget documents.
                    </p>
                    <p>
                        <span className="font-bold">Scenario Assumptions:</span> The "Scenario Analysis" and "Reallocation Simulation" are based on simplified mathematical models. These are illustrative counterfactuals designed to aid public understanding of fiscal scale and do not constitute policy recommendations or predictions of actual fiscal outcomes.
                    </p>
                    <p>
                        <span className="font-bold">Neutrality Commitment:</span> This platform maintains a strictly neutral and non-partisan stance. It does not provide political commentary or advocate for specific policy changes.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Disclaimer;
