import React from 'react';
import { FORMAT_CURRENCY } from '../constants';

interface ProductCardProps {
  product: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Use override totalIncome if provided, otherwise calculate
  const totalKeuntungan = product.totalIncome !== undefined ? product.totalIncome : (product.price + product.profit);
  const actionText = product.statusText || 'Detail';
  
  return (
    <div className="bg-[var(--bg-panel)] border border-[var(--color-border-dim)] rounded-xl flex flex-row overflow-hidden shadow-2xl transition-all duration-700 group h-full relative hover:border-[var(--color-border-mid)] hover:shadow-[0_25px_50px_-12px_rgba(179,139,77,0.2)]">
      
      {/* LEFT COLUMN: PREMIUM VISUAL (60%) */}
      <div className="w-[60%] h-full relative overflow-hidden bg-black border-r border-white/5">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-all duration-[1.5s] group-hover:scale-110 opacity-75 group-hover:opacity-100 grayscale-[10%] group-hover:grayscale-0"
        />
        {/* Subtle Luxury Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/30"></div>
        
        {/* Category Label */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10">
           <span className="text-[clamp(10px,1vw,12px)] font-black text-white px-2 py-0.5 bg-black/60 backdrop-blur-md border border-white/10 tracking-[0.2em] uppercase rounded-sm shadow-lg">
             {product.label}
           </span>
        </div>
      </div>

      {/* RIGHT COLUMN: REVISED LUXURY PANEL (40%) - OPTIMIZED CONTRAST & BACKGROUND */}
      <div className="w-[40%] flex flex-col p-2.5 sm:p-4 justify-between relative bg-gradient-to-br from-[#333333] via-[#262626] to-[#1a1a1a] backdrop-blur-md shadow-[inset_0_0_30px_rgba(179,139,77,0.1)] border-l border-white/10">
        
        {/* Subtle Edge Glow Overlay */}
        <div className="absolute inset-0 pointer-events-none border border-transparent group-hover:border-[var(--accent)]/20 transition-colors duration-700"></div>

        {/* Product Title Section */}
        <div className="space-y-1 sm:space-y-1.5 relative z-10">
          <h3 className="font-brand text-[clamp(14px,2.2vw,20px)] font-bold text-[#FFFFFF] leading-[1.2] uppercase tracking-tight line-clamp-2 italic text-glow-gold [text-shadow:0_2px_4px_rgba(0,0,0,0.8)]">
            {product.name}
          </h3>
          <div className="h-[0.5px] w-full bg-gradient-to-r from-[var(--accent)] to-transparent opacity-60"></div>
        </div>

        {/* Data Matrix Grid */}
        <div className="space-y-2 sm:space-y-3 mt-1 sm:mt-2 max-[480px]:space-y-1.5 relative z-10">
          <div className="grid grid-cols-1 gap-1.5 sm:gap-2">
            <div className="flex flex-col">
              <span className="text-[clamp(10px,1.1vw,12px)] font-black text-[#E5E5E5] uppercase tracking-[0.12em] mb-0.5 opacity-90">HARGA</span>
              <span className="text-[clamp(12px,1.6vw,16px)] font-sans font-extrabold text-[#fdfcf0] tracking-tight leading-[1.35] [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]">
                {FORMAT_CURRENCY(product.price)}
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-[clamp(10px,1.1vw,12px)] font-black text-[var(--accent)] uppercase tracking-[0.12em] opacity-100">PROFIT</span>
                <span className="text-[9px] font-bold text-[var(--accent)] opacity-70">({product.commission}%)</span>
              </div>
              <span className="text-[clamp(12px,1.6vw,16px)] font-sans font-extrabold text-[#94f3b8] leading-[1.35] brightness-125 [text-shadow:0_1px_3px_rgba(0,0,0,0.9)]">
                {FORMAT_CURRENCY(product.profit)}
              </span>
            </div>
          </div>

          <div className="pt-2 sm:pt-2.5 border-t border-white/20 flex flex-col">
            <span className="text-[clamp(10px,1.1vw,12px)] font-black text-[#E5E5E5] uppercase tracking-[0.22em] mb-0.5 opacity-90">Total Pendapatan</span>
            <span className="text-[clamp(16px,2vw,22px)] font-sans font-black text-[#ffef9c] text-glow-gold leading-[1.2] [text-shadow:0_2px_8px_rgba(0,0,0,1)]">
              {FORMAT_CURRENCY(totalKeuntungan)}
            </span>
          </div>
        </div>

        {/* Minimalist Detail Action */}
        <div className="flex items-center justify-between mt-auto pt-1 sm:pt-2 group/btn cursor-pointer relative z-10">
           <span className="text-[clamp(10px,1.1vw,12px)] font-black text-[#E5E5E5] uppercase tracking-[0.25em] group-hover/btn:text-[var(--accent-bright)] transition-all opacity-100">
             {actionText}
           </span>
           <div className="flex-grow ml-2 h-[1px] bg-[var(--accent)] opacity-40 group-hover/btn:opacity-90 transition-all origin-left group-hover/btn:scale-x-110"></div>
           <svg className="w-2.5 h-2.5 ml-1 text-[var(--accent)] opacity-80 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M9 5l7 7-7 7" />
           </svg>
        </div>
      </div>
      
      {/* LUXURY DECORATIVE ELEMENT */}
      <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[var(--accent)] opacity-[0.05] rounded-full blur-2xl pointer-events-none group-hover:opacity-[0.08] transition-opacity"></div>
      <div className="absolute -top-4 -left-4 w-16 h-16 bg-[var(--accent)] opacity-[0.02] rounded-full blur-2xl pointer-events-none"></div>
    </div>
  );
};

export default ProductCard;