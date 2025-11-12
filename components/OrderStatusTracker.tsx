import React, { useState, useEffect } from 'react';

const CompraRealizadaIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M3 5a1 1 0 011-1h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V5zm2 2h14v6H5V7z" />
        <path d="M2 20h20v1H2z" />
        <path d="M9 16h6v4H9z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M15.72 10.22a.75.75 0 011.06 0l2 2a.75.75 0 01-1.06 1.06l-1.47-1.47v3.44a.75.75 0 01-1.5 0v-3.44l-1.47 1.47a.75.75 0 01-1.06-1.06l2-2z" />
        <circle cx="10" cy="12" r="1" />
        <circle cx="14" cy="12" r="1" />
    </svg>
);

const PagamentoAprovadoIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2a10 10 0 100 20 10 10 0 000-20zM9 12a3 3 0 003 3h3a1 1 0 110 2H9.5a1.5 1.5 0 010-3H15a1 1 0 110-2h-3a3 3 0 00-3-3H6a1 1 0 110-2h5.5a1.5 1.5 0 010 3H9z" />
    </svg>
);

const PedidoEntregueIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 12.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM10.5 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
        <path d="M19.125 14.032a4.5 4.5 0 00-1.25-2.032c-.375-.375-1.125-.375-1.5 0s-.375 1.125 0 1.5c.31.31.564.67.73 1.065A5.5 5.5 0 0112 18a5.5 5.5 0 01-5.105-3.435c.166-.395.42-.755.73-1.065.375-.375.375-1.125 0-1.5s-1.125-.375-1.5 0a4.5 4.5 0 00-1.25 2.032A7.001 7.001 0 0012 20a7 7 0 007.125-5.968z" />
        <path d="M15 14h-1.125a.375.375 0 01-.375-.375V11.5h-2.25v2.125c0 .207-.168.375-.375.375H9a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1v-2a1 1 0 00-1-1z" />
    </svg>
);


const steps = [
    { text: "Compra realizada", Icon: CompraRealizadaIcon },
    { text: "Pagamento aprovado", Icon: PagamentoAprovadoIcon },
    { text: "Pedido entregue e disponibilizado imediatamente após a compra", Icon: PedidoEntregueIcon },
];

export const OrderStatusTracker: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveStep((prevStep) => (prevStep + 1) % (steps.length + 2)); 
        }, 2000); 

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full max-w-4xl mx-auto my-16 p-8 bg-gray-50 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Acompanhe sua Compra</h2>
            <div className="flex items-start justify-between relative">
                <div className="absolute top-5 left-0 w-full h-1 bg-gray-300" aria-hidden="true">
                     <div 
                        className="h-1 bg-green-500 transition-all duration-1000 ease-in-out" 
                        style={{ width: `${Math.min(100, (activeStep / steps.length) * 100)}%` }}
                    ></div>
                </div>

                {steps.map((step, index) => {
                    const isActive = index < activeStep;
                    const isCurrent = index === activeStep;

                    return (
                        <div key={index} className="z-10 flex flex-col items-center w-1/3 px-2">
                            <div className={`
                                w-10 h-10 rounded-full flex items-center justify-center 
                                transition-all duration-500 ease-in-out
                                ${isActive || isCurrent ? 'bg-green-500' : 'bg-gray-300'}
                                ${isCurrent ? 'animate-pulse-strong' : ''}
                            `}>
                                <step.Icon className={`w-6 h-6 transition-colors duration-500 ${isActive || isCurrent ? 'text-white' : 'text-gray-500'}`} />
                            </div>
                            <p className={`
                                text-center text-xs sm:text-sm mt-3 font-semibold 
                                transition-colors duration-500
                                ${isActive || isCurrent ? 'text-green-600' : 'text-gray-500'}
                            `}>
                                {step.text}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
