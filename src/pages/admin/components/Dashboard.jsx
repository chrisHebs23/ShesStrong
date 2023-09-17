import React from "react";
import { dummyUsers } from "../../../assets/data/dummyUsers";
import { useFetch } from "../../../hooks/useFetch";
import { useAuth } from "@clerk/clerk-react";
import { useState } from "react";
import { useEffect } from "react";

const Dashboard = () => {
  const { getToken } = useAuth();
  const [users, setUsers] = useState({});
  const [appointments, setAppointments] = useState({});
  const [stripe, setStripe] = useState({});
  const [loadingClients, setLoadingClients] = useState(false);
  const [loadingBookings, setLoadingBookings] = useState(false);
  const [loadingStripe, setLoadingStripe] = useState(false);

  const fetchUsers = async () => {
    setLoadingClients(true);
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${await getToken()}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);

        setLoadingClients(false);
      });
  };

  const fetchAppointments = async () => {
    setLoadingBookings(true);
    await fetch(`${import.meta.env.VITE_CAL_API_URL_}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data.bookings);
        setLoadingBookings(false);
      });
  };
  const fetchStripeBalance = async () => {
    setLoadingStripe(true);
    await fetch(`https://api.stripe.com/v1/balance`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_STRIPE_API}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setStripe(data.pending);
        setLoadingStripe(false);
      });
  };

  useEffect(() => {
    fetchUsers();
    fetchAppointments();
    fetchStripeBalance();
  }, []);

  return (
    <div className="flex flex-row justify-between gap-3 flex-wrap">
      <div className="bg-secondary/20 w-full md:w-[32%] flex flex-col items-center">
        {loadingClients ? (
          <>Loading</>
        ) : (
          <>
            <h3>Current Clients </h3>
            <h3>{users.length - 1}</h3>
            <button
              className="btn"
              onClick={() =>
                (window.location.href = import.meta.env.VITE_CLERK_DASHBOARD)
              }
            >
              View Clients
            </button>
          </>
        )}
      </div>
      <div className="bg-secondary/20 w-full md:w-[32%] flex flex-col items-center">
        {loadingBookings ? (
          <>loading</>
        ) : (
          <>
            <h3>Appointments</h3>
            <h3>{appointments.length}</h3>
            <button
              className="btn"
              onClick={() =>
                (window.location.href = "https://app.cal.com/bookings/upcoming")
              }
            >
              View Appointments
            </button>
          </>
        )}
      </div>
      <div className="bg-secondary/20 w-full md:w-[32%] flex flex-col items-center">
        {loadingStripe ? (
          <>loading</>
        ) : (
          <>
            <h3>Stripe Earning</h3>
            <h3>$ {stripe.length > 0 && stripe[0].amount} .00</h3>
            <button
              className="btn"
              onClick={() =>
                (window.location.href =
                  "https://dashboard.stripe.com/dashboard")
              }
            >
              View Earning
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
