"use client";

import { useEffect } from "react";
import { FaCheck, FaTimes, FaExclamationTriangle } from "react-icons/fa";

type AlertType = "success" | "error" | "wanning";

interface CustomAlertProps {
  show: boolean;
  type?: AlertType;
  title?: string;
  message: string;
  onOk?: () => void;
  onCancel?: () => void;
  okText?: string;
  cancelText?: string;
  hideButtons?: boolean;
  autoClose?: number; // milliseconds
}

export default function CustomAlert({
  show,
  type = "success",
  title,
  message,
  onOk,
  onCancel,
  okText = "OK",
  cancelText = "Cancel",
  hideButtons = false,
  autoClose = 3000,
}: CustomAlertProps) {
  useEffect(() => {
    if (show && hideButtons && autoClose) {
      const timer = setTimeout(() => {
        if (onOk) onOk();
      }, autoClose);
      return () => clearTimeout(timer);
    }
  }, [show, hideButtons, autoClose, onOk]);

  if (!show) return null;

  let icon = null;
  let bgGradient = "";
  let borderColor = "";
  let textColor = "";

  switch (type) {
    case "success":
      icon = <FaCheck className="w-12 h-12 text-green-500 drop-shadow-lg" />;
      bgGradient = "var(--success-bg)";
      borderColor = "var(--success-border)";
      textColor = "var(--success-text)";
      break;
    case "error":
      icon = <FaTimes className="w-12 h-12 text-red-500 drop-shadow-lg" />;
      bgGradient = "var(--error-bg)";
      borderColor = "var(--error-border)";
      textColor = "var(--error-text)";
      break;
    case "wanning":
      icon = <FaExclamationTriangle className="w-12 h-12 text-yellow-500 drop-shadow-lg" />;
      bgGradient = "var(--wanning-bg)";
      borderColor = "var(--wanning-border)";
      textColor = "var(--wanning-text)";
      break;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Blurred overlay */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>

      {/* Floating Alert Card */}
      <div
        className="relative rounded-2xl p-6 w-96 max-w-sm flex flex-col items-center shadow-2xl animate-slide-down border-2"
        style={{
          background: bgGradient,
          borderColor: borderColor,
          color: textColor,
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Icon */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110"
          style={{
            boxShadow: `0 0 20px ${borderColor}50`,
          }}
        >
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-extrabold mb-2 text-center" style={{ color: textColor }}>
          {title || type.charAt(0).toUpperCase() + type.slice(1) + "!"}
        </h3>

        {/* Message */}
        <p className="text-center text-gray-200 mb-4">{message}</p>

        {/* Buttons (optional) */}
        {!hideButtons && (
          <div className="flex gap-4">
            {onCancel && (
              <button
                onClick={onCancel}
                className="px-6 py-2 rounded-[10px] border border-white/40 text-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
              >
                {cancelText}
              </button>
            )}
            {onOk && (
              <button
                onClick={onOk}
                className="px-6 py-2 rounded-[10px] font-semibold text-white transition-transform duration-300 hover:scale-105"
                style={{ background: borderColor }}
              >
                {okText}
              </button>
            )}
          </div>
        )}

        <style jsx>{`
          @keyframes slide-down {
            0% {
              transform: translateY(-50px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
          .animate-slide-down {
            animation: slide-down 0.4s ease-out forwards;
          }
        `}</style>
      </div>
    </div>
  );
}
