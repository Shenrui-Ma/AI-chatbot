"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Sidebar from "@/components/item-sidebar";

export default function Test() {
  return (
    <div className="flex relative">
      <Sidebar />
    </div>
  );
}
