import { Button, ListGroup, Stack } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllTables } from "../../redux/tablesRedux";
import { Link } from "react-router-dom";

const Home = () => {
  const tables = useSelector(getAllTables);

  return (
    <div>
      <h2 className="my-3">Home</h2>
      <ListGroup variant="flush">
        {tables.map((table) => (
          <ListGroup.Item key={table.id} className="px-0">
            <Stack direction="horizontal" gap={4}>
              <h3>Table {table.id}</h3>
              <p className="mb-0">
                <strong>Status:</strong> {table.status}
              </p>
              <p className="mb-0"></p>
              <Link className="ms-auto" to={`/table/${table.id}`}>
                <Button variant="primary">Show more</Button>
              </Link>
            </Stack>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Home;
