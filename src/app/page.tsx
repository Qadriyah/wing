import Select from "./components/Select";
import glanceCards from "@/data/glance.json";
import GlanceCard from "./components/GlanceCard";
import OrderList from "./components/OrderList";
import GroupedBarChart from "./components/GroupedBarChart";
import BarGraph from "./components/BarGraph";
import ChartTitle from "./components/ChartTitle";

export default function Home() {
  return (
    <div className="rounded-[1.25rem] shadow-[0_5px_22px_0px_rgba(0,0,0,0.1)] bg-white pl-6 pr-6 pt-8 pb-6">
      <main className="flex flex-col gap-8">
        <div className="flex flex-col min-[450px]:flex-row justify-between">
          <h1 className="text-[2rem]">At a glance</h1>
          <Select>
            <option value="volvo">7 days</option>
            <option value="saab">6 days</option>
          </Select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {glanceCards.map((item) => (
            <GlanceCard card={item} key={item.id} />
          ))}
        </div>
        <div className="flex justify-between">
          <h1 className="text-[2rem]">Highlights</h1>
        </div>
        <div className="grid grid-cols-1 gap-6 xl:chart-section">
          <div className="rounded-[20px] border border-[#DCDFE4] p-5 h-[455px]">
            <ChartTitle title="Consultations" icon="bubble.png" />
            <BarGraph />
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 h-[455px]">
            <div className="rounded-[20px] border border-[#DCDFE4] p-5 h-[455px]">
              <ChartTitle title="VS PAST PERIOD" icon="bars.png" />
              <GroupedBarChart />
            </div>
            <div
              className="rounded-[20px] border border-[#DCDFE4] p-5 h-[455px] hidden xl:block"
              style={{
                backgroundImage: "url(/media/burner.png)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                WebkitBackgroundSize: "cover",
              }}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <h1 className="text-[2rem]">Orders</h1>
        </div>
        <OrderList />
      </main>
    </div>
  );
}
