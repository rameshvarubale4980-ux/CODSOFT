import Card from "./card";

const Jobs = ({ result }) => {
  return (
    <div className="grid gap-4">
      {result.length > 0 ? (
        result.map((job) => <Card key={job.id} data={job} />)
      ) : (
        <p className="text-gray-500">No jobs found</p>
      )}
    </div>
  );
};

export default Jobs;
