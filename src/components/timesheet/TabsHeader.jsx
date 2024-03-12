import React from "react"

const TabsHeader = ({ currentTab, setCurrentTab }) => {
  return (
    <div className="mb-6">
      <ul className="-mb-px flex flex-wrap text-center text-sm font-medium">
        <li className="me-2">
          <button
            className={`${
              currentTab === "admins"
                ? "border-primary font-semibold text-primary"
                : "border-black/15 hover:text-gray-600"
            } min-w-[100px] border-b-2 p-2 text-base`}
            onClick={() => setCurrentTab("admins")}>
            Admins
          </button>
        </li>
        <li className="me-2">
          <button
            className={`${
              currentTab === "managers"
                ? "border-primary font-semibold text-primary"
                : "border-black/15 hover:text-gray-600"
            } min-w-[100px] border-b-2 p-2 text-base`}
            onClick={() => setCurrentTab("managers")}>
            Managers
          </button>
        </li>
        <li className="me-2">
          <button
            className={`${
              currentTab === "hosts"
                ? "border-primary font-semibold text-primary"
                : "border-black/15 hover:text-gray-600"
            } min-w-[100px] border-b-2 p-2 text-base`}
            onClick={() => setCurrentTab("hosts")}>
            Hosts
          </button>
        </li>
        <li className="me-2">
          <button
            className={`${
              currentTab === "kitchenUsers"
                ? "border-primary font-semibold text-primary"
                : "border-black/15 hover:text-gray-600"
            } min-w-[130px] border-b-2 p-2 text-base`}
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
