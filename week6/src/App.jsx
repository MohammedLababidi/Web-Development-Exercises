import "bootstrap/dist/css/bootstrap.min.css";

const fruitsArray = [
  "apple",
  "apple",
  "lemon",
  "banana",
  "watermelon",
  "kiwi",
  "mango",
  "apple",
  "banana",
  "lemon",
  "watermelon",
  "kiwi",
  "mango",
  "apple",
  "banana",
  "lemon",
  "watermelon",
  "kiwi",
  "mango",
  "apple",
  "banana",
  "lemon",
  "watermelon",
  "kiwi",
  "mango",
  "apple",
  "banana",
  "lemon",
  "watermelon",
  "kiwi",
  "mango",
  "apple",
  "banana",
  "lemon",
  "watermelon",
  "kiwi",
  "mango",
  "apple",
  "banana",
  "lemon",
  "watermelon",
  "kiwi",
  "mango",
  "apple",
  "banana",
  "lemon",
  "watermelon",
  "kiwi",
  "mango",
  "apple",
];

const counts = {};

fruitsArray.forEach((fruit) => {
  if (counts[fruit]) {
    counts[fruit]++;
  } else {
    counts[fruit] = 1;
  }
});

const FruitData = Object.keys(counts).map((item, index) => ({
  id: index,
  name: item,
  count: counts[item],
  image: `./imgs/${item}.jpg`,
}));

function FruitCard({ fruit }) {
  return (
    <div
      className="card m-2"
      style={{
        width: "22rem",
        border: "3px solid black",
        opacity: "1",
        borderRadius: "30px",
      }}
    >
      <img
        style={{ borderTopLeftRadius: "30px", borderTopRightRadius: "30px" }}
        src={fruit.image}
        alt={fruit.name}
        className="card-img-top"
      />
      <hr
        className="mb-0"
        style={{ borderTop: "4px solid black", opacity: "1" }}
      />
      <div
        className="card-body"
        style={{
          backgroundColor: "lightgray",
          borderBottomLeftRadius: "30px",
          borderBottomRightRadius: "30px",
        }}
      >
        <h3>{fruit.name}</h3>
        <p className="fw-bold">count: {fruit.count}</p>
        <div className="text-end">
          <button
            className={`btn ${fruit.count > 3 ? "btn-danger" : "btn-success"}`}
            style={{
              width: "40%",
              border: "2px solid black",
              opacity: "1",
              borderRadius: "15px",
              fontWeight: "bold",
            }}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {FruitData.map((fruit) => (
        <FruitCard fruit={fruit} />
      ))}
    </div>
  );
}

export default App;
