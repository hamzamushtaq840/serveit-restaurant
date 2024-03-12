import React, { useState } from "react"
import TimeSheetIndividual from "../components/timesheet/TimeSheetIndividual"
import TabsHeader from "../components/timesheet/TabsHeader"

const TimeSheet = () => {
  const [currentTab, setCurrentTab] = useState("kitchenUsers")

  const tabs = {
    admins: <TimeSheetIndividual />,
    kitchenUsers: <TimeSheetIndividual />,
    servers: <TimeSheetIndividual />,
    hosts: <TimeSheetIndividual />,
    managers: <TimeSheetIndividual />,
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

export default TimeSheet
