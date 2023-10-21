import ApprovelTab from "../../components/Finance/ApprovelTab";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PendingRequest() {

  //usestate for get data from backend
  const [pendingRequest, setPendingRequest] = useState([]);

  useEffect(() => {
    const getData = () => {
      axios
        .get("http://localhost:5000/financeRequest/view")
        .then((res) => {
          setPendingRequest(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, [pendingRequest]);

  return (
    <div className="w-full h-full flex flex-col items-center gap-y-6">
      {pendingRequest.map((item, idm) => {
        return (
          <ApprovelTab
            id={item._id}
            userName={item.name}
            description={item.description}
            profile={item.image}
            payment={item.cost}
          />
        );
      })}
    </div>
  );
}
