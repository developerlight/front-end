const Card = ({ data }) => {
    const { name, nim, matkul } = data;

  return (
    <div className="mt-3 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {nim}
      </p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {matkul}
      </p>
      <Button kondisi={matkul} />
    </div>
  );
};

const Button = ({ kondisi }) => {

  return (
    <button
      type="button"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      style={{
        backgroundColor: kondisi === "Backend Developer" ? "red" : " bg-blue-700 hover:bg-blue-800",
      }}
    >
      Click me
    </button>
  );
};

export default Card;
