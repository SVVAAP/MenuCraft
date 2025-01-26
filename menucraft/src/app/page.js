"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import NavBar from '../components/NavBar'
import SearchBar from "@/components/SearchBar";

export default function Home() {    
  const [mealTime, setMealTime] = useState("");
  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour >= 6 && currentHour < 12) {
      setMealTime("Breakfast");
    } else if (currentHour >= 12 && currentHour < 18) {
      setMealTime("Lunch");
    } else {
      setMealTime("Dinner");
    }
  }, []);
  return (
    <>
    <NavBar/>
    <h1 className=" text-center text-2xl m-2 mx-18">What would you like to eat for <span className="text-orange-600 font-bold">{mealTime}</span> ?</h1>
    <SearchBar/>
    </>
  );
}
