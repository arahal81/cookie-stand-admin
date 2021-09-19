import Form from "./Form";
import ReportTable from "./ReportTable";
export default function Main(props) {
  // const branches = {
  //   id: props.branches.id,
  //   location: props.branches.location,
  //   maxCustomers: props.branches.maxCustomers,
  //   minCustomers: props.branches.minCustomers,
  //   avgCookies: props.branches.avgCookies,
  // };
  // console.log(props.branches.avgCookies);

  return (
    <>
      <Form submitBranchHandler={props.submitBranchHandler} />

      {props.stands.length === 0 ? (

        <h2 className="mt-8 mb-8 ml-auto mr-auto text-center w-5/6">
          No Cookie Stands Available
        </h2>
      ) : (
        <ReportTable

          stands={props.stands}
          deleteHandler={props.deleteHandler}

          storesSalesAllHours={props.storesSalesAllHours}
          timeSlot={props.timeSlot}
          branches={props.branches}
          getTotalCookies={props.getTotalCookies}
          getHourlyAllBranchesSubtotal={props.getHourlyAllBranchesSubtotal}
          totalOfTotals={props.totalOfTotals}
        />
      )}
    </>

  );
}
