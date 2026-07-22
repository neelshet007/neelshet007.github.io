"use client";

import React, { useState } from "react";
import { formatGoogleDriveImageUrl } from "@/utils/googleDriveHelper";

interface ProfileImageProps {
  imageUrl?: string;
  altText?: string;
  className?: string;
}

export const ProfileImage: React.FC<ProfileImageProps> = ({
  imageUrl = "",
  altText = "Neel - Junior Full Stack & DevOps Engineer",
  className = "",
}) => {
  const [imageError, setImageError] = useState(false);
  const formattedUrl = formatGoogleDriveImageUrl(imageUrl);

  if (formattedUrl && !imageError) {
    return (
      <div className={`relative w-full h-full flex items-end justify-center overflow-hidden rounded-t-full ${className}`}>
        {/* Standard img element with object-contain and top positioning so your head and upper torso fit fully inside the semicircle */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={formattedUrl}
          alt={altText}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover object-top rounded-t-full drop-shadow-xl transition-all duration-500"
        />
      </div>
    );
  }

  // Default Vector Developer Illustration
  return (
    <div className={`relative w-full h-full flex items-end justify-center ${className}`}>
      <svg
        className="w-[#88%] h-[#92%] text-white drop-shadow-2xl max-h-[380px]"
        viewBox="0 0 240 290"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25 290C25 210 65 175 120 175C175 175 215 210 215 290H25Z"
          fill="#111111"
        />
        <path
          d="M80 180C95 205 145 205 160 180C140 215 100 215 80 180Z"
          fill="#FF7A2F"
        />
        <circle cx="120" cy="115" r="48" fill="#111111" />
        <path
          d="M72 108C72 70 92 55 120 55C148 55 168 70 168 108H72Z"
          fill="#222222"
        />
        <rect x="88" y="102" width="24" height="15" rx="4" fill="#FFFFFF" opacity="0.95" />
        <rect x="128" y="102" width="24" height="15" rx="4" fill="#FFFFFF" opacity="0.95" />
        <line x1="112" y1="109" x2="128" y2="109" stroke="#FFFFFF" strokeWidth="3" />
      </svg>
    </div>
  );
};
