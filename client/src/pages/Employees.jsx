import React, { useState } from "react"
import KitchenUsers from "../components/employees/KitchenUsers"
import Servers from "../components/employees/Servers"
import TabsHeader from "../components/employees/TabsHeader"

const Employees = () => {
  const [currentTab, setCurrentTab] = useState("kitchenUsers")

  const tabs = {
    kitchenUsers: <KitchenUsers />,
    servers: <Servers />,
  }

  const renderTab = () => {
    return tabs[currentTab]
  }

  return (
    <div className="flex flex-col p-6 pt-4">
      <TabsHeader currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {renderTab()}
    </div>
  )
}

export default Employees
