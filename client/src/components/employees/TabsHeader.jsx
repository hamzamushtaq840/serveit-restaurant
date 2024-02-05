import React from "react"

const TabsHeader = ({ currentTab, setCurrentTab }) => {
  return (
    <div className="mb-6">
      <ul className="-mb-px flex flex-wrap text-center text-sm font-medium">
        <li className="me-2">
          <button
            className={`${
              currentTab === "kitchenUsers"
                ? "border-primary font-semibold text-primary"
                : "border-black/15 hover:text-gray-600"
            } min-w-[120px] border-b-2 p-2 text-base`}
            onClick={() => setCurrentTab("kitchenUsers")}>
            Kitchen Users
          </button>
        </li>
        <li className="me-2">
          <button
            className={`${
              currentTab === "servers"
                ? "border-primary font-semibold text-primary"
                : "border-black/15 hover:text-gray-600"
            }  min-w-[90px] border-b-2 p-2 text-base`}
            onClick={() => setCurrentTab("servers")}>
            Servers
          </button>
        </li>
      </ul>
    </div>
  )
}

export default TabsHeader
