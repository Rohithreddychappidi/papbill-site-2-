import React from 'react';
import { X, Printer, CheckCircle2, Download } from 'lucide-react';
import { CartItem } from '../types';

interface ReceiptModalProps {
  isOpen: boolean;
  onClose: () => void;
  tableNumber: number;
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
}

export const ReceiptModal: React.FC<ReceiptModalProps> = ({
  isOpen,
  onClose,
  tableNumber,
  items,
  subtotal,
  tax,
  total,
}) => {
  if (!isOpen) return null;

  const now = new Date();
  const invoiceNo = 'PB-' + Math.floor(100000 + Math.random() * 900000);
  const formattedDate = now.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
  const formattedTime = now.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#17212D] text-white">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <h3 className="font-bold text-sm">Receipt Generated Successfully</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Thermal Receipt Paper Effect */}
        <div className="p-6 bg-gray-50 max-h-[75vh] overflow-y-auto">
          <div className="receipt-paper p-6 text-[#17212D] font-mono text-xs border border-gray-200 rounded-sm">
            
            {/* Store & Header */}
            <div className="text-center pb-4 border-b border-dashed border-gray-300">
              <div className="text-base font-extrabold tracking-tight">PapBill</div>
              <div className="text-[9px] uppercase tracking-wider text-gray-500 mb-2">BY HATBRICKS POS</div>
              <div className="font-bold text-sm">VARAHI RESTAURANT</div>
              <div className="text-gray-600 text-[11px]">Anna Nagar, Chennai - 600040</div>
              <div className="text-gray-600 text-[11px]">GSTIN: 33AABCV1234F1Z8</div>
              <div className="text-gray-600 text-[11px]">Phone: +91 98765 43210</div>
            </div>

            {/* Bill Details */}
            <div className="py-2.5 border-b border-dashed border-gray-300 space-y-1 text-[11px]">
              <div className="flex justify-between">
                <span>Bill No: {invoiceNo}</span>
                <span className="font-bold">Table: {tableNumber}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Date: {formattedDate}</span>
                <span>Time: {formattedTime}</span>
              </div>
              <div className="text-gray-600">Cashier: Captain Admin</div>
            </div>

            {/* Itemized Table */}
            <div className="py-3 border-b border-dashed border-gray-300">
              <div className="grid grid-cols-12 font-bold pb-1 text-gray-600">
                <span className="col-span-6">ITEM</span>
                <span className="col-span-2 text-center">QTY</span>
                <span className="col-span-4 text-right">AMOUNT</span>
              </div>
              {items.map((item) => (
                <div key={item.id} className="grid grid-cols-12 py-1 text-[11px]">
                  <span className="col-span-6 font-medium">{item.name}</span>
                  <span className="col-span-2 text-center">{item.quantity}</span>
                  <span className="col-span-4 text-right font-medium">₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="py-2.5 border-b border-dashed border-gray-300 space-y-1 text-[11px]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>CGST (2.5%)</span>
                <span>₹{(tax / 2).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>SGST (2.5%)</span>
                <span>₹{(tax / 2).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm font-bold pt-1.5 border-t border-gray-200">
                <span>GRAND TOTAL</span>
                <span className="text-[#FF571F]">₹{total.toFixed(2)}</span>
              </div>
            </div>

            {/* Payment & UPI Note */}
            <div className="pt-4 text-center space-y-2">
              <div className="inline-block p-1 bg-white border border-gray-300 rounded">
                <div className="w-20 h-20 bg-gray-100 flex items-center justify-center text-[10px] text-gray-500 font-sans mx-auto">
                  [UPI QR Code]
                </div>
              </div>
              <p className="text-[10px] text-gray-500">Scan UPI QR to pay or tip your server</p>
              <p className="font-bold text-[11px] text-[#17212D]">THANK YOU! VISIT AGAIN</p>
              <p className="text-[9px] text-gray-400">Powered by PapBill • www.papbill.com</p>
            </div>

          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="flex items-center justify-between p-4 bg-white border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-900 transition-colors"
          >
            Close
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#17212D] hover:bg-black rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              Print Receipt
            </button>
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#FF571F] hover:bg-[#E04612] rounded-lg transition-colors"
            >
              New Order
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
