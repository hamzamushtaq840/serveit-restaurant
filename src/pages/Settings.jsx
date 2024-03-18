import React, { useState } from "react"
import General from "../components/settings/General"
import Themes from "../components/settings/Themes"
import PaymentGateway from "../components/settings/PaymentGateway"
import Social from "../components/settings/Social"
import PromoDiscount from "../components/settings/PromoDiscount"
import Reviews from "../components/settings/Reviews"

const Settings = () => {
  const [currentTab, setCurrentTab] = useState("General")

  const settingTabs = {
    General: <General />,
    Themes: <Themes />,
    PaymentGateway: <PaymentGateway />,
    Social: <Social />,
    PromoDiscount: <PromoDiscount />,
    Reviews: <Reviews />,
  }

  return (
    <div className="mx-5 my-4 flex h-full flex-col gap-4 ">
      <div className="mt-2 grid grid-cols-6 divide-x-2 divide-[#cccccc66] overflow-hidden rounded text-[#9E9E9E] shadow">
        <div
          onClick={() => {
            setCurrentTab("General")
          }}
          className={`cursor-pointer bg-white py-3 text-center ${
            currentTab === "General"
              ? "font-semibold text-primary"
              : "hover:text-primary"
          }`}>
          General
        </div>
        <div
          onClick={() => {
            setCurrentTab("Themes")
          }}
          className={`cursor-pointer bg-white py-3 text-center ${
            currentTab === "Themes"
              ? "font-semibold text-primary"
              : "hover:text-primary"
          }`}>
          Themes
        </div>
        <div
          onClick={() => {
            setCurrentTab("PaymentGateway")
          }}
          className={`cursor-pointer bg-white py-3 text-center ${
            currentTab === "PaymentGateway"
              ? "font-semibold text-primary"
              : "hover:text-primary"
          }`}>
          Payment Gateway
        </div>
        <div
          onClick={() => {
            setCurrentTab("PromoDiscount")
          }}
          className={`cursor-pointer bg-white py-3 text-center ${
            currentTab === "PromoDiscount"
              ? "font-semibold text-primary"
              : "hover:text-primary"
          }`}>
          Promo Codes
        </div>
        <div
          onClick={() => {
            setCurrentTab("Reviews")
          }}
          className={`cursor-pointer bg-white py-3 text-center ${
            currentTab === "Reviews"
              ? "font-semibold text-primary"
              : "hover:text-primary"
          }`}>
          Reviews
        </div>
        <div
          onClick={() => {
            setCurrentTab("Social")
          }}
          className={`cursor-pointer bg-white py-3 text-center ${
            currentTab === "Social"
              ? "font-semibold text-primary"
              : "hover:text-primary"
          }`}>
          Social
        </div>
      </div>

      <div className="flex-1 rounded-md bg-white p-6 shadow-lg">
        {settingTabs[currentTab]}
      </div>
    </div>
  )
}

export default Settings
