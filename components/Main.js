export default function Main(props) {
  const branches = {
    id: props.branches.id,
    location: props.branches.location,
    maxCustomers: props.branches.maxCustomers,
    minCustomers: props.branches.minCustomers,
    avgCookies: props.branches.avgCookies,
  };
  console.log(props.branches.avgCookies);
  const jsonbranch = JSON.stringify(branches);

  return (
    <dev>
      <div className="flex flex-col mb-8 text-center">
        <placeholder className="mb-8">Report Table Coming Soon...</placeholder>
        <placeholder>{jsonbranch}</placeholder>
      </div>
    </dev>
  );
}
