import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import { useState } from "react";
import Main from "../components/Main";
import { timeSlot } from "../assets/data";
export default function CookieStandAdmin() {
  //   const [branchesdeatail, setBranchesDeatail] = useState([]);
  const [storesSalesAllHours, setStoresSalesAllHours] = useState([]);

  function onCreate(event) {
    event.preventDefault();

    const newStore = {
      location: event.target.location.value,
      hourly_sales: getCookieSalesHourly(
        event.target.minCustomers.value,
        event.target.maxCustomers.value,
        event.target.avgCookies.value,
        timeSlot.length
      ),
    };

    setStoresSalesAllHours([...storesSalesAllHours, newStore]);
  }

  function getCookieSalesHourly(min, max, avg, length) {
    var store_sales = [];
    for (var i = 0; i < length; i++) {
      store_sales.push(Math.round(getCustomersPerHour(min, max) * avg));
    }
    return store_sales;
  }

  //   function submitBranchHandler(event) {
  //     event.preventDefault();

  //     console.log("submit");
  //     const branch = {
  //       location: event.target.location.value,
  //       minCustomers: event.target.minCustomers.value || 0,
  //       maxCustomers: event.target.maxCustomers.value || 0,
  //       avgCookies: event.target.avgCookies.value || 0,
  //       id: branchesdeatail.length + 1,
  //     };

  //     setBranchesDeatail([...branchesdeatail, branch]);
  //     console.log(branch);
  //     // setBranches((branches) => [...branches, branch]);
  //   }

  function getCustomersPerHour(min, max) {
    return Math.random() * (max - min + 1) + min;
  }

  function getHourlySubtotals(hours, sales) {
    var hourly_subtotals = [];
    for (var i = 0; i < hours.length; i++) {
      var hour_subtotal = 0;
      for (var j = 0; j < sales.length; j++) {
        hour_subtotal += sales[j].hourly_sales[i];
      }
      hourly_subtotals.push(hour_subtotal);
    }
    return hourly_subtotals;
  }

  function getTotalCookies(hourly_data) {
    var total = 0;
    for (var i = 0; i < hourly_data.length; i++) {
      total += hourly_data[i];
    }
    return total;
  }

  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Cookie Stand Admin" />

      <Main
        // branches={branchesdeatail}
        submitBranchHandler={onCreate}
        timeSlot={timeSlot}
        storesSalesAllHours={storesSalesAllHours}
        getTotalCookies={getTotalCookies}
        getHourlyAllBranchesSubtotal={getHourlySubtotals(
          timeSlot,
          storesSalesAllHours
        )}
        totalOfTotals={getTotalCookies(
          getHourlySubtotals(timeSlot, storesSalesAllHours)
        )}
      />
      <Footer branshesNumber={storesSalesAllHours.length} />
    </div>
  );
}
