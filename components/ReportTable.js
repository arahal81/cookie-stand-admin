
import { AiTwotoneDelete } from "react-icons/ai";

export default function ReportTable(props) {
  return (
    // <div className="flex flex-col mb-8 text-center">
    //   <placeholder className="mb-8">Report Table Coming Soon...</placeholder>

    //   {props.branches.map((item) => (
    //     <placeholder>
    //       id: {item.id}, location: {item.location} , maxCustomers:
    //       {item.maxCustomers} , minCustomers: {item.minCustomers}, avgCookies:
    //       {item.avgCookies},
    //     </placeholder>
    //   ))}
    // </div>

    // <table class="table-auto">
    //   <thead>
    //     <tr>
    //       <th className="border border-gray-700">Location</th>
    //       {timeSlot.map((hour) => (
    //         <th className="border border-gray-700">{hour}</th>
    //       ))}
    //       <th className="border border-gray-700">Total</th>
    //     </tr>
    //   </thead>

    <table className="p-1 mt-8 mb-8 ml-auto mr-auto w-5/6 h-auto text-center self-center">
      <thead className="bg-green-500">
        <tr>
          <th className="border border-gray-700">Location</th>
          {props.timeSlot.map((hour) => (
            <th className="border border-gray-700">{hour}</th>
          ))}
          <th className="border border-gray-700">Total</th>
        </tr>
      </thead>
      <tbody>

        {props.stands.map((stand) => (
          <tr className="odd:bg-green-400 even:bg-green-200">
            <td className=" border flex pl-2 border-gray-700">
              {stand.location}
              <span
                onClick={() => props.deleteHandler(stand)}
                className="pl-2 "
              >
                {stand && <AiTwotoneDelete />}
              </span>
            </td>
            {stand.hourly_sales.map((cookies) => (
              <td className="border border-gray-700">{cookies}</td>
            ))}
            <td className="border border-gray-700">
              {props.getTotalCookies(stand.hourly_sales)}

            </td>
          </tr>
        ))}
      </tbody>
      <tfoot className="bg-green-500">
        <th className="border border-gray-700">Totals</th>
        {props.getHourlyAllBranchesSubtotal.map((subtotal) => (
          <th className="border border-gray-700">{subtotal}</th>
        ))}
        <th className="border border-gray-700">{props.totalOfTotals} </th>

      </tfoot>
    </table>
  );
}
