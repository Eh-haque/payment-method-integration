import { IProduct, ProductCard } from "./components/Shared/ProductCard";
import Skeleton from "./components/Skeleton/Skeleton";
import { useGetProductsQuery } from "./redux/services/product/product";

function App() {
  const { isLoading, data } = useGetProductsQuery(undefined);

  const products: IProduct[] = data?.data || [];
  return (
    <div className="mx-auto">
      <div className="text-center py-20 space-y-10">
        <h1 className="text-9xl font-bold">
          <span className="text-lime-600">Shurjo</span> Pay
        </h1>
        <h3 className="text-6xl font-bold">Payment Method Integration</h3>
      </div>

      {isLoading ? (
        <Skeleton />
      ) : (
        <div className="mx-auto px-4 py-16">
          <h2 className="sr-only">Products</h2>
          <div className="columns-1 md:columns-2 gap-5 divide-x">
            {products.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
