"use client";

import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { IoTrashBinSharp } from "react-icons/io5";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
    <div className="flex-1 p-5">
      <Table>
        <TableCaption>A list of your subscriptions.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/2">Email subscription</TableHead>
            <TableHead className="w-1/4">Date</TableHead>
            <TableHead className="w-1/4">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {emails.map(({ _id, date, email }) => {
            const blogDate = new Date(date);

            return (
              <TableRow key={_id}>
                <TableCell className="font-medium">{email}</TableCell>
                <TableCell>{blogDate.toDateString()}</TableCell>
                <TableCell>
                  <IoTrashBinSharp
                    className="w-5 h-5 cursor-pointer"
                    onClick={() => deleteEmail(_id)}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default SubscriptionsPage;
