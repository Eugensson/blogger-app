"use client";

import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

import { SubsTabelItem } from "@/components/adminComponents/SubsTabelItem";

const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const SubscriptionsPage = () => {
  const [emails, setEmails] = useState([]);

  const fetchEmails = async () => {
    const response = await axios.get(`${BaseUrl}/api/email`);
    setEmails(response.data.emails);
  };

  const deleteEmail = async (id) => {
    const response = await axios.delete("/api/email", { params: { id } });

    if (response.data.success) {
      toast.success(response.data.message);
      fetchEmails();
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <div className="flex-1 p-2 pl-16">
      <h1>All subscriptions</h1>
      <div className="relative h-[55vh] w-[900px] overflow-x-auto mt-2 border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-sm text-gray-700 text-left uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Email subscription
              </th>
              <th scope="col" className="hidden sm:block px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {emails.map(({ _id, date, email }) => (
              <SubsTabelItem
                key={_id}
                id={_id}
                date={date}
                email={email}
                deleteEmail={deleteEmail}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubscriptionsPage;
