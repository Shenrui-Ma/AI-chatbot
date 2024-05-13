"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Sidebar from "@/components/item-sidebar";
import ItemAuthor from "@/components/item-author";
import ButtonShare from "@/components/button-share";
import BubbleChiori from "@/components/bubble-chiori";
import ItemCommentCard from "@/components/item-comment-card";

export default function Test() {
  return (
    <div className="flex relative">
      <ItemAuthor />
      <ButtonShare />
      <BubbleChiori />
      <Sidebar />
    </div>
  );
}
